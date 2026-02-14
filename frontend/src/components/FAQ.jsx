import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
    <div className={`mb-4 overflow-hidden transition-all duration-300 rounded-3xl border ${isOpen ? 'bg-primary-50 border-primary-200' : 'bg-white border-gray-100 hover:border-primary-100 shadow-sm'}`}>
        <button
            className="w-full flex items-center justify-between p-6 text-left"
            onClick={onClick}
        >
            <span className={`text-lg font-bold ${isOpen ? 'text-primary-800' : 'text-gray-900'}`}>{question}</span>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-primary-600 text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
            </div>
        </button>
        <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-primary-100/50">
                {answer}
            </div>
        </div>
    </div>
);

const FAQ = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const defaultFaqs = [
        { question: "What is the expected possession date?", answer: "The project is expected to be completed and possession handed over by December 2027. We are currently on schedule." },
        { question: "Is the project RERA registered?", answer: "Yes, the project is fully RERA registered. The RERA registration number is P51800000001." },
        { question: "Are there any mortgage or loan facilities available?", answer: "Yes, we have tie-ups with all major banks including SBI, HDFC, ICICI, and Axis Bank for easy loan approvals." },
        { question: "What are the configuration types available?", answer: "We offer premium 2 BHK, 3 BHK, and 4 BHK luxury residences with spacious balconies and modular kitchens." },
        { question: "What kind of security is provided in the complex?", answer: "We provide 24/7 security with CCTV surveillance, biometrically controlled access, and well-trained security personnel." },
    ];

    const displayFaqs = faqs && faqs.length > 0 ? faqs : defaultFaqs;

    return (
        <section id="faq" className="section-padding bg-white">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="w-full lg:w-1/3">
                        <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Information Desk</span>
                        <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-8">Frequently Asked Questions</h2>
                        <p className="text-gray-500 leading-relaxed mb-8">
                            Find answers to common questions about our project. If you have any other queries, feel free to contact our sales team.
                        </p>
                        <div className="p-8 bg-primary-600 rounded-3xl text-white shadow-xl shadow-primary-500/20">
                            <h4 className="text-xl font-bold mb-4">Still have questions?</h4>
                            <p className="text-primary-100 mb-6 font-light">Contact our dedicated support representative today.</p>
                            <button
                                onClick={() => document.querySelector('footer').scrollIntoView({ behavior: 'smooth' })}
                                className="w-full py-3 bg-white text-primary-600 rounded-2xl font-bold hover:bg-primary-50 transition-colors"
                            >
                                Get in Touch
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-2/3">
                        {displayFaqs.map((faq, i) => (
                            <FAQItem
                                key={i}
                                {...faq}
                                isOpen={openIndex === i}
                                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
