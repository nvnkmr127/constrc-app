import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero title="Contact Us" image="/images/bangalore_modern_interior.png" />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
