import axios, { AxiosInstance, AxiosError } from 'axios';

// Create axios instance
const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001',
  withCredentials: true, // Include cookies for refresh token
  headers: {
    'Content-Type': 'application/json'
  }
});

// Store for access token (in memory)
let accessToken: string | null = null;

export const setAccessToken = (token: string | null) => {
  accessToken = token;
};

export const getAccessToken = () => accessToken;

// Request interceptor: Add Authorization header
api.interceptors.request.use(
  (config) => {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor: Handle 401 and refresh token
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as any;

    // If 401 and not already retried
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Try to refresh token
        const refreshResponse = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/refresh`,
          {},
          { withCredentials: true }
        );

        if (refreshResponse.data.accessToken) {
          const newToken = refreshResponse.data.accessToken;
          setAccessToken(newToken);

          // Retry original request with new token
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        // Refresh failed, redirect to login
        if (typeof window !== 'undefined') {
          setAccessToken(null);
          window.location.href = '/login';
        }
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  signup: (email: string, password: string) =>
    api.post('/api/auth/signup', { email, password }),

  login: (email: string, password: string) =>
    api.post('/api/auth/login', { email, password }),

  logout: () => api.post('/api/auth/logout'),

  refresh: () => api.post('/api/auth/refresh')
};

// User API
export const userAPI = {
  getProfile: () => api.get('/api/user/profile'),

  updateProfile: (data: any) => api.patch('/api/user/profile', data),

  getStats: () => api.get('/api/user/stats'),

  getLikedMovies: (page = 1, limit = 20) =>
    api.get('/api/user/liked-movies', { params: { page, limit } }),

  getLikedActors: () => api.get('/api/user/liked-actors'),

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

  getHome: () => api.get('/api/recommendations/home')
};

export default api;
