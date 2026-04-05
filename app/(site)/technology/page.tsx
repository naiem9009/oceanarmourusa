import { AquaphobixSection } from '@/components/aquaphobix-section'
import { TechnologyOverview } from '@/components/technology-overview'
import { TechnologyComparison } from '@/components/technology-comparison'
import { CTA } from '@/components/cta'
import type { Metadata } from 'next'
import Script from 'next/script'

const SITE_URL = 'https://oceanarmourusa.com'

export const metadata: Metadata = {
  title: 'Aquaphobix Technology | Ocean Armour',
  description:
    'Explore Aquaphobix thermoplastic powder coating technology with UV stability, 100% solids, and corrosion resistance.',
  keywords: [
    'Aquaphobix technology',
    'thermoplastic powder coating',
    'UV stable marine coating',
    '100% solids coating',
    'marine corrosion resistance',
    'eco-friendly powder coating',
    'thermoplastic vs epoxy marine',
    'polyethylene copolymer coating',
    'low-temperature powder coating marine',
    'marine coating ASTM standards',
  ],
  openGraph: {
    title: 'Aquaphobix Technology | Ocean Armour',
    description:
      'Explore Aquaphobix thermoplastic powder coating technology with UV stability, 100% solids, and corrosion resistance.',
    url: `${SITE_URL}/technology`,
    type: 'website',
  },
  alternates: {
    canonical: `${SITE_URL}/technology`,
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Technology', item: `${SITE_URL}/technology` },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Aquaphobix Thermoplastic Powder Coating',
  description:
    'Functionalized polyethylene copolymer thermoplastic powder coating engineered for marine corrosion protection. 100% solids, UV stable, with 5000+ hours salt fog resistance.',
  brand: {
    '@type': 'Brand',
    name: 'Aquaphobix',
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'Aquaphobix',
  },
  category: 'Marine Coatings',
  material: 'Polyethylene Copolymer',
  additionalProperty: [
    { '@type': 'PropertyValue', name: 'UV Stability', value: '3000+ hours tested' },
    { '@type': 'PropertyValue', name: 'Solids Content', value: '100%' },
    { '@type': 'PropertyValue', name: 'VOC Content', value: 'Zero VOCs' },
    { '@type': 'PropertyValue', name: 'Salt Fog Resistance', value: '5000 hours (ASTM B117)' },
    { '@type': 'PropertyValue', name: 'Adhesion (Steel)', value: '>1200 PSI (ASTM D4541)' },
    { '@type': 'PropertyValue', name: 'Impact Resistance', value: '>140 in./lbs (ASTM B2794)' },
    { '@type': 'PropertyValue', name: 'Melting Point', value: '208°F (ASTM D3418)' },
    { '@type': 'PropertyValue', name: 'Hardness', value: 'Shore D 42' },
  ],
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    areaServed: [
      { '@type': 'Place', name: 'Broward County, Florida' },
      { '@type': 'Place', name: 'Palm Beach County, Florida' },
    ],
    seller: {
      '@type': 'Organization',
      name: 'Ocean Armour',
    },
  },
}

export default function TechnologyPage() {
  return (
    <>
      <Script
        id="schema-breadcrumb-technology"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="schema-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <AquaphobixSection />
      <TechnologyOverview />
      <TechnologyComparison />
    </>
  )
}
