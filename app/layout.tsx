import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import { JsonLd } from '@/components/json-ld'
import "./globals.css"

const SITE_URL = 'https://oceanarmourusa.com'
const SITE_NAME = 'Ocean Armour'

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
  title: {
    default: 'Ocean Armour | Aquaphobix Licensed Dealer',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Advanced marine thermoplastic powder coating for Broward and Palm Beach counties. UV stable, 100% solids, and engineered for corrosion resistance.',
  keywords: [
    'marine powder coating',
    'thermoplastic powder coating',
    'Aquaphobix licensed dealer',
    'boat hull coating',
    'marine corrosion protection',
    'Fort Lauderdale marine coating',
    'West Palm Beach boat coating',
    'marine anti-corrosion coating',
    'shipyard-grade coating',
    'eco-friendly marine coating',
    'powder coating South Florida',
    'metal coating marine',
    'boat metal protection',
  ],
  authors: [{ name: 'Ocean Armour' }],
  creator: 'Ocean Armour',
  publisher: 'Ocean Armour',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: 'Ocean Armour | Aquaphobix Licensed Dealer',
    description:
      'Advanced marine thermoplastic powder coating for Broward and Palm Beach counties. UV stable, 100% solids, and engineered for corrosion resistance.',
    siteName: SITE_NAME,
    images: [
      {
        url: '/images/ocean-armour-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Ocean Armour - Advanced Marine Thermoplastic Powder Coating',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ocean Armour | Aquaphobix Licensed Dealer',
    description:
      'Advanced marine thermoplastic powder coating for Broward and Palm Beach counties. UV stable, 100% solids, and engineered for corrosion resistance.',
    images: ['/images/ocean-armour-og.jpg'],
  },

  // verification: {
  //   google: 'your-google-site-verification-code',
  // },
}

export const viewport: Viewport = {
  themeColor: '#003B73',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${manrope.variable} ${cormorant.variable} font-sans antialiased`}>
        <JsonLd />
        {children}
      </body>
    </html>
  )
}
