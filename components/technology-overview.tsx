const colorOptions = [
  { name: 'White', color: '#ffffff' },
  { name: 'Black', color: '#000000' },
  { name: 'Light Gray', color: '#919095' },
  { name: 'Light Blue', color: '#8fadd2' },
  { name: 'Dark Blue', color: null, comingSoon: true },
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
        <div className="max-w-3xl mx-auto text-center space-y-6 text-white">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold leading-tight">
            A breakthrough in marine coating technology.
          </h3>
          <p className="text-lg text-white/75">
            Aquaphobix is a functionalized polyethylene copolymer thermoplastic powder coating engineered to deliver
            long-lasting corrosion protection in marine environments.
          </p>
          <p className="text-base text-white/65">
            100% solids, UV stable, and designed for low-temperature application on aluminum, mild steel, galvanized
            steel, fiberglass, and composite substrates.
          </p>
        </div>

        {/* Color Rectangles Section */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
            {colorOptions.map((option) => (
              <div key={option.name} className="flex flex-col items-center gap-3">
                <div
                  className={`w-full h-40 rounded-xl border border-white/20 shadow-[0_8px_20px_rgba(0,0,0,0.25)] ${
                    option.comingSoon ? 'bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center' : ''
                  }`}
                  style={option.color ? { backgroundColor: option.color } : undefined}
                >
                  {option.comingSoon && (
                    <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                      Coming Soon
                    </span>
                  )}
                </div>
                <span className="text-base text-white/70 font-medium">{option.name}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-white/60">
            Ask about custom options for premium yacht finishes.
          </p>
        </div>
      </div>
    </section>
  )
}