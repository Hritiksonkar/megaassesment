import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Dumbbell, Coffee, Trees, ShieldCheck, Gamepad2, Users, Music } from 'lucide-react';

const AmenityCard = ({ icon: Icon, title, description, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="card group hover:bg-primary-600 hover:border-primary-600 transition-all duration-500"
    >
        <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-white group-hover:rotate-[360deg] transition-all duration-700">
            <Icon size={32} />
        </div>
        <h4 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{title}</h4>
        <p className="text-gray-500 group-hover:text-primary-50 transition-colors leading-relaxed">
            {description || "Experience the finest facilities designed for your comfort and leisure."}
        </p>
    </motion.div>
);

const Amenities = ({ amenities }) => {
    const defaultAmenities = [
        { icon: Waves, title: "Infinity Pool", description: "Standard size pool with temperature control." },
        { icon: Dumbbell, title: "State-of-art Gym", description: "Fully equipped fitness center for health enthusiasts." },
        { icon: Coffee, title: "Luxury Clubhouse", description: "Spacious area for social gatherings and events." },
        { icon: Trees, title: "Zen Garden", description: "Peaceful landscape garden for meditation." },
        { icon: ShieldCheck, title: "24/7 Security", description: "Advanced surveillance and security personnel." },
        { icon: Gamepad2, title: "Gaming Zone", description: "Indoor games area for children and adults." },
        { icon: Users, title: "Community Library", description: "Quiet space for reading and learning." },
        { icon: Music, title: "Mini Theatre", description: "Private cinema experience for residents." },
    ];

    const displayAmenities = amenities && amenities.length > 0 ? amenities.map(a => ({
        ...a,
        icon: defaultAmenities.find(d => d.title === a.title)?.icon || Coffee
    })) : defaultAmenities;

    return (
        <section id="amenities" className="section-padding bg-white">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Lifestyle</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">World-Class Amenities</h2>
                    <p className="text-gray-600 text-lg font-light leading-relaxed">
                        Every facility at our project is designed to enhance your lifestyle and provide a sense of luxury and belonging.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {displayAmenities.map((amenity, i) => (
                        <AmenityCard key={i} {...amenity} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Amenities;
