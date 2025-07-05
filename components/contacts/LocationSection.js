import React from 'react'

const LocationSection = () => {
  return (
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
  )
}

export default LocationSection
