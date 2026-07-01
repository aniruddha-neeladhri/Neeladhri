import HeroSection from "@/components/Sections/HeroSection";
import HomePage from "@/components/Sections/homepage";
import HomeBrands from "@/components/Sections/HomeBrands";
import ModernSpace from "@/components/Sections/ModernSpace";
import ReelsSection from "@/components/Sections/Reelssection";

export default function Home() {
  return (
    <>
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
