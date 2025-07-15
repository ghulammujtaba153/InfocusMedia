"use client";

import React, { useEffect, useRef, useState } from "react";


const InsightGlobe = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

 
  
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
        className="relative bg-white h-screen overflow-hidden"
        style={{ zIndex: 1 }}
      >
        {/* Video Background */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src="/Blob2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Text Overlay */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 opacity-100"
          style={{ zIndex: 2 }}
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
