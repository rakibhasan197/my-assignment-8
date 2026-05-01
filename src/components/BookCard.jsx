import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="group w-[220px] rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">

      {/* Image Section */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <Image
          src={book.image_url}
          alt={book.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-3">
        <h1 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition">
          {book.title}
        </h1>

        <p className="text-sm text-gray-500">{book.author}</p>

        <p className="text-xs mt-1 text-gray-400">
          {book.category}
        </p>
      </div>
      <Button>View Details</Button>
    </div>
  );
};

export default BookCard;