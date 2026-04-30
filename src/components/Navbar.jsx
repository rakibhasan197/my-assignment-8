"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow px-2 relative">
      <nav className="flex justify-between items-center py-3 mx-auto w-full container">
        
       
        <Link href={'/'}>
         
          <h3 className="font-black text-lg">BookNest</h3>
        </Link>

        
        <ul className="hidden md:flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-books"}>All Books</Link>
          </li>
          
          <li>
            <Link href={"/my-profile"}>My Profile</Link>
          </li>
        </ul>

       
        <div className="hidden md:flex gap-4">
          <ul className="flex items-center text-sm gap-4">
            <li>
              <Link href={"/signup"}>SignUp</Link>
            </li>
            <li>
              <Link href={"/signin"}>LogIn</Link>
            </li>
          </ul>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl font-bold"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t z-50">
          <ul className="flex flex-col text-sm p-4 gap-4">
            <li>
              <Link onClick={() => setOpen(false)} href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} href={"/all-photos"}>
                All Photos
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} href={"/pricing"}>
                Pricing
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} href={"/profile"}>
                Profile
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} href={"/signup"}>
                SignUp
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} href={"/signin"}>
                LogIn
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;