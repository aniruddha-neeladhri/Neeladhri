"use client";

import Image from "next/image";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { contactBannerImages } from "@/lib/constants/Contact";

const LUXURY_BANNER_DESCRIPTION =
  "Whether you're designing a home, or commercial space, or sourcing high-quality tiles, Neeladhri Ceramics is here to support your vision with precision and style.";

export default function ContactBanner() {
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";
  const images = contactBannerImages(theme);

  if (isLuxury) {
    return (
      <div className="relative w-full aspect-[3/2] md:aspect-[4/2] lg:aspect-1920/600 overflow-hidden">
        <Image
          src={images.banner}
          alt="Contact Us Banner"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-black/75" aria-hidden />

        <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 sm:pb-10 md:pb-12 lg:pb-14 px-4 sm:px-6 md:px-10 text-center">
          <Typography
            variant="display-2xl"
            className="font-light leading-tight font-cormorant-garamond"
            style={{ color: "#D3B898" }}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="h3"
            className="!text-white font-light leading-relaxed max-w-[920px] mt-3 sm:mt-4 md:mt-5 font-cormorant-garamond"
          >
            {LUXURY_BANNER_DESCRIPTION}
          </Typography>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[3/2] md:aspect-[4/2] lg:aspect-1920/600 overflow-hidden">
      <Image
        src={images.banner}
        alt="Contact Us Banner"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/50" />

      <div className="absolute inset-0 flex items-center justify-center">
        <Typography variant="display-3xl" className="text-white font-semibold tracking-wide font-montserrat">
          Contact Us
        </Typography>
      </div>
    </div>
  );
}
