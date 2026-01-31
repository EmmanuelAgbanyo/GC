import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-forest-green text-center mb-16">Stories from the Circle</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Testimonial 1 */}
                    <div className="bg-white p-8 border border-gray-100 shadow-lg rounded-lg relative">
                        <Quote className="text-gold opacity-30 w-12 h-12 absolute top-6 left-6" />
                        <p className="text-gray-600 italic mb-8 relative z-10 pt-8 leading-relaxed">
                            "I felt completely stuck in my career. Joining The Growth Circle gave me the accountability I needed to finally launch my own Agency. The people here genuinely care."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                <img
                                    src="/images/speakers/courage-mensah.jpg"
                                    alt="Mr. Courage Mensah"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-forest-green text-sm">Mr. Courage Mensah</h4>
                                <p className="text-gold text-xs font-bold uppercase">Entrepreneur</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-white p-8 border border-gray-100 shadow-lg rounded-lg relative">
                        <Quote className="text-gold opacity-30 w-12 h-12 absolute top-6 left-6" />
                        <p className="text-gray-600 italic mb-8 relative z-10 pt-8 leading-relaxed">
                            "The curated meetups are unlike any other networking event I've attended. No fluff, just deep conversations and actionable advice. It's been a game changer."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                <img
                                    src="/images/speakers/james-kliffin.png"
                                    alt="Mr. James Kliffin"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-forest-green text-sm">Mr. James Kliffin</h4>
                                <p className="text-gold text-xs font-bold uppercase">Co-Founder & CEO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
