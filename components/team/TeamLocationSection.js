import React from "react";

const TeamLocationSection = () => {
  return (
    <div className="flex items-center lg:flex-row flex-col gap-4 px-4 md:px-10 w-full min-h-screen">
      {/* left side */}
      <div className="flex flex-col justify-between py-4 md:p-15 bg-black text-white h-[60%] lg:h-screen w-full lg:w-1/2">
        <div className="flex flex-col gap-2 leading-[.97]">
          <h1
            className="font-bold"
            style={{
              paddingTop: "10px",
              paddingLeft: "20px",
              fontFamily: 'Bandeins Strange Variable, sans-serif',
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: "clamp(40px, 8vw, 100px)",
              lineHeight: "100%",
              letterSpacing: "-2%",
            }}
          >
            Join
          </h1>
          <h1
            className="font-bold"
            style={{
              paddingLeft: "20px",
              fontFamily: 'Bandeins Strange Variable, sans-serif',
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: "clamp(40px, 8vw, 100px)",
              lineHeight: "100%",
              letterSpacing: "-2%",
            }}
          >
            Our Team
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <p
            className="font-semibold uppercase px-5 md:px-0"
            style={{
              fontFamily: 'Almarai, sans-serif',
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: "clamp(16px, 2.5vw, 22px)",
              lineHeight: "120%",
              letterSpacing: "3%",
              textTransform: "uppercase",
            }}
          >
            we're always on the lookout for brilliant minds and bold ideas.
            check out our vacancies and apply for the one that suits you best!
          </p>
          <div className="flex mt-6 px-5 md:px-0">
            <button className="bg-white text-black px-4 md:px-6 py-3 cursor-pointer hover:bg-black hover:text-white transition-transform duration-300 rounded-md font-medium text-[16px] md:text-[18px] lg:text-[22px]">
             Join the Team
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-[60%] lg:h-screen lg:w-1/2 relative cursor-pointer overflow-hidden">
        <a href="https://maps.app.goo.gl/cWRBwXFomTUYaeYs9" target="_blank" rel="noopener noreferrer">
        <img src="/maps/map-pointer.png" className="w-full h-full object-cover" alt="map" />
        <img 
          src="/maps/map-address.png" 
          className="w-auto h-[80px] md:h-[100px] object-contain absolute top-2 left-2 md:left-4" 
          alt="map address" 
        />
        </a>
      </div>
    </div>
  );
};

export default TeamLocationSection;
