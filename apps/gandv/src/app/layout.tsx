'use client'

import Footer from '@/components/UI/LandingPage/Footer'
import Header from '@/components/UI/LandingPage/Header'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import '../styles/globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  const isDashboard = pathname.startsWith('/dashboard')
  const isAuthPage = pathname === '/login' || pathname === '/signup'

  return (
    <html lang="es">
      <body>
        {!isAuthPage && !isDashboard && <Header />}
        <main style={{ flex: 1 }}>{children}</main>
        {!isDashboard && !isAuthPage && <Footer />}
      </body>
    </html>
  )
}
