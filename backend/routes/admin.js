const express = require('express');
const User    = require('../models/User');
const Movie   = require('../models/Movie');

const router = express.Router();

// simple admin auth middleware
function adminAuth(req, res, next) {
    const key = req.headers['x-admin-key'];
    if (key !== process.env.ADMIN_KEY) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
}

// GET /admin/stats
router.get('/stats', adminAuth, async (req, res) => {
    try {
        const totalUsers  = await User.countDocuments();
        const totalMovies = await Movie.countDocuments();
        const recentUsers = await User.find().sort({ createdAt: -1 }).limit(5).select('-password');
        res.json({ totalUsers, totalMovies, recentUsers });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET /admin/users
router.get('/users', adminAuth, async (req, res) => {
    try {
        const users = await User.find().select('-password').sort({ createdAt: -1 });
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE /admin/users/:id
router.delete('/users/:id', adminAuth, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET /admin/movies
router.get('/movies', adminAuth, async (req, res) => {
    try {
        const movies = await Movie.find().sort({ createdAt: -1 });
        res.json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST /admin/movies
router.post('/movies', adminAuth, async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        res.status(201).json(movie);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE /admin/movies/:id
router.delete('/movies/:id', adminAuth, async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.json({ message: 'Movie deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
