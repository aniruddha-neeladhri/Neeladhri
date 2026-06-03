"use client";

import Image from "next/image";
import Link from "next/link";
import Typography from "@/lib/Typography";
import { ABOUT_LUXURY_LAST_SECTION } from "@/lib/constants/about";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function LastLuxurySection() {
  const { theme } = useTheme();

  if (theme !== "luxury") return null;

  const { eyebrow, title, cta, ctaHref, image, borderColor } =
    ABOUT_LUXURY_LAST_SECTION;

  return (
    <section className="relative isolate w-full min-h-[50vh] overflow-hidden sm:min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh]">
      {/* Full-section background */}
      <div className="absolute inset-0 z-0 h-full min-h-full w-full">
        <Image
          src={image}
          alt="Neeladhri Ceramics luxury showroom"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden />
      </div>

      {/* Left-aligned content */}
      <div className="relative z-10 flex min-h-[50vh] w-full items-center sm:min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh]">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-12 lg:py-24 xl:px-20">
          <div className="flex max-w-xl flex-col items-start text-left lg:max-w-2xl">
            <div className="flex w-full flex-col items-start gap-1 md:gap-1.5">
              <Typography
                variant="display-2xl"
                className="!text-white w-full text-left font-light leading-snug"
                style={{ color: "#FFFFFF" }}
              >
                {eyebrow}
              </Typography>

              <Typography
                variant="display-2xl"
                className="!text-white w-full text-left font-light leading-tight tracking-tight"
                style={{ color: "#FFFFFF" }}
              >
                {title}
              </Typography>
            </div>

            <Link
              href={ctaHref}
              className="mt-4 md:mt-5 inline-flex items-center justify-center self-start rounded-full border px-8 py-3 md:px-10 md:py-3.5 transition-colors duration-200 hover:bg-white/5"
              style={{ borderColor }}
            >
              <Typography
                variant="body-xl"
                className="!text-white font-light normal-case tracking-normal text-left"
                style={{ color: "#FFFFFF" }}
              >
                {cta}
              </Typography>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
