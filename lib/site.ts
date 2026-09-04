/** Production domain for Neeladhri Ceramics. */
export const PRODUCTION_SITE_URL = "https://www.neeladhri.com";

/** Canonical site URL for metadata, sitemap, and robots. */
export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) {
    return configured.replace(/\/$/, "");
  }

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    return `https://${vercel.replace(/^https?:\/\//, "")}`;
  }

  if (process.env.NODE_ENV === "production") {
    return PRODUCTION_SITE_URL;
  }

  return "http://localhost:3000";
}

export function getSiteHostname(): string {
  return new URL(getSiteUrl()).hostname;
}
