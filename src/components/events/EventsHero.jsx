import React from 'react';
import { Link } from 'react-router-dom';

const EventsHero = () => {
    return (
        <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/community/img2.jpg"
                    alt="Events Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#051910]/80"></div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Community Events</span>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    Connect, Collaborate,<br />
                    <span className="text-[#2ecc71]">& Grow</span>
                </h1>
                <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    Join our upcoming meetups to foster intentional growth through conversation and action. Where ambition meets accountability.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-[#2ecc71] text-[#051910] px-8 py-3 rounded-md font-bold hover:bg-[#27ae60] transition-colors">
                        View Upcoming Events
                    </button>
                    <Link to="/gallery" className="bg-transparent border border-white/30 text-white px-8 py-3 rounded-md font-bold hover:bg-white/10 transition-colors inline-block text-center">
                        View Past Highlights
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default EventsHero;
