# Performance Audit Report - peacecenterlapaz.com

**Date**: 2026-03-25
**URL**: https://www.peacecenterlapaz.com
**Hosting**: Vercel (SFO1 edge)
**Framework**: Astro 5.16.15 (static site)

---

## Executive Summary

The site has a solid foundation as a static Astro site served from Vercel's edge CDN with Brotli compression. However, several critical performance issues are likely degrading Core Web Vitals scores, particularly LCP and CLS. The main problems are: an unoptimized ~1MB hero image without preloading, 23 of 25 images missing width/height dimensions, render-blocking Google Fonts loaded via CSS `@import`, and a 234KB Airbnb SDK loaded synchronously for below-the-fold content.

**Estimated Performance Score**: 45-60 (mobile), 70-80 (desktop)

---

## 1. Server & Network Performance

### TTFB (Time to First Byte)

| Endpoint | TTFB | Rating |
|----------|------|--------|
| www.peacecenterlapaz.com (cached) | ~152ms | Good |
| peacecenterlapaz.com (307 redirect) | ~172ms | Good (but adds extra hop) |

TTFB is well within the 200ms target. Vercel's edge caching is working effectively (`x-vercel-cache: HIT`).

### Redirect Chain

A 307 redirect from `peacecenterlapaz.com` to `www.peacecenterlapaz.com` adds ~170ms for users who type the bare domain. This is acceptable but worth noting.

### Compression

- **Brotli**: Enabled (verified via `content-encoding: br` header)
- **HTML size**: 107KB uncompressed, ~17KB compressed (84% reduction)

### Caching Headers

| Resource Type | Cache-Control | Status |
|---------------|---------------|--------|
| HTML document | `public, max-age=0, must-revalidate` | Correct for HTML |
| Static assets (/_astro/*) | `public, max-age=31536000, immutable` | Excellent (1 year, immutable) |
| Chatwoot SDK | `public, max-age=31556952` | Excellent |

Caching strategy is well configured. Astro's content-hashed filenames enable aggressive caching.

---

## 2. Core Web Vitals Analysis

### 2.1 LCP (Largest Contentful Paint) - LIKELY POOR

**LCP Candidate**: The hero image (`peace-center.CS6juD8f.webp`) is a full-viewport background image that dominates the initial viewport. This is the LCP element.

**Critical Issues**:

| Issue | Impact | Details |
|-------|--------|---------|
| Hero image is 986KB | HIGH | At ~1MB, this image takes 2-4s to download on 3G/slow 4G |
| No `fetchpriority="high"` | HIGH | Browser discovers this image late in the parsing pipeline |
| No `<link rel="preload">` | HIGH | Image discovery delayed until HTML is parsed and CSS applied |
| No `width`/`height` attributes | MEDIUM | Browser cannot allocate space before image loads |
| Image served as WebP only | LOW | No AVIF fallback (would save additional 20-30%) |
| No responsive `srcset` | HIGH | Full 1080px image served to all viewports including mobile |

**LCP Subpart Breakdown (estimated)**:
- TTFB: ~150ms (good)
- Resource load delay: ~200-400ms (no preload, discovered late)
- Resource load time: ~1500-3000ms on mobile (986KB image)
- Element render delay: ~50ms (minimal)

**Estimated LCP**: 2.5-4.5s (mobile), 1.5-2.5s (desktop)

### 2.2 CLS (Cumulative Layout Shift) - LIKELY POOR

**Critical Issues**:

| Issue | Impact | Details |
|-------|--------|---------|
| 24 of 25 images missing `width`/`height` | CRITICAL | Only the navbar logo has explicit dimensions (1080x1080) |
| Services section images (3x) | HIGH | No dimensions, will cause layout shift when loaded |
| Tours section images (13x) | HIGH | No dimensions, mixed sources (local + Unsplash CDN) |
| Gallery images (6x) | MEDIUM | Have `loading="lazy"` but no dimensions |
| Google Fonts via CSS `@import` | HIGH | Caveat and Patrick Hand loaded via `@import` cause FOIT/FOUT |
| Airbnb embeds inject iframes dynamically | HIGH | No reserved space for 6 Airbnb embed widgets |
| Chatwoot widget injects chat bubble | LOW | Floating element, minimal CLS impact |

**Estimated CLS**: 0.15-0.35 (likely failing)

### 2.3 INP (Interaction to Next Paint) - LIKELY GOOD

**Positive Factors**:
- Astro's island architecture means minimal JavaScript on main thread
- Most interactivity is CSS-based (hover effects, transitions)
- Scroll handler uses `{ passive: true }`
- Toggle scripts are lightweight vanilla JS

**Potential Concerns**:

| Issue | Impact | Details |
|-------|--------|---------|
| WifiConnect React island (`client:load`) | LOW | Hydrates immediately on page load, includes QR library |
| ReviewMap React island (`client:only="react"`) | LOW | Only loads when visible (client:only), includes Google Maps SDK |
| Chatwoot SDK (28KB) | LOW | Loaded async, but runs on main thread after load |
| Airbnb SDK (234KB) | MEDIUM | Large SDK, loads async but may block main thread during parse |

**Estimated INP**: <200ms (likely passing)

---

## 3. Resource Analysis

### 3.1 Images - Total Weight: ~9.5MB (all images)

**Above-the-fold images (loaded immediately)**:

| Image | Size | Format | Issues |
|-------|------|--------|--------|
| peace-center.webp (hero) | 986KB | WebP | No preload, no dimensions, no srcset, no fetchpriority |
| peace-center-logo.webp (navbar) | 64KB | WebP | Has width/height, but `loading="lazy"` on above-fold element |

**Services section images**:

| Image | Size | Format | Issues |
|-------|------|--------|--------|
| IMG_4450.webp | 835KB | WebP | No dimensions, no lazy loading |
| IMG_4463_copy.webp | 431KB | WebP | No dimensions, no lazy loading |
| IMG_4469.webp | 773KB | WebP | No dimensions, no lazy loading |

**Tours section images**:

| Image | Size | Format | Issues |
|-------|------|--------|--------|
| sandboard-jeep-dunas.png | 1,476KB | PNG | PNG format (should be WebP/AVIF), used twice, no lazy loading |
| beach-stuffs.jpeg | 253KB | JPEG | Not WebP, no dimensions, no lazy loading |
| jeep-cherokee.jpeg | 316KB | JPEG | Not WebP, no dimensions, no lazy loading |
| van.jpeg | 348KB | JPEG | Not WebP, no dimensions, no lazy loading |
| 9x Unsplash images | ~200KB each | Auto-format | Served from CDN with `auto=format`, no dimensions, no lazy loading |

**Gallery section images (6 images)**: 659KB-730KB each, WebP format, have `loading="lazy"` but no dimensions.

### 3.2 CSS

| File | Uncompressed | Compressed | Notes |
|------|-------------|------------|-------|
| Layout.BL28vyXJ.css | 35KB | ~7KB | Single bundle, good |
| Inline `<style>` blocks | ~3KB | N/A | Component-scoped styles, inline in HTML |

**Issue**: Two Google Fonts loaded via CSS `@import` inside an inline `<style>` block:
```
@import"https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap";
@import"https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap";
```
CSS `@import` is render-blocking. These fonts are used only in the Recommendations and Transport sections (below the fold), yet they block initial render for the entire page.

### 3.3 JavaScript

| Script | Type | Size | Loading | Notes |
|--------|------|------|---------|-------|
| Astro island hydration runtime | Inline | ~3KB | Inline in HTML | Required for islands |
| WifiConnect.js + React runtime | Module | ~15-20KB est. | `client:load` | Hydrates immediately |
| ReviewMap.js + Google Maps | Module | ~50KB+ est. | `client:only="react"` | Loads only client-side |
| Navbar scroll/menu handler | Module | ~0.5KB | Inline | Minimal |
| Tours toggle handler | Inline | ~0.3KB | Inline | Minimal |

### 3.4 Third-Party Scripts

| Script | Size | Loading | Impact |
|--------|------|---------|--------|
| Chatwoot SDK | 28KB | async, loaded in `<body>` via DOM injection | Moderate - loads its own CSS, creates chat widget |
| Airbnb JS SDK | 234KB | `async` attribute, but in HTML body | High - large parse cost, injects iframes |
| Google Maps JS API | ~200KB+ | Loaded via React island (client:only) | Moderate - only loads when React hydrates |
| Google Fonts CSS | ~2KB + font files | Render-blocking via `@import` | High - blocks rendering |

---

## 4. Prioritized Recommendations

### P0 - Critical (Expected LCP improvement: 1-2s, CLS improvement: 0.1-0.2)

#### 4.1 Add width/height to ALL images
Every `<img>` tag must have explicit `width` and `height` attributes to prevent layout shift. This is the single most impactful CLS fix.

**Files to modify**: `Hero.astro`, `Services.astro`, `ToursRentals.astro`, `Gallery.astro`

For the hero image in `Hero.astro`, use Astro's `<Image>` component (already used in Navbar) instead of raw `<img>`:
```astro
import { Image } from "astro:assets";
// Then:
<Image src={heroImage} alt="Peace Center RV Park" class="..." />
```
Astro's `<Image>` component automatically adds width/height and can generate responsive `srcset`.

#### 4.2 Preload and optimize the hero image
Add a preload hint in `Layout.astro` and set `fetchpriority="high"`:
```html
<link rel="preload" as="image" href="/_astro/peace-center.CS6juD8f.webp" fetchpriority="high">
```
Also, use Astro's `<Image>` component with quality and size constraints to reduce the image from ~1MB to ~200-300KB.

#### 4.3 Remove loading="lazy" from the navbar logo
The navbar logo (`peace-center-logo.webp`) is above the fold and currently has `loading="lazy"`. Change it to `loading="eager"` or remove the attribute. When using Astro's `<Image>` component, set `loading="eager"`.

#### 4.4 Replace Google Fonts @import with <link> tags in <head>
Move font loading from CSS `@import` (render-blocking) to `<link>` tags with `rel="preload"`:

In `Layout.astro` `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Patrick+Hand&display=swap">
```

Remove the `@import` statements from `Recommendations.astro` and `Transport.astro` scoped styles.

### P1 - High (Expected combined improvement: 0.5-1s LCP, 0.1 CLS)

#### 4.5 Convert PNG and JPEG images to WebP/AVIF
The `sandboard-jeep-dunas.png` is 1.5MB as PNG. Converting to WebP would reduce it to ~200-300KB. Use Astro's `<Image>` component for all local images to get automatic format optimization.

All JPEG images in tours (`beach-stuffs.jpeg`, `jeep-cherokee.jpeg`, `van.jpeg`) should also go through Astro's image pipeline.

#### 4.6 Add loading="lazy" to all below-the-fold images
Services, tours, and gallery images should all have `loading="lazy"`. Currently only the 6 gallery images have it. The 3 services images and 13+ tours images load eagerly and compete with the hero image for bandwidth.

#### 4.7 Generate responsive srcset for hero and other large images
Use Astro's `<Image>` or `<Picture>` component to generate multiple sizes:
```astro
<Picture
  src={heroImage}
  widths={[640, 1024, 1920]}
  formats={['avif', 'webp']}
  alt="Peace Center RV Park"
  class="w-full h-full object-cover opacity-60"
  loading="eager"
  fetchpriority="high"
/>
```

#### 4.8 Reserve space for Airbnb embeds
The 6 Airbnb embed widgets inject iframes dynamically with no reserved space. Add a minimum height to the container:
```css
.airbnb-embed-frame {
  min-height: 340px;
}
```

### P2 - Medium (Expected improvement: 0.2-0.5s total load time)

#### 4.9 Defer Airbnb SDK loading
The Airbnb SDK is 234KB and loads for content below the fold. Use Intersection Observer to load it only when the Airbnb section approaches the viewport:
```html
<script>
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    const s = document.createElement('script');
    s.src = 'https://www.airbnb.com/embeddable/airbnb_jssdk';
    s.async = true;
    document.body.appendChild(s);
    observer.disconnect();
  }
}, { rootMargin: '200px' });
observer.observe(document.getElementById('airbnb'));
</script>
```

#### 4.10 Defer Chatwoot SDK further
The Chatwoot SDK loads immediately in `<body>`. Delay it until after the page is interactive:
```javascript
window.addEventListener('load', () => {
  setTimeout(() => {
    // Load Chatwoot SDK here
  }, 3000);
});
```

#### 4.11 Add preconnect hints for third-party origins
In `Layout.astro` `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="dns-prefetch" href="https://images.unsplash.com">
<link rel="dns-prefetch" href="https://www.airbnb.com">
<link rel="dns-prefetch" href="https://peace-center-chat.up.railway.app">
```

### P3 - Low (Incremental improvements)

#### 4.12 Self-host Google Fonts
Download Caveat and Patrick Hand font files and serve them from the same origin to eliminate the DNS lookup, TLS handshake, and additional HTTP requests to fonts.googleapis.com and fonts.gstatic.com.

#### 4.13 Reduce hero image quality
The hero image has an opacity of 60% applied via CSS (`opacity-60`), meaning fine detail is obscured by the dark overlay. A lower quality setting (q=60-70) would be imperceptible and could reduce file size by 40-50%.

#### 4.14 Consolidate duplicate font @import
The Caveat font is imported in both `Recommendations.astro` and `Transport.astro`. Even though Astro deduplicates them at build time, moving them to a single location (Layout.astro head) is cleaner and easier to manage.

#### 4.15 Consider reducing Unsplash image sizes
The Unsplash URLs request `w=2670` but images are displayed in cards at ~300px wide. Change the `w` parameter to match display size (e.g., `w=600` for mobile, `w=800` for desktop) or use `srcset`.

---

## 5. Performance Budget Targets

| Metric | Current (estimated) | Target | Threshold |
|--------|-------------------|--------|-----------|
| LCP (mobile) | 3.0-4.5s | <2.5s | Good |
| LCP (desktop) | 1.5-2.5s | <1.5s | Good |
| CLS | 0.15-0.35 | <0.1 | Good |
| INP | <200ms | <200ms | Good (already passing) |
| Total page weight | ~9.5MB | <3MB | -- |
| Hero image size | 986KB | <250KB | -- |
| Number of requests | ~40+ | <30 | -- |

---

## 6. Quick Wins Summary (by effort vs. impact)

| Priority | Fix | Effort | Impact |
|----------|-----|--------|--------|
| 1 | Add width/height to all images (use Astro `<Image>`) | Low | CLS: High |
| 2 | Preload hero image + fetchpriority="high" | Low | LCP: High |
| 3 | Replace @import fonts with `<link>` in head | Low | LCP: Medium, CLS: Medium |
| 4 | Add loading="lazy" to services/tours images | Low | LCP: Medium |
| 5 | Convert PNG to WebP via Astro Image pipeline | Low | Page weight: High |
| 6 | Reduce Unsplash image widths in URL params | Low | Page weight: Medium |
| 7 | Reserve space for Airbnb embeds | Low | CLS: Medium |
| 8 | Defer Airbnb SDK with IntersectionObserver | Medium | Load time: Medium |
| 9 | Add preconnect hints | Low | LCP: Low |
| 10 | Defer Chatwoot to post-load | Low | Load time: Low |

---

## 7. Tool Recommendations for Ongoing Monitoring

- **CrUX Vis** (https://cruxvis.withgoogle.com): Monitor real-user Core Web Vitals field data once the site has sufficient traffic
- **PageSpeed Insights**: Run periodic lab tests after implementing fixes
- **Lighthouse 13.0** (via Chrome DevTools or CLI): Lab diagnostics for detailed waterfall analysis
- **CrUX API**: Programmatic access to field data for automated monitoring
- **web-vitals library**: Consider adding the `web-vitals` npm package for Real User Monitoring (RUM) to track actual user experience

---

*Report generated by source code analysis and HTTP inspection on 2026-03-25.*
