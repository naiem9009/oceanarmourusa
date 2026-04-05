import type { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { GalleryHero } from '@/components/gallery-hero'
import { GalleryGrid } from '@/components/gallery-grid'
import { CTA } from '@/components/cta'
import Script from 'next/script'

const SITE_URL = 'https://oceanarmourusa.com'

export const revalidate = 60

const GALLERY_QUERY = `*[_type == "galleryItem"] | order(coalesce(order, 9999) asc, _createdAt desc) {
  _id,
  alt,
  category,
  "url": image.asset->url
}`

export const metadata: Metadata = {
  title: 'Gallery | Ocean Armour',
  description:
    'Browse our portfolio of Aquaphobix marine coating applications across Broward and Palm Beach Counties.',
  keywords: [
    'marine coating gallery',
    'Aquaphobix applications',
    'powder coating portfolio',
    'boat coating before after',
    'marine coating examples',
    'boat hull coating results',
    'marine powder coating South Florida',
    'Aquaphobix finished projects',
  ],
  openGraph: {
    title: 'Gallery | Ocean Armour',
    description:
      'Browse our portfolio of Aquaphobix marine coating applications across Broward and Palm Beach Counties.',
    url: `${SITE_URL}/gallery`,
    type: 'website',
  },
  alternates: {
    canonical: `${SITE_URL}/gallery`,
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Gallery', item: `${SITE_URL}/gallery` },
  ],
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
      <Script
        id="schema-breadcrumb-gallery"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <GalleryHero />
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={images} />
        </div>
      </section>
    </>
  )
}
