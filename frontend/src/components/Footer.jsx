import React from 'react';
import { Landmark, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white">
                                <Landmark size={24} />
                            </div>
                            <span className="text-2xl font-bold">EdenEstates</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Crafting luxury living spaces that blend modern comfort with timeless elegance. Your dream home awaits.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary-600 hover:border-primary-600 transition-all text-gray-400 hover:text-white">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#overview" className="hover:text-primary-400 transition-colors">Project Overview</a></li>
                            <li><a href="#amenities" className="hover:text-primary-400 transition-colors">Amenities</a></li>
                            <li><a href="#connectivity" className="hover:text-primary-400 transition-colors">Connectivity</a></li>
                            <li><a href="#about" className="hover:text-primary-400 transition-colors">About Us</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex gap-3">
                                <Mail className="text-primary-500 shrink-0" size={20} />
                                <span>contact@edenestates.com</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="text-primary-500 shrink-0" size={20} />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex gap-3">
                                <MapPin className="text-primary-500 shrink-0" size={20} />
                                <span>123 Luxury Lane, Green Valley, Mumbai - 400001</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
                        <p className="text-gray-400 mb-4">Subscribe to get the latest construction updates and offers.</p>
                        <form
                            className="relative"
                            onSubmit={(e) => {
                                e.preventDefault();
                                alert('Thank you for subscribing!');
                            }}
                        >
                            <input
                                type="email"
                                required
                                placeholder="Email address"
                                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                            />
                            <button type="submit" className="absolute right-2 top-2 bottom-2 bg-primary-600 text-white px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                    <p>© 2026 EdenEstates. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
