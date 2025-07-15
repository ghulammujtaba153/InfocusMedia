"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TransformGlobe = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) return;

    const handleLoaded = () => {
      setVideoReady(true);

      requestAnimationFrame(() => {
        const videoDuration = video.duration || 5;

        video.pause();
        video.currentTime = 0;
        gsap.set(video, { currentTime: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=2000",
            scrub: 1,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            id: "transform-globe",
            // markers: true, // enable for debug
          },
        });

        tl.to(video, {
          currentTime: videoDuration,
          ease: "none",
        });
      });
    };

    video.addEventListener("loadeddata", handleLoaded);

    return () => {
      video.removeEventListener("loadeddata", handleLoaded);
      ScrollTrigger.getById("transform-globe")?.kill();
    };
  }, []);

  return (
    <div className="relative w-full">
      <section
        ref={sectionRef}
        className="relative h-screen bg-white overflow-hidden"
        style={{ zIndex: 1 }}
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
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 opacity-100">
          <p className="md:text-[18px] text-[16px] lg:text-[22px] font-bold uppercase text-black text-center mb-4">
            WE don’t see brands, we see possibilities
          </p>

          <div className="flex flex-col leading-[.95]">
            <h1 className="text-[40px] md:text-[65px] lg:text-[100px] font-bold text-black text-center mb-2">
              We transform ideas
            </h1>
            <h1 className="text-[40px] md:text-[65px] lg:text-[100px] font-bold text-black text-center">
              into visual stories
            </h1>
          </div>

          <p className="md:text-[18px] text-[16px] lg:text-[22px] font-bold uppercase text-black text-center mt-4">
            and we know what your brand needs
          </p>
        </div>
      </section>
    </div>
  );
};

export default TransformGlobe;
