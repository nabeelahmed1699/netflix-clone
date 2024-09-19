import axios from 'axios';
import { toast } from 'sonner';

// 'https://moviesdatabase.p.rapidapi.com'
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_MY_API,
    'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    if (!response || !(response.status >= 400 && response.status < 500)) {
      toast.error('Something Went Wrong!');
      return;
    }console.log(response)
    if (response.status === 401) {
      toast.error(response.data.status_message);
      return;
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

