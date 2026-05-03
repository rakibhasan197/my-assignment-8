"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const BorrowActions = ({ title }) => {
  const router = useRouter();
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const isLoading = userData.isPending;

  const handleBorrow = () => {
    if (isLoading) {
      return;
    }

    if (!user) {
      router.push("/signin");
      return;
    }

    toast.success(`Borrow request confirmed for ${title}`);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-4">
      <button
        onClick={handleBorrow}
        disabled={isLoading}
        className="bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold px-8 py-3 rounded-xl shadow-lg transition duration-300 hover:scale-105 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
      >
        Borrow This Book
      </button>

      <button className="bg-slate-900 border-2 border-blue-400 hover:bg-blue-950 text-blue-100 text-base font-semibold px-8 py-3 rounded-xl shadow-lg transition duration-300 hover:scale-105 cursor-pointer">
        Read Free Preview
      </button>
    </div>
  );
};

export default BorrowActions;
