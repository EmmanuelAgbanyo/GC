import React from 'react';
import { Users, Clock, Calendar, Mic2 } from 'lucide-react';

const ImpactStats = () => {
    const stats = [
        { icon: <Mic2 size={24} className="text-[#2ecc71]" />, value: "100+", label: "Professionals" },
        { icon: <Calendar size={24} className="text-[#2ecc71]" />, value: "2", label: "Sessions" },
        { icon: <Clock size={24} className="text-[#2ecc71]" />, value: "2025", label: "Since" },
        { icon: <Users size={24} className="text-[#2ecc71]" />, value: "86", label: "Members" },
    ];

    return (
        <section className="py-12 px-6 -mt-8 relative z-20">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 flex flex-col items-start hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-full bg-[#2ecc71]/10 flex items-center justify-center mb-4">
                                {stat.icon}
                            </div>
                            <span className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</span>
                            <span className="text-gray-500 text-sm font-medium">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactStats;
