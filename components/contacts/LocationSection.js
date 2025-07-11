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

        <img src="/image-contact.png" className="w-full h-full object-contain" alt="map" />

        =
      </div>
  )
}

export default LocationSection
