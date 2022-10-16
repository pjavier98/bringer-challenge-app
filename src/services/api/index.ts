import axios from 'axios';
// config
// import { HOST_API } from 'src/config';

const api = axios.create({
  // baseURL: HOST_API,
});

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export { api };
