import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site';
import { getPosts } from '@/lib/blogService';
import { staticLocalSeoPages } from '@/lib/localSeoData';
import { staticServices } from '@/lib/servicesData';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), changeFrequency: 'weekly', priority: 1.0 },
    { url: absoluteUrl('/how-it-works'), changeFrequency: 'monthly', priority: 0.9 },
    { url: absoluteUrl('/services'), changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/projects'), changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/ai-house-construction-calculator'), changeFrequency: 'weekly', priority: 0.9 },
    { url: absoluteUrl('/news'), changeFrequency: 'daily', priority: 0.8 },
    { url: absoluteUrl('/contact'), changeFrequency: 'monthly', priority: 0.7 },
    { url: absoluteUrl('/admin'), changeFrequency: 'never', priority: 0.1 },
  ];

  // Dynamic Blog Posts
  const posts = await getPosts();
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(`/news/${post.slug}`),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Dynamic Local SEO Landing Pages
  const localSeoEntries: MetadataRoute.Sitemap = Object.keys(staticLocalSeoPages).map((slug) => ({
    url: absoluteUrl(`/${slug}`),
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // Service Detail Pages
  const serviceEntries: MetadataRoute.Sitemap = Object.keys(staticServices).map((slug) => ({
    url: absoluteUrl(`/services/${slug}`),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...serviceEntries, ...blogEntries, ...localSeoEntries];
}
