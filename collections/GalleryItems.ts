import type { CollectionConfig } from 'payload'

export const GalleryItems: CollectionConfig = {
  slug: 'gallery-items',
  admin: {
    defaultColumns: ['image', 'category', 'updatedAt'],
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      defaultValue: 'application',
      options: [
        { label: 'Application', value: 'application' },
        { label: 'Before & After', value: 'before-after' },
        { label: 'Vessel', value: 'vessel' },
        { label: 'Process', value: 'process' },
      ],
    },
  ],
}
