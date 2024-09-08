'use client';
import { FC } from 'react';

// @project
import useMovies from '@/hooks/useMovies';
import Slider from '@/components/ui/slider';

interface MoviesListProps {
  page: number;
}
const MoviesList: FC<MoviesListProps> = ({ page }) => {
  const { data, isPending } = useMovies(page);

  if (isPending) return 'Loading...';

  return (
    <Slider>
      {data?.map((group) => (
        <Slider.SliderGroup key={group[0]._id}>
          {group.map((item) => (
            <Slider.SliderItem key={item._id}>
              <Slider.SliderItemImage
                src={item.primaryImage?.url}
                alt={item.primaryImage?.caption.plainText ?? item.originalTitleText.text}
              />
            </Slider.SliderItem>
          ))}
        </Slider.SliderGroup>
      ))}
    </Slider>
  );
};

export default MoviesList;
