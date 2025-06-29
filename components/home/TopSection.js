"use client";
import React, { useEffect, useRef, useState } from "react";

const TopSection = () => {
  const textRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionHeight = 1200;
      const maxScroll = sectionHeight - window.innerHeight;

      let progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      const speedMultiplier = 1.5;
      progress = Math.min(progress * speedMultiplier, 1);
      setScrollProgress(progress);

      if (textRef.current) {
        const textWidth = textRef.current.getComputedTextLength();
        const viewportWidth = window.innerWidth;
        const maxTranslateX = -(textWidth - viewportWidth + 100);
        const translateX = maxTranslateX * progress;
        textRef.current.setAttribute("x", translateX);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[100vh] bg-white pt-[80px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/main.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* White mask layer: sticky part + fallback white below */}
      <div className="absolute inset-0 z-10">
        {/* Sticky masking part */}
        <div className="sticky top-0 h-screen">
          <svg
            className="absolute inset-0 pointer-events-none"
            width="100%"
            height="100%"
          >
            <defs>
              <mask
                id="text-mask"
                x="0"
                y="0"
                width="100%"
                height="100%"
                maskUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                <text
                  ref={textRef}
                  x="0"
                  y="60%"
                  fontSize="55vh"
                
                  fontWeight="bold"
                  fontFamily="inherit"
                  fill="black"
                  style={{
                    marginTop: "10px",
                    whiteSpace: "pre",
                    letterSpacing: "0.05em",
                    transition: "transform 0.1s ease-out",
                  }}
                >
                  Infocusmedia
                </text>
              </mask>
            </defs>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="white"
              mask="url(#text-mask)"
            />
          </svg>
        </div>

        {/* Fallback white layer after scroll ends */}
        <div className="h-[600px] bg-white"></div>
      </div>

      {/* Debug scroll progress */}
      <div className="absolute bottom-4 left-4 text-white z-20 text-sm">
        Scroll Progress: {Math.round(scrollProgress * 100)}%
      </div>
    </div>
  );
};

export default TopSection;
