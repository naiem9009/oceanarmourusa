import Image from 'next/image'
import Link from 'next/link'
import { SectionBackground } from '@/components/section-background'
import { Button } from '@/components/ui/button'
import { ShieldCheck, Sun, Leaf, Anchor, Droplet } from 'lucide-react'

const stats = [
  {
    icon: ShieldCheck,
    value: '100% Solids',
    label: 'Formulation',
    detail: 'With no VOCs or solvents',
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
    value: 'Works On',
    label: 'Aluminum, Steel',
    detail: 'Fiberglass',
    color: '#00B4D8',
    highlight: true,
  }
]

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#003B73] via-[#001a2e] to-[#000c18] py-10 lg:py-20">
      <SectionBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Logo */}
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
          <div className="mb-10">
            <Image
              src="/images/AQUAPHOBIX_LOGO.png"
              alt="Aquaphobix Logo"
              width={200}
              height={80}
              className="w-72 h-20 sm:w-56 sm:h-36 lg:w-80 lg:h-40 object-contain mx-auto"
            />
          </div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/60 mb-4">Discover the Aquaphobix Advantage</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">
            Proven protection engineered for marine environments.
          </h2>
          <p className="text-sm md:text-base text-white/70">
            Key performance markers that define Aquaphobix technology when applied by Ocean Armour's certified team.
          </p>
        </div>

        {/* Stats Grid - 6 Boxes */}
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
                  {stat.detail && (
                    <p className="text-sm sm:text-base font-semibold text-white/80 leading-relaxed mt-1">
                      {stat.detail}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <Button asChild className="rounded-full bg-[#00B4D8] hover:bg-[#0095b8] text-white font-semibold px-8 py-3 transition-colors">
            <Link href="/technology">
              Explore the Technology
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
