const express = require('express');
const router = express.Router();
const Director = require('../models/Director');
const Movie = require('../models/Movie');
const { optionalAuth } = require('../middleware/auth');
/**
 * GET /api/directors/search
 * Search directors by name and return brief filmography
 * Auth: Optional
 */
router.get('/search', optionalAuth, async (req, res) => {
  try {
    const q = (req.query.q || '').toString().trim();
    if (!q) return res.status(400).json({ error: 'Query required' });

    // text search with fallback to regex
    let directors = await Director.find({ $text: { $search: q } }).limit(10);
    if (!directors || directors.length === 0) {
      directors = await Director.find({ name: { $regex: q, $options: 'i' } }).limit(10);
    }

    const results = [];
    for (const director of directors) {
      const movies = await Movie.find({ _id: { $in: director.movieIds } })
        .sort({ year: -1 })
        .limit(8);
      results.push({
        id: director._id,
        name: director.name,
        nameEnglish: director.nameEnglish,
        profileUrl: director.profileUrl,
        movies: movies.map(m => ({ id: m._id, title: m.title, year: m.year, posterUrl: m.posterUrl }))
      });
    }

    res.status(200).json({ directors: results });
  } catch (error) {
    console.error('Search directors error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * GET /api/directors/:id
 * Get director details and filmography
 * Auth: Optional
 */
router.get('/:id', optionalAuth, async (req, res) => {
  try {
    const directorId = req.params.id;

    // Find director
    const director = await Director.findById(directorId);

    if (!director) {
      return res.status(404).json({ error: 'Director not found' });
    }

    // Get movies directed by this director
    const movies = await Movie.find({
      'directors.directorId': director._id
    }).sort({ year: -1 });

    // Format movie data
    const filmography = movies.map(movie => ({
      id: movie._id,
      title: movie.title,
      year: movie.year,
      posterUrl: movie.posterUrl
    }));

    res.status(200).json({
      director: {
        id: director._id,
        tmdbId: director.tmdbId,
        name: director.name,
        nameEnglish: director.nameEnglish,
        profileUrl: director.profileUrl,
        movies: filmography
      }
    });
  } catch (error) {
    console.error('Get director error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
