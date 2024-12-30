"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaRegCheckCircle } from "react-icons/fa";

const VolunteerSection1: React.FC = () => {
  return (
    <section className="bg-[#F7F9FC]">
      {/* Decorative Header Section */}
      <div
        className="bg-gradient-to-r from-[#faf0f6] via-[#bfedff] to-[#d9eabd] pt-32 pb-16 text-center w-full relative"
      >
        <motion.h2
          className="text-5xl sm:text-6xl font-bold text-[#4A4A4A]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Volunteer With BFTY
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-[#6cb251] mx-auto mt-4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        ></motion.div>
        {/* Background Decorative Accents */}
        <div className="absolute top-10 left-5 w-32 h-32 bg-[#bfedff] opacity-40 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#d9eabd] opacity-40 rounded-full blur-2xl"></div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-16 space-y-16">
        {/* Getting Started Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <motion.div
            className="space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <FaRegCheckCircle className="text-5xl text-[#6cb251]" />
              <h3 className="text-3xl font-bold text-[#4A4A4A]">
                Getting Started
              </h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To register your volunteer hours, head over to our Volunteer Hour
              Logging Form to verify your hours. After submission, our Volunteer
              Coordinator will review your request and send over a certification
              verifying your hours/service with BFTY.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/IMG_1933.JPG" // Replace with actual image path
              alt="Volunteer Registration"
              className="w-full h-72 object-cover"
            />
          </motion.div>
        </div>

        {/* Volunteer Ranking Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            className="rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/IMG_5384 - Aahana Shah.jpeg" // Replace with actual image path
              alt="Volunteer Ranking"
              className="w-full h-72 object-cover"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <FaCertificate className="text-5xl text-[#6cb251]" />
              <h3 className="text-3xl font-bold text-[#4A4A4A]">
                Volunteer Hour Award Ranking
              </h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Earn recognition for your efforts! Volunteers with over 25+ hours
              of service receive ranked certificates:
            </p>
            <ul className="text-lg text-gray-700 space-y-2">
              <li>
                <strong className="text-[#6cb251]">Bronze:</strong> 25 hours of
                service
              </li>
              <li>
                <strong className="text-[#6cb251]">Silver:</strong> 50 hours of
                service
              </li>
              <li>
                <strong className="text-[#6cb251]">Gold:</strong> 75+ hours of
                service
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Call-to-Action */}
        <motion.div
          className="mt-16 text-center pb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe7fJUj0QTqcmKh675NLycYXT61mY05rQPtrozeIlGUhog8-A/viewform" // Replace with the actual form URL
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#34A853] to-[#6cb251] text-white font-semibold rounded-lg transition-all duration-300 hover:bg-[#6cb251] shadow-lg text-lg"
          >
            Log Your Volunteer Hours
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default VolunteerSection1;