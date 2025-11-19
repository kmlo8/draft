import axios from 'axios';
import { getAccessToken, setAccessToken } from './token';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
});

apiClient.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: async (credentials: any) => {
    const { data } = await apiClient.post('/api/auth/login', credentials);
    if (data.accessToken) {
      setAccessToken(data.accessToken);
    }
    return data;
  },
  signup: (userData: any) => apiClient.post('/api/auth/signup', userData),
  logout: () => {
    apiClient.post('/api/auth/logout');
    setAccessToken(null);
  }
};

// User API
export const userAPI = {
  getProfile: () => apiClient.get('/api/user/profile'),
  updateProfile: (profileData: any) => apiClient.patch('/api/user/profile', profileData),
  getLikedMovies: () => apiClient.get('/api/user/liked-movies'),
  getLikedActors: () => apiClient.get('/api/user/liked-actors'),
  getLikedDirectors: () => apiClient.get('/api/user/liked-directors'),
  getSearchHistory: (limit = 10) =>
    apiClient.get('/api/user/search-history', { params: { limit } }),
  submitQuestionnaire: (data: any) =>
    apiClient.post('/api/user/questionnaire', data)
};

// Movies API
export const moviesAPI = {
  getMovie: async (id: string) => {
    const { data } = await apiClient.get(`/api/movies/${id}`);
    return data;
  },
  search: (query: string, filters?: any) =>
    apiClient.get('/api/movies/search', { params: { q: query, ...filters } }),
  getByGenres: (genres: string[]) =>
    apiClient.get('/api/movies/by-genres', { params: { genres: genres.join(',') } }),
  getNew: (limit?: number) =>
    apiClient.get('/api/movies/new', { params: limit ? { limit } : {} }),
  getPopular: (limit?: number) =>
    apiClient.get('/api/movies/popular', { params: limit ? { limit } : {} }),
  trackClick: (id: string) => apiClient.post(`/api/movies/${id}/click`)
};

// Likes API
export const likesAPI = {
  create: (targetType: string, targetId: string) =>
    apiClient.post('/api/likes', { targetType, targetId }),
  deleteByTarget: (targetType: string, targetId: string) =>
    apiClient.delete('/api/likes', { params: { targetType, targetId } }),
  check: (items: { type: string; id: string }[]) =>
    apiClient.get('/api/likes/check', {
      params: { items: JSON.stringify(items) }
    })
};

// Actors API
export const actorsAPI = {
  getById: (id: string) => apiClient.get(`/api/actors/${id}`),
  search: (q: string) => apiClient.get('/api/actors/search', { params: { q } })
};

// Directors API
export const directorsAPI = {
  getById: async (id: string) => {
    const { data } = await apiClient.get(`/api/directors/${id}`);
    return data.director;
  },
  search: (q: string) => apiClient.get('/api/directors/search', { params: { q } })
};

// Recommendations API
export const recommendationsAPI = {
  search: (query: string, userPreferences?: any) =>
    apiClient.post('/api/recommendations/search', { query, userPreferences }),
};

export default apiClient;