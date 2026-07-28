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

        {/* DESKTOP lg+: fill height column but never crop the image */}
        <div className="hidden lg:flex lg:w-[52%] lg:flex-none lg:self-stretch relative overflow-hidden items-center justify-center">
          <Image
            src={content.image}
            alt="Neeladhri Ceramics – modern living space"
            fill
            className="object-contain object-center"
            sizes="(min-width: 1024px) 52vw, 100vw"
            priority
          />
        </div>

        {/* ── TEXT ── */}
        <div className="flex-1 flex flex-col gap-2">

          <Typography
            variant="overline"
            className="block tracking-[0.2em] uppercase text-center lg:text-left font-normal font-poppins"
            style={{ color: "#F79440" }}
          >
            {content.heading}
          </Typography>

          <Typography
            variant="h1"
            className="font-light font-poppins leading-snug text-center lg:text-left"
            style={{ color: textColor }}
          >
            {content.title.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line.trim()}
              </span>
            ))}
          </Typography>

          {content.paragraphs.map((para, i) => (
            <Typography
              key={`para-${i}`}
              variant="body-lg"
              className="font-light font-poppins leading-loose text-center lg:text-left"
              style={{ color: textColor }}
            >
              {para}
            </Typography>
          ))}

          {content.titleAccent && (
            <Typography
              variant="h2"
              className="font-light font-poppins leading-snug mt-4 text-center lg:text-left"
              style={{ color: textColor }}
            >
              {content.titleAccent}
            </Typography>
          )}

          {content.paragraphsAccent?.map((para, i) => (
            <Typography
              key={`para-accent-${i}`}
              variant="body-lg"
              className="font-light font-poppins leading-loose text-center lg:text-left"
              style={{ color: textColor }}
            >
              {para}
            </Typography>
          ))}

        </div>
      </div>
    </section>
  );
}