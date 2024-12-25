"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Section5: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"schoolChapters" | "regionalChapters">(
    "schoolChapters"
  );

  return (
    <motion.section
      className="bg-[#F7F9FC] py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
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
          Start a Chapter
        </motion.h2>

        {/* Description Section */}
        <div className="mb-12 text-center">
          <p className="text-lg sm:text-xl text-[#4A4A4A] max-w-3xl mx-auto">
            Bring our mission to your community by starting a chapter of
            Business for the Youth. Together, we empower young leaders to drive
            innovation and positive change worldwide.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 font-semibold bg-[#34A853] text-white rounded-lg hover:bg-[#FBB040] hover:text-[#4A4A4A] transition-all"
          >
            Learn More
          </motion.button>
        </div>

        {/* Replaced Locations Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-lg p-6 text-center border-2 border-[#34A853]">
            <h4 className="text-2xl font-bold text-[#34A853] mb-4">Expand the Impact</h4>
            <p className="text-lg text-[#4A4A4A]">
              Collaborate with local schools and community organizations to
              inspire and empower youth in your area.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center border-2 border-[#34A853]">
            <h4 className="text-2xl font-bold text-[#34A853] mb-4">Lead with Purpose</h4>
            <p className="text-lg text-[#4A4A4A]">
              Establish a network of driven individuals and create opportunities
              for meaningful impact.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center border-2 border-[#34A853]">
            <h4 className="text-2xl font-bold text-[#34A853] mb-4">Support Global Goals</h4>
            <p className="text-lg text-[#4A4A4A]">
              Align your chapter's efforts with our global mission to foster
              innovation and sustainable development.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Section5;