import axios from 'axios';
import { ENV } from './env';

const axiosInstance = axios.create({
  baseURL: ENV.apiBaseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.warn('API Error Intercepted (Mock Fallback Active):', error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
