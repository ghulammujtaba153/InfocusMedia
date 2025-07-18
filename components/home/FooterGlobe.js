"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
          <button className="bg-black hover:bg-transparent hover:text-black text-[16px] md:text-[18px] lg:text-[22px] text-white px-4 py-2 cursor-pointer hover:scale-105 transition-transform duration-300 rounded-md font-medium">
            let's Go
          </button>
        </div>
      </div>
    </section>
  );
};

export default FooterGlobe;
