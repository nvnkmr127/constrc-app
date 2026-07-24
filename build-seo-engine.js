const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const collectionsDir = path.join(srcDir, 'collections');
const globalsDir = path.join(srcDir, 'globals');

// 1. Local SEO Pages Collection
fs.writeFileSync(path.join(collectionsDir, 'LocalSEO.ts'), `import type { CollectionConfig } from 'payload'

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
`);

// 2. FAQs Collection
fs.writeFileSync(path.join(collectionsDir, 'FAQs.ts'), `import type { CollectionConfig } from 'payload'

export const FAQs: CollectionConfig = {
  slug: 'faqs',
  admin: {
    useAsTitle: 'question',
    group: 'SEO Engine',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      type: 'textarea',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      options: ['General', 'Construction', 'Interior Design', 'Location Specific'],
    }
  ],
}
`);

// 3. Tracking Global
fs.writeFileSync(path.join(globalsDir, 'Tracking.ts'), `import type { GlobalConfig } from 'payload'

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
`);

// 4. Company Stats Global
fs.writeFileSync(path.join(globalsDir, 'CompanyStats.ts'), `import type { GlobalConfig } from 'payload'

export const CompanyStats: GlobalConfig = {
  slug: 'company-stats',
  admin: {
    group: 'Marketing',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'yearsOfExperience',
      type: 'number',
      defaultValue: 10,
    },
    {
      name: 'projectsCompleted',
      type: 'number',
      defaultValue: 150,
    },
    {
      name: 'happyClients',
      type: 'number',
      defaultValue: 200,
    },
    {
      name: 'awardsWon',
      type: 'number',
      defaultValue: 5,
    },
  ],
}
`);

// 5. Enhance Posts with SEO
const postsPath = path.join(collectionsDir, 'Posts.ts');
let postsContent = fs.readFileSync(postsPath, 'utf8');
if (!postsContent.includes('meta')) {
  postsContent = postsContent.replace(
    /\]\,\n\}$/,
    `    {
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
}`
  );
  fs.writeFileSync(postsPath, postsContent, 'utf8');
}

// 6. Update payload.config.ts
const configPath = path.join(srcDir, 'payload.config.ts');
let configContent = fs.readFileSync(configPath, 'utf8');

const imports = [
  "import { LocalSEO } from './collections/LocalSEO'",
  "import { FAQs } from './collections/FAQs'",
  "import { Tracking } from './globals/Tracking'",
  "import { CompanyStats } from './globals/CompanyStats'",
].join('\\n');

if (!configContent.includes('LocalSEO')) {
  configContent = configContent.replace(
    "import { SiteSettings } from './globals/SiteSettings'",
    "import { SiteSettings } from './globals/SiteSettings'\\n" + imports
  );

  configContent = configContent.replace(
    "globals: [SiteSettings],",
    "globals: [SiteSettings, Tracking, CompanyStats],"
  );

  configContent = configContent.replace(
    "collections: [",
    "collections: [\\n    LocalSEO,\\n    FAQs,"
  );

  fs.writeFileSync(configPath, configContent, 'utf8');
}

console.log('SEO Engine built and configured!');
