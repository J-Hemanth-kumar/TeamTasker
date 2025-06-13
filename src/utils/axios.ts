import axios, { InternalAxiosRequestConfig } from 'axios';
import { getToken } from './token';

const instance = axios.create({
  baseURL: '/api',
});

instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getToken();
  if (token) {
    if (!config.headers) {
      config.headers = {} as import('axios').AxiosRequestHeaders;
    }
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default instance;
