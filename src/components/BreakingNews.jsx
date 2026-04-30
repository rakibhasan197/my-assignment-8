import { Button } from '@heroui/react';
import React from 'react';
import Marquee from 'react-fast-marquee';

const books = [
  { "id": 1, "title": "The Silent Forest" },
  { "id": 2, "title": "JavaScript Mastermind" },
  { "id": 3, "title": "Beyond the Stars" },
  { "id": 4, "title": "Whispers of the River" },
  { "id": 5, "title": "React in Action" },
  { "id": 6, "title": "The Human Genome" },
  { "id": 7, "title": "Moonlight Promise" },
  { "id": 8, "title": "Node.js Backend Blueprint" },
  { "id": 9, "title": "Quantum Frontiers" },
  { "id": 10, "title": "The Lost Diary" },
  { "id": 11, "title": "Python Powerhouse" },
  { "id": 12, "title": "Secrets of Biology" }
]

const BreakingNews = () => {
  return (
    <div className='flex p-2 bg-gray-300 my-4 container mx-auto items-center rounded-md'>
     <Button variant='secondary' className="bg-red-500 text-white py-4 px-4 rounded-md">Latest Books</Button>
      <Marquee>
       {
        books.map(b=>{
         return <span key={b.id} className='gap-4'>{b.title}</span>
        })
       }
      </Marquee>
    </div>
  );
};

export default BreakingNews;