const axios = require('axios');
const Movie = require('../models/Movie');
const Actor = require('../models/Actor');
const Director = require('../models/Director');
const { TMDB_CONFIG, getImageUrl } = require('../config/tmdb');

/**
 * Get movie by TMDB ID
 * Checks database first, fetches from TMDB API if not cached
 * @param {number} tmdbId - TMDB movie ID
 * @returns {Promise<Object>} Movie object
 */
const getMovieByTmdbId = async (tmdbId) => {
  try {
    // Check if movie exists in database
    let movie = await Movie.findOne({ tmdbId });

    // If movie exists and was recently fetched (within 30 days), return it
    if (movie) {
      const daysSinceLastFetch = (Date.now() - movie.tmdbLastFetched) / (1000 * 60 * 60 * 24);
      if (daysSinceLastFetch < 30) {
        return movie;
      }
    }

    // Fetch from TMDB API
    const movieUrl = `${TMDB_CONFIG.baseUrl}/movie/${tmdbId}`;
    const creditsUrl = `${TMDB_CONFIG.baseUrl}/movie/${tmdbId}/credits`;

    const [movieResponse, creditsResponse] = await Promise.all([
      axios.get(movieUrl, {
        params: {
          api_key: TMDB_CONFIG.apiKey,
          language: TMDB_CONFIG.language.korean
        }
      }),
      axios.get(creditsUrl, {
        params: {
          api_key: TMDB_CONFIG.apiKey
        }
      })
    ]);

    const movieData = movieResponse.data;
    const creditsData = creditsResponse.data;

    // Process actors
    const castArray = [];
    for (let i = 0; i < Math.min(creditsData.cast.length, 15); i++) {
      const castMember = creditsData.cast[i];

      // Find or create actor
      let actor = await Actor.findOne({ tmdbId: castMember.id });
      if (!actor) {
        actor = new Actor({
          tmdbId: castMember.id,
          name: castMember.name,
          nameEnglish: castMember.name,
          profileUrl: getImageUrl(castMember.profile_path, 'w185')
        });
        await actor.save();
      }

      castArray.push({
        actorId: actor._id,
        actorName: castMember.name,
        character: castMember.character,
        order: castMember.order
      });
    }

    // Process directors
    const directorsArray = [];
    const directors = creditsData.crew.filter(person => person.job === 'Director');

    for (const directorData of directors) {
      // Find or create director
      let director = await Director.findOne({ tmdbId: directorData.id });
      if (!director) {
        director = new Director({
          tmdbId: directorData.id,
          name: directorData.name,
          nameEnglish: directorData.name,
          profileUrl: getImageUrl(directorData.profile_path, 'w185')
        });
        await director.save();
      }

      directorsArray.push({
        directorId: director._id,
        directorName: directorData.name
      });
    }

    // Prepare movie data
    const movieDocument = {
      tmdbId: movieData.id,
      title: movieData.title,
      titleEnglish: movieData.original_title,
      year: movieData.release_date ? new Date(movieData.release_date).getFullYear() : null,
      genres: movieData.genres.map(g => g.name),
      genresEnglish: movieData.genres.map(g => g.name),
      plot: movieData.overview,
      plotEnglish: movieData.overview,
      posterUrl: getImageUrl(movieData.poster_path, 'w500'),
      backdropUrl: getImageUrl(movieData.backdrop_path, 'w1280'),
      runtime: movieData.runtime,
      rating: movieData.adult ? '청소년 관람불가' : '전체 관람가',
      cast: castArray,
      directors: directorsArray,
      tmdbLastFetched: new Date()
    };

    // Create or update movie
    if (movie) {
      movie = await Movie.findOneAndUpdate(
        { tmdbId },
        movieDocument,
        { new: true }
      );
    } else {
      movie = new Movie(movieDocument);
      await movie.save();

      // Update actor movieIds
      for (const cast of castArray) {
        await Actor.findByIdAndUpdate(
          cast.actorId,
          { $addToSet: { movieIds: movie._id } }
        );
      }

      // Update director movieIds
      for (const dir of directorsArray) {
        await Director.findByIdAndUpdate(
          dir.directorId,
          { $addToSet: { movieIds: movie._id } }
        );
      }
    }

    return movie;
  } catch (error) {
    console.error('Error fetching movie from TMDB:', error.message);
    throw new Error('Failed to fetch movie data');
  }
};

/**
 * Search movies on TMDB
 * @param {string} query - Search query
 * @param {object} filters - Optional filters (genre, year)
 * @returns {Promise<Array>} Array of movie results
 */
const searchMoviesOnTMDB = async (query, filters = {}) => {
  try {
    const response = await axios.get(`${TMDB_CONFIG.baseUrl}/search/movie`, {
      params: {
        api_key: TMDB_CONFIG.apiKey,
        query: query,
        language: TMDB_CONFIG.language.korean,
        page: 1
      }
    });

    const results = response.data.results.slice(0, 20); // Limit to 20 results

    // Cache each movie
    const movies = [];
    for (const result of results) {
      try {
        const movie = await getMovieByTmdbId(result.id);
        movies.push(movie);
      } catch (error) {
        console.error(`Failed to cache movie ${result.id}:`, error.message);
      }
    }

    return movies;
  } catch (error) {
    console.error('Error searching TMDB:', error.message);
    throw new Error('Failed to search movies');
  }
};

/**
 * Get trending movies from TMDB
 * @param {string} timeWindow - 'day' or 'week'
 * @returns {Promise<Array>} Array of trending movies
 */
const getTrendingMovies = async (timeWindow = 'week') => {
  try {
    const response = await axios.get(`${TMDB_CONFIG.baseUrl}/trending/movie/${timeWindow}`, {
      params: {
        api_key: TMDB_CONFIG.apiKey,
        language: TMDB_CONFIG.language.korean
      }
    });

    const results = response.data.results.slice(0, 20);

    // Cache movies
    const movies = [];
    for (const result of results) {
      try {
        const movie = await getMovieByTmdbId(result.id);
        movies.push(movie);
      } catch (error) {
        console.error(`Failed to cache trending movie ${result.id}:`, error.message);
      }
    }

    return movies;
  } catch (error) {
    console.error('Error fetching trending movies:', error.message);
    return [];
  }
};

module.exports = {
  getMovieByTmdbId,
  searchMoviesOnTMDB,
  getTrendingMovies
};
