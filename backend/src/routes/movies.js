// javascript
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Movie = require('../models/Movie');
const Click = require('../models/Click');
const Like = require('../models/Like');
const { optionalAuth, authenticateToken } = require('../middleware/auth');
const { getMovieByTmdbId, searchMoviesOnTMDB } = require('../services/tmdbService');
const { isValidObjectId } = require('../utils/validation');

/**
 * GET /api/movies/popular
 * Get popular movies based on likes and views.
 * Auth: Optional
 */
router.get('/popular', optionalAuth, async (req, res) => {
  try {
    const userId = req.user ? req.user.userId : null;
    const limit = parseInt(req.query.limit) || 20;

    // Get user's liked movies if authenticated
    let likedMovieIds = new Set();
    if (userId) {
      const likes = await Like.find({ userId, targetType: 'movie' });
      likedMovieIds = new Set(likes.map(like => String(like.targetId)));
    }

    // Fetch movies sorted by a popularity score (likes + views)
    const movies = await Movie.find({})
      .sort({ likeCount: -1, viewCount: -1, createdAt: -1 })
      .limit(limit);

    // Format movies with userLiked status
    const formattedMovies = movies.map(movie => ({
      id: String(movie._id),
      title: movie.title,
      year: movie.year,
      genres: movie.genres,
      posterUrl: movie.posterUrl,
      rating: movie.rating,
      userLiked: userId ? likedMovieIds.has(String(movie._id)) : false
    }));

    res.status(200).json({ movies: formattedMovies });
  } catch (error) {
    console.error('Get popular movies error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * GET /api/movies/search
 * Keyword search for movies
 * Auth: Optional
 */
router.get('/search', optionalAuth, async (req, res) => {
  try {
    const { q, genre, year, page = 1, limit = 20 } = req.query;

    if (!q) {
      return res.status(400).json({ error: 'Search query required' });
    }

    const pageNum = parseInt(page, 10) || 1;
    const limitNum = Math.min(parseInt(limit, 10) || 20, 50);
    const skip = (pageNum - 1) * limitNum;

    // Build DB text query
    const query = { $text: { $search: q } };
    if (genre) query.genres = genre;
    if (year) query.year = parseInt(year, 10);

    const total = await Movie.countDocuments(query);
    let movies = await Movie.find(query)
        .sort({ score: { $meta: 'textScore' }, likeCount: -1, viewCount: -1 })
        .skip(skip)
        .limit(limitNum);

    // If no results in DB, fallback to TMDB search service
    if (!movies || movies.length === 0) {
      movies = await searchMoviesOnTMDB(q) || [];
    }

    // Normalize results
    const movieResults = movies.map(m => ({
      id: m._id ? String(m._id) : (m.tmdbId ? String(m.tmdbId) : null),
      title: m.title,
      year: m.year,
      genres: m.genres,
      posterUrl: m.posterUrl,
      rating: m.rating,
      likeCount: m.likeCount || 0,
      viewCount: m.viewCount || 0
    }));

    res.status(200).json({
      movies: movieResults,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total: total || movieResults.length,
        pages: Math.ceil((total || movieResults.length) / limitNum)
      }
    });
  } catch (error) {
    console.error('Search movies error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * GET /api/movies/by-genres
 * Get movies grouped by genres
 * Auth: Optional
 */
router.get('/by-genres', optionalAuth, async (req, res) => {
  try {
    const { genres } = req.query;
    let genreList = [];
    if (genres) {
      genreList = Array.isArray(genres) ? genres : genres.split(',').map(g => g.trim()).filter(g => g);
    }

    if (genreList.length === 0) {
      return res.status(400).json({ error: 'Genres required' });
    }

    const userId = req.user ? req.user.userId : null;
    let likedMovieIds = new Set();
    if (userId) {
      const likes = await Like.find({ userId, targetType: 'movie' });
      likedMovieIds = new Set(likes.map(like => String(like.targetId)));
    }

    const genreSections = await Promise.all(
      genreList.map(async (genre) => {
        const movies = await Movie.find({ genres: genre })
          .sort({ year: -1, likeCount: -1, viewCount: -1 })
          .limit(20);

        const formattedMovies = movies.map(movie => ({
          id: String(movie._id),
          title: movie.title,
          year: movie.year,
          genres: movie.genres,
          posterUrl: movie.posterUrl,
          rating: movie.rating,
          userLiked: userId ? likedMovieIds.has(String(movie._id)) : false
        }));

        return { title: genre, movies: formattedMovies };
      })
    );

    const sections = genreSections.filter(section => section.movies.length > 0);
    res.status(200).json({ sections });
  } catch (error) {
    console.error('Get movies by genres error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * GET /api/movies/new
 * Get new or upcoming movies
 * Auth: Optional
 */
router.get('/new', optionalAuth, async (req, res) => {
  try {
    const userId = req.user ? req.user.userId : null;
    const limit = parseInt(req.query.limit) || 20;
    const currentYear = new Date().getFullYear();

    let likedMovieIds = new Set();
    if (userId) {
      const likes = await Like.find({ userId, targetType: 'movie' });
      likedMovieIds = new Set(likes.map(like => String(like.targetId)));
    }

    const movies = await Movie.find({ year: { $gte: currentYear - 2 } })
      .sort({ year: -1, createdAt: -1 })
      .limit(limit);

    const formattedMovies = movies.map(movie => ({
      id: String(movie._id),
      title: movie.title,
      year: movie.year,
      genres: movie.genres,
      posterUrl: movie.posterUrl,
      rating: movie.rating,
      userLiked: userId ? likedMovieIds.has(String(movie._id)) : false
    }));

    res.status(200).json({ movies: formattedMovies });
  } catch (error) {
    console.error('Get new movies error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * GET /api/movies/:id
 * Get single movie details
 * Auth: Optional
 */
router.get('/:id', optionalAuth, async (req, res) => {
  try {
    const rawId = req.params.id;
    if (!rawId) return res.status(400).json({ error: 'Missing id parameter' });

    let movie = null;
    if (mongoose.Types.ObjectId.isValid(rawId)) {
      movie = await Movie.findById(rawId);
    } else {
      const tmdbCandidate = Number(rawId);
      if (!Number.isNaN(tmdbCandidate)) {
        movie = await Movie.findOne({ tmdbId: tmdbCandidate });
      }
    }

    if (!movie && req.query.tmdbId) {
      const parsedTmdb = parseInt(req.query.tmdbId, 10);
      if (!Number.isNaN(parsedTmdb)) {
        movie = await getMovieByTmdbId(parsedTmdb);
      }
    }

    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    let userLiked = false;
    if (req.user) {
      const like = await Like.findOne({ userId: req.user.userId, targetType: 'movie', targetId: movie._id });
      userLiked = !!like;
      Click.create({ userId: req.user.userId, movieId: movie._id }).catch(err => console.error('Error tracking click:', err));
      Movie.findByIdAndUpdate(movie._id, { $inc: { viewCount: 1 } }).catch(err => console.error('Error incrementing view count:', err));
    }

    res.status(200).json({
      movie: {
        id: String(movie._id),
        tmdbId: movie.tmdbId,
        title: movie.title,
        year: movie.year,
        genres: movie.genres,
        plot: movie.plot,
        posterUrl: movie.posterUrl,
        backdropUrl: movie.backdropUrl,
        runtime: movie.runtime,
        rating: movie.rating,
        cast: movie.cast,
        directors: movie.directors,
        likeCount: movie.likeCount,
        viewCount: movie.viewCount,
        userLiked
      }
    });
  } catch (error) {
    console.error('Get movie error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * POST /api/movies/:id/click
 * Track movie click/view
 * Auth: Required
 */
router.post('/:id/click', authenticateToken, async (req, res) => {
  try {
    const rawId = req.params.id;
    if (!rawId) return res.status(400).json({ error: 'Missing id parameter' });

    let movie = null;
    if (mongoose.Types.ObjectId.isValid(rawId)) {
      movie = await Movie.findById(rawId);
    } else {
      const tmdbCandidate = Number(rawId);
      if (!Number.isNaN(tmdbCandidate)) {
        movie = await Movie.findOne({ tmdbId: tmdbCandidate });
      }
    }

    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    await Click.create({ userId: req.user.userId, movieId: movie._id });
    await Movie.findByIdAndUpdate(movie._id, { $inc: { viewCount: 1 } });

    res.status(201).json({ message: 'Click tracked' });
  } catch (error) {
    console.error('Track click error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
