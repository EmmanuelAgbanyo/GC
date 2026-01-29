import React from 'react';
import { Users } from 'lucide-react';

const ImpactCTA = () => {
    return (
        <section className="px-6 pb-24">
            <div className="max-w-6xl mx-auto bg-[#0a2e21] rounded-2xl p-12 md:p-20 text-center relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-0 center w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center">
                    <div className="text-[#2ecc71] mb-6">
                        <Users size={48} />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Join the Legacy of Growth
                    </h2>

                    <p className="text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Become part of The Growth Circle today to connect with these industry leaders, access exclusive sessions, and start writing your own story of impact.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4">
                        <a href="#" className="bg-[#2ecc71] text-[#051910] px-8 py-3 rounded-md font-bold hover:bg-[#27ae60] transition-colors">
                            Join the Community
                        </a>
                        <a href="#" className="bg-transparent border border-white/20 text-white px-8 py-3 rounded-md font-bold hover:bg-white/10 transition-colors">
                            View Upcoming Events
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactCTA;
