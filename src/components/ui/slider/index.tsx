import React, { FC, forwardRef, ReactNode, useEffect, useRef, useState } from 'react';

// assets
import { IconChevronRight } from '@tabler/icons-react';
import { IconChevronLeft } from '@tabler/icons-react';
import { twMerge } from 'tailwind-merge';

interface SliderGroupProps {
  children: ReactNode;
}
const SliderGroup = forwardRef<HTMLDivElement, SliderGroupProps>(({ children }, ref) => {
  return (
    <div className='media-group' id='group-3' ref={ref}>
      {children}
    </div>
  );
});
SliderGroup.displayName = 'SliderGroup';

interface SliderItemProps {
  children: ReactNode;
}
const SliderItem: FC<SliderItemProps> = ({ children }) => {
  return <div className='media-element'>{children}</div>;
};

interface SliderItemImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}
const SliderItemImage: FC<SliderItemImageProps> = (props) => {
  return <img {...props} />;
};

interface SliderProps {
  children: ReactNode;
}

const Slider: FC<SliderProps> & {
  SliderGroup: typeof SliderGroup;
  SliderItem: typeof SliderItem;
  SliderItemImage: typeof SliderItemImage;
} = ({ children }) => {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const groupLength = React.Children.count(children);
  const mediaGroupsRef = useRef<HTMLDivElement[]>([]);

  // Store refs in the array and ensure they are initialized correctly
  const setRef = (element: HTMLDivElement | null, index: number) => {
    if (element) {
      mediaGroupsRef.current[index] = element;
    }
  };

  useEffect(() => {
    // Scroll the current group into view when the index changes
    const currentGroup = mediaGroupsRef.current[currentGroupIndex];
    if (currentGroup) {
      currentGroup.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentGroupIndex]);

  const handleNext = () => {
    setCurrentGroupIndex((prev) => {
      if (prev < groupLength) {
        return prev + 1;
      }
      return prev;
    });
  };

  const handlePrev = () => {
    setCurrentGroupIndex((prev) => {
      if (prev >= 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  // Clone children and attach refs to each
  const childrenWithRefs = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      const isSliderGroup = child.type === SliderGroup;
      return React.cloneElement(child as React.ReactElement<{ ref?: React.Ref<HTMLDivElement> }>, {
        ref: isSliderGroup ? (el: HTMLDivElement | null) => setRef(el, index) : undefined,
      });
    }
    return child;
  });

  return (
    <div className='relative pt-8'>
      <ul className='absolute top-0 right-0 px-2 translate-y-full flex items-center space-x-1'>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return <li key={child.key} className={twMerge('h-1 w-4 ', index === currentGroupIndex ? 'active bg-slate-400' : 'bg-slate-700')} />;
          }
          return null;
        })}
      </ul>
      <div className='media-container group relative'>
        {!(currentGroupIndex <= 0) && (
          <button
            className='absolute opacity-1 group-hover:opacity-1 group transition-all left-0 top-0 h-full w-11 bg-white/25 hover:bg-black/20 text-white cursor-pointer inline-flex items-center justify-center'
            onClick={handlePrev}
          >
            <IconChevronLeft className='group-hover:scale-110 transition-transform'/>
          </button>
        )}
        <div className='media-scroller overflow-auto'>{childrenWithRefs}</div>
        {currentGroupIndex < groupLength - 1 && (
          <button
            className='absolute opacity-1 group-hover:opacity-1 group transition-all right-0 top-0 h-full w-11 bg-white/25 hover:bg-black/20 text-white cursor-pointer inline-flex items-center justify-center'
            onClick={handleNext}
          >
            <IconChevronRight className='group-hover:scale-110 transition-transform'/>
          </button>
        )}
      </div>
    </div>
  );
};

Slider.SliderGroup = SliderGroup;
Slider.SliderItem = SliderItem;
Slider.SliderItemImage = SliderItemImage;

export default Slider;

// <div
// className='media-group'
// id='group-1'
// ref={(el) => {
//   if (el) {
//     mediaGroupsRef.current[0] = el;
//   }
// }}
// >
// <div className='media-element'>
//   <img
//     src='https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'
//     alt=''
//   />
// </div>
// <div className='media-element'>
//   <img
//     src='https://images.unsplash.com/photo-1642190672487-22bde32965f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'
//     alt=''
//   />
// </div>
// <div className='media-element'>
//   <img
//     src='https://images.unsplash.com/photo-1641841344411-49dbd02896f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'
//     alt=''
//   />
// </div>
// <div className='media-element'>
//   <img
//     src='https://images.unsplash.com/photo-1643223723262-7ce785730cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'
//     alt=''
//   />
// </div>
// <div className='media-element'>
//   <img
//     src='https://images.unsplash.com/photo-1640938776314-4d303f8a1380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400'
//     alt=''
//   />
// </div>
// </div>

// {/* <!-- Group 2   --> */}
// <div
// className='media-group'
// id='group-2'
// ref={(el) => {
//   if (el) {
//     mediaGroupsRef.current[1] = el;
//   }
// }}
// >
// <div className='media-element'>
//   <img
//     src='https://images.unsplash.com/photo-1641259041823-e09935369105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400'
//     alt=''
//   />
// </div>
// <div className='media-element'>
//   <img
//     src='https://images.unsplash.com/photo-1642543492481-44e81e3914a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400'
//     alt=''
//   />
// </div>
// <div className='media-element'>
//   <img
//     src='https://images.unsplash.com/photo-1641118961077-440391095cdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400'
//     alt=''
//   />
// </div>
// <div className='media-element'>
//   <img
//     src='https://images.unsplash.com/photo-1640767014413-b7d27c58b058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400'
//     alt=''
//   />
// </div>
// <div className='media-element'>
//   <img
//     src='https://images.unsplash.com/photo-1640948612546-3b9e29c23e98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400'
//     alt=''
//   />
// </div>
// </div>

// {/* <!-- Group 3   --> */}
// <div
// className='media-group'
// id='group-3'
// ref={(el) => {
//   if (el) {
//     mediaGroupsRef.current[2] = el;
//   }
// }}
// >
// <div className='media-element'>
//   <img
//     src='https://images.unsplash.com/photo-1642484865851-111e68695d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400'
//     alt=''
//   />
// </div>
// <div className='media-element'>
//   <img
//     src='https://images.unsplash.com/photo-1642237778207-24985a0bf876?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400'
//     alt=''
//   />
// </div>
// <div className='media-element'>
//   <img
//     src='https://images.unsplash.com/photo-1642177584449-fa0b017dccc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400'
//     alt=''
//   />
// </div>
// <div className='media-element'>
//   <img
//     src='https://images.unsplash.com/photo-1643249960396-d39d2a63ce8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg0Mw&ixlib=rb-1.2.1&q=80&w=400'
//     alt=''
//   />
// </div>
// <div className='media-element'>
//   <img
//     src='https://images.unsplash.com/photo-1641424222187-1c336d21804c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg0OA&ixlib=rb-1.2.1&q=80&w=400'
//     alt=''
//   />
// </div>
// </div>

// {/* <!--  Group 4  --> */}
// <div
// className='media-group'
// id='group-4'
// ref={(el) => {
//   if (el) {
//     mediaGroupsRef.current[3] = el;
//   }
// }}
// >
// <div className='media-element'>
//   <img
//     src='https://images.unsplash.com/photo-1640998483268-d1faffa789ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODkwNA&ixlib=rb-1.2.1&q=80&w=400'
//     alt=''
//   />
// </div>
// <div className='media-element'>
//   <img
//     src='https://images.unsplash.com/photo-1642034451735-2a8df1eaa2c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg4OQ&ixlib=rb-1.2.1&q=80&w=400'
//     alt=''
//   />
// </div>
// <div className='media-element'>
//   <img
//     src='https://images.unsplash.com/photo-1640808238224-5520de93c939?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg4OQ&ixlib=rb-1.2.1&q=80&w=400'
//     alt=''
//   />
// </div>
// <div className='media-element'>
//   <img
//     src='https://images.unsplash.com/photo-1643039952431-38adfa91f320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg0OA&ixlib=rb-1.2.1&q=80&w=400'
//     alt=''
//   />
// </div>
// <div className='media-element'>
//   <img
//     src='https://images.unsplash.com/photo-1643148636637-58b3eb95cdad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg0OA&ixlib=rb-1.2.1&q=80&w=400'
//     alt=''
//   />
// </div>
// </div>
