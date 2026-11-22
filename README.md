# adammanji.com

Personal site for Adam Manji: co-founder and CTO of Bashi. Six pages: home,
two case studies (Bashi, Snappy), projects, about and resume.

## Stack

- Next.js 16 (App Router) and React 19
- Tailwind CSS v4
- TypeScript
- No animation library

## Where things live

- Content: `src/lib/content.ts` holds every fact and line of copy.
- Design system: `src/app/globals.css` (colors, type, ledger styling) and
  `src/components/ui.tsx` (shared page building blocks).
- SEO: `src/app/sitemap.ts`, `src/app/robots.ts`, `opengraph-image.tsx` per
  route (built with `src/lib/og.tsx`) and `src/components/JsonLd.tsx`.

## Local development

```
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Deployment

Railway auto-deploys from the `main` branch.
