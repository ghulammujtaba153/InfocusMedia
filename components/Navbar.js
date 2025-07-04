"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "HOME", href: "/" },
  { name: "OUR STORY", href: "/story" },
  { name: "CLIENTS", href: "/clients" },
  { name: "WHAT WE DO", href: "/what-we-do" },
  { name: "CASE STUDIES", href: "/case-studies" },
  { name: "WORK", href: "/work" },
  { name: "CAREERS", href: "/careers" },
  { name: "TEAM", href: "/team" },
  { name: "CONTACTS", href: "/contacts" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const bgIsDark = entry.intersectionRatio < 1; // Navbar is over a dark section
        setIsDarkBackground(bgIsDark);
      },
      { threshold: [1] }
    );

    if (navRef.current) {
      observer.observe(navRef.current);
    }

    return () => {
      if (navRef.current) {
        observer.unobserve(navRef.current);
      }
    };
  }, []);

  const iconColor = menuOpen || isDarkBackground ? "white" : "black";
  const bgColor = menuOpen ? "bg-black" : "bg-gray-100";

  return (
    <>
      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center gap-2 text-2xl sm:text-3xl md:text-5xl font-bold z-40"
          >
            {menuItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-white hover:text-gray-300`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between transition-all"
      >
        <div className="w-[220px] transition-colors duration-300">
          <Link href={"/"}>
            <img
              src={isDarkBackground ? "/logo.png" : "/logo-black.png"}
              alt="Infocus Media Logo"
              className="sm:w-[250px] w-[180px] h-auto object-contain"
            />
          </Link>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button className={`p-2 rounded-sm transition cursor-pointer ${bgColor}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 3H3V16H6.6V21L12.45 16.7368H21V3Z"
                stroke={iconColor}
                strokeWidth="2"
              />
            </svg>
          </button>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`p-2 rounded-sm transition cursor-pointer ${bgColor}`}
          >
            
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <line y1="4" x2="24" y2="4" stroke={iconColor} strokeWidth="3" />
                <line y1="12" x2="24" y2="12" stroke={iconColor} strokeWidth="3" />
                <line y1="20" x2="24" y2="20" stroke={iconColor} strokeWidth="3" />
              </svg>
            
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
