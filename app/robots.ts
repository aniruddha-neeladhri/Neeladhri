import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.NODE_ENV === "production";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: isProd ? ["/admin/", "/api/admin/", "/buttons", "/docs"] : [],
    },
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
