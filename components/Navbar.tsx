"use client";

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileNavbar = () => {
    setClick(!click);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setIsVisible(false); // Hide navbar on scroll down
      } else {
        setIsVisible(true); // Show navbar on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-lg transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <img
                src="/phonto 34.jpg"
                alt="Business For The Youth Logo"
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <a
              href="/"
              className="text-lg font-medium text-gray-800 hover:text-customGreen transition duration-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-lg font-medium text-gray-800 hover:text-customGreen transition duration-300"
            >
              About
            </a>
            <a
              href="/getinvolved"
              className="text-lg font-medium text-gray-800 hover:text-customGreen transition duration-300"
            >
              Get Involved
            </a>
            <a
              href="/updates"
              className="text-lg font-medium text-gray-800 hover:text-customGreen transition duration-300"
            >
              Updates
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileNavbar}
              className="text-gray-800 hover:text-customGreen focus:outline-none"
            >
              {click ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Links */}
        {click && (
          <div className="md:hidden bg-white py-4 px-2 space-y-4 shadow-xl rounded-lg">
            <a
              href="/"
              className="block text-lg text-gray-800 hover:text-customGreen transition duration-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="block text-lg text-gray-800 hover:text-customGreen transition duration-300"
            >
              About
            </a>
            <a
              href="/getinvolved"
              className="block text-lg text-gray-800 hover:text-customGreen transition duration-300"
            >
              Get Involved
            </a>
            <a
              href="/updates"
              className="block text-lg text-gray-800 hover:text-customGreen transition duration-300"
            >
              Updates
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;