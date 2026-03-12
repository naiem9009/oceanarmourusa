import { SectionBackground } from '@/components/section-background'
import { Anchor, CheckCircle2, Droplet, ShieldCheck, Wrench } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Consultation & Survey',
    description: 'We evaluate your vessel, usage profile, and goals to define the ideal Aquaphobix solution.',
    icon: Anchor,
  },
  {
    number: '02',
    title: 'Haul-Out & Prep',
    description: 'Professional shipyard cleaning, blasting, and surface preparation for optimal bonding.',
    icon: Droplet,
  },
  {
    number: '03',
    title: 'Certified Application',
    description: 'Certified technicians apply the system for complete, uniform hull coverage.',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'Quality & Care Plan',
    description: 'Final inspection, documentation, and maintenance guidance for years of protection.',
    icon: Wrench,
  },
]

const stepCardStyles = [
  {
    outer: 'border-[#00B4D8]/35 bg-[#00B4D8]/10',
    inner: 'bg-[linear-gradient(160deg,rgba(0,180,216,0.2),rgba(0,24,38,0.84))]',
    icon: 'bg-[#00B4D8]/25 text-[#9feeff]',
    check: 'text-[#8de8ff]',
  },
  {
    outer: 'border-[#2ECC71]/35 bg-[#2ECC71]/10',
    inner: 'bg-[linear-gradient(160deg,rgba(46,204,113,0.2),rgba(0,24,38,0.84))]',
    icon: 'bg-[#2ECC71]/25 text-[#9dffc4]',
    check: 'text-[#9dffc4]',
  },
  {
    outer: 'border-[#6ed0ff]/35 bg-[#6ed0ff]/10',
    inner: 'bg-[linear-gradient(160deg,rgba(110,208,255,0.2),rgba(0,24,38,0.84))]',
    icon: 'bg-[#6ed0ff]/25 text-[#b8ebff]',
    check: 'text-[#b8ebff]',
  },
]

export function Process() {
  return (
    <section className="relative overflow-hidden bg-[#000c18] py-24 lg:py-28">
      <SectionBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Process</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white leading-tight">
              Precision from haul-out to launch.
            </h2>
            <p className="text-lg text-white/70 max-w-2xl">
              A streamlined, shipyard-grade workflow that protects your vessel, minimizes downtime, and keeps performance
              consistent year after year.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.3em] text-white/80">
            <span className="rounded-full border border-[#00B4D8]/45 bg-[#00B4D8]/20 px-4 py-2 text-center">Certified Crew</span>
            <span className="rounded-full border border-[#2ECC71]/45 bg-[#2ECC71]/20 px-4 py-2 text-center">Shipyard Prep</span>
            <span className="rounded-full border border-[#6ed0ff]/45 bg-[#6ed0ff]/20 px-4 py-2 text-center">Quality Control</span>
            <span className="rounded-full border border-[#00B4D8]/35 bg-[#00B4D8]/15 px-4 py-2 text-center">Care Plan</span>
          </div>
        </div>

        <div className="relative mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="pointer-events-none absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-white/10 md:block" />
          {steps.map((step, index) => {
            const Icon = step.icon
            const style = stepCardStyles[(index + 2) % stepCardStyles.length]
            return (
              <div
                key={step.number}
                className={`relative rounded-2xl border p-[1px] shadow-[0_20px_50px_rgba(0,0,0,0.35)] ${style.outer}`}
              >
                <div className={`h-full rounded-2xl p-6 ${style.inner}`}>
                  <div className="flex items-start justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${style.icon}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-3xl font-semibold text-white/30">{step.number}</span>
                  </div>
                  <div className="mt-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className={`h-5 w-5 ${style.check}`} />
                      <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="text-sm text-white/70">{step.description}</p>
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
