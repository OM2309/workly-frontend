"use client"

import * as React from "react"
import { Check, Search, Calendar, User, Bell, Star, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [email, setEmail] = React.useState("")
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [error, setError] = React.useState("")

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes("@") || email.length < 5) {
      setError("Please enter a valid email address.")
      return
    }
    setError("")
    setIsSubmitted(true)
    // Clear field
    setEmail("")
  }

  return (
    <div className="w-full bg-background px-6 pt-6 md:px-12 md:pt-8 pb-0">
      <section className="relative bg-[#003527] text-white pt-44 pb-28 md:pb-36 px-4 overflow-hidden rounded-[24px] md:rounded-[36px] max-w-[1300px] mx-auto border border-white/5 shadow-2xl">
      {/* Background soft glowing lights */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-[#d3ac64]/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#b0f0d6]/10 blur-[150px] pointer-events-none -z-10" />
      
      {/* Tiny subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Main Centered Container */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center z-10 relative">
        

        {/* Heading */}
        <h1 className="text-display-lg md:text-6xl text-white font-extrabold tracking-tight mb-6 max-w-3xl leading-[1.08] font-heading">
          Shifts that fit. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b0f0d6] via-white to-[#d3ac64]">
            Staff you trust.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-body-lg text-white/80 max-w-2xl mb-10 leading-relaxed">
          Workly connects premier hospitality venues with fully-vetted local professionals. Fill shifts in minutes, or work flexible hours on your own terms.
        </p>

        {/* Interactive Waitlist Form Container */}
        <div className="w-full max-w-md mb-12">
          {!isSubmitted ? (
            <form onSubmit={handleWaitlistSubmit} className="flex items-center w-full rounded-full bg-white/5 border border-white/15 p-1.5 focus-within:border-white/30 focus-within:ring-1 focus-within:ring-[#b0f0d6]/35 transition-all duration-300 shadow-lg backdrop-blur-xs">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent px-4 py-2 text-white placeholder-white/40 border-none outline-none text-body-md min-w-0"
              />
              <button
                type="submit"
                className="bg-white hover:bg-white/90 text-[#003527] font-bold rounded-full px-6 py-2 transition-all duration-300 text-label-md shrink-0 active:scale-95 cursor-pointer"
              >
                Join Waitlist
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#b0f0d6]/10 border border-[#b0f0d6]/20 text-[#b0f0d6] font-semibold text-body-md animate-fade-in">
              <Check className="size-5 shrink-0" />
              <span>You're on the list! We'll reach out soon.</span>
            </div>
          )}
          {error && <p className="text-red-300 text-label-sm mt-2 font-medium">{error}</p>}
        </div>


        {/* Centered CSS Phone Mockup (Rising from bottom) */}
        <div className="relative w-full flex justify-center items-end select-none">
          
          {/* Left Floating Card */}
          <div className="absolute right-[calc(50%+160px)] bottom-28 z-20 hidden md:flex items-center gap-3 bg-[#0c2e23]/85 backdrop-blur-md border border-white/10 rounded-2xl p-3 shadow-lg max-w-[190px] hover:scale-105 transition-transform duration-300">
            <span className="w-8 h-8 rounded-full bg-[#b0f0d6]/10 text-[#b0f0d6] flex items-center justify-center shrink-0">
              <Check className="size-4" />
            </span>
            <div className="text-left">
              <p className="text-[11px] font-bold text-white leading-tight">Shift Confirmed</p>
              <p className="text-[9px] text-[#b0f0d6]/80 mt-0.5">Alex M. · Lead Mixologist</p>
            </div>
          </div>

          {/* Right Floating Card (reference-inspired overlay) */}
          <div className="absolute left-[calc(50%+160px)] top-24 z-20 hidden md:flex items-center gap-3 bg-[#0c2e23]/85 backdrop-blur-md border border-white/10 rounded-2xl p-3 shadow-lg max-w-[190px] hover:scale-105 transition-transform duration-300">
            <span className="w-8 h-8 rounded-full bg-[#d3ac64]/10 text-[#d3ac64] flex items-center justify-center shrink-0">
              <Star className="size-4 fill-current" />
            </span>
            <div className="text-left">
              <p className="text-[11px] font-bold text-white leading-tight">Elite Venue</p>
              <p className="text-[9px] text-[#d3ac64] mt-0.5">Annabel's, Mayfair · 5.0★</p>
            </div>
          </div>

          {/* Outer perspective wrapper for 3D tilt */}
          <div className="relative z-10 w-[290px] md:w-[310px] transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 cursor-default group drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)] animate-float-gentle">
            
            {/* iPhone Device Shell */}
            <div className="relative w-full aspect-[433/882] rounded-[50px] border-[9px] border-[#1e2723] bg-[#090b0a] overflow-hidden p-2.5">
              
              {/* Dynamic Island */}
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-black z-30 flex items-center justify-end px-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-900/40" />
              </div>

              {/* Speaker slit */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-white/10 z-30" />

              {/* iPhone screen boundary */}
              <div className="relative size-full rounded-[38px] bg-[#001711] overflow-hidden flex flex-col pt-9 pb-3 px-3 text-left">
                
                {/* Status Bar */}
                <div className="flex justify-between items-center text-[10px] text-white/60 font-semibold px-2 mb-3">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <svg className="w-3.5 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 3c-1.2 0-2.4.2-3.6.7L12 12l3.6-8.3c-1.2-.5-2.4-.7-3.6-.7z" opacity="0.3"/><path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L12 12l7.03 5.61C20.26 16.07 21 14.12 21 12c0-4.97-4.03-9-9-9z"/></svg>
                    <span className="w-4 h-2 border border-white/40 rounded-xs p-0.5 flex items-center"><span className="h-full w-2.5 bg-white/80 rounded-xs" /></span>
                  </div>
                </div>

                {/* App Brand Header */}
                <div className="flex justify-between items-center px-1 mb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="size-5 rounded-md bg-[#b0f0d6] text-[#003527] flex items-center justify-center font-black text-xs">W</span>
                    <span className="text-[14px] font-extrabold tracking-tight text-white">Workly</span>
                  </div>
                  <div className="relative">
                    <Bell className="size-4 text-white/80" />
                    <span className="absolute -top-0.5 -right-0.5 size-1.5 bg-amber-400 rounded-full" />
                  </div>
                </div>

                {/* Search Header */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 mb-4 shadow-inner">
                  <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider mb-1.5">Your Location</p>
                  <div className="flex items-center justify-between text-xs text-white/90">
                    <div className="flex items-center gap-1 font-semibold">
                      <span className="text-[#b0f0d6]">London, Mayfair</span>
                    </div>
                    <Search className="size-3.5 text-white/40" />
                  </div>
                </div>

                {/* App Sections Tabs */}
                <div className="flex gap-1.5 mb-3.5 overflow-x-auto scrollbar-none pb-0.5 text-[10px]">
                  <span className="px-2.5 py-1 rounded-full bg-[#b0f0d6] text-[#003527] font-bold shrink-0">Bartender</span>
                  <span className="px-2.5 py-1 rounded-full bg-white/5 text-white/70 font-semibold border border-white/5 shrink-0">Server</span>
                  <span className="px-2.5 py-1 rounded-full bg-white/5 text-white/70 font-semibold border border-white/5 shrink-0">Hostess</span>
                  <span className="px-2.5 py-1 rounded-full bg-white/5 text-white/70 font-semibold border border-white/5 shrink-0">Chef</span>
                </div>

                {/* Shifts List Title */}
                <p className="text-[11px] text-white/80 font-bold mb-2.5 px-0.5 flex justify-between items-center">
                  <span>Available Shifts Today</span>
                  <span className="text-[9px] text-[#d3ac64] font-medium">8 matches</span>
                </p>

                {/* Programmatic Shift Cards */}
                <div className="flex flex-col gap-2.5 overflow-y-auto scrollbar-none flex-1 pb-4">
                  {/* Card 1 */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/card">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-[12px] font-bold text-white group-hover/card:text-[#b0f0d6] transition-colors">Lead Mixologist</h4>
                        <p className="text-[9px] text-white/60">Annabel's, Mayfair</p>
                      </div>
                      <span className="text-[12px] font-extrabold text-[#b0f0d6]">$45.00/h</span>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
                      <div className="flex items-center gap-1.5">
                        <div className="flex gap-0.5 text-amber-400">
                          <Star className="size-2 fill-current" />
                          <Star className="size-2 fill-current" />
                          <Star className="size-2 fill-current" />
                        </div>
                        <span className="text-[9px] text-white/50">Vetted Venue</span>
                      </div>
                      <span className="text-[9px] font-bold bg-[#b0f0d6]/10 text-[#b0f0d6] px-1.5 py-0.5 rounded-sm">18:00 - 02:00</span>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300 opacity-90">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-[12px] font-bold text-white">VIP Beverage Server</h4>
                        <p className="text-[9px] text-white/60">The Ivy Gardens</p>
                      </div>
                      <span className="text-[12px] font-extrabold text-[#d3ac64]">$38.00/h</span>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
                      <div className="flex items-center gap-1">
                        <ShieldCheck className="size-2.5 text-[#b0f0d6]" />
                        <span className="text-[9px] text-white/50">Instant Match</span>
                      </div>
                      <span className="text-[9px] font-bold bg-white/5 text-white/70 px-1.5 py-0.5 rounded-sm">17:00 - 23:00</span>
                    </div>
                  </div>

                  {/* Card 3 (Peek) */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-3 opacity-40">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-[12px] font-bold text-white">Senior Floor Captain</h4>
                        <p className="text-[9px] text-white/60">Novikov Restaurant</p>
                      </div>
                      <span className="text-[12px] font-extrabold text-white/50">$40.00/h</span>
                    </div>
                  </div>
                </div>

                {/* Navigation Bar inside Phone */}
                <div className="mt-auto pt-2.5 border-t border-white/5 flex justify-around items-center text-white/40 text-[9px]">
                  <div className="flex flex-col items-center gap-0.5 text-[#b0f0d6]">
                    <Search className="size-3.5" />
                    <span>Search</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <Calendar className="size-3.5" />
                    <span>Shifts</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <User className="size-3.5" />
                    <span>Profile</span>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>

      </div>

      </section>
    </div>
  )
}
