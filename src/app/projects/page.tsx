import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Projects from "@/components/Projects";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero title="Our Projects" image="/images/bangalore_architect_planning.png" />
        <Projects />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
