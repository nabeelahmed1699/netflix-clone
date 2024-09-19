'use client';
import React, { ReactNode, useEffect, useState } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      // Adjust threshold as needed
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`relative flex justify-center flex-col min-h-screen bg-cover bg-center transition-all duration-300`}
      style={{ backgroundImage: `url(${coverImage.src})` }}
    >
      <div
        className={`fixed left-0 right-0 top-0 z-20 px-12 py-3 transition-all duration-300 ${
          isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black to-transparent'
        }`}
      >
        <nav className='flex items-center justify-between min-h-10'>
          <div className='flex space-x-8'>
            <div className='flex items-center'>
              <Logo />
              <ul className='hidden ml-10 lg:flex space-x-4 lg:space-x-6'>
                <NavLink path='/' isActive>
                  Home
                </NavLink>
                <NavLink path='#'>TV Shows</NavLink>
                <NavLink path='#'>Movies</NavLink>
                <NavLink path='#'>New & Popular</NavLink>
                <NavLink path='#'>My List</NavLink>
                <NavLink path='#'>Browse by Language</NavLink>
              </ul>
              <NavDropDown className='inline-block lg:hidden' />
            </div>
          </div>
          <div className='flex space-x-4 lg:space-x-6'>
            <Button size='icon' className='bg-transparent'>
              <IconSearch />
            </Button>
            <Button size='icon' className='bg-transparent'>
              <IconBell />
            </Button>
            <ProfileSelector />
          </div>
        </nav>
      </div>
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
            When a mysterious enemy frames their late captain for corruption, Miami cops Mike and Marcus go rogue to expose a conspiracy —
            and clear their own names.
          </p>
          <div className='flex space-x-2'>
            <Button size='lg' variant='secondary' className='text-xl py-6 px-5'>
              <IconPlayerPlayFilled className='mr-2 h-8 w-8' />
              <span>Play</span>
            </Button>
            <Button size='lg' className='text-xl py-6 px-5 min-w-40 bg-[rgba(109, 109, 110, 0.7)] hover:bg-[rgba(109, 109, 110, 0.4)]'>
              <IconAlertCircle className='mr-2 h-8 w-8' />
              <span>More Info</span>
            </Button>
          </div>
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
