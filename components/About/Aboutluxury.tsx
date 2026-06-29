"use client";

import Image from "next/image";
import Link from "next/link";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { ABOUT_LUXURY_HERO } from "@/lib/constants/about";

export default function AboutLuxury() {
  const { theme } = useTheme();

  if (theme !== "luxury") return null;

  const { tagline, title, titleAccent, description, cta, ctaHref, image, accent, gold } =
    ABOUT_LUXURY_HERO;

  return (
    <section className="relative w-full min-h-[min(82vh,680px)] md:min-h-[min(88vh,760px)] lg:min-h-[min(92vh,820px)] flex items-center overflow-hidden">
      <Image
        src={image}
        alt="Luxury interior by Neeladhri Ceramics"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-20 py-28 md:py-32 lg:py-36">
        <div className="max-w-[520px] md:max-w-[580px] flex flex-col items-start gap-4 md:gap-5 lg:gap-6">
          <Typography
            variant="caption"
            className="normal-case tracking-[0.28em] font-light font-cormorant-garamond"
            style={{ color: gold }}
          >
            {tagline}
          </Typography>

          <Typography
            variant="display-3xl"
            className="!text-white font-medium leading-[1.15] tracking-tight font-cormorant-garamond"
          >
            {title}{" "}
            <span style={{ color: accent }}>{titleAccent}</span>
          </Typography>

          <Typography
            variant="body-xl"
            className="!text-[#FFFFFF] font-light font-cormorant-garamond leading-relaxed max-w-[480px]"
          >
            {description}
          </Typography>

          <Link
            href={ctaHref}
            className="mt-2 md:mt-4 inline-flex items-center justify-center border px-8 py-3 md:px-10 md:py-3.5 transition-colors duration-200 hover:bg-[#D8B691]/10"
            style={{ borderColor: gold }}
          >
            <Typography
              variant="caption"
              className="normal-case tracking-[0.22em] font-light font-cormorant-garamond !text-[#FFFFFF]"
            >
              {cta}
            </Typography>
          </Link>
        </div>
      </div>
    </section>
  );
}
