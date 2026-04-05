import { AboutHero } from '@/components/about-hero'
import { AboutStory } from '@/components/about-story'
import { AboutTeam } from '@/components/about-team'
import { AboutValues } from '@/components/about-values'
import { CTA } from '@/components/cta'
import type { Metadata } from 'next'
import Script from 'next/script'

const SITE_URL = 'https://oceanarmourusa.com'

export const metadata: Metadata = {
  title: 'About Ocean Armour | Marine Coating Experts',
  description:
    'Learn about Ocean Armour, the licensed Aquaphobix dealer and certified team serving Broward and Palm Beach Counties.',
  keywords: [
    'Ocean Armour about',
    'Aquaphobix certified team',
    'marine coating experts Florida',
    'powder coating company Broward County',
    'marine coating company history',
    'licensed Aquaphobix dealer South Florida',
  ],
  openGraph: {
    title: 'About Ocean Armour | Marine Coating Experts',
    description:
      'Learn about Ocean Armour, the licensed Aquaphobix dealer and certified team serving Broward and Palm Beach Counties.',
    url: `${SITE_URL}/about`,
    type: 'website',
  },
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE_URL}/about` },
  ],
}

export default function AboutPage() {
  return (
    <>
      <Script
        id="schema-breadcrumb-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <CTA />
    </>
  )
}
