import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Plus, Pencil, Trash2, X, Save, AlertTriangle,
    Calendar, ExternalLink, Image, Video, Users, Zap, CheckCircle2, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCMS } from '../context/CMSContext';
import { useToast } from '../context/ToastContext';

const emptyEvent = {
    type: '', title: '', tagline: '', description: '',
    location: '', date: '', time: '', action: 'Register',
    ctaUrl: '', featured: false, image: '',
    gallery: [], videoUrl: '',
    whatYouGet: [], highlights: [], whoShouldJoin: [],
};
const eventTypes = ['Mixer & Network', 'Talk Series', 'Master Class', 'Workshop', 'Webinar', 'Conference', 'Other'];
const inputCls = "w-full bg-white/5 border border-white/10 text-white placeholder-white/20 px-4 py-2.5 rounded-xl focus:outline-none focus:border-[#2ecc71]/40 focus:ring-1 focus:ring-[#2ecc71]/20 transition-all text-sm";

// ─── Modal ────────────────────────────────────────────────────────────────────
function Modal({ title, onClose, children, wide = false }) {
    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
                <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                    className={`bg-[#0d1a10] border border-white/10 rounded-2xl w-full ${wide ? 'max-w-3xl' : 'max-w-lg'} max-h-[92vh] overflow-y-auto shadow-2xl`}>
                    <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 sticky top-0 bg-[#0d1a10] z-10">
                        <h3 className="text-white font-bold text-lg">{title}</h3>
                        <button onClick={onClose} className="text-white/30 hover:text-white transition-colors"><X className="w-5 h-5" /></button>
                    </div>
                    <div className="p-6">{children}</div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

function Field({ label, hint, children }) {
    return (
        <div>
            <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-1.5">{label}</label>
            {children}
            {hint && <p className="text-white/20 text-xs mt-1">{hint}</p>}
        </div>
    );
}

// ─── Bullet list editor ───────────────────────────────────────────────────────
function BulletEditor({ label, icon: Icon, accent, items = [], onChange }) {
    const colors = {
        green: 'text-[#2ecc71] border-[#2ecc71]/20 bg-[#2ecc71]/5',
        gold: 'text-[#d4af37] border-[#d4af37]/20 bg-[#d4af37]/5',
        blue: 'text-blue-400 border-blue-400/20 bg-blue-400/5',
    };
    const cls = colors[accent] || colors.green;

    const update = (i, val) => onChange(items.map((x, idx) => idx === i ? val : x));
    const add = () => onChange([...items, '']);
    const remove = (i) => onChange(items.filter((_, idx) => idx !== i));

    return (
        <div className={`border ${cls} rounded-2xl p-5 space-y-3`}>
            <div className="flex items-center gap-2 mb-3">
                <Icon className={`w-4 h-4 ${cls.split(' ')[0]}`} />
                <span className="text-white font-bold text-sm">{label}</span>
            </div>
            {items.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                    <input
                        className={inputCls + ' flex-1'}
                        value={item}
                        onChange={(e) => update(i, e.target.value)}
                        placeholder="Add a point…"
                    />
                    <button onClick={() => remove(i)} className="p-2 rounded-lg bg-red-500/10 text-red-400/60 hover:text-red-400 hover:bg-red-500/20 transition-all shrink-0">
                        <Trash2 className="w-3.5 h-3.5" />
                    </button>
                </div>
            ))}
            <button onClick={add} className={`flex items-center gap-1.5 text-sm ${cls.split(' ')[0]} opacity-60 hover:opacity-100 transition-opacity`}>
                <Plus className="w-3.5 h-3.5" /> Add point
            </button>
        </div>
    );
}

// ─── Gallery editor ───────────────────────────────────────────────────────────
function GalleryEditor({ images = [], onChange }) {
    const add = () => onChange([...images, '']);
    const remove = (i) => onChange(images.filter((_, idx) => idx !== i));
    const update = (i, val) => onChange(images.map((img, idx) => idx === i ? val : img));

    return (
        <div className="space-y-3">
            {images.map((img, i) => (
                <div key={i} className="flex items-center gap-3">
                    <div className="w-12 h-9 rounded-lg overflow-hidden bg-white/5 border border-white/10 shrink-0">
                        {img && <img src={img} alt="" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />}
                    </div>
                    <input className={`${inputCls} flex-1`} value={img} onChange={(e) => update(i, e.target.value)} placeholder="/images/slide.jpg" />
                    <button onClick={() => remove(i)} className="p-2 rounded-lg bg-red-500/10 text-red-400/60 hover:text-red-400 hover:bg-red-500/20 transition-all shrink-0">
                        <Trash2 className="w-3.5 h-3.5" />
                    </button>
                </div>
            ))}
            <button onClick={add} className="flex items-center gap-2 text-[#2ecc71]/60 hover:text-[#2ecc71] text-sm transition-colors">
                <Plus className="w-4 h-4" /> Add image
            </button>
        </div>
    );
}

// ─── Toggle ───────────────────────────────────────────────────────────────────
function Toggle({ label, sublabel, value, onChange }) {
    return (
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onChange(!value)}>
            <div className={`w-10 h-5 rounded-full relative transition-all duration-300 ${value ? 'bg-[#2ecc71]' : 'bg-white/10'}`}>
                <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300 ${value ? 'left-5' : 'left-0.5'}`} />
            </div>
            <div>
                <p className="text-white/70 text-sm group-hover:text-white transition-colors"><strong className="text-white">{label}</strong> {sublabel}</p>
            </div>
        </div>
    );
}

// ────────────────────────────────────────────────────────────────────────────
export default function AdminEvents() {
    const { cmsData, updateSection } = useCMS();
    const toast = useToast();
    const [modal, setModal] = useState(null);
    const [editing, setEditing] = useState(emptyEvent);
    const [editId, setEditId] = useState(null);
    const [deleteId, setDeleteId] = useState(null);
    const [tab, setTab] = useState('basic'); // 'basic' | 'landing'

    const set = (key, val) => setEditing((p) => ({ ...p, [key]: val }));

    const openAdd = () => { setEditing({ ...emptyEvent, gallery: [], whatYouGet: [], highlights: [], whoShouldJoin: [] }); setEditId(null); setTab('basic'); setModal('form'); };
    const openEdit = (evt) => {
        setEditing({
            ...emptyEvent, ...evt,
            gallery: evt.gallery || [],
            whatYouGet: evt.whatYouGet || [],
            highlights: evt.highlights || [],
            whoShouldJoin: evt.whoShouldJoin || [],
        });
        setEditId(evt.id);
        setTab('basic');
        setModal('form');
    };
    const openDelete = (id) => { setDeleteId(id); setModal('delete'); };

    const handleSave = () => {
        const newEvents = editId
            ? cmsData.events.map((e) => (e.id === editId ? { ...editing, id: editId } : e))
            : [...cmsData.events, { ...editing, id: `evt-${Date.now()}` }];
        updateSection('events', newEvents);
        setModal(null);
        toast(editId ? '✅ Event updated — live on site!' : '✅ New event published live!', 'success');
    };

    const handleDelete = () => {
        updateSection('events', cmsData.events.filter((e) => e.id !== deleteId));
        setModal(null);
        toast('Event removed from site.', 'info');
    };

    const TABS = [
        { id: 'basic', label: 'Basic Info' },
        { id: 'landing', label: 'Landing Page Content' },
    ];

    return (
        <div className="space-y-6 max-w-4xl">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Events</h1>
                    <p className="text-white/40 text-sm mt-1">Each event has its own landing page. Clicking Register opens it.</p>
                </div>
                <button onClick={openAdd}
                    className="flex items-center gap-2 bg-gradient-to-r from-[#1e8449] to-[#2ecc71] text-white text-sm font-bold px-4 py-2.5 rounded-xl hover:shadow-lg hover:shadow-[#2ecc71]/20 transition-all">
                    <Plus className="w-4 h-4" /> Add Event
                </button>
            </div>

            {/* Events Table */}
            <div className="bg-[#0f1f13] border border-white/5 rounded-2xl overflow-hidden">
                <div className="hidden sm:grid grid-cols-[1fr_140px_100px_110px] gap-4 px-6 py-3 border-b border-white/5">
                    {['Event', 'Type', 'Date', 'Actions'].map((h) => (
                        <p key={h} className="text-xs font-bold text-white/30 uppercase tracking-wider">{h}</p>
                    ))}
                </div>

                {cmsData.events.length === 0 && (
                    <div className="text-center py-16 text-white/20">
                        <Calendar className="w-10 h-10 mx-auto mb-3 opacity-30" />
                        <p>No events yet. Click "Add Event" to get started.</p>
                    </div>
                )}

                {cmsData.events.map((evt, i) => (
                    <motion.div key={evt.id} layout initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
                        className="grid grid-cols-1 sm:grid-cols-[1fr_140px_100px_110px] gap-3 sm:gap-4 px-6 py-4 border-b border-white/5 last:border-0 items-center hover:bg-white/[0.02] transition-colors">
                        <div className="flex items-center gap-3 min-w-0">
                            <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/5 shrink-0 border border-white/5">
                                <img src={evt.image} alt="" className="w-full h-full object-cover" onError={(e) => e.target.style.display = 'none'} />
                            </div>
                            <div className="min-w-0">
                                <div className="flex items-center gap-2 min-w-0">
                                    <p className="text-white font-medium text-sm truncate">{evt.title}</p>
                                    {evt.featured && <Star className="w-3 h-3 text-[#d4af37] fill-[#d4af37] shrink-0" />}
                                </div>
                                <p className="text-white/30 text-xs mt-0.5 truncate">{evt.location}</p>
                            </div>
                        </div>
                        <span className="bg-[#1e8449]/20 text-[#2ecc71] text-xs font-bold px-3 py-1 rounded-full w-fit">{evt.type}</span>
                        <span className="text-white/50 text-sm">{evt.date}</span>
                        <div className="flex items-center gap-1.5">
                            <button onClick={() => openEdit(evt)} className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all" title="Edit">
                                <Pencil className="w-3.5 h-3.5" />
                            </button>
                            <Link to={`/events/${evt.id}`} target="_blank"
                                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/40 hover:text-[#2ecc71] transition-all" title="Preview Landing Page">
                                <ExternalLink className="w-3.5 h-3.5" />
                            </Link>
                            <button onClick={() => openDelete(evt.id)} className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400/60 hover:text-red-400 transition-all" title="Delete">
                                <Trash2 className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Event Form Modal — TABBED */}
            {modal === 'form' && (
                <Modal title={editId ? 'Edit Event' : 'Add New Event'} onClose={() => setModal(null)} wide>
                    {/* Tab switcher */}
                    <div className="flex border border-white/10 rounded-xl overflow-hidden mb-6">
                        {TABS.map((t) => (
                            <button key={t.id} onClick={() => setTab(t.id)}
                                className={`flex-1 py-2.5 text-sm font-bold transition-all ${tab === t.id
                                    ? 'bg-[#2ecc71]/20 text-[#2ecc71] border-b-2 border-[#2ecc71]'
                                    : 'text-white/30 hover:text-white/60'}`}>
                                {t.label}
                            </button>
                        ))}
                    </div>

                    {/* ── BASIC INFO TAB ── */}
                    {tab === 'basic' && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <Field label="Event Title" hint="Shown on cards and landing page">
                                    <input className={inputCls} value={editing.title} onChange={(e) => set('title', e.target.value)} placeholder="How To Build Wealth in 2026" autoFocus />
                                </Field>
                                <Field label="Event Type">
                                    <select className={inputCls} value={editing.type} onChange={(e) => set('type', e.target.value)}>
                                        <option value="">Select type…</option>
                                        {eventTypes.map((t) => <option key={t}>{t}</option>)}
                                    </select>
                                </Field>
                                <Field label="Tag / Subtitle" hint="Small text above the title on the landing page">
                                    <input className={inputCls} value={editing.tagline || ''} onChange={(e) => set('tagline', e.target.value)} placeholder="Professional Breakfast Meet-Up" />
                                </Field>
                                <Field label="Date">
                                    <input className={inputCls} value={editing.date} onChange={(e) => set('date', e.target.value)} placeholder="May 2026" />
                                </Field>
                                <Field label="Time">
                                    <input className={inputCls} value={editing.time || ''} onChange={(e) => set('time', e.target.value)} placeholder="9:30 AM – 12:00 PM" />
                                </Field>
                                <Field label="Location">
                                    <input className={inputCls} value={editing.location} onChange={(e) => set('location', e.target.value)} placeholder="Pistachio Restaurant, Accra" />
                                </Field>
                                <Field label="CTA Button Label">
                                    <input className={inputCls} value={editing.action || ''} onChange={(e) => set('action', e.target.value)} placeholder="Register Now" />
                                </Field>
                                <Field label="CTA URL" hint="Where the button links to">
                                    <input className={inputCls} value={editing.ctaUrl || ''} onChange={(e) => set('ctaUrl', e.target.value)} placeholder="https://chat.whatsapp.com/..." />
                                </Field>
                            </div>

                            <Field label="Short Description">
                                <textarea className={`${inputCls} h-24 resize-none`} value={editing.description} onChange={(e) => set('description', e.target.value)} placeholder="What is this event about?" />
                            </Field>

                            <Field label="Cover Image URL" hint="Main image shown on event cards and hero">
                                <input className={inputCls} value={editing.image} onChange={(e) => set('image', e.target.value)} placeholder="/images/event.jpg" />
                            </Field>

                            {editing.image && (
                                <div className="rounded-xl overflow-hidden h-36 bg-black/30 border border-white/5">
                                    <img src={editing.image} alt="preview" className="w-full h-full object-cover" />
                                </div>
                            )}

                            <Toggle
                                label="Featured Event"
                                sublabel="— shown in the 'Next Up' spotlight on the /events page"
                                value={editing.featured}
                                onChange={(v) => set('featured', v)}
                            />
                        </div>
                    )}

                    {/* ── LANDING PAGE CONTENT TAB ── */}
                    {tab === 'landing' && (
                        <div className="space-y-6">
                            <p className="text-white/30 text-sm -mt-2">All content on this tab appears on the event's dedicated landing page at <code className="text-[#2ecc71]">/events/{editId || ':id'}</code></p>

                            {/* Gallery */}
                            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 space-y-3">
                                <div className="flex items-center gap-2 mb-1">
                                    <Image className="w-4 h-4 text-[#d4af37]" />
                                    <span className="text-white font-bold text-sm">Image Gallery</span>
                                    <span className="text-white/20 text-xs ml-1">(auto-plays on the landing page)</span>
                                </div>
                                <GalleryEditor images={editing.gallery} onChange={(v) => set('gallery', v)} />
                            </div>

                            {/* Video */}
                            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <Video className="w-4 h-4 text-[#2ecc71]" />
                                    <span className="text-white font-bold text-sm">YouTube Video</span>
                                    <span className="text-white/20 text-xs ml-1">(optional)</span>
                                </div>
                                <input className={inputCls} value={editing.videoUrl || ''} onChange={(e) => set('videoUrl', e.target.value)}
                                    placeholder="https://youtube.com/watch?v=... or https://youtu.be/..." />
                            </div>

                            {/* Bullet sections */}
                            <BulletEditor
                                label="What You'll Get"
                                icon={CheckCircle2}
                                accent="green"
                                items={editing.whatYouGet}
                                onChange={(v) => set('whatYouGet', v)}
                            />
                            <BulletEditor
                                label="Program Highlights"
                                icon={Zap}
                                accent="gold"
                                items={editing.highlights}
                                onChange={(v) => set('highlights', v)}
                            />
                            <BulletEditor
                                label="Who Should Join"
                                icon={Users}
                                accent="blue"
                                items={editing.whoShouldJoin}
                                onChange={(v) => set('whoShouldJoin', v)}
                            />
                        </div>
                    )}

                    {/* Save / Cancel */}
                    <div className="flex justify-between items-center gap-3 pt-6 mt-6 border-t border-white/5">
                        <div className="flex gap-2">
                            {TABS.map((t, i) => (
                                <button key={t.id} onClick={() => setTab(t.id)}
                                    className={`px-3 py-1.5 rounded-lg text-xs transition-all ${tab === t.id ? 'text-white/30' : 'bg-white/5 text-white/40 hover:text-white'}`}>
                                    {i === 0 ? '← Basic' : 'Landing →'}
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-3">
                            <button onClick={() => setModal(null)} className="px-5 py-2.5 rounded-xl text-white/40 hover:text-white border border-white/10 text-sm transition-all">Cancel</button>
                            <button onClick={handleSave} disabled={!editing.title || !editing.type}
                                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1e8449] to-[#2ecc71] text-white text-sm font-bold hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 transition-all">
                                <Save className="w-4 h-4" /> {editId ? 'Save & Publish' : 'Add & Publish'}
                            </button>
                        </div>
                    </div>
                </Modal>
            )}

            {/* Delete confirm */}
            {modal === 'delete' && (
                <Modal title="Delete Event" onClose={() => setModal(null)}>
                    <div className="text-center space-y-4">
                        <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mx-auto">
                            <AlertTriangle className="w-7 h-7 text-red-400" />
                        </div>
                        <p className="text-white/70 text-sm">This event and its landing page will be removed immediately from the live site.</p>
                        <div className="flex justify-center gap-3">
                            <button onClick={() => setModal(null)} className="px-5 py-2.5 rounded-xl text-white/40 border border-white/10 text-sm">Cancel</button>
                            <button onClick={handleDelete} className="px-5 py-2.5 rounded-xl bg-red-500 text-white text-sm font-bold hover:bg-red-600 transition-all">Delete Event</button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}
