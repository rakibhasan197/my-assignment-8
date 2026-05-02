"use client";

import { toast } from "react-toastify";

const BorrowActions = ({ title }) => {
  const handleBorrow = () => {
    toast.success(`Borrow request confirmed for ${title}`);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-4">
      <button
        onClick={handleBorrow}
        className="bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold px-8 py-3 rounded-xl shadow-lg transition duration-300 hover:scale-105 cursor-pointer"
      >
        Borrow This Book
      </button>

      <button className="bg-white border-2 border-blue-600 hover:bg-blue-50 text-blue-700 text-base font-semibold px-8 py-3 rounded-xl shadow-lg transition duration-300 hover:scale-105 cursor-pointer">
        Read Free Preview
      </button>
    </div>
  );
};

export default BorrowActions;
