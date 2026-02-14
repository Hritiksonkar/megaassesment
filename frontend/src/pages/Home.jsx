import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProjectOverview from '../components/ProjectOverview';
import Connectivity from '../components/Connectivity';
import Amenities from '../components/Amenities';
import About from '../components/About';
import Construction from '../components/Construction';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { getContent } from '../services/api';

const Home = () => {
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getContent();
                setContent(data);
            } catch (error) {
                console.error("Failed to fetch content", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="relative">
                    <div className="w-20 h-20 border-4 border-primary-100 border-t-primary-600 rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center font-black text-primary-600">E</div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white selection:bg-primary-100 selection:text-primary-900">
            <Header />
            <Hero title={content?.heroTitle} subtitle={content?.heroSubtitle} />
            <ProjectOverview content={content?.projectOverview} />
            <Connectivity content={content?.nearbyConnectivity} />
            <Amenities amenities={content?.amenities} />
            <About content={content?.aboutUs} />
            <Construction updates={content?.constructionUpdates} />
            <FAQ faqs={content?.faqs} />
            <Footer />
        </div>
    );
};

export default Home;
