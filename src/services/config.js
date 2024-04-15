import axios from 'axios';

const BASE_URL = 'http://your-backend-api-url'; 

const apiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default apiService;