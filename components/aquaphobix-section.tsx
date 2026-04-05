import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function AquaphobixSection() {
  return (
    <section className="relative py-10 sm:py-16 lg:py-20 bg-gradient-to-br from-[#003B73] via-[#001a2e] to-[#000c18] pt-20">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-3 mb-6">
            <Image
              src="/images/AQUAPHOBIX_LOGO.png"
              alt="Aquaphobix Technology"
              width={200}
              height={80}
              className="w-72 h-20 sm:w-56 sm:h-36 lg:w-80 lg:h-40 object-contain"
            />
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-white leading-tight max-w-3xl">
              Aquaphobix technology engineered for clean, long-term marine protection.
            </h1>
          </div>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
            We&apos;re proud to partner with Aquaphobix, the industry-leading thermoplastic powder coating solution. Our expert application of Aquaphobix technology provides unmatched durability, environmental responsibility, and long-term hull protection for your vessel.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00B4D8] hover:bg-[#00B4D8]/85 px-8 py-3.5 text-base font-semibold text-white transition-colors"
            >
              Request a Consultation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 hover:bg-white/10 px-8 py-3.5 text-base font-semibold text-white transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
