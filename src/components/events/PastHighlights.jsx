import React from 'react';
import { Lightbulb, Quote } from 'lucide-react';

const PastHighlights = () => {
    return (
        <section className="py-24 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 flex justify-between items-end">
                    <div>
                        <h2 className="text-3xl font-bold text-[#051910] mb-2">Past Highlights</h2>
                        <p className="text-gray-500 max-w-2xl">
                            See what we've been up to. Our community is built on shared experiences and actionable takeaways.
                        </p>
                    </div>
                    <a href="/gallery" className="hidden md:flex items-center gap-2 text-forest-green font-bold hover:text-gold transition-colors">
                        View Full Gallery
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </a>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-64 overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070&auto=format&fit=crop"
                                alt="Mixer"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded text-xs font-bold">
                                August Mixer
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-[#051910] mb-3">Summer Networking Mixer</h3>
                            <p className="text-gray-500 mb-6 leading-relaxed">
                                Over 100 professionals gathered to break bread and barriers. We facilitated 50+ new mentorship connections in a single evening.
                            </p>

                            <div className="bg-[#fff9ee] border border-gold/20 p-5 rounded-lg flex gap-4">
                                <Lightbulb size={24} className="text-gold shrink-0 mt-1" />
                                <div>
                                    <span className="text-gold text-xs font-bold tracking-widest uppercase block mb-1">Key Takeaway</span>
                                    <p className="text-[#051910] text-sm italic font-medium max-w-xs">
                                        "Your network is your net worth only if you actively invest in it."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-64 overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
                                alt="AI Talk"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded text-xs font-bold">
                                Tech Panel
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-[#051910] mb-3">The Future of AI in Business</h3>
                            <p className="text-gray-500 mb-6 leading-relaxed">
                                A deep dive into how AI tools can automate mundane tasks for entrepreneurs. Featuring guest speakers from leading tech firms.
                            </p>

                            <div className="bg-[#f0f9f4] border border-[#2ecc71]/20 p-5 rounded-lg flex gap-4">
                                <Lightbulb size={24} className="text-[#2ecc71] shrink-0 mt-1" />
                                <div>
                                    <span className="text-[#2ecc71] text-xs font-bold tracking-widest uppercase block mb-1">Key Takeaway</span>
                                    <p className="text-[#051910] text-sm italic font-medium max-w-xs">
                                        "AI isn't replacing humans; humans using AI are replacing humans who don't."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 md:hidden text-center">
                    <a href="/gallery" className="inline-flex items-center gap-2 text-forest-green font-bold hover:text-gold transition-colors">
                        View Full Gallery
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PastHighlights;
