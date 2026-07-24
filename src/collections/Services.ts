import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'name',
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'iconName',
      type: 'text',
      admin: {
        description: 'Material Symbol Icon Name (e.g., architecture, foundation)',
      },
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'detailedContent',
      type: 'richText',
    },
    {
      name: 'startingPrice',
      type: 'text',
    },
  ],
}
