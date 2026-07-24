import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import Link from 'next/link'

export default async function Blog() {
  const payload = await getPayload({ config: configPromise })
  
  let posts: any[] = []
  try {
    const response = await payload.find({
      collection: 'posts',
      limit: 3,
      sort: '-publishedDate',
    })
    posts = response.docs
  } catch (error) {
    console.error("Error fetching posts", error)
  }

  // Fallback images since we haven't uploaded featured images yet
  const fallbackImages = [
    "/images/bangalore_modern_interior.png",
    "/images/bangalore_commercial_complex.png",
    "/images/bangalore_hero_building.png"
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-[2px] bg-primary-orange"></div>
              <span className="text-primary-orange font-bold uppercase tracking-widest text-xs">OUR BLOG &amp; NEWS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark-charcoal">Latest News Posts<br />And Articles</h2>
          </div>
          <Link className="bg-primary-orange text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:-translate-y-1 hover:scale-105 hover:shadow-lg transition-all duration-300" href="/news">
            VIEW ALL POSTS <span className="bg-black/20 rounded-full p-1 text-xs">→</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.length > 0 ? (
            posts.map((post, idx) => {
              const date = new Date(post.publishedDate || Date.now())
              const dateStr = date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }).toUpperCase()
              
              // Try to extract text from the richText content for the excerpt
              let excerpt = "Expert tips for defining the results that matter for your future home."
              if (post.content?.root?.children?.[0]?.children?.[0]?.text) {
                const text = post.content.root.children[0].children[0].text
                excerpt = text.length > 100 ? text.substring(0, 100) + "..." : text
              }

              return (
                <Link href={`/news/${post.slug}`} key={post.id} className="block bg-white rounded-[40px] overflow-hidden shadow-sm group border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      src={post.featuredImage ? (typeof post.featuredImage === 'object' ? post.featuredImage.url : fallbackImages[idx % 3]) : fallbackImages[idx % 3]}
                    />
                    <div className="absolute bottom-4 right-4 bg-dark-charcoal text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase shadow-md">{dateStr}</div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-xl font-bold mb-4 group-hover:text-primary-orange transition-colors">{post.title}</h4>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-2">{excerpt}</p>
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100 text-[10px] font-bold uppercase text-gray-400">
                      <span className="">👤 By Admin</span>
                      <span className="">💬 0 Comments</span>
                    </div>
                  </div>
                </Link>
              )
            })
          ) : (
            <div className="col-span-3 text-center py-12 text-gray-400">
              No blog posts found in the CMS.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
