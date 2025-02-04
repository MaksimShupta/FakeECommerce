import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  //TODO: add logic
  return (
    <>
      <nav className="bg-gray-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-lg font-bold">
            Home
          </Link>
          <form className="hidden md:flex flex-grow justify-center mx-8">
            <div className="relative w-full max-w-md flex">
              <input
                id="search-bar"
                type="search"
                placeholder="Search items..."
                className="w-full px-4 py-2 pl-10 rounded-l-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-r-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                Search
              </button>
            </div>
          </form>
          <Link to="/cart" className="text-lg">
            Cart
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
