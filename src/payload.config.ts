import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import { Leads } from './collections/Leads'
import { Pages } from './collections/Pages'
import { SiteSettings } from './globals/SiteSettings'
import { LocalSEO } from './collections/LocalSEO'
import { FAQs } from './collections/FAQs'
import { Tracking } from './globals/Tracking'
import { CompanyStats } from './globals/CompanyStats'
import { Media } from './collections/Media'
import { Projects } from './collections/Projects'
import { Services } from './collections/Services'
import { Posts } from './collections/Posts'
import { Testimonials } from './collections/Testimonials'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '- Screw Wood Admin',
    },
  },
  globals: [SiteSettings, Tracking, CompanyStats],
  collections: [
    LocalSEO,
    FAQs,
    Media,
    Projects,
    Services,
    Posts,
    Testimonials,
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
