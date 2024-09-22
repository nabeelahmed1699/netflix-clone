import { useQuery } from '@tanstack/react-query';

// @project
import { chunkArray } from '@/lib/chunkArray';
import { movies } from '@/services/movies';
import Movie from '@/types/movie';

const useMovies = () => {
  const response = useQuery({
    queryKey: ['movies'],
    queryFn: async () => {
      const response = await movies();
      const chunkedArray = chunkArray<Movie>(response, 3);
      return [1,2,3,4,5,6,7,8,9,10].map(() => [...chunkedArray.map((item) => item)]);
    },
  });
  return response;
};

export default useMovies;
