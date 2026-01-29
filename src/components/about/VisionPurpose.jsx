import React from 'react';
import { motion } from 'framer-motion';

const VisionPurpose = () => {
    const manifestoPoints = [
        "We believe in action over intent. Dreams remain dreams until you do.",
        "We value radical candor over polite withholding.",
        "We know that growth is uncomfortable, and we embrace the discomfort together.",
        "We are collaborators, not competitors. A rising tide lifts all boats.",
        "We measure success not just in income, but in impact."
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="relative py-32 px-6 text-white overflow-hidden">
            {/* Parallax Background Image */}
            <div
                className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
                style={{ backgroundImage: `url('/images/community/img3.jpg')` }}
            ></div>

            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#051910]/95 via-[#051910]/90 to-[#051910]/80"></div>

            {/* Decorative Background Pattern Overlay */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2ecc71]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-0 mix-blend-overlay"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 z-0 mix-blend-overlay"></div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 relative z-10">

                {/* Left: Vision & Purpose */}
                <div className="lg:w-5/12 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 pl-1">Our North Star</p>
                        <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">Vision & <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Purpose</span></h2>

                        <div className="space-y-6">
                            <div className="group bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-gold/30 transition-all duration-500 shadow-xl">
                                <h3 className="text-gold font-bold text-xl mb-3 flex items-center gap-3">
                                    <span className="w-2 h-2 bg-gold rounded-full"></span> Our Vision
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed group-hover:text-white/90 transition-colors">
                                    To build the most honest, impactful community for growth-minded professionals, creating a global ecosystem where personal growth fuels professional success.
                                </p>
                            </div>

                            <div className="group bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-[#2ecc71]/30 transition-all duration-500 shadow-xl">
                                <h3 className="text-[#2ecc71] font-bold text-xl mb-3 flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[#2ecc71] rounded-full"></span> Our Purpose
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed group-hover:text-white/90 transition-colors">
                                    To shatter isolation, power-up lasting networks, genuine connections and accountability so we all reach our ambitions faster.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right: The Manifesto */}
                <div className="lg:w-7/12">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-white mb-10 lg:text-right"
                    >
                        The Manifesto
                    </motion.h2>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        {manifestoPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex gap-6 p-6 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group shadow-lg"
                            >
                                <span className="text-gold font-mono text-2xl font-light opacity-50 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                                <p className="text-white/80 text-lg md:text-xl font-light group-hover:text-white transition-colors leading-relaxed border-l border-white/10 pl-6 h-full flex items-center">
                                    {point}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default VisionPurpose;
