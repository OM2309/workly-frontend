"use client"

import * as React from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const SCREENS = [
  { image: "/images/1.avif" },
  { image: "/images/2.avif" },
  { image: "/images/3.avif" },
  { image: "/images/4.avif" },
  { image: "/images/5.avif" }
]

export default function Hero() {
  const [activeIndex, setActiveIndex] = React.useState(0)

  // Touch Swipe handlers for mobile interaction
  const touchStartX = React.useRef(0)
  const touchEndX = React.useRef(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (diff > 50) {
      handleNext()
    } else if (diff < -50) {
      handlePrev()
    }
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + SCREENS.length) % SCREENS.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SCREENS.length)
  }

  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex flex-col items-center pt-32 md:pt-36 pb-20 md:pb-28 px-4 z-10">

      {/* Background dot grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10 opacity-60" />
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-zinc-50 to-transparent pointer-events-none -z-10" />

      {/* Hero Content Stack */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center z-10 relative mb-8">
        {/* Two-Line Headline */}
        <h1 className="text-[38px] sm:text-[52px] md:text-[64px] font-sans font-light tracking-tight text-black leading-[1.12] mb-6 max-w-4xl text-center">
          what if finding a shift <br className="hidden sm:inline" /> was as easy as <span className="font-serif italic font-normal text-neutral-900 border-b-2 border-black pb-1">ordering food?</span>
        </h1>

        {/* Subheadline description in one clean line on desktop */}
        <p className="font-sans text-sm sm:text-base text-zinc-500 max-w-3xl mb-10 leading-relaxed text-center px-4">
          {"hirlee is a new local marketplace launching soon. We solve one simple problem: "}
          <span className="text-black font-semibold">{"finding a shift shouldn't take longer than the shift itself."}</span>
        </p>

        {/* Join Waitlist Action Button */}
        <div>
          <Button
            asChild
            className="rounded-full bg-black text-white hover:bg-neutral-800 px-8 py-6.5 text-[15px] font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-[0.98] cursor-pointer"
          >
            <a href="#waitlist">Join waitlist</a>
          </Button>
        </div>
      </div>

      {/* Slider Viewport Container */}
      <div className="relative w-full max-w-[1200px] mx-auto mt-4 flex flex-col items-center overflow-visible">

        {/* Spotlight effect behind the phone */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-neutral-100 rounded-full blur-[100px] opacity-60 pointer-events-none -z-10" />

        {/* Carousel Viewport Wrapper */}
        <div
          className="w-full overflow-hidden py-8 relative flex justify-center h-[520px] sm:h-[580px] md:h-[620px]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Inner container to hold absolute slides */}
          <div className="relative w-full max-w-[200px] sm:max-w-[230px] md:max-w-[260px] h-full flex justify-center items-center">
            {SCREENS.map((slide, idx) => {
              const isActive = activeIndex === idx

              // Calculate difference in wrapping loop of 5
              let diff = idx - activeIndex
              if (diff > 2) diff -= 5
              if (diff < -2) diff += 5

              const isLeft1 = diff === -1
              const isRight1 = diff === 1
              const isLeft2 = diff === -2
              const isRight2 = diff === 2

              let transformStyle = ""
              let opacityStyle = 1
              let blurStyle = ""
              let zIndex = 10

              if (isActive) {
                transformStyle = "scale(1.0) translate3d(0, 0, 0)"
                opacityStyle = 1
                blurStyle = "blur(0px)"
                zIndex = 20
              } else if (isLeft1) {
                transformStyle = "scale(0.85) translate3d(-115%, 0, 0) rotateY(10deg)"
                opacityStyle = 0.55
                blurStyle = "blur(1px)"
                zIndex = 10
              } else if (isRight1) {
                transformStyle = "scale(0.85) translate3d(115%, 0, 0) rotateY(-10deg)"
                opacityStyle = 0.55
                blurStyle = "blur(1px)"
                zIndex = 10
              } else if (isLeft2) {
                transformStyle = "scale(0.7) translate3d(-225%, 0, 0) rotateY(20deg)"
                opacityStyle = 0.25
                blurStyle = "blur(2.5px)"
                zIndex = 5
              } else if (isRight2) {
                transformStyle = "scale(0.7) translate3d(225%, 0, 0) rotateY(-24deg)"
                opacityStyle = 0.25
                blurStyle = "blur(2.5px)"
                zIndex = 5
              } else {
                transformStyle = "scale(0.5) translate3d(0, 0, 0)"
                opacityStyle = 0
                blurStyle = "blur(4px)"
                zIndex = 0
              }

              return (
                <div
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className="absolute w-full h-full select-none cursor-pointer flex justify-center items-center"
                  style={{
                    transform: transformStyle,
                    opacity: opacityStyle,
                    filter: blurStyle,
                    zIndex,
                    transformStyle: "preserve-3d",
                    transition: "all 600ms cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                >
                  {/* Outer container matching the mockup shape with padding to hide screen corner overflow */}
                  <div className="w-full aspect-[433/882] rounded-[38px] sm:rounded-[42px] overflow-hidden bg-white shadow-md border border-zinc-100 p-[1.5px]">
                    <img
                      src={slide.image}
                      alt=""
                      className="w-full h-full object-cover object-top pointer-events-none rounded-[36px] sm:rounded-[40px]"
                    />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Static iPhone mockup image overlay positioned exactly in the center over the active slide */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[230px] md:w-[260px] aspect-[433/882] pointer-events-none z-25">
            <img
              src="/images/iphone.avif"
              alt="iPhone Bezel"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>

          {/* Navigation Arrow Buttons flanking the center iPhone mockup */}
          <button
            onClick={handlePrev}
            className="absolute left-1/2 -translate-x-[210px] sm:-translate-x-[240px] md:-translate-x-[270px] top-1/2 -translate-y-1/2 bg-white hover:bg-neutral-50 text-black border border-neutral-200 rounded-full p-2.5 shadow-md transition-all active:scale-95 cursor-pointer z-30 flex items-center justify-center"
            aria-label="Previous slide"
          >
            <ChevronLeft className="size-4" />
          </button>

          <button
            onClick={handleNext}
            className="absolute left-1/2 translate-x-[170px] sm:translate-x-[200px] md:translate-x-[230px] top-1/2 -translate-y-1/2 bg-white hover:bg-neutral-50 text-black border border-neutral-200 rounded-full p-2.5 shadow-md transition-all active:scale-95 cursor-pointer z-30 flex items-center justify-center"
            aria-label="Next slide"
          >
            <ChevronRight className="size-4" />
          </button>

        </div>
      </div>

    </section>
  )
}
