import React from 'react';
import { motion } from 'framer-motion';

const FounderNote = () => {
    return (
        <section className="bg-white py-24 px-6 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-0"></div>
            <div className="absolute top-20 left-10 w-64 h-64 bg-forest-green/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-20 items-start">

                    {/* Left Column: Who We Are & Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative mb-16 group">
                            <div className="overflow-hidden rounded-2xl shadow-2xl">
                                <img
                                    src="/founder.png"
                                    alt="Mr. James Kliffin"
                                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000"
                                />
                            </div>

                            {/* Premium Accent Box */}
                            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gold/10 backdrop-blur-md border border-gold/20 rounded-xl -z-10 flex items-center justify-center">
                                <div className="w-16 h-16 bg-gold/20 rounded-full"></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="h-px w-10 bg-gold"></span>
                                <span className="text-gold font-bold text-xs tracking-[0.2em] uppercase">Who We Are</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-8">What is The Growth Circle?</h2>

                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                The Growth Circle is a purpose-driven community for professionals, creators, entrepreneurs, and career shifters. We exist to <span className="text-forest-green font-semibold">foster intentional growth</span> through conversation, structured accountability, and action.
                            </p>
                            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                                Unlike traditional networking groups that focus on transactions, we focus on <span className="text-forest-green font-semibold">transformation</span>. We are a space for those who are driven but desire a circle where ambition meets vulnerability, and where your professional journey is supported by a tribe of peers who genuinely care.
                            </p>

                            <div className="flex flex-wrap gap-4 md:gap-8 text-sm font-bold text-forest-green">
                                {['Facilitators', 'Our Structure', 'The Manifesto'].map((item, i) => (
                                    <span key={i} className="flex items-center gap-2 bg-forest-green/5 px-4 py-2 rounded-full border border-forest-green/10">
                                        <span className="w-2 h-2 rounded-full bg-gold"></span> {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Founder Note */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Glass Card */}
                        <div className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-10 md:p-12 rounded-2xl md:mt-20 relative">
                            {/* Decorative Quote Mark */}
                            <div className="absolute -top-6 -right-6 text-9xl text-gold/10 font-serif leading-none">"</div>

                            <div className="flex items-center gap-5 mb-10">
                                <div className="relative">
                                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md p-1 bg-white">
                                        <img
                                            src="/founder.png"
                                            alt="Founder"
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-gold rounded-full border-2 border-white flex items-center justify-center">
                                        <span className="text-white text-[10px]">★</span>
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <h3 className="font-bold text-forest-green text-xl font-serif">A Note from the Founder</h3>
                                    <p className="text-gold text-sm font-bold uppercase tracking-wider">Mr. James Kliffin</p>
                                </div>
                            </div>

                            <div className="space-y-6 text-gray-700 leading-relaxed text-lg font-light italic relative z-10">
                                <p>"I started The Growth Circle because I saw too many brilliant people stalling on their way up."</p>
                                <p>My journey began as a solo founder facing burnout. I realized quickly that the difference between theory and action is often who you have in your corner. I wanted to build the ‘board of advisors’ I wished I had—not just for business strategy, but for the messy reality of building a career or a life that feels authentic.</p>
                                <p>We built this to close the gap between ambition and reality. Whether you're scaling a tech business, pivoting industries, or just trying to figure out what ‘next’ looks like, The Growth Circle helps you navigate the mess in the middle with the people who assume you'll thrive.</p>
                                <p className="font-medium not-italic text-forest-green">Come for the tactics, stay for the truth. Here's to growth that feels less like a grind and more like an adventure we are taking together.</p>
                            </div>

                            <div className="mt-10 pt-8 border-t border-gray-100 flex justify-between items-end">
                                <div className="font-signature text-forest-green text-3xl">Mr. James Kliffin</div>
                                <img src="/logo.png" alt="The Growth Circle" className="h-8 opacity-20 grayscale" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default FounderNote;
