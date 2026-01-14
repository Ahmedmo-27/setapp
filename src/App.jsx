import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesGrid from './components/FeaturesGrid'
import Testimonial from './components/Testimonial'
import SocialProof from './components/SocialProof'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#26262B'}}>
      {/* Navbar stays in the centered container */}
        <Navbar />
      {/* Hero should span full browser width */}
      <HeroSection />

      {/* Hero-Features transition */}
      <div className="mx-auto container-1440 px-8">
        <main>
          <section className="py-20">
            <FeaturesGrid />
          </section>
        </main>
      </div>

      {/* Video Testimonial Carousel - Full Width and handles the transition to white */}
      <Testimonial/>

      {/* White background section - Blending from Video Testimonial down to Footer */}
      <div className="bg-[#FEFEFE] w-full">
        <main className="mx-auto container-1440 px-8">
          <section className="py-12">
            <SocialProof />
          </section>

          <section className="py-24">
            <FinalCTA />
          </section>
        </main>
      </div>

      <Footer />
    </div>
  )
}
