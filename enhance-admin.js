const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const collectionsDir = path.join(srcDir, 'collections');
const globalsDir = path.join(srcDir, 'globals');

if (!fs.existsSync(globalsDir)) {
  fs.mkdirSync(globalsDir);
}

// 1. Create SiteSettings Global
fs.writeFileSync(path.join(globalsDir, 'SiteSettings.ts'), `import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Contact Info',
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'email', type: 'email', required: true, admin: { width: '50%' } },
                { name: 'phone', type: 'text', required: true, admin: { width: '50%' } },
              ],
            },
            { name: 'address', type: 'textarea' },
          ],
        },
        {
          label: 'Social Links',
          fields: [
            { name: 'facebook', type: 'text' },
            { name: 'instagram', type: 'text' },
            { name: 'linkedin', type: 'text' },
          ],
        },
      ],
    },
  ],
}
`);

// 2. Enhance Leads Collection with better UI grouping
fs.writeFileSync(path.join(collectionsDir, 'Leads.ts'), `import type { CollectionConfig } from 'payload'

export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'mobile', 'city', 'packageInterest', 'createdAt'],
    group: 'CRM',
  },
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'name', type: 'text', required: true, admin: { width: '50%' } },
        { name: 'mobile', type: 'text', required: true, admin: { width: '50%' } },
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
    { name: 'message', type: 'textarea' },
  ],
}
`);

// 3. Enhance Pages Collection with SEO Tabs
fs.writeFileSync(path.join(collectionsDir, 'Pages.ts'), `import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Page Content',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'slug', type: 'text', required: true, unique: true },
          ],
        },
        {
          label: 'SEO Metadata',
          fields: [
            { name: 'metaTitle', type: 'text', admin: { description: 'Leave blank to use page title' } },
            { name: 'metaDescription', type: 'textarea' },
            { name: 'metaKeywords', type: 'text', admin: { description: 'Comma separated keywords' } },
          ],
        },
      ],
    },
  ],
}
`);

// 4. Update payload.config.ts to include the Global and Admin Meta
const configPath = path.join(srcDir, 'payload.config.ts');
let configContent = fs.readFileSync(configPath, 'utf8');

// Inject the import
if (!configContent.includes('SiteSettings')) {
  configContent = configContent.replace(
    "import { Pages } from './collections/Pages'",
    "import { Pages } from './collections/Pages'\\nimport { SiteSettings } from './globals/SiteSettings'"
  );
  
  // Inject into collections array (if needed, but it's a global so we need a globals array)
  configContent = configContent.replace(
    "collections: [",
    "globals: [SiteSettings],\\n  collections: ["
  );
  
  // Add admin meta
  configContent = configContent.replace(
    "admin: {\\n    user: 'users',\\n  },",
    \`admin: {
    user: 'users',
    meta: {
      titleSuffix: '- Screw Wood Admin',
      favicon: '/favicon.ico',
    },
  },\`
  );
  
  fs.writeFileSync(configPath, configContent, 'utf8');
}

console.log('Admin fully enhanced with CRM groups, SEO tabs, and Global Settings!');
