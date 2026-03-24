import { SectionBackground } from '@/components/section-background'
import { Button } from './ui/button'

const videoUrl = 'https://www.youtube.com/embed/uPlHbX7BlJY?si=Mnh0KuO0WCPd9Yuy'
const dataSheetUrl = '/assets/022026-aquaphobix-tech-data-sheet.pdf'

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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
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
          <div className="rounded-[32px] border border-[#00B4D8]/30 bg-[#2ECC71]/8 p-[1px] shadow-[0_30px_70px_rgba(0,180,216,0.2)]">
            <div className="rounded-[30px] bg-[#001826]/85 p-7 md:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-white">Technical Data Sheet</h2>
                  <p className="mt-2 text-sm text-white/70">
                    Performance specifications, application requirements, and handling guidance.
                  </p>
                </div>
                <span className="rounded-full border border-[#00B4D8]/45 bg-[#00B4D8]/20 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/80">
                  PDF
                </span>
              </div>
              <div className="mt-6">
                {dataSheetUrl ? (
                  <Button asChild className="bg-[#2ECC71] hover:bg-[#2ECC71]/90 text-white font-semibold rounded-full h-11 px-6">
                    <a href={dataSheetUrl} target="_blank" rel="noreferrer">
                      Download PDF
                    </a>
                  </Button>
                ) : (
                  <div className="rounded-xl border border-dashed border-white/20 bg-white/5 p-4 text-sm text-white/60">
                    Upload the technical data sheet PDF to enable downloads.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-[32px] border border-[#00B4D8]/30 bg-[#00B4D8]/8 p-[1px] shadow-[0_22px_55px_rgba(0,180,216,0.2)]">
            <div className="rounded-[30px] bg-[linear-gradient(160deg,rgba(0,180,216,0.16),rgba(0,24,38,0.86))] p-6 md:p-7 text-white">
              <h3 className="text-xl font-display font-semibold text-white">Key Attributes</h3>
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

          <div className="rounded-[32px] border border-[#2ECC71]/30 bg-[#2ECC71]/8 p-[1px] shadow-[0_22px_55px_rgba(46,204,113,0.18)]">
            <div className="rounded-[30px] p-6 md:p-7 text-white">
              <h3 className="text-xl font-display font-semibold text-white">Performance Properties</h3>
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

        <div className="rounded-[40px] border border-[#00B4D8]/30 bg-[#00B4D8]/8 p-[1px] shadow-[0_30px_70px_rgba(0,180,216,0.2)]">
          <div className="rounded-[38px] bg-[#001826]/85 p-8 md:p-10 text-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-3 w-3 rounded-full bg-[#00B4D8]" />
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Video</p>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-2">Aquaphobix Overview</h3>
            <p className="text-base text-white/70 mb-7">
              See how Aquaphobix marine coating technology delivers superior protection and performance for vessels of all sizes.
            </p>
            {videoUrl ? (
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#000f1d] shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(110,208,255,0.22),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(0,180,216,0.18),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[#00111f]/70" />
                <div className="relative aspect-video">
                  <iframe
                    className="h-full w-full rounded-3xl"
                    src={videoUrl}
                    title="Aquaphobix overview video"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ) : (
              <div className="rounded-3xl border border-dashed border-white/20 bg-white/5 p-12 text-center text-white/60">
                No video available.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
