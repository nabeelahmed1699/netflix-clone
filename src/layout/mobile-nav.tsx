'use client';

import React, { FC, ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

// assetes
import { IconChevronDown } from '@tabler/icons-react';
interface NavDropDownProps {
  className?: string;
}

const NavDropDown: FC<NavDropDownProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={twMerge('relative inline-block text-left ', className)}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      {/* Profile Icon */}
      <button className='flex items-center justify-center space-x-2 rounded-md overflow-hidden'>
        <span>Browse</span>
        <IconChevronDown className='h-4 w-4'/>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dropdown Menu */}
            <motion.div
              className='absolute right-0 mt-2 w-48 bg-black rounded-md shadow-lg z-20'
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ul className='flex flex-col'>
                <NavLink path='/' isActive>
                  Home
                </NavLink>
                <NavLink path='#'>TV Shows</NavLink>
                <NavLink path='#'>Movies</NavLink>
                <NavLink path='#'>New & Popular</NavLink>
                <NavLink path='#'>My List</NavLink>
                <NavLink path='#'>Browse by Language</NavLink>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavDropDown;

interface NavLinkProps {
  path: string;
  children: ReactNode;
  className?: string;
  isActive?: boolean;
}
function NavLink({ path, children, className, isActive }: NavLinkProps) {
  return (
    <li className='w-full '>
      <a
        href={path}
        className={twMerge('w-full inline-block p-2 pl-4 hover:bg-slate-600/25 text-sm hover:text-slate-300 transition-colors', `${isActive ? 'font-semibold ' : ' '}`, className)}
      >
        {children}
      </a>
    </li>
  );
}
