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
    <section className="relative bg-[#F7F9FC] py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Header */}
        <motion.h2
          className="text-5xl sm:text-6xl font-bold text-[#4A4A4A] mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Values
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl text-[#4A4A4A] max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          At <span className="font-bold text-[#34A853]">Business For The Youth</span>, our values inspire everything we do. They guide us in empowering young leaders and building a brighter future.
        </motion.p>

        {/* Values Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:scale-105 transition-transform duration-300 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Icon with Background */}
              <div
                className={`p-6 rounded-full mb-6 flex items-center justify-center shadow-md mx-auto ${value.bg}`}
              >
                {value.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#4A4A4A] mb-4">{value.title}</h3>
              <p className="text-[#4A4A4A]">{value.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection3;