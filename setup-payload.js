const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const collectionsDir = path.join(srcDir, 'collections');
const payloadAppDir = path.join(srcDir, 'app', '(payload)');
const adminDir = path.join(payloadAppDir, 'admin', '[[...segments]]');
const apiDir = path.join(payloadAppDir, 'api', '[...slug]');

// Create directories
[collectionsDir, payloadAppDir, adminDir, apiDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// 1. Leads Collection
fs.writeFileSync(path.join(collectionsDir, 'Leads.ts'), `import type { CollectionConfig } from 'payload'

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
`);

// 2. Pages Collection (SEO)
fs.writeFileSync(path.join(collectionsDir, 'Pages.ts'), `import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
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
      name: 'metaDescription',
      type: 'textarea',
    },
  ],
}
`);

// 3. payload.config.ts
fs.writeFileSync(path.join(srcDir, 'payload.config.ts'), `import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import { Leads } from './collections/Leads'
import { Pages } from './collections/Pages'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
  },
  collections: [
    Leads,
    Pages,
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [],
    },
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'super-secret',
  db: sqliteAdapter({
    client: {
      url: 'file:./payload.db',
    },
  }),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
`);

// 4. Admin Page
fs.writeFileSync(path.join(adminDir, 'page.tsx'), `import configPromise from '@/payload.config'
import { RootPage } from '@payloadcms/next/views'
import { importMap } from '@payloadcms/next/importMap'

export default function Page(props: any) {
  return <RootPage config={configPromise} importMap={importMap} {...props} />
}
`);

// 5. API Route
fs.writeFileSync(path.join(apiDir, 'route.ts'), `import configPromise from '@/payload.config'
import { REST_DELETE, REST_GET, REST_OPTIONS, REST_PATCH, REST_POST } from '@payloadcms/next/routes'

export const GET = REST_GET(configPromise)
export const POST = REST_POST(configPromise)
export const DELETE = REST_DELETE(configPromise)
export const PATCH = REST_PATCH(configPromise)
export const OPTIONS = REST_OPTIONS(configPromise)
`);

// 6. Layout
fs.writeFileSync(path.join(payloadAppDir, 'layout.tsx'), `import configPromise from '@/payload.config'
import { RootLayout } from '@payloadcms/next/layouts'
import { importMap } from '@payloadcms/next/importMap'

import '@payloadcms/next/css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RootLayout config={configPromise} importMap={importMap}>
          {children}
        </RootLayout>
      </body>
    </html>
  )
}
`);

// Create importMap to avoid build errors in Next.js/Payload
fs.writeFileSync(path.join(srcDir, 'importMap.js'), `export const importMap = {}`);

// Edit next.config.mjs to support Payload (if needed, but payload runs out of box with next dev, however payload 3.0 needs a plugin)
let nextConfigPath = path.join(__dirname, 'next.config.ts');

let nextConfigContent = fs.readFileSync(nextConfigPath, 'utf8');
if (!nextConfigContent.includes('@payloadcms/next/withPayload')) {
  // Simple injection for testing
  const newNextConfig = `import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {}

export default withPayload(nextConfig)
`;
  fs.writeFileSync(nextConfigPath, newNextConfig, 'utf8');
}

console.log('Payload files generated successfully!');
