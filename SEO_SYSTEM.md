# 🚀 Screw Wood - Complete Next.js SEO System & Yoast Suite Documentation

This document serves as the comprehensive technical & operational guide for the SEO architecture, Yoast-style admin suite, dynamic routing, tech stack, and Schema.org structured data built for `constrc-app`.

---

## ⚡ 1. Complete Technology Stack

| Layer | Technology | Usage & Purpose |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16 (App Router)** | Full-stack React framework with Turbopack, Server Components & SSG/ISR static rendering |
| **UI Library** | **React 19** | Modern component rendering with `useState`, `useEffect`, and Server Actions |
| **Language** | **TypeScript 5** | Strict type safety for data models, API responses, and prop definitions |
| **Styling** | **Tailwind CSS v4** | Utility-first responsive styling system with PostCSS engine |
| **Database** | **Supabase (PostgreSQL)** | Cloud database for storing customer leads (`leads`) & blog posts (`blogs`) with Row Level Security |
| **Backend Execution**| **Next.js Server Actions** | Native server-side code execution without needing a separate Express server |
| **Email Service** | **Resend API** | Automated instant lead alert email dispatching to `salman@scewwood.in` |
| **HTTP Client** | **Native Fetch API** | Zero-dependency lightweight REST API client for Supabase & Resend |
| **SEO Engine** | **Yoast-Style SEO Suite** | Real-time Google SERP simulator, focus keyword analyzer, title/description counters |
| **Structured Data**| **Schema.org (JSON-LD)** | Microdata markup (`GeneralContractor`, `LocalBusiness`, `BlogPosting`, `FAQPage`) |
| **Sitemap & Robots** | **Next.js Metadata API** | Dynamic `sitemap.ts` and `robots.ts` auto-generating XML sitemaps |

---

## 📐 2. Architecture Overview

The SEO engine is built natively into **Next.js App Router** with zero client-side hydration performance tax. Every page generates pure, static HTML optimized for Googlebot indexing with high Lighthouse speed scores.

```
                  ┌────────────────────────────────────────────────┐
                  │          Next.js App Router (SSG/ISR)          │
                  └───────────────────────┬────────────────────────┘
                                          │
       ┌──────────────────┬───────────────┼───────────────┬──────────────────┐
       ▼                  ▼               ▼               ▼                  ▼
  Core Pages       Blog Engine      Service Pages   Local SEO Pages     XML Sitemap
 (/, /services,  (/news/[slug])   (/services/...)     (/[slug])       (/sitemap.xml)
   /contact)             │                │               │                  │
       │                 │                │               │                  │
       └─────────────────┴────────────────┴───────────────┴──────────────────┘
                                          │
                                          ▼
                         ┌─────────────────────────────────┐
                         │   Yoast SEO Admin Suite (/admin) │
                         │  - Google SERP Live Simulator   │
                         │  - Focus Keyword Analyzer       │
                         │  - Schema.org JSON-LD Generator │
                         └─────────────────────────────────┘
```

---

## 🗺️ 3. Dynamic Route & Page Hierarchy

| Route Path | Page Purpose | SEO Focus & Keyword Strategy | Schema.org Type |
| :--- | :--- | :--- | :--- |
| `/` | Main Homepage | Turnkey House Construction in Bangalore | `GeneralContractor`, `LocalBusiness` |
| `/services` | Services Overview | Construction & Interior Design Services | `Service` |
| `/services/[slug]` | Service Detail Pages | Specific Service (e.g. Turnkey Construction) | `Service`, `BreadcrumbList` |
| `/[slug]` | Local SEO Landing Pages | Geo-targeted Neighborhoods (e.g. HBR Layout) | `LocalBusiness`, `BreadcrumbList` |
| `/news` | Blog Hub | Construction Guides & Market News | `Blog` |
| `/news/[slug]` | Article Detail Pages | Long-tail Technical Keywords (e.g. BBMP Approvals) | `BlogPosting`, `BreadcrumbList` |
| `/admin` | Admin Login | Passcode verification screen | N/A |
| `/admin/dashboard` | Admin Control Panel | Leads Inbox, Blog Writer Studio, Yoast SEO | N/A |
| `/sitemap.xml` | Dynamic XML Sitemap | Auto-registers all core, service, blog & local URLs | N/A |
| `/robots.txt` | Crawler Instructions | Allows Googlebot indexing & links to sitemap | N/A |

---

## 🎯 4. Yoast SEO Suite in Admin Dashboard (`/admin/dashboard`)

Access the Admin Dashboard at `/admin` (Default passcode: `screwwood2025`).

### Key Capabilities:
1. **Google SERP Snippet Simulator**: Real-time Desktop & Mobile card preview showing exactly how your page will appear on Google search results as you type.
2. **SEO Health Score (0–100)**: Instant visual feedback (`🟢 Good`, `🟡 Needs Improvement`, `🔴 Poor`).
3. **Title & Meta Description Counters**:
   - **Title Tag**: Target length **45–60 characters**.
   - **Meta Description**: Target length **120–160 characters**.
4. **Focus Keyword Analyzer**:
   - Checks keyword presence in SEO Title, Meta Description, URL Slug, and Content body.
   - Calculates content keyword density.
5. **OpenGraph Social Preview**: Custom image URL override for WhatsApp, Facebook, LinkedIn, and Twitter shares.

---

## 🏷️ 5. Structured Data (Schema.org JSON-LD)

All pages auto-inject `Schema.org` JSON-LD scripts via [`src/lib/schema.ts`](file:///Users/naveenadicharla/Documents/constrc-app/src/lib/schema.ts).

### Example Injected Schemas:

#### A. LocalBusiness / GeneralContractor Schema
```json
{
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "name": "Screw Wood",
  "url": "https://screwwood.com",
  "telephone": "+91 9014303409",
  "email": "salman@scewwood.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "38th Cross Rd, 1751, 15th Main Rd, HBR Layout 5th Block",
    "addressCountry": "IN"
  },
  "areaServed": ["Bangalore", "HBR Layout", "Indiranagar", "Whitefield"]
}
```

#### B. BlogPosting Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Top Sustainable Building Materials for Homes in Bangalore",
  "datePublished": "2024-10-15T10:00:00Z",
  "author": { "@type": "Organization", "name": "Screw Wood Team" },
  "publisher": { "@type": "Organization", "name": "Screw Wood" }
}
```

---

## 📝 6. How to Add & Edit SEO Content

### Editing Existing Page Meta Tags
1. Log into `/admin/dashboard`.
2. Click the **🎯 Yoast Page SEO Manager** tab.
3. Select any target page (`/construction-company-hbr-layout`, `/services/house-construction`, etc.) from the sidebar.
4. Modify the SEO Title and Meta Description while observing the live Google SERP preview and health checklist.
5. Click **Save Yoast SEO Metadata**.

### Publishing SEO-Optimized Blog Posts
1. Go to `/admin/dashboard` ➔ **✍️ Blog Writer & Yoast SEO** tab.
2. Fill out the Title, Category, Author, and Article Content.
3. Use the integrated Yoast SEO card to set your Focus Keyword and fine-tune your Google Snippet.
4. Click **Publish with Yoast SEO**. The post instantly appears live on `/news` and `/news/[slug]`.

---

## 🛠️ 7. Build Diagnostics & Verification

To verify TypeScript types and static page generation across all 26+ routes, run:

```bash
npm run build
```

Production build generates pure static HTML pages with zero broken links and full XML sitemap synchronization.
