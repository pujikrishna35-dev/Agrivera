import axiosInstance from './axios';
import { API_ENDPOINTS } from '../constants/api';

export const fetchResource = async (endpoint) => {
  try {
    const response = await axiosInstance.get(endpoint);
    return response.data;
  } catch (error) {
    console.log(`Mocking API resource response for ${endpoint}`);
    return null;
  }
};
