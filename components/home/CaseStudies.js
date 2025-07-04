"use client"

import Link from "next/link"
import { useState } from "react"

const data = [
  {
    title: "EXPO",
    description: "Expo 2020 Dubai with the Federal Youth Authority",
    image: "/assets/Case studies/EXPO.jpg",
  },
  {
    title: "COVID-19",
    description: "Educating the World about COVID-19 with the Ministry of Health and Prevention",
    image: "/assets/Case studies/COVID-19.jpg",
  },
  {
    title: "MAESTRO 7x CAMPAIGN",
    description: "The rebranding campaign for 7X.",
    image: "/assets/Case studies/MAESTRO.jpg",
  },
]

const CaseStudies = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="relative bg-white py-20 z-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-bandeins-strange text-black text-center mb-12">Case Studies</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col w-full">
              {/* Image Wrapper with Hover Group */}
              <div
                className="relative group overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className={`w-full h-80 object-cover transition-all duration-500 ease-in-out ${
                    hoveredIndex === null
                      ? "scale-100 blur-0"
                      : hoveredIndex === index
                        ? "scale-110 blur-0"
                        : "scale-95 blur-sm"
                  }`}
                />
                {/* Hover Button */}
                <div className="absolute top-[50%] left-[40%]">
                  <button className="flex bg-white px-4 py-2 rounded-md items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
                    Read
                  </button>
                </div>
              </div>
              {/* Title and Description */}
              <div className="mt-4 px-1">
                <h3 className="text-xl font-bandeins-strange font-semibold text-gray-900">
                  {item.title.toUpperCase()}
                </h3>
                <p className="text-gray-700 font-bandeins-strange text-xs">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 font-bandeins-strange">
          <Link href={"/case-studies"} className="bg-black text-white px-6 py-3 cursor-pointer hover:scale-105 transition-transform duration-300 rounded-md font-medium">
            See All
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
