"use client";

import React, { useEffect, useRef } from "react";

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

      const isVisible = rect.top <= windowHeight && rect.bottom >= 0;

      if (!isVisible) {
        video.currentTime = 0;
        return;
      }

      const scrollProgress = 1 - rect.top / windowHeight;
      const clampedProgress = Math.min(Math.max(scrollProgress, 0), 1);

      const minTime = 0;
      const maxTime = 4;
      video.currentTime = minTime + clampedProgress * (maxTime - minTime);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-white py-20 overflow-hidden"
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
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 transition-opacity duration-300 opacity-100">
        <p className="md:text-[18px] text-[16px] lg:text-[22px] font-bold uppercase text-black text-center mb-4 uppercase">
          WE donot see brands, we see possiblities
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
