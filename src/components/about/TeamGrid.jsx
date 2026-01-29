import React from 'react';
import { Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const TeamGrid = () => {
    const team = [
        {
            name: "David Chen",
            role: "Founder & CEO",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop"
        },
        {
            name: "Elena Rodriguez",
            role: "Head of Community",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
        },
        {
            name: "Marcus Johnson",
            role: "Director of Strategy",
            image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2587&auto=format&fit=crop"
        },
        {
            name: "Sarah Jenkins",
            role: "Events Lead",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="bg-gray-50 py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-forest-green mb-6">Meet the Team</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">The passionate people behind the scenes fueling your growth and curating your experience.</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                        >
                            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <a href="#" className="text-white hover:text-gold flex items-center gap-2 text-sm font-bold">
                                        <Linkedin size={18} /> Connect
                                    </a>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="font-bold text-forest-green text-xl mb-1">{member.name}</h3>
                                <p className="text-gold text-xs font-bold uppercase tracking-widest">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default TeamGrid;
