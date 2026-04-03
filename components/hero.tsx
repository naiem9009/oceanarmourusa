"use client"

import Image from 'next/image'
import { ShieldCheck, Leaf, Sun, Droplet } from 'lucide-react'

const highlights = [
  {
    title: '5-Year Protection System',
    description: 'Single application engineered for long service intervals and reduced haul-out cycles.',
    icon: ShieldCheck,
  },
  {
    title: 'Zero Toxic Biocides',
    description: 'Environmentally safe formula with no heavy metals or leaching.',
    icon: Leaf,
  },
  {
    title: 'Hydrodynamic Efficiency',
    description: 'Reduces drag and improves fuel efficiency across all vessel sizes.',
    icon: Sun,
  },
  {
    title: 'Power-Washable Surface',
    description: 'Easy maintenance even underwater to minimize downtime.',
    icon: Droplet,
  },
]

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden pt-8 sm:pt-12 lg:pt-16 text-white">
      <div className="absolute inset-0">
        <Image
          src={"/images/hero_oceanarmour_boat_work.jpeg"}
          alt="Ocean Armour marine coating application on boat hull"
          fill
          priority
          quality={80}
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
          style={{ objectPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#00111f]/65 via-[#001f3f]/55 to-[#00111f]/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl space-y-8">
          {/* Logo Above Heading */}
          <div className="flex items-center">
            <Image
              src="/images/ocean-armour-logo.webp"
              alt="Ocean Armour Logo"
              width={120}
              height={120}
              className="w-28 h-28 sm:w-36 sm:h-36 lg:w-48 lg:h-48 object-contain"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-semibold leading-[1.05]">
              Advanced Marine Protection.
              <span className="block text-[#6ed0ff]">Built for Performance.</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
              We are the licensed dealer and certified applicator of Aquaphobix, an advanced underwater marine coating system. We specialize in providing this high-performance, eco-friendly alternative to vessels of all sizes in Broward and Palm Beach Counties.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.25)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                    <Icon className="h-5 w-5 text-[#6ed0ff]" />
                  </span>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-white/75">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
