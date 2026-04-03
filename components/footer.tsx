import Link from 'next/link'
import { Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/oceanarmourusa',
  }
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#003B73] via-[#001a2e] to-[#000c18] text-white">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="mb-28 mt-6 rounded-[32px] border border-[#00B4D8]/30 bg-[#00B4D8]/10 p-[1px] shadow-[0_40px_90px_rgba(0,180,216,0.2)]">
          <div className="rounded-[30px] bg-[#001826]/85 p-8 md:p-12 text-white md:backdrop-blur">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#00B4D8]/45 bg-[#00B4D8]/20 px-3 py-1 text-[10px] uppercase tracking-[0.38em] text-white/80">
                  <span className="h-2 w-2 rounded-full bg-[#6ed0ff]" />
                  Get Started
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold leading-tight">
                  Protect your vessel and lock in long-term performance.
                </h2>
                <p className="text-lg text-white/70">
                  Schedule a free consultation on Aquaphobix application, shipyard prep requirements, and performance expectations for your fleet.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#00B4D8] hover:bg-[#2ECC71] text-white font-semibold rounded-full h-12 px-8 w-full sm:w-auto"
                  >
                    <Link href="/contact">
                      Request a Consultation
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 font-semibold rounded-full border-2 h-12 px-8 bg-transparent w-full sm:w-auto"
                  >
                    <a href="tel:+15615690936">Call 561-569-0936</a>
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
                <div className="rounded-2xl border border-[#00B4D8]/35 bg-[#00B4D8]/12 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00B4D8]/25">
                      <Phone className="h-5 w-5 text-[#9feeff]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/60">Call us</p>
                      <p className="text-sm font-semibold break-words">561-569-0936</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-[#2ECC71]/35 bg-[#2ECC71]/12 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2ECC71]/25">
                      <Mail className="h-5 w-5 text-[#9dffc4]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/60">Email us</p>
                      <a
                        href="mailto:oceanarmourusa@gmail.com"
                        className="text-sm font-semibold break-words transition hover:text-[#6ed0ff]"
                      >
                        Ocean Armour
                      </a>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-[#6ed0ff]/35 bg-[#6ed0ff]/12 p-5 sm:col-span-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6ed0ff]/25">
                      <ArrowRight className="h-5 w-5 text-[#b8ebff]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/60">Service Area</p>
                      <p className="font-semibold">Broward & Palm Beach Counties</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-4">
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
              <li>Eco-Friendly</li>
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
                <a href="mailto:oceanarmourusa@gmail.com" className="transition hover:text-[#6ed0ff]">
                  Ocean Armour
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#6ed0ff] flex-shrink-0 mt-0.5" />
                <span>Serving Broward & Palm Beach Counties</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-display font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/20 bg-white/5 text-white/70 transition-all duration-300 hover:bg-[#00B4D8]/20 hover:border-[#00B4D8]/50 hover:text-[#6ed0ff]"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
            <p className="mt-4 text-sm text-white/60">
              Connect with us on social media for updates and insights.
            </p>
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
