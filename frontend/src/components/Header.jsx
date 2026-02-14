import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Landmark } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Overview', href: '#overview' },
        { name: 'Connectivity', href: '#connectivity' },
        { name: 'Amenities', href: '#amenities' },
        { name: 'About', href: '#about' },
        { name: 'Updates', href: '#updates' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-md py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform shadow-lg shadow-primary-500/30">
                        <Landmark size={24} />
                    </div>
                    <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>EdenEstates</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/80 hover:text-white'}`}>
                            {link.name}
                        </a>
                    ))}
                    <Link to="/admin" className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${isScrolled ? 'bg-primary-600 text-white hover:bg-primary-700' : 'bg-white text-primary-700 hover:bg-primary-50 shadow-md'}`}>
                        Admin Panel
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={28} className="text-gray-900" /> : <Menu size={28} className={isScrolled ? 'text-gray-900' : 'text-white'} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-0 left-0 right-0 h-screen bg-white/95 backdrop-blur-xl z-[-1] flex flex-col items-center justify-center gap-8 animate-fade-in">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-gray-800 hover:text-primary-600 transition-colors">
                            {link.name}
                        </a>
                    ))}
                    <Link to="/admin" onClick={() => setIsMobileMenuOpen(false)} className="bg-primary-600 text-white px-10 py-4 rounded-2xl text-xl font-bold shadow-xl shadow-primary-500/20">
                        Admin Dashboard
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
