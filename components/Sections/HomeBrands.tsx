"use client";

import Image from "next/image";
import Link from "next/link";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { brands, luxuryBrands, type Brand } from "@/lib/constants/homebrands";

export default function BrandsSection() {
  const { theme } = useTheme();
  const data: Brand[] = theme === "luxury" ? luxuryBrands : brands;

  return (
    <section id="homebrands" className="w-full py-4 md:py-6 lg:py-8 px-6 lg:px-20">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8 md:gap-12">

        {/* Heading */}
        <Typography
          variant="display-2xl"
          className="font-normal text-center md:text-left"
          style={{ color: "#F79440" }}
        >
          Brands
        </Typography>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {data.map((brand, i) => (
            <Link
              href={brand.href}
              key={i}
              className="group relative w-full max-w-[320px] mx-auto sm:max-w-none pb-14 block"
            >
              {/* Image — scales up on hover */}
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* White card — pops up with orange shadow on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 bg-white rounded-2xl px-4 py-8 md:py-4 lg:py-8 shadow-sm flex flex-col gap-1
                           transition-all duration-500 ease-out
                           group-hover:-translate-y-2
                           group-hover:shadow-[0_8px_30px_rgba(247,148,64,0.5)]"
              >
                <Typography variant="h3" className="text-black font-normal">
                  {brand.name}
                </Typography>
                <Typography
                  variant="body-sm"
                  className="text-black/70 font-medium leading-snug"
                >
                  {brand.description}
                </Typography>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}