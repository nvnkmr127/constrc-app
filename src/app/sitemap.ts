import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl('/'), changeFrequency: 'weekly', priority: 1 },
    { url: absoluteUrl('/how-it-works'), changeFrequency: 'monthly', priority: 0.9 },
    { url: absoluteUrl('/services'), changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/projects'), changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/news'), changeFrequency: 'weekly', priority: 0.7 },
    { url: absoluteUrl('/contact'), changeFrequency: 'yearly', priority: 0.5 },
  ]
}
