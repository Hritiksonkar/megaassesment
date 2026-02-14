const mongoose = require('mongoose');

const amenitySchema = new mongoose.Schema(
    {
        title: { type: String, default: '' },
        description: { type: String, default: '' },
    },
    { _id: false }
);

const constructionUpdateSchema = new mongoose.Schema(
    {
        label: { type: String, default: '' },
        value: { type: String, default: '' },
    },
    { _id: false }
);

const faqSchema = new mongoose.Schema(
    {
        question: { type: String, default: '' },
        answer: { type: String, default: '' },
    },
    { _id: false }
);

const contentSchema = new mongoose.Schema(
    {
        heroTitle: { type: String, default: '' },
        heroSubtitle: { type: String, default: '' },

        projectOverview: { type: String, default: '' },
        nearbyConnectivity: { type: String, default: '' },

        amenities: { type: [amenitySchema], default: [] },

        aboutUs: { type: String, default: '' },

        constructionUpdates: { type: [constructionUpdateSchema], default: [] },

        faqs: { type: [faqSchema], default: [] },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Content', contentSchema);
