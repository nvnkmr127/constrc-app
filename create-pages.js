const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'src', 'app');

function createPage(route, content) {
  const dirPath = path.join(appDir, route);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), content, 'utf8');
}

// 3. /services
createPage('services', `import Header from "@/components/Header";
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
`);

// 4. /projects
createPage('projects', `import Header from "@/components/Header";
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
`);

// 5. /news
createPage('news', `import Header from "@/components/Header";
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
`);

// 6. /contact
createPage('contact', `import Header from "@/components/Header";
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
`);

console.log('Successfully created all sub-pages.');
