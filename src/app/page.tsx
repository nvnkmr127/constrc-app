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

export default function Home() {
  return (
    <>
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
