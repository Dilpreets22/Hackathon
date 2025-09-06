import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
  withCredentials: true,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});

// This part is for later, when we handle JWT tokens.
// It will automatically add the auth token to every request if it exists.
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;