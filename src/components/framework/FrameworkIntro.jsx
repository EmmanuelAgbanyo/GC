import React from 'react';
import { Compass, Zap, Anchor } from 'lucide-react';

const FrameworkIntro = () => {
    const points = [
        {
            icon: <Compass size={32} className="text-[#2ecc71]" />,
            title: "Why Frameworks Matter",
            desc: "Frameworks provide a shared language and structure. They turn chaos into clarity and vague ideas into actionable plans."
        },
        {
            icon: <Zap size={32} className="text-gold" />,
            title: "Bridging Theory & Practice",
            desc: "We don't just talk about concepts. TRANSFORM™ takes high-level strategy and breaks it down into daily execution."
        },
        {
            icon: <Anchor size={32} className="text-[#2ecc71]" />,
            title: "Personal & Professional",
            desc: "Whether you're managing a team or managing your own career, the principles of diagnosis, alignment, and scale apply universally."
        }
    ];

    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#051910] mb-4">What Is TRANSFORM™?</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        More than just an acronym, it's a complete operating system for growth.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {points.map((point, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center hover:bg-white hover:shadow-xl transition-all duration-300 group">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 mx-auto shadow-sm group-hover:scale-110 transition-transform">
                                {point.icon}
                            </div>
                            <h3 className="font-bold text-xl text-[#051910] mb-3">{point.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{point.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FrameworkIntro;
