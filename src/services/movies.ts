import axiosInstance from '@/lib/axios';
import Movie from '@/types/movie';

export const movies = async () => {

  const response = await axiosInstance.get<Movie[]>('/movies');
  return response.data;
};
