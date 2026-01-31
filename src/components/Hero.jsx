import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const images = [
        "/hero-bg.jpg",
        "/images/gallery/gallery1.jpg",
        "/images/gallery/gallery5.jpg",
        "/images/gallery/gallery6.jpg",
        "/images/gallery/gallery9.jpg"
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-[600px] md:h-[700px] bg-gradient-to-br from-forest-dark via-[#0a2e21] to-[#1e8449] flex items-center justify-center text-center px-4 overflow-hidden">
            {/* Background Overlay Slider */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode='wait'>
                    <motion.img
                        key={currentImage}
                        src={images[currentImage]}
                        alt="The Growth Circle Community"
                        className="absolute w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-forest-green/50"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                <div className="glass-panel p-8 md:p-12 rounded-2xl shadow-2xl backdrop-blur-xl border border-white/20 ring-1 ring-gold/20">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
                        Where Growth Meets <br /> <span className="text-gold drops-shadow-sm">Connection</span>
                    </h1>
                    <p className="text-white text-sm md:text-lg mb-8 max-w-2xl font-light leading-relaxed drop-shadow-sm">
                        A purpose-driven community for professionals, creators, and entrepreneurs fostering intentional growth through conversation and accountability
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a href="https://chat.whatsapp.com/IiEYrl55uAcFCQXwBXehg6" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-brand-green to-[#27ae60] text-white px-8 py-3 font-bold hover:shadow-brand-green/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-sm uppercase tracking-wide">
                            Join the Circle
                        </a>
                        <a href="/events" className="bg-white/10 backdrop-blur-sm border border-white text-white px-8 py-3 font-bold hover:bg-white/20 transition-colors rounded-sm uppercase tracking-wide shadow-lg">
                            Attend a Meetup
                        </a>
                    </div>
                </div>

                {/* Slider Indicators */}
                <div className="flex gap-2 mt-8 z-20">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImage(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImage ? 'bg-brand-green w-4' : 'bg-white/50 hover:bg-white'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
