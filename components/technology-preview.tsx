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

const pillarCardStyles = [
  {
    outer: 'border-[#00B4D8]/35 bg-[#00B4D8]/10',
    inner: 'bg-[linear-gradient(160deg,rgba(0,180,216,0.2),rgba(0,24,38,0.84))] hover:bg-[linear-gradient(160deg,rgba(0,180,216,0.3),rgba(0,28,44,0.9))]',
    icon: 'bg-[#00B4D8]/25 text-[#9feeff]',
  },
  {
    outer: 'border-[#2ECC71]/35 bg-[#2ECC71]/10',
    inner: 'bg-[linear-gradient(160deg,rgba(46,204,113,0.2),rgba(0,24,38,0.84))] hover:bg-[linear-gradient(160deg,rgba(46,204,113,0.3),rgba(0,28,44,0.9))]',
    icon: 'bg-[#2ECC71]/25 text-[#9dffc4]',
  },
  {
    outer: 'border-[#6ed0ff]/35 bg-[#6ed0ff]/10',
    inner: 'bg-[linear-gradient(160deg,rgba(110,208,255,0.2),rgba(0,24,38,0.84))] hover:bg-[linear-gradient(160deg,rgba(110,208,255,0.3),rgba(0,28,44,0.9))]',
    icon: 'bg-[#6ed0ff]/25 text-[#b8ebff]',
  },
]

export function TechnologyPreview() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#003B73] via-[#001a2e] to-[#000c18] py-24 lg:py-28">
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
              Applied by Ocean Armour in professional shipyard environments, the system delivers hydrodynamic efficiency,
              durable adhesion, and environmental compliance for vessels of every size.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.28em] text-white/80">
              <span className="rounded-full border border-[#00B4D8]/45 bg-[#00B4D8]/20 px-4 py-2 text-center">3000 Hour UV Tested</span>
              <span className="rounded-full border border-[#2ECC71]/45 bg-[#2ECC71]/20 px-4 py-2 text-center">100% Solids</span>
              <span className="rounded-full border border-[#6ed0ff]/45 bg-[#6ed0ff]/20 px-4 py-2 text-center">Zero VOCs</span>
              <span className="rounded-full border border-[#00B4D8]/35 bg-[#00B4D8]/15 px-4 py-2 text-center">Zero Toxic Biocides</span>
              <span className="rounded-full border border-[#2ECC71]/45 bg-[#2ECC71]/20 px-4 py-2 text-center col-span-2">Power-Washable</span>
            </div>

            <Button
              asChild
              className="border border-[#00B4D8] text-white font-semibold rounded-full h-12 px-7 bg-transparent hover:bg-[#00B4D8]/10 transition-colors"
            >
              <Link href="/technology">Explore the Technology</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              const style = pillarCardStyles[(index + 1) % pillarCardStyles.length]
              return (
                <div
                  key={pillar.title}
                  className={`rounded-2xl border p-[1px] shadow-[0_18px_45px_rgba(0,0,0,0.35)] ${style.outer}`}
                >
                  <div className={`h-full rounded-2xl p-5 transition duration-300 ${style.inner}`}>
                    <div className="flex items-center gap-3">
                      <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${style.icon}`}>
                        <Icon className="h-5 w-5" />
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
