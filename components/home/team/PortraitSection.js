"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import CaseStudies from "../CaseStudies"
import ExpertiseSection from "../ExpertiseSection"

const SheikhCaseStudiesContainer = () => {
  const [currentWord, setCurrentWord] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const words = ["design", "imagine"]

  // Typing effect
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
    <section className="relative">

      {/* Expertise section covers portrait first */}
        <div className="min-h-screen bg-white">
          <ExpertiseSection />
        </div>

      {/* Sticky Portrait Section */}
      <div className="sticky top-0 h-screen w-full -z-10">
        <div className="w-full h-full flex flex-col lg:flex-row items-center gap-10 py-20 bg-white">
          <div className="w-full lg:w-1/2">
            <img src="/assets/portrait.png" alt="Portrait" className="h-full w-full object-contain" />
          </div>
          <div className="w-full lg:w-1/2 text-black font-bandeins-strange lg:text-left">
            <h1 className="text-green-500 font-bold leading-tight text-[100px]">"</h1>
            <h1 className="text-[90px] font-bold leading-tight">The future</h1>
            <h1 className="text-[90px] font-bold leading-tight">belongs to those</h1>
            <h1 className="text-[90px] font-bold leading-tight">
              who can <span className="text-green-500">{displayText}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-green-500"
              >
                |
              </motion.span>
            </h1>
            <p className="font-bold text-[22px] leading-3 uppercase">– H.H. Sheikh Mohammed bin Rashid Al Maktoum</p>
          </div>
        </div>
      </div>

      {/* Foreground Sections */}
      <div className="relative z-10">
        

        {/* Then portrait is revealed and CaseStudies scrolls over */}
        <div className="min-h-screen bg-white">
          <CaseStudies />
        </div>
      </div>

    </section>
  )
}

export default SheikhCaseStudiesContainer
