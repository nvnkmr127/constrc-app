import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// AI / LLM agents we explicitly welcome to read the public site.
const AI_AGENTS = [
  'GPTBot', // OpenAI training
  'OAI-SearchBot', // OpenAI search
  'ChatGPT-User', // ChatGPT browsing
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended', // Gemini / Vertex
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'Applebot-Extended',
  'CCBot', // Common Crawl
  'Bytespider',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/admin', '/api'] },
      // AI agents may read all public content (blog, local landing pages, etc.).
      { userAgent: AI_AGENTS, allow: '/', disallow: ['/admin', '/api'] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
