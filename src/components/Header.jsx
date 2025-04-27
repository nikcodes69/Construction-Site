import React, { useState } from "react";
import HeaderImage from "../assets/headerlogo.jpeg";
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-black relative">
      <div className="flex justify-between items-center text-lg px-4 sm:px-10 py-4">
        <img
          src={HeaderImage}
          alt="Company Logo"
          className="h-[50px] w-[50px]"
        />

        {/* Desktop Navigation - hidden on mobile */}
        <nav className="text-white space-x-6 hidden md:flex">
          <a href="#" className="hover:text-amber-400 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors">
            Services
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors">
            Projects
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors">
            Contact
          </a>
          <Link to="/signup" className="hover:text-amber-400 transition-colors">
            SignUp
          </Link>
          <Link to="/signup" className="hover:text-amber-400 transition-colors">
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button - only visible on mobile */}
        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu - shown when menu is open */}
      {mobileMenuOpen && (
        <nav className="bg-black text-white py-4 px-6 flex flex-col space-y-4 md:hidden absolute w-full z-50">
          <a
            href="#"
            className="hover:text-amber-400 transition-colors py-2 border-b border-gray-800"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-amber-400 transition-colors py-2 border-b border-gray-800"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-amber-400 transition-colors py-2 border-b border-gray-800"
          >
            Services
          </a>
          <a
            href="#"
            className="hover:text-amber-400 transition-colors py-2 border-b border-gray-800"
          >
            Projects
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors py-2">
            Contact
          </a>
          <Link to="/signup" className="hover:text-amber-400 transition-colors">
            SignUp
          </Link>
          <Link to="/login" className="hover:text-amber-400 transition-colors">
            Login
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
