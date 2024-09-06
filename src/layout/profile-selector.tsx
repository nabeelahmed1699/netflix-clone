'use client';

import React, { FC, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// assets
import user1 from '@/assets/avatars/user-1.jpg';
import user2 from '@/assets/avatars/user-2.jpg';
import user3 from '@/assets/avatars/user-3.jpg';

interface Profile {
  id: number;
  name: string;
  image: StaticImageData;
}

const profiles: Profile[] = [
  { id: 1, name: 'User 1', image: user1 },
  { id: 2, name: 'User 2', image: user2 },
  { id: 3, name: 'User 3', image: user3 },
];

interface ProfileDropdownProps {}

const ProfileDropdown: FC<ProfileDropdownProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<null | Profile>(profiles[0]);

  const handleProfileClick = (profile: Profile) => {
    setSelectedProfile(profile);
    setIsOpen(false);
  };

  const handleBackdropClick = () => {
    setIsOpen(false);
  };

  return (
    <div className='relative inline-block text-left' onMouseEnter={() => setIsOpen(!isOpen)} onMouseLeave={handleBackdropClick}>
      {/* Profile Icon */}
      <button className='flex items-center justify-center w-10 h-10 rounded-md overflow-hidden'>
        <Image
          src={selectedProfile?.image || '/path/to/default-profile.jpg'}
          alt='Profile'
          className='w-full h-full object-cover'
          width={120}
          height={120}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}

            {/* Dropdown Menu */}
            <motion.div
              className='absolute right-0 mt-2 w-48 bg-black rounded-md shadow-lg z-20'
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {profiles.map((profile) => (
                <div key={profile.id} className='group flex items-center p-2 cursor-pointer' onClick={() => handleProfileClick(profile)}>
                  <Image src={profile.image} alt={profile.name} className='w-8 h-8 rounded-md object-cover' width={120} height={120} />
                  <span className='ml-2 group-hover:underline'>{profile.name}</span>
                </div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileDropdown;
