"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Section6: React.FC = () => {
  return (
    <motion.section
      className="bg-gradient-to-r from-[#faf0f6] via-[#bfedff] to-[#d9eabd] text-[#4A4A4A] py-20 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-white opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        {/* Huge Header */}
        <motion.h2
          className="text-5xl sm:text-6xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Join Us!
        </motion.h2>

        {/* Supporting Text */}
        <motion.p
          className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto text-[#4A4A4A] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Be part of a global movement empowering youth through entrepreneurship
          and impactful initiatives. Together, we can create change and build a
          brighter future for communities worldwide.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center gap-6">
          <Link href="/start-chapter">
            <motion.button
              whileHover={{
                backgroundPosition: "200% center",
                transition: "background-position 0.5s",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-[#64a837] to-[#7bc972] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg bg-[length:200%_auto]"
              style={{
                backgroundImage:
                  "linear-gradient(45deg, #64a837, #7bc972, #64a837)",
                backgroundPosition: "0% center",
              }}
            >
              Get Started
            </motion.button>
          </Link>
          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-[#6cb251]"
            >
              Learn More
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Section6;