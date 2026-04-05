export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#000c18] pt-32 pb-16">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-black/40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.38em] text-white/70">
              <span className="h-2 w-2 rounded-full bg-[#6ed0ff]" />
              Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight">
              Shipyard-grade marine coating services.
            </h1>
            <p className="text-lg text-white/75 leading-relaxed max-w-2xl">
              From haul-out and surface preparation to certified Aquaphobix application, we deliver long-term protection
              tailored to your vessel and substrate requirements.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.28em] text-white/80">
              <span className="rounded-full border border-[#00B4D8]/45 bg-[#00B4D8]/20 px-4 py-2 text-center">Surface Prep</span>
              <span className="rounded-full border border-[#2ECC71]/45 bg-[#2ECC71]/20 px-4 py-2 text-center">Certified Apply</span>
              <span className="rounded-full border border-[#6ed0ff]/45 bg-[#6ed0ff]/20 px-4 py-2 text-center">Quality Control</span>
              <span className="rounded-full border border-[#00B4D8]/35 bg-[#00B4D8]/15 px-4 py-2 text-center">Care Plan</span>
            </div>
          </div>

          <div className="rounded-[32px] border border-[#2ECC71]/30 bg-[#2ECC71]/10 p-[1px] shadow-[0_30px_70px_rgba(46,204,113,0.2)]">
            <div className="rounded-[30px] bg-[#001826]/85 p-6 md:p-8">
              <h3 className="text-xl font-semibold">Service Area</h3>
              <div className="mt-5 space-y-4 text-sm text-white/70">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span>County</span>
                  <span className="text-white">Broward</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span>County</span>
                  <span className="text-white">Palm Beach</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Application</span>
                  <span className="text-white">Professional shipyard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
