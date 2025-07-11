"use client";

import React, { useEffect, useRef } from "react";

const FooterGlobe = () => {
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

      // Calculate progress as section enters viewport
      const sectionVisible =
        rect.top <= windowHeight && rect.bottom >= 0;

      if (!sectionVisible) {
        // If section is completely out of view
        video.currentTime = 0;
        return;
      }

      const sectionHeight = rect.height;
      const scrollProgress = 1 - (rect.top / windowHeight); // progress from 0 to 1 as it scrolls into view
      const clampedProgress = Math.min(Math.max(scrollProgress, 0), 1);

      const minTime = 0;
      const maxTime = 4;
      video.currentTime = minTime + clampedProgress * (maxTime - minTime);
    };

    console.log("Video time :", video.currentTime, "Video duration:", video.duration);

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on mount

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

      {/* Text on top of video */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <p className="text-[16px] md:text-[18px] lg:text-[22px] font-bold uppercase tracking-widest mb-1">
          HAVE PROJECT IN MIND?
        </p>
        <div className="flex flex-col items-center justify-center leading-[.95]">
          <h1 className="text-[60px] md:text-[100px] font-bold">let's create</h1>
          <h1 className="text-[60px] md:text-[100px] font-bold">something great</h1>
          <h1 className="text-[60px] md:text-[100px] font-bold mb-2">together!</h1>
        </div>

        <div className="text-center mt-4">
          <button className="bg-black text-[16px] md:text-[18px] lg:text-[22px] text-white px-4 py-2 cursor-pointer hover:scale-105 transition-transform duration-300 rounded-md font-medium">
            let's Go
          </button>
        </div>
      </div>
    </section>
  );
};

export default FooterGlobe;
