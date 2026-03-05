import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useCMS } from '../context/CMSContext';

const Events = () => {
    const { cmsData } = useCMS();
    const events = cmsData.events;

    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-forest-dark mb-2">Upcoming Events</h2>
                        <p className="text-gray-500">Join us in-person or online.</p>
                    </div>
                    <a href="#" className="flex items-center gap-2 text-brand-green font-bold text-sm hover:text-gold transition-colors">
                        View all events <ArrowRight size={16} />
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <div key={event.id} className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {event.type}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-forest-dark mb-3">{event.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                                    {event.description}
                                </p>
                                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                                        <span className="font-medium text-brand-green">{event.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1 font-bold text-brand-green text-sm">
                                        {event.date} <ArrowRight size={14} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
