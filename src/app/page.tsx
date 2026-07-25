import type { Metadata } from 'next';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Brands from "@/components/Brands";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import PackageComparison from "@/components/PackageComparison";
import MaintenanceComparison from "@/components/MaintenanceComparison";
import Testimonials from "@/components/Testimonials";
import Projects from "@/components/Projects";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/schema";

import { resolveSeo } from "@/lib/seo/resolve";

export async function generateMetadata(): Promise<Metadata> {
  return resolveSeo('/');
}

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema({
            address: "38th Cross Rd, 1751, 15th Main Rd, HBR Layout 5th Block, Bengaluru, Karnataka 560043",
            email: "salman@scewwood.in",
            phone: "+91 9014303409",
          }),
        ]}
      />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Brands />
        <Services />
        <WhyChooseUs />
        <PackageComparison />
        <MaintenanceComparison />
        <Testimonials />
        <Projects />
        <FAQ />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
