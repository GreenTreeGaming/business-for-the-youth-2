"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const Section1: React.FC = () => {
  return (
    <section
      className="pt-20 md:pt-16 min-h-screen flex items-center relative bg-cover bg-center"
      style={{
        backgroundImage: `url('/IMG_20241015_214040_803 - Bemnet Fiker (1).jpg')`, // Replace with your image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Join Us in <span className="text-[#6cb251]">Making Change</span>{" "}
            Through Business
          </h1>
          <p className="text-lg sm:text-xl text-white opacity-90">
            Together, we empower youth to create a better future with innovative
            and sustainable business solutions. Be a part of something bigger
            and make an impact today!
          </p>

          {/* Key Highlights */}
          <div className="mt-4 space-y-3">
            {[
              "Empower youth to become leaders.",
              "Provide impactful business solutions.",
              "Create opportunities for sustainable growth.",
            ].map((highlight, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 text-white text-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              >
                <FaCheckCircle className="text-[#6cb251] text-xl" />
                {highlight}
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-6 mt-6">
          <Link href="/start-chapter">
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="px-6 py-3 text-white font-semibold rounded-lg shadow-lg text-lg transition-all duration-300"
              style={{
                background: "linear-gradient(45deg, #64a837, #7bc972, #64a837)",
                backgroundSize: "200%",
                backgroundPosition: "0%",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundPosition = "100%";
                e.currentTarget.style.transition = "background-position 0.5s ease";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundPosition = "0%";
              }}
            >
              Get Involved
            </motion.button>
          </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-[#6cb251] shadow-lg"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="text-white text-2xl">↓</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Section1;