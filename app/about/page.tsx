import { Header } from '@/components/header'
import { AboutHero } from '@/components/about-hero'
import { AboutStory } from '@/components/about-story'
import { AboutTeam } from '@/components/about-team'
import { AboutValues } from '@/components/about-values'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Ocean Armour USA | Marine Coating Experts',
  description: 'Learn about Ocean Armour USA, the licensed Aquaphobix dealer and certified applicator serving Broward and Palm Beach Counties.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <CTA />
      <Footer />
    </>
  )
}
