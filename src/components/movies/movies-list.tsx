'use client';
import { FC, ReactNode, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AnimatePresence, motion } from 'framer-motion';

// @project
import Movie from '@/types/movie';

// icons
import { IconChevronRight, IconChevronLeft, IconChevronDown } from '@tabler/icons-react';
import { IconPlayerPlayFilled, IconPlus, IconThumbUp } from '@tabler/icons-react';

interface MoviesListProps {
  list: Movie[][];
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

const MoviesList: FC<MoviesListProps> = ({ list }) => {
  const [hoveredMovieId, setHoveredMovieId] = useState<number | null>(null);

  const customLeftArrow = (
    <button className='opacity-0 group-hover:opacity-100 h-full text-white bg-black/35 rounded-sm z-[1000] flex items-center justify-center w-9 absolute left-0 transition-opacity group'>
      <IconChevronLeft className='group-hover:scale-110' />
    </button>
  );
  const customRightArrow = (
    <button className='opacity-0 group-hover:opacity-100 h-full text-white bg-black/35 rounded-sm z-[1000] flex items-center justify-center w-9 absolute right-0 transition-opacity group'>
      <IconChevronRight className='group-hover:scale-110' />
    </button>
  );
  return (
    <Carousel
      responsive={responsive}
      containerClass='!overflow-visible group z-10'
      itemClass='!overflow-visible'
      customLeftArrow={customLeftArrow}
      customRightArrow={customRightArrow}
      draggable
      swipeable
    >
      {list.map((group, index) => {
        return (
          <div key={group[0].id + index} className='grid lg:grid-flow-col media-group z-10'>
            {group.map((movie) => {
              const imageUrl = movie.poster;
              const altText = movie.title;
              return (
                <div key={movie.id} className='relative'>
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2, zIndex: 100 }}
                    className='relative z-10 min-h-36 bg-stone-400 rounded-md overflow-hidden cursor-pointer'
                    onHoverStart={() => setHoveredMovieId(movie.id)}
                    onHoverEnd={() => setHoveredMovieId(null)}
                  >
                    <img src={imageUrl} alt={altText} className='max-w-full object-cover aspect-video w-full' loading='lazy' />
                    <h3 className='sr-only'>{movie.title}</h3>
                    <AnimatePresence>
                      {hoveredMovieId === movie.id && (
                        <motion.div
                          className='absolute z-20 bottom-0 bg-black/75 w-full flex justify-between items-center p-2'
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1, transition: { type: 'spring', bounce: 0.3, opacity: { delay: 0.03 } } }}
                          exit={{ height: 0, opacity: 0, transition: { duration: 0.2 } }}
                        >
                          <div className='flex items-center h-full min-h-36 space-x-1'>
                            <IconButton>
                              <IconPlayerPlayFilled />
                            </IconButton>
                            <IconButton>
                              <IconPlus />
                            </IconButton>
                            <IconButton>
                              <IconThumbUp />
                            </IconButton>
                          </div>
                          <IconButton>
                            <IconChevronDown />
                          </IconButton>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              );
            })}
          </div>
        );
      })}
    </Carousel>
  );
};

export default MoviesList;

type IconButtonProps = {
  children: ReactNode;
};

const IconButton: FC<IconButtonProps> = ({ children }) => {
  return (
    <button className='inline-flex justify-center items-center rounded-full aspect-square p-1 border border-white text-white bg-transparent w-6 h-6 hover:bg-white hover:text-black transition-colors'>
      {children}
    </button>
  );
};
