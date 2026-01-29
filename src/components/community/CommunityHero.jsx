import React from 'react';
import { ArrowRight } from 'lucide-react';

const CommunityHero = () => {
    return (
        <section className="bg-[#f0f9f4] py-20 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">

                {/* Left Content */}
                <div className="md:w-1/2">
                    <span className="inline-block bg-[#fff5d9] text-gold px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-gold/20">
                        Purpose-driven Network
                    </span>

                    <h1 className="text-5xl md:text-6xl font-extrabold text-[#051910] mb-6 leading-tight">
                        Connect. <span className="text-[#2ecc71]">Grow.</span><br />
                        Succeed.
                    </h1>

                    <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
                        Join a network of purpose-driven professionals, creators, and entrepreneurs fostering intentional growth through connection, accountability, and action.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#directory" className="bg-[#051910] text-white px-8 py-3.5 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-forest-light transition-colors shadow-lg">
                            Become a Member <ArrowRight size={18} />
                        </a>
                        <p className="text-xs text-gray-500 mt-3 self-center sm:self-auto">Join 500+ professionals today.</p>
                    </div>
                </div>

                {/* Right Image Card */}
                <div className="md:w-1/2 relative">
                    <div className="bg-white p-4 pb-12 rounded-2xl shadow-2xl relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div className="grid grid-cols-2 gap-2 mb-4">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                                alt="Team collaborating"
                                className="w-full h-48 object-cover rounded-lg"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2670&auto=format&fit=crop"
                                alt="Handshake"
                                className="w-full h-48 object-cover rounded-lg"
                            />
                        </div>
                        <div className="absolute bottom-6 right-6 bg-[#2ecc71]/20 text-[#0a2e21] px-6 py-2 rounded-lg font-bold text-xl backdrop-blur-sm border border-[#2ecc71]/30">
                            +500
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-10 right-10 w-full h-full bg-[#2ecc71]/10 rounded-2xl -z-0 rotate-6"></div>
                </div>

            </div>
        </section>
    );
};

export default CommunityHero;
