import React from 'react';
import { Calendar, MapPin, Clock, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCMS } from '../../context/CMSContext';

const FeaturedEvent = () => {
    const { cmsData } = useCMS();

    // Use the event marked as featured, or fall back to the first event
    const featured = cmsData.events.find((e) => e.featured) || cmsData.events[0];

    if (!featured) return null;

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-bold text-[#051910]">Next Up</h2>
                    <span className="bg-[#fff9ee] text-gold px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 border border-gold/20">
                        <Star size={13} className="fill-gold" /> Featured Event
                    </span>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row"
                >
                    {/* Image Side */}
                    <div className="md:w-5/12 relative min-h-[300px] overflow-hidden">
                        <img
                            src={featured.image}
                            alt={featured.title}
                            className="w-full h-full object-cover absolute inset-0 hover:scale-105 transition-transform duration-700"
                        />
                        {/* Type badge */}
                        <div className="absolute bottom-4 left-4 bg-brand-green text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                            {featured.type}
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="md:w-7/12 p-10 flex flex-col justify-center">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-brand-green font-bold text-xs tracking-widest uppercase">Featured Event</span>
                            <Star size={20} className="text-gold fill-gold" />
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-forest-dark mb-4 leading-snug">
                            {featured.title}
                        </h3>

                        <p className="text-gray-500 mb-8 leading-relaxed line-clamp-3">
                            {featured.description}
                        </p>

                        <div className="space-y-3 mb-10">
                            {featured.date && (
                                <div className="flex items-center gap-3 text-gray-700">
                                    <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gold shrink-0">
                                        <Calendar size={16} />
                                    </div>
                                    <span className="font-medium">{featured.date}</span>
                                </div>
                            )}
                            {featured.time && (
                                <div className="flex items-center gap-3 text-gray-700">
                                    <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gold shrink-0">
                                        <Clock size={16} />
                                    </div>
                                    <span className="font-medium">{featured.time}</span>
                                </div>
                            )}
                            {featured.location && (
                                <div className="flex items-center gap-3 text-gray-700">
                                    <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gold shrink-0">
                                        <MapPin size={16} />
                                    </div>
                                    <span className="font-medium">{featured.location}</span>
                                </div>
                            )}
                        </div>

                        <div className="flex gap-3 flex-wrap">
                            <Link
                                to={`/events/${featured.id}`}
                                className="bg-brand-green text-white px-8 py-3 rounded-md font-bold hover:bg-[#27ae60] hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                            >
                                {featured.action || 'Register'} <ArrowRight size={16} />
                            </Link>
                            <Link
                                to={`/events/${featured.id}`}
                                className="bg-transparent border border-gray-200 text-gray-600 px-6 py-3 rounded-md font-medium hover:border-brand-green hover:text-brand-green transition-all duration-300"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedEvent;
