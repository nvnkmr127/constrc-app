import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Header from '@/components/Header'
import PageHero from '@/components/PageHero'
import Footer from '@/components/Footer'
import { JsonLd } from '@/components/seo/JsonLd'
import { localBusinessSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

type Props = { params: Promise<{ slug: string }> }

async function getPage(slug: string) {
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({
    collection: 'local-seo',
    where: { slug: { equals: slug } },
    depth: 1,
    limit: 1,
  })
  return docs[0] ?? null
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({ collection: 'local-seo', limit: 1000, depth: 0 })
  return docs.map((d: any) => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = await getPage(slug)
  if (!page) return {}
  const meta = page.meta ?? {}
  const title = meta.title || `${page.targetKeyword} in ${page.location}`
  return {
    title,
    description: meta.description || undefined,
    alternates: { canonical: meta.canonicalUrl || `/${page.slug}` },
    openGraph: {
      title,
      description: meta.description || undefined,
      images: meta.ogImage?.url ? [meta.ogImage.url] : undefined,
    },
  }
}

export default async function LocalSeoPage({ params }: Props) {
  const { slug } = await params
  const page = await getPage(slug)
  if (!page) notFound()

  const settings = await (await getPayload({ config: configPromise }))
    .findGlobal({ slug: 'site-settings' })
    .catch(() => null)

  const faqs = (page.faqs ?? []).filter((f: any) => typeof f === 'object')

  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(settings),
          ...(faqPageSchema(faqs) ? [faqPageSchema(faqs)!] : []),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: page.h1Heading, path: `/${page.slug}` },
          ]),
        ]}
      />
      <Header />
      <main>
        <PageHero title={page.h1Heading} />
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            {page.content && (
              <div className="prose max-w-none">
                <RichText data={page.content} />
              </div>
            )}

            {faqs.length > 0 && (
              <div className="mt-16">
                <h2 className="text-3xl font-extrabold text-dark-charcoal mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq: any) => (
                    <details
                      key={faq.id}
                      className="group border border-slate-200 rounded-2xl p-6 open:shadow-sm"
                    >
                      <summary className="cursor-pointer font-bold text-lg text-dark-charcoal list-none flex justify-between items-center">
                        {faq.question}
                        <span className="text-primary-orange transition-transform group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-4 text-slate-600 leading-relaxed">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
