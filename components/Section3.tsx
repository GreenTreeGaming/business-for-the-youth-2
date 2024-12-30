"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUsers, FaLightbulb, FaHandsHelping, FaChartLine } from "react-icons/fa";

const Section3: React.FC = () => {
  type TabKey = "about" | "chapters" | "mission" | "impact";

  const tabs: Record<
    TabKey,
    { title: string; text: string[]; image: string; icon: React.ReactNode }
  > = {
    about: {
      title: "About Us",
      text: [
        "Business for the Youth is a registered 501(c)(3) organization.",
        "We engage youth in business practices through acts of service.",
        "Our programs provide young leaders with opportunities to grow and impact their communities.",
      ],
      image: "/IMG_20241018_202735_975 - Alexa Mikealson.jpg",
      icon: <FaUsers className="text-[#6cb251] text-5xl" />,
    },
    chapters: {
      title: "Our Chapters",
      text: [
        "Active chapters in cities worldwide focus on local needs.",
        "Led by passionate youth, fostering leadership and collaboration.",
        "Chapters create opportunities to lead and make a difference.",
      ],
      image: "/FOR THE.jpg",
      icon: <FaHandsHelping className="text-[#6cb251] text-5xl" />,
    },
    mission: {
      title: "Our Mission",
      text: [
        "Provide a platform for youth to develop entrepreneurial skills.",
        "Encourage collaboration on impactful projects.",
        "Build sustainable businesses addressing societal challenges.",
      ],
      image: "/1.png",
      icon: <FaLightbulb className="text-[#6cb251] text-5xl" />,
    },
    impact: {
      title: "Our Impact",
      text: [
        "Empowered youth through events, fundraising, and volunteering.",
        "Helped countless communities through leadership initiatives.",
        "Showcased success stories of impactful community efforts.",
      ],
      image: "/AD_4nXfjCj5oF6pA9USe0nEqvN5mMycDkfFK9bB_I5wD9smZIRVwF-IXUggKs6f0glQ9EK_AsKPO1DJ6elGKcaID_yFDZDtn9i-6YFtAcvmRMnVx9mAvJeEcSvfU.jpg",
      icon: <FaChartLine className="text-[#6cb251] text-5xl" />,
    },
  };

  const [activeTab, setActiveTab] = useState<TabKey>("about");

  return (
    <motion.section
      className="relative bg-[#F7F9FC] py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.h2
          className="text-5xl sm:text-6xl font-bold text-center text-[#4A4A4A] mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Discover More About Us
        </motion.h2>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(tabs).map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 py-2 sm:px-6 sm:py-3 text-md sm:text-lg font-semibold rounded-full border-2 transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#6cb251] text-white border-[#6cb251] shadow-xl"
                  : "bg-white text-[#6cb251] border-[#6cb251] hover:bg-[#6cb251] hover:text-white"
              }`}
              onClick={() => setActiveTab(tab as TabKey)}
            >
              {tabs[tab as TabKey].title}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {Object.keys(tabs).map(
              (tab) =>
                activeTab === tab && (
                  <motion.div
                    key={tab}
                    className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Image Section */}
                    <motion.div
                      className="lg:w-1/2 w-full order-2 lg:order-1"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={tabs[tab as TabKey].image}
                        alt={tabs[tab as TabKey].title}
                        className="rounded-lg w-full shadow-lg object-cover transform hover:scale-105 transition-transform duration-300"
                      />
                    </motion.div>

                    {/* Text Section */}
                    <motion.div
                      className="lg:w-1/2 w-full text-center lg:text-left order-1 lg:order-2 space-y-6"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex items-center justify-center lg:justify-start gap-4">
                        {tabs[tab as TabKey].icon}
                        <h3 className="text-3xl sm:text-4xl font-bold text-[#6cb251]">
                          {tabs[tab as TabKey].title}
                        </h3>
                      </div>
                      <ul className="list-disc list-inside text-lg sm:text-xl text-[#4A4A4A] space-y-2">
                        {tabs[tab as TabKey].text.map((point, index) => (
                          <li key={index} className="relative">
                            {point}
                          </li>
                        ))}
                      </ul>
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