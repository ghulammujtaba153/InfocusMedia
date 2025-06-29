import React from "react";

const TransformGlobe = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="relative container mx-auto px-6 flex items-center justify-center">
        {/* Blob Image */}
        <img
          src="/assets/green blob.jpg"
          alt="Green Blob"
          className="w-[500px] h-[500px] object-contain"
        />

        {/* Text on top of image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 ">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 ml-[-30px] md:ml-[-90px]">
            We don't see brands, we see possibilities
          </p>
          <h1 className="text-3xl md:text-6xl font-bold text-gray-90 leading-tight ml-[-30px] md:ml-[-90px]">
            We transform ideas
          </h1>
          <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-4 ml-[-30px] md:ml-[-90px]">
            into visual stories
          </h1>
          <p className="text-xs font-bold uppercase tracking-widest ml-[-30px] md:ml-[-90px]">
            And we know what your brand needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default TransformGlobe;
