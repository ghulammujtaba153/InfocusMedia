"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import CaseStudies from "../CaseStudies"

const SheikhCaseStudiesContainer = () => {
  const [currentWord, setCurrentWord] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const words = ["design", "imagine"]

  const caseStudiesData = [
    {
      title: "EXPO",
      description: "Expo 2020 Dubai with the Federal Youth Authority",
      image: "/assets/EXPO.jpg",
    },
    {
      title: "COVID-19",
      description: "Educating the World about COVID-19 with the Ministry of Health and Prevention",
      image: "/assets/COVID-19.jpg",
    },
    {
      title: "MAESTRO 7x CAMPAIGN",
      description: "The rebranding campaign for 7X.",
      image: "/assets/MAESTRO.jpg",
    },
  ]

  useEffect(() => {
    const currentWordText = words[currentWord]

    if (!isDeleting) {
      if (displayText.length < currentWordText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentWordText.slice(0, displayText.length + 1))
        }, 150)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 1000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        setIsDeleting(false)
        setCurrentWord((prev) => (prev + 1) % words.length)
      }
    }
  }, [displayText, isDeleting, currentWord, words])

  return (
    <section className=" z-50">
      {/* Sheikh Section as Sticky Background */}
      <div className="sticky top-0 w-full h-screen bg-white z-10">
        <div className="w-full h-full flex flex-col lg:flex-row items-center gap-10 py-20 ">
          <div className="w-full lg:w-1/2">
            <img src="/assets/portrait.png" alt="Portrait" className="max-w-xl w-full object-contain" />
          </div>
          <div className="w-full lg:w-1/2 text-center text-black font-bandeins-strange lg:text-left">
            <p className="text-green-500 text-5xl">"</p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">The future</h1>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">belongs to those</h1>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              who can <span className="text-green-500">{displayText}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                className="text-green-500"
              >
                |
              </motion.span>
            </h1>
            <p className="font-bold text-base">– H.H. Sheikh Mohammed bin Rashid Al Maktoum</p>
          </div>
        </div>
      </div>

      {/* Case Studies Section - Slides over Sheikh */}
      <div className="relative bg-white  z-20 min-h-screen">
        <CaseStudies/>
      </div>
    </section>
  )
}

export default SheikhCaseStudiesContainer
