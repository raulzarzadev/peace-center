# Schema.org Structured Data Audit Report

**Site:** https://www.peacecenterlapaz.com
**Date:** 2026-03-25
**Pages analyzed:** `/` (Spanish), `/en/` (English), legal pages
**Source file:** `src/components/SchemaOrg.astro`

---

## 1. Existing Schema Detection

Three JSON-LD blocks are injected on every page via `SchemaOrg.astro`:

| # | @type | @id | Status |
|---|-------|-----|--------|
| 1 | `["LodgingBusiness", "RVPark"]` | `/#business` | Present on both `/` and `/en/` |
| 2 | `WebSite` | `/#website` | Present on both `/` and `/en/` |
| 3 | `BreadcrumbList` | (none) | Present on both `/` and `/en/` |

No Microdata or RDFa was detected on any page.

---

## 2. Validation of Existing Schema

### 2.1 LodgingBusiness + RVPark

| Check | Result | Notes |
|-------|--------|-------|
| @context is `https://schema.org` | PASS | |
| @type is valid | PASS | Multi-type array is valid |
| name | PASS | "Peace Center" |
| description | PASS | Localized per language |
| url | PASS | Absolute URL |
| telephone | PASS | `+52 5543374016` |
| email | PASS | `info@peacecenter.mx` |
| image | PASS | Absolute URL |
| logo | PASS | Absolute URL |
| address | PASS | PostalAddress with locality, region, country |
| geo | PASS | GeoCoordinates present |
| amenityFeature | PASS | 5 LocationFeatureSpecification items |
| sameAs | PASS | Instagram URL |
| potentialAction | PASS | ReserveAction with WhatsApp EntryPoint |
| **Missing: priceRange** | WARN | Recommended by Google for LocalBusiness-derived types |
| **Missing: openingHoursSpecification** | WARN | Recommended for business visibility |
| **Missing: aggregateRating / review** | WARN | Would enable star ratings in SERPs (if reviews exist) |
| **Missing: streetAddress, postalCode** | WARN | PostalAddress is incomplete -- only has locality/region/country |
| **Missing: checkinTime / checkoutTime** | WARN | Recommended for LodgingBusiness |
| **Missing: numberOfRooms** | INFO | Optional but helpful for LodgingBusiness |

### 2.2 WebSite

| Check | Result | Notes |
|-------|--------|-------|
| @context | PASS | |
| @type | PASS | |
| name | PASS | |
| url | PASS | |
| publisher | PASS | References `/#business` via @id |
| inLanguage | PASS | Both es and en listed |
| **Missing: potentialAction (SearchAction)** | INFO | Only applicable if the site has a search feature -- it does not, so this is correctly omitted |

### 2.3 BreadcrumbList

| Check | Result | Notes |
|-------|--------|-------|
| @context | PASS | |
| @type | PASS | |
| itemListElement | PASS | Home item present |
| **Homepage `item` URL inconsistency** | WARN | Spanish homepage uses `https://www.peacecenterlapaz.com` (no trailing slash) while English uses `https://www.peacecenterlapaz.com/en/` (with trailing slash). The canonical URL for Spanish has a trailing slash. Should be consistent. |
| **Single-item breadcrumb on homepage** | INFO | A single-item breadcrumb on the homepage is valid but provides no navigational value. Google may ignore it. Breadcrumbs are more useful on subpages (legal pages). |

---

## 3. Missing Schema Opportunities

### 3.1 HIGH PRIORITY -- Enhance existing LodgingBusiness

The existing business schema should be enhanced with:
- `streetAddress` and `postalCode` in the address
- `priceRange` (e.g., "$$" or a range like "$30-$80 USD")
- `checkinTime` and `checkoutTime`
- `openingHoursSpecification` (or indicate 24/7 availability)
- `containsPlace` to describe sub-units (RV spots, suites)

### 3.2 HIGH PRIORITY -- Service/Offer schemas for Tours and Rentals

The site lists 14 tours/rental services. Each could be marked up as a `TouristTrip` or `Service` with `Offer`. This helps Google understand the breadth of services offered and may surface in relevant searches.

### 3.3 MEDIUM PRIORITY -- ImageGallery / ImageObject

The gallery section could benefit from `ImageGallery` markup to help Google image search.

### 3.4 LOW PRIORITY -- WebPage on each page

Adding `WebPage` schema with `breadcrumb`, `inLanguage`, and `isPartOf` referencing the WebSite would complete the schema graph.

### 3.5 NOT RECOMMENDED

- **FAQPage**: This site is not a government or healthcare authority, so FAQ rich results are restricted since August 2023. Do not add.
- **HowTo**: Deprecated since September 2023. Do not add.
- **SearchAction on WebSite**: The site has no search functionality. Do not add.

---

## 4. Recommended JSON-LD Additions

### 4.1 Enhanced LodgingBusiness (replace existing)

Update `SchemaOrg.astro` to enrich the business schema. Below is the recommended structure for the Spanish version (the English version should mirror it with translated strings):

```json
{
  "@context": "https://schema.org",
  "@type": ["LodgingBusiness", "RVPark"],
  "@id": "https://www.peacecenterlapaz.com/#business",
  "name": "Peace Center",
  "description": "Tu hogar en La Paz, BCS. RV Park con todos los servicios y habitaciones de corta estancia. Cerca de la naturaleza y con la tranquilidad que buscas.",
  "url": "https://www.peacecenterlapaz.com",
  "telephone": "+52 5543374016",
  "email": "info@peacecenter.mx",
  "image": "https://www.peacecenterlapaz.com/peace-center.webp",
  "logo": "https://www.peacecenterlapaz.com/peace-center-logo.jpeg",
  "priceRange": "$$",
  "currenciesAccepted": "MXN, USD",
  "paymentAccepted": "Cash, Credit Card",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[FILL IN: Street address]",
    "addressLocality": "La Paz",
    "addressRegion": "Baja California Sur",
    "postalCode": "[FILL IN: e.g. 23000]",
    "addressCountry": "MX"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 24.1426,
    "longitude": -110.3128
  },
  "checkinTime": "14:00",
  "checkoutTime": "12:00",
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Full Hookups", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Wi-Fi", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "BBQ Area", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Showers", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Kitchenette", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Laundry", "value": true }
  ],
  "containsPlace": [
    {
      "@type": "CampingPitch",
      "name": "RV Park Completo",
      "description": "Espacios amplios con conexiones completas (agua, electricidad, drenaje). Área segura y tranquila.",
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Water Hookup", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Electrical Hookup", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Sewage Hookup", "value": true }
      ]
    },
    {
      "@type": "Suite",
      "name": "Suites Estancia Corta",
      "description": "Habitaciones con aire acondicionado, bano privado y kitchenette.",
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Private Bathroom", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Kitchenette", "value": true }
      ],
      "numberOfRooms": 5
    }
  ],
  "sameAs": ["https://www.instagram.com/peacecenterlpz"],
  "potentialAction": {
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://wa.me/525543374016"
    },
    "result": {
      "@type": "LodgingReservation",
      "name": "Reservar por WhatsApp"
    }
  }
}
```

**Action items requiring real data (marked with `[FILL IN]`):**
- `streetAddress`: The actual street address of the property
- `postalCode`: The Mexican postal code (likely 23XXX for La Paz)
- `checkinTime` / `checkoutTime`: Adjust to actual times
- `numberOfRooms`: Adjust to actual suite count
- Add/remove `amenityFeature` entries as appropriate

### 4.2 TouristTrip Schemas for Tours (NEW)

Add a new `ItemList` schema block containing tours as `TouristTrip` entries. This should be added to `SchemaOrg.astro` and generated dynamically from `TOURS_DATA`.

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://www.peacecenterlapaz.com/#tours",
  "name": "Tours y Rentas",
  "numberOfItems": 14,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "TouristTrip",
        "name": "Tour Dunas del Mogote 4x4",
        "description": "Aventura todo terreno explorando las impresionantes dunas del Mogote y disfrutando de vistas espectaculares.",
        "touristType": "Adventure",
        "provider": {
          "@id": "https://www.peacecenterlapaz.com/#business"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "TouristTrip",
        "name": "Tour Bahia Magdalena",
        "description": "Avistamiento de ballena gris (en temporada) y exploracion de manglares y dunas.",
        "touristType": "Ecotourism",
        "provider": {
          "@id": "https://www.peacecenterlapaz.com/#business"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "TouristTrip",
        "name": "Tour Tiburon Ballena",
        "description": "Nada con el pez mas grande del mundo en la bahia de La Paz.",
        "touristType": "Ecotourism",
        "provider": {
          "@id": "https://www.peacecenterlapaz.com/#business"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "TouristTrip",
        "name": "Isla Espiritu Santo",
        "description": "Snorkel con lobos marinos, arrecifes coloridos y playas virgenes en este Patrimonio Mundial.",
        "touristType": "Ecotourism",
        "provider": {
          "@id": "https://www.peacecenterlapaz.com/#business"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "TouristTrip",
        "name": "Isla Cerralvo",
        "description": "Conocida como Isla Jacques Cousteau, perfecta para pesca deportiva y buceo profundo.",
        "touristType": "Adventure",
        "provider": {
          "@id": "https://www.peacecenterlapaz.com/#business"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "TouristTrip",
        "name": "Tour Historico en Bici",
        "description": "Recorre el centro historico y el malecon conociendo las leyendas y la historia de La Paz.",
        "touristType": "Cultural",
        "provider": {
          "@id": "https://www.peacecenterlapaz.com/#business"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 7,
      "item": {
        "@type": "TouristTrip",
        "name": "Tour Gastronomico en Bici",
        "description": "Prueba los sabores locales: tacos de pescado, mariscos y mas, recorriendo la ciudad en bicicleta.",
        "touristType": "Gastronomy",
        "provider": {
          "@id": "https://www.peacecenterlapaz.com/#business"
        }
      }
    }
  ]
}
```

### 4.3 Service Schemas for Rental Services (NEW)

Rental services (car, van, beach gear, sandboard) are better typed as `Service` with `Offer`:

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://www.peacecenterlapaz.com/#rentals",
  "name": "Servicios de Renta",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Renta de Equipo de Playa",
        "description": "Todo lo necesario para un dia perfecto: sombrillas, sillas, hieleras y mas.",
        "provider": { "@id": "https://www.peacecenterlapaz.com/#business" },
        "areaServed": {
          "@type": "City",
          "name": "La Paz",
          "containedInPlace": {
            "@type": "State",
            "name": "Baja California Sur"
          }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "Renta de Auto",
        "description": "Muevete con libertad por La Paz y sus alrededores en nuestros vehiculos confiables.",
        "provider": { "@id": "https://www.peacecenterlapaz.com/#business" },
        "serviceType": "Car Rental"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "Renta de Van",
        "description": "Ideal para acampar sin preocupaciones. Comodidad y espacio para 2-3 personas.",
        "provider": { "@id": "https://www.peacecenterlapaz.com/#business" },
        "serviceType": "Van Rental"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "name": "Renta de Sandboard",
        "description": "Deslizate por las dunas a tu propio ritmo. Diversion garantizada.",
        "provider": { "@id": "https://www.peacecenterlapaz.com/#business" },
        "serviceType": "Equipment Rental"
      }
    }
  ]
}
```

### 4.4 WebPage Schema (NEW -- add to each page)

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.peacecenterlapaz.com/#webpage",
  "url": "https://www.peacecenterlapaz.com/",
  "name": "Peace Center | RV Park & Suites en La Paz",
  "description": "Tu hogar en La Paz, BCS. RV Park con todos los servicios y habitaciones de corta estancia.",
  "inLanguage": "es",
  "isPartOf": {
    "@id": "https://www.peacecenterlapaz.com/#website"
  },
  "about": {
    "@id": "https://www.peacecenterlapaz.com/#business"
  },
  "breadcrumb": {
    "@id": "https://www.peacecenterlapaz.com/#breadcrumb"
  }
}
```

For the English page, change `url` to `/en/`, `inLanguage` to `"en"`, and translate `name`/`description`.

---

## 5. Implementation Plan

### Priority 1 -- Enrich existing business schema (SchemaOrg.astro)

1. Add `streetAddress`, `postalCode` to `CONTACT_DATA` in `src/i18n/utils.ts`
2. Add `priceRange`, `checkinTime`, `checkoutTime`, `containsPlace` to the `businessSchema` object
3. Add a `@id` to the breadcrumb schema (`/#breadcrumb`) for cross-referencing
4. Fix trailing slash inconsistency on the Spanish breadcrumb `item` URL

### Priority 2 -- Add WebPage schema

Add a `webPageSchema` block to `SchemaOrg.astro` that references the website and breadcrumb.

### Priority 3 -- Add tours and rentals schemas

Generate `TouristTrip` and `Service` schemas dynamically from `TOURS_DATA` and inject them only on the homepage (where the tours section lives).

### Priority 4 -- Localize amenity names

Currently, amenity feature names are in English on both language versions. Consider localizing them (e.g., "Conexiones Completas" for the Spanish page).

---

## 6. Breadcrumb Trailing Slash Fix

In `SchemaOrg.astro`, the Spanish homepage breadcrumb `item` is set to `siteUrl` which lacks a trailing slash, but the canonical URL includes one. Update line 74:

```typescript
// Change from:
item: lang === "es" ? siteUrl : `${siteUrl}/en/`,
// Change to:
item: lang === "es" ? `${siteUrl}/` : `${siteUrl}/en/`,
```

---

## 7. Summary

| Category | Status | Action |
|----------|--------|--------|
| LodgingBusiness + RVPark | Present, needs enrichment | Add address details, priceRange, checkin/checkout, containsPlace |
| WebSite | Present, valid | No changes needed |
| BreadcrumbList | Present, minor issues | Fix trailing slash, add @id |
| WebPage | Missing | Add new schema block |
| TouristTrip (tours) | Missing | Add new schema block from TOURS_DATA |
| Service (rentals) | Missing | Add new schema block from TOURS_DATA |
| FAQPage | N/A | Do NOT add -- restricted to gov/healthcare since Aug 2023 |
| HowTo | N/A | Do NOT add -- deprecated Sep 2023 |
| SearchAction | N/A | Do NOT add -- site has no search feature |
