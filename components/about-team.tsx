import { Anchor, ClipboardCheck, ShieldCheck, Wrench } from 'lucide-react'

const teamAreas = [
  {
    title: 'Certified Team',
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

const teamCardStyles = [
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

export function AboutTeam() {
  return (
    <section className="relative overflow-hidden bg-[#000c18] py-24 lg:py-28">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">Team</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white">
            A crew built for precision.
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Ocean Armour combines a certified team, shipyard prep specialists, and quality control to deliver
            consistent results for every vessel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamAreas.map((area, index) => {
            const Icon = area.icon
            const style = teamCardStyles[(index + 1) % teamCardStyles.length]
            return (
              <div
                key={area.title}
                className={`rounded-2xl border p-[1px] shadow-[0_18px_45px_rgba(0,0,0,0.35)] ${style.outer}`}
              >
                <div className={`h-full rounded-2xl p-6 ${style.inner}`}>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${style.icon}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-display font-semibold text-white">{area.title}</h3>
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
