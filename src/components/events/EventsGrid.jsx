import React from 'react';
import { Clock, MapPin, Grid, List } from 'lucide-react';

const EventsGrid = () => {
    const events = [
        {
            date: { day: "", month: "FEB" },
            type: "Workshop",
            title: "Setting Goals: How To Set Goals That Actually Work In 2026",
            time: "9:30 AM - 12:00 PM",
            location: "Pistachio resturant, spintex-Accra",
            image: "/feb-flyer.jpg",
            action: "Register"
        },
        {
            date: { day: "", month: "MAR" },
            type: "Networking",
            title: "How To Build Wealth [FAST] In 2026",
            time: "8:00 AM - 9:30 AM",
            location: "Pistachio resturant, spintex-Accra",
            image: "/images/community/img5.jpg",
            action: "RSVP"
        },
        {
            date: { day: "", month: "APR" },
            type: "Masterclass",
            title: "Goal Setting for 2026",
            time: "6:00 PM - 8:00 PM",
            location: "Pistachio resturant, spintex-Accra",
            image: "/images/community/img4.jpg",
            action: "Register"
        }
    ];

    return (
        <section className="pb-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-bold text-forest-dark">Upcoming Events</h2>
                    <a href="#" className="text-brand-green font-bold hover:underline flex items-center gap-2 text-sm">
                        View Calendar <Grid size={16} />
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <div key={index} className="group bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                            {/* Image Header */}
                            <div className="h-48 relative">
                                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 left-4 bg-white rounded-lg p-2 text-center min-w-[50px] shadow-md flex items-center justify-center h-[50px]">
                                    <div className="text-sm font-bold text-forest-dark uppercase tracking-wider">{event.date.month}</div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <span className={`text-xs font-bold uppercase tracking-widest mb-3 inline-block
                                    ${event.type === 'Workshop' ? 'text-brand-green' :
                                        event.type === 'Networking' ? 'text-gold' : 'text-teal-500'}`
                                }>
                                    {event.type}
                                </span>

                                <h3 className="font-bold text-xl text-forest-dark mb-4 flex-1">{event.title}</h3>

                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                                        <Clock size={14} />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                                        <MapPin size={14} />
                                        <span>{event.location}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-auto">
                                    <span className="text-gray-400 text-sm">{event.location.includes('Virtual') ? 'Online' : 'In-Person'}</span>
                                    <button className="text-brand-green font-bold text-sm hover:text-[#27ae60] uppercase tracking-wide">
                                        {event.action}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventsGrid;
