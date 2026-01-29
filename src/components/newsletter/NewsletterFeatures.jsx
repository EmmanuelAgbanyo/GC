import React from 'react';
import { Lightbulb, Calendar, Library } from 'lucide-react';

const NewsletterFeatures = () => {
    const features = [
        {
            icon: <Lightbulb size={24} />,
            title: "Actionable Strategies",
            desc: "Practical frameworks and tips for career builders and entrepreneurs that you can apply immediately.",
            color: "text-gold",
            bg: "bg-[#fff9ee]"
        },
        {
            icon: <Calendar size={24} />,
            title: "Exclusive Invitations",
            desc: "Get early access to community meetups, webinars, and masterminds before they go public.",
            color: "text-teal-600",
            bg: "bg-teal-50"
        },
        {
            icon: <Library size={24} />,
            title: "Curated Resources",
            desc: "Hand-picked tools, books, and podcasts to help you stay accountable and inspired.",
            color: "text-[#2ecc71]",
            bg: "bg-[#f0f9f4]"
        }
    ];

    return (
        <section className="bg-gray-50 py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#051910] mb-4">What's Inside The Newsletter?</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        We respect your inbox. Expect high-value content designed to help you navigate your career and business with intention.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className={`w-14 h-14 rounded-full ${feature.bg} ${feature.color} flex items-center justify-center mb-6`}>
                                {feature.icon}
                            </div>
                            <h3 className="font-bold text-xl text-[#051910] mb-3">{feature.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsletterFeatures;
