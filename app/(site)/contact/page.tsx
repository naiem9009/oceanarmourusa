import { Contact } from '@/components/contact'
import type { Metadata } from 'next'
import Script from 'next/script'

const SITE_URL = 'https://oceanarmourusa.com'

export const metadata: Metadata = {
  title: 'Contact Us | Ocean Armour',
  description:
    'Request a free consultation for Aquaphobix marine coating services in Broward and Palm Beach counties.',
  keywords: [
    'marine coating consultation',
    'Aquaphobix quote Fort Lauderdale',
    'powder coating contact West Palm Beach',
    'marine coating estimate',
    'boat coating free consultation',
    'Aquaphobix dealer contact',
    'marine powder coating Broward County',
  ],
  openGraph: {
    title: 'Contact Us | Ocean Armour',
    description:
      'Request a free consultation for Aquaphobix marine coating services in Broward and Palm Beach counties.',
    url: `${SITE_URL}/contact`,
    type: 'website',
  },
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_URL}/contact` },
  ],
}

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Ocean Armour',
  description: 'Request a free consultation for Aquaphobix marine coating services.',
  url: `${SITE_URL}/contact`,
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Ocean Armour',
    telephone: '+1-561-569-0936',
    email: 'oceanarmourusa@gmail.com',
    areaServed: [
      { '@type': 'Place', name: 'Broward County, Florida' },
      { '@type': 'Place', name: 'Palm Beach County, Florida' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-561-569-0936',
      email: 'oceanarmourusa@gmail.com',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
  },
}

export default function ContactPage() {
  return (
    <>
      <Script
        id="schema-breadcrumb-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="schema-contact-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <Contact />
    </>
  )
}
