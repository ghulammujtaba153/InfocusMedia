import React, { useState } from "react";

const SocialMediaModal = ({ images, currentIndex, onClose }) => {
  const [index, setIndex] = useState(currentIndex);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex flex-col items-center justify-center z-50">
      
      

      <div className="flex gap-4 item">

        <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center justify-center gap-6 mt-4">

        <img
          src={images[index]}
          alt="Case Study"
          className="w-[400px] h-[400px] object-cover"
        />

      </div>

      <div className="mt-4 text-black flex items-center justify-between  gap-4 text-sm px-4">
                <button onClick={prevImage} className="text-white cursor-pointer rounded-md px-2 bg-black hover:scale-110 transition-transform">&#8592;</button>

        {index + 1} / {images.length}
                <button onClick={nextImage} className="text-white cursor-pointer rounded-md px-2 bg-black hover:scale-110 transition-transform">&#8594;</button>

      </div>

      </div>


      <div className="mt-4">
        <button onClick={onClose} className="text-black cursor-pointer bg-gray-200 px-4 rounded-sm text-3xl hover:scale-110 transition-transform">&times;</button>
      </div>

      </div>

      
    </div>
  );
};

export default SocialMediaModal;
