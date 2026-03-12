import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Process } from '@/components/process'
import { Stats } from '@/components/stats'
import { TechnologyPreview } from '@/components/technology-preview'
import { Faqs } from '@/components/faqs'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Stats />
      <TechnologyPreview />
      <Process />
      <Faqs limit={4} />
      <CTA />
      <Footer />
    </>
  )
}
