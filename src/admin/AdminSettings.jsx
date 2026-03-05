import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, Globe, MessageCircle, Lock, Twitter, Linkedin, Instagram, AlertTriangle, CheckCircle, Loader } from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import { useToast } from '../context/ToastContext';
import { useAutoSave } from '../hooks/useAutoSave';

const inputCls = "w-full bg-white/5 border border-white/10 text-white placeholder-white/20 px-4 py-2.5 rounded-xl focus:outline-none focus:border-[#2ecc71]/40 focus:ring-1 focus:ring-[#2ecc71]/20 transition-all text-sm";

function Field({ label, hint, icon: Icon, children }) {
    return (
        <div>
            <label className="flex items-center gap-2 text-xs font-bold text-white/40 uppercase tracking-widest mb-1.5">
                {Icon && <Icon className="w-3.5 h-3.5" />} {label}
            </label>
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
                    <CheckCircle className="w-3.5 h-3.5" /> Settings saved
                </motion.span>
            )}
        </AnimatePresence>
    );
}

export default function AdminSettings() {
    const { cmsData, updateSection, resetToDefaults } = useCMS();
    const toast = useToast();
    const [local, setLocal] = useState(() => ({ ...cmsData.settings, socialLinks: { ...cmsData.settings.socialLinks } }));
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [pwError, setPwError] = useState('');
    const [saveStatus, setSaveStatus] = useState('idle');
    const [showReset, setShowReset] = useState(false);

    const save = useCallback((data) => {
        setSaveStatus('saving');
        updateSection('settings', data);
        setTimeout(() => {
            setSaveStatus('saved');
            toast('Site settings updated live!', 'success');
            setTimeout(() => setSaveStatus('idle'), 2500);
        }, 300);
    }, [updateSection, toast]);

    useAutoSave(local, save, 1000);

    const set = (key, val) => setLocal((p) => ({ ...p, [key]: val }));
    const setSocial = (platform, val) => setLocal((p) => ({ ...p, socialLinks: { ...p.socialLinks, [platform]: val } }));

    const handlePasswordChange = () => {
        if (!newPassword) return;
        if (newPassword !== confirmPassword) { setPwError('Passwords do not match.'); return; }
        if (newPassword.length < 6) { setPwError('Minimum 6 characters required.'); return; }
        setPwError('');
        const updated = { ...local, adminPassword: newPassword };
        setLocal(updated);
        updateSection('settings', updated);
        setNewPassword('');
        setConfirmPassword('');
        toast('Admin password changed successfully.', 'success');
    };

    const handleReset = () => {
        resetToDefaults();
        setShowReset(false);
        toast('All content reset to defaults.', 'info');
    };

    return (
        <div className="space-y-6 max-w-3xl">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Settings</h1>
                    <p className="text-white/40 text-sm mt-1">Site-wide config — auto-saved as you type.</p>
                </div>
                <AutoSaveIndicator status={saveStatus} />
            </div>

            <Section title="General" icon={Globe}>
                <Field label="Site Name">
                    <input className={inputCls} value={local.siteName} onChange={(e) => set('siteName', e.target.value)} />
                </Field>
                <Field label="WhatsApp Join Link" icon={MessageCircle} hint="Used in the Navbar 'Join the Circle' button and Hero CTA">
                    <input className={inputCls} value={local.whatsappLink} onChange={(e) => set('whatsappLink', e.target.value)} placeholder="https://chat.whatsapp.com/..." />
                </Field>
                <Field label="Footer Description">
                    <textarea className={`${inputCls} h-24 resize-none`} value={local.footerDescription} onChange={(e) => set('footerDescription', e.target.value)} />
                </Field>
            </Section>

            <Section title="Social Media Links" icon={Globe}>
                <Field label="Twitter / X" icon={Twitter}>
                    <input className={inputCls} value={local.socialLinks?.twitter || ''} onChange={(e) => setSocial('twitter', e.target.value)} placeholder="https://x.com/..." />
                </Field>
                <Field label="LinkedIn" icon={Linkedin}>
                    <input className={inputCls} value={local.socialLinks?.linkedin || ''} onChange={(e) => setSocial('linkedin', e.target.value)} placeholder="https://linkedin.com/..." />
                </Field>
                <Field label="Instagram" icon={Instagram}>
                    <input className={inputCls} value={local.socialLinks?.instagram || ''} onChange={(e) => setSocial('instagram', e.target.value)} placeholder="https://instagram.com/..." />
                </Field>
            </Section>

            {/* Password section — manual save only (security) */}
            <Section title="Change Admin Password" icon={Lock}>
                <p className="text-white/30 text-xs -mt-2">Password changes require manual confirmation for security.</p>
                <div className="grid grid-cols-2 gap-4">
                    <Field label="New Password">
                        <input type="password" className={inputCls} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="New password…" />
                    </Field>
                    <Field label="Confirm Password">
                        <input type="password" className={inputCls} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm…" />
                    </Field>
                </div>
                {pwError && (
                    <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 px-4 py-3 rounded-xl">
                        <AlertTriangle className="w-4 h-4 shrink-0" /> {pwError}
                    </div>
                )}
                <button onClick={handlePasswordChange} disabled={!newPassword}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all">
                    <Lock className="w-4 h-4" /> Update Password
                </button>
            </Section>

            {/* Danger Zone */}
            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <h2 className="text-red-400 font-bold text-sm">Danger Zone</h2>
                </div>
                <p className="text-white/30 text-sm">Reset all CMS content to original defaults. Cannot be undone.</p>
                {!showReset ? (
                    <button onClick={() => setShowReset(true)} className="px-5 py-2.5 rounded-xl border border-red-500/30 text-red-400 text-sm hover:bg-red-500/10 transition-all">
                        Reset to Defaults
                    </button>
                ) : (
                    <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-white/50 text-sm">Are you absolutely sure?</span>
                        <button onClick={handleReset} className="px-4 py-2 rounded-xl bg-red-600 text-white text-sm font-bold hover:bg-red-700 transition-all">Yes, Reset Everything</button>
                        <button onClick={() => setShowReset(false)} className="px-4 py-2 rounded-xl border border-white/10 text-white/40 text-sm hover:text-white transition-all">Cancel</button>
                    </div>
                )}
            </div>
        </div>
    );
}
