"use client"

import Image from 'next/image'

export function AquaphobixSection() {
  return (
    <section className="relative py-10 sm:py-16 lg:py-20 bg-gradient-to-br from-[#003B73] via-[#001a2e] to-[#000c18]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#00B4D8]/10 blur-3xl" />
        <div className="absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-[#2ECC71]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Center content */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Logo and branding */}
          <div className="flex flex-col items-center gap-6 mb-12">
            <Image
              src="/images/AQUAPHOBIX_LOGO.png"
              alt="Aquaphobix Technology"
              width={200}
              height={80}
              className="w-72 h-20 sm:w-56 sm:h-36 lg:w-80 lg:h-40 object-contain"
            />
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-white leading-tight max-w-3xl">
              Aquaphobix technology engineered for clean, long-term marine protection.
            </h3>

            <div className="flex flex-col items-center gap-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white">
                Aquaphobix
              </h2>
              <p className="text-base sm:text-lg text-[#00B4D8] font-semibold">
                Advanced Thermoplastic Powder Coating System
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">
            We're proud to partner with Aquaphobix, the industry-leading thermoplastic powder coating solution. Our expert application of Aquaphobix technology provides unmatched durability, environmental responsibility, and long-term hull protection for your vessel.
          </p>

          {/* Key benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 w-full">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#00B4D8]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#00B4D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white">Superior Bond</h3>
              <p className="text-sm text-white/60">850 PSI adhesion strength</p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#2ECC71]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#2ECC71]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white">Eco-Friendly</h3>
              <p className="text-sm text-white/60">Zero biocides formula</p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#6ed0ff]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#6ed0ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white">Long-Lasting</h3>
              <p className="text-sm text-white/60">5-year warranty protection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
