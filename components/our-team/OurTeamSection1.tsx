"use client";

import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "Sam Vahhaji", role: "President", image: "/President.avif" },
  { name: "Shivani Patel", role: "Vice President", image: "/Vice.avif" },
  { name: "Madeline Gray", role: "Chapter Coordinator", image: "/ChapterC.avif" },
  { name: "Evalie Hedrick", role: "Volunteer Coordinator", image: "/VolunteerC.avif" },
  { name: "Elika Vahhaji", role: "Volunteer Coordinator", image: "/VolunteerC2.avif" },
  { name: "Annika Midness", role: "Chapter Coordinator", image: "/ChapterC2.avif" },
  { name: "Maddie Thompson", role: "Chapter Coordinator", image: "/ChapterC3.avif" },
];

const OurTeamSection1: React.FC = () => {
  return (
    <section className="bg-[#F7F9FC] pb-20">
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
          Meet Our Team
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

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="w-full h-72 flex items-center justify-center bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-auto h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#6cb251]">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeamSection1;