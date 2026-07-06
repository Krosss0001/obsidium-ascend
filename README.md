# OBSIDIUM ASCEND

Production-ready bilingual website for OBSIDIUM ASCEND, a premium creator systems agency.

Slogan:

- EN: Don't just stream. Ascend.
- UA: Не просто стрім. Піднімайся вище.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- React Icons
- React Three Fiber and Drei
- GSAP
- Lenis
- Vercel-ready build pipeline

## Routes

- `/en` - English experience
- `/uk` - Ukrainian experience
- `/` - redirects to `/en`

## Sections

- Sticky glass navigation with language switcher
- Obsidian Core 3D hero
- Creator trust strip
- Ascend Systems service grid
- Package tiers
- Before / After transformation
- Ascend Protocol timeline
- Selected Missions case studies
- Creator infrastructure stack
- Final CTA and footer

## Getting Started

Install dependencies and run the development server:

```shell
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root route redirects to `/en`; Ukrainian is available at `/uk`.

## Scripts

```shell
npm run dev
npm run lint
npm run build
npm run start
```

## Project Structure

- `src/app/[locale]/page.tsx` - localized App Router entry
- `src/lib/i18n.ts` - English and Ukrainian dictionaries
- `src/components/landing-experience.tsx` - complete animated agency website
- `src/components/ascend-scene.tsx` - unframed React Three Fiber hero scene
- `src/components/smooth-scroll.tsx` - Lenis integration

## Deployment

The app is ready for Vercel. Push `main` to GitHub and import `Krosss0001/obsidium-ascend` in Vercel.
