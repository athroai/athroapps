# Athro Apps Hub

Central hub for the Athro ecosystem — Athro AI, Athro Careers, and Athro Goals.

**Live:** [athroapps.com](https://athroapps.com) (when deployed)

## Tech Stack

- **Framework:** Next.js 14 (App Router, static export)
- **Styling:** Tailwind CSS v3
- **Deploy:** Netlify (static)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `out/` for static hosting.

## Deployment (Netlify)

1. Connect this repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `out`
4. Add custom domain: `athroapps.com`

## Project Structure

- `src/app/` — Next.js App Router pages & layout
- `src/components/` — Reusable components
- `src/lib/` — App config, device detection
- `public/icons/` — App icons (A, C, G)
- `public/sw.js` — Service worker for offline support

## Adding New Apps

Edit `src/lib/apps.ts` and add a new entry to the `APPS` array. The grid layout will scale automatically.

## Environment Variables

- `NEXT_PUBLIC_GA_ID` — Google Analytics 4 measurement ID (optional). When set, analytics tracking is enabled.
- `FORMSPREE_ENDPOINT` — **Required for newsletter**. Create a free form at [formspree.io](https://formspree.io), add an `email` field, then set this to your form endpoint (e.g. `https://formspree.io/f/xxxxxxxx`).
