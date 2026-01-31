import React, { useState } from 'react';
import { Search, Linkedin, Link as LinkIcon } from 'lucide-react';

const SpeakerGrid = () => {
    const [filter, setFilter] = useState('2025');

    const categories = ["2025", "Leadership", "Entrepreneurship", "Tech & Innovation", "Wellness"];

    const speakers = [
        {
            name: "Rev. Edward Agyekum Kufuor",
            role: "Guest Speaker",
            session: "General Session",
            image: "/images/speakers/rev-edward.png"
        },
        {
            name: "Mr. Courage Mensah",
            role: "Guest Speaker",
            session: "General Session",
            image: "/images/speakers/courage-mensah.jpg"
        },
        {
            name: "Mr. Solomon Owusu",
            role: "Guest Speaker",
            session: "General Session",
            image: "/images/speakers/solomon-owusu.png"
        },
        {
            name: "Mr. James Kliffin",
            role: "Co-Founder",
            session: "General Session",
            image: "/images/speakers/james-kliffin.png",
            linkedin: "https://www.linkedin.com/in/jameskiliffin/"
        },
        {
            name: "Mr. Philip O. Agyemang",
            role: "Co-Founder",
            session: "General Session",
            image: "/images/speakers/philip-agyemang.png"
        },

    ];

    return (
        <section id="speakers" className="bg-white pb-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Guest Speakers & Resource Persons</h2>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat, index) => (
                                <button
                                    key={index}
                                    onClick={() => setFilter(cat)}
                                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${filter === cat
                                        ? 'bg-[#2ecc71] text-white shadow-md'
                                        : 'bg-white border border-gray-200 text-gray-600 hover:border-[#2ecc71] hover:text-[#2ecc71]'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="relative w-full md:w-72">
                        <input
                            type="text"
                            placeholder="Search speakers, topics..."
                            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:border-[#2ecc71] text-sm"
                        />
                        <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {speakers.map((speaker, index) => (
                        <div key={index} className={`bg-white rounded-xl border ${speaker.featured ? 'border-gold shadow-lg ring-1 ring-gold/20' : 'border-gray-100 shadow-sm'} p-8 text-center hover:shadow-xl transition-shadow group relative overflow-hidden`}>
                            {speaker.featured && (
                                <div className="absolute top-4 right-4 bg-gold text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                                    Latest Session
                                </div>
                            )}

                            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-gray-50 mb-4 group-hover:scale-105 transition-transform duration-300">
                                <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 mb-1">{speaker.name}</h3>
                            <p className="text-xs text-gray-500 mb-6 uppercase tracking-wide">{speaker.role}</p>

                            <div className="bg-gray-50 rounded-lg p-4 mb-6">
                                <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Session</p>
                                <p className="text-sm font-medium text-forest-green leading-snug">{speaker.session}</p>
                            </div>

                            <a
                                href={speaker.linkedin || "#"}
                                target={speaker.linkedin ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className={`w-full flex items-center justify-center gap-2 border border-gray-200 py-2.5 rounded-md text-xs font-bold transition-colors ${speaker.linkedin ? 'text-[#0077b5] border-[#0077b5] hover:bg-[#0077b5] hover:text-white' : 'text-gray-400 cursor-not-allowed hover:border-gray-200'}`}
                                onClick={(e) => !speaker.linkedin && e.preventDefault()}
                            >
                                <Linkedin size={14} /> {speaker.linkedin ? "Connect on LinkedIn" : "LinkedIn Not Available"}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpeakerGrid;
