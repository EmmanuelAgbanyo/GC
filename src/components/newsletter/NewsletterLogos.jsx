import React from 'react';
import { Hexagon, Globe, Box, Circle, Triangle } from 'lucide-react';

const NewsletterLogos = () => {
    return (
        <section className="bg-gray-50 pb-20 pt-10 px-6 text-center">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-10">
                Professionals from top companies are already here
            </p>

            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2 font-bold text-xl text-[#051910]">
                    <Hexagon size={28} className="fill-current" /> ACME Corp
                </div>
                <div className="flex items-center gap-2 font-bold text-xl text-[#051910]">
                    <Globe size={28} /> GlobalTech
                </div>
                <div className="flex items-center gap-2 font-bold text-xl text-[#051910]">
                    <Box size={28} className="fill-current" /> Nebula
                </div>
                <div className="flex items-center gap-2 font-bold text-xl text-[#051910]">
                    <Circle size={28} /> Circle.io
                </div>
                <div className="flex items-center gap-2 font-bold text-xl text-[#051910]">
                    <Triangle size={28} className="fill-current" /> FoxRun
                </div>
            </div>
        </section>
    );
};

export default NewsletterLogos;
