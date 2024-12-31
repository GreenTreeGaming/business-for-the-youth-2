"use client";

import React from "react";
import { motion } from "framer-motion";

const Section2: React.FC = () => {
  // Example array of logos with URLs
  const logos = [
    { src: "/press1.png", link: "https://www.swconnector.com/stories/business-for-the-youth,81877" },
    { src: "/press2.jpg", link: "https://tcbmag.com/a-minneapolis-teens-business-club-goes-global/" },
    { src: "/press3.png", link: "https://voyageminnesota.com/?post_type=interview&p=125379" },
    { src: "/press4.png", link: "https://www.southwestvoices.news/posts/teen-starts-non-profit-based-on-acts-of-service" },
    { src: "/press5.png", link: "https://swhsnavigator.com/2964/features/business-club-has-heart/" },
  ];

  // Animation variants for logos
  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gradient-to-r from-[#faf0f6] via-[#bfedff] to-[#d9eabd] py-16 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Featured On Header */}
        <motion.h3
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Featured On
        </motion.h3>

        {/* Logos Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-8 justify-center items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              variants={logoVariants}
            >
              <a href={logo.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={logo.src}
                  alt={`Press logo ${index + 1}`}
                  className="h-14 sm:h-16 md:h-20 lg:h-24 object-contain"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;