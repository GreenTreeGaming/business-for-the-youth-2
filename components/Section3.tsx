"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Section3: React.FC = () => {
  // Define a union type for valid tab keys
  type TabKey = "about" | "chapters" | "mission";

  // Explicitly type the tabs object
  const tabs: Record<TabKey, { title: string; text: string; image: string }> = {
    about: {
      title: "About Us",
      text: "Business for the Youth is a registered 501(c)(3) working towards engaging the youth in business practices through acts of service...",
      image: "/IMG_20241018_202735_975 - Alexa Mikealson.jpg",
    },
    chapters: {
      title: "Our Chapters",
      text: "We have active chapters in cities worldwide, each focusing on local needs while maintaining a global perspective...",
      image: "/FOR THE.jpg",
    },
    mission: {
      title: "Our Mission",
      text: "Our mission is to provide a platform for youth to develop entrepreneurial skills...",
      image: "/1.png",
    },
  };

  // Use the defined TabKey type for state
  const [activeTab, setActiveTab] = useState<TabKey>("about");

  return (
    <motion.section
      className="relative bg-gray-50 py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        <motion.h2
          className="text-5xl sm:text-6xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Discover More About Us
        </motion.h2>

        <div className="flex justify-center gap-6 mb-16">
          {Object.keys(tabs).map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 text-lg font-semibold rounded-lg border-2 transition-all duration-300 ${
                activeTab === tab
                  ? "bg-customGreen text-white border-customGreen"
                  : "bg-white text-customGreen border-customGreen hover:bg-customGreen hover:text-white"
              }`}
              onClick={() => setActiveTab(tab as TabKey)} // Cast tab as TabKey
            >
              {tabs[tab as TabKey].title} {/* Cast tab as TabKey */}
            </motion.button>
          ))}
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {Object.keys(tabs).map(
              (tab) =>
                activeTab === tab && (
                  <motion.div
                    key={tab}
                    className="flex flex-col md:flex-row items-center gap-12 lg:gap-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="md:w-1/2 text-center md:text-left px-6 sm:px-8"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                        {tabs[tab as TabKey].title}
                      </h3>
                      <p className="text-lg sm:text-xl text-gray-600">
                        {tabs[tab as TabKey].text}
                      </p>
                    </motion.div>

                    <motion.div
                      className="relative md:w-1/2"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={tabs[tab as TabKey].image}
                        alt={tabs[tab as TabKey].title}
                        className="rounded-xl w-full"
                      />
                    </motion.div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default Section3;