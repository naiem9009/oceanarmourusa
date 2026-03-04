import { SectionBackground } from '@/components/section-background'
import { Leaf, ShieldCheck, Timer, Wrench } from 'lucide-react'

const values = [
  {
    icon: ShieldCheck,
    title: 'Certified Quality',
    description: 'Shipyard-grade prep, certified application, and documented quality control.',
  },
  {
    icon: Leaf,
    title: 'Clean Waterways',
    description: 'Zero toxic biocides and heavy metals with compliance in mind.',
  },
  {
    icon: Timer,
    title: 'Long-Term Performance',
    description: 'Durable adhesion and UV stability for years of protection.',
  },
  {
    icon: Wrench,
    title: 'Practical Maintenance',
    description: 'Power-washable surfaces that reduce downtime and service cost.',
  },
]

export function AboutValues() {
  return (
    <section className="relative overflow-hidden bg-[#000c18] py-24 lg:py-28">
      <SectionBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">Values</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white">
            The principles behind every application.
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            These values guide how Ocean Armour USA delivers cleaner, longer-lasting marine protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div key={value.title} className="rounded-2xl border border-white/10 bg-white/5 p-[1px] shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
                <div className="h-full rounded-2xl bg-[#001826]/80 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <Icon className="h-6 w-6 text-[#6ed0ff]" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{value.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{value.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
