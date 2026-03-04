import { SectionBackground } from '@/components/section-background'

const colorOptions = [
  { name: 'Arctic White', color: '#F4F7FB' },
  { name: 'Deep Navy', color: '#0B2D4B' },
  { name: 'Steel Gray', color: '#7B8A9B' },
  { name: 'Ocean Teal', color: '#1C9DB0' },
]

export function TechnologyOverview() {
  return (
    <section className="relative overflow-hidden bg-[#000c18] py-24 lg:py-28">
      <SectionBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6 text-white">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Breakthrough</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold leading-tight">
              A breakthrough in marine coating technology.
            </h2>
            <p className="text-lg text-white/75">
              Aquaphobix is a functionalized polyethylene copolymer thermoplastic powder coating engineered to deliver
              long-lasting corrosion protection in marine environments.
            </p>
            <p className="text-base text-white/65">
              100% solids, UV stable, and designed for low-temperature application on aluminum, mild steel, galvanized
              steel, fiberglass, and composite substrates.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.28em] text-white/60">
              <span className="rounded-full border border-white/15 px-4 py-2 text-center">100% Solids</span>
              <span className="rounded-full border border-white/15 px-4 py-2 text-center">No VOCs</span>
              <span className="rounded-full border border-white/15 px-4 py-2 text-center">UV Stable</span>
              <span className="rounded-full border border-white/15 px-4 py-2 text-center">Low Temp</span>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-[1px] shadow-[0_22px_55px_rgba(0,0,0,0.35)]">
            <div className="rounded-[30px] bg-[#001826]/85 p-6 md:p-7 text-white">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Coating Color Options</h3>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/60">
                  Palette
                </span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {colorOptions.map((option) => (
                  <div key={option.name} className="flex items-center gap-3">
                    <span
                      className="h-11 w-11 rounded-full border border-white/20 shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
                      style={{ backgroundColor: option.color }}
                    />
                    <span className="text-sm text-white/70">{option.name}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-white/60">
                Ask about custom options for premium yacht finishes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
