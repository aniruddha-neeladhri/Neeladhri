import type { Metadata } from "next";
import AboutPageContent from "@/components/About/AboutPageContent";
import { PAGE_SEO, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(PAGE_SEO.about, "/about");

export default function AboutPage() {
  return (
    <>
      <h1 className="sr-only">{PAGE_SEO.about.h1}</h1>
      <AboutPageContent />
    </>
  );
}
