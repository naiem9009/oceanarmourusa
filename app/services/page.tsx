import { Header } from '@/components/header'
import { ServicesHero } from '@/components/services-hero'
import { ServicesOfferings } from '@/components/services-offerings'
import { ServicesComparison } from '@/components/services-comparison'
import { Process } from '@/components/process'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Ocean Armour USA | Marine Coating Solutions',
  description: 'Explore shipyard-grade services from the licensed Aquaphobix dealer, including surface prep, certified application, and maintenance planning.',
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <ServicesHero />
      <ServicesOfferings />
      <Process />
      <ServicesComparison />
      <CTA />
      <Footer />
    </>
  )
}
