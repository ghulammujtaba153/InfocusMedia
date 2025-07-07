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
    
    // Calculate the correct distance to move
    const containerWidth = container.offsetWidth;
    const timelineWidth = timeline.scrollWidth;
    const moveDistance = timelineWidth - containerWidth;
    
    const tl = gsap.to(timeline, {
      x: -moveDistance, // Move only the excess width, not the full width
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "center center",
        end: () => `+=${moveDistance}`, // End when we've scrolled the excess distance
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
              <div className=" mb-6">
                <div className={`text-[100px] font-bold ${isLastActive ? "text-green-500" : "text-black"}`}>
                  {item.title}
                </div>
                <div className="flex items-center my-6">
                  <div className={`w-[24px] h-[24px] rounded-full ${item.active ? "bg-green-500" : "bg-gray-300"} z-10`} />
                  {index !== timelineData.length - 1 && (
                    <div className={`h-[1px] w-[400px] ${item.active ? "bg-green-500" : "bg-gray-300"}`} />
                  )}
                </div>
                <div className="text-[22px] font-medium">{item.subTitle}</div>
                {item.description.map((desc, i) => (
                  <p key={i} className="text-[18px] text-gray-500 leading-relaxed">{desc}</p>
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