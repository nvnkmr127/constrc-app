import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { SITE_URL, SITE_NAME, absoluteUrl } from '@/lib/site'

// llms.txt — a curated, AI-agent-friendly index of the site.
// Spec: https://llmstxt.org
export async function GET() {
  const payload = await getPayload({ config: configPromise })

  const [settings, local, posts] = await Promise.all([
    payload.findGlobal({ slug: 'site-settings' }).catch(() => null as any),
    payload.find({ collection: 'local-seo', limit: 1000, depth: 0 }).catch(() => ({ docs: [] })),
    payload
      .find({ collection: 'posts', limit: 1000, sort: '-publishedDate', depth: 0 })
      .catch(() => ({ docs: [] })),
  ])

  const line = (title: string, url: string, note?: string) =>
    `- [${title}](${url})${note ? `: ${note}` : ''}`

  const md = `# ${SITE_NAME}

> Construction and interior design company serving Bangalore, Hyderabad, Mumbai and Delhi.

${settings?.email ? `Contact: ${settings.email}${settings.phone ? ` · ${settings.phone}` : ''}` : ''}

## Main Pages
${line('Home', SITE_URL)}
${line('Services', absoluteUrl('/services'))}
${line('Projects', absoluteUrl('/projects'))}
${line('News & Insights', absoluteUrl('/news'))}
${line('Contact', absoluteUrl('/contact'))}

## Service Areas
${
  local.docs.length
    ? local.docs
        .map((d: any) => line(d.h1Heading || `${d.targetKeyword} in ${d.location}`, absoluteUrl(`/${d.slug}`)))
        .join('\n')
    : '- (none published yet)'
}

## Blog Posts
${
  posts.docs.length
    ? posts.docs.map((p: any) => line(p.title, absoluteUrl(`/news/${p.slug}`))).join('\n')
    : '- (none published yet)'
}
`.replace(/\n{3,}/g, '\n\n')

  return new Response(md, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
