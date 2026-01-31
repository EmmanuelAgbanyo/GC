import React from 'react';
import { Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const TeamGrid = () => {
    const team = [
        {
            name: "Mr. James Kliffin",
            role: "Co-Founder",
            image: "/images/speakers/james-kliffin.png",
            linkedin: "https://www.linkedin.com/in/jameskiliffin/"
        },
        {
            name: "Mr. Philip O. Agyemang",
            role: "Co-Founder",
            image: "/images/speakers/philip-agyemang.png"
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
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">The passionate visionaries behind the scenes fueling your growth and curating your experience.</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-12"
                >
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 w-full sm:w-[350px]"
                        >
                            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <a
                                        href={member.linkedin || "#"}
                                        target={member.linkedin ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-2 text-sm font-bold ${member.linkedin ? "text-white hover:text-gold" : "text-gray-400 cursor-not-allowed hidden"}`}
                                        onClick={(e) => !member.linkedin && e.preventDefault()}
                                    >
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
