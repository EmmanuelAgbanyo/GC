import React from 'react';
import { Zap, Mail, Star, TrendingUp } from 'lucide-react';

const NewsletterHero = () => {
    return (
        <section className="bg-gray-50 py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                {/* Left Content */}
                <div className="lg:w-1/2">
                    <div className="inline-flex items-center gap-2 bg-[#fff9ee] border border-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
                        <Zap size={14} className="fill-gold" /> Weekly Wisdom
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-[#051910] mb-6 leading-tight">
                        Fuel Your <br />
                        <span className="text-[#2ecc71]">Growth Journey</span>
                    </h1>

                    <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-lg">
                        Join a purpose-driven community. Get weekly insights for intentional growth, connection, and accountability delivered straight to your inbox.
                    </p>

                    <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200 flex flex-col sm:flex-row gap-2 max-w-md mb-4">
                        <div className="flex-1 flex items-center px-4">
                            <Mail size={20} className="text-gray-400 mr-3" />
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full bg-transparent focus:outline-none text-[#051910] placeholder:text-gray-400"
                            />
                        </div>
                        <button className="bg-[#2ecc71] text-[#051910] px-6 py-3 rounded-md font-bold hover:bg-[#27ae60] transition-colors whitespace-nowrap shadow-md shadow-[#2ecc71]/20">
                            Subscribe Free
                        </button>
                    </div>

                    <p className="text-xs text-gray-400 mb-10 pl-2">Join 5,000+ professionals. Unsubscribe at any time.</p>

                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                                <img
                                    key={i}
                                    src={`https://randomuser.me/api/portraits/women/${i + 40}.jpg`}
                                    alt="User"
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                />
                            ))}
                        </div>
                        <div>
                            <div className="flex text-gold mb-0.5">
                                <Star size={12} className="fill-gold" />
                                <Star size={12} className="fill-gold" />
                                <Star size={12} className="fill-gold" />
                                <Star size={12} className="fill-gold" />
                                <Star size={12} className="fill-gold" />
                            </div>
                            <span className="text-xs font-bold text-[#051910]">Trusted by community leaders</span>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 relative">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                            alt="Community working together"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                        {/* Floating Card */}
                        <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 flex items-center gap-4 animate-fade-in-up">
                            <div className="w-12 h-12 bg-[#2ecc71]/10 rounded-full flex items-center justify-center text-[#2ecc71]">
                                <TrendingUp size={24} />
                            </div>
                            <div>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Latest Issue</span>
                                <h3 className="text-[#051910] font-bold">"The Art of the Pivot"</h3>
                                <p className="text-xs text-gray-500">Read by 12,400+ members this week.</p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-[#2ecc71]/10 rounded-full blur-3xl"></div>
                    <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterHero;
