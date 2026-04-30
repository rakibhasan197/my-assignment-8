import { Button } from '@heroui/react';
import React from 'react';
import Marquee from 'react-fast-marquee';

const books = [
  { id: 1, title: "The Silent Forest" },
  { id: 2, title: "JavaScript Mastermind" },
  { id: 3, title: "Beyond the Stars" },
  { id: 4, title: "Whispers of the River" },
  { id: 5, title: "React in Action" },
  { id: 6, title: "The Human Genome" },
  { id: 7, title: "Moonlight Promise" },
  { id: 8, title: "Node.js Backend Blueprint" },
  { id: 9, title: "Quantum Frontiers" },
  { id: 10, title: "The Lost Diary" },
  { id: 11, title: "Python Powerhouse" },
  { id: 12, title: "Secrets of Biology" }
];

const BreakingNews = () => {
  return (
    <div className='flex items-center gap-4 p-3 bg-gradient-to-r from-gray-200 via-white to-gray-200 my-4 container mx-auto rounded-lg shadow-sm'>
      
   
      <Button className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md whitespace-nowrap mr-3">
        Latest Books
      </Button>

     
      <Marquee pauseOnHover speed={50}>
        <div className='flex gap-8 text-sm font-medium text-gray-700'>
          {books.map((b) => (
            <span key={b.id} className='flex items-center gap-2'>
              📚 {b.title} <span className='text-gray-400'>•</span>
            </span>
          ))}
        </div>
      </Marquee>

    </div>
  );
};

export default BreakingNews;