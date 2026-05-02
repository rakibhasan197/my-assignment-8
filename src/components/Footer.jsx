import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-10 bg-gray-900 text-gray-300">
      <div className="container mx-auto grid grid-cols-1 gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-extrabold text-white">
            <span className="text-blue-500">BN</span>{" "}
            <span className="text-red-400">BookNest</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            Digitizing the traditional library experience. Borrow your favorite
            titles with just a click.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/all-books" className="hover:text-white">
                All Books
              </Link>
            </li>
            <li>
              <Link href="/profile" className="hover:text-white">
                My Profile
              </Link>
            </li>
            <li>
              <Link href="/signin" className="hover:text-white">
                Login
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Contact Us</h3>
          <div className="space-y-2 text-sm">
            <p>Email: support@booknest.com</p>
            <p>Phone: +8801937134184</p>
            <p>Location: Dhaka, Bangladesh</p>
          </div>
          <div className="mt-5 flex gap-4 text-xl">
            <Link href="#" aria-label="Facebook" className="hover:text-white">
              <FaFacebook />
            </Link>
            <Link href="#" aria-label="Github" className="hover:text-white">
              <FaGithub />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-white">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between border-t border-gray-800 px-4 py-5 text-sm text-gray-500 md:flex-row">
        <p>Copyright 2026 BookNest. All rights reserved.</p>
        <div className="mt-3 flex gap-5 md:mt-0">
          <Link href="#" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
