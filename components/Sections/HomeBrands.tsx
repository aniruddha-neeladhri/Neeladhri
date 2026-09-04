"use client";

import Image from "next/image";
import Link from "next/link";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import {
  brands,
  HOME_BRANDS_HEADING,
  luxuryBrands,
  type Brand,
} from "@/lib/constants/homebrands";
import {
  cancelHomepageSectionScroll,
  setHomepageScrollTarget,
} from "@/lib/navigation/homepage";

export default function BrandsSection() {
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";
  const data: Brand[] = isLuxury ? luxuryBrands : brands;
  const headingColor = isLuxury ? "#D3B898" : "#555555";
  const bodyColor = isLuxury ? "#FFFFFF" : "#555555";

  const handleBrandNavigate = () => {
    cancelHomepageSectionScroll();
    setHomepageScrollTarget("homebrands");
  };

  return (
    <section id="homebrands" className="relative z-[101] w-full min-h-screen py-4 md:py-6 lg:py-8 px-4 md:px-2 lg:px-20">
      {/* Content Overlay on top of the tile from HeroSection */}
      <div className="max-w-[1400px] mx-auto flex flex-col gap-6 md:gap-8 lg:gap-12 rounded-3xl p-4 md:p-4 xl:p-10">

        {/* Heading */}
        <Typography
          variant="display-2xl"
          as="h2"
          className={`font-normal text-center md:text-left ${
            isLuxury
              ? "font-roboto-slab font-light"
              : "font-poppins font-medium"
          }`}
          style={{ color: headingColor }}
        >
          {HOME_BRANDS_HEADING}
        </Typography>

        {/* Grid */}
        <div className="grid grid-cols-1 items-stretch sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-3 lg:gap-6">
          {data.map((brand, i) =>
            isLuxury ? (
              <Link
                href={brand.href}
                key={i}
                onClick={handleBrandNavigate}
                className="group relative block h-full w-full max-w-[320px] mx-auto sm:max-w-none overflow-hidden"
              >
                <div className="relative w-full aspect-[3/4] md:aspect-auto md:h-[400px] lg:h-[480px] xl:h-[550px] 2xl:aspect-[3/4] 2xl:h-auto">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 z-[1] bg-black/50 pointer-events-none opacity-100 transition-opacity duration-500 group-hover:opacity-0"
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-1 px-4 py-4 [text-shadow:0_1px_8px_rgba(0,0,0,0.85)]">
                    <Typography variant="h2" as="p" className="font-cormorant-garamond font-medium text-left" style={{ color: bodyColor }}>
                      {brand.name}
                    </Typography>
                    <Typography
                      variant="body-lg"
                      className="font-cormorant-garamond font-light leading-snug text-left"
                      style={{ color: bodyColor }}
                    >
                      {brand.description}
                    </Typography>
                  </div>
                </div>
              </Link>
            ) : (
              <Link
                href={brand.href}
                key={i}
                onClick={handleBrandNavigate}
                className="group flex h-full w-full max-w-[320px] mx-auto sm:max-w-none flex-col"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden shrink-0 md:aspect-auto md:h-[400px] lg:h-[480px] xl:h-[550px] 2xl:aspect-[3/4] 2xl:h-auto">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                <div
                  className="relative z-10 -mt-12 flex min-h-[6.5rem] flex-1 flex-col justify-start gap-1 rounded-2xl bg-white px-4 py-4 shadow-sm
                             transition-all duration-500 ease-out
                             group-hover:-translate-y-2 group-hover:shadow-[0_8px_30px_rgba(247,148,64,0.5)]"
                >
                  <Typography variant="h3" as="p" className="font-poppins font-medium" style={{ color: bodyColor }}>
                    {brand.name}
                  </Typography>
                  <Typography
                    variant="body-sm"
                    className="min-h-[2.75rem] flex-1 font-poppins font-extralight leading-snug"
                    style={{ color: bodyColor }}
                  >
                    {brand.description}
                  </Typography>
                </div>
              </Link>
            )
          )}
        </div>

        <Link
          href="/brands"
          className="mx-auto inline-flex items-center justify-center bg-[#F79440] px-6 py-3 font-poppins text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          View More
        </Link>

      </div>
    </section>
  );
}