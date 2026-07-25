import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { localBusinessSchema, breadcrumbSchema } from '@/lib/schema';
import { staticLocalSeoPages } from '@/lib/localSeoData';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(staticLocalSeoPages).map((slug) => ({ slug }));
}

import { resolveSeo } from '@/lib/seo/resolve';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return resolveSeo(`/${slug}`);
}

export default async function LocalSeoPage({ params }: Props) {
  const { slug } = await params;
  const page = staticLocalSeoPages[slug];
  if (!page) notFound();

  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema({
            address: page.location,
            email: 'salman@scewwood.in',
            phone: '+91 9014303409',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: page.heading, path: `/${slug}` },
          ]),
        ]}
      />
      <Header />
      <main className="font-sans bg-slate-50">
        <PageHero title={page.heading} image={page.image || '/images/bangalore_hero_building.png'} />

        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f2bd19]/20 border border-[#f2bd19]/40 text-[#f2bd19] text-xs font-black uppercase tracking-widest">
                📍 Served Location: {page.location}
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
                {page.title}
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed text-base md:text-lg">
                {page.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-xl font-black text-slate-900">Why Choose Screw Wood in {page.location}?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {page.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-800">
                      <span className="w-6 h-6 rounded-full bg-[#f2bd19] text-slate-900 flex items-center justify-center text-xs font-black shrink-0">
                        ✓
                      </span>
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-8 shadow-xl space-y-6">
              <h3 className="text-2xl font-black text-white">Book Free Consultation in {page.location}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Speak with our structural engineers or visit our HBR Layout Experience Center for blueprint reviews and cost estimates.
              </p>
              <div className="pt-4 border-t border-white/10 space-y-3">
                <p className="text-xs text-slate-400 font-bold">DIRECT HELPLINE</p>
                <a href="tel:+919014303409" className="text-xl font-black text-[#f2bd19] hover:underline block">
                  +91 9014303409
                </a>
              </div>
            </div>
          </div>
        </section>

        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
