import React from 'react';
import NewsletterHero from '../components/newsletter/NewsletterHero';
import NewsletterLogos from '../components/newsletter/NewsletterLogos';
import NewsletterFeatures from '../components/newsletter/NewsletterFeatures';
import CommunityGrid from '../components/newsletter/CommunityGrid';
import Footer from '../components/Footer';

const Newsletter = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <NewsletterHero />
            <NewsletterLogos />
            <NewsletterFeatures />
            <CommunityGrid />
            {/* Note: The Footer component (if global) might be in App.jsx, but adding here just in case specific placement is needed, or relying on global footer */}
        </div>
    );
};

export default Newsletter;
