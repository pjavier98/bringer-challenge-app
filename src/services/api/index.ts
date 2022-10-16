import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_HOST_API_KEY,
});

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export { api };
