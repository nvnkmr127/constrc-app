import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Header from '@/components/Header'
import PageHero from '@/components/PageHero'
import Footer from '@/components/Footer'
import { JsonLd } from '@/components/seo/JsonLd'
import { blogPostingSchema, breadcrumbSchema } from '@/lib/schema'

type Props = { params: Promise<{ slug: string }> }

async function getPost(slug: string) {
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    depth: 1,
    limit: 1,
  })
  return docs[0] ?? null
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({ collection: 'posts', limit: 1000, depth: 0 })
  return docs.map((d: any) => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    alternates: { canonical: `/news/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      publishedTime: post.publishedDate || undefined,
      images: post.featuredImage?.url ? [post.featuredImage.url] : undefined,
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const hero = post.featuredImage?.url || undefined
  const dateStr = post.publishedDate
    ? new Date(post.publishedDate).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null

  return (
    <>
      <JsonLd
        data={[
          blogPostingSchema(post),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'News', path: '/news' },
            { name: post.title, path: `/news/${post.slug}` },
          ]),
        ]}
      />
      <Header />
      <main>
        <PageHero title={post.title} image={hero} />
        <article className="py-20">
          <div className="max-w-3xl mx-auto px-4">
            {dateStr && (
              <p className="text-primary-orange font-bold uppercase tracking-widest text-xs mb-8">
                {dateStr}
              </p>
            )}
            {post.content && (
              <div className="prose max-w-none">
                <RichText data={post.content} />
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
