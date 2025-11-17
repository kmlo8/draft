import axios from 'axios';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

const apiClient = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
});

export const getMovie = async (id: string) => {
  const { data } = await apiClient.get(`/api/movies/${id}`);
  return data.movie;
};
