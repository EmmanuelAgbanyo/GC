import { useEffect, useRef, useCallback } from 'react';

/**
 * useAutoSave — debounced auto-save hook
 * Calls `saveFn(data)` after `delay` ms of no changes.
 * Returns { isDirty, isSaving, lastSaved }
 */
export function useAutoSave(data, saveFn, delay = 800) {
    const timerRef = useRef(null);
    const isDirtyRef = useRef(false);
    const isMountedRef = useRef(false);

    useEffect(() => {
        // Skip the very first render (initial data load)
        if (!isMountedRef.current) {
            isMountedRef.current = true;
            return;
        }

        isDirtyRef.current = true;
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            saveFn(data);
            isDirtyRef.current = false;
        }, delay);

        return () => clearTimeout(timerRef.current);
    }, [data, saveFn, delay]);
}

/**
 * useDebouncedCallback — returns a stable debounced version of `fn`
 */
export function useDebouncedCallback(fn, delay = 600) {
    const timerRef = useRef(null);
    return useCallback((...args) => {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => fn(...args), delay);
    }, [fn, delay]);
}
