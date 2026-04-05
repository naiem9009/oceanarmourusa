import Script from 'next/script'

const SITE_URL = 'https://oceanarmourusa.com'

export function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ocean Armour',
    url: SITE_URL,
    logo: `${SITE_URL}/images/ocean-armour-text-logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-561-569-0936',
      email: 'oceanarmourusa@gmail.com',
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
    sameAs: ['https://www.instagram.com/oceanarmourusa'],
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ocean Armour',
    description:
      'Licensed Aquaphobix dealer providing advanced marine thermoplastic powder coating services for Broward and Palm Beach counties.',
    url: SITE_URL,
    telephone: '+1-561-569-0936',
    email: 'oceanarmourusa@gmail.com',
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'Place',
        name: 'Broward County, Florida',
      },
      {
        '@type': 'Place',
        name: 'Palm Beach County, Florida',
      },
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 26.1224,
        longitude: -80.1373,
      },
      geoRadius: '80000',
    },
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Marine Thermoplastic Powder Coating',
          description:
            'Shipyard-grade Aquaphobix thermoplastic powder coating for marine metals, providing UV stability, 100% solids, and corrosion resistance.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Marine Surface Preparation',
          description:
            'Professional surface preparation for marine metal components before Aquaphobix coating application.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Marine Coating Maintenance Planning',
          description:
            'Consultation and maintenance planning for long-term marine coating performance.',
        },
      },
    ],
    sameAs: ['https://www.instagram.com/oceanarmourusa'],
  }

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ocean Armour',
    url: SITE_URL,
    description:
      'Advanced marine thermoplastic powder coating for Broward and Palm Beach counties.',
    publisher: {
      '@type': 'Organization',
      name: 'Ocean Armour',
    },
    potentialAction: {
      '@type': 'ContactAction',
      target: `${SITE_URL}/contact`,
    },
  }

  return (
    <>
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  )
}
