"use client";

import React from "react";
import { motion } from "framer-motion";

const Section6: React.FC = () => {
  return (
    <motion.section
      className="bg-[#34A853] text-white py-20 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#FBB040] opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#F7F9FC] opacity-20 rounded-full blur-3xl"></div>

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
          className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto"
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-[#34A853]"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border-2 border-[#FBB040] bg-[#FBB040] text-white font-semibold rounded-lg transition-all duration-300 hover:bg-[#34A853] hover:text-white"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default Section6;