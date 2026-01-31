import React from 'react';
import { Hexagon, Globe, Box, Circle, Triangle } from 'lucide-react';

const NewsletterLogos = () => {
    return (
        <section className="bg-gray-50 pb-20 pt-10 px-6 text-center">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-10">
                Professionals from top companies are already here
            </p>

            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2 font-bold text-lg md:text-xl text-forest-dark">
                    <Hexagon size={24} className="fill-current" /> SEC Ghana
                </div>
                <div className="flex items-center gap-2 font-bold text-lg md:text-xl text-forest-dark">
                    <Globe size={24} /> Promasidor
                </div>
                <div className="flex items-center gap-2 font-bold text-lg md:text-xl text-forest-dark">
                    <Box size={24} className="fill-current" /> GCB Bank
                </div>
                <div className="flex items-center gap-2 font-bold text-lg md:text-xl text-forest-dark">
                    <Circle size={24} /> Young Investors Network
                </div>
                <div className="flex items-center gap-2 font-bold text-lg md:text-xl text-forest-dark">
                    <Triangle size={24} className="fill-current" /> MTN Ghana
                </div>
                <div className="flex items-center gap-2 font-bold text-lg md:text-xl text-forest-dark">
                    <Hexagon size={24} /> Ecobank
                </div>
                <div className="flex items-center gap-2 font-bold text-lg md:text-xl text-forest-dark">
                    <Globe size={24} className="fill-current" /> Enterprise Group
                </div>
                <div className="flex items-center gap-2 font-bold text-lg md:text-xl text-forest-dark">
                    <Box size={24} /> GOIL
                </div>
            </div>
        </section>
    );
};

export default NewsletterLogos;
