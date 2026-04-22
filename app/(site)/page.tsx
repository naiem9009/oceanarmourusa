import { Hero } from '@/components/hero'
import { Process } from '@/components/process'
import { Stats } from '@/components/stats'
import { VideoSection } from '@/components/video-section'
import type { Metadata } from 'next'
import Script from 'next/script'

const SITE_URL = 'https://oceanarmourusa.com'

export const metadata: Metadata = {
  title: 'Ocean Armour | Aquaphobix Licensed Dealer',
  description:
    'Advanced marine thermoplastic powder coating for Broward and Palm Beach counties. UV stable, 100% solids, and engineered for corrosion resistance.',
  keywords: [
    'marine powder coating Fort Lauderdale',
    'Aquaphobix dealer South Florida',
    'boat hull powder coating',
    'marine corrosion protection Broward County',
    'thermoplastic coating West Palm Beach',
  ],
  openGraph: {
    title: 'Ocean Armour | Aquaphobix Licensed Dealer',
    description:
      'Advanced marine thermoplastic powder coating for Broward and Palm Beach counties. UV stable, 100% solids, and engineered for corrosion resistance.',
    url: SITE_URL,
    type: 'website',
  },
  alternates: {
    canonical: SITE_URL,
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Hero />
      <Stats />
      <Process />
      <VideoSection />
    </>
  )
}
