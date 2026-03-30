import { SectionBackground } from '@/components/section-background'

const colorOptions = [
  { name: 'White', color: '#FFFFFF' },
  { name: 'Black', color: '#000000' },
  { name: 'Light Gray', color: '#D3D3D3' },
  { name: 'Light Blue', color: '#ADD8E6' },
]

export function TechnologyOverview() {
  return (
    <section className="relative overflow-hidden bg-[#000c18] py-24 lg:py-28">
      <div className="flex flex-col items-center gap-2 mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white">
          Aquaphobix
        </h2>
        <p className="text-base sm:text-lg text-[#00B4D8] font-semibold">
          Advanced Thermoplastic Powder Coating System
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6 text-white">
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold leading-tight">
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
          </div>

          <div className="rounded-[32px] border border-[#6ed0ff]/30 bg-[#6ed0ff]/8 p-[1px] shadow-[0_22px_55px_rgba(110,208,255,0.2)]">
            <div className="rounded-[30px] bg-[#001826]/85 p-6 md:p-7 text-white">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-display font-semibold">Coating Color Options</h3>
                <span className="rounded-full border border-[#6ed0ff]/45 bg-[#6ed0ff]/20 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/80">
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
