"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { waitlistSchema, type WaitlistFormValues, type WaitlistStatus } from "@/types/waitlist"
import { ArrowRight, CheckCircle2, User, Building, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WaitlistSection() {
  const [status, setStatus] = React.useState<WaitlistStatus>("idle")
  const [waitlistNumber, setWaitlistNumber] = React.useState<number>(1420)

  const roles = [
    { title: "UI/UX Designer", dotColor: "bg-primary" },
    { title: "Web Developer", dotColor: "bg-primary-container" },
    { title: "3D Artist", dotColor: "bg-on-primary-fixed-variant" },
    { title: "Bartender", dotColor: "bg-primary" },
    { title: "Event Server", dotColor: "bg-primary-container" },
    { title: "Hotel Receptionist", dotColor: "bg-on-primary-fixed-variant" },
    { title: "Barista", dotColor: "bg-primary" }
  ]

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      role: "worker",
      name: "",
      email: "",
      company: "",
      experience: ""
    }
  })

  const selectedRole = watch("role")

  const onSubmit = async (data: WaitlistFormValues) => {
    setStatus("submitting")
    // Mock API call delay
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setStatus("success")
    setWaitlistNumber((prev) => prev + 1)
  }

  const handleReset = () => {
    reset()
    setStatus("idle")
  }

  return (
    <section id="cta-section" className="bg-surface-container-low py-24 px-4 overflow-hidden relative border-b border-outline-variant/20 scroll-mt-6">
      {/* Background Soft Glow */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-fixed/10 rounded-full blur-[120px] -z-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column (Callout copy & Role cloud, 6 cols) */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <h2 className="text-display-lg text-primary font-bold tracking-tight mb-6 leading-[1.15]">
            Unlock Your Career Potential
          </h2>
          
          <p className="text-body-lg text-on-surface-variant mb-10 leading-relaxed max-w-xl">
            Join the Workly waitlist today. Whether you are a business looking for high-quality workers or a professional seeking flexible shifts, we match your schedule organically.
          </p>

          {/* Role Cloud */}
          <div className="flex flex-wrap items-center gap-3 max-w-xl">
            {roles.map((role, idx) => (
              <div
                key={idx}
                className="bg-white border border-outline-variant/30 px-4 py-2 rounded-full flex items-center gap-2 text-label-sm font-bold text-primary shadow-xs transition-all duration-300 hover:scale-105"
              >
                <span className={`w-2 h-2 rounded-full ${role.dotColor}`} />
                <span>{role.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (Waitlist Form Card, 6 cols) */}
        <div className="lg:col-span-6 w-full max-w-xl mx-auto">
          <div className="bg-white border border-outline-variant/30 rounded-[32px] p-8 md:p-10 shadow-emerald transition-all duration-300 hover:border-primary/20">
            
            {status === "success" ? (
              /* Success State */
              <div className="text-center py-8 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-primary-fixed text-primary flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="size-8 stroke-[2.5]" />
                </div>
                <h3 className="text-headline-md font-bold text-primary mb-3">
                  You're on the list!
                </h3>
                <p className="text-body-md text-on-surface-variant mb-6 max-w-sm mx-auto">
                  Thank you for joining Workly. You are spot **#{waitlistNumber}** on our early access queue. We will reach out as soon as shifts open in your region.
                </p>
                <div className="p-4 bg-surface rounded-xl border border-outline-variant/20 inline-block mb-8">
                  <span className="text-label-sm text-on-surface-variant font-medium uppercase tracking-wider block mb-1">Queue Position</span>
                  <span className="text-headline-md font-extrabold text-primary">#{waitlistNumber}</span>
                </div>
                <div>
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    className="border border-outline-variant rounded-full text-primary font-bold px-6 py-2"
                  >
                    Register Another Email
                  </Button>
                </div>
              </div>
            ) : (
              /* Form State */
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <h3 className="text-headline-md font-bold text-primary mb-2">
                    Join the Waitlist
                  </h3>
                  <p className="text-label-sm text-on-surface-variant">
                    Enter your details below to request early invite access.
                  </p>
                </div>

                {/* Role Toggles (Custom design) */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setValue("role", "worker")}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                      selectedRole === "worker"
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-outline-variant/30 bg-white text-on-surface-variant hover:border-outline-variant/60"
                    }`}
                  >
                    <User className="size-5 shrink-0" />
                    <div>
                      <p className="text-label-md font-bold">Worker</p>
                      <p className="text-[11px] opacity-80">Find shifts</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setValue("role", "venue")}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                      selectedRole === "venue"
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-outline-variant/30 bg-white text-on-surface-variant hover:border-outline-variant/60"
                    }`}
                  >
                    <Building className="size-5 shrink-0" />
                    <div>
                      <p className="text-label-md font-bold">Venue</p>
                      <p className="text-[11px] opacity-80">Hire staff</p>
                    </div>
                  </button>
                </div>

                {/* Name Input */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-label-sm font-bold text-primary">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jane Doe"
                    {...register("name")}
                    className="h-11 w-full border border-outline-variant/40 rounded-lg px-4 bg-surface focus:outline-none focus:border-primary text-body-md transition-colors"
                  />
                  {errors.name && (
                    <p className="text-error text-[13px] font-medium leading-none mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-label-sm font-bold text-primary">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                    {...register("email")}
                    className="h-11 w-full border border-outline-variant/40 rounded-lg px-4 bg-surface focus:outline-none focus:border-primary text-body-md transition-colors"
                  />
                  {errors.email && (
                    <p className="text-error text-[13px] font-medium leading-none mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Conditional Inputs */}
                {selectedRole === "worker" ? (
                  <div className="space-y-1.5 animate-fade-in">
                    <label htmlFor="experience" className="text-label-sm font-bold text-primary">
                      Primary Skill / Role
                    </label>
                    <input
                      id="experience"
                      type="text"
                      placeholder="e.g. Bartender, Barista"
                      {...register("experience")}
                      className="h-11 w-full border border-outline-variant/40 rounded-lg px-4 bg-surface focus:outline-none focus:border-primary text-body-md transition-colors"
                    />
                  </div>
                ) : (
                  <div className="space-y-1.5 animate-fade-in">
                    <label htmlFor="company" className="text-label-sm font-bold text-primary">
                      Venue / Company Name
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="e.g. The Emerald Room"
                      {...register("company")}
                      className="h-11 w-full border border-outline-variant/40 rounded-lg px-4 bg-surface focus:outline-none focus:border-primary text-body-md transition-colors"
                    />
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-primary text-white font-bold py-6 rounded-lg hover:bg-primary/95 transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 shadow-sm disabled:opacity-75"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Join the Waitlist</span>
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </Button>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  )
}
