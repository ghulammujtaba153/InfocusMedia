import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-white py-10 flex flex-col items-center gap-2">
      {/* Top Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-6 gap-6">
        {/* Logo */}
        <img
          src="/logo-black.png"
          alt="Infocus Media Logo"
          className="w-[250px] h-auto object-contain"
        />

        {/* Contact Info */}
        <div className="text-center md:text-right">
          <p className="text-gray-800 text-sm">+970 000 000</p>
          <p className=" text-sm">contact@infocusmedia.ae</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-6 gap-4">
        {/* Legal Links */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-800">
          <p>© InfocusMedia. All rights reserved</p>
          <p className="cursor-pointer hover:underline">Terms & Conditions</p>
          <p className="cursor-pointer hover:underline">Privacy Policy</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-gray-800">
          <a href="#" aria-label="Facebook" className="hover:text-black">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-black">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-black">
            <FaInstagram />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-black">
            <FaLinkedinIn />
          </a>
          <a href="#" aria-label="TikTok" className="hover:text-black">
            <FaTiktok />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-black">
            <FaYoutube />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
