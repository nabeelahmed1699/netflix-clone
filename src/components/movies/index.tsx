'use client';

// @project
import useMovies from '@/hooks/useMovies';
import MoviesList from './movies-list';

const Movies = () => {
  const { data, isPending } = useMovies();

  if (isPending) {
    return (
      <div className='flex flex-col gap-2'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((row) => (
          <div key={row} className='grid grid-cols-6 gap-1'>
            {[1, 2, 3, 4, 5, 6].map((item) => {
              return <div key={item} className='h-40 rounded-md aspect-video w-full bg-gray-500 animate-pulse'></div>;
            })}
          </div>
        ))}
      </div>
    );
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
