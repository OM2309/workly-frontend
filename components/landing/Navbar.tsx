"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="absolute top-12 left-0 right-0 z-50 w-full max-w-[1300px] mx-auto px-12 md:px-20">
      <div className="flex items-center justify-between">
        {/* Brand & Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* Stylized organic leaf/flower icon */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-[#b0f0d6] transition-transform duration-300 group-hover:scale-105"
          >
            <path d="M12 2C12 2 14.5 7 19 9C14.5 11 12 16 12 16C12 16 9.5 11 5 9C9.5 7 12 2 12 2Z" />
            <path
              d="M12 8C12 8 13.25 11 15.5 12C13.25 13 12 16 12 16C12 16 10.75 13 8.5 12C10.75 11 12 8 12 8Z"
              className="text-[#d3ac64] fill-current"
            />
          </svg>
          <span className="text-headline-md font-bold tracking-tight text-white transition-colors duration-300">
            Workly
          </span>
        </Link>

        {/* Right Action Button */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            className="rounded-full px-5 py-1 h-8 text-label-sm font-bold active:scale-[0.98] transition-all duration-300 bg-white hover:bg-white/90 text-[#003527] border border-white/20"
          >
            <a href="#cta-section">Early Access</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
