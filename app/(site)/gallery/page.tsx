import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GalleryHero } from '@/components/gallery-hero'
import { GalleryGrid } from '@/components/gallery-grid'
import type { Media } from '@/payload-types'

export const metadata: Metadata = {
  title: 'Gallery | Ocean Armour',
  description: 'Browse our portfolio of Aquaphobix marine coating applications across Broward and Palm Beach Counties.',
}

export default async function GalleryPage() {
  const payload = await getPayload({ config })

  const { docs: items } = await payload.find({
    collection: 'gallery-items',
    depth: 1,
    limit: 200,
    sort: '-createdAt',
  })

  const images = items.map((item) => {
    const media = item.image as Media
    return {
      id: item.id,
      url: media?.url ?? '',
      alt: media?.alt ?? '',
      category: (item.category as string) ?? 'application',
    }
  }).filter((img) => img.url)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#000c18]">
        <GalleryHero />
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GalleryGrid images={images} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
