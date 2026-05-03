import books from "../../public/data.json";
import BookCard from "./BookCard";

const FeaturedBooks = async () => {
  return (
    <section className="container mx-auto my-8 px-4">
      <h1 className="mb-8 text-center text-xl font-bold text-white">Featured Books</h1>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.slice(0, 4).map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;
