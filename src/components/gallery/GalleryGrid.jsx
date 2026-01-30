import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop",
        category: "Networking",
        title: "Summer Mixer 2024"
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
        category: "Workshop",
        title: "Leadership Summit"
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
        category: "Team",
        title: "Community Building"
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
        category: "Panel",
        title: "Tech Trends 2025"
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
        category: "Social",
        title: "Annual Gala"
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop",
        category: "Workshop",
        title: "Startup Bootcamp"
    }
];

const GalleryGrid = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image) => (
                        <div
                            key={image.id}
                            className="group relative h-80 overflow-hidden rounded-xl cursor-pointer"
                            onClick={() => setSelectedImage(image)}
                        >
                            <img
                                src={image.src}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-gold text-xs font-bold uppercase tracking-wider">{image.category}</span>
                                <h3 className="text-white text-xl font-bold">{image.title}</h3>
                            </div>
                            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                <ZoomIn className="text-white" size={20} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
                    <button
                        className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={40} />
                    </button>
                    <div className="max-w-5xl max-h-[90vh] relative" onClick={e => e.stopPropagation()}>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
                        />
                        <div className="mt-4 text-center">
                            <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
                            <span className="text-gold font-medium">{selectedImage.category}</span>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default GalleryGrid;
