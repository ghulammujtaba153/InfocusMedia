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
      const scrollProgress = Math.min(Math.max(0, 1 - rect.top / windowHeight), 1);

      const videoDuration = video.duration || 7; // fallback duration
      video.currentTime = scrollProgress * videoDuration;
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
        <p className="text-[22px] font-bold uppercase tracking-widest mb-1">
          HAVE PROJECT IN MIND?
        </p>
        <div className="flex flex-col  items-center justify-center">
          <h1 className="text-3xl md:text-[100px] font-bold leading-tight">let's create</h1>
        <h1 className="text-3xl md:text-[100px] font-bold leading-tight">something great</h1>
        <h1 className="text-3xl md:text-[100px] font-bold mb-2 leading-tight">together!</h1>
        </div>

        <div className="text-center">
          <button className="bg-black text-[22px] text-white px-4 py-2 cursor-pointer hover:scale-105 transition-transform duration-300 rounded-md font-medium">
            let's Go
          </button>
        </div>
      </div>
    </section>
  );
};

export default FooterGlobe;
