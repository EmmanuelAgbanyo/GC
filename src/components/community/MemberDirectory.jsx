import React, { useState } from 'react';
import { Search, Linkedin, CheckCircle } from 'lucide-react';

const MemberDirectory = () => {
    const members = [
        {
            name: "Rev. Edward Agyekum Kufuor",
            role: "Guest Speaker",
            image: "/images/speakers/rev-edward.png"
        },
        {
            name: "Mr. Solomon Mensah",
            role: "Entrepreneur & Speaker",
            image: "/images/speakers/solomon-mensah.png"
        },
        {
            name: "Mr. James Kliffin",
            role: "Co-Founder",
            image: "/images/speakers/james-kliffin.png",
            linkedin: "https://www.linkedin.com/in/jameskiliffin/"
        },
        {
            name: "Mr. Solomon Owusu",
            role: "Guest Speaker",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop"
        },
        {
            name: "Mr. Philip O. Agyemang",
            role: "Co-Founder",
            image: "/images/speakers/philip-agyemang.png"
        }
    ];

    return (
        <section id="directory" className="bg-white pb-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-[#051910] mb-2">The Circle Directory</h2>
                        <p className="text-gray-400 text-xs">*Visible members have opted-in to be displayed.</p>
                    </div>

                    <div className="relative w-full md:w-80">
                        <input
                            type="text"
                            placeholder="Search members..."
                            className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-100 bg-gray-50 focus:outline-none focus:border-[#2ecc71] focus:bg-white transition-all text-sm shadow-inner"
                        />
                        <Search size={18} className="absolute left-3 top-3.5 text-gray-400" />
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {members.map((member, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
                            <div className="relative w-24 h-24 mb-4">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full border-2 border-white shadow-md" />
                                <div className="absolute bottom-0 right-0 bg-gold text-white p-1 rounded-full border-2 border-white">
                                    <CheckCircle size={12} fill="currentColor" className="text-white" />
                                </div>
                            </div>

                            <h3 className="font-bold text-[#051910] text-lg mb-1">{member.name}</h3>
                            <p className="text-xs text-gray-500 mb-4 h-8">{member.role}</p>

                            <button className="text-[#0077b5] bg-[#0077b5]/10 p-2 rounded-lg hover:bg-[#0077b5] hover:text-white transition-colors">
                                <Linkedin size={18} />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="border border-gray-200 px-6 py-2 rounded-full text-sm font-medium text-gray-500 hover:border-[#2ecc71] hover:text-[#2ecc71] transition-colors inline-flex items-center gap-2">
                        Load More Members <span className="text-xs">▼</span>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default MemberDirectory;
