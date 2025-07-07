import React, { useState, useEffect, useRef } from "react";


const InsightGlobe = () => {
  const [showStartText, setShowStartText] = useState(true);
  const [showEndText, setShowEndText] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      
      // For a 7-second video, switch at 3.5 seconds
      // Using 3.5 as the exact midpoint for your 7-second video
      if (currentTime <= 3.5) {
        setShowStartText(true);
        setShowEndText(false);
      } else {
        setShowStartText(false);
        setShowEndText(true);
      }
    };

    // Also handle when video loads to ensure proper initial state
    const handleLoadedMetadata = () => {
      setShowStartText(true);
      setShowEndText(false);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  return (
    <section className="relative z-10 bg-white min-h-screen overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/Blob2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Start Text Overlay - Shows for first 3.5 seconds */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center z-20 transition-opacity duration-300 ${showStartText ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-[22px] font-bold uppercase font-bandeins-strange text-black text-center mb-4">
          WE MAKE YOUR AUDIENCE FEEL, THINK, AND ACT
        </p>
        
        <div className="fle flex-col">
          <h1 className="text-[100px] font-bold font-bandeins-strange text-black text-center mb-2">
          We turn insights
        </h1>
       <h1 className="text-[100px] font-bold font-bandeins-strange text-black text-center ">
          into impact
        </h1>
        </div>
        <button className="bg-black rounded-md text-white px-8 py-4  font-bold font-bandeins-strange tracking-wide  transition-colors duration-300 transform hover:scale-105">
          Let's Get Started
        </button>
      </div>

      {/* End Text Overlay - Shows for last 3.5 seconds */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center z-20 transition-opacity duration-300 ${showEndText ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-xs font-bold uppercase font-bandeins-strange text-black text-center text-[22px]">
          We don't see brands, we see possibilities
        </p>
        <div className="flex flex-col">
          <h1 className="font-bold font-bandeins-strange text-black text-center text-[100px]">
          We transform ideas
        </h1>
        <h1 className="font-bold font-bandeins-strange text-black text-center text-[100px]">
          into visual stories
        </h1>
        </div>
        <p className=" font-bold uppercase font-bandeins-strange text-black text-center mb-12 rounded-md text-[22px]">
          And we know what your brand needs
        </p>
      </div>
    </section>
  );
};

export default InsightGlobe;