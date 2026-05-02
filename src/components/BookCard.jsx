import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="group w-full max-w-[220px] rounded-xl overflow-hidden bg-white 
    shadow-md hover:shadow-xl 
    transition-all duration-300 transform 
    hover:-translate-y-2 mx-auto">

      {/* IMAGE (height reduced) */}
     <div className="relative w-full aspect-[1/1] bg-gray-100 overflow-hidden">
  <Image
    src={book.image_url}
    alt={book.title}
    fill
    sizes="220px"
    className="object-cover group-hover:scale-105 transition-transform duration-500"
  />
</div>

      {/* CONTENT (less padding = shorter card) */}
      <div className="p-2 space-y-0.5 group-hover:-translate-y-1 transition-all duration-300">
        <h1 className="text-sm font-bold text-gray-800 group-hover:text-blue-600">
          {book.title}
        </h1>

        <p className="text-xs text-gray-500">{book.author}</p>

        <p className="inline-block text-[10px] font-semibold uppercase px-2 py-[2px] rounded-full bg-blue-50 text-blue-700">
          {book.category}
        </p>
      </div>

      {/* BUTTON (compact) */}
      <div className="p-2 pt-0">
        <Link href={`/all-books/${book.id}`}>
          <Button className="w-full text-xs bg-blue-600 text-white hover:bg-blue-700 transition">
            View Details
          </Button>
        </Link>
      </div>

    </div>
  );
};

export default BookCard;