import BookCard from "./BookCard";

const FeaturedBooks = async () => {
  const res = await fetch(
    "https://my-assignment-8.vercel.app/data.json",
    { cache: "no-store" }
  );

  const books = await res.json();

  return (
    <div className="container mx-auto my-8">
      <h1 className="font-bold text-xl text-center mb-8">Featured Books</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {books.slice(1,5).map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;