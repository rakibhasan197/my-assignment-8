import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
    <div className='container mx-auto my-8 px-2'>
      <div
        className='relative h-[70vh] md:h-[78vh] rounded-xl overflow-hidden flex items-center justify-center text-center px-4 md:px-10 bg-cover bg-center'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1470&auto=format&fit=crop')",
        }}
      >
        
      
        <div className='absolute inset-0 bg-black/55'></div>

       
        <div className='absolute inset-0 bg-gradient-to-r from-purple-900/50 via-violet-800/30 to-pink-800/40'></div>

       
        <div className='absolute w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20 top-10 left-10'></div>
        <div className='absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 bottom-10 right-10'></div>

      
        <div className='relative z-10 text-white max-w-3xl space-y-5'>
          <h2 className='animate__animated animate__fadeInDown font-bold text-3xl sm:text-5xl md:text-6xl leading-tight'>
            Find Your Next <br /> Favorite Book Today
          </h2>

          <p className='animate__animated animate__fadeInUp text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto'>
            Discover thousands of books, connect with amazing authors, and borrow
            your desired reads anytime from anywhere.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
            <Link href={'/all-books'}>
              <Button variant={'secondary'} className="text-red-950" size='lg'>
                Browse Now
              </Button>
            </Link>

        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
