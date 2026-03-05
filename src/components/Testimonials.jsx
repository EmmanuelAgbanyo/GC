import React from 'react';
import { Quote } from 'lucide-react';
import { useCMS } from '../context/CMSContext';

const Testimonials = () => {
    const { cmsData } = useCMS();
    const testimonials = cmsData.testimonials;

    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-forest-green text-center mb-16">Stories from the Circle</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((t) => (
                        <div key={t.id} className="bg-white p-8 border border-gray-100 shadow-lg rounded-lg relative">
                            <Quote className="text-gold opacity-30 w-12 h-12 absolute top-6 left-6" />
                            <p className="text-gray-600 italic mb-8 relative z-10 pt-8 leading-relaxed">
                                "{t.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-forest-green text-sm">{t.name}</h4>
                                    <p className="text-gold text-xs font-bold uppercase">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
