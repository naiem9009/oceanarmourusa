'use client'

import Link from 'next/link'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { SectionBackground } from '@/components/section-background'

const faqs = [
  {
    question: 'What is Aquaphobix?',
    answer:
      'Aquaphobix is a functionalized polyethylene copolymer thermoplastic powder coating engineered for marine environments and corrosion protection.',
  },
  {
    question: 'What substrates can it be applied to?',
    answer:
      'It is formulated for low-temperature application on aluminum, mild steel, galvanized steel, fiberglass, and composite substrates. Primers may be required.',
  },
  {
    question: 'Is it UV stable and VOC-free?',
    answer:
      'Yes. The technical data sheet lists UV stability and a 100% solids, no VOCs formulation.',
  },
  {
    question: 'What thickness and coverage should I expect?',
    answer:
      'Recommended thickness is 15-20 mils, with theoretical coverage of 10-15 sq ft per lb depending on substrate and conditions.',
  },
  {
    question: 'What surface preparation is required?',
    answer:
      'Substrates should be grit/media blast-cleaned and free of grease, oil, rust, and mill scale. Sanding, grinding, or chemical etching may be required.',
  },
  {
    question: 'How does it perform in corrosion testing?',
    answer:
      'Salt fog resistance on steel is reported after 5,000 hours (ASTM B117), with rust and blistering ratings of 10 and adhesion over 1200 PSI on steel.',
  },
  {
    question: 'How should the product be stored?',
    answer:
      'Store in a clean, dry area below 77 F. Shelf life is listed as infinite when sealed with a desiccant packet.',
  },
  {
    question: 'What service areas do you cover?',
    answer:
      'Ocean Armour is an Aquaphobix licensed dealer for Broward and Palm Beach counties.',
  },
]

const videoUrl = 'https://www.youtube.com/embed/uPlHbX7BlJY?si=Mnh0KuO0WCPd9Yuy'

interface FaqsProps {
  limit?: number
  showCta?: boolean
  showHeader?: boolean
}

export function Faqs({ limit, showCta = false, showHeader = true }: FaqsProps) {
  const visibleFaqs = typeof limit === 'number' ? faqs.slice(0, limit) : faqs

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#003B73] via-[#001a2e] to-[#000c18] py-24 lg:py-28">
      <SectionBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader ? (
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.38em] text-white/70">
                <span className="h-2 w-2 rounded-full bg-[#6ed0ff]" />
                FAQs
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white leading-tight">
                Real answers for real hulls.
              </h2>
              <p className="text-lg text-white/70">
                Clear, technical, and practical guidance on Aquaphobix performance, application, and care.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.3em] text-white/80">
                <span className="rounded-full border border-[#00B4D8]/45 bg-[#00B4D8]/20 px-4 py-2 text-center">Performance</span>
                <span className="rounded-full border border-[#2ECC71]/45 bg-[#2ECC71]/20 px-4 py-2 text-center">Application</span>
                <span className="rounded-full border border-[#6ed0ff]/45 bg-[#6ed0ff]/20 px-4 py-2 text-center">Maintenance</span>
                <span className="rounded-full border border-[#00B4D8]/35 bg-[#00B4D8]/15 px-4 py-2 text-center">Warranty</span>
              </div>
              {showCta && (
                <Button
                  asChild
                  className="bg-[#00B4D8] hover:bg-[#2ECC71] text-white font-semibold rounded-full h-11 px-6"
                >
                  <Link href="/contact">Talk to a Team Member</Link>
                </Button>
              )}
            </div>

            <div className="rounded-[36px] border border-[#6ed0ff]/30 bg-[#6ed0ff]/8 p-[1px] shadow-[0_30px_70px_rgba(110,208,255,0.18)]">
              <div className="rounded-[34px] bg-[#001826]/85 p-6 md:p-8">
                <Accordion type="single" collapsible className="w-full">
                  {visibleFaqs.map((faq, index) => (
                    <AccordionItem key={faq.question} value={faq.question} className="border-white/10">
                      <AccordionTrigger className="text-left text-white hover:text-[#6ed0ff]">
                        <span className="mr-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-white/70">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-white/70">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-[36px] border border-[#6ed0ff]/30 bg-[#6ed0ff]/8 p-[1px] shadow-[0_30px_70px_rgba(110,208,255,0.18)]">
            <div className="rounded-[34px] bg-[#001826]/85 p-6 md:p-8">
              <Accordion type="single" collapsible className="w-full">
                {visibleFaqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={faq.question} className="border-white/10">
                    <AccordionTrigger className="text-left text-white hover:text-[#6ed0ff]">
                      <span className="mr-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-white/70">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-[#2ECC71]/30 bg-[#2ECC71]/10 p-6 md:p-7 text-white">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Need a deeper dive?</h3>
              <span className="rounded-full border border-[#2ECC71]/45 bg-[#2ECC71]/20 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/80">
                Support
              </span>
            </div>
            <p className="mt-3 text-sm text-white/70">
              We can walk you through technical specs, prep requirements, and maintenance planning for your vessel.
            </p>
            {showCta && (
              <Button
                asChild
                className="mt-6 bg-[#00B4D8] hover:bg-[#2ECC71] text-white font-semibold rounded-full h-11 px-6"
              >
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            )}
          </div>

          <div className="rounded-3xl border border-[#00B4D8]/30 bg-[#00B4D8]/8 p-[1px] shadow-[0_20px_50px_rgba(0,180,216,0.2)]">
            <div className="rounded-3xl bg-[#001826]/80 p-6 md:p-7">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-white">Aquaphobix Overview Video</h4>
              </div>
              {videoUrl ? (
                <div className="group relative mt-4 overflow-hidden rounded-2xl border border-white/10 bg-[#000f1d] shadow-[0_18px_45px_rgba(0,0,0,0.4)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(110,208,255,0.22),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(0,180,216,0.18),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[#00111f]/70" />
                  <div className="relative aspect-video">
                    <iframe
                      className="h-full w-full"
                      src={videoUrl}
                      title="Aquaphobix overview video"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              ) : (
                <div className="mt-4 rounded-2xl border border-dashed border-white/20 bg-white/5 p-6 text-sm text-white/60">
                  No video available.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
