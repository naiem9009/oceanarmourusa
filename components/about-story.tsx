import { Anchor, ShieldCheck, Sun, Timer } from 'lucide-react'

export function AboutStory() {
  return (
    <section className="relative overflow-hidden bg-[#000c18] py-24 lg:py-28">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6 text-white">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Our Story</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold leading-tight">
              Built for performance, committed to clean waterways.
            </h2>
            <p className="text-lg text-white/75">
              Ocean Armour is the licensed Aquaphobix dealer and certified team for Broward and Palm Beach
              Counties, delivering a high-performance alternative to traditional antifouling paints.
            </p>
            <p className="text-base text-white/65">
              Every application is performed in professional shipyard environments after haul-out, bottom cleaning, and
              full surface preparation. The result is a durable, hydrodynamic system that reduces drag and simplifies
              maintenance.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              {
                icon: ShieldCheck,
                title: '5-Year Warranty',
                detail: 'Applied once for years of protection.',
              },
              {
                icon: Anchor,
                title: '850 PSI Bond Strength',
                detail: 'High-adhesion system engineered for durability.',
              },
              {
                icon: Sun,
                title: '3000-Hour UV Tested',
                detail: 'Verified performance retention under harsh sun.',
              },
              {
                icon: Timer,
                title: 'Power-Washable',
                detail: 'Clean the hull even underwater to minimize downtime.',
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                      <Icon className="h-5 w-5 text-[#6ed0ff]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-semibold text-white">{item.title}</h3>
                      <p className="text-sm text-white/70">{item.detail}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
