# Vignesh Metals — React (Vite) Version

Traditional South Indian brass oil lamp catalog site, converted from Next.js to a plain
React + Vite single-page application.

## Tech Stack
- React 18 + TypeScript
- Vite (build tool / dev server)
- React Router (client-side routing: home page + 404 fallback)
- Tailwind CSS
- @heroicons/react

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
  components/       # UI sections (Navbar, HeroSection, ProductGrid, etc.)
  components/ui/     # Shared primitives (AppIcon, AppImage, AppLogo)
  pages/             # HomePage, NotFound
  App.tsx            # Router setup
  main.tsx           # App entry point
  index.css          # Tailwind + global styles
public/
  assets/images/     # Product photos
```

## Notes on the Conversion
- Removed Next.js App Router (`app/`), `next/image`, and `next/navigation` in favor of
  plain `<img>` tags and `react-router-dom`.
- `AppImage` now renders a native `<img>` with the same fallback-on-error behavior it had before.
- Routing: `/` renders the homepage; any unmatched path renders the 404 page (previously
  handled automatically by Next's file-based routing).
