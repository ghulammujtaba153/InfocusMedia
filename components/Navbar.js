"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";
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
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const textRef = useRef(null);

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
            className="fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center gap-6 text-4xl z-40"
          >
            {menuItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`transition-colors duration-200 ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "text-white/30"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between transition-all`}>
        {/* Logo */}
        <div
          className={`w-[220px] transition-colors duration-300 ${
            menuOpen ? "text-white" : "text-gray-800"
          }`}
        >
          
            <img
              src={menuOpen ? "logo.png":"/logo-black.png"}
              alt="Infocus Media Logo"
              className="w-[250px] h-auto object-contain"
            />
            
        
        </div>

        {/* Icons */}
        <div className="flex items-center justify-center gap-4">
          <button className="p-2 rounded-lg transition cursor-pointer">
            <img
              src="/assets/icons/message.svg"
              alt="Messages"
              className={`w-4 h-4 transition-all duration-300 ${
                menuOpen ? "invert" : ""
              }`}
            />
          </button>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`p-2 transition cursor-pointer ${menuOpen? "bg-black" : "bg-gray-100"}`}
          >
            <img
              src={
                menuOpen
                  ? "/assets/icons/cross.svg"
                  : "/assets/icons/menu.svg"
              }
              alt="Menu Toggle"
              className={`w-4 h-4 transition-all duration-300 ${
                menuOpen ? "invert" : ""
              }`}
            />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
