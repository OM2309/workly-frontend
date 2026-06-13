"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  const roles = [
    { title: "UI/UX Designer", dotColor: "bg-primary" },
    { title: "Web Developer", dotColor: "bg-primary-container" },
    { title: "3D Artist", dotColor: "bg-on-primary-fixed-variant" },
    { title: "HR Specialist", dotColor: "bg-primary" },
    { title: "Data Entry", dotColor: "bg-primary-container" },
    { title: "Bartender", dotColor: "bg-on-primary-fixed-variant" },
    { title: "Event Server", dotColor: "bg-primary" },
    { title: "Hotel Receptionist", dotColor: "bg-primary-container" },
    { title: "Barista", dotColor: "bg-on-primary-fixed-variant" }
  ]

  return (
    <section id="cta-section" className="bg-surface-container-low py-24 px-4 overflow-hidden relative flex flex-col items-center text-center border-b border-outline-variant/20 scroll-mt-6">
      {/* Background Soft Glow */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-fixed/20 rounded-full blur-[120px] -z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-display-lg text-primary font-bold tracking-tight mb-6 max-w-2xl leading-[1.15]">
          Unlock Your Career Potential
        </h2>
        
        <p className="text-body-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
          Join Worket today. Build your profile, explore premium openings in your area, and take full control of your working schedule.
        </p>

        <Button
          asChild
          className="bg-primary text-white font-bold rounded-full px-8 py-6 h-12 hover:bg-primary/95 transition-all duration-300 active:scale-[0.98] text-body-md"
        >
          <a href="#how-it-works-workers" className="text-white flex items-center gap-2">
            Get Started
            <ArrowRight className="size-4" />
          </a>
        </Button>

        {/* Role Cloud */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mt-16">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="bg-white border border-outline-variant/30 px-5 py-2.5 rounded-full flex items-center gap-2 text-label-md font-bold text-primary shadow-sm transition-all duration-300 hover:scale-105 hover:border-primary/20 cursor-default"
            >
              <span className={`w-2.5 h-2.5 rounded-full ${role.dotColor}`} />
              <span>{role.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
