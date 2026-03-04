import { SectionBackground } from '@/components/section-background'
import { Anchor, ClipboardCheck, ShieldCheck, Wrench } from 'lucide-react'

const teamAreas = [
  {
    title: 'Certified Applicators',
    description: 'Factory-trained crew delivering consistent, uniform coverage.',
    icon: ShieldCheck,
  },
  {
    title: 'Surface Prep Specialists',
    description: 'Shipyard-grade preparation for optimal adhesion and durability.',
    icon: Wrench,
  },
  {
    title: 'Quality Control',
    description: 'Documentation, inspection, and verification against spec.',
    icon: ClipboardCheck,
  },
  {
    title: 'Project Coordination',
    description: 'Scheduling and logistics aligned with haul-out timelines.',
    icon: Anchor,
  },
]

export function AboutTeam() {
  return (
    <section className="relative overflow-hidden bg-[#000c18] py-24 lg:py-28">
      <SectionBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">Team</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white">
            A crew built for precision.
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Ocean Armour USA combines certified applicators, shipyard prep specialists, and quality control to deliver
            consistent results for every vessel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamAreas.map((area) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-[1px] shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
              >
                <div className="h-full rounded-2xl bg-[#001826]/80 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <Icon className="h-6 w-6 text-[#6ed0ff]" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{area.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{area.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
