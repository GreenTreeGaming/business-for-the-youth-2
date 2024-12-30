"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaTools, FaGlobe } from "react-icons/fa";

const ChapterSection1: React.FC = () => {
  const reasons = [
    {
      title: "Empower Your Community",
      text: "Create opportunities for youth in your community to lead, innovate, and collaborate on meaningful projects.",
      icon: <FaUsers className="text-4xl text-[#6cb251]" />,
    },
    {
      title: "Access Exclusive Resources",
      text: "Gain access to mentorship, training, and materials that will help your chapter thrive.",
      icon: <FaTools className="text-4xl text-[#6cb251]" />,
    },
    {
      title: "Join a Global Network",
      text: "Be part of a worldwide movement of young leaders making an impact through business and service.",
      icon: <FaGlobe className="text-4xl text-[#6cb251]" />,
    },
  ];

  return (
    <section className="bg-white">
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
          Start A Chapter
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

      {/* Reasons Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="mb-6 flex justify-center">{reason.icon}</div>
              <h3 className="text-2xl font-bold text-[#6cb251] mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-700">{reason.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdn09v2KQ7lyNZ6ZpQTfQ-WQVq5PLJJzmAmpTQrjZj1iyd6XA/viewform" // Replace with the actual form link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 text-xl font-semibold rounded-xl bg-gradient-to-r from-[#6cb251] to-[#34A853] text-white transition-all duration-300 hover:from-[#34A853] hover:to-[#6cb251] shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <FaUsers className="mr-4 text-3xl" /> Apply Now
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ChapterSection1;