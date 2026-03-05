import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, Star, Calendar, Users, Library, MessageSquare, Loader, CheckCircle } from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import { useToast } from '../context/ToastContext';
import { useAutoSave } from '../hooks/useAutoSave';

const inputCls = "w-full bg-white/5 border border-white/10 text-white placeholder-white/20 px-4 py-2.5 rounded-xl focus:outline-none focus:border-[#2ecc71]/40 focus:ring-1 focus:ring-[#2ecc71]/20 transition-all text-sm";

const ICON_MAP = {
    Calendar: <Calendar className="w-5 h-5" />,
    Users: <Users className="w-5 h-5" />,
    Library: <Library className="w-5 h-5" />,
    MessageSquare: <MessageSquare className="w-5 h-5" />,
    Star: <Star className="w-5 h-5" />,
};
const ICON_OPTIONS = Object.keys(ICON_MAP);

function Field({ label, children }) {
    return (
        <div>
            <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-1.5">{label}</label>
            {children}
        </div>
    );
}

function AutoSaveIndicator({ status }) {
    return (
        <AnimatePresence mode="wait">
            {status === 'saving' && (
                <motion.span key="saving" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="flex items-center gap-1.5 text-white/30 text-xs">
                    <Loader className="w-3 h-3 animate-spin" /> Saving…
                </motion.span>
            )}
            {status === 'saved' && (
                <motion.span key="saved" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="flex items-center gap-1.5 text-[#2ecc71] text-xs font-medium">
                    <CheckCircle className="w-3.5 h-3.5" /> Saved live
                </motion.span>
            )}
        </AnimatePresence>
    );
}

export default function AdminMembership() {
    const { cmsData, updateSection } = useCMS();
    const toast = useToast();
    const [local, setLocal] = useState(() => ({ ...cmsData.membership, benefits: cmsData.membership.benefits.map(b => ({ ...b })) }));
    const [saveStatus, setSaveStatus] = useState('idle');

    const save = useCallback((data) => {
        setSaveStatus('saving');
        updateSection('membership', data);
        setTimeout(() => {
            setSaveStatus('saved');
            toast('Membership section updated live!', 'success');
            setTimeout(() => setSaveStatus('idle'), 2500);
        }, 300);
    }, [updateSection, toast]);

    useAutoSave(local, save, 900);

    const setTop = (key, val) => setLocal((p) => ({ ...p, [key]: val }));
    const updateBenefit = (id, key, val) =>
        setLocal((p) => ({ ...p, benefits: p.benefits.map((b) => (b.id === id ? { ...b, [key]: val } : b)) }));

    return (
        <div className="space-y-6 max-w-4xl">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Membership Benefits</h1>
                    <p className="text-white/40 text-sm mt-1">Changes are auto-saved and published live.</p>
                </div>
                <AutoSaveIndicator status={saveStatus} />
            </div>

            {/* Section Header */}
            <div className="bg-[#0f1f13] border border-white/5 rounded-2xl p-6 space-y-5">
                <p className="text-xs font-bold text-white/30 uppercase tracking-wider">Section Header</p>
                <div className="grid grid-cols-2 gap-4">
                    <Field label="Tag Badge">
                        <input className={inputCls} value={local.tagline} onChange={(e) => setTop('tagline', e.target.value)} placeholder="Premium Access" />
                    </Field>
                    <Field label="Section Headline">
                        <input className={inputCls} value={local.headline} onChange={(e) => setTop('headline', e.target.value)} />
                    </Field>
                </div>
                <Field label="Subtext">
                    <textarea className={`${inputCls} h-24 resize-none`} value={local.subtext} onChange={(e) => setTop('subtext', e.target.value)} />
                </Field>
            </div>

            {/* Benefit Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
                {local.benefits.map((benefit) => (
                    <div key={benefit.id} className="bg-[#0f1f13] border border-white/5 rounded-2xl p-6 space-y-4 hover:border-white/10 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#051910] border border-white/5 flex items-center justify-center text-[#d4af37] shrink-0">
                                {ICON_MAP[benefit.icon] || <Star className="w-5 h-5" />}
                            </div>
                            <div className="flex-1">
                                <Field label="Icon">
                                    <select className={inputCls} value={benefit.icon} onChange={(e) => updateBenefit(benefit.id, 'icon', e.target.value)}>
                                        {ICON_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                                    </select>
                                </Field>
                            </div>
                        </div>
                        <Field label="Title">
                            <input className={inputCls} value={benefit.title} onChange={(e) => updateBenefit(benefit.id, 'title', e.target.value)} />
                        </Field>
                        <Field label="Description">
                            <textarea className={`${inputCls} h-20 resize-none`} value={benefit.description} onChange={(e) => updateBenefit(benefit.id, 'description', e.target.value)} />
                        </Field>
                    </div>
                ))}
            </div>
        </div>
    );
}
