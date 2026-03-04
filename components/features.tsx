'use client'

import { SectionBackground } from '@/components/section-background'
import { Anchor, Gauge, Leaf, ShieldCheck, Sun, Timer } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: '5-Year Protection System',
    description: 'Single application engineered for long service intervals and reduced haul-out cycles.',
    metric: 'Warranty-backed',
  },
  {
    icon: Leaf,
    title: 'Zero Toxic Biocides',
    description: 'No heavy metals or leaching, compliant with evolving environmental regulations.',
    metric: 'Clean waterways',
  },
  {
    icon: Sun,
    title: '3000-Hour UV Tested',
    description: 'Verified performance retention under harsh sun exposure year after year.',
    metric: 'UV stable',
  },
  {
    icon: Gauge,
    title: 'Hydrodynamic Efficiency',
    description: 'Lower drag for improved fuel efficiency and performance across vessel sizes.',
    metric: 'Reduced drag',
  },
  {
    icon: Anchor,
    title: '850 PSI Bond Strength',
    description: 'High-adhesion coating system built for long-term durability and corrosion resistance.',
    metric: 'High adhesion',
  },
  {
    icon: Timer,
    title: 'Power-Washable Surface',
    description: 'Easy maintenance, even underwater, to minimize downtime and service cost.',
    metric: 'Simple upkeep',
  },
]

export function Features() {
  return (
    <section className="relative overflow-hidden bg-[#000c18] py-24 lg:py-28">
      <SectionBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Aquaphobix Advantage</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white leading-tight">
              A smarter marine coating system for performance and protection.
            </h2>
            <p className="text-lg text-white/70 max-w-2xl">
              Ocean Armour USA delivers licensed Aquaphobix application with proven hydrodynamics,
              long-term durability, and environmentally clean protection.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
            <span className="rounded-full border border-white/15 px-4 py-2 text-center">5-Year Warranty</span>
            <span className="rounded-full border border-white/15 px-4 py-2 text-center">Zero Biocides</span>
            <span className="rounded-full border border-white/15 px-4 py-2 text-center">850 PSI Bond</span>
            <span className="rounded-full border border-white/15 px-4 py-2 text-center">Power-Washable</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-[1px] shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              >
                <div className="h-full rounded-2xl bg-[#001826]/80 p-6 transition duration-300 group-hover:bg-[#001c2c]">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                      <Icon className="h-6 w-6 text-[#6ed0ff]" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                      {feature.metric}
                    </span>
                  </div>
                  <div className="mt-4 space-y-2">
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-white/70">{feature.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
