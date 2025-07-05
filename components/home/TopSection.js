import React from 'react';

const TopSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/main.png"
        alt="TopSection Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Logo"
          className="w-3/4 max-w-[300px] mb-6 object-contain"
        />

        {/* Text */}
        <p className="uppercase text-white">
          Born from Emirati soil, our roots run deep
        </p>
        <p className="uppercase text-white">
          and our vision soars high
        </p>
      </div>
    </div>
  );
};

export default TopSection;
