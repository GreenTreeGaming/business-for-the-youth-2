"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBusinessTime, FaUsers, FaHandsHelping, FaClock } from "react-icons/fa";

const ChapterSection3: React.FC = () => {
  const benefits = [
    {
      icon: <FaBusinessTime className="text-5xl text-[#6cb251]" />,
      title: "Teach Business Skills",
      text: "Empower youth to learn the practicalities of running a business, preparing them for the real world.",
    },
    {
      icon: <FaUsers className="text-5xl text-[#6cb251]" />,
      title: "Develop Leadership",
      text: "Enhance leadership skills and provide opportunities to lead impactful initiatives.",
    },
    {
      icon: <FaHandsHelping className="text-5xl text-[#6cb251]" />,
      title: "Support Communities",
      text: "Assist underrepresented groups through business practices and meaningful service.",
    },
    {
      icon: <FaClock className="text-5xl text-[#6cb251]" />,
      title: "Earn Volunteer Hours",
      text: "Gain numerous volunteer hours while making a tangible impact in your community.",
    },
  ];

  const roles = [
    {
      title: "President(s)",
      text: "Responsible for strategic planning, managing all positions, overseeing activities, and providing monthly updates to the BFTY team.",
    },
    {
      title: "Communications",
      text: "Maintains communication with the BFTY team, tracks member participation, event updates, and shares meeting photos and attendance reports.",
    },
    {
      title: "Treasurer",
      text: "Oversees the budget, manages funds, transactions, and fundraising records, and reports financial updates to the BFTY team.",
    },
    {
      title: "Other Positions",
      text: "We recommend adding roles like social media managers, event managers, secretaries, and more to best fit your chapter's needs.",
    },
  ];

  return (
    <section className="bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.h2
          className="text-5xl sm:text-6xl font-bold text-[#6cb251] text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Start a Chapter?
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-gray-400 mx-auto mb-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        ></motion.div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex justify-center items-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-[#6cb251] mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-700">{benefit.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Leadership Roles Section */}
      <div className="bg-[#f8f4ec] py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.h3
            className="text-4xl sm:text-5xl font-bold text-[#6cb251] text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Leadership Roles
          </motion.h3>
          <motion.div
            className="w-24 h-1 bg-gray-400 mx-auto mb-12"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
          ></motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <h4 className="text-2xl font-bold text-[#6cb251] mb-4">
                  {role.title}
                </h4>
                <p className="text-gray-700">{role.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChapterSection3;