"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 my-16">

    
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-white mb-4"
      >
        About Us
      </motion.h2>

    
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center text-slate-300 max-w-3xl mx-auto mb-10"
      >
        We are building a modern digital library platform that helps readers
        explore, borrow, and enjoy books easily. Our mission is to make reading
        accessible, fast, and enjoyable for everyone.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

        {[
          {
            title: "Our Mission",
            desc: "Make reading simple and accessible for everyone."
          },
          {
            title: "Our Vision",
            desc: "Build the largest online library experience."
          },
          {
            title: "Our Goal",
            desc: "Connect readers with thousands of books easily."
          }
        ].map((item, i) => (
          
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-slate-900/80 shadow-md shadow-blue-950/30 rounded-xl hover:shadow-2xl hover:shadow-blue-950/50 border border-blue-400/20 transition"
          >
            <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
            <p className="text-slate-300 text-sm">{item.desc}</p>
          </motion.div>

        ))}

      </div>
    </div>
  );
};

export default AboutUs;
