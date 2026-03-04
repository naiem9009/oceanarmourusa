import { Header } from '@/components/header'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Ocean Armour USA',
  description:
    'Request a free consultation for Aquaphobix marine coating services in Broward and Palm Beach counties.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <Contact />
      <Footer />
    </>
  )
}
