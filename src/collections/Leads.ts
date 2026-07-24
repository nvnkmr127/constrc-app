import type { CollectionConfig } from 'payload'
import { anyone, isAuthenticated, isAdmin, isAuthenticatedFieldLevel } from '../access'

// Internal (staff-only) fields must not be settable by the public create form.
const staffOnly = { create: isAuthenticatedFieldLevel, update: isAuthenticatedFieldLevel } as const

export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'name',
    group: 'CRM',
    defaultColumns: ['name', 'mobile', 'city', 'status', 'assignedTo', 'createdAt'],
    listSearchableFields: ['name', 'mobile', 'city'],
  },
  access: {
    create: anyone, // public contact form submissions
    read: isAuthenticated, // customer PII — staff only, never public
    update: isAuthenticated,
    delete: isAdmin,
  },
  fields: [
    // --- Submitted by the public form ---
    { name: 'name', type: 'text', required: true },
    {
      type: 'row',
      fields: [
        { name: 'mobile', type: 'text', required: true, admin: { width: '50%' } },
        { name: 'email', type: 'email', admin: { width: '50%' } },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'city',
          type: 'select',
          options: ['Bangalore', 'Hyderabad', 'Mumbai', 'Delhi'],
          required: true,
          admin: { width: '50%' },
        },
        {
          name: 'packageInterest',
          type: 'select',
          options: ['Economy', 'Premium', 'Luxury'],
          admin: { width: '50%' },
        },
      ],
    },
    { name: 'message', type: 'textarea', admin: { description: 'Message from the enquiry form' } },

    // --- Sales pipeline (sidebar, staff-only) ---
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      access: staffOnly,
      options: [
        { label: '🆕 New', value: 'new' },
        { label: '📞 Contacted', value: 'contacted' },
        { label: '📝 Quoted', value: 'quoted' },
        { label: '✅ Won', value: 'won' },
        { label: '❌ Lost', value: 'lost' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'assignedTo',
      type: 'relationship',
      relationTo: 'users',
      access: staffOnly,
      admin: { position: 'sidebar', description: 'Sales owner' },
    },
    {
      name: 'source',
      type: 'select',
      defaultValue: 'website',
      access: staffOnly,
      options: [
        { label: 'Website Form', value: 'website' },
        { label: 'Phone Call', value: 'phone' },
        { label: 'Referral', value: 'referral' },
        { label: 'Walk-in', value: 'walkin' },
        { label: 'Social Media', value: 'social' },
        { label: 'Other', value: 'other' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'estimatedValue',
      type: 'number',
      min: 0,
      access: staffOnly,
      admin: { position: 'sidebar', description: 'Estimated deal value (₹)' },
    },

    // --- Internal activity log ---
    {
      name: 'activity',
      type: 'array',
      label: 'Activity / Notes',
      access: staffOnly,
      admin: { description: 'Internal notes — author and time are stamped automatically.' },
      fields: [
        { name: 'note', type: 'textarea', required: true },
        {
          name: 'author',
          type: 'relationship',
          relationTo: 'users',
          admin: { readOnly: true, width: '50%' },
          hooks: { beforeChange: [({ value, req }) => value ?? req.user?.id] },
        },
        {
          name: 'at',
          type: 'date',
          admin: { readOnly: true, width: '50%', date: { pickerAppearance: 'dayAndTime' } },
          defaultValue: () => new Date().toISOString(),
        },
      ],
    },
  ],
  hooks: {
    afterChange: [
      ({ doc, operation }) => {
        if (operation === 'create') {
          console.log('Webhook trigger: New Lead Received ->', doc)
          // Wire a real notification here (email / Slack / webhook fetch()).
        }
      },
    ],
  },
}
