import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ShieldCheck, Sun, Leaf, Anchor, Droplet } from 'lucide-react'

const stats = [
  {
    icon: null,
    value: '100% Eco-Friendly',
    label: 'Certified',
    detail: 'The only certified marine-life-safe product on the market, protecting our oceans.',
    color: '#2ECC71',
    customIcon: true,
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
    <section className="relative overflow-hidden bg-[#000c18] py-20 lg:py-24">

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
          <p className="text-xs uppercase tracking-[0.35em] text-white/75 mb-4">Discover the Aquaphobix Advantage</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">
            Proven protection engineered for marine environments.
          </h2>
          <p className="text-sm md:text-base text-white/70">
            Our coating systems combine cutting-edge marine engineering with environmental responsibility.
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
                  {stat.customIcon ? (
                    <svg 
                      className="w-6 h-6" 
                      viewBox="0 0 576 512" 
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: stat.color }}
                      fill="currentColor"
                    >
                      <path d="M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z" />
                    </svg>
                  ) : Icon ? (
                    <Icon className="w-6 h-6" style={{ color: stat.color }} />
                  ) : null}
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
