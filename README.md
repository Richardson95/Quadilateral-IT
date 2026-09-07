# Quadilateral IT — one-page site

A single-page marketing site for an IT consultancy: software engineering, AI
engineering and automation, data and analytics, email marketing, maintenance,
product/project management, design, and the Quadilateral Academy.

Built with **Next.js 15 (App Router) · TypeScript (strict) · Tailwind CSS v4 ·
Framer Motion**.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # production build
npm start          # serve the production build
npm run typecheck  # tsc --noEmit
```

## Where the content lives

**`src/lib/site.ts` is the single source of truth.** Brand, contact details,
navigation, services, portfolio projects, process steps, academy tracks,
testimonials, FAQs and the tech stack are all plain typed data there.
Edit that file and every section, the footer, the sitemap and the JSON-LD update
together — you should rarely need to touch a component to change copy.

To rename the company, change `site.name` / `site.shortName` / `site.legalName`.
(The directory spelling `Quadilateral` is used throughout; change it in one place
if you want `Quadrilateral`.)

## Structure

```
src/
  app/
    layout.tsx              root shell: metadata, fonts, theme, header/footer
    page.tsx                the one page — section components in order
    globals.css             design tokens, theme variables, custom utilities
    icon.tsx                generated favicon
    opengraph-image.tsx     generated 1200×630 share card
    sitemap.ts / robots.ts  SEO routes
    api/contact/route.ts    validated, rate-limited contact endpoint
    api/newsletter/route.ts newsletter capture endpoint
  components/
    site-header.tsx         sticky nav that condenses on scroll + scroll spy
    site-footer.tsx         newsletter band, sitemap columns, socials
    sections/               hero, services, work, process, why-us, academy,
                            stack, testimonials, faq, cta, contact
    ui/                     primitives, reveal/stagger, spotlight card, counter,
                            backdrop, chrome (theme toggle, progress, to-top)
  lib/
    site.ts                 all content
    structured-data.ts      schema.org JSON-LD graph
    contact-schema.ts       Zod schema shared by the form and the API
```

## Design system

Colour, spacing and motion tokens live in `src/app/globals.css`:

- `@theme` defines the brand ramp (`--color-brand-*`), accent colours, radii and
  keyframes, exposed as Tailwind utilities (`text-brand-400`, `animate-marquee`).
- `:root` / `.dark` define semantic surface tokens (`--bg`, `--fg`, `--card`,
  `--line`, glow colours). **Light is the base; dark overrides.** Both themes are
  fully designed — the toggle is in the header, and system preference is honoured.
- Custom utilities: `.glass`, `.gradient-text`, `.gradient-ring`, `.spotlight`,
  `.grid-bg`, `.fade-mask-x`, `.fade-mask-b`, `.shimmer-text`.

Every animation is disabled under `prefers-reduced-motion: reduce`.

## Forms

Both endpoints validate with Zod, carry a honeypot field, and log submissions by
default. To deliver them somewhere real, set `CONTACT_WEBHOOK_URL` (Slack, Zapier,
n8n, make.com) — see `.env.example`. For transactional email, add your provider
call inside `src/app/api/contact/route.ts` where the webhook fan-out happens.

The contact route rate-limits to 4 submissions per minute per IP using an
in-process map; if you deploy to more than one instance, swap it for Upstash or
another shared store.

## SEO & sharing

- Full Open Graph and Twitter metadata, canonical URL, robots directives.
- `schema.org` JSON-LD graph: `ProfessionalService`, `WebSite`, `FAQPage` and a
  `Course` entry per academy track — generated from the same content data.
- Generated favicon and OG image, so nothing goes stale when copy changes.

Set `NEXT_PUBLIC_SITE_URL` to the production domain before deploying.

The canonical URL is resolved once in `src/lib/site-url.ts` and reused by the
metadata, sitemap, robots and JSON-LD. It tolerates the ways this value goes
wrong in practice — a variable defined as an empty string, a bare host with no
protocol, stray whitespace, a trailing slash — and falls back through
`VERCEL_PROJECT_PRODUCTION_URL`, `VERCEL_URL` and finally `site.url`. A bad
value can degrade the canonical URL, but it can no longer fail the build.

## Accessibility

Skip link, visible focus rings, labelled form fields with inline errors,
`aria-live` status messages, `aria-expanded` on the FAQ and mobile menu,
semantic landmarks, and decorative layers marked `aria-hidden`.

## Deploying

Deploys to Vercel with no configuration. Any Node host works via
`npm run build && npm start`. Remember to set the environment variables from
`.env.example`.
