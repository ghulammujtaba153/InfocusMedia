"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const text = textRef.current

    if (!section || !text) return

    // Ensure all fonts are loaded and browser has calculated the text length
    requestAnimationFrame(() => {
      const textWidth = text.getComputedTextLength()
      const viewportWidth = window.innerWidth

      const startX = 0
      const endX = -textWidth + viewportWidth * 0.9

      gsap.set(text, { attr: { x: startX } })

      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=4000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      }).to(text, {
        attr: { x: endX },
        ease: "none",
      })
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <div ref={sectionRef} className="relative w-screen h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/main.png")' }}
      />

      {/* White Mask Layer */}
      <div className="absolute inset-0 z-10">
        <div className="sticky top-0 h-screen">
          <svg className="absolute inset-0 pointer-events-none" width="100%" height="100%">
            <defs>
              <mask
                id="text-mask"
                x="0"
                y="0"
                width="100%"
                height="100%"
                maskUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                <text
                  ref={textRef}
                  x="0"
                  y="60%"
                  dominantBaseline="middle"
                  fontSize="54vw"
                  textAnchor="start"
                  fontWeight="bold"
                  fontFamily="inherit"
                  fill="black"
                  className="whitespace-nowrap"
                >
                  Infocus Media
                  <tspan fontSize="30vw" dy="0.15em">®</tspan>
                </text>
              </mask>
            </defs>

            {/* White overlay with mask */}
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="white"
              mask="url(#text-mask)"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
