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

    const totalWidth = timeline.scrollWidth ;

    const tl = gsap.to(timeline, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "center center", // Start when the container's center aligns with the viewport's center
        end: () => `+=${totalWidth}`, // Animate across the timeline's full width
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
    <div ref={containerRef} className="relative w-full bg-white overflow-hidden px-4 md:px-8 py-20">
      <div ref={timelineRef} className="flex min-w-max">
        {timelineData.map((item, index) => {
          const isLastActive = index === lastActiveIndex;
          return (
            <div key={index} className="flex flex-col items-center min-w-[250px]">
              <div className="text-center mb-6">
                <div className={`text-4xl font-bold ${isLastActive ? "text-green-500" : "text-black"}`}>
                  {item.title}
                </div>

                <div className="flex items-center my-6">
                  <div className={`w-4 h-4 rounded-full ${item.active ? "bg-green-500" : "bg-gray-300"} z-10`} />
                  {index !== timelineData.length - 1 && (
                    <div className={`h-[1px] w-[300px] ${item.active ? "bg-green-500" : "bg-gray-300"}`} />
                  )}
                </div>

                <div className="text-sm font-medium">{item.subTitle}</div>
                {item.description.map((desc, i) => (
                  <p key={i} className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeLine;
