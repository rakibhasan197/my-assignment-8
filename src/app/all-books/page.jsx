"use client";

import { useEffect, useState } from "react";
import BookCard from "@/components/BookCard";
import Category from "@/components/Category";

const AllBooksPage = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setBooks(data);
    };

    fetchData();
  }, []);

  const filtered = books.filter((book) => {
    const matchSearch = (book?.title || "")
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      selectedCategory === "All" || book.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className="mb-8 text-center text-3xl font-bold text-white">Explore All Books</h2>

      <div className="mb-6 flex justify-center">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search books by title..."
          className="w-full max-w-2xl rounded-lg border border-blue-400/20 bg-slate-900/80 px-4 py-3 text-slate-100 shadow-lg shadow-blue-950/30 outline-none placeholder:text-slate-400 focus:border-blue-400"
        />
      </div>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        <Category
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="flex-1">
          {filtered.length === 0 ? (
            <p className="text-center text-slate-300">No books found</p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {filtered.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;
