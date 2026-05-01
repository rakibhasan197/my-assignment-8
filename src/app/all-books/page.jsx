"use client";

import { useEffect, useState } from "react";
import BookCard from "@/components/BookCard";

const AllBooksPage = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://my-assignment-8.vercel.app/data.json"
      );
      const data = await res.json();
      setBooks(data);
    };

    fetchData();
  }, []);

  const filtered = books.filter((book) =>
    (book?.title || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 my-10">

      <h2 className="text-3xl font-bold text-center mb-8">
        All Books is Here
      </h2>

  
      <div className="flex justify-center mb-6">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search books..."
          className="border px-4 py-2 rounded-lg w-full max-w-md"
        />
      </div>

      
      {filtered.length === 0 ? (
        <p className="text-center text-gray-500">
          No books found 
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}

    </div>
  );
};

export default AllBooksPage;