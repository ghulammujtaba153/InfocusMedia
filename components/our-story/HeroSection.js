"use client"
import React from "react";
import CountUp from "react-countup";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[900px] min-h-screen bg-black text-white overflow-hidden flex flex-col justify-between">
      {/* Center Content */}
      <div className="flex flex-col h-[400px] items-center justify-end text-center z-10">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
          At Infocus Media, we believe
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
          that organizations flourish when
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">their teams are proactive and fueled</h1>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
          by initiative.
        </h1>
        <p className="mt-4 max-w-3xl text-sm md:text-base">
          This commitment inspires us to unite with a vibrant, forward-thinking spirit,
          ensuring our meaningful contributions to sustainable development.
        </p>
      </div>

      {/* Bottom Section with Stats + Image */}
      <div className="relative w-full flex-grow">
        {/* Background Image */}
        <img
          src="/story-img1.png"
          alt="Green Blob"
          className="absolute bottom-0 left-0 w-full h-full md:object-cover z-0"
        />

        {/* Left Stats */}
        <div className="absolute top-[80px] left-0 z-10 w-full md:w-1/3 pl-10 sm:pl-[60px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-3xl md:text-5xl font-bold">
              <CountUp end={10} duration={3} />+
            </h1>
            <h2 className="text-base md:text-xl font-bold text-center">Years of Experience</h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-3xl md:text-5xl font-bold">
              <CountUp end={70} duration={3} />+
            </h1>
            <h2 className="text-base md:text-xl font-bold text-center">Clients</h2>
          </div>
        </div>

        {/* Right Stats */}
        <div className="absolute top-[80px] right-0 z-10 w-full md:w-1/3 pr-[60px] flex flex-col md:flex-row items-end md:items-center justify-between gap-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-3xl md:text-5xl font-bold">
              <CountUp end={10} duration={3} />+
            </h1>
            <h2 className="text-base md:text-xl font-bold text-center">Employees</h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-3xl md:text-5xl font-bold">
              <CountUp end={100} duration={3} />+
            </h1>
            <h2 className="text-base md:text-xl font-bold text-center">Projects</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
