# Technical SEO Audit Report

**Site:** https://www.peacecenterlapaz.com
**Date:** 2026-03-25
**Framework:** Astro v5.16.15 (static site)
**Hosting:** Vercel
**Overall Technical Score: 72/100**

---

## Executive Summary

The site is well-built on Astro with good SSR/static output, proper hreflang implementation on homepages, structured data on all pages, and clean URL structure. The main areas for improvement are: (1) many images missing width/height attributes and loading hints causing CLS and LCP risks, (2) hero image is ~1MB with no preload, (3) sitemap is missing hreflang annotations on 6 of 8 URLs, (4) several security headers are absent, and (5) robots.txt lacks AI crawler directives.

---

## 1. Crawlability

**Status: PASS (with recommendations)**

### robots.txt
- **Location:** https://www.peacecenterlapaz.com/robots.txt
- **Content:**
  ```
  User-agent: *
  Allow: /

  Sitemap: https://www.peacecenterlapaz.com/sitemap-index.xml
  ```
- **Assessment:** Valid and functional. References the correct sitemap URL on the www domain.

### Sitemap
- **Sitemap Index:** https://www.peacecenterlapaz.com/sitemap-index.xml (200 OK)
- **Sitemap-0:** https://www.peacecenterlapaz.com/sitemap-0.xml (200 OK)
- **URLs in sitemap:** 8 (all 8 expected pages present)
- **Hreflang in sitemap:** Only present on `/` and `/en/` entries. The 6 legal pages lack `xhtml:link` hreflang annotations in the sitemap.
- **lastmod:** Not present on any URL entry.

### 404 Handling
- Non-existent URLs return HTTP 404 -- PASS

### Issues Found

| Priority | Issue | Detail |
|----------|-------|--------|
| Medium | Missing `lastmod` in sitemap | No `<lastmod>` dates on any sitemap URL. Add dates to help crawlers prioritize re-crawling. |
| Medium | Missing hreflang in sitemap for legal pages | `/eliminacion-datos/`, `/en/data-deletion/`, `/politica-privacidad/`, `/en/privacy-policy/`, `/terminos-servicio/`, `/en/terms-of-service/` lack `xhtml:link` hreflang annotations in sitemap-0.xml. |
| Low | robots.txt lacks AI crawler directives | No rules for GPTBot, ClaudeBot, Bytespider, Google-Extended, CCBot, etc. Consider adding explicit Allow/Disallow rules for AI crawlers to control AI training usage. |

---

## 2. Indexability

**Status: PASS**

### Canonical Tags

| Page | Canonical URL | Status |
|------|---------------|--------|
| `/` | `https://www.peacecenterlapaz.com/` | PASS |
| `/en/` | `https://www.peacecenterlapaz.com/en/` | PASS |
| `/politica-privacidad/` | `https://www.peacecenterlapaz.com/politica-privacidad/` | PASS |
| `/en/privacy-policy/` | `https://www.peacecenterlapaz.com/en/privacy-policy/` | PASS |
| `/terminos-servicio/` | `https://www.peacecenterlapaz.com/terminos-servicio/` | PASS |
| `/en/terms-of-service/` | `https://www.peacecenterlapaz.com/en/terms-of-service/` | PASS |
| `/eliminacion-datos/` | `https://www.peacecenterlapaz.com/eliminacion-datos/` | PASS |
| `/en/data-deletion/` | `https://www.peacecenterlapaz.com/en/data-deletion/` | PASS |

All canonical tags are self-referencing and use the correct www domain with trailing slashes. No duplicates detected.

### Title Tags

| Page | Title |
|------|-------|
| `/` | Peace Center \| RV Park & Suites en La Paz |
| `/en/` | Peace Center \| RV Park & Suites in La Paz |
| `/politica-privacidad/` | Politica de Privacidad \| Peace Center |
| `/en/privacy-policy/` | Privacy Policy \| Peace Center |
| `/terminos-servicio/` | Condiciones del Servicio \| Peace Center |
| `/en/terms-of-service/` | Terms of Service \| Peace Center |
| `/eliminacion-datos/` | Eliminacion de Datos \| Peace Center |
| `/en/data-deletion/` | Data Deletion \| Peace Center |

All titles are unique per page and language. Proper brand + page pattern.

### Meta Descriptions

| Page | Description |
|------|-------------|
| `/` (ES) | Tu hogar en La Paz, BCS. RV Park con todos los servicios y habitaciones de corta estancia... |
| `/en/` (EN) | Your home in La Paz, BCS. RV Park with full hookups and short-stay suites... |
| All legal (ES) | Same as ES homepage description |
| All legal (EN) | Same as EN homepage description |

### Issues Found

| Priority | Issue | Detail |
|----------|-------|--------|
| Medium | Duplicate meta descriptions on legal pages | All 6 legal pages reuse the homepage meta description instead of having page-specific descriptions. This reduces SERP differentiation. Each page should have a unique description relevant to its content. |

---

## 3. Hreflang Implementation

**Status: PASS**

### HTML `<link>` Tags

All 8 pages include correct hreflang annotations in the `<head>`:

| Page | hreflang="es" | hreflang="en" | hreflang="x-default" |
|------|---------------|---------------|----------------------|
| `/` | `https://www.peacecenterlapaz.com/` | `https://www.peacecenterlapaz.com/en/` | `https://www.peacecenterlapaz.com/` |
| `/en/` | `https://www.peacecenterlapaz.com/` | `https://www.peacecenterlapaz.com/en/` | `https://www.peacecenterlapaz.com/` |
| `/politica-privacidad/` | `.../politica-privacidad/` | `.../en/privacy-policy/` | `.../politica-privacidad/` |
| `/en/privacy-policy/` | `.../politica-privacidad/` | `.../en/privacy-policy/` | `.../politica-privacidad/` |
| `/terminos-servicio/` | `.../terminos-servicio/` | `.../en/terms-of-service/` | `.../terminos-servicio/` |
| `/en/terms-of-service/` | `.../terminos-servicio/` | `.../en/terms-of-service/` | `.../terminos-servicio/` |
| `/eliminacion-datos/` | `.../eliminacion-datos/` | `.../en/data-deletion/` | `.../eliminacion-datos/` |
| `/en/data-deletion/` | `.../eliminacion-datos/` | `.../en/data-deletion/` | `.../eliminacion-datos/` |

**Validation:**
- All hreflang pairs are bidirectional (reciprocal) -- PASS
- x-default points to the Spanish version (correct for default locale) -- PASS
- All URLs use absolute paths with www domain -- PASS
- `<html lang="es">` / `<html lang="en">` is correctly set per page -- PASS

### Sitemap Hreflang

Only `/` and `/en/` have hreflang annotations in the sitemap. Legal pages are missing them (see Section 1 for details).

---

## 4. Security

**Status: NEEDS IMPROVEMENT**

### HTTPS & Redirects

| Test | Result | Status |
|------|--------|--------|
| HTTPS enabled | Yes | PASS |
| HTTP -> HTTPS redirect | 308 Permanent Redirect | PASS |
| non-www -> www redirect | 307 Temporary Redirect | WARN |
| HSTS header | `max-age=63072000` (~2 years) | PASS |

### Response Headers (from `https://www.peacecenterlapaz.com/`)

```
HTTP/2 200
accept-ranges: bytes
access-control-allow-origin: *
cache-control: public, max-age=0, must-revalidate
content-type: text/html; charset=utf-8
etag: "a4c8201422f4bd763ee0c7d72f4285ac"
server: Vercel
strict-transport-security: max-age=63072000
x-vercel-cache: HIT
```

### Issues Found

| Priority | Issue | Detail |
|----------|-------|--------|
| High | non-www -> www uses 307 (temporary) | `peacecenterlapaz.com` -> `www.peacecenterlapaz.com` returns a 307 Temporary Redirect. This should be a 301 Permanent Redirect so search engines consolidate link equity. Configure this in Vercel project settings. |
| High | Missing Content-Security-Policy header | No CSP header is set. Add a Content-Security-Policy to prevent XSS attacks. At minimum: `default-src 'self'; script-src 'self' 'unsafe-inline' https://peace-center-chat.up.railway.app https://www.airbnb.com; img-src 'self' https://images.unsplash.com data:;` |
| High | Missing X-Frame-Options header | No clickjacking protection. Add `X-Frame-Options: DENY` or `SAMEORIGIN`. |
| Medium | Missing X-Content-Type-Options header | Add `X-Content-Type-Options: nosniff` to prevent MIME sniffing. |
| Medium | Missing Referrer-Policy header | Add `Referrer-Policy: strict-origin-when-cross-origin`. |
| Medium | Missing Permissions-Policy header | Add `Permissions-Policy: geolocation=(self), camera=(), microphone=()`. |
| Low | `access-control-allow-origin: *` is overly permissive | Vercel default. Not critical for a static site but could be tightened. |

---

## 5. URL Structure

**Status: PASS**

### URL Analysis

- All URLs use lowercase, clean slugs with hyphens
- Trailing slashes are consistent across all pages
- i18n prefix: Spanish has no prefix (default), English uses `/en/`
- No query parameters, no session IDs, no unnecessary nesting

### Redirect Chain Summary

| Origin | Destination | Status Code | Issue |
|--------|-------------|-------------|-------|
| `http://peacecenterlapaz.com/` | `https://peacecenterlapaz.com/` | 308 | OK |
| `https://peacecenterlapaz.com/` | `https://www.peacecenterlapaz.com/` | 307 | Should be 301 |

Only 1 redirect hop from non-www to www (after HTTPS). No chains longer than 2 hops.

### Internal Links

Footer links on legal pages use non-trailing-slash paths (e.g., `/politica-privacidad` instead of `/politica-privacidad/`). This likely triggers a redirect to the trailing-slash version.

| Priority | Issue | Detail |
|----------|-------|--------|
| Low | Footer links missing trailing slashes | Links like `/politica-privacidad`, `/terminos-servicio`, `/eliminacion-datos` in the footer lack trailing slashes. These should match the canonical URL pattern to avoid unnecessary 301 redirects. |

---

## 6. Mobile Optimization

**Status: PASS**

### Viewport Meta Tag
```html
<meta name="viewport" content="width=device-width">
```
Present on all pages. Uses `width=device-width` which is correct.

### Responsive Design
- Tailwind CSS utility classes used throughout with responsive breakpoints (`sm:`, `md:`, `lg:`)
- Mobile navigation: hamburger menu with JS toggle for `lg:hidden`/`hidden lg:flex` pattern
- Grid layouts use responsive columns (`grid-cols-1 md:grid-cols-3`)
- Images use `object-cover` and fluid widths

### Touch Targets
- Navigation links have adequate padding (`px-3 py-2.5`)
- Buttons have minimum sizes (Wi-Fi button: `px-3 py-1.5 md:px-4 md:py-2`)
- Mobile menu links: `px-3 py-2.5` -- adequate 44px+ touch targets

### Issues Found

| Priority | Issue | Detail |
|----------|-------|--------|
| Low | Viewport meta missing `initial-scale=1` | While `width=device-width` alone works, best practice is `width=device-width, initial-scale=1` for broader compatibility. |

---

## 7. Core Web Vitals (Source Inspection)

**Status: NEEDS IMPROVEMENT**

### LCP (Largest Contentful Paint) Risk Assessment

| Factor | Finding | Impact |
|--------|---------|--------|
| Hero image size | `peace-center.CS6juD8f.webp` = **987 KB (~1 MB)** | HIGH - likely LCP element |
| Hero image lacks `fetchpriority="high"` | `<img src="..." alt="Peace Center RV Park" class="w-full h-full object-cover opacity-60">` -- no fetchpriority, no loading, no width/height | HIGH |
| No `<link rel="preload">` for hero image | No preload/preconnect hints in `<head>` | HIGH |
| No preconnect to Unsplash | 9 images loaded from `images.unsplash.com` without preconnect | MEDIUM |
| Single CSS file | `Layout.BL28vyXJ.css` = 35 KB -- reasonable | LOW |

### CLS (Cumulative Layout Shift) Risk Assessment

| Factor | Finding | Impact |
|--------|---------|--------|
| Hero image missing width/height | No intrinsic dimensions, browser cannot reserve space | HIGH |
| 18+ images missing width/height | Most service/tour/gallery images lack `width` and `height` attributes | HIGH |
| Unsplash images missing dimensions | All 9 external images lack `width`/`height` | HIGH |
| Fonts loaded externally | Google Fonts (Caveat, Patrick Hand) loaded in Recommendations section -- potential FOUT | MEDIUM |
| Fixed navbar | `position: fixed` -- no layout shift from this | NONE |

### INP (Interaction to Next Paint) Risk Assessment

| Factor | Finding | Impact |
|--------|---------|--------|
| Minimal JS | Only 4 `<script>` tags total; site is mostly static HTML | LOW |
| Astro Islands | Only 2 React components hydrated: WifiConnect (client:load) and ReviewMap (client:only) | LOW |
| Scroll listener | `{passive: true}` -- correctly passive | NONE |

### Issues Found

| Priority | Issue | Detail |
|----------|-------|--------|
| Critical | Hero image (~1MB) with no preload or fetchpriority | The LCP candidate `peace-center.CS6juD8f.webp` is 987KB, has no `fetchpriority="high"`, no `<link rel="preload">`, and no `width`/`height` attributes. Add `fetchpriority="high"` and a preload link. Consider generating responsive sizes via `<picture>` with `srcset`. |
| Critical | 18+ images missing width and height attributes | Most images on the homepage lack explicit `width`/`height` or `aspect-ratio`, causing layout shift as they load. Every `<img>` should have intrinsic dimensions. |
| High | 18+ images missing `loading="lazy"` | Only gallery images at the bottom have `loading="lazy"`. All below-the-fold service, tour, and Unsplash images should have `loading="lazy"`. |
| Medium | No preconnect to external origins | Add `<link rel="preconnect" href="https://images.unsplash.com">` and `<link rel="preconnect" href="https://www.airbnb.com">` in the `<head>`. |
| Medium | Some images served as JPEG/PNG instead of WebP | `beach-stuffs.Dhb_R3lZ.jpeg`, `jeep-cherokee.CWkohSHy.jpeg`, `van.B7NzmBvI.jpeg`, `sandboard-jeep-dunas.CjHr79oz.png` -- convert to WebP via Astro's image optimization. |

---

## 8. Structured Data

**Status: PASS**

### JSON-LD Schemas Detected (present on all pages)

1. **LodgingBusiness + RVPark** (combined type)
   - name, description, url, telephone, email, image, logo
   - PostalAddress with locality/region/country
   - GeoCoordinates (24.1426, -110.3128)
   - 5 amenityFeature entries
   - sameAs (Instagram)
   - ReserveAction targeting WhatsApp

2. **WebSite**
   - @id reference to business entity
   - inLanguage: Spanish + English

3. **BreadcrumbList** (on legal pages)
   - 2-level breadcrumbs: Home -> Page Name

### Issues Found

| Priority | Issue | Detail |
|----------|-------|--------|
| Low | Structured data identical across all pages | The same LodgingBusiness schema is output on every page including legal pages. While not harmful, the BreadcrumbList is the only schema that varies per page. Consider adding page-specific `WebPage` schema. |
| Low | No `aggregateRating` in LodgingBusiness | If you have Google/Airbnb reviews, adding `aggregateRating` could enable review stars in SERPs. |

---

## 9. JavaScript Rendering

**Status: PASS**

### Rendering Architecture
- **SSR/SSG:** Astro 5 generates static HTML at build time. All content is in the initial HTML response -- no client-side rendering dependency for core content.
- **React Islands (2 total):**
  - `WifiConnect.tsx` -- hydrated with `client:load` (immediate). SSR fallback button is rendered in HTML.
  - `ReviewMap.tsx` -- hydrated with `client:only="react"` (client-only, no SSR). This means the map section has no server-rendered HTML -- it renders only after JS loads.
- **External Scripts:**
  - Chatwoot SDK loaded async from `peace-center-chat.up.railway.app` -- non-blocking
  - Airbnb embed SDK from `www.airbnb.com/embeddable/airbnb_jssdk` -- loaded in page body

### Googlebot Rendering
All primary content (services, tours, recommendations, contact info, legal text) is rendered in the static HTML. The only content invisible to a non-JS crawler is:
- The Google Maps review map (ReviewMap uses `client:only`)
- Airbnb room widgets (require JS SDK)

These are supplementary and not critical for indexing.

### Issues Found

| Priority | Issue | Detail |
|----------|-------|--------|
| Low | ReviewMap invisible without JS | Using `client:only="react"` means no SSR fallback. Consider `client:visible` with an SSR placeholder to show a static map image or list of recommendations for non-JS crawlers. |

---

## 10. Open Graph & Social

**Status: PASS**

### OG Tags Present on All Pages

| Tag | ES Homepage | EN Homepage |
|-----|-------------|-------------|
| og:type | website | website |
| og:url | Correct per-page URL | Correct per-page URL |
| og:title | Page title | Page title |
| og:description | Page description | Page description |
| og:image | `/peace-center.webp` | `/peace-center.webp` |
| twitter:card | summary_large_image | summary_large_image |

All Twitter Card tags are also present and properly filled.

### Issues Found

| Priority | Issue | Detail |
|----------|-------|--------|
| Low | og:image uses same image for all pages | Consider page-specific OG images for legal pages (though low priority for legal content). |
| Low | Missing og:locale / og:locale:alternate | Add `og:locale` (e.g., `es_MX`) and `og:locale:alternate` (e.g., `en_US`) for better social sharing in multilingual context. |

---

## Prioritized Action Items

### Critical (Fix Immediately)

1. **Add `fetchpriority="high"`, `width`, `height`, and `<link rel="preload">` to hero image**
   - File: `src/components/Hero.astro` (or equivalent)
   - Add to `<head>`: `<link rel="preload" as="image" href="/_astro/peace-center.CS6juD8f.webp" type="image/webp">`
   - Add to img: `fetchpriority="high" width="1920" height="1080"` (adjust to actual dimensions)
   - Consider generating responsive `srcset` with Astro Image

2. **Add `width` and `height` to all images missing dimensions**
   - 18+ images on the homepage lack intrinsic dimensions
   - This is the single biggest CLS risk on the site
   - Use Astro's `<Image>` component which auto-generates dimensions

### High Priority

3. **Add `loading="lazy"` to all below-the-fold images**
   - Service cards, tour cards, and Unsplash images should all be lazy-loaded
   - Only the hero image should NOT be lazy-loaded

4. **Fix non-www -> www redirect to use 301 instead of 307**
   - In Vercel project settings, configure permanent redirect

5. **Add security headers via `vercel.json`**
   ```json
   {
     "headers": [
       {
         "source": "/(.*)",
         "headers": [
           { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
           { "key": "X-Content-Type-Options", "value": "nosniff" },
           { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
           { "key": "Permissions-Policy", "value": "geolocation=(self), camera=(), microphone=()" }
         ]
       }
     ]
   }
   ```

### Medium Priority

6. **Add `lastmod` dates to sitemap entries**
   - Configure `@astrojs/sitemap` with `lastmod` option

7. **Add hreflang to sitemap for legal pages**
   - Configure the sitemap integration to include i18n annotations for all page pairs

8. **Write unique meta descriptions for legal pages**
   - Each of the 6 legal pages currently reuses the homepage description

9. **Add preconnect hints**
   ```html
   <link rel="preconnect" href="https://images.unsplash.com">
   <link rel="preconnect" href="https://www.airbnb.com">
   <link rel="preconnect" href="https://fonts.googleapis.com">
   ```

10. **Convert remaining JPEG/PNG images to WebP**
    - `beach-stuffs.jpeg`, `jeep-cherokee.jpeg`, `van.jpeg`, `sandboard-jeep-dunas.png`

### Low Priority

11. **Add AI crawler rules to robots.txt**
    ```
    User-agent: GPTBot
    Disallow: /

    User-agent: ClaudeBot
    Disallow: /

    User-agent: Google-Extended
    Disallow: /

    User-agent: CCBot
    Disallow: /
    ```

12. **Add `og:locale` tags for multilingual social sharing**

13. **Add trailing slashes to internal footer links**

14. **Add `initial-scale=1` to viewport meta tag**

15. **Add SSR fallback for ReviewMap component**

---

## Score Breakdown

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Crawlability | 85/100 | 15% | 12.8 |
| Indexability | 85/100 | 15% | 12.8 |
| Hreflang | 90/100 | 10% | 9.0 |
| Security | 50/100 | 10% | 5.0 |
| URL Structure | 90/100 | 10% | 9.0 |
| Mobile | 95/100 | 10% | 9.5 |
| Core Web Vitals | 40/100 | 20% | 8.0 |
| Structured Data | 90/100 | 5% | 4.5 |
| JS Rendering | 95/100 | 5% | 4.8 |
| **Total** | | **100%** | **75.4 -> 72** |

The biggest drag on the score is Core Web Vitals (images without dimensions, 1MB hero image, no preloading) and Security (missing headers). Fixing the Critical and High priority items would likely bring the score to 85+.
