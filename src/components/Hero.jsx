import React from 'react';

const Hero = () => {
    return (
        <section className="relative w-full h-[600px] md:h-[700px] bg-forest-green flex items-center justify-center text-center px-4 overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg.jpg"
                    alt="The Growth Circle Community"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-forest-green/60"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                <div className="glass-panel p-8 md:p-12 rounded-2xl shadow-2xl backdrop-blur-md border-[1.5px] border-white/20">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
                        Where Growth Meets <br /> <span className="text-gold drops-shadow-sm">Connection</span>
                    </h1>
                    <p className="text-white text-sm md:text-lg mb-8 max-w-2xl font-light leading-relaxed drop-shadow-sm">
                        A purpose-driven community for professionals, creators, and entrepreneurs fostering intentional growth through conversation and accountability
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a href="#" className="bg-gold text-forest-green px-8 py-3 font-bold hover:bg-gold-hover transition-colors rounded-sm uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                            Join the Circle
                        </a>
                        <a href="#" className="bg-white/10 backdrop-blur-sm border border-white text-white px-8 py-3 font-bold hover:bg-white/20 transition-colors rounded-sm uppercase tracking-wide shadow-lg">
                            Attend a Meetup
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
