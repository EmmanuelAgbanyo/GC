import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, Image, Type, Link2, Plus, Trash2, CheckCircle, Loader } from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import { useToast } from '../context/ToastContext';
import { useAutoSave } from '../hooks/useAutoSave';

const inputCls = "w-full bg-white/5 border border-white/10 text-white placeholder-white/20 px-4 py-2.5 rounded-xl focus:outline-none focus:border-[#2ecc71]/40 focus:ring-1 focus:ring-[#2ecc71]/20 transition-all text-sm";

function Field({ label, hint, children }) {
    return (
        <div>
            <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-1.5">{label}</label>
            {children}
            {hint && <p className="text-white/20 text-xs mt-1">{hint}</p>}
        </div>
    );
}

function Section({ title, icon: Icon, children }) {
    return (
        <div className="bg-[#0f1f13] border border-white/5 rounded-2xl overflow-hidden">
            <div className="flex items-center gap-3 px-6 py-4 border-b border-white/5">
                <Icon className="w-4 h-4 text-[#2ecc71]" />
                <h2 className="text-white font-bold text-sm">{title}</h2>
            </div>
            <div className="p-6 space-y-5">{children}</div>
        </div>
    );
}

function AutoSaveIndicator({ status }) {
    // status: 'idle' | 'saving' | 'saved'
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
                    <CheckCircle className="w-3.5 h-3.5" /> Saved
                </motion.span>
            )}
        </AnimatePresence>
    );
}

export default function AdminHero() {
    const { cmsData, updateSection } = useCMS();
    const toast = useToast();
    const [local, setLocal] = useState(() => ({ ...cmsData.hero }));
    const [saveStatus, setSaveStatus] = useState('idle'); // idle | saving | saved

    // Always stay in sync if another tab updates
    useEffect(() => {
        setLocal({ ...cmsData.hero });
    }, []);

    const save = useCallback((data) => {
        setSaveStatus('saving');
        updateSection('hero', data);
        setTimeout(() => {
            setSaveStatus('saved');
            toast('Hero section updated live!', 'success');
            setTimeout(() => setSaveStatus('idle'), 2500);
        }, 300);
    }, [updateSection, toast]);

    useAutoSave(local, save, 800);

    const set = (key, val) => setLocal((p) => ({ ...p, [key]: val }));
    const setNested = (parent, key, val) => setLocal((p) => ({ ...p, [parent]: { ...p[parent], [key]: val } }));
    const addImage = () => setLocal((p) => ({ ...p, images: [...p.images, ''] }));
    const removeImage = (i) => setLocal((p) => ({ ...p, images: p.images.filter((_, idx) => idx !== i) }));
    const updateImage = (i, val) => setLocal((p) => ({ ...p, images: p.images.map((img, idx) => idx === i ? val : img) }));

    return (
        <div className="space-y-6 max-w-3xl">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Hero Section</h1>
                    <p className="text-white/40 text-sm mt-1">Changes are saved automatically as you type.</p>
                </div>
                <AutoSaveIndicator status={saveStatus} />
            </div>

            {/* Live Preview */}
            <div className="relative rounded-2xl overflow-hidden h-40 bg-[#051910] border border-white/5">
                {local.images[0] && (
                    <img src={local.images[0]} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-[#051910]/80 to-transparent" />
                <div className="absolute inset-0 flex items-center px-8">
                    <div>
                        <p className="text-white text-xl font-bold leading-tight drop-shadow">
                            {local.headline || <span className="italic text-white/30">Headline…</span>}{' '}
                            <span className="text-[#d4af37]">{local.headlineAccent || ''}</span>
                        </p>
                        <p className="text-white/60 text-xs mt-1.5 max-w-sm line-clamp-2">{local.subtext}</p>
                        <div className="flex gap-3 mt-3">
                            <span className="bg-[#2ecc71]/80 text-white text-xs font-bold px-4 py-1.5 rounded-sm">{local.ctaPrimary?.label}</span>
                            <span className="bg-white/10 border border-white/30 text-white text-xs font-bold px-4 py-1.5 rounded-sm">{local.ctaSecondary?.label}</span>
                        </div>
                    </div>
                </div>
                <div className="absolute top-3 right-3 bg-black/50 text-white/40 text-[10px] px-2 py-0.5 rounded-lg uppercase tracking-widest font-bold">Live Preview</div>
            </div>

            <Section title="Headline Text" icon={Type}>
                <div className="grid grid-cols-2 gap-4">
                    <Field label="Main Headline" hint="Displayed in white">
                        <input className={inputCls} value={local.headline} onChange={(e) => set('headline', e.target.value)} placeholder="Where Growth Meets" />
                    </Field>
                    <Field label="Accent Word" hint="Displayed in gold">
                        <input className={inputCls} value={local.headlineAccent} onChange={(e) => set('headlineAccent', e.target.value)} placeholder="Connection" />
                    </Field>
                </div>
                <Field label="Subtext / Description">
                    <textarea className={`${inputCls} h-24 resize-none`} value={local.subtext} onChange={(e) => set('subtext', e.target.value)} />
                </Field>
            </Section>

            <Section title="CTA Buttons" icon={Link2}>
                <div className="grid grid-cols-2 gap-4">
                    <Field label="Primary Button Label">
                        <input className={inputCls} value={local.ctaPrimary?.label} onChange={(e) => setNested('ctaPrimary', 'label', e.target.value)} placeholder="Join the Circle" />
                    </Field>
                    <Field label="Primary Button URL">
                        <input className={inputCls} value={local.ctaPrimary?.url} onChange={(e) => setNested('ctaPrimary', 'url', e.target.value)} placeholder="https://..." />
                    </Field>
                    <Field label="Secondary Button Label">
                        <input className={inputCls} value={local.ctaSecondary?.label} onChange={(e) => setNested('ctaSecondary', 'label', e.target.value)} />
                    </Field>
                    <Field label="Secondary Button URL">
                        <input className={inputCls} value={local.ctaSecondary?.url} onChange={(e) => setNested('ctaSecondary', 'url', e.target.value)} />
                    </Field>
                </div>
            </Section>

            <Section title="Hero Background Slideshow" icon={Image}>
                <p className="text-white/30 text-xs -mt-2">Images cycle every 5 seconds. Changes apply live to the site.</p>
                <div className="space-y-3">
                    {local.images.map((img, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-12 h-10 rounded-lg overflow-hidden bg-white/5 shrink-0 border border-white/10">
                                {img && <img src={img} alt="" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />}
                            </div>
                            <input className={`${inputCls} flex-1`} value={img} onChange={(e) => updateImage(i, e.target.value)} placeholder="/images/hero-slide.jpg" />
                            <button onClick={() => removeImage(i)} className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400/60 hover:text-red-400 transition-all shrink-0">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                    <button onClick={addImage} className="flex items-center gap-2 text-[#2ecc71]/60 hover:text-[#2ecc71] text-sm transition-colors">
                        <Plus className="w-4 h-4" /> Add image
                    </button>
                </div>
            </Section>
        </div>
    );
}
