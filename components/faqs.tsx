'use client'

import Link from 'next/link'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

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
    question: 'How does it perform in corrosion testing?',
    answer:
      'Salt fog resistance on steel is reported after 5,000 hours (ASTM B117), with rust and blistering ratings of 10 and adhesion over 1200 PSI on steel.',
  },
  {
    question: 'What service areas do you cover?',
    answer:
      'Ocean Armour is an Aquaphobix licensed dealer for Broward and Palm Beach counties.',
  },
]

interface FaqsProps {
  limit?: number
  showCta?: boolean
  showHeader?: boolean
}

export function Faqs({ limit, showCta = false, showHeader = true }: FaqsProps) {
  const visibleFaqs = typeof limit === 'number' ? faqs.slice(0, limit) : faqs

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#003B73] via-[#001a2e] to-[#000c18] py-24 lg:py-28">

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
                   className="border border-[#00B4D8] text-white font-semibold rounded-full h-11 px-6 bg-transparent hover:bg-[#00B4D8]/10 transition-colors"
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
                      <AccordionTrigger className="text-left text-white hover:text-[#6ed0ff] font-display font-semibold">
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
                    <AccordionTrigger className="text-left text-white hover:text-[#6ed0ff] font-display font-semibold">
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

        <div className="mt-12">
          <div className="rounded-3xl border border-[#2ECC71]/30 bg-[#2ECC71]/10 p-6 md:p-7 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-display font-semibold">Need a deeper dive?</h3>
                <p className="text-sm text-white/70">
                  We can walk you through technical specs, prep requirements, and maintenance planning for your vessel.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+15615690936"
                  className="inline-flex items-center justify-center gap-2 border border-[#00B4D8] text-white font-semibold rounded-full h-11 px-6 bg-transparent hover:bg-[#00B4D8]/10 transition-colors whitespace-nowrap"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Talk to a Team Member
                </a>
                {showCta && (
                  <Button
                    asChild
                    className="border border-[#00B4D8] text-white font-semibold rounded-full h-11 px-6 bg-transparent hover:bg-[#00B4D8]/10 transition-colors"
                  >
                    <Link href="/contact">Contact Our Team</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
