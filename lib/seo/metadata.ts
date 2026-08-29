import type { Metadata } from "next";
import type { PageSeo } from "./types";

export function pageMetadata(seo: PageSeo, path: string): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: path,
    },
  };
}
