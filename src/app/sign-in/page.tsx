import React from 'react';

// assets
import coverImage from '@/assets/what_is_netflix_5_en.png';
import { IconChevronRight } from '@tabler/icons-react';

const SignIn = () => {
  return (
    <header
      className={`relative flex justify-center flex-col min-h-screen bg-cover bg-center transition-all duration-300 pt-10 bg-gradient-to-b from-black to-transparent`}
      style={{ backgroundImage: `url(${coverImage.src})` }}
    >
      <div className='absolute inset-0 bg-black/45' />
      <div className='relative z-10 min-h-screen flex items-center justify-center flex-col max-w-2xl mx-auto text-center'>
        <div>
          <h1 className='text-6xl font-black'>Unlimited movies, TV shows, and more</h1>
          <p className='font-medium text-lg mt-4'>Starts at Rs 250. Cancel anytime.</p>
        </div>

        <form action='' className='mt-10 w-full'>
          <p className='text-sm'>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className='flex gap-4 mt-4'>
            <div className='flex-grow'>
              <div className='relative border border-stone-500 bg-slate-900/45 rounded-sm overflow-hidden focus-within:border-white'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='bg-transparent p-4 pt-6 pb-2  outline-none w-full placeholder:opacity-0 focus:placeholder:opacity-0 peer'
                  required
                  placeholder=' '
                />
                <label
                  htmlFor='email'
                  className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-4 peer-focus:left-3 peer-focus:text-xs'
                >
                  Email Address
                </label>
              </div>
            </div>
            <button
              className='inline-flex justify-center items-center gap-1 uppercase bg-red-600 px-6 text-lg font-bold rounded-sm hover:bg-red-800 transition-colors'
              type='submit'
            >
              get started
              <IconChevronRight />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default SignIn;
