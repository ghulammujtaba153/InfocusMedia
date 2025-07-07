import Link from "next/link";
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
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between px-6 gap-6">
        {/* Logo */}
        <img
          src="/logo-black.png"
          alt="Infocus Media Logo"
          className="md:w-[560px] w-full h-auto object-contain"
        />

        {/* Contact Info */}
        <div className="text-left md:text-right">
          <p className="font-bold  text-[16px] md:text-[18px] lg:text-[22px]">+970 00 000 0000</p>
          <p className="font-bold uppercase text-[16px] md:text-[18px] lg:text-[22px]">contact@infocusmedia.ae</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col flex-col-reverse  lg:flex-row items-center justify-between px-6 gap-4">
        {/* Legal Links */}
        <div className="flex md:flex-row flex-col w-full  md:justify-center justify-between items-center lg:items-center gap-6 text-sm text-black">
          
          <div className="flex lg:flex-row flex-col gap-2 w-full">
            <p className="uppercase text-[14px] md:text-[14px] lg:text-[16px]">©2025 InfocusMedia.</p>
            <p className="uppercase text-[14px] md:text-[14px] lg:text-[16px]">All rights reserved</p>

          </div>
          

          <div className="flex w-full lg:flex-row md:text-right flex-col gap-2">
            <p className="cursor-pointer text-[14px] md:text-[14px] lg:text-[16px] hover:underline uppercase">Terms & Conditions</p>
            <p className="cursor-pointer text-[14px] md:text-[14px] lg:text-[16px] hover:underline uppercase">Privacy Policy</p>
          </div>

        </div>

        {/* Social Icons */}
        <div className="flex w-full  justify-between md:justify-between lg:justify-end text-right items-center gap-8 text-gray-800">
          <Link href="#" aria-label="Facebook" className="hover:text-black">
            <img src="/socialIcons/facebook.png" alt="Facebook" className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]" />
          </Link>
          <Link href="#" aria-label="Facebook" className="hover:text-black">
            <img src="/socialIcons/X.png" alt="Facebook" className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]" />
          </Link>
          <Link href="#" aria-label="Facebook" className="hover:text-black">
            <img src="/socialIcons/linkedin.png" alt="Facebook" className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]" />
          </Link>
          <Link href="#" aria-label="Facebook" className="hover:text-black">
            <img src="/socialIcons/instagram.png" alt="Facebook" className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]" />
          </Link>
          <Link href="#" aria-label="Facebook" className="hover:text-black">
            <img src="/socialIcons/tt.png" alt="Facebook" className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]" />
          </Link>
          <Link href="#" aria-label="Facebook" className="hover:text-black">
            <img src="/socialIcons/vimo.png" alt="Facebook" className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]" />
          </Link>
          <Link href="#" aria-label="Facebook" className="hover:text-black">
            <img src="/socialIcons/utube.png" alt="Facebook" className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]" />
          </Link>

          
        </div>
      </div>
    </section>
  );
};

export default Footer;
