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

const statCardStyles = [
  {
    outer: 'border-[#00B4D8]/35 bg-[#00B4D8]/12',
    inner: 'bg-[linear-gradient(160deg,rgba(0,180,216,0.24),rgba(0,24,38,0.82))]',
    icon: 'bg-[#00B4D8]/25 text-[#8de8ff]',
  },
  {
    outer: 'border-[#2ECC71]/35 bg-[#2ECC71]/12',
    inner: 'bg-[linear-gradient(160deg,rgba(46,204,113,0.24),rgba(0,24,38,0.82))]',
    icon: 'bg-[#2ECC71]/25 text-[#9dffc4]',
  },
  {
    outer: 'border-[#6ed0ff]/35 bg-[#6ed0ff]/12',
    inner: 'bg-[linear-gradient(160deg,rgba(110,208,255,0.24),rgba(0,24,38,0.82))]',
    icon: 'bg-[#6ed0ff]/25 text-[#b8ebff]',
  },
  {
    outer: 'border-[#00B4D8]/35 bg-[#00B4D8]/10',
    inner: 'bg-[linear-gradient(160deg,rgba(0,180,216,0.18),rgba(0,24,38,0.82))]',
    icon: 'bg-[#00B4D8]/20 text-[#9feeff]',
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
              Key performance markers that define Aquaphobix technology when applied by Ocean Armour’s certified team.
            </p>
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-white/55">
            Broward & Palm Beach Counties
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            const style = statCardStyles[(index + 1) % statCardStyles.length]
            return (
              <div
                key={stat.label}
                className={`rounded-2xl border p-[1px] shadow-[0_20px_50px_rgba(0,0,0,0.35)] ${style.outer}`}
              >
                <div className={`h-full rounded-2xl p-6 ${style.inner}`}>
                  <div className="flex items-center justify-between">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${style.icon}`}>
                      <Icon className="h-5 w-5" />
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
