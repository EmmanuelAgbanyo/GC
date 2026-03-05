import React from 'react';
import { useCMS } from '../context/CMSContext';

const Speakers = () => {
    const { cmsData } = useCMS();
    const speakers = cmsData.speakers;

    return (
        <section className="bg-gray-50 py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-forest-green mb-12">Featured Speakers</h2>

                <div className="flex flex-wrap justify-center gap-12">
                    {speakers.map((speaker) => (
                        <div key={speaker.id} className="flex flex-col items-center">
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
