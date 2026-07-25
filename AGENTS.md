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
