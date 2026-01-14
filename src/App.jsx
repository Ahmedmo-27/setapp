import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FloatingBadges from './components/FloatingBadges'
import FeaturesGrid from './components/FeaturesGrid'
import JourneySection from './components/JourneySection'
import TestimonialCarousel from './components/TestimonialCarousel'
import SocialProof from './components/SocialProof'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[color:var(--bg)]" style={{backgroundColor: '#26262B'}}>
      {/* Navbar stays in the centered container */}
        <Navbar />
      {/* Hero should span full browser width */}
      <HeroSection />

      {/* Remaining content inside centered container */}
      <div className="mx-auto container-1440 px-8">
        <main>
          <section className="py-20">
            <FeaturesGrid />
          </section>

          <section className="py-20">
            <JourneySection />
          </section>

          <section className="py-20">
            <TestimonialCarousel />
          </section>

          <section className="py-12">
            <SocialProof />
          </section>

          <section className="py-12">
            <FinalCTA />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}
