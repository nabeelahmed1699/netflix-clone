import MoviesList from './movies-list';

const Movies = () => {
  function createArray(length: number, startValue = 0) {
    if (length < 0) {
      throw new Error('Length must be a non-negative number');
    }
    return Array.from({ length }, (_, index) => startValue + index);
  }

  return (
    <div className='flex flex-col gap-4'>
      {createArray(30).map((page) => (
        <MoviesList key={page} page={page} />
      ))}
    </div>
  );
};

export default Movies;
