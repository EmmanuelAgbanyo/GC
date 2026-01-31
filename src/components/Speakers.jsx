import React from 'react';

const Speakers = () => {
    const speakers = [
        {
            name: "Rev. Edward Agyekum Kufuor",
            role: "Guest Speaker",
            image: "/images/speakers/rev-edward.png"
        },
        {
            name: "Mr. Courage Mensah",
            role: "Guest Speaker",
            image: "/images/speakers/courage-mensah.jpg"
        },
        {
            name: "Mr. Solomon Owusu",
            role: "Guest Speaker",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop"
        },
        {
            name: "Mr. James Kliffin",
            role: "Co-Founder",
            image: "/images/speakers/james-kliffin.png"
        },
        {
            name: "Mr. Philip O. Agyemang",
            role: "Co-Founder",
            image: "/images/speakers/philip-agyemang.png"
        }
    ];

    return (
        <section className="bg-gray-50 py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-forest-green mb-12">Featured Speakers</h2>

                <div className="flex flex-wrap justify-center gap-12">
                    {speakers.map((speaker, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gold bg-white mb-4">
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="font-bold text-forest-green text-lg">{speaker.name}</h3>
                            <p className="text-gray-500 text-sm uppercase tracking-wide">{speaker.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Speakers;
