import React from 'react';
import { Target, Users, Zap, Award, BookOpen, Compass, Heart, Layers, TrendingUp, Sun, Anchor, Link } from 'lucide-react';

const PhilosophyValues = () => {
    const circles = [
        { letter: "C", word: "Connection", desc: "Building bridges, not just networks.", icon: <Link size={20} /> },
        { letter: "I", word: "Inspiration", desc: "Fueling the spark of possibility.", icon: <Zap size={20} /> },
        { letter: "R", word: "Reflection", desc: "Pausing to find clarity.", icon: <Compass size={20} /> },
        { letter: "C", word: "Collaboration", desc: "Winning together, always.", icon: <Users size={20} /> },
        { letter: "L", word: "Learning", desc: "Constant curiosity and growth.", icon: <BookOpen size={20} /> },
        { letter: "E", word: "Empowerment", desc: "Lifting others as we climb.", icon: <Award size={20} /> },
    ];

    const growth = [
        { letter: "G", word: "Growth Mindset", desc: "Embracing challenges as opportunities.", icon: <TrendingUp size={20} /> },
        { letter: "R", word: "Relationships", desc: "The currency of long-term success.", icon: <Heart size={20} /> },
        { letter: "O", word: "Opportunities", desc: "Creating doors where there were walls.", icon: <Sun size={20} /> },
        { letter: "W", word: "Wellness", desc: "Sustaining high performance with health.", icon: <Anchor size={20} /> },
        { letter: "T", word: "Transformation", desc: "Evolving beyond our limits.", icon: <Layers size={20} /> },
        { letter: "H", word: "Human Connection", desc: "The heart of every business interaction.", icon: <Target size={20} /> },
    ];

    return (
        <section className="bg-gray-50 py-24 px-6 relative overflow-hidden">
            {/* Background Decorative Blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-forest-green/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <span className="bg-white px-4 py-1.5 rounded-full text-gold text-xs font-bold tracking-widest uppercase border border-gold/20 shadow-sm inline-block mb-4">Our DNA</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-4">Our Philosophy</h2>
                    <p className="max-w-2xl mx-auto text-gray-500 text-lg leading-relaxed">
                        Authentic study, true depth. Our community is built upon two fundamental frameworks that guide every interaction.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 md:gap-24">

                    {/* Circle Values Column */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-forest-green text-white flex items-center justify-center shadow-lg shadow-forest-green/20">
                                <Target size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-forest-green text-2xl">The C.I.R.C.L.E. Values</h3>
                                <p className="text-sm text-gray-400">Our core operating principles</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {circles.map((item, index) => (
                                <div key={index} className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-gold/30 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>

                                    <div className="flex justify-between items-start mb-4 relative z-10">
                                        <span className="text-4xl font-black text-forest-green/10 group-hover:text-forest-green/20 transition-colors">{item.letter}</span>
                                        <div className="text-gold bg-gold/10 p-2 rounded-lg group-hover:bg-gold group-hover:text-white transition-colors">
                                            {item.icon}
                                        </div>
                                    </div>

                                    <h4 className="font-bold text-forest-green text-lg mb-2 relative z-10">{item.word}</h4>
                                    <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-600 relative z-10">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Growth Pillars Column */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-gold text-forest-green flex items-center justify-center shadow-lg shadow-gold/20">
                                <TrendingUp size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-forest-green text-2xl">The G.R.O.W.T.H. Pillars</h3>
                                <p className="text-sm text-gray-400">The foundation of our success</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {growth.map((item, index) => (
                                <div key={index} className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-forest-green/30 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-forest-green/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>

                                    <div className="flex justify-between items-start mb-4 relative z-10">
                                        <span className="text-4xl font-black text-gold/20 group-hover:text-gold/30 transition-colors">{item.letter}</span>
                                        <div className="text-forest-green bg-forest-green/10 p-2 rounded-lg group-hover:bg-forest-green group-hover:text-white transition-colors">
                                            {item.icon}
                                        </div>
                                    </div>

                                    <h4 className="font-bold text-forest-green text-lg mb-2 relative z-10">{item.word}</h4>
                                    <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-600 relative z-10">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PhilosophyValues;
