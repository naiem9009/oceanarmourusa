import { type SchemaTypeDefinition } from 'sanity'
import { galleryItem } from './galleryItem'
import { faqItem } from './faqItem'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [galleryItem, faqItem],
}
