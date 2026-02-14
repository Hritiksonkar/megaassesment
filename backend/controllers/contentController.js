const Content = require('../models/Content');

async function getContent(req, res) {
    try {
        let content = await Content.findOne();
        if (!content) {
            content = await Content.create({});
        }
        return res.json(content);
    } catch (err) {
        return res.status(500).json({ message: 'Server error' });
    }
}

async function updateContent(req, res) {
    try {
        const updates = req.body || {};

        const content = await Content.findOneAndUpdate(
            {},
            { $set: updates },
            {
                new: true,
                upsert: true,
                runValidators: true,
            }
        );

        return res.json(content);
    } catch (err) {
        return res.status(500).json({ message: 'Server error' });
    }
}

module.exports = {
    getContent,
    updateContent,
};
