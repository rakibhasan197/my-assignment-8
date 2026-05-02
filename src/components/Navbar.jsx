"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMenuSharp } from "react-icons/io5";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/all-books", label: "All Books" },
  { href: "/profile", label: "My Profile" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleLogOut = async () => {
    await authClient.signOut();
  };

  return (
    <header className="relative border-b bg-white px-2 shadow-sm">
      <nav className="container mx-auto flex w-full items-center justify-between py-3">
        <Link href="/">
          <h3 className="text-lg font-black">
            Book<span className="text-red-900">Nest</span>
          </h3>
        </Link>

        <ul className="hidden items-center gap-5 text-sm md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          {!user ? (
            <>
              <Link href="/signin">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/signup">
                <Button className="text-red-900" variant="secondary">
                  Register
                </Button>
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <h2 className="font-semibold">{user.name}</h2>
              <Button onClick={handleLogOut} size="sm" variant="danger">
                Logout
              </Button>
            </div>
          )}
        </div>

        <button
          onClick={() => setOpen((value) => !value)}
          className="rounded border px-3 py-1 text-sm font-semibold md:hidden"
          type="button"
        >
          {open ? "X" : <FiMenu />}
        </button>
      </nav>

      {open && (
        <div className="absolute left-0 top-full z-50 w-full border-t bg-white shadow-lg md:hidden">
          <ul className="flex flex-col gap-4 p-4 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link onClick={() => setOpen(false)} href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
            {!user ? (
              <>
                <li>
                  <Link onClick={() => setOpen(false)} href="/signin">
                    Login
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setOpen(false)} href="/signup">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <button onClick={handleLogOut} type="button">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
