import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import cmsDefaults from '../data/cmsDefaults';

const CMS_STORAGE_KEY = 'gc_cms_data';
const AUTH_STORAGE_KEY = 'gc_cms_auth';
const BROADCAST_CHANNEL_NAME = 'gc_cms_live_sync';

const CMSContext = createContext(null);

// ─── Deep merge helper ────────────────────────────────────────────────────────
function deepMerge(target, source) {
    const result = { ...target };
    for (const key of Object.keys(source)) {
        if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
            result[key] = deepMerge(target[key] || {}, source[key]);
        } else {
            result[key] = source[key];
        }
    }
    return result;
}

/**
 * Merges stored events array with default events:
 * - Stored event fields WIN (admin edits are preserved)
 * - Fields present in defaults but MISSING from stored event are filled in
 * This ensures adding new fields to cmsDefaults.js is non-breaking.
 */
function mergeEvents(storedEvents = [], defaultEvents = []) {
    return storedEvents.map((stored) => {
        const def = defaultEvents.find((d) => d.id === stored.id) || {};
        // For every key in defaults, if stored doesn't have it, inject it
        const merged = { ...stored };
        for (const key of Object.keys(def)) {
            if (merged[key] === undefined || merged[key] === null) {
                merged[key] = def[key];
            }
            // Empty arrays: fill from defaults so sections aren't blank
            if (Array.isArray(merged[key]) && merged[key].length === 0 && Array.isArray(def[key]) && def[key].length > 0) {
                merged[key] = def[key];
            }
        }
        return merged;
    });
}

function loadFromStorage() {
    try {
        const stored = localStorage.getItem(CMS_STORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            // Deep merge top-level sections (hero, settings, membership, etc.)
            const merged = deepMerge(cmsDefaults, parsed);
            // Additionally: per-event merge so new fields from defaults aren't lost
            if (Array.isArray(parsed.events)) {
                merged.events = mergeEvents(parsed.events, cmsDefaults.events);
            }
            return merged;
        }
    } catch (_) { }
    return cmsDefaults;
}

function saveToStorage(data) {
    try {
        localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(data));
    } catch (_) { }
}

export function CMSProvider({ children }) {
    const [cmsData, setCmsData] = useState(loadFromStorage);
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        try { return localStorage.getItem(AUTH_STORAGE_KEY) === 'true'; } catch (_) { return false; }
    });

    // ─── BroadcastChannel for instant cross-tab sync ──────────────────────────
    const channelRef = useRef(null);
    useEffect(() => {
        if (typeof BroadcastChannel !== 'undefined') {
            channelRef.current = new BroadcastChannel(BROADCAST_CHANNEL_NAME);
            channelRef.current.onmessage = (e) => {
                if (e.data?.type === 'CMS_UPDATE' && e.data.payload) {
                    setCmsData(e.data.payload);
                } else if (e.data?.type === 'CMS_SECTION_UPDATE') {
                    setCmsData((prev) => ({ ...prev, [e.data.section]: e.data.value }));
                }
            };
        }
        return () => channelRef.current?.close();
    }, []);

    // ─── localStorage 'storage' event fallback (works across tabs) ────────────
    useEffect(() => {
        const handleStorage = (e) => {
            if (e.key === CMS_STORAGE_KEY && e.newValue) {
                try {
                    const parsed = JSON.parse(e.newValue);
                    setCmsData(deepMerge(cmsDefaults, parsed));
                } catch (_) { }
            }
        };
        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, []);

    // ─── Persist on every cmsData change ──────────────────────────────────────
    useEffect(() => {
        saveToStorage(cmsData);
    }, [cmsData]);

    // ─── Update a single section ──────────────────────────────────────────────
    const updateSection = useCallback((section, value) => {
        setCmsData((prev) => {
            const next = { ...prev, [section]: value };
            saveToStorage(next); // immediate persist
            // Broadcast to other tabs
            channelRef.current?.postMessage({ type: 'CMS_SECTION_UPDATE', section, value });
            return next;
        });
    }, []);

    // ─── Update the entire CMS at once ───────────────────────────────────────
    const updateAll = useCallback((data) => {
        setCmsData(data);
        saveToStorage(data);
        channelRef.current?.postMessage({ type: 'CMS_UPDATE', payload: data });
    }, []);

    // ─── Auth ─────────────────────────────────────────────────────────────────
    const login = useCallback((password) => {
        if (password === cmsData.settings.adminPassword) {
            localStorage.setItem(AUTH_STORAGE_KEY, 'true');
            setIsAuthenticated(true);
            return true;
        }
        return false;
    }, [cmsData.settings.adminPassword]);

    const logout = useCallback(() => {
        localStorage.removeItem(AUTH_STORAGE_KEY);
        setIsAuthenticated(false);
    }, []);

    const resetToDefaults = useCallback(() => {
        updateAll(cmsDefaults);
    }, [updateAll]);

    return (
        <CMSContext.Provider value={{ cmsData, updateSection, updateAll, isAuthenticated, login, logout, resetToDefaults }}>
            {children}
        </CMSContext.Provider>
    );
}

export function useCMS() {
    const ctx = useContext(CMSContext);
    if (!ctx) throw new Error('useCMS must be used inside <CMSProvider>');
    return ctx;
}

export default CMSContext;
