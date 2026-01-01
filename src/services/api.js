import axios from 'axios';

const api = axios.create({
  baseURL: 'https://realworld.habsida.net/api',
});

// Automatically add Token to every request if it exists
api.interceptors.request.use((config) => {//Every time sending request this func stops and checks local storage for token and stamp the request with security badge
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

export default api;