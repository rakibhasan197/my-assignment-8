import Image from "next/image";
import React from "react";

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://my-assignment-8.vercel.app/data.json", {
    cache: "no-store",
  });
  const books = await res.json();

  const book = books.find((b) => b.id == id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-white">

     
          <div className="flex justify-center">
            <div className="overflow-hidden rounded-3xl shadow-2xl group">
              <Image
                src={book.image_url}
                alt={book.title}
                width={450}
                height={650}
                className="object-cover w-full h-[620px] group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>

         
          <div className="space-y-6">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full shadow-sm">
              {book.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              {book.title}
            </h1>

            <h3 className="text-2xl text-gray-600 font-medium">
              By {book.author}
            </h3>

            <div className="w-24 h-1 bg-blue-600 rounded-full"></div>

            <p className="text-gray-600 leading-8 text-lg">
              {book.description}
            </p>

            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-green-700 bg-green-100 px-5 py-2 rounded-full">
                {book.available_quantity} Copies Left
              </span>
            </div>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
  <button className="bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold px-8 py-3 rounded-xl shadow-lg transition duration-300 hover:scale-105 cursor-pointer">
    Borrow This Book
  </button>

  <button className="bg-white border-2 border-blue-600 hover:bg-blue-50 text-blue-700 text-base font-semibold px-8 py-3 rounded-xl shadow-lg transition duration-300 hover:scale-105 cursor-pointer">
    Read Free Preview
  </button>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;