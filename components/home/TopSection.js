"use client";
import React, { useEffect, useRef, useState } from "react";

const TopSection = () => {
  const textRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionHeight = window.innerHeight * 7; // Triple the viewport height for slower scroll
      const maxScroll = sectionHeight - window.innerHeight;

      let progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      setScrollProgress(progress);

      if (textRef.current) {
        const textWidth = textRef.current.getComputedTextLength();
        const viewportWidth = window.innerWidth;
        
        // Start from right edge but ensure "Infocus" is visible
        const startX = viewportWidth + 100; // Start with more text visible
        const endX = -textWidth + 100; // End with some padding
        const translateX = startX + (endX - startX) * progress;
        
        textRef.current.setAttribute("x", translateX);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 z-10">
  <div className="sticky top-0 h-screen">
    <svg className="absolute inset-0 pointer-events-none" width="100%" height="100%">
      <defs>
        <mask id="text-mask" x="0" y="0" width="100%" height="100%" maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <text
            ref={textRef}
            x="0"
            y="60%"
            fontSize="54vw"
            textAnchor="start"
            fontWeight="bold"
            fontFamily="inherit"
            fill="black"
            className="whitespace-nowrap"
          >
            Infocus Media
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
</div>

  );
};

export default TopSection;