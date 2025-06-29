import React from "react";

const FooterGlobe = () => {
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
          <p className="text-xs font-bold uppercase tracking-widest mb-1 ml-[-90px]">
            HAVE PROJECT IN MIND?
          </p>
          <h1 className="text-3xl md:text-6xl font-bold leading-tight ml-[-90px]">
            let's create
          </h1>
          <h1 className="text-3xl md:text-6xl font-bold leading-tight ml-[-90px]">
            something great
          </h1>
          <h1 className="text-3xl md:text-6xl font-bold  mb-2 leading-tight ml-[-90px]">
            together!
          </h1>
          

          <div className="text-center ml-[-90px]">
          <button className='bg-black text-white px-4 py-2 cursor-pointer hover:scale-105 transition-transform duration-300 rounded-md font-medium'>
            let's Go
          </button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default FooterGlobe;
