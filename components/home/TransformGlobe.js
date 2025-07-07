"use client";

import React, { useEffect, useRef, useState } from "react";

const TransformGlobe = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [showStartText, setShowStartText] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Scroll progress from 0 (section top at viewport top) to 1 (section bottom at viewport top)
      let scrollProgress = Math.min(Math.max(0, 1 - rect.top / windowHeight), 1);

      // Reverse progress for reverse playback
      scrollProgress = 1 - scrollProgress;

      const videoDuration = video.duration || 7;
      video.currentTime = scrollProgress * videoDuration;

      // Example: toggle text visibility at 50% scroll
      if (scrollProgress > 0.5) {
        setShowStartText(false);
      } else {
        setShowStartText(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
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
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center z-20 transition-opacity duration-300 ${
          showStartText ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="md:text-[18px] text-[16px] lg:text-[22px] font-bold uppercase font-bandeins-strange text-black text-center mb-4">
          WE MAKE YOUR AUDIENCE FEEL, THINK, AND ACT
        </p>

        <div className="flex flex-col leading-[.95]">
          <h1 className="text-[40px] md:text-[65px] lg:text-[100px] font-bold font-bandeins-strange text-black text-center mb-2">
            We turn insights
          </h1>
          <h1 className="text-[40px] md:text-[65px] lg:text-[100px] font-bold font-bandeins-strange text-black text-center">
            into impact
          </h1>
        </div>

        <button className="mt-5 bg-black rounded-md text-white px-8 py-4 font-bold font-bandeins-strange tracking-wide transition-colors duration-300 transform hover:scale-105">
          Let's Get Started
        </button>
      </div>
    </section>
  );
};

export default TransformGlobe;
