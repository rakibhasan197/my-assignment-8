import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">

      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold text-white">
            <span className="text-blue-500">BN</span> <span className="text-red-900">BookNest</span>
          </h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Digitizing the traditional library experience. Borrow your favorite titles with just a click.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/all-books" className="hover:text-white">All Books</Link></li>
            <li><Link href="/my-profile" className="hover:text-white">My Profile</Link></li>
            <li><Link href="#" className="hover:text-white">Borrowing Policy</Link></li>
            <li><Link href="#" className="hover:text-white">Membership</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <div className="space-y-2 text-sm">
            <p>📧 support@bookvibe.com</p>
            <p>📞 +8801937134184</p>
            <p>📍 Dhaka, Bangladesh</p>
          </div>
        </div>

      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-800 mt-6 py-5 px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 max-w-7xl mx-auto">

        <p>© 2026 BookVibe. All rights reserved.</p>

        <div className="flex gap-5 mt-3 md:mt-0">
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-white">Terms of Service</Link>
        </div>

      </div>

    </footer>
  );
};

export default Footer;