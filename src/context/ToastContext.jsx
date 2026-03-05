import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

const ToastContext = createContext(null);

const ICONS = {
    success: <CheckCircle className="w-4 h-4 text-[#2ecc71]" />,
    error: <AlertCircle className="w-4 h-4 text-red-400" />,
    info: <Info className="w-4 h-4 text-blue-400" />,
};

const BAR_COLORS = {
    success: 'bg-[#2ecc71]',
    error: 'bg-red-400',
    info: 'bg-blue-400',
};

function ToastItem({ id, type = 'success', message, duration = 3000, onDismiss }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative flex items-center gap-3 bg-[#0f1f13]/95 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3.5 shadow-2xl min-w-[260px] max-w-[380px] overflow-hidden"
        >
            {ICONS[type]}
            <p className="text-white text-sm font-medium flex-1">{message}</p>
            <button
                onClick={() => onDismiss(id)}
                className="text-white/20 hover:text-white/60 transition-colors shrink-0"
            >
                <X className="w-3.5 h-3.5" />
            </button>
            {/* Progress bar */}
            <motion.div
                className={`absolute bottom-0 left-0 h-[2px] ${BAR_COLORS[type]}`}
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: duration / 1000, ease: 'linear' }}
            />
        </motion.div>
    );
}

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);
    const counterRef = useRef(0);

    const dismiss = useCallback((id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    const toast = useCallback((message, type = 'success', duration = 3000) => {
        const id = ++counterRef.current;
        setToasts((prev) => [...prev, { id, message, type, duration }]);
        setTimeout(() => dismiss(id), duration);
        return id;
    }, [dismiss]);

    return (
        <ToastContext.Provider value={{ toast }}>
            {children}
            {/* Toast container — fixed bottom-right */}
            <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-2 items-end pointer-events-none">
                <AnimatePresence mode="popLayout">
                    {toasts.map((t) => (
                        <div key={t.id} className="pointer-events-auto">
                            <ToastItem {...t} onDismiss={dismiss} />
                        </div>
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const ctx = useContext(ToastContext);
    if (!ctx) throw new Error('useToast must be used inside <ToastProvider>');
    return ctx.toast;
}
