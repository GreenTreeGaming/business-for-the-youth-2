"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaUsers, FaLightbulb } from "react-icons/fa";

const AboutSection3: React.FC = () => {
  const values = [
    {
      title: "Empowerment",
      text: "We believe in empowering youth to lead, innovate, and make a meaningful impact in their communities.",
      icon: <FaHandsHelping className="text-white text-4xl" />,
      bg: "bg-[#6cb251]", // Custom Green
    },
    {
      title: "Collaboration",
      text: "Collaboration is at the heart of everything we do, fostering connections across cultures and disciplines.",
      icon: <FaUsers className="text-white text-4xl" />,
      bg: "bg-[#4A4A4A]", // Charcoal Gray
    },
    {
      title: "Innovation",
      text: "We strive to encourage creativity and forward-thinking ideas that drive impactful change.",
      icon: <FaLightbulb className="text-white text-4xl" />,
      bg: "bg-[#6cb251]", // Custom Green
    },
  ];

  return (
    <section className="bg-[#F7F9FC] py-28 text-center">
      {/* Header */}
      <motion.h2
        className="text-5xl sm:text-6xl font-bold text-[#6cb251] mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Values
      </motion.h2>
      <motion.div
        className="w-24 h-1 bg-[#6cb251] mx-auto mb-12"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
      ></motion.div>

      {/* Subtitle */}
      <motion.p
        className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        At <span className="text-[#6cb251] font-bold">Business For The Youth</span>, our values guide every step we take. Together, we build
        impactful leaders who inspire positive change.
      </motion.p>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
        {values.map((value, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 rounded-lg shadow-md p-8 hover:scale-105 transition-transform duration-300 relative flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Icon Section */}
            <div
              className={`p-6 rounded-lg mb-6 flex items-center justify-center ${value.bg}`}
            >
              {value.icon}
            </div>

            {/* Title and Text */}
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {value.title}
            </h3>
            <p className="text-gray-600 text-center">{value.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection3;