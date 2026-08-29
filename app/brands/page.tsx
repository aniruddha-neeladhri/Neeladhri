import type { Metadata } from "next";
import BrandsSection from "@/components/Sections/BrandsSection";
import { PAGE_SEO, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(PAGE_SEO.brands, "/brands");

export default function BrandsPage() {
  return (
    <>
      <h1 className="sr-only">{PAGE_SEO.brands.h1}</h1>
      <BrandsSection />
    </>
  );
}
