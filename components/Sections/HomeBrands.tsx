"use client";

import Image from "next/image";
import Link from "next/link";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { brands, luxuryBrands, type Brand } from "@/lib/constants/homebrands";

export default function BrandsSection() {
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";
  const data: Brand[] = isLuxury ? luxuryBrands : brands;
  const headingColor = isLuxury ? "#D3B898" : "#555555";
  const bodyColor = isLuxury ? "#FFFFFF" : "#555555";

  return (
    <section id="homebrands" className="relative z-[101] w-full min-h-screen py-4 md:py-6 lg:py-8 px-4 md:px-2 lg:px-20">
      {/* Content Overlay on top of the tile from HeroSection */}
      <div className="max-w-[1400px] mx-auto flex flex-col gap-6 md:gap-8 lg:gap-12 rounded-3xl p-4 md:p-4 lg:p-10">

        {/* Heading */}
        <Typography
          variant="display-2xl"
          className="font-normal text-center md:text-left"
          style={{ color: headingColor }}
        >
          Brands
        </Typography>

        {/* Grid */}
        <div className="grid grid-cols-1 items-stretch sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-3 lg:gap-6">
          {data.map((brand, i) =>
            isLuxury ? (
              <Link
                href={brand.href}
                key={i}
                className="group relative block h-full w-full max-w-[320px] mx-auto sm:max-w-none overflow-hidden"
              >
                <div className="relative w-full aspect-[3/4]">
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
                    <Typography variant="h3" className="font-light text-left" style={{ color: bodyColor }}>
                      {brand.name}
                    </Typography>
                    <Typography
                      variant="body-sm"
                      className="font-light leading-snug text-left"
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
                className="group flex h-full w-full max-w-[320px] mx-auto sm:max-w-none flex-col"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden shrink-0">
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
                  <Typography variant="h3" className="font-normal" style={{ color: bodyColor }}>
                    {brand.name}
                  </Typography>
                  <Typography
                    variant="body-sm"
                    className="min-h-[2.75rem] flex-1 font-medium leading-snug"
                    style={{ color: bodyColor }}
                  >
                    {brand.description}
                  </Typography>
                </div>
              </Link>
            )
          )}
        </div>

      </div>
    </section>
  );
}