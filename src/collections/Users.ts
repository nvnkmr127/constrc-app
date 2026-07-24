import type { CollectionConfig } from 'payload'
import { isAdmin, isAdminOrSelf, isAdminFieldLevel } from '../access'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    group: 'Admin',
    defaultColumns: ['name', 'email', 'role'],
  },
  access: {
    admin: ({ req }) => Boolean(req.user), // may log into the admin panel
    read: isAdminOrSelf,
    create: isAdmin,
    update: isAdminOrSelf, // editors can edit their own profile/password, not others
    delete: isAdmin,
  },
  fields: [
    { name: 'name', type: 'text' },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
      ],
      // Only admins may grant/change roles — stops editors self-escalating.
      access: { create: isAdminFieldLevel, update: isAdminFieldLevel },
      admin: { position: 'sidebar' },
    },
  ],
}
