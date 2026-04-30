import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
    <div className='text-center my-8 space-y-2 '>
      <h2 className='font-bold text-5xl'>Find Your Next Read</h2>
      <Link href={'/all-books'}><Button variant='secondary'>Browse Now</Button></Link>
    </div>
  );
};

export default Banner;