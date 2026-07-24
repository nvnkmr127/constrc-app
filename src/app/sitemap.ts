import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { absoluteUrl } from '@/lib/site'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config: configPromise })

  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), changeFrequency: 'weekly', priority: 1 },
    { url: absoluteUrl('/services'), changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/projects'), changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/news'), changeFrequency: 'weekly', priority: 0.7 },
    { url: absoluteUrl('/contact'), changeFrequency: 'yearly', priority: 0.5 },
  ]

  const [local, posts] = await Promise.all([
    payload.find({ collection: 'local-seo', limit: 1000, depth: 0 }).catch(() => ({ docs: [] })),
    payload.find({ collection: 'posts', limit: 1000, depth: 0 }).catch(() => ({ docs: [] })),
  ])

  const localPages: MetadataRoute.Sitemap = local.docs.map((d: any) => ({
    url: absoluteUrl(`/${d.slug}`),
    lastModified: d.updatedAt,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const postPages: MetadataRoute.Sitemap = posts.docs.map((p: any) => ({
    url: absoluteUrl(`/news/${p.slug}`),
    lastModified: p.updatedAt || p.publishedDate,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...localPages, ...postPages]
}
