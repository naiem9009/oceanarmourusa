import { Header } from '@/components/header'
import { AboutHero } from '@/components/about-hero'
import { AboutStory } from '@/components/about-story'
import { AboutTeam } from '@/components/about-team'
import { AboutValues } from '@/components/about-values'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Ocean Armour | Marine Coating Experts',
  description: 'Learn about Ocean Armour, the licensed Aquaphobix dealer and certified team serving Broward and Palm Beach Counties.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <Footer />
    </>
  )
}
