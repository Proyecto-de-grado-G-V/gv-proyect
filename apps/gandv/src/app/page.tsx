'use client'

import HeroSection from '@/components/UI/LandingPage/HeroSection'
import ServiceHighlights from '@/components/UI/LandingPage/ServiceHighlights'
import FloatingCart from '@/components/UI/FloatingChat'
import HeroBanner from '@/components/UI/LandingPage/HeroBanner'
import AboutUs from '@/components/UI/LandingPage/AboutUs';
import PracticeAreas from '@/components/UI/LandingPage/PracticeAreas';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Galeria from '@/components/UI/LandingPage/Gallery';
import LawyerSection from '@/components/UI/LandingPage/LawyerSection';
import StatsSection from '@/components/UI/LandingPage/StarsSection';
import ContactSection from '@/components/UI/LandingPage/ContactSection'

export default function Page() {

  return (
    <>
      <HeroBanner id="hero" />
      <ServiceHighlights id="services" />
      <AboutUs id="about" />
      <Galeria id="gallery" />
      <StatsSection id="stats" />
      <PracticeAreas id="practice-areas" />
      <LawyerSection id="lawyers" />
      <HeroSection id="hero-section" />
      <ContactSection id="contact" />
      <FloatingCart />
    </>
  )
}
