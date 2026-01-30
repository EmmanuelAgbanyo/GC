import React from 'react';

const CommunityCTA = () => {
    return (
        <section className="bg-[#051910] py-24 px-6 relative overflow-hidden">
            {/* Background glow green */}
            <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] bg-[#2ecc71]/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Ready to find your circle?
                </h2>
                <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
                    Join a community that prioritizes authentic connection and tangible growth.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="https://chat.whatsapp.com/IiEYrl55uAcFCQXwBXehg6" target="_blank" rel="noopener noreferrer" className="bg-[#2ecc71] text-[#051910] px-10 py-3 rounded-md font-bold hover:bg-[#27ae60] transition-colors shadow-lg shadow-[#2ecc71]/30">
                        Become a Member
                    </a>
                    <a href="#" className="bg-transparent border border-white/20 text-white px-10 py-3 rounded-md font-bold hover:bg-white/10 transition-colors">
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CommunityCTA;
