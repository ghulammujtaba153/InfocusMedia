"use client";

import React, { useRef, useState, useEffect } from "react";

const WhatWeDo = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [columns, setColumns] = useState(2);
  const gridRef = useRef(null);

  const services = [
    {
      title: "SOCIAL MEDIA MANAGEMENT",
      description: "We help you create and manage your social media",
      icon: "/assets/Icons/social media management.svg",
    },
    {
      title: "EVENT MEDIA COVERAGE",
      description: "We help you create and manage your social media",
      icon: "/assets/Icons/event media coverage.svg",
    },
    {
      title: "DIGITAL MARKETING & WEB DEVELOPMENT",
      description: "We help you create and manage your social media",
      icon: "/assets/Icons/digital marketing & web development.svg",
    },
    {
      title: "COMERCIAL DIGITAL MARKETING",
      description: "We help you create and manage your social media",
      icon: "/assets/Icons/commercial video production.svg",
    },
    {
      title: "MARKETING STRATEGY",
      description: "We help you create and manage your social media",
      icon: "/assets/Icons/marketing strategy.svg",
    },
    {
      title: "ANIMATION & MOTION GRAPHICS",
      description: "We help you create and manage your social media",
      icon: "/assets/Icons/animation & motion graphics.svg",
    },
    {
      title: "BRANDING",
      description: "We help you create and manage your social media",
      icon: "/assets/Icons/branding.svg",
    },
  ];

  useEffect(() => {
    const updateColumnCount = () => {
      const grid = gridRef.current;
      if (grid) {
        const items = Array.from(grid.children);
        const top = items[0]?.getBoundingClientRect().top;
        const count = items.filter(
          (el) => el.getBoundingClientRect().top === top
        ).length;
        setColumns(count);
      }
    };

    updateColumnCount();
    window.addEventListener("resize", updateColumnCount);
    return () => window.removeEventListener("resize", updateColumnCount);
  }, []);

  return (
    <section className="relative bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Do</h2>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 lg:grid-cols-3 w-full"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {services.map((service, index) => {
            const isFirstRow = index < columns;
            const isFirstCol = index % columns === 0;
            const isLastCol = (index + 1) % columns === 0;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`flex lg:flex-row flex-col gap-2 p-6 justify-center lg:justify-start items-center lg:items-start transition duration-300 bg-white
                  ${hoveredIndex !== null && hoveredIndex !== index ? "opacity-30" : "opacity-100"}
                  ${!isFirstRow ? "border-t" : ""}
                  ${!isFirstCol ? "border-l" : ""}
                  ${!isLastCol ? "border-r" : ""}
                  border-gray-300`}
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-[60px] h-[60px] hover:scale-110 transition-transform duration-300"
                />
                <div className="flex lg:flex-col">
                  <h3 className="font-bold mb-2 mt-1 text-sm px-1">{service.title}</h3>
                  <p className="text-sm px-1 lg:block hidden">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
