# Screw Wood SEO System — Agent Prompt Pack
### Spec-driven prompts for building with a vibe coding agent (2026)

**By DigiCloudify.** Companion to `ScrewWood-Advanced-SEO-System-Spec.md`. This pack is structured the way current AI coding agents actually work best: a shared rules file the agent reads on **every** task (so it never drifts or invents APIs), plus one focused, spec-driven prompt per module with testable acceptance criteria.

---

## How to use this pack

**Step 1 — Drop in the constitution.** Copy the `AGENTS.md` block below into your repo root. Cursor, Windsurf, Claude Code, Codex, Copilot and most CLI/IDE agents auto-read `AGENTS.md` on every request — it carries the stack, NAP, and guardrails so each module prompt stays short and the agent stops making bad assumptions.
- **Browser builders (Bolt, Lovable, v0)** don't read repo files the same way. For those, paste the condensed `## Context block for browser builders` (below the AGENTS.md) at the top of your *first* prompt in the session.

**Step 2 — Run one module per session, in order.** Prompts are ordered by dependency (P0 → P13). Commit after each. Don't batch multiple modules into one prompt — atomic scope is what keeps the agent reviewable and correct.

**Step 3 — Use plan-then-build.** If your agent has a Plan Mode (Cursor, Claude Code), let it plan first, approve, then implement. Each prompt ends with a **Verify** step — make the agent run it before you move on.

**Model / agent note.** Use a frontier reasoning model for the multi-file work (Claude Opus/Sonnet-class or equivalent); the prompts are agent-agnostic. Keep secrets in `.env.local`, never in prompts. You can safely combine the three "Crawl" prompts (P3a/P3b/P3c) in one session if your agent handles it well; keep everything else separate.

---

## 📌 AGENTS.md (paste into repo root)

```md
# AGENTS.md — Screw Wood Advanced SEO System

## Project
Extend the existing `constrc-app` (Screw Wood, turnkey construction & interiors, HBR
Layout, Bengaluru) into a database-driven SEO control plane. The admin edits SEO;
every page reads from ONE resolution layer; nothing SEO-related is hardcoded in JSX.

## Stack — do not deviate
- Next.js 16 (App Router), React 19, TypeScript 5 (strict mode)
- Tailwind CSS v4 (match existing admin styling)
- Supabase (PostgreSQL) for data, with Row Level Security
- Next.js Server Actions for all mutations (no separate API server)
- Resend for transactional email
- Zod for input validation on every Server Action
- next/og (ImageResponse) for dynamic OG images

## Conventions
- SEO/meta/schema/robots/sitemap data lives in Supabase, never hardcoded.
- Pages set metadata via `src/lib/seo/resolve.ts` inside `generateMetadata()`.
- All writes are Server Actions: server-only, use the service-role Supabase client
  from `src/lib/supabase/server.ts`. The service role key NEVER reaches the client.
- After any write affecting public output, call `revalidatePath()` / `revalidateTag()`.
- Shared types in `src/lib/types.ts`. Every Server Action returns `{ ok, data?, error? }`.
- Client Supabase (public anon key) only for read-safe public data.

## Verified business facts — single source of truth (NAP)
- Name: Screw Wood
- Address: 38th Cross Rd, 1751, 15th Main Rd, 5th Block, 1st Stage, Telecom Layout,
  HBR Layout, Bengaluru, Karnataka 560043
- Phone / WhatsApp: +91 90143 03409
- Public email: reachus@screwwood.in
- Website: https://www.screwwood.in
NAP must be byte-identical across the site, schema, and settings.

## Hard guardrails — never violate
- NEVER hardcode review counts, star ratings, or AggregateRating. Render them ONLY
  from a live provider (Google/Trustpilot). There is NO admin field for a review number.
- NEVER expose SUPABASE_SERVICE_ROLE_KEY, RESEND_API_KEY, META_CAPI_TOKEN, or the GSC
  service-account JSON to the client bundle.
- NEVER invent brand statistics. Quality-check counts, warranty terms, etc. come only
  from `seo_settings.brand_stats`.
- Do NOT create thin or duplicate geo/location pages for areas Screw Wood does not serve.
- Admin routes (`/admin/**`) must be access-gated, set to `noindex`, and excluded
  from the sitemap and robots.

## Definition of done — applies to every task
- `npm run build` passes with zero TypeScript errors; all routes generate.
- New Server Actions validate input with Zod and return the typed result shape.
- The intended public output is verified in page source (correct tag / JSON-LD present).
- No secret appears in the client bundle.
```

### Context block for browser builders (Bolt / Lovable / v0)
> Prepend this to your first prompt if the tool can't read AGENTS.md:
> *"Stack: Next.js 16 App Router, TypeScript strict, Tailwind v4, Supabase (Postgres + RLS), Next.js Server Actions, Zod validation, Resend. All SEO data lives in Supabase — nothing hardcoded. Business NAP (use exactly): Screw Wood, 38th Cross Rd, 1751, 15th Main Rd, 5th Block, 1st Stage, Telecom Layout, HBR Layout, Bengaluru, Karnataka 560043 · +91 90143 03409 · reachus@screwwood.in · https://www.screwwood.in. Hard rules: never hardcode review counts/ratings; never expose service-role or API keys client-side; gate + noindex /admin. After every module, `npm run build` must pass."*

---

# The prompts

Each prompt uses the same spec-driven shape: **Goal → Depends on → Build (atomic tasks) → Files → Acceptance (EARS) → Guardrails → Verify.** EARS = "WHEN [trigger], THE SYSTEM SHALL [behaviour]" — unambiguous, testable criteria the agent can self-check against.

---

## P0 — Foundation: database + SEO resolution layer

```
GOAL
Set up the Supabase schema and the single SEO resolution layer that every later module
reads from and writes to.

DEPENDS ON
Nothing. This is the base.

BUILD
1. Create a SQL migration at supabase/migrations/ with these tables (enable RLS on all;
   grant write to service role only, read-safe tables to anon):
   seo_meta, seo_settings (single row id=1), robots_rules, redirects, schema_blocks,
   tracking_config (single row id=1), seo_audits, image_seo.
   Use the exact columns from the companion spec §3. Seed seo_settings row 1 with the
   verified NAP from AGENTS.md and seed brand_stats = {quality_checks:415, warranty_structural:'10-15 years', warranty_workmanship:'1 year', delays:'zero'}.
2. Create src/lib/supabase/server.ts (service-role client, server-only) and
   src/lib/supabase/client.ts (anon client).
3. Create src/lib/types.ts with TS types mirroring every table.
4. Create src/lib/seo/resolve.ts exporting `resolveSeo(path: string): Promise<Metadata>`
   that merges seo_meta over seo_settings defaults (title template, canonical, robots
   index/follow, OpenGraph, Twitter, GSC/Bing verification). Handle the no-row case by
   falling back to settings defaults.
5. Wire the site's default OG + verification into the root layout metadata via resolveSeo('/').

FILES
supabase/migrations/0001_seo_system.sql, src/lib/supabase/server.ts,
src/lib/supabase/client.ts, src/lib/types.ts, src/lib/seo/resolve.ts,
src/app/layout.tsx (edit)

ACCEPTANCE (EARS)
- WHEN a page calls resolveSeo(path) and a seo_meta row exists, THE SYSTEM SHALL return
  metadata with the row's overrides applied over settings defaults.
- WHEN no seo_meta row exists for a path, THE SYSTEM SHALL return valid metadata built
  entirely from seo_settings defaults (no nulls in title/description/canonical).
- WHEN resolveSeo runs, THE SYSTEM SHALL set canonical to site_url + path unless overridden.

GUARDRAILS
Service-role client is imported only in server files. NAP written to the seed row matches
AGENTS.md byte-for-byte.

VERIFY
Run the migration; `npm run build`; view "/" source and confirm title, canonical, and
verification meta render from the DB seed.
```

---

## P1 — Module 2: Global SEO Settings (admin)

```
GOAL
One admin screen to edit all site-wide SEO: identity, NAP, socials, verification, and
brand stats. This is the source resolve.ts and schema read from.

DEPENDS ON
P0.

BUILD
1. Server Action getSettings() and updateSettings(input) — Zod-validated, upserts
   seo_settings id=1, then revalidateTag('seo') (tag the layout).
2. Admin route src/app/admin/dashboard/settings/page.tsx with tabbed form:
   Identity (site_name, site_url, default_title_template, default_meta_desc, default_og_image),
   Business/NAP (address parts, phone, whatsapp, email, geo_lat, geo_lng, opening_hours),
   Social (instagram/facebook/youtube/pinterest/linkedin → sameAs),
   Verification (gsc_verification, bing_verification),
   Brand Stats (editable JSON-backed fields).
3. Show a "NAP preview" that renders exactly how the address string will appear in schema.

FILES
src/app/actions/settings.ts, src/app/admin/dashboard/settings/page.tsx,
components as needed.

ACCEPTANCE (EARS)
- WHEN an admin saves settings, THE SYSTEM SHALL upsert row id=1 and revalidate cached
  pages within one cycle.
- WHEN opening_hours or social_profiles is empty, THE SYSTEM SHALL save without error and
  omit them downstream (no empty schema keys).
- IF title_template lacks "%s", THE SYSTEM SHALL warn but still save.

GUARDRAILS
No review-count field exists on this form. Admin route gated + noindex.

VERIFY
Change site_name, save, reload "/", confirm the new name appears in the title tag.
```

---

## P2 — Module 1: Universal Page SEO Editor (admin)

```
GOAL
Edit the full search appearance of ANY route (static, /services/[slug], /[slug] local,
/news/[slug]) — title, meta, canonical, index/follow, OG/Twitter, attached schema,
sitemap priority/changefreq — with a live Google SERP preview and health checklist.

DEPENDS ON
P0, P1.

BUILD
1. Server Actions: listSeoPaths() (union of known static routes + service slugs + local
   slugs + published blog slugs), getPageSeo(path), savePageSeo(path, input).
   savePageSeo upserts seo_meta and revalidatePath(path).
2. Admin route src/app/admin/dashboard/pages/page.tsx: sidebar route picker + editor.
3. Editor fields: title (counter 45–60), meta_desc (counter 120–160), canonical_url,
   focus_keyword, index toggle, follow toggle, og_title/og_desc/og_image, twitter_card,
   schema_ids multiselect (from schema_blocks), priority, changefreq.
4. Live components: Desktop + Mobile Google SERP simulator; focus-keyword checklist
   (present in title / meta / slug / H1 / first paragraph); pass/warn/fail health score.
5. Ensure every dynamic page's generateMetadata() calls resolveSeo() so overrides show live.

FILES
src/app/actions/page-seo.ts, src/app/admin/dashboard/pages/page.tsx,
src/components/SerpPreview.tsx, generateMetadata edits on page.tsx files.

ACCEPTANCE (EARS)
- WHEN an admin sets index=false for a path, THE SYSTEM SHALL emit robots noindex on that
  page AND exclude it from sitemap.
- WHEN title length is outside 45–60, THE SYSTEM SHALL flag it but allow save.
- WHEN a page is saved, THE SYSTEM SHALL reflect the change on the live page within one
  revalidation cycle with no redeploy.

GUARDRAILS
Never write a title of "Screw Wood - Screw Wood" style duplicates; validate against it.

VERIFY
Override "/" title + meta, save, reload, confirm both render and the SERP preview matched.
```

---

## P3a — Module 3: robots.txt Manager (dynamic)

```
GOAL
Editable robots.txt with no redeploy: per-user-agent allow/disallow, sitemap reference,
and AI-crawler policy (GPTBot, ClaudeBot, Google-Extended, PerplexityBot, CCBot).

DEPENDS ON
P0.

BUILD
1. src/app/robots.ts (MetadataRoute.Robots) reading robots_rules grouped by user_agent,
   plus sitemap = site_url + '/sitemap.xml' and host from settings.
2. Server Actions listRobotsRules / addRule / deleteRule / reorderRules.
3. Admin route src/app/admin/dashboard/crawl/robots/page.tsx: rule table + add-rule form +
   AI-crawler toggle group (each toggle writes an allow/disallow row for that agent).
4. Seed defaults: Disallow /admin, /api, and *?* query URLs for "*".

FILES
src/app/robots.ts, src/app/actions/robots.ts, admin page.

ACCEPTANCE (EARS)
- WHEN an admin disables an AI crawler, THE SYSTEM SHALL emit Disallow: / for that user-agent
  in robots.txt.
- WHEN rules change, THE SYSTEM SHALL reflect them at /robots.txt on next request.

GUARDRAILS
/admin always disallowed regardless of admin edits.

VERIFY
Fetch /robots.txt, confirm defaults + sitemap line render.
```

## P3b — Module 4: XML Sitemap Engine

```
GOAL
Dynamic sitemap from the DB with accurate lastmod/priority/changefreq, merging static
routes, services, local pages, and published blogs; image entries from image_seo.

DEPENDS ON
P0 (P2 for priority values).

BUILD
1. src/app/sitemap.ts (MetadataRoute.Sitemap): pull indexed seo_meta rows + published
   blogs; map to url/lastModified/changeFrequency/priority. Exclude index=false paths.
2. If URL count could exceed 50k, implement generateSitemaps() chunking.
3. Admin: reuse crawl tab to list all sitemap URLs with editable priority/changefreq
   (these write back to seo_meta) and a "Ping Google & Bing" action.

FILES
src/app/sitemap.ts, src/app/actions/sitemap.ts, admin section.

ACCEPTANCE (EARS)
- WHEN a page has index=false, THE SYSTEM SHALL omit it from /sitemap.xml.
- WHEN a blog is published, THE SYSTEM SHALL include /news/[slug] with its updated_at as lastmod.

GUARDRAILS
Admin routes never appear in the sitemap.

VERIFY
Fetch /sitemap.xml; confirm a noindex page is absent and a published blog is present.
```

## P3c — Module 5: Redirects Manager

```
GOAL
301/302 redirects (exact + regex), CSV bulk import for the URL migration, and
chain/loop detection — enforced in middleware.

DEPENDS ON
P0.

BUILD
1. src/lib/seo/redirects.ts with an in-memory cache of active redirects, busted on save.
2. src/middleware.ts matching path against exact + regex rules and issuing
   NextResponse.redirect with the stored status; matcher excludes _next/api/admin.
   Increment hits asynchronously.
3. Server Actions: listRedirects, addRedirect (validate no loop/chain against existing),
   deleteRedirect, importRedirectsCsv.
4. Admin route src/app/admin/dashboard/crawl/redirects/page.tsx: table + add form +
   CSV upload + chain warnings.

FILES
src/lib/seo/redirects.ts, src/middleware.ts, src/app/actions/redirects.ts, admin page.

ACCEPTANCE (EARS)
- WHEN a request path matches an active redirect, THE SYSTEM SHALL respond with the stored
  status code and destination before rendering.
- IF a new redirect would create a chain or loop, THE SYSTEM SHALL reject it with a clear error.

GUARDRAILS
Cache redirects; do not query Supabase on every request.

VERIFY
Add /old → /new (301); request /old; confirm 301 to /new; confirm no loop can be saved.
```

---

## P4 — Module 6: Structured Data (Schema.org) Manager

```
GOAL
Create reusable JSON-LD blocks and attach them to pages. Global blocks (Organization,
GeneralContractor/LocalBusiness) inject everywhere; page blocks (Service, FAQPage,
BlogPosting, HowTo, BreadcrumbList) attach via seo_meta.schema_ids. Per-type validation.

DEPENDS ON
P0, P1, P2.

BUILD
1. src/components/JsonLd.tsx injector.
2. Server Actions: listSchemaBlocks, saveSchemaBlock (validate required fields per @type),
   deleteSchemaBlock.
3. Auto-build Organization + GeneralContractor blocks from seo_settings NAP + brand_stats,
   marked is_global=true.
4. Admin route src/app/admin/dashboard/schema/page.tsx: block library, type-specific
   builder forms, JSON preview, and a "validate" check.
5. Render is_global blocks in root layout; render page-attached blocks in each page.

FILES
src/components/JsonLd.tsx, src/app/actions/schema.ts, src/lib/seo/build-schema.ts,
admin page, layout + page edits.

ACCEPTANCE (EARS)
- WHEN settings NAP changes, THE SYSTEM SHALL regenerate the Organization/LocalBusiness
  JSON-LD with the new values.
- WHEN a FAQPage block is attached to a path, THE SYSTEM SHALL inject valid FAQPage JSON-LD
  on that page only.
- THE SYSTEM SHALL provide NO input for review count or star rating anywhere in this module.

GUARDRAILS
AggregateRating may only be enabled by connecting a live provider; otherwise omit it entirely.

VERIFY
View "/" source; confirm one GeneralContractor JSON-LD with correct NAP; run it through a
schema validator mentally (required fields present).
```

---

## P5 — Module 7: Tracking & Analytics + Consent

```
GOAL
Admin-managed GA4, GTM, Meta Pixel with Consent Mode v2 (default denied), a conversion
event map (lead submit, WhatsApp click, call click, calculator complete), and an optional
Meta Conversions API server path.

DEPENDS ON
P0.

BUILD
1. Server Actions getTracking / updateTracking (upsert tracking_config id=1). Store CAPI
   token server-side only.
2. src/components/Analytics.tsx: Consent Mode v2 default-denied init, then GTM, GA4, and
   Meta Pixel loaders reading public IDs. Render in root layout.
3. src/components/ConsentBanner.tsx: on accept, gtag('consent','update', granted) and
   flush queued events.
4. Event helpers: fire GA4 'generate_lead' + Meta 'Lead' on successful lead submit; also
   dispatch the existing CRM/WhatsApp handoff. Add click handlers for WhatsApp/call CTAs.
5. Optional: server route posting a Meta CAPI 'Lead' event with hashed data.
6. Admin route src/app/admin/dashboard/tracking/page.tsx: ID fields + consent default +
   sanitized custom head scripts (admin-only).

FILES
src/app/actions/tracking.ts, src/components/Analytics.tsx,
src/components/ConsentBanner.tsx, src/lib/track.ts, layout edit, admin page.

ACCEPTANCE (EARS)
- WHEN the app loads before consent, THE SYSTEM SHALL set all consent categories to denied.
- WHEN a user accepts consent, THE SYSTEM SHALL update consent to granted and load/flush
  analytics events.
- WHEN a lead form submits successfully, THE SYSTEM SHALL fire GA4 generate_lead AND Meta Lead
  AND trigger the CRM handoff.

GUARDRAILS
Only public IDs (GA4/GTM/Pixel) reach the client. CAPI token, keys stay server-side.

VERIFY
Load site, confirm consent defaults denied in dataLayer; accept, confirm GA4/Pixel fire;
submit a test lead, confirm both events dispatch.
```

---

## P6 — Module 9: Content / Blog SEO analyzer

```
GOAL
Upgrade the Blog Writer with a real-time SEO + readability analyzer and internal-link
suggestions, output as a 0–100 score with an actionable checklist.

DEPENDS ON
P0, P2.

BUILD
1. src/lib/seo/analyze.ts: given {title, slug, content, focus_keyword, meta}, compute
   keyword presence (title/H1/first-para/URL/alt/meta), density band, readability
   (avg sentence length, passive voice %, transition words), link counts.
2. src/lib/seo/internal-links.ts: scan other published posts/pages for anchor opportunities
   matching the focus keyword; return suggestions.
3. Integrate a live analyzer card into the existing blog writer with the pass/warn/fail
   checklist and score.

FILES
src/lib/seo/analyze.ts, src/lib/seo/internal-links.ts, blog writer edits.

ACCEPTANCE (EARS)
- WHEN content updates, THE SYSTEM SHALL recompute the score and checklist without reload.
- WHEN the focus keyword is missing from the first paragraph, THE SYSTEM SHALL flag it.

GUARDRAILS
The analyzer must not auto-insert fabricated stats or testimonials into content.

VERIFY
Draft a post, confirm the score and internal-link suggestions update as you type.
```

---

## P7 — Module 10: Local SEO + NAP consistency checker

```
GOAL
Manage geo landing pages for HBR Layout and confirmed serviceable Bengaluru areas, each
with localized content + LocalBusiness schema (geo-coords, service area) + map, plus a
checker that flags any NAP drift against Global Settings.

DEPENDS ON
P0, P1, P4.

BUILD
1. Local page template /[slug] pulling geo config; attach LocalBusiness schema with
   geo_lat/geo_lng and areaServed from settings.
2. Admin: list geo pages, add/edit (localized title/H1/content, embedded map), publish.
3. src/lib/seo/nap-check.ts: crawl rendered contact surfaces + schema for NAP strings and
   diff against seo_settings; report mismatches.

FILES
src/app/[slug]/page.tsx (edit), src/app/actions/local.ts, src/lib/seo/nap-check.ts,
admin local page.

ACCEPTANCE (EARS)
- WHEN a geo page renders, THE SYSTEM SHALL output LocalBusiness JSON-LD with matching NAP
  and coordinates.
- WHEN any surface's NAP differs from settings, THE SYSTEM SHALL list the exact mismatch.

GUARDRAILS
Do not generate geo pages for unserved areas; require an "is served" flag before publish.

VERIFY
Publish the HBR Layout page; run the NAP checker; confirm zero drift.
```

---

## P8 — Module 8: Search Console + GA4 data (read-in)

```
GOAL
Pull performance data into the dashboard: top queries + clicks/impressions/CTR/position
per page (GSC API), organic sessions/conversions (GA4 Data API), index status, plus
submit-sitemap and URL-inspection actions. Snapshot into seo_audits for trends.

DEPENDS ON
P0. Requires a Google service account with GSC + GA4 access.

BUILD
1. Server-only client using GSC_SERVICE_ACCOUNT_JSON + GA4_PROPERTY_ID.
2. Server Actions: getSearchAnalytics(range), getGa4Organic(range), inspectUrl(url),
   submitSitemap(). Never call these client-side.
3. Overview dashboard cards + a per-page insights view; write daily snapshots to seo_audits.

FILES
src/lib/google/*.ts, src/app/actions/insights.ts, src/app/admin/dashboard/insights/page.tsx.

ACCEPTANCE (EARS)
- WHEN an admin opens Insights, THE SYSTEM SHALL show top queries and per-page metrics for
  the selected range.
- WHEN submitSitemap runs, THE SYSTEM SHALL POST the sitemap URL to the GSC API and report status.

GUARDRAILS
Service-account JSON and tokens are server-only.

VERIFY
Load Insights with a connected account; confirm real query rows appear.
```

---

## P9 — Module 11: Technical SEO

```
GOAL
Canonical management, optional hreflang, blog pagination handling, an on-demand broken-link
scanner, and Core Web Vitals capture.

DEPENDS ON
P0, P2.

BUILD
1. Self-referencing canonical by default (already in resolve.ts); admin override for dupes.
2. Broken-link scanner Server Action: crawl internal links, log 4xx/5xx to seo_audits.
3. CWV: add web-vitals reporting to an endpoint (LCP/INP/CLS) with per-path aggregation.
4. Pagination: rel handling / canonical strategy for /news archive pages.

FILES
src/app/actions/tech-seo.ts, src/lib/seo/link-scan.ts, src/app/api/vitals/route.ts,
web-vitals client hook, admin technical page.

ACCEPTANCE (EARS)
- WHEN the link scan runs, THE SYSTEM SHALL record every internal URL returning 4xx/5xx.
- WHEN a page loads, THE SYSTEM SHALL report its LCP/INP/CLS to the vitals endpoint.

GUARDRAILS
Scanner respects robots and does not hammer the origin (throttle).

VERIFY
Run the scan on a known-broken link; confirm it's logged with status.
```

---

## P10 — Modules 12–14: AI/GEO, Audit & Monitoring, Media

```
GOAL
Ship the final layer: AI-search readiness, automated auditing with drift alerts, and
image SEO with auto OG images.

DEPENDS ON
P0–P9.

BUILD
1. AI/GEO: src/app/llms.txt route (site summary + key URLs); AI-crawler rules shared with
   robots; ensure FAQ content is wrapped in FAQPage schema; a simple citability score
   (headings, self-contained answers, entity clarity).
2. Audit & Monitoring: on-demand + scheduled (cron) audits writing score+issues to
   seo_audits; a health dashboard; drift detection diffing the latest snapshot vs the
   previous baseline (title/canonical/schema changes); email + WhatsApp alerts on regressions.
3. Media: image_seo alt-text manager; filename/format hygiene prompts; dynamic OG image
   generation with next/og ImageResponse for every page and blog.

FILES
src/app/llms.txt/route.ts, src/lib/seo/audit.ts, src/lib/seo/drift.ts,
src/app/api/og/route.tsx, admin pages for AI/Audit/Media.

ACCEPTANCE (EARS)
- WHEN /llms.txt is requested, THE SYSTEM SHALL return the site summary and key URLs.
- WHEN a scheduled audit detects a removed canonical or broken schema vs the last baseline,
  THE SYSTEM SHALL record a drift issue and send an alert.
- WHEN a page or blog lacks a custom OG image, THE SYSTEM SHALL serve a branded generated one.

GUARDRAILS
Alerts must not leak secrets; OG images must not render unverified stats/ratings.

VERIFY
Trigger an audit, change a title, re-run; confirm drift is detected and alerted.
```

---

## Run order (dependency-safe)

```
P0  Foundation + resolver        ← everything depends on this
P1  Global Settings              ← resolver + schema read from it
P2  Universal Page Editor
P3a robots.txt   P3b Sitemap   P3c Redirects   (Crawl trio — combinable)
P4  Schema Manager
P5  Tracking + Consent
P6  Content/Blog SEO
P7  Local SEO + NAP checker
P8  GSC + GA4 read-in
P9  Technical SEO
P10 AI/GEO + Audit + Media
```

Commit after each. If your agent supports it, run `/plan` first, approve, then implement — and always run the **Verify** step before moving on.

---

*Screw Wood × DigiCloudify — confidential. Pair with the Advanced SEO System Spec. Confirm brand stats and serviceable areas with Naveen/Salman before going live.*
