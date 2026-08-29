import type { Metadata } from "next";
import { PAGE_SEO, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(PAGE_SEO.collection, "/collection");

export default function CollectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
