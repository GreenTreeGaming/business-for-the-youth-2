"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaUsers } from "react-icons/fa";

const ChapterSection2: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.h2
          className="text-5xl sm:text-6xl font-bold text-[#34A853] mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What is a Chapter?
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-[#FBB040] mx-auto mb-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        ></motion.div>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A chapter is your opportunity to build a local community of empowered
          youth who are passionate about creating change through business and
          service. As a chapter leader, you’ll connect like-minded individuals,
          spearhead impactful initiatives, and foster growth and innovation in
          your community.
        </motion.p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {[
            {
              icon: <FaUsers className="text-5xl text-[#34A853]" />,
              title: "Build a Community",
              text: "Create a network of youth who are eager to collaborate and innovate.",
            },
            {
              icon: <FaBookOpen className="text-5xl text-[#34A853]" />,
              title: "Access Resources",
              text: "Gain exclusive tools, guides, and mentorship to lead your chapter effectively.",
            },
            {
              icon: <FaUsers className="text-5xl text-[#34A853]" />,
              title: "Make an Impact",
              text: "Drive meaningful change and contribute to underrepresented communities.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex justify-center items-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#34A853] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="https://docs.google.com/document/d/16mk8neqcwXRReGUw5tT3N6TQbWcCiAdyr7VRXAbmhYI/edit?tab=t.0#heading=h.cexdtw7o269v"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#FBB040] text-black font-semibold rounded-lg transition-all duration-300 hover:bg-[#FFC857] shadow-lg text-lg inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBookOpen className="mr-3 text-2xl" />
            Chapter Starter Guide
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ChapterSection2;