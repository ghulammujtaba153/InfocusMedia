import React from "react";

const TeamLocationSection = () => {
  return (
    <div className="flex items-center lg:flex-row flex-col gap-4 px-4 w-full h-screen">
      {/* left side */}
      <div className="flex flex-col justify-between p-10 bg-black text-white h-screen w-full md:w-1/2">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold md:text-[80px] text-[54px]">Join</h1>
          <h1 className="font-bold md:text-[80px] text-[54px]">Our Team</h1>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[16px] md:text-[18px] lg:text-[22px] font-semibold uppercase">
            we’re always on the lookout for brilliant minds and bold ideas.
            check out our vacancies and apply for the one that suits you best!
          </p>
          <div className="flex mt-6">
            <button className="bg-white text-black px-6 py-3 cursor-pointer hover:scale-105 transition-transform duration-300 rounded-md font-medium text-[16px] md:text-[18px] lg:text-[22px]">
              See More
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full  relative overflow-hidden h-[492px] h-full">

        <img src="/image.png" className="w-full h-full object-cover" alt="map" />

        
      </div>
    </div>
  );
};

export default TeamLocationSection;
