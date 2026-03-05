import React from 'react';
import { Clock, MapPin, Grid } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCMS } from '../../context/CMSContext';

const typeColor = (type = '') => {
    const t = type.toLowerCase();
    if (t.includes('workshop') || t.includes('master')) return 'text-brand-green';
    if (t.includes('network') || t.includes('mixer')) return 'text-gold';
    if (t.includes('talk') || t.includes('series')) return 'text-purple-500';
    return 'text-teal-500';
};

const EventsGrid = () => {
    const { cmsData } = useCMS();
    const events = cmsData.events;

    return (
        <section className="pb-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-bold text-forest-dark">
                        Upcoming Events
                        <span className="ml-3 bg-brand-green/10 text-brand-green text-sm font-bold px-3 py-1 rounded-full">
                            {events.length}
                        </span>
                    </h2>
                    <a href="#" className="text-brand-green font-bold hover:underline flex items-center gap-2 text-sm">
                        View Calendar <Grid size={16} />
                    </a>
                </div>

                {events.length === 0 && (
                    <div className="text-center py-20 text-gray-400">
                        <p className="text-lg">No upcoming events at the moment.</p>
                        <p className="text-sm mt-2">Check back soon!</p>
                    </div>
                )}

                <div className="grid md:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="group bg-white rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                        >
                            {/* Image Header */}
                            <div className="h-48 relative overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Date badge */}
                                <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-1.5 text-center shadow-md">
                                    <div className="text-xs font-bold text-forest-dark uppercase tracking-wider">{event.date}</div>
                                </div>
                                {/* Featured badge */}
                                {event.featured && (
                                    <div className="absolute top-4 right-4 bg-gold text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">
                                        Featured
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <span className={`text-xs font-bold uppercase tracking-widest mb-3 inline-block ${typeColor(event.type)}`}>
                                    {event.type}
                                </span>

                                <h3 className="font-bold text-xl text-forest-dark mb-4 flex-1 leading-snug">
                                    {event.title}
                                </h3>

                                <div className="space-y-2 mb-6">
                                    {event.time && (
                                        <div className="flex items-center gap-2 text-gray-500 text-xs">
                                            <Clock size={13} className="shrink-0" />
                                            <span>{event.time}</span>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                                        <MapPin size={13} className="shrink-0" />
                                        <span className="truncate">{event.location}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-auto">
                                    <span className="text-gray-400 text-sm">
                                        {event.location?.toLowerCase().includes('virtual') || event.location?.toLowerCase().includes('online')
                                            ? 'Online' : 'In-Person'}
                                    </span>
                                    <Link
                                        to={`/events/${event.id}`}
                                        className="bg-brand-green/10 hover:bg-brand-green text-brand-green hover:text-white font-bold text-sm uppercase tracking-wide px-4 py-1.5 rounded-lg transition-all duration-300"
                                    >
                                        {event.action || 'Register'}
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventsGrid;
