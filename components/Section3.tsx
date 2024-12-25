"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Section3: React.FC = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = {
    about: {
      title: "About Us",
      text: "Business for the Youth is a registered 501(c)(3) working towards engaging the youth in business practices through acts of service. BFTY believes that teaching and engaging the youth in business through service will not only prepare them for the real world but also make them leaders in their communities. Through our global events, fundraising, volunteerism, and chapters, BFTY advocates for youth business engagement through service.",
      image: "/IMG_20241018_202735_975 - Alexa Mikealson.jpg",
    },
    chapters: {
      title: "Our Chapters",
      text: "We have active chapters in cities worldwide, each focusing on local needs while maintaining a global perspective. Our chapters provide mentorship, networking opportunities, and resources for young entrepreneurs.",
      image: "/FOR THE.jpg",
    },
    mission: {
      title: "Our Mission",
      text: "Our mission is to provide a platform for youth to develop entrepreneurial skills, collaborate on impactful projects, and build sustainable businesses that address critical challenges.",
      image: "/1.png",
    },
  };

  return (
    <motion.section
      className="relative bg-[#F7F9FC] py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <motion.h2
          className="text-5xl sm:text-6xl font-bold text-center text-[#34A853] mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Discover More About Us
        </motion.h2>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-6 mb-16">
          {Object.keys(tabs).map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 text-lg font-semibold rounded-lg border-2 transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#34A853] text-white border-[#34A853]"
                  : "bg-white text-[#34A853] border-[#34A853] hover:bg-[#34A853] hover:text-white"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tabs[tab].title}
            </motion.button>
          ))}
        </div>

        {/* Content Area */}
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
                    {/* Text Content */}
                    <motion.div
                      className="md:w-1/2 text-center md:text-left px-6 sm:px-8"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-3xl sm:text-4xl font-bold text-[#34A853] mb-6">
                        {tabs[tab].title}
                      </h3>
                      <p className="text-lg sm:text-xl text-[#4A4A4A]">
                        {tabs[tab].text}
                      </p>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                      className="relative md:w-1/2"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={tabs[tab].image}
                        alt={tabs[tab].title}
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