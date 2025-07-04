"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { timelineData } from "@/utils/data";

gsap.registerPlugin(ScrollTrigger);

const TimeLine = () => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const timeline = timelineRef.current;

    const totalWidth = timeline.scrollWidth;

    const tl = gsap.to(timeline, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      tl.scrollTrigger?.kill();
    };
  }, []);

  const lastActiveIndex = timelineData.map((d) => d.active).lastIndexOf(true);

  return (
    <div ref={containerRef} className="relative w-full bg-white overflow-hidden px-4 md:px-8">
      <div
        ref={timelineRef}
        className="flex py-20 min-w-max px-4 md:px-8" // <- Padding added here for timeline items
      >
        {timelineData.map((item, index) => {
          const isLastActive = index === lastActiveIndex;

          return (
            <div key={index} className="flex flex-col items-center min-w-[200px]">
              <div className="text-center mb-6">
                <div className={`text-4xl font-bold ${isLastActive ? "text-green-500" : "text-black"}`}>
                  {item.title}
                </div>

                <div className="flex items-center my-6">
                  <div className={`w-4 h-4 rounded-full ${item.active ? "bg-green-500" : "bg-gray-300"} z-10`} />
                  {index !== timelineData.length - 1 && (
                    <div className={`h-[1px] w-52 ${item.active ? "bg-green-500" : "bg-gray-300"}`} />
                  )}
                </div>

                <div className="text-sm font-medium">{item.subTitle}</div>
                <div className="text-sm">{item.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeLine;
