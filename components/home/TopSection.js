"use client";
import { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TopSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
   
    if (!section || !image) return;

    // Refresh ScrollTrigger to get accurate positions
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(image, { scale: 1.5 });

      gsap.to(image, {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top", // Start when section top hits center of viewport
          end: "+=1000", // End when section bottom hits center of viewport
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: -1, // Lower priority than HeroSection
          onUpdate: (self) => {
            console.log("TopSection scale progress:", self.progress);
          }
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-white">
      <div className="flex flex-col items-center h-screen overflow-hidden gap-4 px-4">
        <div className="flex w-full gap-4">
          <img src="/projects/7.png" alt="" className="w-full h-[80px] object-cover" />
          <img src="/projects/8.png" alt="" className="w-full h-[80px] object-cover" />
          <img src="/projects/9.png" alt="" className="w-full h-[80px] object-cover" />
        </div>
        <div className="flex items-center gap-4 w-full h-full">
          <img src="/projects/14.png" alt="" className="w-[200px] h-screen object-cover" />
          {/* Scalable Center Image */}
          <motion.img
            ref={imageRef}
            src="/main.png"
            alt=""
            className="h-[100%] w-[95%] object-cover"
          />
          <img src="/projects/10.png" alt="" className="w-[200px] h-screen object-cover" />
        </div>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        <img src="/logo.png" alt="Logo" className="w-3/4 max-w-[360px] mb-6 object-contain" />
        <p className="uppercase text-white">Born from Emirati soil, our roots run deep</p>
        <p className="uppercase text-white">and our vision soars high</p>
      </div>
    </div>
  );
};

export default TopSection;