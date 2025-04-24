'use client'

import HeroSection from '@/components/UI/HeroSection'
import ServiceHighlights from '@/components/UI/ServiceHighlights'
import FloatingCart from '@/components/UI/FloatingChat'
import HeroBanner from '@/components/UI/HeroBanner'
import AboutUs from '@/components/UI/AboutUs';
import AreasDePractica from '@/components/views/AreasDePractica';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Galeria from '@/components/views/Galeria';
import LawyerSection from '@/components/views/LawyerSection';
import ContactSection from '@/components/views/ContactSection';
import StatsSection from '@/components/views/StarsSection';

export default function Page() {

  return (
    <>
      <HeroBanner />
      <ServiceHighlights />
      <AboutUs />
      <Galeria />
      <StatsSection />
      <AreasDePractica />
      <LawyerSection />
      <HeroSection />
      <ContactSection />
      <FloatingCart />
    </>
  )
}
