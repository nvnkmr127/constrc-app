const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const collectionsDir = path.join(srcDir, 'collections');
const globalsDir = path.join(srcDir, 'globals');

if (!fs.existsSync(globalsDir)) {
  fs.mkdirSync(globalsDir);
}

// 1. Media
fs.writeFileSync(path.join(collectionsDir, 'Media.ts'), `import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  upload: {
    staticDir: '../public/media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'hero',
        width: 1920,
        height: 1080,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
`);

// 2. Projects
fs.writeFileSync(path.join(collectionsDir, 'Projects.ts'), `import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      type: 'row',
      fields: [
        { name: 'clientName', type: 'text', admin: { width: '50%' } },
        { name: 'location', type: 'text', admin: { width: '50%' } },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'completionYear', type: 'number', admin: { width: '50%' } },
        {
          name: 'status',
          type: 'select',
          options: ['Ongoing', 'Completed'],
          defaultValue: 'Completed',
          admin: { width: '50%' },
        },
      ],
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
  ],
}
`);

// 3. Services
fs.writeFileSync(path.join(collectionsDir, 'Services.ts'), `import type { CollectionConfig } from 'payload'

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
`);

// 4. Posts (Blog)
fs.writeFileSync(path.join(collectionsDir, 'Posts.ts'), `import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    group: 'Marketing',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
    },
    {
      name: 'publishedDate',
      type: 'date',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
}
`);

// 5. Testimonials
fs.writeFileSync(path.join(collectionsDir, 'Testimonials.ts'), `import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'clientName',
    group: 'Marketing',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'clientName',
      type: 'text',
      required: true,
    },
    {
      name: 'roleOrCompany',
      type: 'text',
    },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'rating',
      type: 'number',
      min: 1,
      max: 5,
      defaultValue: 5,
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
`);

// Update Payload Config
const configPath = path.join(srcDir, 'payload.config.ts');
let configContent = fs.readFileSync(configPath, 'utf8');

const imports = [
  "import { Media } from './collections/Media'",
  "import { Projects } from './collections/Projects'",
  "import { Services } from './collections/Services'",
  "import { Posts } from './collections/Posts'",
  "import { Testimonials } from './collections/Testimonials'"
].join('\\n');

// 1. Add imports
configContent = configContent.replace(
  "import { SiteSettings } from './globals/SiteSettings'",
  "import { SiteSettings } from './globals/SiteSettings'\\n" + imports
);

// 2. Add collections
const collectionsStr = `
    Media,
    Projects,
    Services,
    Posts,
    Testimonials,`;

configContent = configContent.replace(
  "collections: [",
  "collections: [" + collectionsStr
);

fs.writeFileSync(configPath, configContent, 'utf8');

console.log('CMS Collections Generated and Configured!');
