import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white py-4 px-6 md:px-12 flex justify-between items-center relative z-50">
            <Link to="/" className="flex items-center gap-2">
                <img src="/logo.png" alt="The Growth Circle" className="h-10 md:h-12 w-auto object-contain" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
                <Link to="/" className="text-forest-green font-medium hover:text-gold transition-colors">Home</Link>
                <Link to="/about" className="text-forest-green font-medium hover:text-gold transition-colors">About</Link>
                <Link to="/impact" className="text-forest-green font-medium hover:text-gold transition-colors">Hall of Impact</Link>
                <Link to="/events" className="text-forest-green font-medium hover:text-gold transition-colors">Events</Link>
                <Link to="/community" className="text-forest-green font-medium hover:text-gold transition-colors">Community</Link>
                <Link to="/gallery" className="text-forest-green font-medium hover:text-gold transition-colors">Gallery</Link>
                <Link to="/newsletter" className="text-forest-green font-medium hover:text-gold transition-colors">Newsletter</Link>
            </div>

            <div className="hidden md:flex items-center gap-4">
                <a href="https://chat.whatsapp.com/IiEYrl55uAcFCQXwBXehg6" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-brand-green to-[#27ae60] text-white px-6 py-2 font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-sm">Join the Circle</a>
                <Link to="#" className="bg-forest-green text-white px-6 py-2 font-bold hover:bg-forest-light transition-colors">Login</Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-forest-green" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col gap-4 md:hidden">
                    <Link to="/" className="text-forest-green font-medium" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" className="text-forest-green font-medium" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/impact" className="text-forest-green font-medium" onClick={() => setIsOpen(false)}>Hall of Impact</Link>
                    <Link to="/events" className="text-forest-green font-medium" onClick={() => setIsOpen(false)}>Events</Link>
                    <Link to="/community" className="text-forest-green font-medium" onClick={() => setIsOpen(false)}>Community</Link>
                    <Link to="/gallery" className="text-forest-green font-medium" onClick={() => setIsOpen(false)}>Gallery</Link>
                    <Link to="/newsletter" className="text-forest-green font-medium" onClick={() => setIsOpen(false)}>Newsletter</Link>
                    <div className="h-px bg-gray-200 my-2"></div>
                    <a href="https://chat.whatsapp.com/IiEYrl55uAcFCQXwBXehg6" target="_blank" rel="noopener noreferrer" className="bg-gold text-forest-green px-6 py-3 text-center font-bold" onClick={() => setIsOpen(false)}>Join the Circle</a>
                    <Link to="#" className="bg-forest-green text-white px-6 py-3 text-center font-bold" onClick={() => setIsOpen(false)}>Login</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
