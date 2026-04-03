import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

const updatedOn = 'March 4, 2026'

const termsSections = [
  {
    title: 'Acceptance of Terms',
    points: [
      'By accessing this website, you agree to these Terms of Service and all applicable laws and regulations.',
      'If you do not agree, please do not use this website.',
    ],
  },
  {
    title: 'Website Use',
    points: [
      'Content is provided for general informational purposes about Ocean Armour services.',
      'You agree not to misuse the website, interfere with operations, or attempt unauthorized access.',
      'We may update, suspend, or discontinue website features at any time.',
    ],
  },
  {
    title: 'Quotes, Scheduling, and Services',
    points: [
      'Consultations and estimates are subject to project scope, vessel condition, substrate preparation, and site access.',
      'Project timelines and availability may change due to weather, logistics, safety, and material constraints.',
      'Final service terms, scope, pricing, and warranty details are governed by written project agreements.',
    ],
  },
  {
    title: 'Intellectual Property',
    points: [
      'All website text, branding, graphics, and design elements are owned by Ocean Armour or licensed to us.',
      'You may not copy, reproduce, republish, or distribute materials without prior written permission.',
    ],
  },
  {
    title: 'Disclaimer of Warranties',
    points: [
      'Website information is provided on an as-is and as-available basis without express or implied warranties.',
      'We do not guarantee uninterrupted access, error-free content, or fitness for a specific purpose.',
    ],
  },
  {
    title: 'Limitation of Liability',
    points: [
      'To the maximum extent permitted by law, Ocean Armour is not liable for indirect, incidental, special, or consequential damages related to website use.',
      'Nothing in these terms limits liability where limitation is prohibited by law.',
    ],
  },
  {
    title: 'Contact',
    points: ['Questions about these Terms can be sent to oceanarmour@gmail.com or by phone at 561-569-0936.'],
  },
]

export const metadata: Metadata = {
  title: 'Terms of Service | Ocean Armour',
  description: 'Review terms governing use of the Ocean Armour website and service requests.',
}

export default function TermsOfServicePage() {
  return (
    <>
      <Header />

      <section className="relative overflow-hidden bg-[#000c18] pt-32 pb-20 lg:pb-24">

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="rounded-[32px] border border-white/10 bg-[#001a2a]/70 p-6 md:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.4)] backdrop-blur">
            <div className="space-y-4 border-b border-white/10 pb-6 md:pb-8">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Legal</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold">Terms of Service</h1>
              <p className="text-sm text-white/65">Last updated: {updatedOn}</p>
              <p className="text-base md:text-lg text-white/75 max-w-3xl">
                These Terms govern your use of the Ocean Armour website and provide baseline terms related to
                consultations and project inquiries.
              </p>
            </div>

            <div className="mt-7 space-y-7 md:space-y-8">
              {termsSections.map((section) => (
                <div key={section.title} className="space-y-3">
                  <h2 className="text-xl font-semibold text-[#6ed0ff]">{section.title}</h2>
                  <ul className="space-y-2 text-white/75">
                    {section.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#6ed0ff]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
