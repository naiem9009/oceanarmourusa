import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function FaqsHero() {
  return (
    <section className="relative overflow-hidden bg-[#000c18] pt-32 pb-16">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.38em] text-white/70">
              <span className="h-2 w-2 rounded-full bg-[#6ed0ff]" />
              Support
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight">
              Answers for owners, captains, and operators.
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Everything you need to know about Aquaphobix performance, shipyard application, and long-term maintenance.
            </p>

          </div>

          <div className="rounded-[32px] border border-[#00B4D8]/30 bg-[#00B4D8]/10 p-[1px] shadow-[0_30px_70px_rgba(0,180,216,0.2)]">
            <div className="rounded-[30px] bg-[#001826]/85 p-6 md:p-8">
              <h3 className="text-xl font-semibold">Quick Facts</h3>
              <div className="mt-5 space-y-4 text-sm text-white/70">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span>Warranty</span>
                  <span className="text-white">5 years</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span>Bond strength</span>
                  <span className="text-white">850 PSI</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span>UV testing</span>
                  <span className="text-white">3000 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Service area</span>
                  <span className="text-white">Broward & Palm Beach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
