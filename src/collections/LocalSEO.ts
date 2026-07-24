import type { CollectionConfig } from 'payload'

export const LocalSEO: CollectionConfig = {
  slug: 'local-seo',
  admin: {
    useAsTitle: 'targetKeyword',
    group: 'SEO Engine',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'targetKeyword', type: 'text', required: true, admin: { width: '50%' }, label: 'Target Keyword (e.g., Construction Company)' },
        { name: 'location', type: 'text', required: true, admin: { width: '50%' }, label: 'Location (e.g., Whitefield, Bangalore)' },
      ],
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'e.g., construction-company-in-whitefield',
      },
    },
    {
      name: 'h1Heading',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'faqs',
      type: 'relationship',
      relationTo: 'faqs',
      hasMany: true,
      admin: {
        description: 'Link FAQs to generate Schema.org markup for this specific area.',
      }
    },
    {
      type: 'group',
      name: 'meta',
      label: 'SEO Metadata',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        { name: 'canonicalUrl', type: 'text' },
        { name: 'ogImage', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
}
