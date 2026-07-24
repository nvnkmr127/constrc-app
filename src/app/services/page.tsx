import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import CostEstimator from "@/components/CostEstimator";
import PackageComparison from "@/components/PackageComparison";
import MaintenanceComparison from "@/components/MaintenanceComparison";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero title="Our Services" image="/images/bangalore_hero_building.png" />
        <Services />
        <CostEstimator />
        <PackageComparison />
        <MaintenanceComparison />
      </main>
      <Footer />
    </>
  );
}
