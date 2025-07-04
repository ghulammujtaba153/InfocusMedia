"use client"

import { useEffect, useRef } from "react"


import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const HeroSection = () => {
  const sectionRef = useRef(null)

  const textRef = useRef(null)

  const whiteOverlayRef = useRef(null)

  const endTextRef = useRef(null)

  const textContainerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create timeline for sequential animations

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,

          start: "top top",

          end: "+=4000",

          scrub: 1,

          pin: true,

          anticipatePin: 1,
        },
      })

      // Set initial states - text positioned to show starting letters
      gsap.set(textRef.current, {
        x: "120vw",
        backgroundPositionX: "-120vw",
      })

      gsap.set(whiteOverlayRef.current, { x: "0%" })

      gsap.set(endTextRef.current, { opacity: 0, y: 50 })

      gsap.set(textContainerRef.current, { opacity: 1 })

      // Animation sequence

      tl

        // 1. Show text container (10% of scroll)

        .to(
          textContainerRef.current,

          {
            opacity: 1,

            ease: "none",

            duration: 0.1,
          },

          0.1,
        )

        // 2. Move text from right to left AND move background position to reveal different parts (10% - 60% of scroll)

        .to(
          textRef.current,

          {
            x: "-100vw",

            backgroundPositionX: "100vw", // Move background position opposite to text movement

            ease: "none",

            duration: 0.5,
          },

          0.1,
        )

        // 3. Hide text container completely (60% of scroll)

        .to(
          textContainerRef.current,

          {
            opacity: 0,

            ease: "none",

            duration: 0.1,
          },

          0.6,
        )

        // 4. Move white overlay from right to left, revealing background (60% - 85% of scroll)

        .to(
          whiteOverlayRef.current,

          {
            x: "-100vw",

            ease: "none",

            duration: 0.25,
          },

          0.6,
        )

        // 5. Show end text (85% - 100% of scroll)

        .to(
          endTextRef.current,

          {
            opacity: 1,

            y: 0,

            ease: "power2.out",

            duration: 0.15,
          },

          0.85,
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Shared background styles to ensure both backgrounds are identical - full size

  const backgroundStyles = {
    backgroundImage: `url(${"/main.png"})`,

    backgroundSize: "cover",

    backgroundPosition: "center",

    backgroundRepeat: "no-repeat",
  }

  return (
    <div ref={sectionRef} className="relative w-screen h-screen overflow-hidden scroll-hide" >
      {/* Fixed background with the image - stays in place */}

      <div className="absolute inset-0" style={backgroundStyles} />

      {/* White overlay that slides from right to left */}

      <div ref={whiteOverlayRef} className="absolute inset-0 bg-white z-10" />

      {/* Text container - centered to show complete text */}

      <div
        ref={textContainerRef}
        className="relative z-20 w-full h-full flex font-bandeins-strange items-center justify-center overflow-visible px-4"
      >
        <h1
          ref={textRef}
          className="relative text-[54vw] md:text-[54vw] lg:text-[54vw] font-bandeins-strange font-bold text-transparent whitespace-nowrap leading-none"
          style={{
            ...backgroundStyles,

            WebkitBackgroundClip: "text",

            backgroundClip: "text",
          }}
        >
            Infocus Media       
        </h1>
      </div>

      <div ref={endTextRef} className="absolute inset-0 z-30 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <img
            src={"/logo-black.png"}
            alt="InFocusMedia Logo"
            className="h-8 w-auto"
            onError={(e) => {
              console.error("Logo failed to load:", e.target.src)

              e.target.style.display = "none"
            }}
          />

          <p className="text-white text-lg md:text-xl font-bandeins-strange lg:text-2xl font-light text-center max-w-4xl px-8 leading-relaxed drop-shadow-lg">
            Born from Emirati soil, our roots run deep and our vision soars high
          </p>
        </div>
      </div>

      {/* Extra scroll space */}

      {/* <div className="h-[200vh] bg-white" /> */}
    </div>
  )
}

export default HeroSection