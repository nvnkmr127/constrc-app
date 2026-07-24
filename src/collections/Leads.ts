import type { CollectionConfig } from 'payload'

export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    create: () => true, // Allow public form submissions
    read: () => true, // Restrict in production
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'mobile',
      type: 'text',
      required: true,
    },
    {
      name: 'city',
      type: 'select',
      options: ['Bangalore', 'Hyderabad', 'Mumbai', 'Delhi'],
      required: true,
    },
    {
      name: 'packageInterest',
      type: 'select',
      options: ['Economy', 'Premium', 'Luxury'],
    },
  ],
  hooks: {
    afterChange: [
      ({ doc, operation }) => {
        if (operation === 'create') {
          console.log('Webhook trigger: New Lead Received ->', doc);
          // Here you would add your webhook fetch() request
        }
      }
    ]
  }
}
