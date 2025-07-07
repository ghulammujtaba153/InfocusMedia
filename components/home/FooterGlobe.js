"use client";

import React, { useEffect, useRef } from "react";

const FooterGlobe = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Progress from top of viewport (0) to center of viewport (1)
      const distanceFromTop = rect.top;
      const centerPoint = windowHeight / 2;

      let scrollProgress = 1 - distanceFromTop / centerPoint;
      scrollProgress = Math.min(Math.max(0, scrollProgress), 1); // clamp between 0 and 1

      const minTime = 3;
      const maxTime = 6;
      video.currentTime = minTime + scrollProgress * (maxTime - minTime);
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
