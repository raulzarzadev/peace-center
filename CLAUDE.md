# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Peace Center is a bilingual (Spanish/English) marketing website for an RV Park & Suites business in La Paz, Baja California Sur, México. Built with Astro 5, React 19, and Tailwind CSS v4.

## Commands

- `npm run dev` — Start dev server at localhost:4321
- `npm run build` — Production build to `./dist/`
- `npm run preview` — Preview production build locally

No test runner or linter is configured.

## Architecture

**Framework**: Astro 5 (static site) with `@astrojs/react` integration for interactive components. Tailwind CSS v4 is loaded via Vite plugin (not Astro integration).

**i18n**: Spanish is the default locale (no URL prefix). English lives under `/en/`. Configured in `astro.config.mjs` with `prefixDefaultLocale: false`. All UI strings, services, tours, and recommendations data live in `src/i18n/utils.ts`. Use `getLangFromUrl(Astro.url)` and `useTranslations(lang)` in every component.

**Page structure**: Both `src/pages/index.astro` and `src/pages/en/index.astro` render the same component tree (Navbar → Hero → Services → ToursRentals → Gallery → Recommendations → Footer). Each component reads the current language from the URL internally. Legal pages (privacy, terms, data deletion) have separate Spanish/English versions.

**React islands**: Two interactive React components use Astro's `client:` directives:
- `WifiConnect.tsx` (`client:load`) — Modal with QR code for Wi-Fi connection, used in both Navbar and Hero
- `ReviewMap.tsx` (`client:only="react"`) — Google Maps with recommendation markers

**Centralized data**: `src/i18n/utils.ts` is the single source of truth for contact info (`CONTACT_DATA`), service listings, tour listings, recommendations (with lat/lng), Airbnb room IDs, and all translated UI strings.

## Environment Variables

Required `PUBLIC_` prefixed env vars (accessible client-side):
- `PUBLIC_GOOGLE_MAPS_API_KEY` — Google Maps for the ReviewMap component
- `PUBLIC_GOOGLE_CHATWOOT_TOKEN` — Chatwoot live chat widget (loaded in Layout.astro)

## External Integrations

- **Chatwoot**: Self-hosted at `peace-center-chat.up.railway.app`, injected via script in `Layout.astro`
- **Airbnb embeds**: Room widgets loaded via Airbnb JS SDK in `Services.astro`
- **Google Maps**: Advanced markers via `@vis.gl/react-google-maps`
- **WhatsApp**: Direct links constructed from phone number in `CONTACT_DATA`

## Key Conventions

- Color palette: stone (neutrals) + teal (accents), with `bg-stone-50` body background
- All components use Tailwind utility classes; no component CSS modules
- Custom fonts (Caveat, Patrick Hand) loaded via Google Fonts in `Recommendations.astro` scoped styles
- TypeScript strict mode (`astro/tsconfigs/strict`)
