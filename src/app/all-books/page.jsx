import BookCard from '@/components/BookCard';
import React from 'react';

const AllBooksPage = async () => {
  const res = await fetch(
    "https://my-assignment-8.vercel.app/data.json",
    { cache: "no-store" }
  );

  const books = await res.json();

  return (
    <div className="container mx-auto px-4 my-10">

      <h2 className="text-3xl font-bold text-center mb-8">
        All Books is Here
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}

      </div>

    </div>
  );
};

export default AllBooksPage;