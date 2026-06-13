"use client"

import * as React from "react"
import { MessageSquare, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  const [activeItem, setActiveItem] = React.useState<string>("item-1")

  const faqItems = [
    {
      value: "item-1",
      question: "How fast can I staff a shift?",
      answer: "You can publish a shift in under 60 seconds. Our matchmaking algorithm starts linking local qualified professionals immediately, often filling shifts within a few hours."
    },
    {
      value: "item-2",
      question: "Are the workers on Workly insured and vetted?",
      answer: "Yes, absolutely. Every professional on our platform undergoes background checks, credentials vetting, and is covered under our platform liability insurance during their shifts."
    },
    {
      value: "item-3",
      question: "Can I hire workers for permanent roles?",
      answer: "Yes. Workly is a great way to try out staff before making long-term offers. If you find a worker who fits your team perfectly, we have simple paths to bring them on full-time."
    },
    {
      value: "item-4",
      question: "How do payments and timesheets work?",
      answer: "Workers check in and out using the Workly app. Once the shift is completed, you approve the digital timesheet, and payment is processed securely via credit card or direct bank deposit."
    }
  ]

  return (
    <section id="faq" className="bg-white py-24 px-4 md:px-10 max-w-[1280px] mx-auto scroll-mt-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-display-lg text-primary font-bold tracking-tight">
          Got Questions? We've Got Answers
        </h2>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-4">
          Everything you need to know about navigating the Workly ecosystem.
        </p>
      </div>

      {/* 12-Col Grid */}
      <div className="grid grid-cols-12 gap-8 items-start">
        
        {/* Accordion Left (7 cols) */}
        <div className="col-span-12 md:col-span-7">
          <Accordion 
            type="single" 
            collapsible 
            value={activeItem} 
            onValueChange={(val) => setActiveItem(val)}
            className="w-full"
          >
            {faqItems.map((item) => {
              const isOpen = activeItem === item.value
              return (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className={`border rounded-xl px-5 mb-4 transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-primary-container border-transparent text-white"
                      : "bg-white border-outline-variant/30 text-primary"
                  }`}
                >
                  <AccordionTrigger 
                    className={`text-body-md font-bold py-4 hover:no-underline flex justify-between items-center w-full transition-colors ${
                      isOpen ? "text-white" : "text-primary"
                    }`}
                  >
                    <span>{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent 
                    className={`text-body-md leading-relaxed pb-4 transition-colors ${
                      isOpen ? "text-on-primary-container" : "text-on-surface-variant"
                    }`}
                  >
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>

        {/* Support Card Right (5 cols) */}
        <div className="col-span-12 md:col-span-5 bg-primary-container text-white rounded-[32px] p-8 md:p-10 border border-outline-variant/30 transition-all duration-300 hover:border-primary/20">
          <div className="w-12 h-12 rounded-full bg-primary-fixed text-primary flex items-center justify-center mb-6">
            <MessageSquare className="size-5" />
          </div>
          
          <h3 className="text-headline-md font-bold mb-4 leading-tight">
            Do you have more questions?
          </h3>
          
          <p className="text-body-md text-on-primary-container mb-8 leading-relaxed">
            Talk directly to our partnership team. We can set up a custom onboarding call, walk you through the app, and answer any questions specific to your venue.
          </p>

          <Button
            asChild
            className="w-full bg-white text-primary font-bold py-6 rounded-lg hover:bg-surface-container-low transition-all duration-300 active:scale-[0.98]"
          >
            <a href="mailto:support@workly.com" className="flex items-center justify-center gap-2">
              <PhoneCall className="size-4" />
              Book into a call
            </a>
          </Button>
        </div>

      </div>
    </section>
  )
}
