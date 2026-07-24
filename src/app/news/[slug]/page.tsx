import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import PageHero from '@/components/PageHero'
import Footer from '@/components/Footer'
import { JsonLd } from '@/components/seo/JsonLd'
import { blogPostingSchema, breadcrumbSchema } from '@/lib/schema'

type Props = { params: Promise<{ slug: string }> }

const posts: Record<string, { title: string; dateStr: string; image: string; content: string }> = {
  'sustainable-building-materials-bangalore': {
    title: 'Top Sustainable Building Materials for Homes in Bangalore',
    dateStr: '15 October 2024',
    image: '/images/bangalore_modern_interior.png',
    content: 'Building a sustainable home in Bangalore involves choosing materials that reduce thermal heat gain, lower power consumption, and provide longevity. High-performance AAC blocks, solar-reflective roof coatings, and low-VOC paints are standard choices for eco-conscious homeowners.',
  },
  'bbmp-building-approval-guide-2025': {
    title: 'Complete Guide to BBMP Plan Approvals & Regulations',
    dateStr: '28 November 2024',
    image: '/images/bangalore_commercial_complex.png',
    content: 'BBMP building plan sanctions require strict adherence to setback rules, FAR ratios, and rainwater harvesting compliance. Working with certified structural engineers ensures seamless sanctioning without costly delays.',
  },
  'cost-effective-interior-design-tips': {
    title: 'Cost-Effective Commercial & Residential Interior Design Tips',
    dateStr: '10 January 2025',
    image: '/images/bangalore_hero_building.png',
    content: 'Optimizing interior aesthetics does not require lavish spending. Modular cabinetry, strategic accent lighting, and durable laminate finishes create high-end visual appeal at fraction of the cost.',
  },
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return {}
  return {
    title: post.title,
    alternates: { canonical: `/news/${slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      images: [post.image],
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = posts[slug]
  if (!post) notFound()

  return (
    <>
      <JsonLd
        data={[
          blogPostingSchema(post),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'News', path: '/news' },
            { name: post.title, path: `/news/${slug}` },
          ]),
        ]}
      />
      <Header />
      <main>
        <PageHero title={post.title} image={post.image} />
        <article className="py-20">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-primary-orange font-bold uppercase tracking-widest text-xs mb-8">
              {post.dateStr}
            </p>
            <div className="prose max-w-none text-slate-700 leading-relaxed text-lg">
              <p>{post.content}</p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
