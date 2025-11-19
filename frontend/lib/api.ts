import axios from 'axios';
// whi is this does not work
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

  getLikedDirectors: () => api.get('/api/user/liked-directors'),

  getSearchHistory: (limit = 10) =>
    api.get('/api/user/search-history', { params: { limit } }),

  submitQuestionnaire: (data: any) =>
    api.post('/api/user/questionnaire', data)
};

// Movies API
export const moviesAPI = {
  getMovie: async (id: string) => {
    const { data } = await api.get(`/api/movies/${id}`);
    return data.movie;
  },
  getById: (id: string, tmdbId?: number) =>
    api.get(`/api/movies/${id}`, tmdbId ? { params: { tmdbId } } : {}),

  search: (query: string, filters?: any) =>
    api.get('/api/movies/search', { params: { q: query, ...filters } }),

  getByGenres: (genres: string[]) =>
    api.get('/api/movies/by-genres', { params: { genres: genres.join(',') } }),

  getNew: (limit?: number) =>
    api.get('/api/movies/new', { params: limit ? { limit } : {} }),

  getPopular: (limit?: number) =>
    api.get('/api/movies/popular', { params: limit ? { limit } : {} }),

  trackClick: (id: string) => api.post(`/api/movies/${id}/click`)
};

// Likes API
export const likesAPI = {
  create: (targetType: string, targetId: string) =>
    api.post('/api/likes', { targetType, targetId }),

  delete: (likeId: string) => api.delete(`/api/likes/${likeId}`),

  deleteByTarget: (targetType: string, targetId: string) =>
    api.delete('/api/likes', { params: { targetType, targetId } }),

  check: (items: { type: string; id: string }[]) =>
    api.get('/api/likes/check', {
      params: { items: JSON.stringify(items) }
    })
};

// Actors API
export const actorsAPI = {
  getById: (id: string) => api.get(`/api/actors/${id}`),
  search: (q: string) => api.get('/api/actors/search', { params: { q } })
};

// Directors API
export const directorsAPI = {
  getById: async (id: string) => {
    const { data } = await api.get(`/api/directors/${id}`);
    return data.director;
  },
  search: (q: string) => api.get('/api/directors/search', { params: { q } })
};

// Recommendations API
export const recommendationsAPI = {
  search: (query: string, userPreferences?: any) =>
    api.post('/api/recommendations/search', { query, userPreferences }),

export const getMovie = async (id: string) => {
  const { data } = await apiClient.get(`/api/movies/${id}`);
  return data.movie;
};
