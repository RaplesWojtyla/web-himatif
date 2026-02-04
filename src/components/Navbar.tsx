'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

const navLinks = [
  { name: 'Beranda', href: '/#home' },
  { name: 'Tentang', href: '/#about' },
  { name: 'Divisi', href: '/#divisions' },
  { name: 'Event', href: '/#events' },
  { name: 'Shop', href: '/#shop' },
  { name: 'Berita', href: '/#news' },
];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-himatif-dark/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-himatif-dark">
                        <img src={'/images/logo_himatif.png'} />
                    </div>
                    <span className={`text-xl font-bold tracking-wider ${isScrolled || isOpen ? 'text-white' : 'text-white'}`}>
                        HIMATIF
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-white hover:text-himatif-accent font-medium text-sm transition-colors uppercase tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#shop"
                        className="flex items-center gap-2 bg-himatif-accent text-himatif-dark px-4 py-2 rounded-full font-bold text-sm hover:bg-yellow-300 transition-colors"
                    >
                        <ShoppingBag size={16} /> Store
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed top-0 left-0 w-full h-screen bg-himatif-dark transform transition-transform duration-300 ease-in-out z-40 flex flex-col justify-center items-center gap-8 ${isOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                <button
                    className="absolute top-6 right-6 text-white focus:outline-none"
                    onClick={() => setIsOpen(false)}
                >
                    <X size={32} />
                </button>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-2xl font-bold text-white hover:text-himatif-accent"
                        onClick={() => setIsOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;