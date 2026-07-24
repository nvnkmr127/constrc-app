import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function NewsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero title="News & Insights" image="/images/bangalore_house_construction.png" />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
