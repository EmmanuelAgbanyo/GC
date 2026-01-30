import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GalleryGrid from '../components/gallery/GalleryGrid';

const Gallery = () => {
    return (
        <div className="min-h-screen bg-white">
            <section className="bg-[#051910] text-white py-20 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Community Gallery</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Capturing the moments that define The Growth Circle. From networking mixers to exclusive workshops.
                    </p>
                </div>
            </section>
            <GalleryGrid />
        </div>
    );
};

export default Gallery;
