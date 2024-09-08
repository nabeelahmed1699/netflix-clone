import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

// @project
import Logo from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import ProfileSelector from './profile-selector';
import NavDropDown from './mobile-nav';

// assets
import coverImage from '@/assets/cover.webp';

// icons
import { IconBell } from '@tabler/icons-react';
import { IconSearch } from '@tabler/icons-react';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import { IconAlertCircle } from '@tabler/icons-react';

const Header = () => {
  return (
    <header
      className='relative flex flex-col px-12 py-3 min-h-screen bg-cover bg-center'
      style={{ backgroundImage: `url(${coverImage.src})` }}
    >
      <nav className='flex items-center justify-between sticky min-h-16 top-0'>
        <div className='flex space-x-4 lg:space-x-6'>
          <div className='flex items-center'>
            <Logo />
            <ul className='hidden lg:flex space-x-4 lg:space-x-6'>
              <NavLink path='/' isActive>
                Home
              </NavLink>
              <NavLink path='#'>TV Shows</NavLink>
              <NavLink path='#'>Movies</NavLink>
              <NavLink path='#'>New & Popular</NavLink>
              <NavLink path='#'>My List</NavLink>
              <NavLink path='#'>Browse by Language</NavLink>
            </ul>
          </div>
          <NavDropDown className='inline-block lg:hidden' />
        </div>
        <div className='flex space-x-4 lg:space-x-6'>
          <Button size='icon'>
            <IconSearch />
          </Button>
          <Button size='icon'>
            <IconBell />
          </Button>
          <ProfileSelector />
        </div>
      </nav>
      <div className='absolute top-1/2 -translate-y-1/2 flex flex-col max-w-md space-y-4'>
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
          <Button size='lg' className='text-xl py-6 px-5 min-w-40 bg-slate-200/30 hover:bg-slate-400/30'>
            <IconAlertCircle className='mr-2 h-8 w-8' />
            <span>More Info</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

interface NavLinkProps {
  path: string;
  children: ReactNode;
  className?: string;
  isActive?: boolean;
}
function NavLink({ path, children, className, isActive }: NavLinkProps) {
  return (
    <li>
      <a
        href={path}
        className={twMerge('text-sm hover:text-slate-300 transition-colors', `${isActive ? 'font-semibold ' : ' '}`, className)}
      >
        {children}
      </a>
    </li>
  );
}
