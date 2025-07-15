"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InsightGlobe = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!video || !section) return;

    const handleVideoReady = () => {
      setVideoReady(true);

      requestAnimationFrame(() => {
        const videoDuration = video.duration || 7;

        video.pause();
        video.currentTime = 0;

        gsap.set(video, { currentTime: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=3000",
            scrub: 1,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            id: "insight-globe",
            // markers: true, // Enable for debugging
          },
        });

        tl.to(video, {
          currentTime: videoDuration,
          ease: "none",
        });
      });
    };

    video.addEventListener("loadeddata", handleVideoReady);

    return () => {
      video.removeEventListener("loadeddata", handleVideoReady);
      ScrollTrigger.getById("insight-globe")?.kill();
    };
  }, []);

  return (
    <div className="relative w-full">
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
    </div>
  );
};

export default InsightGlobe;
