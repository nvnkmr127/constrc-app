import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import CostEstimator from "@/components/CostEstimator";
import PackageComparison from "@/components/PackageComparison";
import MaintenanceComparison from "@/components/MaintenanceComparison";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Construction & Interior Services",
  description:
    "Turnkey construction, interior design and home building services across Bangalore, Hyderabad, Mumbai and Delhi.",
  alternates: { canonical: "/services" },
};

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
