import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import TestimonialsStats from "@/components/landing/TestimonialsStats";
import HowItWorks from "@/components/landing/HowItWorks";
import FAQ from "@/components/landing/FAQ";
import WaitlistSection from "@/components/landing/WaitlistSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-primary-fixed selection:text-on-primary-fixed-variant">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col w-full">
        {/* Hero Section */}
        <Hero />
        
        {/* Testimonials & Stats Grid */}
        <TestimonialsStats />
        
        {/* How It Works Section */}
        <HowItWorks />
        
        {/* FAQ Section */}
        <FAQ />
        
        {/* Waitlist Section */}
        <WaitlistSection />
      </main>

      {/* Footer Block */}
      <Footer />
    </div>
  );
}
