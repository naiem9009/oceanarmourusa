import Link from 'next/link'
import { SectionBackground } from '@/components/section-background'
import { Droplet, Gauge, ShieldCheck, Wrench, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Wrench,
    title: 'Surface Prep + Pretreatment',
    description: 'Shipyard-grade preparation to maximize adhesion and long-term performance.',
    features: [
      'Haul-out coordination and bottom cleaning',
      'Media blasting and profile verification',
      'Substrate-specific prep plans',
      'Primer recommendations when required',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Aquaphobix Application',
    description: 'Certified application of the licensed Aquaphobix system for full hull coverage.',
    features: [
      'Uniform, controlled application',
      'Adhesion-focused workflow',
      'UV stable, corrosion-resistant finish',
      'Built for long service intervals',
    ],
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    description: 'Hydrodynamic benefits engineered for efficiency and reduced drag.',
    features: [
      'Smooth, low-drag surface',
      'Power-washable maintenance',
      'Reduced downtime over time',
      'Long-term durability',
    ],
  },
  {
    icon: Droplet,
    title: 'Care + Maintenance',
    description: 'Post-application guidance aligned to the technical data sheet.',
    features: [
      'Cleaning schedule recommendations',
      'Inspection and service guidance',
      'Care planning for the warranty period',
      'Operational best practices',
    ],
  },
]

const serviceCardStyles = [
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
  {
    outer: 'border-[#00B4D8]/30 bg-[#00B4D8]/8',
    inner: 'bg-[linear-gradient(160deg,rgba(0,180,216,0.16),rgba(0,24,38,0.84))]',
    icon: 'bg-[#00B4D8]/20 text-[#9feeff]',
    check: 'text-[#9feeff]',
  },
]

export function ServicesOfferings() {
  return (
    <section className="relative overflow-hidden bg-[#000c18] py-24 lg:py-28">
      <SectionBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">Services</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white">
            Shipyard-grade services for every vessel.
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            From surface prep to certified application and maintenance planning, Ocean Armour delivers complete
            Aquaphobix service coverage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const style = serviceCardStyles[(index + 2) % serviceCardStyles.length]
            return (
              <div
                key={service.title}
                className={`rounded-2xl border p-[1px] shadow-[0_22px_55px_rgba(0,0,0,0.35)] ${style.outer}`}
              >
                <div className={`h-full rounded-2xl p-6 md:p-7 ${style.inner}`}>
                  <div className="flex items-center gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${style.icon}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                       <h3 className="text-xl font-display font-semibold text-white">{service.title}</h3>
                      <p className="text-sm text-white/70">{service.description}</p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-3 text-sm text-white/70">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className={`mt-0.5 h-4 w-4 ${style.check}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                   <div className="mt-6">
                     <Button asChild className="bg-[#00B4D8] hover:bg-[#2ECC71] text-white font-semibold rounded-full h-11 px-6">
                       <Link href="/contact">Request a Consultation</Link>
                     </Button>
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
