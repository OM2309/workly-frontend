"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "#blog" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-[#E4E4E7] py-4 shadow-xs"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-sans font-bold text-[22px] tracking-tight text-black hover:opacity-80 transition-opacity">
            hirlee
          </span>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-sans text-[15px] font-medium text-[#737373] hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            className="rounded-full bg-black text-white hover:bg-neutral-800 font-medium px-6 py-4.5 transition-all duration-200 shadow-xs active:scale-[0.98] border border-black cursor-pointer"
          >
            <Link href="#download">Join waitlist</Link>
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-black hover:bg-neutral-100 rounded-full"
                aria-label="Toggle Menu"
              >
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-l border-zinc-200 p-6 w-[280px]">
              <SheetHeader className="text-left mb-8 px-0">
                <SheetTitle className="font-sans font-bold text-[22px] tracking-tight text-black">
                  hirlee
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-sans text-[16px] font-medium text-[#737373] hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-6 border-t border-zinc-200 mt-2">
                  <Button
                    asChild
                    className="w-full rounded-full bg-black text-white hover:bg-neutral-800 font-medium py-5 justify-center shadow-xs cursor-pointer"
                  >
                    <Link href="#download">Join waitlist</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
