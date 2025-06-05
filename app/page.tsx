'use client'

import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import FeaturesSection from '@/components/FeaturesSection'
import CurriculumSection from '@/components/CurriculumSection'
import TargetAudienceSection from '@/components/TargetAudienceSection'
import InteractiveStats from '@/components/premium/InteractiveStats'
import TestimonialSection from '@/components/premium/TestimonialSection'
import PricingSection from '@/components/PricingSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/effects/SmoothScroll'
import MouseFollower from '@/components/effects/MouseFollower'
import ParticleField from '@/components/effects/ParticleField'

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen relative">
        <MouseFollower />
        <ParticleField />
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <InteractiveStats />
        <CurriculumSection />
        <TargetAudienceSection />
        <TestimonialSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </SmoothScroll>
  )
}