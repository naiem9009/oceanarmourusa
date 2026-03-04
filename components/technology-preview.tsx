import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SectionBackground } from '@/components/section-background'
import { Anchor, Droplet, Gauge, Leaf, ShieldCheck, Sun } from 'lucide-react'

const pillars = [
  {
    title: 'Zero Toxic Biocides',
    description: 'No heavy metals or leaching, aligned with current and future regulations.',
    icon: Leaf,
  },
  {
    title: '3000-Hour UV Tested',
    description: 'Verified performance retention under harsh sun exposure.',
    icon: Sun,
  },
  {
    title: 'Hydrodynamic Efficiency',
    description: 'Lower drag to improve speed and fuel economy.',
    icon: Gauge,
  },
  {
    title: '850 PSI Bond Strength',
    description: 'High-adhesion system engineered for durability and corrosion resistance.',
    icon: Anchor,
  },
  {
    title: 'Power-Washable',
    description: 'Maintain clean hulls even underwater with simple upkeep.',
    icon: Droplet,
  },
  {
    title: '5-Year Warranty',
    description: 'Applied once for years of protection and reduced haul-out cycles.',
    icon: ShieldCheck,
  },
]

export function TechnologyPreview() {
  return (
    <section className="relative overflow-hidden bg-[#000c18] py-24 lg:py-28">
      <SectionBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.38em] text-white/70">
              <span className="h-2 w-2 rounded-full bg-[#6ed0ff]" />
              Technology
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white leading-tight">
              Aquaphobix technology engineered for clean, long-term marine protection.
            </h2>
            <p className="text-lg text-white/70">
              Applied by Ocean Armour USA in professional shipyard environments, the system delivers hydrodynamic efficiency,
              durable adhesion, and environmental compliance for vessels of every size.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.28em] text-white/60">
              <span className="rounded-full border border-white/15 px-4 py-2 text-center">Zero Biocides</span>
              <span className="rounded-full border border-white/15 px-4 py-2 text-center">850 PSI Bond</span>
              <span className="rounded-full border border-white/15 px-4 py-2 text-center">3000-Hour UV</span>
              <span className="rounded-full border border-white/15 px-4 py-2 text-center">5-Year Warranty</span>
            </div>
            <Button
              asChild
              className="bg-[#00B4D8] hover:bg-[#2ECC71] text-white font-semibold rounded-full h-12 px-7"
            >
              <Link href="/technology">Explore the Technology</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-[1px] shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
                >
                  <div className="h-full rounded-2xl bg-[#001826]/80 p-5 transition duration-300 hover:bg-[#001c2c]">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                        <Icon className="h-5 w-5 text-[#6ed0ff]" />
                      </span>
                      <h3 className="text-base font-semibold text-white">{pillar.title}</h3>
                    </div>
                    <p className="mt-3 text-sm text-white/70">{pillar.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
