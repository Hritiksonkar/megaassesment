const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

const connectDB = require('./config/db');
const Admin = require('./models/Admin');

const authRoutes = require('./routes/authRoutes');
const contentRoutes = require('./routes/contentRoutes');

dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
app.use(express.json());

app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.use('/api/auth', authRoutes);
app.use('/api/content', contentRoutes);

async function seedAdmin() {
    const email = 'admin@gmail.com';
    const plainPassword = '1234';

    const existing = await Admin.findOne({ email });
    if (existing) return;

    const hashed = await bcrypt.hash(plainPassword, 10);
    await Admin.create({ email, password: hashed });

    // eslint-disable-next-line no-console
    console.log('Seeded admin user: admin@gmail.com / 1234');
}

const PORT = process.env.PORT || 5000;

async function start() {
    try {
        await connectDB(process.env.MONGO_URI);
        await seedAdmin();

        app.listen(PORT, () => {
            // eslint-disable-next-line no-console
            console.log(`Server running on port ${PORT}`);
        });
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        process.exit(1);
    }
}

start();
