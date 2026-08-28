import {
  BRAND_ROUTES_LUXURY,
  BRAND_ROUTES_PREMIUM,
  brandsData,
} from "@/lib/constants/brands";

/**
 * URL slug (kebab-case path segment) → brand registry key.
 * Only entries where slug differs from the registry key are listed here.
 */
const SLUG_TO_BRAND_ID: Record<string, string> = {
  "op-butler": "opButler",
  "perrin-rowe": "perrinRowe",
  "house-of-rohl": "houseOfRohl",
  "victoria-albert": "victoriaAlbert",
  "decor-walther": "decorWalther",
  "armadi-art": "armadiArt",
  "atlas-concorde": "atlasConcorde",
  "water-purifiers": "waterPurifiers",
  "provent-systems": "proventsystems",
};

function slugFromRoute(route: string): string {
  return route.replace(/^\/brands\//, "");
}

/** All unique brand URL slugs across Essentials and Bespoke themes. */
export function getAllBrandSlugs(): string[] {
  const slugs = new Set<string>();
  for (const route of [...BRAND_ROUTES_PREMIUM, ...BRAND_ROUTES_LUXURY]) {
    slugs.add(slugFromRoute(route));
  }
  return [...slugs].sort();
}

/** Resolve a URL slug to a brand registry key, or undefined if not found. */
export function brandIdFromSlug(slug: string): string | undefined {
  const brandId = SLUG_TO_BRAND_ID[slug] ?? slug;
  return brandsData[brandId] ? brandId : undefined;
}
