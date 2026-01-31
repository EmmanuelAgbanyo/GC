import React from 'react';
import { Calendar, Users, Library, MessageSquare, ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const MembershipBenefits = () => {
    const benefits = [
        {
            icon: <Calendar className="w-8 h-8 text-[#051910]" />,
            title: "Curated Meetups",
            description: "Monthly gatherings focused on key topics and authentic connection."
        },
        {
            icon: <Users className="w-8 h-8 text-[#051910]" />,
            title: "Accountability Pods",
            description: "Small, dedicated groups to help you set and crush your quarterly goals."
        },
        {
            icon: <Library className="w-8 h-8 text-[#051910]" />,
            title: "Resource Library",
            description: "Exclusive access to recorded talks, templates, and career guides."
        },
        {
            icon: <MessageSquare className="w-8 h-8 text-[#051910]" />,
            title: "Private Community",
            description: "24/7 access to members, diverse for quick feedback and support."
        }
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

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <section className="relative py-24 px-6 overflow-hidden bg-[#f0f9f4]">
            {/* Animated Background Elements - Smoother & softer */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2ecc71]/10 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[100px] mix-blend-multiply"></div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center relative z-10">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/3 text-[#051910]"
                >
                    <div className="flex items-center gap-2 mb-6">
                        <span className="bg-[#051910]/5 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider text-[#051910] border border-[#051910]/10 flex items-center gap-2">
                            <Zap size={14} className="fill-[#051910]" /> Premium Access
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        Why Become <br /> a Member?
                    </h2>
                    <p className="text-[#051910]/80 text-lg mb-8 leading-relaxed font-medium">
                        Unlock a world of opportunities designed to accelerate your personal and professional growth. It's more than a membership; it's a partnership for your success.
                    </p>

                    {/* Decorative Line */}
                    <div className="w-24 h-1.5 bg-[#d4af37] rounded-full"></div>
                </motion.div>

                {/* Right Cards Grid */}
                <motion.div
                    className="md:w-2/3 grid sm:grid-cols-2 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10, rotate: 1 }}
                            className="group relative bg-gradient-to-br from-[#fff9ee]/90 to-[#fff0c9]/80 backdrop-blur-xl p-8 rounded-3xl border border-[#d4af37]/30 shadow-xl hover:shadow-[#d4af37]/20 transition-all duration-300 overflow-hidden"
                        >
                            {/* Inner Glow on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/0 via-[#d4af37]/10 to-[#d4af37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="w-16 h-16 bg-[#051910] rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6 relative z-10">
                                {React.cloneElement(benefit.icon, { className: "w-8 h-8 text-[#d4af37]" })}
                            </div>
                            <h3 className="text-[#051910] font-bold text-xl mb-3 relative z-10">{benefit.title}</h3>
                            <p className="text-[#051910]/70 text-sm leading-relaxed font-medium relative z-10">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default MembershipBenefits;
