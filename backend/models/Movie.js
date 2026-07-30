const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    genre: [{
        type: String
    }],
    year: {
        type: Number
    },
    rating: {
        type: Number,
        min: 0,
        max: 10
    },
    duration: {
        type: String   // e.g. "2h 35m" or "5 Seasons"
    },
    type: {
        type: String,
        enum: ['movie', 'show'],
        default: 'movie'
    },
    image: {
        type: String   // image path
    },
    heroImage: {
        type: String   // hero banner image path
    },
    isTrending: {
        type: Boolean,
        default: false
    },
    isPrimeOriginal: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Movie', movieSchema);
