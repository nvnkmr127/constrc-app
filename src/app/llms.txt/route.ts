import { SITE_URL, SITE_NAME, absoluteUrl } from '@/lib/site'

export async function GET() {
  const line = (title: string, url: string, note?: string) =>
    `- [${title}](${url})${note ? `: ${note}` : ''}`

  const md = `# ${SITE_NAME}

> Construction and interior design company serving Bangalore, Hyderabad, Mumbai and Delhi.

## Main Pages
${line('Home', SITE_URL)}
${line('Services', absoluteUrl('/services'))}
${line('Projects', absoluteUrl('/projects'))}
${line('News & Insights', absoluteUrl('/news'))}
${line('Contact', absoluteUrl('/contact'))}
`.replace(/\n{3,}/g, '\n\n')

  return new Response(md, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
