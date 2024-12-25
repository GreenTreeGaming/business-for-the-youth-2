"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaRegLightbulb } from "react-icons/fa";

const Section4: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="bg-[#F7F9FC] py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.h2
          className="text-5xl sm:text-6xl font-bold text-[#34A853] mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Get Involved
        </motion.h2>

        {/* Two Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Volunteering Section */}
          <motion.div
            className="bg-white rounded-xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            variants={sectionVariants}
          >
            <div className="bg-[#FBB040] p-4 rounded-full mb-6 flex items-center justify-center">
              <FaHandsHelping className="text-4xl text-white" />
            </div>
            <h3 className="text-3xl font-bold text-[#FBB040] mb-4">
              Volunteering
            </h3>
            <p className="text-lg text-[#4A4A4A] mb-6">
              Join us in making a difference by volunteering your time to help
              with our events, initiatives, and outreach programs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 font-semibold rounded-lg bg-[#FBB040] text-white hover:text-[#4A4A4A] transition-all"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Starting a Chapter Section */}
          <motion.div
            className="bg-white rounded-xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={sectionVariants}
          >
            <div className="bg-[#34A853] p-4 rounded-full mb-6 flex items-center justify-center">
              <FaRegLightbulb className="text-4xl text-white" />
            </div>
            <h3 className="text-3xl font-bold text-[#34A853] mb-4">
              Starting a Chapter
            </h3>
            <p className="text-lg text-[#4A4A4A] mb-6">
              Start a local chapter in your area to bring our mission closer to
              your community and inspire others to get involved.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 font-semibold rounded-lg bg-[#34A853] text-white hover:text-[#4A4A4A] transition-all"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Section4;