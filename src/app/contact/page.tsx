import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us",
  description:
    "Get a free construction or interior design consultation. Contact Screw Wood today.",
  alternates: { canonical: "/contact" },
};

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
