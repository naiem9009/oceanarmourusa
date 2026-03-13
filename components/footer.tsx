import Link from 'next/link'
import { Anchor, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#003B73] via-[#001a2e] to-[#000c18] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,180,216,0.28),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(110,208,255,0.18),transparent_50%),radial-gradient(circle_at_50%_80%,rgba(0,23,45,0.8),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.75))]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(120deg,transparent_0%,transparent_45%,rgba(255,255,255,0.4)_50%,transparent_55%,transparent_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 md:p-8 shadow-[0_40px_90px_rgba(0,0,0,0.45)] md:backdrop-blur">
            <div className="flex items-start justify-between gap-6">
              <div className="max-w-xl space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.38em] text-white/70">
                  <span className="h-2 w-2 rounded-full bg-[#6ed0ff]" />
                  Service Area
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold leading-tight">
                  Broward & Palm Beach
                  <span className="block text-[#6ed0ff]">Marine Coatings</span>
                </h3>
                <p className="text-sm text-white/70">
                  Professional shipyard application. Zero biocides. A 5-year protection system built for speed, efficiency,
                  and clean waterways.
                </p>
              </div>
              <div className="hidden md:flex flex-col gap-3">
                <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.26em] text-white/60">
                  850 PSI Bond
                </span>
                <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.26em] text-white/60">
                  3000-Hour UV
                </span>
                <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.26em] text-white/60">
                  Power-Washable
                </span>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#00B4D8] px-6 text-sm font-semibold text-white transition hover:bg-[#2ECC71]"
              >
                Request a Consultation
              </Link>
              <a
                href="tel:+15615690936"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Call 561-569-0936
              </a>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#00121f]/70 p-6 md:p-8 md:backdrop-blur">
            <Link href="/" className="group flex items-center gap-3" aria-label="Ocean Armour Home">
              <Image
                src={"/images/ocean-armour-logo.webp"}
                alt="Ocean Armour Logo"
                width={88}
                height={88}
                className="h-16 w-16 md:h-20 md:w-20 object-contain"
              />
              <div className="leading-tight">
                <span className="block text-[10px] uppercase tracking-[0.35em] text-white/60">
                  Aquaphobix Licensed Dealer
                </span>
                <span className="block text-lg font-semibold text-white">Ocean Armour</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-white/70">
              Certified Aquaphobix team delivering non-toxic, high-performance protection for vessels of every size.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.26em] text-white/55">
              <span className="rounded-full border border-white/10 px-3 py-1">Zero Biocides</span>
              <span className="rounded-full border border-white/10 px-3 py-1">5-Year Warranty</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Licensed Dealer</span>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/oceanarmour"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-[#00B4D8] hover:bg-[#00B4D8]"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:oceanarmour@gmail.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-[#00B4D8] hover:bg-[#00B4D8]"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h4 className="text-lg md:text-xl font-display font-semibold mb-4">Explore</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="/technology" className="transition hover:text-[#6ed0ff]">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="transition hover:text-[#6ed0ff]">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-[#6ed0ff]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>Ocean Armour</li>
              <li>Aquaphobix Licensed Dealer</li>
              <li>Zero Toxic Biocides</li>
              <li>5-Year Warranty</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#6ed0ff] flex-shrink-0" />
                <a href="tel:+15615690936" className="transition hover:text-[#6ed0ff]">
                  561-569-0936
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-[#6ed0ff] flex-shrink-0 mt-0.5" />
                <a href="mailto:oceanarmour@gmail.com" className="transition hover:text-[#6ed0ff]">
                  Ocean Armour
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#6ed0ff] flex-shrink-0 mt-0.5" />
                <span>Serving Broward & Palm Beach Counties</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
            <p>&copy; {currentYear} Ocean Armour. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy-policy" className="transition hover:text-[#6ed0ff]">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="transition hover:text-[#6ed0ff]">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
