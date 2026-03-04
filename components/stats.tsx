'use client'

import { SectionBackground } from '@/components/section-background'
import { Anchor, ShieldCheck, Sun, Timer } from 'lucide-react'

const stats = [
  {
    icon: ShieldCheck,
    value: '5-Year',
    label: 'Warranty Coverage',
    detail: 'Applied once for years of protection and reduced haul-out cycles.',
  },
  {
    icon: Sun,
    value: '3000-Hour',
    label: 'UV Tested',
    detail: 'Verified performance retention under harsh sun exposure.',
  },
  {
    icon: Anchor,
    value: '850 PSI',
    label: 'Bond Strength',
    detail: 'High-adhesion system built for long-term durability.',
  },
  {
    icon: Timer,
    value: 'Power-Washable',
    label: 'Simple Upkeep',
    detail: 'Maintain clean hulls even underwater to minimize downtime.',
  },
]

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#000c18] py-20 lg:py-24">
      <SectionBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Performance Metrics</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white">
              Proven protection engineered for marine environments.
            </h2>
            <p className="text-sm md:text-base text-white/70">
              Key performance markers that define Aquaphobix technology when applied by Ocean Armour USA’s certified team.
            </p>
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-white/55">
            Broward & Palm Beach Counties
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-[1px] shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              >
                <div className="h-full rounded-2xl bg-[#001826]/80 p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                      <Icon className="h-5 w-5 text-[#6ed0ff]" />
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Metric</span>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="text-2xl font-semibold text-white">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                    <p className="text-sm text-white/60">{stat.detail}</p>
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
