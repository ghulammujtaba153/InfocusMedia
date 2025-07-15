"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TransformGlobe = () => {
  const videoRef = useRef(null);
    const sectionRef = useRef(null);
  
    useEffect(() => {
      const video = videoRef.current;
      const section = sectionRef.current;
      if (!video || !section) return;
  
      video.pause();
  
      const handleScroll = () => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = rect.height;
  
        const sectionBottom = rect.bottom - sectionHeight / 2;
  
        // Animation progress: 0 when section just enters, 1 when it reaches center
        const scrollProgress = 1 - sectionBottom / windowHeight;
  
        console.log("scrollProgress", scrollProgress);
        const clampedProgress = Math.min(Math.max(scrollProgress, 0), 1);
        const easedProgress = Math.pow(clampedProgress, 0.6);
  
        const minTime = 0;
        const maxTime = 5;
        video.currentTime = minTime + easedProgress * (maxTime - minTime);
      };
  
      window.addEventListener("scroll", handleScroll);
      handleScroll();
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    
      <section
        ref={sectionRef}
        className="relative h-screen bg-white overflow-hidden"
        style={{ zIndex: 1 }}
      >
        {/* Video background */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/Blob2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 opacity-100">
          <p className="md:text-[18px] text-[16px] lg:text-[22px] font-bold uppercase text-black text-center mb-4">
            WE don’t see brands, we see possibilities
          </p>

          <div className="flex flex-col leading-[.95]">
            <h1 className="text-[40px] md:text-[65px] lg:text-[100px] font-bold text-black text-center mb-2">
              We transform ideas
            </h1>
            <h1 className="text-[40px] md:text-[65px] lg:text-[100px] font-bold text-black text-center">
              into visual stories
            </h1>
          </div>

          <p className="md:text-[18px] text-[16px] lg:text-[22px] font-bold uppercase text-black text-center mt-4">
            and we know what your brand needs
          </p>
        </div>
      </section>
    
  );
};

export default TransformGlobe;
