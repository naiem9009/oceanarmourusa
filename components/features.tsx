
const features = [
  {
    title: '5-Year Warranty',
    description: 'Full coverage protection for your vessel',
    color: '#00B4D8',
  },
  {
    title: 'Zero Biocides',
    description: 'Eco-friendly and environmentally safe',
    color: '#2ECC71',
  },
  {
    title: '3000-Hour UV Tested',
    description: 'Proven durability under sun exposure',
    color: '#00B4D8',
  },
  {
    title: '850 PSI Bond',
    description: 'Superior adhesion strength',
    color: '#2ECC71',
  },
  {
    title: 'Hydrodynamic Design',
    description: 'Improved fuel efficiency and performance',
    color: '#00B4D8',
  },
  {
    title: 'Power-Washable',
    description: 'Easy maintenance and simple upkeep',
    color: '#2ECC71',
  },
]

export function Features() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#003B73] via-[#001a2e] to-[#000c18] py-20 lg:py-28">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60 mb-4">Key Features</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white">
            Professional Marine Protection
          </h2>
        </div>

        {/* Features Grid - Text Based */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-3"
            >
              {/* Colored Line Accent */}
              <div
                className="h-1 w-8 rounded-full"
                style={{ backgroundColor: feature.color }}
              />

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
