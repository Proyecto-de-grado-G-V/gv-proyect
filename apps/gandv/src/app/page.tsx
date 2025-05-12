'use client'

import HeroSection from '@/components/UI/LandingPage/HeroSection'
import ServiceHighlights from '@/components/UI/LandingPage/ServiceHighlights'
import FloatingCart from '@/components/UI/FloatingChat'
import HeroBanner from '@/components/UI/LandingPage/HeroBanner'
import AboutUs from '@/components/UI/LandingPAge/AboutUs';
import PracticeAreas from '@/components/UI/LandingPage/PracticeAreas';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Galeria from '@/components/UI/LandingPage/Gallery';
import LawyerSection from '@/components/UI/LandingPage/LawyerSection';
import ContactSection from '@/components/views/ContactSection';
import StatsSection from '@/components/UI/LandingPage/StarsSection';

export default function Page() {

  return (
    <>
      <HeroBanner />
      <ServiceHighlights />
      <AboutUs />
      <Galeria />
      <StatsSection />
      <PracticeAreas />
      <LawyerSection />
      <HeroSection />
      <ContactSection />
      <FloatingCart />
    </>
  )
}
