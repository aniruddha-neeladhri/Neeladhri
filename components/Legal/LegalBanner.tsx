"use client";

import Image from "next/image";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { contactBannerImages } from "@/lib/constants/Contact";

type LegalBannerProps = {
  title: string;
};

export default function LegalBanner({ title }: LegalBannerProps) {
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";
  const images = contactBannerImages(theme);

  return (
    <div className="relative w-full aspect-[3/2] md:aspect-[4/2] lg:aspect-1920/600 overflow-hidden">
      <Image
        src={images.banner}
        alt={`${title} Banner`}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div
        className={
          isLuxury
            ? "absolute inset-0 bg-black/75"
            : "absolute inset-0 bg-gradient-to-b from-black/50 to-black/50"
        }
        aria-hidden
      />

      <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
        <Typography
          variant={isLuxury ? "display-2xl" : "display-3xl"}
          className={
            isLuxury
              ? "font-light leading-tight font-cormorant-garamond"
              : "text-white font-semibold tracking-wide font-montserrat"
          }
          style={isLuxury ? { color: "#D3B898" } : undefined}
        >
          {title}
        </Typography>
      </div>
    </div>
  );
}
