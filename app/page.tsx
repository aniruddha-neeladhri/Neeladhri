import type { Metadata } from "next";
import HeroSection from "@/components/Sections/HeroSection";
import HomePage from "@/components/Sections/homepage";
import HomeBrands from "@/components/Sections/HomeBrands";
import ModernSpace from "@/components/Sections/ModernSpace";
import ReelsSection from "@/components/Sections/Reelssection";
import { PAGE_SEO, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(PAGE_SEO.home, "/");

export default function Home() {
  return (
    <>
      <h1 className="sr-only">{PAGE_SEO.home.h1}</h1>
      <HeroSection />
      <div className="relative z-30 w-full [transform:translateZ(0)] bg-[var(--theme-page-bg)]">
        <HomePage />
        <HomeBrands />
        <ModernSpace />
        <ReelsSection />
      </div>
    </>
  );
}
