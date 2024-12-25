"use client";

import React, { useState, useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

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

  const handleMouseEnter = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setDropdownOpen(false), 200); // Delay of 200ms
    setDropdownTimeout(timeout);
  };

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
          <div className="hidden md:flex space-x-6 items-center">
            <a
              href="/"
              className="text-lg font-medium text-gray-800 hover:text-[#34A853] transition duration-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-lg font-medium text-gray-800 hover:text-[#34A853] transition duration-300"
            >
              About
            </a>
            <div
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-lg font-medium text-gray-800 hover:text-[#34A853] transition duration-300">
                Get Involved
                <FaCaretDown
                  className={`ml-2 transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                  <a
                    href="/start-chapter"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#34A853]"
                  >
                    Start a Chapter
                  </a>
                  <a
                    href="/volunteering"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#34A853]"
                  >
                    Volunteering
                  </a>
                </div>
              )}
            </div>
            <a
              href="/updates"
              className="text-lg font-medium text-gray-800 hover:text-[#34A853] transition duration-300"
            >
              Updates
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileNavbar}
              className="text-gray-800 hover:text-[#34A853] focus:outline-none"
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
              className="block text-lg text-gray-800 hover:text-[#34A853] transition duration-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="block text-lg text-gray-800 hover:text-[#34A853] transition duration-300"
            >
              About
            </a>
            <div>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center w-full text-left text-lg text-gray-800 hover:text-[#34A853] transition duration-300"
              >
                Get Involved
                <FaCaretDown
                  className={`ml-2 transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {dropdownOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <a
                    href="/start-chapter"
                    className="block text-lg text-gray-800 hover:text-[#34A853] transition duration-300"
                  >
                    Start a Chapter
                  </a>
                  <a
                    href="/volunteering"
                    className="block text-lg text-gray-800 hover:text-[#34A853] transition duration-300"
                  >
                    Volunteering
                  </a>
                </div>
              )}
            </div>
            <a
              href="/updates"
              className="block text-lg text-gray-800 hover:text-[#34A853] transition duration-300"
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