"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactSection1: React.FC = () => {
  return (
    <section className="bg-[#F7F9FC]">
      {/* Decorative Header Section */}
      <div className="bg-[#34A853] py-16 text-center w-full">
        <motion.h2
          className="text-5xl sm:text-6xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-[#FBB040] mx-auto mt-4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        ></motion.div>
      </div>

      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-[#34A853] mb-6">Get in Touch</h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#34A853]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#34A853]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#34A853]"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-[#FBB040] text-black font-semibold rounded-lg px-6 py-3 transition-all duration-300 hover:bg-[#FFC857] shadow-lg"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info and Images */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Have questions or need more information? Reach out to us, and our
              team will get back to you promptly!
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xl font-semibold text-[#34A853]">Email:</span>
              <a
                href="mailto:contact@businessfortheyouth.org"
                className="text-lg text-gray-800 underline hover:text-[#FBB040] transition duration-300"
              >
                contact@businessfortheyouth.org
              </a>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/IMG_5384 - Aahana Shah.jpeg"
                alt="Contact Us"
                className="w-full h-60 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection1;