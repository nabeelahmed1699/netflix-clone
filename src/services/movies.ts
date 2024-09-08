import axiosInstance from '@/lib/axios';
import Movie from '@/types/movie';

export interface Response {
  entries: number;
  next: string;
  page: number;
  results: Movie[];
}
export const movies = async (page: number) => {
  const response = await axiosInstance.get<Response>('/titles', { params: { limit: 48, page } });
  return response.data;
};
