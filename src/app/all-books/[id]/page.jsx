import BorrowActions from "@/components/BorrowActions";
import Image from "next/image";
import { notFound } from "next/navigation";
import books from "../../../../public/data.json";

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;
  const book = books.find((item) => item.id == id);

  if (!book) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-4 py-16">
      <div className="container mx-auto">
        <div className="grid items-center gap-10 rounded-3xl border border-blue-400/20 bg-slate-900/80 p-6 shadow-2xl shadow-blue-950/50 backdrop-blur-lg md:p-12 lg:grid-cols-2 lg:gap-14">
          <div className="flex justify-center">
            <div className="group overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={book.image_url}
                alt={book.title}
                width={450}
                height={650}
                className="h-[520px] w-full object-cover transition duration-500 group-hover:scale-105 md:h-[620px]"
                priority
              />
            </div>
          </div>

          <div className="space-y-6">
            <span className="inline-block rounded-full bg-blue-500/15 px-4 py-2 text-sm font-semibold text-blue-200 shadow-sm">
              {book.category}
            </span>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              {book.title}
            </h1>

            <h3 className="text-2xl font-medium text-slate-300">
              By {book.author}
            </h3>

            <div className="h-1 w-24 rounded-full bg-blue-400" />

            <p className="text-lg leading-8 text-slate-300">
              {book.description}
            </p>

            <span className="inline-flex rounded-full bg-cyan-500/15 px-5 py-2 text-lg font-semibold text-cyan-200">
              {book.available_quantity} copies left
            </span>

            <BorrowActions title={book.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
