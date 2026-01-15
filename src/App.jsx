import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

// Lazy load below-the-fold components
const FeaturesGrid = lazy(() => import('./components/FeaturesGrid'))
const Testimonial = lazy(() => import('./components/Testimonial'))
const SocialProof = lazy(() => import('./components/SocialProof'))
const FinalCTA = lazy(() => import('./components/FinalCTA'))
const Footer = lazy(() => import('./components/Footer'))

export default function App() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#26262B'}}>
      <Navbar />
      <HeroSection />

      <Suspense fallback={<div className="h-40 bg-[#26262B]" />}>
        {/* Hero-Features transition */}
        <div className="mx-auto container-1440 px-4 md:px-8">
          <main>
            <section className="py-12 md:py-20">
              <FeaturesGrid />
            </section>
          </main>
        </div>

        {/* Video Testimonial Carousel - Full Width and handles the transition to white */}
        <Testimonial/>

        {/* White background section - Blending from Video Testimonial down to Final CTA */}
        <div className="bg-[#FEFEFE] w-full">
          <main className="mx-auto container-1440 px-4 md:px-8">
            <section className="py-12">
              <SocialProof />
            </section>
          </main>
          
          {/* Final CTA with split background for transition to Footer */}
          <FinalCTA />
        </div>

        <Footer />
      </Suspense>
    </div>
  )
}
