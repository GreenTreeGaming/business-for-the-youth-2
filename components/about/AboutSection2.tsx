"use client";

import React from "react";
import { FaHandsHelping, FaBusinessTime, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutSection2: React.FC = () => {
  const statements = [
    {
      icon: <FaBusinessTime className="text-white text-4xl" />,
      title: "Engaging Youth in Business",
      text: "We teach the youth the practicalities of running a business to prepare them for the real world and help them become leaders in their communities.",
      bg: "bg-[#6cb251]", // Custom Green
    },
    {
      icon: <FaHandsHelping className="text-white text-4xl" />,
      title: "Acts of Service",
      text: "From running donation drives to creating crafts and gift bags, we empower the youth to help underrepresented groups through acts of service.",
      bg: "bg-[#4A4A4A]", // Charcoal Gray
    },
    {
      icon: <FaUsers className="text-white text-4xl" />,
      title: "Empowering Communities",
      text: "We strive to uplift underrepresented groups by combining business practices with meaningful community engagement.",
      bg: "bg-[#6cb251]", // Custom Green
    },
  ];

  return (
    <section className="bg-white pb-20">
      {/* Decorative Header Section */}
      <div className="bg-gradient-to-r from-[#faf0f6] via-[#bfedff] to-[#d9eabd] pt-32 pb-16 text-center w-full relative">
        <motion.h2
          className="text-5xl sm:text-6xl font-bold text-[#4A4A4A]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Who We Are
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
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-16">
        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          At <span className="text-[#6cb251] font-bold">Business for the Youth</span>, we empower young leaders through{" "}
          <span className="text-[#4A4A4A] font-bold">business</span> and{" "}
          <span className="text-[#4A4A4A] font-bold">service</span>, fostering
          growth and meaningful impact within their communities.
        </motion.p>

        {/* Statements Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {statements.map((statement, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md p-6 hover:scale-105 transition-transform duration-300 relative flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Icon Section */}
              <div
                className={`p-6 rounded-lg mb-6 flex items-center justify-center ${statement.bg}`}
              >
                {statement.icon}
              </div>

              {/* Title and Text */}
              <h3 className="text-xl font-bold text-gray-800 mb-4 max-w-[90%]">
                {statement.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {statement.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection2;