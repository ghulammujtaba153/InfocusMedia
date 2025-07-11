"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TopSection = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    const playVideo = () => {
      video.currentTime = 0;
      video.play().catch(error => {
        console.error("Video play error:", error);
      });
    };

    const pauseVideo = () => {
      video.pause();
    };

    // Try to play immediately on load (for mobile devices)
    const tryAutoPlay = () => {
      video.muted = true;
      video.play()
        .then(() => {
          video.pause();
          video.currentTime = 0;
          setIsVideoLoaded(true);
        })
        .catch(error => {
          console.log("Autoplay prevented, will rely on scroll trigger");
          setIsVideoLoaded(true);
        });
    };

    tryAutoPlay();

    // Only set up ScrollTrigger after video is ready
    if (isVideoLoaded) {
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top bottom", // Triggers when top of section hits bottom of viewport
        end: "bottom top", // Ends when bottom of section hits top of viewport
        onEnter: playVideo,
        onLeave: pauseVideo,
        onEnterBack: playVideo,
        onLeaveBack: pauseVideo,
        markers: false // Add this for debugging, remove in production
      });

      return () => {
        trigger.kill();
      };
    }
  }, [isVideoLoaded]);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-white"
    >
      <div className="flex flex-col items-center h-screen overflow-hidden gap-4">
        <video
          ref={videoRef}
          src="/Final.mp4"
          className="w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setIsVideoLoaded(true)}
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-3/4 max-w-[580px] max-h-[68px] mb-6 object-contain"
          />
          <p className="uppercase text-white text-[16px] md:text-[18px] lg:text-[22px]">
            Born from Emirati soil, our roots run deep
          </p>
          <p className="uppercase text-white text-[16px] md:text-[18px] lg:text-[22px]">
            and our vision soars high
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopSection;