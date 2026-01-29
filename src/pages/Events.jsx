import React from 'react';
import EventsHero from '../components/events/EventsHero';
import FeaturedEvent from '../components/events/FeaturedEvent';
import EventsGrid from '../components/events/EventsGrid';
import PastHighlights from '../components/events/PastHighlights';
import EventsNewsletter from '../components/events/EventsNewsletter';

const Events = () => {
    return (
        <div className="min-h-screen bg-white">
            <EventsHero />
            <FeaturedEvent />
            <EventsGrid />
            <PastHighlights />
            <EventsNewsletter />
        </div>
    );
};

export default Events;
