import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

const Hero = ({ title, subtitle }) => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000"
                    alt="Luxury Real Estate"
                    className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 bg-primary-500/20 backdrop-blur-md border border-primary-500/30 rounded-full text-primary-400 font-bold text-sm mb-6 tracking-wider uppercase">
                            Exclusive Project Launch 2026
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            {title || "Welcome to Eden Estates"}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light">
                            {subtitle || "Experience the pinnacle of luxury living in the heart of the city. Modern architecture meets nature's tranquility."}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <button
                                onClick={() => alert('Downloading brochure...')}
                                className="btn-primary flex items-center justify-center gap-2 group"
                            >
                                Download Brochure
                                <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                            </button>
                            <button
                                onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
                                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-2 group"
                            >
                                Watch Virtual Tour
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Section Content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl"
                >
                    {[
                        { label: 'Total Area', value: '15 Acres' },
                        { label: 'Modern Homes', value: '450+' },
                        { label: 'Green Space', value: '60%' },
                        { label: 'Status', value: 'New Launch' },
                    ].map((stat, i) => (
                        <div key={i} className="text-white">
                            <p className="text-3xl font-bold mb-1">{stat.value}</p>
                            <p className="text-gray-400 text-sm uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
                <div className="w-1 h-12 rounded-full bg-gradient-to-b from-primary-500 to-transparent"></div>
            </div>
        </section>
    );
};

export default Hero;
