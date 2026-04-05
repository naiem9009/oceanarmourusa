import type { Metadata } from 'next'
import Script from 'next/script'

const SITE_URL = 'https://oceanarmourusa.com'
const updatedOn = 'March 4, 2026'

const policySections = [
  {
    title: 'Information We Collect',
    points: [
      'Contact details you submit, including name, phone number, email address, and service location.',
      'Project details you share in consultation or quote requests.',
      'Basic technical data such as browser type, pages visited, and approximate location from analytics tools.',
    ],
  },
  {
    title: 'How We Use Information',
    points: [
      'Respond to inquiries, schedule consultations, and provide project estimates.',
      'Deliver and improve our marine coating services and customer support.',
      'Maintain website performance, security, and fraud prevention controls.',
      'Send service-related updates when needed for active requests or projects.',
    ],
  },
  {
    title: 'Sharing and Disclosure',
    points: [
      'We do not sell personal information.',
      'We may share information with trusted service providers that help us operate the business, such as website, CRM, or communications platforms.',
      'We may disclose data if required by law or to protect rights, safety, and property.',
    ],
  },
  {
    title: 'Data Retention',
    points: [
      'We keep personal information only as long as reasonably necessary for business, legal, tax, accounting, and operational purposes.',
      'When no longer needed, data is deleted or anonymized where practical.',
    ],
  },
  {
    title: 'Your Choices',
    points: [
      'You may request access, correction, or deletion of your personal information by contacting us.',
      'You can opt out of non-essential communications at any time.',
      'You may disable cookies in your browser settings, though some website features may be limited.',
    ],
  },
  {
    title: 'Contact',
    points: [
      'Questions about this policy can be sent to oceanarmour@gmail.com or by phone at 561-569-0936.',
    ],
  },
]

export const metadata: Metadata = {
  title: 'Privacy Policy | Ocean Armour',
  description: 'Learn how Ocean Armour collects, uses, and protects personal information.',
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
  robots: {
    index: false,
    follow: true,
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: `${SITE_URL}/privacy-policy` },
  ],
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Script
        id="schema-breadcrumb-privacy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="relative overflow-hidden bg-[#000c18] pt-32 pb-20 lg:pb-24">

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="rounded-[32px] border border-white/10 bg-[#001a2a]/70 p-6 md:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.4)] backdrop-blur">
            <div className="space-y-4 border-b border-white/10 pb-6 md:pb-8">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Legal</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold">Privacy Policy</h1>
              <p className="text-sm text-white/65">Last updated: {updatedOn}</p>
              <p className="text-base md:text-lg text-white/75 max-w-3xl">
                This Privacy Policy explains how Ocean Armour collects, uses, and protects information when you visit
                our website or request services.
              </p>
            </div>

            <div className="mt-7 space-y-7 md:space-y-8">
              {policySections.map((section) => (
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
    </>
  )
}
