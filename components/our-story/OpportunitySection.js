import React from "react";

const OpportunitySection = () => {
  return (
    <div className="bg-[#FAFAFA] w-full min-h-[850px] px-[5%] py-20 flex flex-col gap-16">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-bold">Unlocking opportunities</h1>
        <h1 className="text-xl md:text-3xl font-semibold mt-2">
          through strategic partnership
        </h1>
      </div>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row justify-center gap-2 w-full">
        {/* Left Column */}
        <div className="flex flex-col items-center gap-4 w-full lg:w-1/2">
          <p className="text-base font-medium">MAIN ASSOCIATIONS</p>

          <div className="flex flex-wrap gap-4 justify-center w-full">
            {/* Card 1 */}
            <div className="flex flex-col items-start gap-3 p-4 bg-white  w-full sm:w-[300px]">
              <img src="/assets/Clients/Frame 264.png" alt="logo" className="w-[80px] h-[80px] mb-4  object-contain" />
              <div>
                <p className="font-semibold">DUBAI SBE</p>
                <p className="text-sm">Empowering Emirati entrepreneurs to transform ideas into successful businesses since 2002.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-start gap-3 p-4 bg-white sm:w-[300px]">
              <img src="/assets/Clients/Frame 266.png" alt="logo" className="w-[80px] h-[80px] mb-4 object-contain" />
              <div>
                <p className="font-semibold">DONE BY YOUTH</p>
                <p className="text-sm">Empowering Emirati entrepreneurs to transform ideas into successful businesses since 2002.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-start gap-3 p-4 bg-white  w-full sm:w-[620px]">
              <img src="/assets/Clients/Frame 259.png" alt="logo" className="w-[80px] h-[80px] mb-4  object-contain" />
              <div>
                <p className="font-semibold">ICV</p>
                <p className="text-sm ">Empowering Emirati entrepreneurs to transform ideas into successful businesses since 2002.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center gap-4 w-full lg:w-1/2">
          <p className="text-base font-medium ">SPECIALIZED PARTNERS</p>

          <div className="flex flex-wrap gap-4 justify-center w-full">
            {/* Card 1 */}
            <div className="flex flex-col items-start gap-3 p-4 bg-white w-full sm:w-[300px]">
              <img src="/assets/Clients/Frame 254.png" alt="logo" className="w-[80px] h-[80px] mb-4 object-contain" />
              <div>
                <p className="font-semibold">EMPLIFI</p>
                <p className="text-sm ">Empowering Emirati entrepreneurs to transform ideas into successful businesses since 2002.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-start gap-3 p-4 bg-white w-full sm:w-[300px]">
              <img src="/assets/Clients/Frame 255.png" alt="logo" className="w-[80px] h-[80px] mb-4  object-contain" />
              <div>
                <p className="font-semibold">PIXEL HOUSE</p>
                <p className="text-sm ">Empowering Emirati entrepreneurs to transform ideas into successful businesses since 2002.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-start gap-3 p-4 bg-white w-full sm:w-[620px]">
              <img src="/assets/Clients/Frame 257.png" alt="logo" className="w-[80px] h-[80px] mb-4  object-contain" />
              <div>
                <p className="font-semibold">GARAGE STUDIO</p>
                <p className="text-sm ">Empowering Emirati entrepreneurs to transform ideas into successful businesses since 2002.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunitySection;
