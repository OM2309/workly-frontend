"use client"

import { Building, User } from "lucide-react"

export default function HowItWorks() {
  const venueSteps = [
    {
      number: 1,
      title: "Post a Job",
      description: "Define the role, dress code, rate, and hourly duration. Publish in under 60 seconds."
    },
    {
      number: 2,
      title: "Review Applicants",
      description: "Browse verified, high-rating independent workers with ready-to-go credentials."
    },
    {
      number: 3,
      title: "Hire & Pay",
      description: "Approve the timesheets and pay securely online through a streamlined direct transfer."
    }
  ]

  const workerSteps = [
    {
      number: 1,
      title: "Create a Profile",
      description: "Build your digital professional CV, verify background checks, and add your skills."
    },
    {
      number: 2,
      title: "Apply to Jobs",
      description: "Discover local venue listings, apply to the shifts matching your schedule with one tap."
    },
    {
      number: 3,
      title: "Get Hired",
      description: "Complete your shift, earn custom bonuses, and receive payments directly to your bank."
    }
  ]

  return (
    <section className="bg-surface-container-low py-24 px-4 md:px-10 border-y border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-display-lg text-primary font-bold tracking-tight">
            How Workly Works
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-4">
            A premium two-sided experience designed to be fluid and natural, like a modern collaborative workspace.
          </p>
        </div>

        {/* 2-Col Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* For Venues Track */}
          <div id="how-it-works-venues" className="bg-white border border-outline-variant/30 rounded-[32px] p-8 md:p-10 transition-colors duration-300 hover:border-primary/20">
            {/* Track Header */}
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-outline-variant/20">
              <div className="w-12 h-12 rounded-full bg-primary-fixed text-primary flex items-center justify-center shrink-0 shadow-sm shadow-primary/10">
                <Building className="size-5" />
              </div>
              <h3 className="text-headline-md font-bold text-primary">For Venues</h3>
            </div>

            {/* Steps list */}
            <div className="relative space-y-10 pl-4">
              {/* Connecting line */}
              <div className="absolute left-[31px] top-4 bottom-4 w-0.5 bg-outline-variant/30 -z-0" />
              
              {venueSteps.map((step, idx) => (
                <div key={idx} className="relative z-10 flex gap-6 items-start group">
                  {/* Step Number Circle */}
                  <div className="w-8 h-8 rounded-full bg-primary-fixed text-primary font-bold flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-body-md font-bold text-primary mb-1">
                      {step.title}
                    </h4>
                    <p className="text-body-md text-on-surface-variant leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* For Workers Track */}
          <div id="how-it-works-workers" className="bg-white border border-outline-variant/30 rounded-[32px] p-8 md:p-10 transition-colors duration-300 hover:border-primary/20">
            {/* Track Header */}
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-outline-variant/20">
              <div className="w-12 h-12 rounded-full bg-primary-fixed text-primary flex items-center justify-center shrink-0 shadow-sm shadow-primary/10">
                <User className="size-5" />
              </div>
              <h3 className="text-headline-md font-bold text-primary">For Workers</h3>
            </div>

            {/* Steps list */}
            <div className="relative space-y-10 pl-4">
              {/* Connecting line */}
              <div className="absolute left-[31px] top-4 bottom-4 w-0.5 bg-outline-variant/30 -z-0" />
              
              {workerSteps.map((step, idx) => (
                <div key={idx} className="relative z-10 flex gap-6 items-start group">
                  {/* Step Number Circle */}
                  <div className="w-8 h-8 rounded-full bg-primary-fixed text-primary font-bold flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-body-md font-bold text-primary mb-1">
                      {step.title}
                    </h4>
                    <p className="text-body-md text-on-surface-variant leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
