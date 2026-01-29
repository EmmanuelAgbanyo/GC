import React from 'react';
import { Layers } from 'lucide-react';

const FrameworkHero = () => {
    return (
        <section className="bg-[#051910] py-24 px-6 relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2ecc71]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-gold text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
                    <Layers size={14} />
                    <span>The Growth Circle Methodology</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight">
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ecc71] to-teal-400">TRANSFORM</span><br />
                    Framework&trade;
                </h1>

                <p className="text-white/70 max-w-2xl mx-auto text-xl leading-relaxed font-light mb-10">
                    Position yourself as a strategic thinker while giving your team a practical roadmap. Bridge the gap between theory and practice.
                </p>
            </div>
        </section>
    );
};

export default FrameworkHero;
