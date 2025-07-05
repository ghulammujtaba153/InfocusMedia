import React, { useState } from "react";

const data = [
  { title: "7X x Sikka Collaboration", image: "/assets/Case studies/7X x Sikka.jpg" },
  { title: "Marketing Campaign", image: "/assets/Case studies/7X x Sikka.jpg" },
  { title: "EXPO Event Coverage", image: "/assets/Case studies/7X x Sikka.jpg" },
  { title: "Brand Partnership", image: "/assets/Case studies/7X x Sikka.jpg" },
  { title: "Brand Partnership 2", image: "/assets/Case studies/7X x Sikka.jpg" },
  { title: "Brand Partnership 3", image: "/assets/Case studies/7X x Sikka.jpg" },
];

const MotionGraphics = () => {
  const [visibleCount, setVisibleCount] = useState(4); // Show 2 by default

  const handleToggle = () => {
    if (visibleCount >= data.length) {
      setVisibleCount(2); // Collapse
    } else {
      setVisibleCount(data.length); // Expand
    }
  };

  return (
    <div className="flex flex-col w-full px-6 my-8">
      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-b border-gray-200">
        {data.slice(0, visibleCount).map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex md:flex-row flex-col-reverse gap-4 p-4 border-gray-100 border-t border-b 
                ${isEven ? '' : 'md:border-l'} 
                ${index < 2 ? 'border-t' : ''}`}
            >
              {/* Text */}
              <div className="md:w-1/2 w-full flex md:justify-end">
                <div className="flex gap-10 md:gap-0 md:flex-col md:text-right text-left">
                  <p className="text-sm text-gray-500">Project</p>
                  <h1 className="text-4xl font-semibold">{item.title}</h1>
                </div>
              </div>

              {/* Image */}
              <img
                src={item.image}
                alt={item.title || "Case Study"}
                className="w-full h-[500px] object-cover"
              />
            </div>
          );
        })}
      </div>

      {/* Button */}
      <div className="flex justify-center items-center mt-10">
        <button
          onClick={handleToggle}
          className="bg-black text-white px-6 py-3 cursor-pointer hover:scale-105 transition-transform duration-300 rounded-md font-medium"
        >
          {visibleCount >= data.length ? "See Less" : "See More!"}
        </button>
      </div>
    </div>
  );
};

export default MotionGraphics;
