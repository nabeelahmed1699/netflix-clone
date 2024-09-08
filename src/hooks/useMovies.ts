import { chunkArray } from '@/lib/chunkArray';
import { movies } from '@/services/movies';
import Movie from '@/types/movie';
import { useQuery } from '@tanstack/react-query';

const useMovies = (page:number) => {
  const response = useQuery({
    queryKey: ['movies'],
    queryFn: async () => {
      const response =  await movies(page);
      const chunkedArray = chunkArray<Movie>(response.results,8);
      return chunkedArray
    },
  });
  return response;
};

export default useMovies;
