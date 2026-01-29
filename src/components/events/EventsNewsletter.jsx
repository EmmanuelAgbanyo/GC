import React from 'react';
import { Mail } from 'lucide-react';

const EventsNewsletter = () => {
    return (
        <section className="bg-[#051910] py-24 px-6 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #2ecc71 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-3xl mx-auto text-center relative z-10">
                <div className="w-16 h-16 bg-[#2ecc71]/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                    <Mail size={32} className="text-[#2ecc71]" />
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Never Miss an Opportunity to Grow
                </h2>
                <p className="text-white/60 mb-10 text-lg">
                    Get the latest event invites, recap summaries, and growth resources delivered straight to your inbox.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 bg-white/10 border border-white/20 rounded-md px-6 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#2ecc71] transition-colors"
                    />
                    <button className="bg-[#2ecc71] text-[#051910] px-8 py-3 rounded-md font-bold hover:bg-[#27ae60] transition-colors">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EventsNewsletter;
