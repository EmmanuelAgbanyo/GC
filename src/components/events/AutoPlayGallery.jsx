import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';

/**
 * AutoPlayGallery — cycles through images with a sleek fade + slide.
 * Supports fullscreen lightbox too.
 */
export default function AutoPlayGallery({ images = [], interval = 4000 }) {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const [lightbox, setLightbox] = useState(null);

    const next = useCallback(() => setCurrent((i) => (i + 1) % images.length), [images.length]);
    const prev = useCallback(() => setCurrent((i) => (i - 1 + images.length) % images.length), [images.length]);

    useEffect(() => {
        if (paused || images.length <= 1) return;
        const t = setInterval(next, interval);
        return () => clearInterval(t);
    }, [paused, next, interval, images.length]);

    if (!images || images.length === 0) return null;

    return (
        <>
            <div
                className="relative rounded-2xl overflow-hidden bg-black aspect-[16/9] group cursor-pointer"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                {/* Slides */}
                <AnimatePresence mode="wait">
                    <motion.img
                        key={current}
                        src={images[current]}
                        alt={`Slide ${current + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                        onError={(e) => { e.target.src = '/hero-bg.jpg'; }}
                    />
                </AnimatePresence>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Controls */}
                {images.length > 1 && (
                    <>
                        <button onClick={prev}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button onClick={next}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </>
                )}

                {/* Expand button */}
                <button onClick={() => setLightbox(current)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70">
                    <Expand className="w-4 h-4" />
                </button>

                {/* Dots */}
                {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {images.map((_, i) => (
                            <button key={i} onClick={() => setCurrent(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-white w-5' : 'bg-white/40 w-1.5 hover:bg-white/70'}`} />
                        ))}
                    </div>
                )}

                {/* Thumbnail strip */}
                {images.length > 1 && (
                    <div className="absolute bottom-10 left-0 right-0 flex gap-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        {images.map((img, i) => (
                            <button key={i} onClick={() => setCurrent(i)}
                                className={`w-12 h-8 rounded-md overflow-hidden border-2 transition-all ${i === current ? 'border-white scale-110' : 'border-transparent opacity-60 hover:opacity-100'}`}>
                                <img src={img} alt="" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4"
                        onClick={() => setLightbox(null)}
                    >
                        <button onClick={() => setLightbox(null)}
                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                            <X className="w-5 h-5" />
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i - 1 + images.length) % images.length); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={lightbox}
                                src={images[lightbox]}
                                alt=""
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="max-w-full max-h-[85vh] rounded-xl object-contain shadow-2xl"
                            />
                        </AnimatePresence>
                        <button onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i + 1) % images.length); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                        <div className="absolute bottom-6 text-white/50 text-sm">{lightbox + 1} / {images.length}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
