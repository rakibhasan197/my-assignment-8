import BookCard from "./BookCard";

const FeaturedBooks = async () => {
  const res = await fetch(
    "https://my-assignment-8.vercel.app/data.json",
    { cache: "no-store" }
  );

  const books = await res.json();

  return (
    <div>
      <h1>Featured Books</h1>

      <div className="grid grid-cols-3 gap-5">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;