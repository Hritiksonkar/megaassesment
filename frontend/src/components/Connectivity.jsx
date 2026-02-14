import React from 'react';
import { motion } from 'framer-motion';
import { School, MapPin, Hospital, Train, Car } from 'lucide-react';

const ConnectivityItem = ({ icon: Icon, title, description, time }) => (
    <div className="flex gap-6 items-start p-6 rounded-3xl transition-all hover:bg-white hover:shadow-xl group">
        <div className="w-14 h-14 bg-white shadow-md border border-gray-100 rounded-2xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all shrink-0">
            <Icon size={28} />
        </div>
        <div>
            <h4 className="text-xl font-bold text-gray-900 mb-1">{title}</h4>
            <p className="text-gray-500 text-sm mb-2">{description}</p>
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-bold rounded-full">
                {time}
            </span>
        </div>
    </div>
);

const Connectivity = ({ content }) => {
    const items = [
        { icon: Train, title: 'Metro Station', description: 'Central Metro Line Station', time: '5 Mins' },
        { icon: Hospital, title: 'City Hospital', description: '24/7 Multi-speciality Hospital', time: '10 Mins' },
        { icon: School, title: 'International School', description: 'Top-rated CBSE School', time: '8 Mins' },
        { icon: Car, title: 'Highway Access', description: 'Eastern Express Highway', time: '15 Mins' },
    ];

    return (
        <section id="connectivity" className="section-padding bg-primary-50">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="w-full lg:w-1/3">
                        <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Neighborhood</span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Unmatched Connectivity
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            {content || "Located in the most sought-after neighborhood, our project ensures that everything you need is just a few minutes away. Education, healthcare, and entertainment are right at your doorstep."}
                        </p>
                        <div className="p-8 bg-white rounded-3xl shadow-sm border border-primary-100">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-900 text-lg">Strategic Location</h5>
                                    <p className="text-gray-500 text-sm">Main Street & Oak Avenue</p>
                                </div>
                            </div>
                            <button className="w-full text-primary-600 font-bold flex items-center justify-center gap-2 hover:gap-4 transition-all py-4 border-t border-gray-50 mt-4">
                                Open in Google Maps <MapPin size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {items.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <ConnectivityItem {...item} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Connectivity;
