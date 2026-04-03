import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Process } from '@/components/process'
import { Stats } from '@/components/stats'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      {/* <TechnologyPreview /> */}
      <Process />
      <Footer />
    </>
  )
}
