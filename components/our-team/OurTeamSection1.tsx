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
    <section className="bg-[#F7F9FC] py-20">
      {/* Decorative Header Section */}
      <div className="bg-[#34A853] py-16 text-center w-full">
        <motion.h2
          className="text-5xl sm:text-6xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Team
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-[#FBB040] mx-auto mt-4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        ></motion.div>
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
                <h3 className="text-2xl font-bold text-[#34A853]">{member.name}</h3>
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