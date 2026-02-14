const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

function signToken(admin) {
    return jwt.sign(
        {
            id: admin._id.toString(),
            email: admin.email,
            role: 'admin',
        },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );
}

async function login(req, res) {
    try {
        const { email, password } = req.body || {};

        if (!email || !password) {
            return res.status(400).json({ message: 'email and password are required' });
        }

        const admin = await Admin.findOne({ email: String(email).toLowerCase().trim() });
        if (!admin) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const ok = await bcrypt.compare(String(password), admin.password);
        if (!ok) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = signToken(admin);
        return res.json({ token });
    } catch (err) {
        return res.status(500).json({ message: 'Server error' });
    }
}

module.exports = {
    login,
};
