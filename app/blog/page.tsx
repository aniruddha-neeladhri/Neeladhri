import type { Metadata } from "next";
import BlogsSection from "@/components/Sections/Blog/BlogsSection";
import ContemporaryLiving from "@/components/Sections/Blog/ContemporaryLiving";
import LuxurySpace from "@/components/Sections/Blog/luxuryspace";
import LuxuryDiscover from "@/components/Sections/Blog/luxurydiscover";
import { PAGE_SEO, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(PAGE_SEO.blog, "/blog");

export default function BlogPage() {
  return (
    <>
      <h1 className="sr-only">{PAGE_SEO.blog.h1}</h1>
      <BlogsSection />
      <LuxurySpace />
      <LuxuryDiscover />
      <ContemporaryLiving />
    </>
  );
}
