"use client";

import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#6cb251] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <img
              src="/phonto 34.jpg" // Replace with actual logo path
              alt="Business For The Youth Logo"
              className="h-16 mb-4 mx-auto md:mx-0"
            />
            <p className="text-white text-sm max-w-md mx-auto md:mx-0">
              Business For The Youth is dedicated to empowering youth worldwide
              through entrepreneurship, leadership, and meaningful community
              engagement.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
            <a
              href="/"
              className="hover:text-gray-200 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="hover:text-gray-200 transition-colors duration-300"
            >
              About Us
            </a>
            <a
              href="/start-chapter"
              className="hover:text-gray-200 transition-colors duration-300"
            >
              Get Involved
            </a>
            <a
              href="/contact"
              className="hover:text-gray-200 transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Social Media Section */}
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://www.instagram.com/businessfortheyouthglobal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 text-2xl transition-colors duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/businessfortheyouth?trk=public_profile_experience-item_profile-section-card_image-click"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 text-2xl transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200/50 my-6"></div>

        {/* Bottom Info */}
        <div className="text-center text-white text-sm">
          &copy; {new Date().getFullYear()} Business For The Youth. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;