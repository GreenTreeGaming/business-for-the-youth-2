"use client";

import React, { useState } from "react";
import { locations } from "@/data"; // Adjust the import path as needed
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const AboutSection4: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"schoolChapters" | "regionalChapters">(
    "schoolChapters"
  );

  return (
    <section className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.h2
          className="text-5xl sm:text-6xl font-bold text-center text-[#4A4A4A] mb-12 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Locations
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Descriptive Section */}
          <motion.div
            className="flex flex-col justify-center items-center bg-[#6cb251] text-white rounded-lg p-8 transition-transform duration-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
              Our Global Presence
              <FaMapMarkerAlt className="text-white text-4xl" />
            </h3>
            <p className="text-lg text-center mb-6">
              With chapters spanning schools and regions worldwide, we empower youth to lead
              with innovation and make meaningful contributions to their communities.
            </p>
            <img
              src="/IMG_20241018_202735_975 - Alexa Mikealson.jpg" // Replace with a relevant image path
              alt="Global Presence"
              className="w-3/4 rounded-lg shadow-md"
            />
          </motion.div>

          {/* Locations List Section */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tabs for Chapters */}
            <div className="flex justify-center lg:justify-start gap-4 mb-8">
              <button
                onClick={() => setActiveTab("schoolChapters")}
                className={`px-6 py-3 font-semibold rounded-lg border-2 transition-all duration-300 ${
                  activeTab === "schoolChapters"
                    ? "bg-[#6cb251] text-white border-[#6cb251]"
                    : "bg-white text-[#6cb251] border-[#6cb251] hover:bg-[#6cb251] hover:text-white"
                }`}
              >
                School Chapters
              </button>
              <button
                onClick={() => setActiveTab("regionalChapters")}
                className={`px-6 py-3 font-semibold rounded-lg border-2 transition-all duration-300 ${
                  activeTab === "regionalChapters"
                    ? "bg-[#6cb251] text-white border-[#6cb251]"
                    : "bg-white text-[#6cb251] border-[#6cb251] hover:bg-[#6cb251] hover:text-white"
                }`}
              >
                Regional Chapters
              </button>
            </div>

            {/* Dynamic List of Locations */}
            <div className="overflow-y-auto h-96 bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-[#4A4A4A] mb-4 flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#6cb251]" />
                {activeTab === "schoolChapters" ? "School Chapters" : "Regional Chapters"}
              </h3>
              <ul className="space-y-4">
                {locations[activeTab].map((location, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 text-lg text-[#4A4A4A]"
                  >
                    <FaMapMarkerAlt className="text-[#6cb251]" />
                    <div>
                      <span className="font-semibold text-[#6cb251]">
                        {location.name}
                      </span>{" "}
                      - {location.location}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Embedded Google Map */}
            <div className="mt-8">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/d/u/0/embed?mid=1hQUDVdhFy0Hz9DI1qtZ5k2jaVh6ZprI&ehbc=2E312F&noprof=1"
                width="100%"
                height="400px"
                className="rounded-lg border-2 border-gray-300 shadow-lg"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection4;