import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SectionBackground } from '@/components/section-background'

const aquaphobixSite = 'https://aquaphobix.com'
const dataSheetUrl = '/assets/022026-aquaphobix-tech-data-sheet.pdf'

export function TechnologyHero() {
  return (
    <section className="relative overflow-hidden bg-[#000c18] pt-32 pb-20">
      <SectionBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.38em] text-white/70">
              <span className="h-2 w-2 rounded-full bg-[#6ed0ff]" />
              Technology
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight">
              Aquaphobix Technical Overview
            </h1>
            <p className="text-lg text-white/75">
              Thermoplastic powder coating engineered for marine environments with UV stability, strong adhesion, and
              corrosion resistance.
            </p>
            <p className="text-base text-white/65">
              100% solids, no VOCs, and designed for low-temperature application on aluminum, steel, fiberglass, and
              composite substrates.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.28em] text-white/60">
              <span className="rounded-full border border-white/15 px-4 py-2 text-center">100% Solids</span>
              <span className="rounded-full border border-white/15 px-4 py-2 text-center">UV Stable</span>
              <span className="rounded-full border border-white/15 px-4 py-2 text-center">Low-Temp Apply</span>
              <span className="rounded-full border border-white/15 px-4 py-2 text-center">Corrosion Guard</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <Button asChild className="bg-[#00B4D8] hover:bg-[#2ECC71] text-white font-semibold rounded-full h-12 px-7">
                <Link href="/contact">Request a Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-semibold rounded-full border-2 h-12 px-7 bg-transparent"
              >
                <a href={aquaphobixSite} target="_blank" rel="noreferrer">
                  Visit Aquaphobix
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-[1px] shadow-[0_30px_70px_rgba(0,0,0,0.45)]">
            <div className="rounded-[30px] bg-[#001826]/85 p-7 md:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-white">Technical Data Sheet</h2>
                  <p className="mt-2 text-sm text-white/70">
                    Performance specifications, application requirements, and handling guidance.
                  </p>
                </div>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/60">
                  PDF
                </span>
              </div>
              <div className="mt-6 grid gap-3 text-xs uppercase tracking-[0.28em] text-white/60">
                <span className="rounded-full border border-white/15 px-4 py-2 text-center">ASTM Tested</span>
                <span className="rounded-full border border-white/15 px-4 py-2 text-center">Marine Grade</span>
                <span className="rounded-full border border-white/15 px-4 py-2 text-center">Application Specs</span>
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
      </div>
    </section>
  )
}
