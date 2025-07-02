import React from "react";

const TeamLocationSection = () => {
  return (
    <div className="flex items-center gap-4 px-4 w-full h-screen">
      {/* left side */}
      <div className="flex flex-col justify-between p-10 bg-black text-white h-screen w-full md:w-1/2">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-6xl">Join</h1>
          <h1 className="font-bold text-6xl">Our Team</h1>
        </div>
        <div className="flex flex-col gap-4">
          <p>
            we’re always on the lookout for brilliant minds and bold ideas.
            check out our vacancies and apply for the one that suits you best!
          </p>
          <div className="flex mt-6">
            <button className="bg-white text-black px-6 py-3 cursor-pointer hover:scale-105 transition-transform duration-300 rounded-md font-medium">
              See More!
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full md:w-1/2 h-screen">
        <div className="relative w-full h-screen overflow-hidden">
          {/* Pointer Image */}
          <img
            src="/assets/Icons/pointer.svg"
            className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10"
            alt="pointer"
          />

          {/* Embedded Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.195460911089!2d73.06396957456576!3d33.64624624074916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf5087b4a1c9%3A0x1c6fe55fd0fa3739!2sSaddar%20Rawalpindi!5e0!3m2!1sen!2s!4v1719577320000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TeamLocationSection;
