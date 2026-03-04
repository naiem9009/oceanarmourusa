import { Header } from '@/components/header'
import { FaqsHero } from '@/components/faqs-hero'
import { Faqs } from '@/components/faqs'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQs | Ocean Armour USA',
  description:
    'Get answers to common questions about Aquaphobix technical data, application requirements, and service areas.',
}

export default function FaqsPage() {
  return (
    <>
      <Header />
      <FaqsHero />
      <Faqs showHeader={false} />
      <CTA />
      <Footer />
    </>
  )
}
