import React from 'react';
import { motion } from 'framer-motion';

const ProjectOverview = ({ content }) => {
    return (
        <section id="overview" className="section-padding bg-slate-50">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left: Image Collage */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative z-10 w-4/5 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=1000"
                                alt="Architecture"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3/5 aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white z-20">
                            <img
                                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000"
                                alt="Interior"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-600 rounded-3xl -z-10 rotate-12"></div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">About Project</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                Designed for the Extraordinary
                            </h2>
                            <div className="prose prose-lg text-gray-600 leading-relaxed max-w-none">
                                {content || "Our residential project is a sanctuary of sophistication, offering a lifestyle of unrivaled convenience and elegance. Every detail has been meticulously crafted to provide you with the ultimate living experience, combining modern amenities with breathtaking architectural design."}
                            </div>

                            <div className="mt-12 grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-primary-700 font-bold text-xl mb-1">RERA Registered</h4>
                                    <p className="text-gray-500 text-sm">P51800000001</p>
                                </div>
                                <div>
                                    <h4 className="text-primary-700 font-bold text-xl mb-1">Possession</h4>
                                    <p className="text-gray-500 text-sm">December 2027</p>
                                </div>
                            </div>

                            <button className="mt-12 btn-outline">
                                Learn More
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectOverview;
