import type { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GalleryHero } from '@/components/gallery-hero'
import { GalleryGrid } from '@/components/gallery-grid'

export const revalidate = 60 // re-fetch from Sanity every 60 seconds

const GALLERY_QUERY = `*[_type == "galleryItem"] | order(coalesce(order, 9999) asc, _createdAt desc) {
  _id,
  alt,
  category,
  "url": image.asset->url
}`

export const metadata: Metadata = {
  title: 'Gallery | Ocean Armour',
  description: 'Browse our portfolio of Aquaphobix marine coating applications across Broward and Palm Beach Counties.',
}

export default async function GalleryPage() {
  const items = await client.fetch(GALLERY_QUERY)

  const images = (items ?? [])
    .filter((item: any) => item.url)
    .map((item: any) => ({
      id: item._id as string,
      url: item.url as string,
      alt: (item.alt as string) ?? '',
      category: (item.category as string) ?? 'application',
    }))

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
