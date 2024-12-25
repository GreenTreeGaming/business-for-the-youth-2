"use client";

import React from "react";
import { motion } from "framer-motion";

const Section1: React.FC = () => {
  return (
    <section className="pt-20 md:pt-16 bg-[#34A853] min-h-screen flex items-center relative">
      {/* Background Accents */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-48 h-48 bg-[#FBB040] rounded-full opacity-40 blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-white opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#4A4A4A] opacity-10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Join Us in <span className="text-[#FBB040]">Making Change</span>{" "}
            Through Business
          </h1>
          <p className="text-lg sm:text-xl text-white opacity-90">
            Together, we empower youth to create a better future with innovative
            and sustainable business solutions. Be a part of something bigger
            and make an impact today!
          </p>
          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 mt-4 bg-[#FBB040] text-black font-semibold rounded-lg transition-all duration-300 hover:bg-[#FFC857] shadow-lg"
            >
              Get Involved
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 mt-4 bg-white text-[#34A853] font-semibold rounded-lg transition-all duration-300 hover:bg-[#E6F8E6] shadow-lg"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative flex justify-center md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="kids1.jpg"
            alt="Group of kids working together"
            className="rounded-lg shadow-2xl w-full max-w-[400px] md:max-w-full h-auto"
          />
          {/* Decorative Accents */}
          <div className="absolute top-5 right-5 w-16 h-16 bg-[#FBB040] rounded-full opacity-80 blur-xl"></div>
          <div className="absolute bottom-0 left-5 w-24 h-24 bg-white rounded-full opacity-20 blur-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section1;