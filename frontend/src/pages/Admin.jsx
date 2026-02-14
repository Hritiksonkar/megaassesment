import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { loginUser, getContent, updateContent } from '../services/api';
import { LogOut, Save, Plus, Trash2, Landmark, Settings, Layout, HelpCircle, HardHat, ChevronRight } from 'lucide-react';

const Admin = () => {
    const { login, logout, isAuthenticated } = useAuth();
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('general');

    useEffect(() => {
        if (isAuthenticated) {
            fetchContent();
        }
    }, [isAuthenticated]);

    const fetchContent = async () => {
        try {
            const data = await getContent();
            setContent(data);
        } catch (error) {
            console.error("Error fetching content", error);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const data = await loginUser(credentials);
            login(data.token);
        } catch (error) {
            alert("Login failed. Please check credentials.");
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setLoading(true);
        try {
            await updateContent(content);
            alert("Content updated successfully!");
        } catch (error) {
            alert("Failed to update content.");
        } finally {
            setLoading(false);
        }
    };

    const updateField = (field, value) => {
        setContent({ ...content, [field]: value });
    };

    const addListItem = (listField, newItem) => {
        setContent({ ...content, [listField]: [...content[listField], newItem] });
    };

    const removeListItem = (listField, index) => {
        const updatedList = content[listField].filter((_, i) => i !== index);
        setContent({ ...content, [listField]: updatedList });
    };

    const updateListItem = (listField, index, field, value) => {
        const updatedList = [...content[listField]];
        updatedList[index] = { ...updatedList[index], [field]: value };
        setContent({ ...content, [listField]: updatedList });
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
                <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">
                    <div className="bg-primary-600 p-10 text-white text-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Landmark size={32} />
                        </div>
                        <h2 className="text-3xl font-bold">Admin Portal</h2>
                        <p className="text-primary-100 mt-2">Sign in to manage your project</p>
                    </div>
                    <form className="p-10 space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest">Email Address</label>
                            <input
                                type="email"
                                required
                                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all font-medium"
                                placeholder="admin@edenestates.com"
                                value={credentials.email}
                                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest">Password</label>
                            <input
                                type="password"
                                required
                                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all font-medium"
                                placeholder="••••••••"
                                value={credentials.password}
                                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-primary-600 text-white rounded-2xl font-bold text-lg hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/30 active:scale-95 disabled:opacity-50"
                        >
                            {loading ? "Authenticating..." : "Login to Dashboard"}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    if (!content) return <div className="p-10 text-center font-bold text-primary-600 animate-pulse">Loading dashboard...</div>;

    const SidebarItem = ({ id, icon: Icon, label }) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`w-full flex items-center justify-between gap-4 px-6 py-4 rounded-2xl font-semibold transition-all ${activeTab === id ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/20' : 'text-gray-500 hover:bg-slate-100'}`}
        >
            <div className="flex items-center gap-4">
                <Icon size={20} />
                {label}
            </div>
            {activeTab === id && <ChevronRight size={18} />}
        </button>
    );

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r border-slate-200 p-8 hidden lg:flex flex-col gap-2 sticky top-0 h-screen">
                <div className="flex items-center gap-3 mb-12">
                    <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white">
                        <Landmark size={24} />
                    </div>
                    <span className="text-xl font-bold">Admin Panel</span>
                </div>

                <div className="space-y-2">
                    <SidebarItem id="general" icon={Layout} label="General Content" />
                    <SidebarItem id="amenities" icon={Settings} label="Amenities" />
                    <SidebarItem id="construction" icon={HardHat} label="Construction" />
                    <SidebarItem id="faq" icon={HelpCircle} label="FAQ" />
                </div>

                <div className="mt-auto pt-8 border-t border-slate-100">
                    <button
                        onClick={logout}
                        className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-semibold text-rose-500 hover:bg-rose-50 transition-all"
                    >
                        <LogOut size={20} />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 md:p-12 overflow-y-auto">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 capitalize">{activeTab.replace(/([A-Z])/g, ' $1')} Management</h1>
                        <p className="text-gray-500">Update your website content in real-time</p>
                    </div>
                    <button
                        onClick={handleSave}
                        disabled={loading}
                        className="px-8 py-3 bg-primary-600 text-white rounded-full font-bold flex items-center gap-2 hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/30 disabled:opacity-50"
                    >
                        <Save size={20} />
                        {loading ? "Saving..." : "Save Changes"}
                    </button>
                </header>

                {/* Form Container */}
                <div className="max-w-4xl space-y-8 pb-20">
                    {activeTab === 'general' && (
                        <div className="space-y-8 animate-fade-in">
                            <div className="card border-none shadow-md">
                                <h3 className="text-xl font-bold mb-6 text-gray-800">Hero Section</h3>
                                <div className="space-y-6">
                                    <div>
                                        <label className="text-xs font-bold text-gray-400 block mb-2 uppercase tracking-widest">Hero Title</label>
                                        <input
                                            className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary-500 focus:bg-white transition-all outline-none font-medium"
                                            value={content.heroTitle}
                                            onChange={(e) => updateField('heroTitle', e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-gray-400 block mb-2 uppercase tracking-widest">Hero Subtitle</label>
                                        <textarea
                                            className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary-500 focus:bg-white transition-all outline-none h-32 font-medium"
                                            value={content.heroSubtitle}
                                            onChange={(e) => updateField('heroSubtitle', e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="card border-none shadow-md">
                                <h3 className="text-xl font-bold mb-6 text-gray-800">Content Sections</h3>
                                <div className="space-y-6">
                                    <div>
                                        <label className="text-xs font-bold text-gray-400 block mb-2 uppercase tracking-widest">Project Overview</label>
                                        <textarea
                                            className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary-500 focus:bg-white transition-all outline-none h-40 font-medium"
                                            value={content.projectOverview}
                                            onChange={(e) => updateField('projectOverview', e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-gray-400 block mb-2 uppercase tracking-widest">Nearby Connectivity</label>
                                        <textarea
                                            className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary-500 focus:bg-white transition-all outline-none h-40 font-medium"
                                            value={content.nearbyConnectivity}
                                            onChange={(e) => updateField('nearbyConnectivity', e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-gray-400 block mb-2 uppercase tracking-widest">About Us</label>
                                        <textarea
                                            className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary-500 focus:bg-white transition-all outline-none h-40 font-medium"
                                            value={content.aboutUs}
                                            onChange={(e) => updateField('aboutUs', e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'amenities' && (
                        <div className="space-y-6 animate-fade-in">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h3 className="text-xl font-bold">Manage Amenities</h3>
                                    <p className="text-gray-500 text-sm">Add or remove lifestyle features</p>
                                </div>
                                <button
                                    onClick={() => addListItem('amenities', { title: 'New Amenity', description: '' })}
                                    className="px-6 py-3 bg-primary-600 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-primary-700 shadow-lg shadow-primary-500/20 active:scale-95 transition-all text-sm"
                                >
                                    <Plus size={18} /> Add New
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {content.amenities.map((item, i) => (
                                    <div key={i} className="card border-none shadow-md space-y-4 group">
                                        <div className="flex justify-between items-start">
                                            <div className="flex-1 space-y-4">
                                                <input
                                                    placeholder="Amenity Title"
                                                    className="w-full text-lg font-bold border-b border-transparent focus:border-primary-500 outline-none transition-all"
                                                    value={item.title}
                                                    onChange={(e) => updateListItem('amenities', i, 'title', e.target.value)}
                                                />
                                                <textarea
                                                    placeholder="Description"
                                                    className="w-full text-gray-500 outline-none text-sm font-medium h-20 bg-slate-50 rounded-xl p-3 border border-slate-100 focus:bg-white transition-all"
                                                    value={item.description}
                                                    onChange={(e) => updateListItem('amenities', i, 'description', e.target.value)}
                                                />
                                            </div>
                                            <button
                                                onClick={() => removeListItem('amenities', i)}
                                                className="p-3 text-rose-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors ml-4"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'construction' && (
                        <div className="space-y-6 animate-fade-in">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h3 className="text-xl font-bold">Construction Updates</h3>
                                    <p className="text-gray-500 text-sm">Track real-time progress of milestones</p>
                                </div>
                                <button
                                    onClick={() => addListItem('constructionUpdates', { label: 'New Milestone', value: 0 })}
                                    className="px-6 py-3 bg-primary-600 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-primary-700 shadow-lg shadow-primary-500/20 active:scale-95 transition-all text-sm"
                                >
                                    <Plus size={18} /> Add Milestone
                                </button>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                {content.constructionUpdates.map((item, i) => (
                                    <div key={i} className="card border-none shadow-md flex items-center gap-8">
                                        <div className="flex-1">
                                            <div className="flex justify-between mb-4">
                                                <input
                                                    placeholder="e.g. Foundation Piling"
                                                    className="font-bold text-gray-800 outline-none text-lg border-b border-transparent focus:border-primary-500"
                                                    value={item.label}
                                                    onChange={(e) => updateListItem('constructionUpdates', i, 'label', e.target.value)}
                                                />
                                                <span className="text-2xl font-black text-primary-600">{item.value}%</span>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <input
                                                    type="range"
                                                    min="0"
                                                    max="100"
                                                    className="flex-1 h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary-600"
                                                    value={item.value}
                                                    onChange={(e) => updateListItem('constructionUpdates', i, 'value', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => removeListItem('constructionUpdates', i)}
                                            className="p-4 text-rose-400 hover:text-rose-600 hover:bg-rose-50 rounded-2xl transition-colors"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'faq' && (
                        <div className="space-y-6 animate-fade-in">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h3 className="text-xl font-bold">Frequently Asked Questions</h3>
                                    <p className="text-gray-500 text-sm">Manage entries for the information desk</p>
                                </div>
                                <button
                                    onClick={() => addListItem('faqs', { question: 'New Question', answer: '' })}
                                    className="px-6 py-3 bg-primary-600 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-primary-700 shadow-lg shadow-primary-500/20 active:scale-95 transition-all text-sm"
                                >
                                    <Plus size={18} /> Add FAQ
                                </button>
                            </div>
                            <div className="space-y-6">
                                {content.faqs.map((item, i) => (
                                    <div key={i} className="card border-none shadow-md space-y-6">
                                        <div className="flex justify-between items-start gap-6">
                                            <div className="flex-1 space-y-6">
                                                <div>
                                                    <label className="text-xs font-bold text-gray-400 block mb-2 uppercase tracking-widest">Question</label>
                                                    <input
                                                        className="w-full text-lg font-bold text-gray-800 bg-slate-50 px-5 py-4 rounded-2xl border border-slate-100 focus:bg-white focus:border-primary-500 outline-none transition-all"
                                                        value={item.question}
                                                        onChange={(e) => updateListItem('faqs', i, 'question', e.target.value)}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-xs font-bold text-gray-400 block mb-2 uppercase tracking-widest">Answer</label>
                                                    <textarea
                                                        className="w-full text-gray-600 font-medium px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-primary-500 outline-none h-32 transition-all p-4"
                                                        value={item.answer}
                                                        onChange={(e) => updateListItem('faqs', i, 'answer', e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => removeListItem('faqs', i)}
                                                className="p-4 text-rose-400 hover:text-rose-600 hover:bg-rose-50 rounded-2xl transition-colors shrink-0"
                                            >
                                                <Trash2 size={24} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Admin;
