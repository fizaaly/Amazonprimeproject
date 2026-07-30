const express = require('express');
const Movie   = require('../models/Movie');

const router = express.Router();

// GET /api/movies  — get all movies
router.get('/', async (req, res) => {
    try {
        const { genre, type, search } = req.query;
        let filter = {};

        if (genre)  filter.genre  = { $in: [genre] };
        if (type)   filter.type   = type;
        if (search) filter.title  = { $regex: search, $options: 'i' };

        const movies = await Movie.find(filter).sort({ createdAt: -1 });
        res.json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET /api/movies/trending
router.get('/trending', async (req, res) => {
    try {
        const movies = await Movie.find({ isTrending: true }).limit(10);
        res.json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET /api/movies/:id
router.get('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).json({ message: 'Movie not found' });
        res.json(movie);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST /api/movies  — add a movie (admin use)
router.post('/', async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        res.status(201).json(movie);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
