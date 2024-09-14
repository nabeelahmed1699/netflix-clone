import axios from 'axios';
import { toast } from 'sonner';

const axiosInstance = axios.create({
  baseURL: 'https://moviesdatabase.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': '',
    'x-rapidapi-host': '',
    'Content-Type': 'application/json',
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

