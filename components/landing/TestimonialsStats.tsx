"use client"

import { Star, Quote, ArrowRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function TestimonialsStats() {
  return (
    <section className="py-24 px-4 md:px-10 max-w-[1280px] mx-auto">
      {/* 12-Column Grid (stacks on mobile) */}
      <div className="grid grid-cols-12 gap-6 mb-8">
        
        {/* Testimonial Card (8 cols on desktop, 12 cols on mobile) */}
        <div className="col-span-12 md:col-span-8 flex flex-col justify-between bg-surface-container-low rounded-[32px] border border-outline-variant/30 p-8 md:p-10 transition-colors duration-300 hover:border-primary/20">
          <div>
            {/* Quote Badge */}
            <div className="w-12 h-12 rounded-full bg-primary-fixed text-primary flex items-center justify-center mb-6">
              <Quote className="size-5 fill-primary" />
            </div>
            {/* Blockquote */}
            <blockquote className="text-headline-md italic text-primary leading-relaxed font-semibold mb-8">
              "Workly transformed how we staff our weekend shifts. The quality of independent professionals is outstanding, and the interface works like a physical assistant."
            </blockquote>
          </div>
          
          {/* Author Details */}
          <div className="flex items-center gap-4">
            <Avatar size="lg" className="border border-outline-variant/30">
              <AvatarImage 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&q=80" 
                alt="Sarah Jenkins" 
              />
              <AvatarFallback className="bg-primary-fixed text-primary font-bold">SJ</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-body-md font-bold text-primary">Sarah Jenkins</p>
              <p className="text-label-sm uppercase font-semibold text-on-surface-variant tracking-wider">
                Operations Director, The Emerald Room
              </p>
            </div>
          </div>
        </div>

        {/* App Rating Card (4 cols on desktop, 12 cols on mobile) */}
        <div className="col-span-12 md:col-span-4 flex flex-col items-center justify-center text-center bg-primary text-white rounded-[32px] p-8 md:p-10 border border-outline-variant/30 transition-transform duration-300 hover:scale-[1.01]">
          {/* Rating */}
          <span className="text-5xl md:text-6xl font-bold tracking-tight mb-4 font-heading text-white">
            4.9/5
          </span>
          
          {/* 5-Star Row */}
          <div className="flex items-center gap-1 mb-4 text-[#d3ac64]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="size-6 fill-current" />
            ))}
          </div>
          
          {/* Label */}
          <span className="text-label-sm uppercase font-bold tracking-widest text-primary-fixed">
            App Store Rating
          </span>
        </div>
      </div>

      {/* 3-Column Stats Row (stacks on mobile) */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Stat Card 1 */}
        <div className="col-span-12 sm:col-span-4 flex flex-col items-center justify-center text-center bg-white rounded-[24px] p-8 border border-outline-variant/30 transition-colors duration-300 hover:border-primary/20">
          <span className="text-4xl font-bold tracking-tight text-primary font-heading">
            15,000+
          </span>
          <span className="text-label-sm uppercase font-bold text-on-surface-variant tracking-wider mt-2">
            Shifts Completed
          </span>
        </div>

        {/* Stat Card 2 */}
        <div className="col-span-12 sm:col-span-4 flex flex-col items-center justify-center text-center bg-white rounded-[24px] p-8 border border-outline-variant/30 transition-colors duration-300 hover:border-primary/20">
          <span className="text-4xl font-bold tracking-tight text-primary font-heading">
            98.7%
          </span>
          <span className="text-label-sm uppercase font-bold text-on-surface-variant tracking-wider mt-2">
            Reliability Score
          </span>
        </div>

        {/* CTA Stat Card 3 */}
        <div className="col-span-12 sm:col-span-4 flex flex-col justify-between bg-primary-container text-white rounded-[24px] p-8 border border-outline-variant/30 transition-all duration-300 hover:bg-primary-container/95 group/stat-cta">
          <div className="flex items-center justify-between mb-4">
            <span className="text-label-md uppercase font-bold tracking-widest text-on-primary-container">
              Start Today
            </span>
            <div className="w-8 h-8 rounded-full bg-primary-fixed text-primary flex items-center justify-center transition-transform duration-300 group-hover/stat-cta:translate-x-1">
              <ArrowRight className="size-4" />
            </div>
          </div>
          <div>
            <h3 className="text-headline-md font-bold text-white leading-tight">
              Create free profile
            </h3>
            <p className="text-label-sm text-on-primary-container font-medium mt-1">
              Join thousands of industry professionals
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
