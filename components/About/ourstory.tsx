"use client";

import Image from "next/image";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { ABOUT_CONTENT } from "@/lib/constants/about";

export default function AboutSection() {
  const { theme } = useTheme();
  const content = ABOUT_CONTENT[theme];
  const textColor = content.textColor;

  return (
    <section className="w-full pt-6 pb-4 md:pt-10 md:pb-6 lg:pt-14 lg:pb-8 px-6 lg:px-20">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:items-stretch gap-6 lg:gap-10">

        {/* MOBILE / TABLET: fixed size, same from 340px to 1024px, no crop */}
        <div className="block lg:hidden w-[260px] mx-auto overflow-hidden">
          <Image
            src={content.image}
            alt="Neeladhri Ceramics – modern living space"
            width={800}
            height={534}
            className="w-full h-auto block"
            priority
          />
        </div>

        {/* DESKTOP lg+: image starts flush at top with text, never crop */}
        <div className="hidden lg:flex lg:w-[52%] lg:flex-none lg:self-stretch relative overflow-hidden items-start justify-center">
          <Image
            src={content.image}
            alt="Neeladhri Ceramics – modern living space"
            fill
            className="object-contain object-top"
            sizes="(min-width: 1024px) 52vw, 100vw"
            priority
          />
        </div>

        {/* ── TEXT ── */}
        <div className="flex-1 flex flex-col">

          {/* Eyebrow — centered on mobile/tablet, left on desktop */}
          <Typography
            variant="overline"
            className="block tracking-[0.2em] uppercase text-center lg:text-left font-normal font-poppins mb-2"
            style={{ color: "#D8B691" }}
          >
            {content.heading}
          </Typography>

          {/* Title — centered on mobile/tablet, left on desktop */}
          <Typography
            variant="h1"
            className="font-light font-poppins leading-snug text-center lg:text-left mb-4"
            style={{ color: textColor }}
          >
            {content.title.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line.trim()}
              </span>
            ))}
          </Typography>

          {/* Paragraphs — always left-aligned for readability */}
          <div className="flex flex-col gap-4">
            {content.paragraphs.map((para, i) => (
              <Typography
                key={`para-${i}`}
                variant="body-lg"
                className="font-light font-poppins leading-loose text-left"
                style={{ color: textColor }}
              >
                {para}
              </Typography>
            ))}
          </div>

          {/* Accent title */}
          {content.titleAccent && (
            <Typography
              variant="h2"
              className="font-light font-poppins leading-snug text-center lg:text-left mt-8 mb-4"
              style={{ color: textColor }}
            >
              {content.titleAccent}
            </Typography>
          )}

          {/* Accent paragraphs — always left-aligned */}
          <div className="flex flex-col gap-4">
            {content.paragraphsAccent?.map((para, i) => (
              <Typography
                key={`para-accent-${i}`}
                variant="body-lg"
                className="font-light font-poppins leading-loose text-left"
                style={{ color: textColor }}
              >
                {para}
              </Typography>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}