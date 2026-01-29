import React from 'react';
import { Calendar, Users, Library, MessageSquare } from 'lucide-react';

const MembershipBenefits = () => {
    const benefits = [
        {
            icon: <Calendar className="w-6 h-6 text-gold" />,
            title: "Curated Meetups",
            description: "Monthly gatherings focused on key topics and authentic connection."
        },
        {
            icon: <Users className="w-6 h-6 text-gold" />,
            title: "Accountability Pods",
            description: "Small, dedicated groups to help you set and crush your quarterly goals."
        },
        {
            icon: <Library className="w-6 h-6 text-gold" />,
            title: "Resource Library",
            description: "Exclusive access to recorded talks, templates, and career guides."
        },
        {
            icon: <MessageSquare className="w-6 h-6 text-gold" />,
            title: "Private Community",
            description: "24/7 access to members, diverse for quick feedback and support."
        }
    ];

    return (
        <section className="bg-[#0f1110] py-20 px-6 border-t border-white/5">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">

                <div className="md:w-1/3">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Become a <br /> Member</h2>
                    <p className="text-white/60 mb-8">
                        Unlock exclusive benefits designed to accelerate your personal and professional development every step of the way.
                    </p>
                    <a href="#" className="bg-gold text-forest-green px-8 py-3 font-bold hover:bg-gold-hover transition-colors inline-block rounded-sm">
                        View Membership Plans
                    </a>
                </div>

                <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="mb-4">{benefit.icon}</div>
                            <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
                            <p className="text-white/60 text-sm leading-relaxed">{benefit.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default MembershipBenefits;
