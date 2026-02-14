import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock } from 'lucide-react';

const ConstructionItem = ({ label, value }) => (
    <div className="flex flex-col gap-4 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group">
        <div className="flex justify-between items-start z-10">
            <h4 className="text-xl font-bold text-gray-900">{label}</h4>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${parseInt(value) === 100 ? 'bg-primary-600 text-white' : 'bg-primary-100 text-primary-600'}`}>
                {parseInt(value) === 100 ? <CheckCircle size={20} /> : <Clock size={20} />}
            </div>
        </div>

        <div className="w-full bg-gray-100 h-2.5 rounded-full z-10 overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-full bg-primary-600 rounded-full"
            ></motion.div>
        </div>

        <div className="flex justify-between items-center z-10 mt-2">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">{parseInt(value) === 100 ? 'Completed' : 'In Progress'}</span>
            <span className="text-2xl font-black text-primary-600">{value}%</span>
        </div>

        {/* Decorative background number */}
        <div className="absolute -bottom-10 -right-4 text-9xl font-black text-gray-50 group-hover:text-primary-50 transition-colors duration-500 z-0 select-none">
            {value}
        </div>
    </div>
);

const Construction = ({ updates }) => {
    const defaultUpdates = [
        { label: "Excavation Work", value: 100 },
        { label: "Foundation Piling", value: 100 },
        { label: "Basement Slab", value: 85 },
        { label: "Superstructure", value: 40 },
        { label: "Electrical Fitting", value: 15 },
        { label: "Internal Plastering", value: 5 },
    ];

    const displayUpdates = updates && updates.length > 0 ? updates : defaultUpdates;

    return (
        <section id="updates" className="section-padding bg-slate-50">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Construction Status</span>
                        <h2 className="text-4xl font-bold text-gray-900 leading-tight">Live Project Progress</h2>
                        <p className="text-gray-500 mt-4 leading-relaxed">
                            Stay updated with the latest progress of our project. We maintain complete transparency in every phase of construction.
                        </p>
                    </div>
                    <div className="bg-white px-8 py-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                        <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="font-bold text-gray-700">Project Status: On Schedule</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayUpdates.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <ConstructionItem {...item} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Construction;
