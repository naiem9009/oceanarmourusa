"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ShieldCheck, Droplet, Zap, Wind } from 'lucide-react'
import heroImage from '@/public/images/hero_oceanarmour_boat_work.jpg'

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#000c18] text-white pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      {/* Logo-inspired gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003B73] via-[#001a2e] to-[#000c18]" />
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#00B4D8]/20 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#2ECC71]/15 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-[#003B73]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 min-h-[calc(100vh-6rem)] flex items-center">
        <div className="grid w-full gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="space-y-8 max-w-2xl">
             <div className="space-y-4">
               <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#00B4D8]">Premium Marine Protection</p>
               <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                 Hull Protection
                 <span className="block text-[#00B4D8]">That Works.</span>
               </h1>
               <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-xl">
                 Professional-grade Aquaphobix coating system for boats that demand durability, performance, and protection.
               </p>
             </div>

            {/* Features Grid - Clean and Simple */}
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00B4D8]/20 flex-shrink-0">
                  <ShieldCheck className="h-5 w-5 text-[#00B4D8]" />
                </div>
                <div>
                  <p className="font-semibold text-white">5-Year Warranty</p>
                  <p className="text-xs text-white/60">Full coverage</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2ECC71]/20 flex-shrink-0">
                  <Droplet className="h-5 w-5 text-[#2ECC71]" />
                </div>
                <div>
                  <p className="font-semibold text-white">Zero Biocides</p>
                  <p className="text-xs text-white/60">Eco-friendly</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6ed0ff]/20 flex-shrink-0">
                  <Zap className="h-5 w-5 text-[#6ed0ff]" />
                </div>
                <div>
                  <p className="font-semibold text-white">850 PSI Bond</p>
                  <p className="text-xs text-white/60">Professional grip</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF6B6B]/20 flex-shrink-0">
                  <Wind className="h-5 w-5 text-[#FF6B6B]" />
                </div>
                <div>
                  <p className="font-semibold text-white">Power-Washable</p>
                  <p className="text-xs text-white/60">Easy maintenance</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-[#00B4D8] hover:bg-[#0095b8] text-white font-semibold rounded-lg h-12 px-8">
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border border-white/30 text-white hover:bg-white/5 font-semibold rounded-lg h-12 px-8 bg-transparent"
              >
                <Link href="/technology">Learn More</Link>
              </Button>
            </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs text-white/60 bg-white/5 rounded-full px-3 py-1.5 border border-white/10">Licensed Dealer</span>
                <span className="text-xs text-white/60 bg-white/5 rounded-full px-3 py-1.5 border border-white/10">Certified Team</span>
                <span className="text-xs text-white/60 bg-white/5 rounded-full px-3 py-1.5 border border-white/10">Broward & Palm Beach</span>
              </div>
            </div>

           {/* Right Image */}
           <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl hidden sm:block">
             <Image
               src={heroImage}
               alt="Ocean Armour marine coating application on boat hull"
               fill
               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
               quality={75}
               priority
               className="object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#000c18]/60 via-transparent to-transparent" />
           </div>
        </div>
      </div>
    </section>
  )
}
