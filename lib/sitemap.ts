import { BLOG_POSTS } from "@/lib/constants/blogs";
import { getAllBrandSlugs } from "@/lib/data/brands/slugs";
import { getSiteUrl } from "@/lib/site";

const STATIC_ROUTES = [
  "",
  "/about",
  "/brands",
  "/collection",
  "/gallery",
  "/blog",
  "/contact",
  "/privacy",
  "/terms",
  "/sitemap",
] as const;

export type SitemapEntry = {
  url: string;
  lastModified: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
};

export function getSitemapEntries(): SitemapEntry[] {
  const base = getSiteUrl();
  const lastModified = new Date().toISOString();

  const staticPages = STATIC_ROUTES.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : 0.8,
  }));

  const brandPages = getAllBrandSlugs().map((slug) => ({
    url: `${base}/brands/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...brandPages, ...blogPages];
}

export function buildSitemapXml(entries: SitemapEntry[]): string {
  const urls = entries
    .map(
      (entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}
