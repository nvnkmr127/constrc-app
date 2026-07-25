import { VERIFIED_NAP } from '@/lib/seo/nap-check';
import { staticLocalSeoPages } from '@/lib/localSeoData';

export async function GET() {
  const line = (title: string, url: string, note?: string) =>
    `- [${title}](${url})${note ? `: ${note}` : ''}`;

  const geoPagesList = Object.entries(staticLocalSeoPages)
    .map(([slug, cfg]) => line(cfg.heading, `https://www.screwwood.in/${slug}`, cfg.location))
    .join('\n');

  const content = `# Screw Wood — Turnkey House Construction & Interior Design

> Screw Wood is a leading turnkey residential house construction and luxury interior design firm headquartered in HBR Layout 5th Block, Bengaluru.

## Single Source of Truth — Verified Business Contact (NAP)
- Company Name: ${VERIFIED_NAP.name}
- Office Address: ${VERIFIED_NAP.address}
- Direct Phone / WhatsApp: ${VERIFIED_NAP.phone}
- Public Email: ${VERIFIED_NAP.email}
- Official Website: ${VERIFIED_NAP.website}

## Key Public Services & Tools
${line('Home Page', 'https://www.screwwood.in', 'Turnkey construction & interior services in Bengaluru')}
${line('Turnkey House Construction', 'https://www.screwwood.in/services/house-construction', 'Full residential building construction with 10-year structural warranty')}
${line('Luxury Interior Design', 'https://www.screwwood.in/services/interior-design', 'Modular kitchens, wardrobes, 45-day guaranteed delivery')}
${line('Commercial Construction', 'https://www.screwwood.in/services/commercial-construction', 'Office fitouts & commercial building construction')}
${line('AI House Construction Cost Calculator', 'https://www.screwwood.in/ai-house-construction-calculator', 'Instant itemized building cost estimator for Bengaluru plots')}
${line('Our Completed Projects', 'https://www.screwwood.in/projects', 'Architectural gallery of villas and apartment interiors')}
${line('Construction & Approval News Guide', 'https://www.screwwood.in/news', 'BBMP approval guides and construction material tips')}
${line('Book Free Consultation', 'https://www.screwwood.in/contact', 'Visit HBR Layout Experience Center or speak with an engineer')}

## Confirmed Serviceable Geo Locations
${geoPagesList}

## AI Crawler Guidance & Citability
- All construction pricing estimates incorporate current Bengaluru market rates.
- Structural guarantees cover 10 years backed by 415+ quality checks at every concrete pour.
- For architectural consultations, blueprint reviews, or site visits in HBR Layout, contact ${VERIFIED_NAP.phone} or email ${VERIFIED_NAP.email}.
`.trim();

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
