'use client';
import { FC, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AnimatePresence, motion } from 'framer-motion';

// @project
import useMovies from '@/hooks/useMovies';

// icons
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react';

interface MoviesListProps {
  page: number;
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MoviesList: FC<MoviesListProps> = ({ page }) => {
  const { data, isPending } = useMovies(page);
  const [hoveredMovieId, setHoveredMovieId] = useState<string | null>(null);

  if (isPending)
    return (
      <div className='grid grid-cols-6 gap-2'>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className='w-full max-w-sm mx-auto'>
            <div className='h-40 bg-gray-200 animate-pulse rounded-lg shadow-md'></div>
          </div>
        ))}
      </div>
    );

  const customLeftArrow = (
    <button className='opacity-0 group-hover:opacity-100 h-full text-white bg-white/35 rounded-sm z-[1000] flex items-center justify-center w-9 absolute left-0 transition-opacity'>
      <IconChevronLeft />
    </button>
  );
  const customRightArrow = (
    <button className='opacity-0 group-hover:opacity-100 h-full text-white bg-white/35 rounded-sm z-[1000] flex items-center justify-center w-9 absolute right-0 transition-opacity'>
      <IconChevronRight />
    </button>
  );
  return (
    <Carousel
      responsive={responsive}
      containerClass='!overflow-visible group'
      itemClass='!overflow-visible'
      customLeftArrow={customLeftArrow}
      customRightArrow={customRightArrow}
      draggable
      swipeable
    >
      {data?.map((group) => {
        return (
          <div className='media-group relative' key={group[0]._id}>
            {group.map((movie) => {
              const imageUrl = movie.primaryImage?.url || '/path-to-default-image.png'; // Set fallback image path
              const altText = movie.primaryImage?.caption.plainText || movie.originalTitleText.text;

              return (
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1, zIndex: 20 }}
                  className='media-element h-36 bg-stone-400 rounded-md'
                  key={movie.id}
                  onHoverStart={() => setHoveredMovieId(movie.id)}
                  onHoverEnd={() => setHoveredMovieId(null)}
                >
                  <img src={imageUrl} alt={altText} className='max-w-full object-contain' loading='lazy' />

                  <h3 className='sr-only'>{movie.originalTitleText.text}</h3>
                  <AnimatePresence>
                    {hoveredMovieId === movie.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1, transition: { type: 'spring', bounce: 0.3, opacity: { delay: 0.03 } } }}
                        exit={{ height: 0, opacity: 0, transition: { duration: 0.2 } }}
                      >
                        <div className='flex'>4 action buttons</div>
                        <div>infos</div>
                        <div>genres</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        );
      })}
    </Carousel>
  );
};

export default MoviesList;
