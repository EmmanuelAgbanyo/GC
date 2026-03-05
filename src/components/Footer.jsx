import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';
import { useCMS } from '../context/CMSContext';

const Footer = () => {
    const { cmsData } = useCMS();
    const { footerDescription, socialLinks } = cmsData.settings;

    return (
        <footer className="bg-[#0a2e21] text-white pt-20 pb-10 px-6 border-t border-white/5">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-16">

                <div className="md:col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                        <img src="/logo.png" alt="The Growth Circle" className="h-10 w-auto object-contain brightness-0 invert" />
                    </div>
                    <p className="text-white/60 text-xs leading-relaxed max-w-xs">
                        {footerDescription}
                    </p>
                </div>

                <div>
                    <h4 className="text-gold font-bold text-sm uppercase tracking-wider mb-6">Community</h4>
                    <ul className="space-y-4 text-sm text-white/70">
                        <li><a href="https://chat.whatsapp.com/IiEYrl55uAcFCQXwBXehg6" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Membership</a></li>
                        <li><a href="#" className="hover:text-gold transition-colors">Events</a></li>
                        <li><a href="#" className="hover:text-gold transition-colors">Code of Conduct</a></li>
                        <li><a href="#" className="hover:text-gold transition-colors">Members</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-gold font-bold text-sm uppercase tracking-wider mb-6">Company</h4>
                    <ul className="space-y-4 text-sm text-white/70">
                        <li><a href="#" className="hover:text-gold transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-gold transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
                        <li><a href="#" className="hover:text-gold transition-colors">Press</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-gold font-bold text-sm uppercase tracking-wider mb-6">Stay Updated</h4>
                    <div className="flex gap-2 mb-4">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-forest-light border border-white/10 text-white px-4 py-2 text-sm w-full focus:outline-none focus:border-gold"
                        />
                        <button className="bg-gold text-forest-green px-4 py-2 font-bold hover:bg-gold-hover transition-colors">
                            &rarr;
                        </button>
                    </div>
                </div>

            </div>

            <div className="max-w-6xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
                <p>&copy; 2026 The Growth Circle. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href={socialLinks?.twitter || '#'} target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
                    </a>
                    <a href={socialLinks?.linkedin || '#'} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
                    </a>
                    <a href={socialLinks?.instagram || '#'} target="_blank" rel="noopener noreferrer">
                        <Instagram className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
