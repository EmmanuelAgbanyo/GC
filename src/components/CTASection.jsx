import React from 'react';

const CTASection = () => {
    return (
        <section className="bg-gold py-20 px-6 text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-forest-green mb-4">Ready to Grow?</h2>
                <p className="text-forest-green/80 text-lg mb-8 font-medium">
                    Join a community that champions your success. Your next big leap starts here.
                </p>
                <button className="bg-black text-white px-10 py-4 font-bold rounded-sm hover:bg-forest-green transition-colors uppercase tracking-wide">
                    Join The Circle Today
                </button>
            </div>
        </section>
    );
};

export default CTASection;
