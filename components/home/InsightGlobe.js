"use client";

import React, { useEffect, useRef, useState } from "react";

const InsightGlobe = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [showStartText, setShowStartText] = useState(true);

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

  // Progress: 0 when section just enters, 1 when centered
  const scrollProgress = 1 - sectionBottom / windowHeight;
  const clampedProgress = Math.min(Math.max(scrollProgress, 0), 1);

  const easedProgress = Math.pow(clampedProgress, 0.6); // easing scroll

  const minTime = 0;
  const maxTime = 5;

  // Reverse playback
  video.currentTime = maxTime - easedProgress * (maxTime - minTime);
};


    

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-white min-h-screen overflow-hidden"
    >
      {/* Video Background */}
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
          showStartText ? "opacity-100" : "opacity-100"
        }`}
      >
        <p className="md:text-[18px] text-[16px] lg:text-[22px] font-bold uppercase text-black text-center mb-4">
          WE MAKE YOUR AUDIENCE FEEL, THINK, AND ACT
        </p>

        <div className="flex flex-col leading-[.95]">
          <h1 className="text-[40px] md:text-[65px] lg:text-[100px] font-bold text-black text-center mb-2">
            We turn insights
          </h1>
          <h1 className="text-[40px] md:text-[65px] lg:text-[100px] font-bold text-black text-center">
            into impact
          </h1>
        </div>

        <button className="mt-5 bg-black rounded-md text-white px-8 py-4 font-bold tracking-wide transition-transform duration-300 hover:scale-105">
          Let's Get Started
        </button>
      </div>
    </section>
  );
};

export default InsightGlobe;
