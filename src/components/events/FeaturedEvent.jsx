import React from 'react';
import { Calendar, MapPin, Clock, Star } from 'lucide-react';

const FeaturedEvent = () => {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-bold text-[#051910]">Next Up</h2>
                    <span className="bg-[#fff9ee] text-gold px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 border border-gold/20">
                        <Clock size={14} /> In 3 Days
                    </span>
                </div>

                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
                    {/* Image Side */}
                    <div className="md:w-5/12 relative min-h-[300px]">
                        <img
                            src="/feb-flyer.jpg"
                            alt="Setting Goals Event"
                            className="w-full h-full object-cover absolute inset-0"
                        />
                    </div>

                    {/* Content Side */}
                    <div className="md:w-7/12 p-10 flex flex-col justify-center">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-brand-green font-bold text-xs tracking-widest uppercase">Featured Event</span>
                            <Star size={20} className="text-gold fill-gold" />
                        </div>

                        <h3 className="text-3xl md:text-3xl font-bold text-forest-dark mb-4">Setting Goals: How To Set Goals That Actually Work In 2026</h3>

                        <p className="text-gray-500 mb-8 leading-relaxed">
                            A Professional and Networking Breakfast Meet-Up with Rev. Edward Agyekum Kufuor. Learn why your goals failed in 2025 and how to make them work in 2026.
                        </p>

                        <div className="space-y-4 mb-10">
                            <div className="flex items-center gap-3 text-gray-700">
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gold">
                                    <Calendar size={18} />
                                </div>
                                <span className="font-medium">Saturday, 31st January 2026</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-700">
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gold">
                                    <Clock size={18} />
                                </div>
                                <span className="font-medium">9:30am - 12noon Exactly</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-700">
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gold">
                                    <MapPin size={18} />
                                </div>
                                <span className="font-medium">Accra Ghana</span>
                            </div>
                        </div>

                        <div>
                            <button className="bg-brand-green text-forest-dark px-8 py-3 rounded-md font-bold hover:bg-[#27ae60] transition-colors w-full md:w-auto text-center">
                                Register Now &rarr;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedEvent;
