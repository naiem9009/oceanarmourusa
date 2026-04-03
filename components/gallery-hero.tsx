export function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-[#000c18] pt-32 pb-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.38em] text-white/70">
            <span className="h-2 w-2 rounded-full bg-[#6ed0ff]" />
            Gallery
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight">
            Our Work in Action
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Real vessels. Real results. Browse our portfolio of Aquaphobix applications across Broward and Palm Beach Counties.
          </p>
        </div>
      </div>
    </section>
  )
}
