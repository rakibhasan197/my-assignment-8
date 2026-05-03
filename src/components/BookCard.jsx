import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="group w-full rounded-xl overflow-hidden bg-slate-900/90 border border-blue-400/20
    shadow-md shadow-blue-950/30 hover:shadow-xl hover:shadow-blue-950/50
    transition-all duration-300 transform 
    hover:-translate-y-2">

      
     <div className="relative h-56 w-full bg-slate-800 overflow-hidden sm:h-60">
  <Image
    src={book.image_url}
    alt={book.title}
    fill
    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
    className="object-cover group-hover:scale-105 transition-transform duration-500"
  />
</div>

    
      <div className="min-h-28 p-3 space-y-1 group-hover:-translate-y-1 transition-all duration-300">
        <h1 className="text-sm font-bold text-slate-100 group-hover:text-blue-300">
          {book.title}
        </h1>

        <p className="text-xs text-slate-400">{book.author}</p>

        <p className="inline-block text-[10px] font-semibold uppercase px-2 py-[2px] rounded-full bg-blue-500/15 text-blue-200">
          {book.category}
        </p>
      </div>

      
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
