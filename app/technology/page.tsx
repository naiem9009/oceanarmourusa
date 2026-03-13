import { Header } from '@/components/header'
import { TechnologyHero } from '@/components/technology-hero'
import { AquaphobixSection } from '@/components/aquaphobix-section'
import { TechnologyOverview } from '@/components/technology-overview'
import { TechnologyComparison } from '@/components/technology-comparison'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aquaphobix Technology | Ocean Armour',
  description:
    'Explore Aquaphobix thermoplastic powder coating technology with UV stability, 100% solids, and corrosion resistance.',
}

export default function TechnologyPage() {
  return (
    <>
      <Header />
      <TechnologyHero />
      <AquaphobixSection />
      <TechnologyOverview />
      <TechnologyComparison />
      <Footer />
    </>
  )
}
