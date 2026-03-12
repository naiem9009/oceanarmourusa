import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SectionBackground } from '@/components/section-background'
import { ArrowRight, Mail, Phone } from 'lucide-react'

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-[#000c18] py-24 lg:py-28">
      <SectionBackground />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-[#00B4D8]/30 bg-[#00B4D8]/10 p-[1px] shadow-[0_40px_90px_rgba(0,180,216,0.2)]">
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
                  Schedule a free consultation on Aquaphobix application, shipyard prep requirements, and performance
                  expectations for your fleet.
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

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#00B4D8]/35 bg-[#00B4D8]/12 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00B4D8]/25">
                      <Phone className="h-5 w-5 text-[#9feeff]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/60">Call us</p>
                      <p className="font-semibold break-words">561-569-0936</p>
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
                        href="mailto:oceanarmour@gmail.com"
                        className="font-semibold break-words transition hover:text-[#6ed0ff]"
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
      </div>
    </section>
  )
}
