import React from 'react'

const LocationSection = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
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
  )
}

export default LocationSection
