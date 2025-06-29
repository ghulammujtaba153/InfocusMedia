import React from "react";

const Location = () => {
  return (
    <section className="bg-black py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-between bg-white text-black p-8  w-full h-[300px] md:h-[500px]">
        <div className="mb-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Join</h1>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">OUR TEAM</h1>
        </div>

        <div className="text-sm md:text-base leading-relaxed mb-8">
          <p>
            We’re always on the lookout for brilliant minds and bold ideas. Check out our vacancies and apply for the one that suits you best!
          </p>
          <div>
          <button className="bg-black text-white px-6 py-3 hover:scale-105 transition-transform duration-300 rounded-md font-medium">
            Join the Team
          </button>
        </div>
        </div>

        
      </div>

      {/* Map or Illustration Section */}
      {/* Google Map Section */}
      <div className="flex-1 w-full h-[300px] md:h-[500px] overflow-hidden">
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
    </section>
  );
};

export default Location;
