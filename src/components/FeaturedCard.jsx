"use client";

import React from "react";
import { motion } from "framer-motion";

const FeatureCard = () => {
  const features = [
    {
      title: "Easy Borrowing",
      desc: [
        "Borrow books instantly",
        "No complicated steps",
        "One-click access system"
      ]
    },
    {
      title: "Huge Collection",
      desc: [
        "Thousands of books",
        "All categories available",
        "Updated daily library"
      ]
    },
    {
      title: "Fast Access",
      desc: [
        "Quick loading system",
        "Optimized performance",
        "Smooth user experience"
      ]
    },
    {
      title: "Smart System",
      desc: [
        "AI-based suggestions",
        "Personalized books",
        "Better reading experience"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 my-16">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-10 text-white"
      >
        Our Features
      </motion.h2>

      {/* DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center text-slate-300 max-w-2xl mx-auto mb-10"
      >
        Explore powerful features designed to make your reading experience smooth,
        fast, and enjoyable. Everything you need is in one place.
      </motion.p>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.07, y: -10, rotate: 1 }}
            className="group bg-slate-900/80 rounded-xl p-6 shadow-md shadow-blue-950/30 border border-blue-400/20
            hover:shadow-2xl hover:shadow-blue-950/50 transition-all duration-500"
          >

            {/* TITLE */}
            <h3 className="text-lg font-bold mb-3 text-white group-hover:text-blue-300 transition">
              {item.title}
            </h3>

            {/* DESC */}
            <ul className="space-y-1 text-sm text-slate-300">
              {item.desc.map((d, i) => (
                <li key={i} className="group-hover:text-blue-100 transition">
                  • {d}
                </li>
              ))}
            </ul>

          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default FeatureCard;
