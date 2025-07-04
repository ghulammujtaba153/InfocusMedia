"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CaseStudies from "../CaseStudies";

const SheikhCaseStudiesContainer = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ["design", "imagine"];

  useEffect(() => {
    const currentWordText = words[currentWord];

    if (!isDeleting) {
      if (displayText.length < currentWordText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentWordText.slice(0, displayText.length + 1));
        }, 150);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentWord((prev) => (prev + 1) % words.length);
      }
    }
  }, [displayText, isDeleting, currentWord, words]);

  return (
    <section className="relative bg-white">
      {/* Sticky Portrait & Quote */}
      <div className="sticky top-0 h-screen bg-white flex flex-col lg:flex-row items-center justify-center px-6">
        <div className="w-full lg:w-1/2">
          <img
            src="/assets/portrait.png"
            alt="Portrait"
            className="max-w-xl w-full object-contain"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left text-black font-bandeins-strange">
          <p className="text-green-500 text-5xl">"</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">The future</h1>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">belongs to those</h1>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            who can <span className="text-green-500">{displayText}</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-green-500"
            >
              |
            </motion.span>
          </h1>
          <p className="font-bold text-base">– H.H. Sheikh Mohammed bin Rashid Al Maktoum</p>
        </div>
      </div>

      {/* Scrolling Case Studies */}
      <div className="relative bg-white z-20">
        <div className="container mx-auto px-6 py-20">
          <CaseStudies />
        </div>
      </div>
    </section>
  );
};

export default SheikhCaseStudiesContainer;
