import { Button } from "@heroui/react";
import Image from "next/image";

import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="group w-[220px] rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">

      {/* IMAGE */}
      <div className="relative w-full h-[300px] overflow-hidden bg-gray-100">


<Image
  src={book.image_url}
  alt={book.title}
  fill
  unoptimized
  className="object-cover"
/>
      </div>

      {/* CONTENT */}
      <div className="p-3 space-y-1">
        <h1 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition">
          {book.title}
        </h1>

        <p className="text-sm text-gray-500">{book.author}</p>

        <p className="text-xs text-gray-400">{book.category}</p>
      </div>

      {/* BUTTON */}
      <div className="p-3 pt-0">
        <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default BookCard;