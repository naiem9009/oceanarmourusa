import { ServicesHero } from '@/components/services-hero'
import { ServicesOfferings } from '@/components/services-offerings'
import { ServicesComparison } from '@/components/services-comparison'
import { Process } from '@/components/process'
import { CTA } from '@/components/cta'
import type { Metadata } from 'next'
import Script from 'next/script'

const SITE_URL = 'https://oceanarmourusa.com'

export const metadata: Metadata = {
  title: 'Services | Ocean Armour | Marine Coating Solutions',
  description:
    'Explore shipyard-grade services from the licensed Aquaphobix dealer, including surface prep, certified application, and maintenance planning.',
  keywords: [
    'marine powder coating services',
    'Aquaphobix application services',
    'marine surface preparation',
    'boat metal coating Fort Lauderdale',
    'marine coating maintenance planning',
    'thermoplastic powder coating services',
    'boat hull blasting South Florida',
    'marine coating warranty',
    'vessel haul out coordination',
    'professional marine coating Broward County',
  ],
  openGraph: {
    title: 'Services | Ocean Armour | Marine Coating Solutions',
    description:
      'Explore shipyard-grade services from the licensed Aquaphobix dealer, including surface prep, certified application, and maintenance planning.',
    url: `${SITE_URL}/services`,
    type: 'website',
  },
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Marine Thermoplastic Powder Coating',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Ocean Armour',
    url: SITE_URL,
  },
  areaServed: [
    { '@type': 'Place', name: 'Broward County, Florida' },
    { '@type': 'Place', name: 'Palm Beach County, Florida' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Marine Coating Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Surface Preparation',
          description: 'Professional marine-grade surface preparation for metal components.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Aquaphobix Certified Application',
          description: 'Certified thermoplastic powder coating application using Aquaphobix products.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Maintenance Planning',
          description: 'Long-term marine coating maintenance consultation and planning.',
        },
      },
    ],
  },
}

export default function ServicesPage() {
  return (
    <>
      <Script
        id="schema-breadcrumb-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="schema-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicesHero />
      <ServicesOfferings />
      <Process />
      <ServicesComparison />
      <CTA />
    </>
  )
}
