import React from "react";

const Location = () => {
  return (
    <section className="bg-black py-20 px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-6">
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-between bg-white text-black p-8 w-full h-screen">
        <div className="mb-6">
          <h1 className="text-3xl text-[100px] font-bold leading-tight">Join</h1>
          <h1 className="text-3xl text-[100px] font-bold leading-tight">OUR TEAM</h1>
        </div>

        <div className="text-[22px] leading-relaxed mb-8">
          <p>
            We’re always on the lookout for brilliant minds and bold ideas. Check out our vacancies and apply for the one that suits you best!
          </p>
          <div>
            <button className="bg-black text-[22px] text-white px-6 py-3 hover:scale-105 transition-transform duration-300 rounded-md  font-medium mt-4">
              Join the Team
            </button>
          </div>
        </div>
      </div>

      {/* Map or Illustration Section */}
      <div className="flex-1 w-full h-screen relative overflow-hidden">
        {/* If using Google Maps iframe, uncomment this and remove the image */}
        {/* <iframe
          src="https://www.google.com/maps/embed?... your URL ..."
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}

        <img src="/map-img.png" className="w-full h-full object-cover" alt="map" />

        {/* Address Overlay */}
        <div className="absolute top-0 left-0 m-4 p-4 bg-white bg-opacity-90 text-black rounded-md shadow-md">
          <p className="text-gray-600 text-xs uppercase mb-1">Address</p>
          <p className="font-semibold">OFFICE 221, AL HANNAN CENTER</p>
          <p className="text-sm">Dubai, UAE</p>
          <p className="text-sm">(04 3300409)</p>
        </div>
      </div>
    </section>
  );
};

export default Location;
