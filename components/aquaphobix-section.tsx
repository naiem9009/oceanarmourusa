"use client"

import Image from 'next/image'

export function AquaphobixSection() {
  return (
    <section className="relative py-10 sm:py-16 lg:py-20 bg-gradient-to-br from-[#003B73] via-[#001a2e] to-[#000c18] mt-10">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#00B4D8]/10 blur-3xl" />
        <div className="absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-[#2ECC71]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Center content */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Logo and branding */}
          <div className="flex flex-col items-center gap-3 mb-6">
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
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
            We're proud to partner with Aquaphobix, the industry-leading thermoplastic powder coating solution. Our expert application of Aquaphobix technology provides unmatched durability, environmental responsibility, and long-term hull protection for your vessel.
          </p>

        </div>
      </div>
    </section>
  )
}
