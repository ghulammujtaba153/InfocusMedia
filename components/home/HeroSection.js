import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <img
        src="/main.png" // ✅ Corrected the typo from .ong to .png (make sure it's accurate)
        alt="Background"
        className="w-full h-full object-cover"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <img src="/logo.png" alt="Logo" className="mb-4 object-contain" />
        <p className="text-xl max-w-xl">
          Born from Emirati soil, our roots run deep
        </p>
        <p className="text-xl max-w-xl">
          and our vision soars high
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
