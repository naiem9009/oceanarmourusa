import { SectionBackground } from '@/components/section-background'
import { ShieldCheck, Sun, Anchor, Droplet } from 'lucide-react'

const stats = [
  {
    icon: ShieldCheck,
    value: '5-Year',
    label: 'Warranty Coverage',
    detail: 'Applied once for years of protection and reduced haul-out cycles.',
    color: '#00B4D8',
  },
  {
    icon: Sun,
    value: '3000-Hour',
    label: 'UV Tested',
    detail: 'Verified performance retention under harsh sun exposure.',
    color: '#00B4D8',
  },
  {
    icon: Anchor,
    value: '850 PSI',
    label: 'Bond Strength',
    detail: 'High-adhesion system built for long-term durability.',
    color: '#2ECC71',
  },
  {
    icon: Droplet,
    value: 'Zero Biocides',
    label: 'Eco-Friendly',
    detail: 'Environmental responsibility without compromising performance.',
    color: '#2ECC71',
  },
]

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#003B73] via-[#001a2e] to-[#000c18] py-20 lg:py-24">
      <SectionBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">Performance Metrics</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white">
            Proven protection engineered for marine environments.
          </h2>
          <p className="text-sm md:text-base text-white/70">
            Key performance markers that define Aquaphobix technology when applied by Ocean Armour's certified team.
          </p>
        </div>

        {/* Stats Grid - Minimal Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="flex flex-col gap-4 pb-8 border-b border-white/10 md:border-b-0 md:pb-0 last:border-b-0"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: `${stat.color}15`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  {/* Value - Large & Bold */}
                  <div className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-sm sm:text-base font-semibold text-white/80">
                    {stat.label}
                  </div>

                  {/* Detail */}
                  <p className="text-sm text-white/60 leading-relaxed mt-1">
                    {stat.detail}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Location Info - Below Stats */}
        <div className="mt-16 flex justify-end">
          <div className="text-xs uppercase tracking-[0.3em] text-white/55">
            Broward & Palm Beach Counties
          </div>
        </div>
      </div>
    </section>
  )
}
