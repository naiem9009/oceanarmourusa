import React from "react"
import type { Metadata } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'

import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Ocean Armour | Aquaphobix Licensed Dealer',
  description:
    'Advanced marine thermoplastic powder coating for Broward and Palm Beach counties. UV stable, 100% solids, and engineered for corrosion resistance.',
  themeColor: '#003B73',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${manrope.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
