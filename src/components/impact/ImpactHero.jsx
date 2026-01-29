import React from 'react';
import { Mic } from 'lucide-react';

const ImpactHero = () => {
    return (
        <section className="relative bg-[#051910] py-24 px-6 overflow-hidden">
            {/* Background Particles/Texture */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/20 via-[#051910] to-[#051910]"></div>
                {/* Simulated gold dust */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full opacity-50 blur-[1px]"></div>
                <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-gold rounded-full opacity-30 blur-[2px]"></div>
                <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-gold rounded-full opacity-60 blur-[1px]"></div>
                <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-gold rounded-full opacity-80"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1 text-gold text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                    <div className="w-2 h-2 rounded-full bg-gold animate-pulse"></div>
                    Legacy of Growth
                </span>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Hall of <span className="text-gold">Impact</span>
                </h1>

                <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed font-light mb-10">
                    A tribute to the visionaries, leaders, and change-makers who have shaped our community through powerful conversation and actionable insights.
                </p>

                <a href="#speakers" className="inline-flex items-center gap-2 bg-[#2ecc71] text-[#051910] px-8 py-3 rounded-md font-bold hover:bg-[#27ae60] transition-all transform hover:-translate-y-1 shadow-lg shadow-green-900/50">
                    Become a Speaker <Mic size={18} />
                </a>
            </div>
        </section>
    );
};

export default ImpactHero;
