'use client'

import { Anchor, CheckCircle2, Droplet, ShieldCheck, Wrench } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We evaluate your vessel, usage profile, and goals to define the ideal Aquaphobix solution.',
    icon: Anchor,
  },
  {
    number: '02',
    title: 'Haul-Out & Prep',
    description: 'Coordinate with haul out facility to ensure vessel is prepped correctly',
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
    title: 'Quality Control',
    description: 'Final inspection and warranty registration',
    icon: Wrench,
  },
]

export function Process() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#003B73] via-[#001a2e] to-[#000c18] py-24 lg:py-28">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Process</p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-white leading-tight">
              Consultation to completion
            </h2>
            <p className="text-lg text-white/70 max-w-2xl">
              A streamlined workflow that protects your vessel, minimizes downtime, and keeps performance
              consistent year after year.
            </p>
          </div>
        </div>

        <div className="relative mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-[1px] shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              >
                <div className="h-full rounded-2xl bg-[#001826]/80 p-6">
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
