import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="group w-full max-w-[220px] rounded-2xl overflow-hidden bg-white 
    shadow-md hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] 
    transition-all duration-500 transform 
    hover:-translate-y-3 hover:scale-[1.03] mx-auto">

    
      <div className="relative w-full h-[300px] overflow-hidden bg-gray-100">

        <Image
          src={book.image_url}
          alt={book.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />

      </div>

      <div className="p-3 space-y-1 transition-all duration-500 group-hover:-translate-y-1">
        <h1 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition">
          {book.title}
        </h1>

        <p className="text-sm text-gray-500">{book.author}</p>

        <p className="text-xs text-gray-400">{book.category}</p>
      </div>

   
      <div className="p-3 pt-0">
        <Button className="w-full bg-blue-600 text-white 
        hover:bg-blue-700 
        shadow-md hover:shadow-blue-400/40 
        transition-all duration-300">
          View Details
        </Button>
      </div>

    </div>
  );
};

export default BookCard;