import type { GlobalConfig } from 'payload'

export const Tracking: GlobalConfig = {
  slug: 'tracking',
  admin: {
    group: 'Marketing',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'googleAnalyticsId',
      type: 'text',
      admin: { description: 'e.g., G-XXXXXXXXXX' },
    },
    {
      name: 'googleTagManagerId',
      type: 'text',
      admin: { description: 'e.g., GTM-XXXXXXX' },
    },
    {
      name: 'facebookPixelId',
      type: 'text',
    },
    {
      name: 'customHeadScripts',
      type: 'code',
      admin: {
        language: 'html',
        description: 'Inject custom scripts into the <head> of the website.',
      },
    },
  ],
}
