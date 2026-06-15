import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-accent-pink selection:text-accent-deep">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col w-full">
        {/* Hero Section */}
        <Hero />
      </main>
    </div>
  );
}
