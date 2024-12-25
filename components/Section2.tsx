"use client";

import React from "react";
import { motion } from "framer-motion";

const Section2: React.FC = () => {
  // Example array of logo URLs (replace with your actual logo URLs)
  const logos = [
    "/press1.png",
    "/press2.jpg",
    "/press3.png",
    "/press4.png",
    "/press5.png",
  ];

  // Animation variants for logos
  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gray-50 py-16 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-12 lg:gap-16 mt-8 overflow-x-auto">
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
              <img
                src={logo}
                alt={`Company logo ${index + 1}`}
                className="h-14 sm:h-16 md:h-20 lg:h-24 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;