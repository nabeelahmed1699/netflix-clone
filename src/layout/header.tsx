import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

// @project
import Logo from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import ProfileSelector from './profile-selector';

// icons
import { IconBell } from '@tabler/icons-react';
import { IconSearch } from '@tabler/icons-react';
import NavDropDown from './mobile-nav';

const Header = () => {
  return (
    <header className='px-12 py-3 flex items-center justify-between'>
      <div className='flex items-center space-x-8'>
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
        <NavDropDown className='inline-block lg:hidden'/>
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
