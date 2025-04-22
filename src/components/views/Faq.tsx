// pages/faq.tsx
'use client'

import HeroBanner from '@/components/UI/HeroBanner'
import FaqBanner from '@/components/UI/FaqBanner'

export default function Faq() {
  return (
    <>
      <HeroBanner
        title="Preguntas Frecuentes"
        subtitle="Resolviendo tus dudas legales"
        description="Aquí encontrarás las respuestas a las preguntas más comunes sobre nuestros servicios."
        buttonText="Contáctanos"
      />
      <FaqBanner />
    </>
  )
}
