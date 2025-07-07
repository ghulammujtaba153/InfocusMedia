"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import CaseStudies from "../CaseStudies"
import ExpertiseSection from "../ExpertiseSection"

const SheikhCaseStudiesContainer = () => {
  const [currentWord, setCurrentWord] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const words = ["design", "imagine"]

  

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

      <ExpertiseSection/>

      
      {/* Sheikh Section as Sticky Background */}
      <div className="sticky top-0 w-full h-screen bg-white z-10">
        <div className="w-full h-full flex flex-col lg:flex-row items-center gap-10 py-20 ">
          <div className="w-full lg:w-1/2">
            <img src="/assets/portrait.png" alt="Portrait" className=" h-full w-full object-contain" />
          </div>
          <div className="w-full lg:w-1/2  text-black font-bandeins-strange lg:text-left">
            <h1 className="text-green-500 font-bold leading-tight text-[100px]">"</h1>
            <h1 className="text-[80px] font-bold leading-tight">The future</h1>
            <h1 className="text-[80px] font-bold leading-tight ">belongs to those</h1>
            <h1 className="text-[80px] font-bold leading-tight">
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
