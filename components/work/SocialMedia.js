"use client";

import React, { useState } from "react";
import SocialMediaModal from "./SocialMediaModal";
import { socialMediaData } from "@/utils/data";

const SocialMedia = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [visibleCount, setVisibleCount] = useState(4); // Show first 4 items initially

  const openModal = (images, index) => {
    setSelectedImages(images);
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const handleToggle = () => {
    if (visibleCount >= socialMediaData.length) {
      setVisibleCount(2); // Collapse
    } else {
      setVisibleCount(socialMediaData.length); // Expand
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full gap-8 ">
        {socialMediaData.slice(0, visibleCount).map((item, index) => (
          <React.Fragment key={index}>
            <div className="w-full h-[1px] bg-gray-200 my-6"></div>

            <div className="flex flex-col-reverse md:flex-row gap-6 w-full">
              <div className="md:w-1/3 w-full flex md:justify-end">
                <div className="flex gap-10 md:gap-0 md:flex-col md:text-right text-left">
                  <p className="text-sm text-gray-500">Client</p>
                  <div className="flex flex-col">
                    <h1 className="text-2xl font-semibold">{item.title}</h1>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {item.image.map((image, idx) => (
                  <img
                    key={idx}
                    onClick={() => openModal(item.image, idx)}
                    src={image}
                    alt={item.title}
                    className="w-full h-[300px] object-cover cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="flex justify-center items-center mt-10">
        <button
          onClick={handleToggle}
          className="bg-black text-white px-6 py-3 cursor-pointer hover:scale-105 transition-transform duration-300 rounded-md font-medium"
        >
          {visibleCount >= socialMediaData.length ? "See Less" : "See More!"}
        </button>
      </div>

      {modalOpen && (
        <SocialMediaModal
          images={selectedImages}
          currentIndex={currentIndex}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default SocialMedia;
