import React from 'react';
import { BookOpen, Users, TrendingUp } from 'lucide-react';

const Framework = () => {
    const pillars = [
        {
            icon: <BookOpen className="w-8 h-8 text-gold" />,
            title: "Learn",
            description: "Access curated knowledge, expert workshops, and shared insights across industries."
        },
        {
            icon: <Users className="w-8 h-8 text-gold" />,
            title: "Connect",
            description: "Build genuine, supportive relationships that go beyond exchanging business cards."
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-gold" />,
            title: "Grow Together",
            description: "Achieve your goals with accountability partners designed to keep you focused moving."
        }
    ];

    return (
        <section className="bg-forest-green py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-gold text-sm font-bold tracking-widest uppercase mb-2">Our Core Promise</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">The Framework for Success</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="bg-forest-light p-8 rounded-sm hover:-translate-y-2 transition-transform duration-300 border border-white/5">
                            <div className="bg-forest-green w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto border border-gold/20">
                                {pillar.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white text-center mb-4">{pillar.title}</h3>
                            <p className="text-white/70 text-center leading-relaxed text-sm">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Framework;
