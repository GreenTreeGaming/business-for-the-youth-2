"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaUsers, FaLightbulb, FaChartLine, FaHeart } from "react-icons/fa";

const AboutSection3: React.FC = () => {
  const values = [
    {
      title: "Empowerment",
      text: "We believe in empowering youth to lead, innovate, and make a meaningful impact in their communities.",
      icon: <FaHandsHelping className="text-white text-4xl" />,
      bg: "bg-[#34A853]", // Custom Green
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
      bg: "bg-[#FBB040]", // Golden Yellow
    },
    {
      title: "Growth",
      text: "We are dedicated to fostering personal and professional growth through opportunities and mentorship.",
      icon: <FaChartLine className="text-white text-4xl" />,
      bg: "bg-[#34A853]", // Custom Green
    },
    {
      title: "Compassion",
      text: "We value kindness and understanding, ensuring every action we take benefits those in need.",
      icon: <FaHeart className="text-white text-4xl" />,
      bg: "bg-[#FBB040]", // Golden Yellow
    },
  ];

  return (
    <section className="bg-[#F7F9FC] py-28">
      {/* Decorative Header Section */}
      <div className="bg-[#34A853] py-12 text-center">
        <motion.h2
          className="text-5xl sm:text-6xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Values
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-[#FBB040] mx-auto mt-4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        ></motion.div>
      </div>

      {/* Zigzag Divider */}
      <div className="absolute top-0 w-full h-12 bg-[#F7F9FC] transform rotate-180 clip-path-mountain"></div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-16">
        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          At <span className="text-[#34A853] font-bold">Business For The Youth</span>, our values guide every step we take. Together, we build
          impactful leaders who inspire positive change.
        </motion.p>

        {/* Values Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
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
      </div>
    </section>
  );
};

export default AboutSection3;