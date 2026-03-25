# Sitemap Architecture Audit -- Peace Center

**Date**: 2026-03-25
**Site**: https://www.peacecenterlapaz.com
**Framework**: Astro 5 (static site) with `@astrojs/sitemap` integration
**Previous audit**: 2026-02-25 (critical issues found -- all now resolved)

---

## Executive Summary

The sitemap infrastructure is now **fully operational**. The critical issues identified in the February 2026 audit (missing `@astrojs/sitemap`, missing canonical tags, missing hreflang) have all been resolved in commit `b38d88b`. The sitemap-index.xml and child sitemap-0.xml are live and returning HTTP 200. All 8 URLs in the sitemap resolve correctly. robots.txt properly references the sitemap.

There are **3 medium-severity issues** remaining related to incomplete hreflang coverage in the sitemap XML for legal pages.

---

## Validation Report

| # | Check | Severity | Status | Details |
|---|-------|----------|--------|---------|
| 1 | Sitemap-index.xml exists and is valid XML | Critical | PASS | Returns 200, valid sitemapindex format |
| 2 | Child sitemap-0.xml exists and is valid XML | Critical | PASS | Returns 200, valid urlset format |
| 3 | URL count <= 50,000 | Critical | PASS | 8 URLs total -- well under limit |
| 4 | All sitemap URLs return HTTP 200 | High | PASS | All 8 URLs confirmed 200 |
| 5 | No noindexed URLs in sitemap | High | PASS | No noindex meta tags found on any page |
| 6 | No redirected URLs in sitemap | Medium | PASS | All URLs resolve directly (no 301/302) |
| 7 | robots.txt references sitemap | -- | PASS | `Sitemap: https://www.peacecenterlapaz.com/sitemap-index.xml` |
| 8 | `site` property in Astro config | -- | PASS | `site: "https://www.peacecenterlapaz.com"` |
| 9 | Non-www redirects to www | -- | PASS | `peacecenterlapaz.com` returns 307 to `www.peacecenterlapaz.com` |
| 10 | Canonical tags in HTML | High | PASS | `<link rel="canonical">` present in Layout.astro |
| 11 | hreflang in HTML `<head>` | High | PASS | `es`, `en`, and `x-default` alternates present in Layout.astro |
| 12 | hreflang in sitemap XML (homepages) | High | PASS | `/` and `/en/` have correct bidirectional `xhtml:link` alternates |
| 13 | hreflang in sitemap XML (legal pages) | Medium | FAIL | See Issue #1 below |
| 14 | `lastmod` dates | Low | FAIL | No `<lastmod>` on any URL -- see Issue #2 |
| 15 | `priority` / `changefreq` (deprecated) | Info | PASS | Neither is present (correct -- both are ignored by Google) |
| 16 | Sitemap-index `<lastmod>` | Low | FAIL | No `<lastmod>` on the `<sitemap>` entry in the index file |

---

## Page Coverage

### Pages in Sitemap (8 URLs)

| URL | Locale | HTTP Status | hreflang in Sitemap |
|-----|--------|-------------|---------------------|
| `https://www.peacecenterlapaz.com/` | es | 200 | es + en (correct) |
| `https://www.peacecenterlapaz.com/en/` | en | 200 | es + en (correct) |
| `https://www.peacecenterlapaz.com/politica-privacidad/` | es | 200 | MISSING |
| `https://www.peacecenterlapaz.com/en/privacy-policy/` | en | 200 | MISSING |
| `https://www.peacecenterlapaz.com/terminos-servicio/` | es | 200 | MISSING |
| `https://www.peacecenterlapaz.com/en/terms-of-service/` | en | 200 | MISSING |
| `https://www.peacecenterlapaz.com/eliminacion-datos/` | es | 200 | MISSING |
| `https://www.peacecenterlapaz.com/en/data-deletion/` | en | 200 | MISSING |

### Pages in Source but NOT in Sitemap

None. All 8 `.astro` page files are represented in the sitemap.

### Pages in Sitemap but NOT in Source

None. No orphan URLs.

---

## Issues Found

### Issue #1 (Medium): Legal Pages Missing hreflang Alternates in Sitemap

**Problem**: The 6 legal pages (`politica-privacidad`, `privacy-policy`, `terminos-servicio`, `terms-of-service`, `eliminacion-datos`, `data-deletion`) have **no `xhtml:link` hreflang alternates** in the sitemap XML. Only the homepage pair (`/` and `/en/`) has proper bidirectional hreflang annotations.

This happens because `@astrojs/sitemap`'s `i18n` automatic pairing works by matching URL path segments between locales. Since the Spanish and English legal pages use completely different slugs (e.g., `politica-privacidad` vs `privacy-policy`), the integration cannot automatically detect they are locale counterparts.

**Impact**: Search engines relying on the sitemap for hreflang signals will not know these legal pages are translations of each other. However, since the HTML `<head>` in Layout.astro does emit correct hreflang tags via the `PATH_MAPPING` mechanism, the impact is reduced -- the HTML hreflang serves as the primary signal.

**Fix**: Use the `serialize` callback in the sitemap config to manually inject `xhtml:link` alternates for pages with mismatched slugs. Update `astro.config.mjs`:

```js
sitemap({
  i18n: {
    defaultLocale: "es",
    locales: {
      es: "es",
      en: "en",
    },
  },
  serialize(item) {
    const LEGAL_PAIRS = {
      "https://www.peacecenterlapaz.com/politica-privacidad/":
        "https://www.peacecenterlapaz.com/en/privacy-policy/",
      "https://www.peacecenterlapaz.com/terminos-servicio/":
        "https://www.peacecenterlapaz.com/en/terms-of-service/",
      "https://www.peacecenterlapaz.com/eliminacion-datos/":
        "https://www.peacecenterlapaz.com/en/data-deletion/",
    };
    // Build reverse mapping
    const REVERSE = Object.fromEntries(
      Object.entries(LEGAL_PAIRS).map(([es, en]) => [en, es])
    );

    const esCounterpart = REVERSE[item.url];
    const enCounterpart = LEGAL_PAIRS[item.url];

    if (enCounterpart) {
      // This is a Spanish legal page
      item.links = [
        { lang: "es", url: item.url },
        { lang: "en", url: enCounterpart },
      ];
    } else if (esCounterpart) {
      // This is an English legal page
      item.links = [
        { lang: "es", url: esCounterpart },
        { lang: "en", url: item.url },
      ];
    }
    return item;
  },
}),
```

### Issue #2 (Low): No `<lastmod>` Dates on Any URL

**Problem**: None of the 8 URLs in `sitemap-0.xml` include a `<lastmod>` element. The sitemap-index.xml also lacks `<lastmod>` on its `<sitemap>` entry.

**Impact**: Low. Google has stated that `lastmod` is only useful when it is accurate and actually reflects real content changes. For a small static site that changes infrequently, the absence of `lastmod` is not harmful. However, providing accurate dates can help crawlers prioritize re-crawling after content updates.

**Fix**: `@astrojs/sitemap` does not automatically populate `lastmod` from file modification times. To add it, use the `serialize` callback to set `item.lastmod` for each URL, or accept the current behavior as acceptable for a site of this size.

### Issue #3 (Info): Sitemap-index.xml Missing `<lastmod>`

**Problem**: The `<sitemap>` entry in `sitemap-index.xml` does not include a `<lastmod>` element.

**Impact**: Negligible. This is informational only. Google will still discover and parse the child sitemap.

---

## Quality Gate Assessment

- **Location pages**: 0 -- No doorway-page risk. Not applicable.
- **Total URL count**: 8 -- Well under the 50,000 per-file limit.
- **Thin content risk**: Legal pages are topically distinct from each other. No duplicate content concern.
- **Mass-generated content**: None detected. All pages are hand-authored Astro templates.

---

## hreflang Completeness Matrix

The table below shows the current state of hreflang signals across both the HTML `<head>` and the sitemap XML.

| Page Pair | HTML hreflang | Sitemap hreflang |
|-----------|--------------|-----------------|
| `/` <-> `/en/` | Present (correct) | Present (correct) |
| `/politica-privacidad/` <-> `/en/privacy-policy/` | Present (correct) | MISSING |
| `/terminos-servicio/` <-> `/en/terms-of-service/` | Present (correct) | MISSING |
| `/eliminacion-datos/` <-> `/en/data-deletion/` | Present (correct) | MISSING |

HTML hreflang is the primary signal and is complete. Sitemap hreflang is a secondary/reinforcing signal and is only partially implemented.

---

## Comparison with Previous Audit (2026-02-25)

| Issue from Feb 2026 | Status Today |
|---------------------|-------------|
| No `@astrojs/sitemap` installed | RESOLVED -- integration installed and configured |
| Sitemap returns 404 | RESOLVED -- returns 200 |
| No `<link rel="canonical">` in HTML | RESOLVED -- present in Layout.astro |
| No hreflang in HTML `<head>` | RESOLVED -- es, en, x-default present |
| No hreflang in sitemap | PARTIALLY RESOLVED -- works for homepages, missing for legal pages |

---

## Recommendations Summary

| Priority | Action | Effort | Impact |
|----------|--------|--------|--------|
| 1 (Medium) | Add `serialize` callback to `@astrojs/sitemap` config to inject hreflang for legal page pairs with mismatched slugs | Low (~20 min) | Reinforces hreflang signal already present in HTML |
| 2 (Low) | Consider adding accurate `lastmod` dates | Low (~10 min) | Marginal crawl efficiency improvement |

---

## Files Relevant to This Audit

- `/Users/zarza/Documents/projects/peace-center/astro.config.mjs` -- sitemap integration config
- `/Users/zarza/Documents/projects/peace-center/public/robots.txt` -- sitemap reference
- `/Users/zarza/Documents/projects/peace-center/src/layouts/Layout.astro` -- canonical + hreflang in HTML
- `/Users/zarza/Documents/projects/peace-center/dist/sitemap-index.xml` -- built sitemap index
- `/Users/zarza/Documents/projects/peace-center/dist/sitemap-0.xml` -- built child sitemap
