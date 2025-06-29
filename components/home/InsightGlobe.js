import React from "react";

const InsightGlobe = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="relative container mx-auto px-6 flex items-center justify-center">
        {/* Blob Image */}
        <img
          src="/assets/green blob.jpg"
          alt="Green Blob"
          className="w-[500px] h-[540px] object-contain"
        />

        {/* Text on top of image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 ">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 ml-[-30px] md:ml-[-90px]">
            WE MAKE YOUR AUDIENCE FEEL, THINK, AND ACT
          </p>
          <h1 className="text-3xl md:text-6xl font-bold text-gray-90 leading-tight ml-[-30px] md:ml-[-90px]">
            We turn insights
          </h1>
          <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-4 ml-[-30px] md:ml-[-90px]">
            to impact
          </h1>
          

          <div className="text-center ml-[-90px]">
          <button className='bg-black text-white px-6 py-3 cursor-pointer hover:scale-105 transition-transform duration-300 rounded-md font-medium'>
            let's Get Started
          </button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default InsightGlobe;
