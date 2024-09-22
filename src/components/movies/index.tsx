'use client';

// @project
import useMovies from '@/hooks/useMovies';
import MoviesList from './movies-list';

const Movies = () => {
  const { data, isPending } = useMovies();

  if (isPending) {
    return 'Loading...';
  }

  return (
    <div className='flex flex-col gap-4'>
      {data?.map((list, index) => {
        return <MoviesList list={list} key={list[0][0].id + index} />;
      })}
    </div>
  );
};

export default Movies;
