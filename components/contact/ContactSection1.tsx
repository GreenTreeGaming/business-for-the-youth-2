"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection1: React.FC = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    formData.append("access_key", "b6aa3a84-e281-4b91-a1a0-5050a0c00984"); // Replace with your Web3Forms key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        form.reset();
      } else {
        console.error("Error:", data);
        setResult("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="bg-[#F7F9FC]">
      {/* Decorative Header Section */}
      <div className="bg-gradient-to-r from-[#faf0f6] via-[#bfedff] to-[#d9eabd] pt-32 pb-16 text-center w-full relative">
        <motion.h2
          className="text-5xl sm:text-6xl font-bold text-[#4A4A4A]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
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

      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white p-6 sm:p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#6cb251] mb-6">Get in Touch</h3>
            <form onSubmit={onSubmit} className="space-y-6">
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
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6cb251]"
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
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6cb251]"
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
                  name="message"
                  required
                  rows={4}
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6cb251]"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-[#6cb251] text-white font-semibold rounded-lg px-6 py-3 transition-all duration-300 hover:bg-green-600 shadow-lg"
              >
                Send Message
              </motion.button>
            </form>
            <p className="text-center text-sm text-gray-600 mt-4">{result}</p>
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
              <span className="text-xl font-semibold text-[#6cb251]">Email:</span>
              <a
                href="mailto:contact@businessfortheyouth.org"
                className="text-lg text-gray-800 underline hover:text-green-600 transition duration-300"
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