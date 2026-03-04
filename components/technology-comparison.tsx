import { SectionBackground } from '@/components/section-background'

const attributes = [
  {
    title: 'Material + Formulation',
    points: [
      'Functionalized polyethylene copolymer thermoplastic powder.',
      '100% solids formulation with no VOCs.',
      'UV stable for harsh marine exposure.',
      'Smooth, glossy appearance.',
    ],
  },
  {
    title: 'Application + Efficiency',
    points: [
      'Low-temperature application for heat-sensitive substrates.',
      '92-98% material deposition reduces waste.',
      'Overspray is easier to manage than liquid coatings.',
      'Primers may be required depending on substrate.',
    ],
  },
  {
    title: 'Substrates',
    points: [
      'Aluminum, mild steel, and galvanized steel.',
      'Fiberglass and composite materials.',
      'Pre-treated concrete for containment applications.',
      'Surfaces prepared by blasting or etching.',
    ],
  },
  {
    title: 'Typical Applications',
    points: [
      'Marine environments onshore and offshore.',
      'Water treatment and retention facilities.',
      'Primary and secondary containment.',
      'Corrosion protection in wet or dry locations.',
    ],
  },
]

const performance = [
  {
    title: 'Corrosion Testing',
    points: [
      'Salt fog resistance on steel: 5,000 hours (ASTM B117).',
      'Blistering rating: 10 after 5,000 hours exposure.',
      'Rusting rating: 10 after 5,000 hours exposure.',
      'Rust creepage: 2/6 mm (C* 2.4 avg.).',
    ],
  },
  {
    title: 'Adhesion',
    points: [
      'Steel adhesion >1200 PSI (ASTM D4541, blasted substrate).',
      'Concrete adhesion >868 PSI (ASTM D7234, pre-treated).',
    ],
  },
  {
    title: 'Mechanical',
    points: [
      'Impact resistance >140 in./lbs (ASTM B2794).',
      'Hardness Shore D 42.',
      'Taber abrasion 37.5 mg (ASTM D4060).',
      'Mandrel bend 1/8 in., no cracks (ASTM D522).',
    ],
  },
  {
    title: 'Thermal',
    points: [
      'Melting point 208 F (ASTM D3418).',
      'Vicat softening point 149 F (ASTM D1525).',
    ],
  },
]

export function TechnologyComparison() {
  return (
    <section className="relative overflow-hidden bg-[#000c18] py-24 lg:py-28">
      <SectionBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Data</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white leading-tight">
              Aquaphobix technical highlights.
            </h2>
            <p className="text-lg text-white/70 max-w-2xl">
              Key attributes and performance properties from the technical data sheet.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
            <span className="rounded-full border border-white/15 px-4 py-2 text-center">Material</span>
            <span className="rounded-full border border-white/15 px-4 py-2 text-center">Performance</span>
            <span className="rounded-full border border-white/15 px-4 py-2 text-center">Testing</span>
            <span className="rounded-full border border-white/15 px-4 py-2 text-center">Applications</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 p-[1px] shadow-[0_22px_55px_rgba(0,0,0,0.35)]">
            <div className="rounded-[30px] p-6 md:p-7 text-white">
              <h3 className="text-xl font-semibold text-white">Key Attributes</h3>
              <div className="mt-6 space-y-6">
                {attributes.map((section) => (
                  <div key={section.title} className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">{section.title}</p>
                    <ul className="space-y-2 text-sm text-white/70">
                      {section.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/50" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-[#6ed0ff]/25 p-[1px] shadow-[0_22px_55px_rgba(0,180,216,0.18)]">
            <div className="rounded-[30px] p-6 md:p-7 text-white">
              <h3 className="text-xl font-semibold text-white">Performance Properties</h3>
              <div className="mt-6 space-y-6">
                {performance.map((section) => (
                  <div key={section.title} className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#6ed0ff]">{section.title}</p>
                    <ul className="space-y-2 text-sm text-white/70">
                      {section.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#6ed0ff]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
