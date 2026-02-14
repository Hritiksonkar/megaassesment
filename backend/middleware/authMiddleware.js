const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

async function authMiddleware(req, res, next) {
    try {
        const authHeader = req.headers.authorization || '';
        const [scheme, token] = authHeader.split(' ');

        if (scheme !== 'Bearer' || !token) {
            return res.status(401).json({ message: 'Missing or invalid Authorization header' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const admin = await Admin.findById(decoded.id).select('-password');
        if (!admin) {
            return res.status(401).json({ message: 'Invalid token (admin not found)' });
        }

        // Ensure only the fixed admin account can access protected routes
        if ((admin.email || '').toLowerCase() !== 'admin@gmail.com') {
            return res.status(403).json({ message: 'Forbidden' });
        }

        req.admin = admin;
        return next();
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

module.exports = authMiddleware;
