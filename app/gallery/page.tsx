import type { Metadata } from "next";
import GallerySection from "@/components/Sections/GallerySection";
import { PAGE_SEO, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(PAGE_SEO.gallery, "/gallery");

export default function GalleryPage() {
  return (
    <>
      <h1 className="sr-only">{PAGE_SEO.gallery.h1}</h1>
      <GallerySection />
    </>
  );
}
