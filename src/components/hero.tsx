// @project
import { Button } from '@/components/ui/button';

// icons
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import { IconAlertCircle } from '@tabler/icons-react';

// assets
import coverImage from '@/assets/cover.webp';

const Hero = () => {
  return (
    <header className={`relative flex justify-center flex-col min-h-screen bg-cover bg-center transition-all duration-300 pt-10 bg-gradient-to-b from-black to-transparent`}
    style={{ backgroundImage: `url(${coverImage.src})` }}>
    <div className='px-12 py-3'>
      <div className='flex flex-col max-w-md space-y-4'>
        <div className='text-6xl font-bold'>
          <h1>
            <span className='text-7xl'>BAD</span> <br />
            BOYS
          </h1>
          <p className='text-3xl'>RIDE OR DIE</p>
        </div>
        <p className='text-lg leading-snug tracking-wide'>
          When a mysterious enemy frames their late captain for corruption, Miami cops Mike and Marcus go rogue to expose a conspiracy — and
          clear their own names.
        </p>
        <div className='flex space-x-2'>
          <Button size='lg' variant='secondary' className='text-xl py-6 px-5'>
            <IconPlayerPlayFilled className='mr-2 h-8 w-8' />
            <span>Play</span>
          </Button>
          <Button size='lg' className='text-xl py-6 px-5 min-w-40 bg-slate-500 hover:bg-slate-600'>
            <IconAlertCircle className='mr-2 h-8 w-8' />
            <span>More Info</span>
          </Button>
        </div>
      </div>
      </div>
      </header>
  );
};

export default Hero;
