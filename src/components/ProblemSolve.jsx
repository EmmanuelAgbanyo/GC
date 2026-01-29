import React from 'react';

const ProblemSolve = () => {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
                <div className="w-full md:w-1/2">
                    <div className="relative">
                        {/* Decorative element */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold/20 rounded-full -z-10"></div>
                        <img
                            src="/problem-solve.jpg"
                            alt="Professional thinking"
                            className="w-full h-auto rounded-lg shadow-xl" // Added standard shadow and rounds
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-5xl font-bold text-forest-green mb-6">The Problem We Solve</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Navigating a career or business alone can be isolating. Professional isolation is real, and it leads to stagnation, burnout, and missed opportunities.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        We replace isolation with a network of peers who understand your journey and push you forward. No more guessing - just clear paths and supportive people.
                    </p>
                    <a href="#" className="bg-forest-green text-white px-8 py-3 font-bold hover:bg-forest-light transition-colors inline-block rounded-sm">
                        Read Our Manifesto
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolve;
