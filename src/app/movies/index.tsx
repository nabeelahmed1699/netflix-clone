import MoviesList from './movies-list';

const Movies = () => {
  function createArray(length: number, startValue = 0) {
    if (length < 0) {
      throw new Error('Length must be a non-negative number');
    }
    return Array.from({ length }, (_, index) => startValue + index);
  }
  console.log(createArray(10));
  return (
    <div className='flex flex-col gap-4'>
      {createArray(10).map((page) => (
        <MoviesList key={page} page={page + 1} />
      ))}
    </div>
  );
};

export default Movies;
