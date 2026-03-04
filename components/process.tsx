'use client'

import { SectionBackground } from '@/components/section-background'
import { Anchor, CheckCircle2, Droplet, ShieldCheck, Wrench } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Consultation & Survey',
    description: 'We evaluate your vessel, usage profile, and goals to define the ideal Aquaphobix solution.',
    icon: Anchor,
  },
  {
    number: '02',
    title: 'Haul-Out & Prep',
    description: 'Professional shipyard cleaning, blasting, and surface preparation for optimal bonding.',
    icon: Droplet,
  },
  {
    number: '03',
    title: 'Certified Application',
    description: 'Certified technicians apply the system for complete, uniform hull coverage.',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'Quality & Care Plan',
    description: 'Final inspection, documentation, and maintenance guidance for years of protection.',
    icon: Wrench,
  },
]

export function Process() {
  return (
    <section className="relative overflow-hidden bg-[#000c18] py-24 lg:py-28">
      <SectionBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Process</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white leading-tight">
              Precision from haul-out to launch.
            </h2>
            <p className="text-lg text-white/70 max-w-2xl">
              A streamlined, shipyard-grade workflow that protects your vessel, minimizes downtime, and keeps performance
              consistent year after year.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
            <span className="rounded-full border border-white/15 px-4 py-2 text-center">Certified Crew</span>
            <span className="rounded-full border border-white/15 px-4 py-2 text-center">Shipyard Prep</span>
            <span className="rounded-full border border-white/15 px-4 py-2 text-center">Quality Control</span>
            <span className="rounded-full border border-white/15 px-4 py-2 text-center">Care Plan</span>
          </div>
        </div>

        <div className="relative mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="pointer-events-none absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-white/10 md:block" />
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-[1px] shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              >
                <div className="h-full rounded-2xl bg-[#001826]/80 p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                      <Icon className="h-6 w-6 text-[#6ed0ff]" />
                    </div>
                    <span className="text-3xl font-semibold text-white/30">{step.number}</span>
                  </div>
                  <div className="mt-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#6ed0ff]" />
                      <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="text-sm text-white/70">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
