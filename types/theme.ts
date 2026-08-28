/** Site-wide visual theme: Essentials (premium) or Bespoke (luxury). */
export type SiteTheme = "premium" | "luxury";

export const SITE_THEMES: readonly SiteTheme[] = ["premium", "luxury"] as const;
