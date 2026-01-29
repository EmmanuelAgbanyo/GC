import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white py-4 px-6 md:px-12 flex justify-between items-center relative z-50">
            <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gold rotate-45 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white/20"></div>
                </div>
                <span className="text-xl font-bold tracking-tight text-forest-green">The Growth Circle</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
                <Link to="/about" className="text-forest-green font-medium hover:text-gold transition-colors">About</Link>
                <Link to="/impact" className="text-forest-green font-medium hover:text-gold transition-colors">Hall of Impact</Link>
                <Link to="/events" className="text-forest-green font-medium hover:text-gold transition-colors">Events</Link>
                <Link to="/community" className="text-forest-green font-medium hover:text-gold transition-colors">Community</Link>
                <Link to="/newsletter" className="text-forest-green font-medium hover:text-gold transition-colors">Newsletter</Link>
            </div>

            <div className="hidden md:flex items-center gap-4">
                <Link to="#" className="bg-gold text-forest-green px-6 py-2 font-bold hover:bg-gold-hover transition-colors">Join the Circle</Link>
                <Link to="#" className="bg-forest-green text-white px-6 py-2 font-bold hover:bg-forest-light transition-colors">Login</Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-forest-green" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col gap-4 md:hidden">
                    <Link to="/about" className="text-forest-green font-medium" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/impact" className="text-forest-green font-medium" onClick={() => setIsOpen(false)}>Hall of Impact</Link>
                    <Link to="/events" className="text-forest-green font-medium" onClick={() => setIsOpen(false)}>Events</Link>
                    <Link to="/community" className="text-forest-green font-medium" onClick={() => setIsOpen(false)}>Community</Link>
                    <Link to="/newsletter" className="text-forest-green font-medium" onClick={() => setIsOpen(false)}>Newsletter</Link>
                    <div className="h-px bg-gray-200 my-2"></div>
                    <Link to="#" className="bg-gold text-forest-green px-6 py-3 text-center font-bold" onClick={() => setIsOpen(false)}>Join the Circle</Link>
                    <Link to="#" className="bg-forest-green text-white px-6 py-3 text-center font-bold" onClick={() => setIsOpen(false)}>Login</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
