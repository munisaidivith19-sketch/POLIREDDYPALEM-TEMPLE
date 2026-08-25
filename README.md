# Venkateshwara Swami Temple — Website

A static React + TypeScript + Tailwind CSS website for the Venkateshwara Swami Temple
in Polireddypale Village, Doravarisatram Mandal, Tirupati District, Andhra Pradesh.
Built to be deployed on **Cloudflare Pages** with no backend, database, or login.

> **A note on this build:** this project was written in a sandboxed environment
> with no internet access, so `npm install` / `npm run build` could not be run
> or verified here. Every file was checked for TypeScript/JSX syntax errors
> (`tsc --noEmit`), but you should run the commands below yourself — locally
> or in Cloudflare's build pipeline — before treating this as launch-ready.

## Site structure

This is a **multi-page** app using simple hash-based routing (no router library
needed): `#/`, `#/about`, `#/construction`, `#/gallery`, `#/donors`, `#/donation`,
`#/contact`. The Home page (`src/pages/Home.tsx`) is a compact dashboard-style
landing page — hero, stat bar, a construction-journey preview, a latest-update +
gallery preview, and a donation/about/contact summary panel — each preview links
through to its own full page.

## What's included

- Cinematic hero with the temple's construction status
- About / temple information section (editable content)
- Temple history section
- Construction journey timeline with a cinematic click-to-expand transition
  between stages, and a signature "rising gopuram" progress visual that fills
  with gold light as construction percentage increases
- Filterable gallery with a lightbox (keyboard + swipe friendly)
- Donor table (sample data, clearly marked — no photos, no total shown, per spec)
- Donation section with bank/UPI placeholders and a QR code slot
- Contact section and a "Visit the Temple" map section with Google Maps buttons
- Mobile-friendly nav, falling-petal ambience (respects `prefers-reduced-motion`),
  glassmorphism cards, gold/navy/charcoal palette, Cormorant Garamond + Work Sans type

## 1. Local development

```bash
npm install
npm run dev
```

## 2. Production build

```bash
npm run build
```

This runs a TypeScript check (`tsc -b`) and then `vite build`, producing a static
`dist/` folder.

## 3. Preview the production build locally

```bash
npm run preview
```

## 4. Deploy to Cloudflare Pages

### Option A — GitHub integration (recommended)
1. Push this project to a GitHub (or GitLab) repository.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repository, then set:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. No environment variables or secrets are required — this is a fully static build.

### Option B — Direct upload with Wrangler
```bash
npm install -g wrangler
npm run build
wrangler pages deploy dist --project-name=venkateshwara-temple
```

No paid Cloudflare plan is required for either option.

## Editing content

All editable content lives in `src/data/`, separate from the UI components:

| File | Controls |
|---|---|
| `src/data/temple.ts` | Temple name, address, about/history text, festivals, traditions, **construction progress percentage** |
| `src/data/construction.ts` | The 8 construction-journey stages (name, date, description, photo, status) |
| `src/data/donors.ts` | Donor table rows (currently sample placeholder data) |
| `src/data/contact.ts` | Email, phone, Google Maps links, bank/UPI donation details, gallery images |

Search for `[PLACEHOLDER]` / `[BRACKETED]` text across `src/data/` to find every
value that still needs official, committee-confirmed information before launch.

## Adding real photographs

Drop images into `public/images/temple/` in the matching subfolder
(`hero/`, `old-temple/`, `construction/`, `gallery/`, `festivals/`, `decorative/`),
then point the relevant `data/` file at the path, e.g. `/images/temple/hero/hero.webp`.
Until a real path is supplied, each spot renders a clearly-labelled placeholder
instead of a broken image — nothing will silently show a missing icon.

For best performance, export photos as WebP/AVIF and keep the hero image
reasonably sized (it loads eagerly); everything else lazy-loads.

## Assets still needed from the temple committee

- [ ] Hero construction photograph
- [ ] Old temple photograph(s)
- [ ] Construction-stage photographs (one per completed/in-progress stage)
- [ ] Gallery photographs across all 7 categories
- [ ] Official temple history text, festival list, and traditions
- [ ] Official bank name, account holder name, account number, IFSC, branch, UPI ID
- [ ] Donation QR code image
- [ ] Official Gmail address and mobile number
- [ ] Official Google Maps link (and, optionally, a directions link)
- [ ] Real donor records (to replace the sample rows)
- [ ] Confirmed construction-progress percentage and current stage name

## Security checklist

- No secrets, API keys, or credentials anywhere in the source
- No third-party scripts beyond the Google Fonts stylesheet link
- No user input forms, no dynamic HTML injection
- All external links (Maps) use `target="_blank" rel="noopener noreferrer"`
- Fully static output — no server, database, or authentication surface at all

## Performance checklist

- Hero photo loads eagerly; gallery and other images `loading="lazy"`
- Petal ambience is capped at a small particle count and disabled under
  `prefers-reduced-motion`
- Minimal dependency set (React, Framer Motion, Lucide icons only)
- Tailwind's production build purges unused CSS automatically

## Accessibility checklist

- Semantic landmarks (`header`, `main`, `section`, `footer`) and heading hierarchy
- All images have `alt` text (placeholders use `aria-label` equivalents)
- Visible focus states (`:focus-visible`) throughout
- Keyboard support in the gallery lightbox (Esc/←/→) and construction modal
- Reduced-motion media query respected for petal and scroll animations
