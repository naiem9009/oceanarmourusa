'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Leaf, ShieldCheck, Sun, Timer } from 'lucide-react'
import heroImage from '@/public/images/hero_oceanarmourusa_boat_work.jpg'

const highlights = [
  {
    title: '5-Year Warranty',
    description: 'Applied once for years of protection with industry-leading coverage.',
    icon: ShieldCheck,
  },
  {
    title: 'Zero Toxic Biocides',
    description: 'No heavy metals, no leaching, and compliant with evolving regulations.',
    icon: Leaf,
  },
  {
    title: '3000-Hour UV Tested',
    description: 'Verified performance retention for sun exposure year after year.',
    icon: Sun,
  },
  {
    title: 'Power-Washable',
    description: 'Clean the surface even underwater to minimize maintenance downtime.',
    icon: Timer,
  },
]

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden pt-32 text-white">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Luxury yacht at sea"
          fill
          priority
          placeholder="blur"
          quality={80}
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
          style={{ objectPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#00111f]/65 via-[#001f3f]/55 to-[#00111f]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(66,177,220,0.22),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl space-y-8">
          <Badge className="bg-white/10 text-white border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.28em]">
            Aquaphobix Licensed Dealer - Broward & Palm Beach Counties
          </Badge>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-semibold leading-[1.05]">
              Advanced Marine Protection.
              <span className="block text-[#6ed0ff]">Built for Performance.</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Ocean Armour USA is the licensed Aquaphobix dealer and certified applicator for Broward and Palm Beach Counties,
              serving vessels from center consoles to superyachts and commercial fleets.
              Applied in professional shipyard environments after haul-out, cleaning, and full surface preparation, this licensed Aquaphobix system is a high-performance
              alternative to antifouling paints with zero toxic biocides, over 850 PSI bond strength, and proven hydrodynamics that reduce drag and improve fuel efficiency.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button asChild size="lg" className="bg-[#00B4D8] hover:bg-[#2ECC71] text-white font-semibold rounded-full h-12 px-7">
              <Link href="/contact">Request a Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 font-semibold rounded-full border-2 h-12 px-7 bg-transparent"
            >
              <Link href="/technology">Explore the Technology</Link>
            </Button>
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
