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

const valueCardStyles = [
  {
    outer: 'border-[#00B4D8]/35 bg-[#00B4D8]/10',
    inner: 'bg-[linear-gradient(160deg,rgba(0,180,216,0.2),rgba(0,24,38,0.84))]',
    icon: 'bg-[#00B4D8]/25 text-[#9feeff]',
  },
  {
    outer: 'border-[#2ECC71]/35 bg-[#2ECC71]/10',
    inner: 'bg-[linear-gradient(160deg,rgba(46,204,113,0.2),rgba(0,24,38,0.84))]',
    icon: 'bg-[#2ECC71]/25 text-[#9dffc4]',
  },
  {
    outer: 'border-[#6ed0ff]/35 bg-[#6ed0ff]/10',
    inner: 'bg-[linear-gradient(160deg,rgba(110,208,255,0.2),rgba(0,24,38,0.84))]',
    icon: 'bg-[#6ed0ff]/25 text-[#b8ebff]',
  },
  {
    outer: 'border-[#00B4D8]/30 bg-[#00B4D8]/8',
    inner: 'bg-[linear-gradient(160deg,rgba(0,180,216,0.16),rgba(0,24,38,0.84))]',
    icon: 'bg-[#00B4D8]/20 text-[#9feeff]',
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
            These values guide how Ocean Armour delivers cleaner, longer-lasting marine protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            const style = valueCardStyles[(index + 2) % valueCardStyles.length]
            return (
              <div key={value.title} className={`rounded-2xl border p-[1px] shadow-[0_18px_45px_rgba(0,0,0,0.35)] ${style.outer}`}>
                <div className={`h-full rounded-2xl p-6 ${style.inner}`}>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${style.icon}`}>
                    <Icon className="h-6 w-6" />
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
