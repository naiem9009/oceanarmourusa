import { FaqsHero } from '@/components/faqs-hero'
import { Faqs } from '@/components/faqs'
import { CTA } from '@/components/cta'
import { client } from '@/sanity/lib/client'
import type { Metadata } from 'next'
import type { FaqItem } from '@/components/faqs'
import Script from 'next/script'

const SITE_URL = 'https://oceanarmourusa.com'

const faqQuery = `*[_type == "faqItem"] | order(coalesce(order, 9999) asc, _createdAt desc) {
  question,
  answer
}`

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'FAQs | Ocean Armour',
    description:
      'Get answers to common questions about Aquaphobix technical data, application requirements, and service areas.',
    keywords: [
      'Aquaphobix FAQ',
      'marine powder coating questions',
      'thermoplastic coating FAQ',
      'marine coating warranty',
      'powder coating service area',
      'Aquaphobix application process',
      'marine coating maintenance',
      'boat coating durability',
      'eco-friendly marine coating FAQ',
      'Aquaphobix vs epoxy',
    ],
    openGraph: {
      title: 'FAQs | Ocean Armour',
      description:
        'Get answers to common questions about Aquaphobix technical data, application requirements, and service areas.',
      url: `${SITE_URL}/faqs`,
      type: 'website',
    },
    alternates: {
      canonical: `${SITE_URL}/faqs`,
    },
  }
}

async function getFaqs(): Promise<FaqItem[]> {
  try {
    const faqs = await client.fetch<FaqItem[]>(faqQuery, {}, { next: { revalidate: 60 } })
    return faqs
  } catch {
    return []
  }
}

export default async function FaqsPage() {
  const faqs = await getFaqs()

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'FAQs', item: `${SITE_URL}/faqs` },
    ],
  }

  return (
    <>
      <Script
        id="schema-breadcrumb-faqs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqsHero />
      <Faqs faqs={faqs} showHeader={false} showCta />
    </>
  )
}
