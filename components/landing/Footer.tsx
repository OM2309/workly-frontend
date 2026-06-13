"use client"

import Link from "next/link"
import { Globe, Share2 } from "lucide-react"

export default function Footer() {
  const resourceLinks = [
    { name: "Find Shifts", href: "#how-it-works-workers" },
    { name: "Post Shifts", href: "#how-it-works-venues" },
    { name: "Venue Onboarding", href: "#how-it-works-venues" },
    { name: "Pricing", href: "#how-it-works-venues" }
  ]

  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Press & Media", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Security Standards", href: "#" }
  ]

  const supportLinks = [
    { name: "Help Center", href: "#faq" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Contact Support", href: "mailto:support@workly.com" }
  ]

  return (
    <footer className="bg-primary text-white pt-24 pb-10 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">

        {/* 4-Col Grid (stacks on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-16">

          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <span className="text-headline-md font-bold text-white tracking-tight">
              Workly
            </span>
            <p className="text-body-md text-white/70 max-w-xs leading-relaxed">
              A physical-first digital space matching premier workers and local venues organically.
            </p>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-label-md uppercase font-bold text-primary-fixed tracking-widest mb-6">
              Resources
            </h4>
            <div className="flex flex-col gap-4">
              {resourceLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-body-md text-white/80 hover:text-white transition-colors duration-300 font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-label-md uppercase font-bold text-primary-fixed tracking-widest mb-6">
              Company
            </h4>
            <div className="flex flex-col gap-4">
              {companyLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-body-md text-white/80 hover:text-white transition-colors duration-300 font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-label-md uppercase font-bold text-primary-fixed tracking-widest mb-6">
              Support
            </h4>
            <div className="flex flex-col gap-4">
              {supportLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-body-md text-white/80 hover:text-white transition-colors duration-300 font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-label-sm text-white/60 font-medium">
            &copy; {new Date().getFullYear()} Workly Technologies Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-white/85">
            <a href="#" className="hover:text-white transition-colors duration-300" aria-label="Globe">
              <Globe className="size-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300" aria-label="Share">
              <Share2 className="size-5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
