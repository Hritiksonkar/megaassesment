import React from 'react';
import { Award, Shield, ThumbsUp } from 'lucide-react';

const About = ({ content }) => {
    return (
        <section id="about" className="section-padding bg-slate-900 overflow-hidden relative">
            {/* Decorative Orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-600/10 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="w-full lg:w-1/2 relative">
                        <div className="rounded-[40px] overflow-hidden border-8 border-white/5 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=1200"
                                alt="Developer"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 bg-primary-600 p-8 rounded-3xl text-white shadow-2xl animate-fade-in hidden md:block">
                            <span className="text-5xl font-bold mb-2 block">25+</span>
                            <span className="text-sm font-semibold uppercase tracking-wider">Years of Trust</span>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 text-white">
                        <span className="text-primary-500 font-bold uppercase tracking-widest text-sm mb-4 block">Legacy Driven</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">About Eden Developers</h2>
                        <div className="text-gray-400 text-lg leading-relaxed mb-10 space-y-6">
                            {content || (
                                <>
                                    <p>Eden Developers has been at the forefront of luxury real estate for over two decades, consistently delivering projects that set new standards in quality and design.</p>
                                    <p>Our commitment to excellence is reflected in every project we undertake, ensuring that our residents enjoy a life of comfort, style, and security.</p>
                                </>
                            )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary-500">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold">Award Winning</h4>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest">15+ National Awards</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary-500">
                                    <Shield size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold">Transparent Deeds</h4>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest">Clear Titles Guaranteed</p>
                                </div>
                            </div>
                        </div>

                        <button className="mt-12 px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-primary-500 hover:text-white transition-all duration-300">
                            Download Corporate Profile
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
