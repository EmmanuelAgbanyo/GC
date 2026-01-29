import React from 'react';

const CommunityGrid = () => {
    return (
        <section className="bg-gray-50 py-10 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-[#051910]">Meet the Community</h2>
                </div>

                {/* 5-Image Mosaic Grid */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[250px]">

                    {/* Row 1 */}
                    <div className="md:col-span-2 rounded-2xl overflow-hidden group relative">
                        <img
                            src="/images/community/img1.jpg"
                            alt="Community Gathering"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </div>

                    <div className="md:col-span-2 rounded-2xl overflow-hidden group relative">
                        <img
                            src="/images/community/img2.jpg"
                            alt="Members Smiling"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </div>

                    <div className="md:col-span-2 rounded-2xl overflow-hidden group relative">
                        <img
                            src="/images/community/img3.jpg"
                            alt="Growth Circle T-Shirts"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </div>

                    {/* Row 2 */}
                    <div className="md:col-span-3 rounded-2xl overflow-hidden group relative">
                        <img
                            src="/images/community/img4.jpg"
                            alt="Networking Event"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </div>

                    <div className="md:col-span-3 rounded-2xl overflow-hidden group relative">
                        <img
                            src="/images/community/img5.jpg"
                            alt="Cafe Meeting"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CommunityGrid;
