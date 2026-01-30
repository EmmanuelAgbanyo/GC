import React from 'react';

const CTASection = () => {
    return (
        <section className="bg-gradient-to-r from-gold via-gold-light to-gold py-20 px-6 text-center shadow-inner">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-forest-dark mb-4">Ready to Grow?</h2>
                <p className="text-forest-dark/80 text-lg mb-8 font-medium">
                    Join a community that champions your success. Your next big leap starts here.
                </p>
                <a href="https://chat.whatsapp.com/IiEYrl55uAcFCQXwBXehg6" target="_blank" rel="noopener noreferrer" className="bg-brand-green text-forest-dark px-10 py-4 font-bold rounded-sm hover:bg-[#27ae60] hover:text-white transition-colors uppercase tracking-wide inline-block shadow-lg">
                    Join The Circle Today
                </a>
            </div>
        </section>
    );
};

export default CTASection;
