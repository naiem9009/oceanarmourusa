import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { buildConfig } from 'payload'
import { Media } from './collections/Media'
import { GalleryItems } from './collections/GalleryItems'

export default buildConfig({
  editor: lexicalEditor(),

  collections: [Media, GalleryItems],

  admin: {
    components: {
      graphics: {
        Logo: '@/components/payload/Logo',
        Icon: '@/components/payload/Icon',
      },
    },
    meta: {
      icons: [{ url: '/favicon.ico' }],
      titleSuffix: '— Ocean Armour',
    },
  },

  secret: process.env.PAYLOAD_SECRET || '',
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || 'file:./payload.db',
      authToken: process.env.DATABASE_AUTH_TOKEN,
    },
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
  
})