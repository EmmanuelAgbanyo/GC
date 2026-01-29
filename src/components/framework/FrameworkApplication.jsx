import React from 'react';
import { Briefcase, Users, User, Building2 } from 'lucide-react';

const FrameworkApplication = () => {
    const applications = [
        {
            icon: <Briefcase size={24} />,
            title: "In Career Growth",
            desc: "Use the framework to navigate pivots, plan promotions, and structure your professional development."
        },
        {
            icon: <Users size={24} />,
            title: "In Leadership",
            desc: "Manage teams and culture by diagnosing friction points and rallying your people around a shared vision."
        },
        {
            icon: <User size={24} />,
            title: "Personal Development",
            desc: "Build your personal brand niche, align your habits with your goals, and measure your own progress."
        },
        {
            icon: <Building2 size={24} />,
            title: "In Organizations",
            desc: "Drive systemic change initiatives, launch new products, or restructure departments for efficiency."
        }
    ];

    return (
        <section className="bg-gray-50 py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#051910] mb-4">How Members Apply It</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        From solo entrepreneurs to corporate executives, the principles remain the same.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {applications.map((app, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-gold/50 transition-colors">
                            <div className="w-12 h-12 rounded-lg bg-[#fff9ee] text-gold flex items-center justify-center mb-6">
                                {app.icon}
                            </div>
                            <h3 className="font-bold text-lg text-[#051910] mb-3">{app.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{app.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="#" className="inline-block bg-[#051910] text-white px-8 py-4 rounded-md font-bold hover:bg-forest-green transition-colors shadow-lg">
                        Start Using FRAMEWORK™
                    </a>
                </div>

            </div>
        </section>
    );
};

export default FrameworkApplication;
