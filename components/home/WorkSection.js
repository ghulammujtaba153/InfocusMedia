"use client";

import React, { useState } from "react";

const WorkSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: "SOCIAL MEDIA MANAGEMENT",
      icon: "/assets/Icons/social media management.svg"
    },
    {
      title: "EVENT MEDIA COVERAGE",
      icon: "/assets/Icons/event media coverage.svg"
    },
    {
      title: "DIGITAL MARKETING & WEB DEVELOPMENT",
      icon: "/assets/Icons/digital marketing & web development.svg"
    },
    {
      title: "COMERCIAL DIGITAL MARKETING",
      icon: "/assets/Icons/commercial video production.svg"
    },
    {
      title: "MARKETING STRATEGY",
      icon: "/assets/Icons/marketing strategy.svg"
    },
    {
      title: "ANIMATION & MOTION GRAPHICS",
      icon: "/assets/Icons/animation & motion graphics.svg"
    },
    {
      title: "BRANDING",
      icon: "/assets/Icons/branding.svg"
    },
  ];

  return (
    <section className="relative bg-white py-20">
      <div className="container mx-auto md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We Do
          </h2>
        </div>

        <div
          className="grid grid-cols-2 lg:grid-cols-7 gap-8"
          onMouseLeave={() => setHoveredIndex(null)} 
        >
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              className={`flex flex-col gap-2 items-center justify-center cursor-pointer transition duration-300 
                ${hoveredIndex !== null && hoveredIndex !== index ? "opacity-30" : "opacity-100"}
              `}
            >
              <img src={service.icon} alt={service.title} className="w-[110px] h-[110px] hover:scale-130 duration-300 transition-transform" />
              <h3 className="font-bold text-center text-gray-900 mb-3 mt-2 text-sm px-2">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
