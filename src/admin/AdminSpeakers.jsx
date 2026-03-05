import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Pencil, Trash2, X, Save, AlertTriangle, Users } from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import { useToast } from '../context/ToastContext';

const emptySpeaker = { name: '', role: '', image: '' };
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
                    className="bg-[#0f1f13] border border-white/10 rounded-2xl w-full max-w-md shadow-2xl"
                >
                    <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                        <h3 className="text-white font-bold text-lg">{title}</h3>
                        <button onClick={onClose} className="text-white/30 hover:text-white transition-colors">
                            <X className="w-5 h-5" />
                        </button>
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

export default function AdminSpeakers() {
    const { cmsData, updateSection } = useCMS();
    const toast = useToast();
    const [modal, setModal] = useState(null);
    const [editing, setEditing] = useState(emptySpeaker);
    const [editId, setEditId] = useState(null);
    const [deleteId, setDeleteId] = useState(null);
    const [saved, setSaved] = useState(false);

    const openAdd = () => { setEditing({ ...emptySpeaker }); setEditId(null); setModal('form'); };
    const openEdit = (s) => { setEditing({ ...s }); setEditId(s.id); setModal('form'); };
    const openDelete = (id) => { setDeleteId(id); setModal('delete'); };

    const handleSave = () => {
        const next = editId
            ? cmsData.speakers.map((s) => (s.id === editId ? { ...editing, id: editId } : s))
            : [...cmsData.speakers, { ...editing, id: `spk-${Date.now()}` }];
        updateSection('speakers', next);
        setModal(null);
        setSaved(true); setTimeout(() => setSaved(false), 2000);
        toast(editId ? 'Speaker updated — live on site!' : 'Speaker added — live on site!', 'success');
    };

    const handleDelete = () => {
        updateSection('speakers', cmsData.speakers.filter((s) => s.id !== deleteId));
        setModal(null);
        toast('Speaker removed from site.', 'info');
    };

    return (
        <div className="space-y-6 max-w-5xl">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Speakers</h1>
                    <p className="text-white/40 text-sm mt-1">Featured speakers shown on the homepage.</p>
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
                        <Plus className="w-4 h-4" /> Add Speaker
                    </button>
                </div>
            </div>

            {/* Grid */}
            {cmsData.speakers.length === 0 && (
                <div className="text-center py-20 text-white/20">
                    <Users className="w-10 h-10 mx-auto mb-3 opacity-30" />
                    <p>No speakers yet. Add your first speaker.</p>
                </div>
            )}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cmsData.speakers.map((spk, i) => (
                    <motion.div key={spk.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                        className="bg-[#0f1f13] border border-white/5 rounded-2xl p-5 flex items-center gap-4 hover:border-white/10 transition-all group">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-white/10 shrink-0 ring-2 ring-[#d4af37]/30">
                            <img src={spk.image} alt={spk.name} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-white font-bold text-sm truncate">{spk.name}</p>
                            <p className="text-[#d4af37] text-xs font-medium mt-0.5">{spk.role}</p>
                        </div>
                        <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onClick={() => openEdit(spk)} className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all">
                                <Pencil className="w-3.5 h-3.5" />
                            </button>
                            <button onClick={() => openDelete(spk.id)} className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400/60 hover:text-red-400 transition-all">
                                <Trash2 className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {modal === 'form' && (
                <Modal title={editId ? 'Edit Speaker' : 'Add Speaker'} onClose={() => setModal(null)}>
                    <div className="space-y-4">
                        <Field label="Full Name">
                            <input className={inputCls} value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} placeholder="e.g. Mr. John Doe" />
                        </Field>
                        <Field label="Role / Title">
                            <input className={inputCls} value={editing.role} onChange={(e) => setEditing({ ...editing, role: e.target.value })} placeholder="e.g. Guest Speaker" />
                        </Field>
                        <Field label="Image URL or Path">
                            <input className={inputCls} value={editing.image} onChange={(e) => setEditing({ ...editing, image: e.target.value })} placeholder="/images/speakers/photo.png" />
                        </Field>
                        {editing.image && (
                            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto ring-4 ring-[#d4af37]/30">
                                <img src={editing.image} alt="preview" className="w-full h-full object-cover" />
                            </div>
                        )}
                        <div className="flex justify-end gap-3 pt-2">
                            <button onClick={() => setModal(null)} className="px-5 py-2.5 rounded-xl text-white/40 border border-white/10 text-sm hover:text-white transition-all">Cancel</button>
                            <button onClick={handleSave} disabled={!editing.name} className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1e8449] to-[#2ecc71] text-white text-sm font-bold disabled:opacity-40 flex items-center gap-2">
                                <Save className="w-4 h-4" /> {editId ? 'Save Changes' : 'Add Speaker'}
                            </button>
                        </div>
                    </div>
                </Modal>
            )}

            {modal === 'delete' && (
                <Modal title="Remove Speaker" onClose={() => setModal(null)}>
                    <div className="text-center space-y-4">
                        <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mx-auto">
                            <AlertTriangle className="w-7 h-7 text-red-400" />
                        </div>
                        <p className="text-white/70 text-sm">Remove this speaker? This action cannot be undone.</p>
                        <div className="flex justify-center gap-3">
                            <button onClick={() => setModal(null)} className="px-5 py-2.5 rounded-xl text-white/40 border border-white/10 text-sm">Cancel</button>
                            <button onClick={handleDelete} className="px-5 py-2.5 rounded-xl bg-red-500 text-white text-sm font-bold">Remove</button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}
