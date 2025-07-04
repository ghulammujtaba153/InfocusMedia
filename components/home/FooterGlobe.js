import React from "react";

const FooterGlobe = () => {
  return (
    <section className="relative h-screen bg-white py-20 overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/Blob2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text on top of video */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <p className="text-xs font-bold uppercase tracking-widest mb-1 ">
          HAVE PROJECT IN MIND?
        </p>
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          let's create
        </h1>
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          something great
        </h1>
        <h1 className="text-3xl md:text-6xl font-bold mb-2 leading-tight ">
          together!
        </h1>

        <div className="text-center ">
          <button className="bg-black text-white px-4 py-2 cursor-pointer hover:scale-105 transition-transform duration-300 rounded-md font-medium">
            let's Go
          </button>
        </div>
      </div>
    </section>
  );
};

export default FooterGlobe;
