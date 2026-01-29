import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const Events = () => {
    const events = [
        {
            type: "Mixer & Network",
            title: "Founder's Coffee",
            description: "Casual networking for early-stage founders to share struggles and wins.",
            location: "San Francisco, CA",
            date: "Oct 24",
            image: "/images/community/img5.jpg"
        },
        {
            type: "Talk Series",
            title: "Growth Tactics Panel",
            description: "Hear from VPs at top tech companies about sustainable growth strategies.",
            location: "NYC / Zoom",
            date: "Oct 29",
            image: "/images/community/img3.jpg"
        },
        {
            type: "Master Class",
            title: "Career Pivot Workshop",
            description: "A guided workshop to help you map out your next big career move.",
            location: "Zoom",
            date: "Nov 02",
            image: "/images/community/img2.jpg"
        }
    ];

    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-forest-green mb-2">Upcoming Events</h2>
                        <p className="text-gray-500">Join us in-person or online.</p>
                    </div>
                    <a href="#" className="flex items-center gap-2 text-forest-green font-bold text-sm hover:text-gold transition-colors">
                        View all events <ArrowRight size={16} />
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-forest-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {event.type}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-forest-green mb-3">{event.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                                    {event.description}
                                </p>
                                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                                        <span className="font-medium text-forest-green">{event.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1 font-bold text-forest-green text-sm">
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
