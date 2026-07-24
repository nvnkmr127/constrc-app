import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import PageHero from '@/components/PageHero'
import Footer from '@/components/Footer'
import { JsonLd } from '@/components/seo/JsonLd'
import { localBusinessSchema, breadcrumbSchema } from '@/lib/schema'

type Props = { params: Promise<{ slug: string }> }

const staticPages: Record<string, { title: string; heading: string; description: string; content: string }> = {
  'construction-company-bangalore': {
    title: 'Top Construction Company in Bangalore',
    heading: 'Leading Construction Services in Bangalore',
    description: 'Turnkey residential and commercial construction services in Bangalore.',
    content: 'Screw Wood is Bangalore\'s premier construction firm delivering high quality residential homes and commercial developments.',
  },
}

export async function generateStaticParams() {
  return Object.keys(staticPages).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = staticPages[slug]
  if (!page) return {}
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${slug}` },
  }
}

export default async function LocalSeoPage({ params }: Props) {
  const { slug } = await params
  const page = staticPages[slug]
  if (!page) notFound()

  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(null),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: page.heading, path: `/${slug}` },
          ]),
        ]}
      />
      <Header />
      <main>
        <PageHero title={page.heading} />
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="prose max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed">{page.content}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
