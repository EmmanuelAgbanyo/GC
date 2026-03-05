import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Pencil, Trash2, X, Save, AlertTriangle, Quote } from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import { useToast } from '../context/ToastContext';

const emptyT = { quote: '', name: '', role: '', image: '' };
const inputCls = "w-full bg-white/5 border border-white/10 text-white placeholder-white/20 px-4 py-2.5 rounded-xl focus:outline-none focus:border-[#2ecc71]/40 focus:ring-1 focus:ring-[#2ecc71]/20 transition-all text-sm";

function Modal({ title, onClose, children }) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-[#0f1f13] border border-white/10 rounded-2xl w-full max-w-lg shadow-2xl"
                >
                    <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                        <h3 className="text-white font-bold text-lg">{title}</h3>
                        <button onClick={onClose} className="text-white/30 hover:text-white transition-colors"><X className="w-5 h-5" /></button>
                    </div>
                    <div className="p-6">{children}</div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

function Field({ label, children }) {
    return (
        <div>
            <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-1.5">{label}</label>
            {children}
        </div>
    );
}

export default function AdminTestimonials() {
    const { cmsData, updateSection } = useCMS();
    const toast = useToast();
    const [modal, setModal] = useState(null);
    const [editing, setEditing] = useState(emptyT);
    const [editId, setEditId] = useState(null);
    const [deleteId, setDeleteId] = useState(null);
    const [saved, setSaved] = useState(false);

    const openAdd = () => { setEditing({ ...emptyT }); setEditId(null); setModal('form'); };
    const openEdit = (t) => { setEditing({ ...t }); setEditId(t.id); setModal('form'); };
    const openDelete = (id) => { setDeleteId(id); setModal('delete'); };

    const handleSave = () => {
        const next = editId
            ? cmsData.testimonials.map((t) => (t.id === editId ? { ...editing, id: editId } : t))
            : [...cmsData.testimonials, { ...editing, id: `tst-${Date.now()}` }];
        updateSection('testimonials', next);
        setModal(null);
        setSaved(true); setTimeout(() => setSaved(false), 2000);
        toast(editId ? 'Testimonial updated — live on site!' : 'Testimonial added — live on site!', 'success');
    };

    const handleDelete = () => {
        updateSection('testimonials', cmsData.testimonials.filter((t) => t.id !== deleteId));
        setModal(null);
        toast('Testimonial removed from site.', 'info');
    };

    return (
        <div className="space-y-6 max-w-4xl">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Testimonials</h1>
                    <p className="text-white/40 text-sm mt-1">Stories from the circle — displayed on the homepage.</p>
                </div>
                <div className="flex items-center gap-3">
                    <AnimatePresence>
                        {saved && (
                            <motion.span initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                                className="text-[#2ecc71] text-sm font-medium flex items-center gap-1.5">
                                <Save className="w-4 h-4" /> Saved!
                            </motion.span>
                        )}
                    </AnimatePresence>
                    <button onClick={openAdd}
                        className="flex items-center gap-2 bg-gradient-to-r from-[#1e8449] to-[#2ecc71] text-white text-sm font-bold px-4 py-2.5 rounded-xl hover:shadow-lg hover:shadow-[#2ecc71]/20 transition-all">
                        <Plus className="w-4 h-4" /> Add Testimonial
                    </button>
                </div>
            </div>

            {cmsData.testimonials.length === 0 && (
                <div className="text-center py-20 text-white/20">
                    <Quote className="w-10 h-10 mx-auto mb-3 opacity-30" />
                    <p>No testimonials yet.</p>
                </div>
            )}

            <div className="space-y-4">
                {cmsData.testimonials.map((t, i) => (
                    <motion.div key={t.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
                        className="bg-[#0f1f13] border border-white/5 rounded-2xl p-6 flex gap-5 hover:border-white/10 transition-all group">
                        <Quote className="w-8 h-8 text-[#d4af37]/20 shrink-0 mt-1" />
                        <div className="flex-1 min-w-0">
                            <p className="text-white/70 text-sm italic leading-relaxed line-clamp-3">"{t.quote}"</p>
                            <div className="flex items-center gap-3 mt-4">
                                {t.image && (
                                    <img src={t.image} alt={t.name} className="w-9 h-9 rounded-full object-cover ring-2 ring-[#d4af37]/30" onError={(e) => { e.target.style.display = 'none'; }} />
                                )}
                                <div>
                                    <p className="text-white font-bold text-sm">{t.name}</p>
                                    <p className="text-[#d4af37] text-xs">{t.role}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                            <button onClick={() => openEdit(t)} className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all">
                                <Pencil className="w-3.5 h-3.5" />
                            </button>
                            <button onClick={() => openDelete(t.id)} className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400/60 hover:text-red-400 transition-all">
                                <Trash2 className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {modal === 'form' && (
                <Modal title={editId ? 'Edit Testimonial' : 'Add Testimonial'} onClose={() => setModal(null)}>
                    <div className="space-y-4">
                        <Field label="Quote">
                            <textarea className={`${inputCls} h-28 resize-none`} value={editing.quote}
                                onChange={(e) => setEditing({ ...editing, quote: e.target.value })} placeholder="What they said about The Growth Circle..." />
                        </Field>
                        <div className="grid grid-cols-2 gap-4">
                            <Field label="Name">
                                <input className={inputCls} value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} placeholder="Mr. John Doe" />
                            </Field>
                            <Field label="Role">
                                <input className={inputCls} value={editing.role} onChange={(e) => setEditing({ ...editing, role: e.target.value })} placeholder="Entrepreneur" />
                            </Field>
                        </div>
                        <Field label="Photo URL or Path">
                            <input className={inputCls} value={editing.image} onChange={(e) => setEditing({ ...editing, image: e.target.value })} placeholder="/images/speakers/photo.jpg" />
                        </Field>
                        <div className="flex justify-end gap-3 pt-2">
                            <button onClick={() => setModal(null)} className="px-5 py-2.5 rounded-xl text-white/40 border border-white/10 text-sm hover:text-white transition-all">Cancel</button>
                            <button onClick={handleSave} disabled={!editing.quote || !editing.name} className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1e8449] to-[#2ecc71] text-white text-sm font-bold disabled:opacity-40 flex items-center gap-2">
                                <Save className="w-4 h-4" /> {editId ? 'Save Changes' : 'Add Testimonial'}
                            </button>
                        </div>
                    </div>
                </Modal>
            )}

            {modal === 'delete' && (
                <Modal title="Delete Testimonial" onClose={() => setModal(null)}>
                    <div className="text-center space-y-4">
                        <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mx-auto">
                            <AlertTriangle className="w-7 h-7 text-red-400" />
                        </div>
                        <p className="text-white/70 text-sm">Delete this testimonial? This cannot be undone.</p>
                        <div className="flex justify-center gap-3">
                            <button onClick={() => setModal(null)} className="px-5 py-2.5 rounded-xl text-white/40 border border-white/10 text-sm">Cancel</button>
                            <button onClick={handleDelete} className="px-5 py-2.5 rounded-xl bg-red-500 text-white text-sm font-bold">Delete</button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}
