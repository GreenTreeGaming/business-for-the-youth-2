"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Section3: React.FC = () => {
  type TabKey = "about" | "chapters" | "mission" | "impact";

  const tabs: Record<
    TabKey,
    { title: string; text: string; image: string; additionalInfo?: string }
  > = {
    about: {
      title: "About Us",
      text: "Business for the Youth is a registered 501(c)(3) working towards engaging the youth in business practices through acts of service. Our programs provide young leaders with opportunities to grow and impact their communities through business solutions and volunteerism.",
      image: "/IMG_20241018_202735_975 - Alexa Mikealson.jpg",
      additionalInfo:
        "Learn more about our story, values, and the mission that drives us forward.",
    },
    chapters: {
      title: "Our Chapters",
      text: "We have active chapters in cities worldwide, focusing on local needs while maintaining a global perspective. These chapters are led by passionate youth, fostering leadership, innovation, and collaboration in their communities.",
      image: "/FOR THE.jpg",
      additionalInfo:
        "Discover how our chapters create opportunities for youth to lead and make a difference.",
    },
    mission: {
      title: "Our Mission",
      text: "Our mission is to provide a platform for youth to develop entrepreneurial skills, collaborate on impactful projects, and build sustainable businesses that address critical challenges in society.",
      image: "/1.png",
      additionalInfo:
        "Join us in shaping a brighter future through meaningful initiatives and leadership.",
    },
    impact: {
      title: "Our Impact",
      text: "Through numerous events, fundraising initiatives, and volunteer programs, we've empowered countless youth to step up as leaders and make tangible impacts in their communities.",
      image: "/AD_4nXfjCj5oF6pA9USe0nEqvN5mMycDkfFK9bB_I5wD9smZIRVwF-IXUggKs6f0glQ9EK_AsKPO1DJ6elGKcaID_yFDZDtn9i-6YFtAcvmRMnVx9mAvJeEcSvfU.jpg",
      additionalInfo:
        "Explore the stories of the lives we’ve changed and the communities we’ve impacted.",
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
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
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
                    className="flex flex-col md:flex-row items-center gap-12 lg:gap-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Text Section */}
                    <motion.div
                      className="md:w-1/2 text-center md:text-left px-6 sm:px-8"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-3xl sm:text-4xl font-bold text-[#4A4A4A] mb-6">
                        {tabs[tab as TabKey].title}
                      </h3>
                      <p className="text-lg sm:text-xl text-[#4A4A4A] mb-4">
                        {tabs[tab as TabKey].text}
                      </p>
                      {tabs[tab as TabKey].additionalInfo && (
                        <p className="text-md text-[#4A4A4A] italic">
                          {tabs[tab as TabKey].additionalInfo}
                        </p>
                      )}
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                      className="relative md:w-1/2"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={tabs[tab as TabKey].image}
                        alt={tabs[tab as TabKey].title}
                        className="rounded-xl w-full object-cover"
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