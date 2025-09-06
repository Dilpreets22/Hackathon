'use client';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(null);

  // Example: Fetch user authentication status
  useEffect(() => {
    // Replace this with your auth logic
    const loggedInUser = JSON.parse(localStorage.getItem("user")); 
    setUser(loggedInUser);
  }, []);

  return (
    <div>
      <header className="text-gray-300 body-font bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl mt-2 mr-4 ml-4">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <Link href={'/'}>
            <Image
              src="/Logo.png"
              width={150}
              height={150}
              alt="Logo"
            />
          </Link>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-200" href='/about'>About</Link>
            <Link className="mr-5 hover:text-gray-200" href='/feature'>Features</Link>
            <Link className="mr-5 hover:text-gray-200" href='/contact'>Contact Us</Link>

            {/* Transactions Link */}
            {user ? (
              <Link className="mr-5 hover:text-gray-200" href='/Transactions'>Transactions</Link>
            ) : (
              <span className="mr-5 text-gray-400 cursor-not-allowed">Transactions</span>
            )}
          </nav>

          <Link href='/link2'>
            <button className="inline-flex items-center text-white bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded-2xl text-base mt-4 md:mt-0">
              Sign Up
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>

        </div>
      </header>
    </div>
  );
};

export default Navbar;
