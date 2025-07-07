"use client";

import React, { useEffect, useRef } from "react";

const FooterGlobe = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      console.log("Video current time:", currentTime);
      // Example: You can trigger something at a specific time
      // if (currentTime > 5) { ... }
    };

    const handleLoadedMetadata = () => {
      console.log("Video duration:", video.duration);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  return (
    <section className="relative h-screen bg-white py-20 overflow-hidden">

      
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        preload="auto"
      >
        <source src="/Blob2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text on top of video */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <p className="text-xs font-bold uppercase tracking-widest mb-1">HAVE PROJECT IN MIND?</p>
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">let's create</h1>
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">something great</h1>
        <h1 className="text-3xl md:text-6xl font-bold mb-2 leading-tight">together!</h1>

        <div className="text-center">
          <button className="bg-black text-white px-4 py-2 cursor-pointer hover:scale-105 transition-transform duration-300 rounded-md font-medium">
            let's Go
          </button>
        </div>
      </div>
    </section>
  );
};

export default FooterGlobe;
