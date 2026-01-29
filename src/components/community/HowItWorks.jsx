import React from 'react';
import { Calendar, GraduationCap, Users, MessageSquare } from 'lucide-react';

const HowItWorks = () => {
    const features = [
        {
            icon: <Calendar size={28} className="text-[#2ecc71]" />,
            title: "Monthly Meetups",
            desc: "Regular in-person and virtual gatherings to recharge and connect deeply with peers."
        },
        {
            icon: <GraduationCap size={28} className="text-[#2ecc71]" />,
            title: "Learning Labs",
            desc: "Deep dives into specific skills facilitated by industry experts and thought leaders."
        },
        {
            icon: <Users size={28} className="text-[#2ecc71]" />,
            title: "Accountability Pods",
            desc: "Small, dedicated groups focused on goal tracking, honest feedback, and mutual support."
        },
        {
            icon: <MessageSquare size={28} className="text-[#2ecc71]" />,
            title: "Debates & Talks",
            desc: "Structured discussions and friendly debates that sharpen your critical thinking."
        }
    ];

    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#051910] mb-4">How the Community Works</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        We foster growth through multiple channels designed for different learning styles and interaction preferences. Pick what works for you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#2ecc71]/30 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-[#f0f9f4] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#2ecc71]/10 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="font-bold text-lg text-[#051910] mb-3">{feature.title}</h3>
                            <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
