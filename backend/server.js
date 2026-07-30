const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
const path     = require('path');
require('dotenv').config();

const authRoutes  = require('./routes/auth');
const movieRoutes = require('./routes/movies');
const adminRoutes = require('./routes/admin');

const app = express();

// middleware
app.use(cors({ origin: '*' }));
app.use(express.json());

// serve admin panel
app.use('/admin-panel', express.static(path.join(__dirname, 'admin')));

// routes
app.use('/api/auth',   authRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/admin',  adminRoutes);

// health check
app.get('/', (req, res) => {
    res.json({ message: '🚀 Amazon Prime Video API is running!', status: 'ok' });
});

// connect MongoDB then start server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('✅ MongoDB Atlas connected!');
        app.listen(process.env.PORT, () => {
            console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
            console.log(`🔐 Admin panel: http://localhost:${process.env.PORT}/admin-panel`);
        });
    })
    .catch((err) => {
        console.error('❌ MongoDB connection failed:', err.message);
    });
