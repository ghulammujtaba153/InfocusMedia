"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const TransformGlobe = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const [isSecondTextVisible, setIsSecondTextVisible] = useState(false);
  
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    video.pause();

    // Pin the section to the screen
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom top",
      pin: false,
      pinSpacing: true,
    });

    let lastScrollY = window.scrollY;
    let ticking = false;
    let lastTimestamp = performance.now();
    let scrollTimeout;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame((timestamp) => {
          const rect = section.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const sectionHeight = rect.height;

          // Only play if section is in view
          if (
            rect.top < windowHeight &&
            rect.bottom > 0
          ) {
            // Calculate scroll speed
            const scrollDelta = Math.abs(window.scrollY - lastScrollY);
            const timeDelta = timestamp - lastTimestamp;
            lastScrollY = window.scrollY;
            lastTimestamp = timestamp;

            // Map scroll speed to playbackRate (min 0.5, max 2)
            let playbackRate = Math.min(2, Math.max(0.5, scrollDelta / (timeDelta / 16)));
            video.playbackRate = playbackRate;
            video.play();

            // Check video progress for text transition
            const videoProgress = video.currentTime / video.duration;
            
            if (videoProgress >= 0.5 && !isSecondTextVisible) {
              // Transition to second text
              gsap.to(firstTextRef.current, {
                opacity: 0,
                duration: 0.5,
                ease: "power2.inOut"
              });
              gsap.to(secondTextRef.current, {
                opacity: 1,
                duration: 0.5,
                ease: "power2.inOut",
                delay: 0.3
              });
              setIsSecondTextVisible(true);
            } else if (videoProgress < 0.5 && isSecondTextVisible) {
              // Transition back to first text
              gsap.to(secondTextRef.current, {
                opacity: 0,
                duration: 0.5,
                ease: "power2.inOut"
              });
              gsap.to(firstTextRef.current, {
                opacity: 1,
                duration: 0.5,
                ease: "power2.inOut",
                delay: 0.3
              });
              setIsSecondTextVisible(false);
            }

            // Pause video if no scroll for 150ms
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
              video.pause();
            }, 150);
          } else {
            video.pause();
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Handle video timeupdate for smooth transitions
    const handleTimeUpdate = () => {
      const videoProgress = video.currentTime / video.duration;
      
      if (videoProgress >= 0.5 && !isSecondTextVisible) {
        gsap.to(firstTextRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut"
        });
        gsap.to(secondTextRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
          delay: 0.3
        });
        setIsSecondTextVisible(true);
      } else if (videoProgress < 0.5 && isSecondTextVisible) {
        gsap.to(secondTextRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut"
        });
        gsap.to(firstTextRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
          delay: 0.3
        });
        setIsSecondTextVisible(false);
      }
    };

    // Handle video end for reverse animation
    const handleVideoEnd = () => {
      // Reverse the text transition
      gsap.to(secondTextRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut"
      });
      gsap.to(firstTextRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
        delay: 0.3
      });
      setIsSecondTextVisible(false);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleVideoEnd);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleVideoEnd);
      clearTimeout(scrollTimeout);
      // Clean up ScrollTrigger
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isSecondTextVisible]);

  return (
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

      {/* First Text Overlay */}
      <div 
        ref={firstTextRef}
        className="absolute inset-0 flex flex-col items-center justify-center z-20 opacity-100"
      >
        <p className="md:text-[18px] text-[16px] lg:text-[22px] font-bold uppercase text-black text-center mb-4">
          WE don't see brands, we see possibilities
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

      {/* Second Text Overlay */}
      <div 
        ref={secondTextRef}
        className="absolute inset-0 flex flex-col items-center justify-center z-20 opacity-0"
      >
        <p className="md:text-[18px] text-[16px] lg:text-[22px] font-bold uppercase text-black text-center mb-4">
          we make your audience feel, think, and act
        </p>
        <div className="flex flex-col leading-[.95]">
          <h1 className="text-[40px] md:text-[65px] lg:text-[100px] font-bold text-black text-center mb-2">
            We turn insights
          </h1>
          <h1 className="text-[40px] md:text-[65px] lg:text-[100px] font-bold text-black text-center">
            into impact
          </h1>
        </div>
        <Link href="/contacts" className="mt-5 bg-black rounded-md text-white px-8 py-4 hover:bg-transparent hover:text-black cursor-pointer font-bold tracking-wide transition-transform duration-300 hover:scale-105 text-center">
          Let's Get Started
        </Link>
      </div>
    </section>
  );
};

export default TransformGlobe;
