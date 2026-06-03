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

        {/* MOBILE / TABLET: natural aspect ratio, zero empty space, capped width */}
        <div className="block lg:hidden w-[85%] sm:w-[75%] mx-auto rounded-2xl overflow-hidden">
          <Image
            src={content.image}
            alt="Neeladhri Ceramics – modern living space"
            width={800}
            height={534}
            className="w-full h-auto block"
            priority
          />
        </div>

        {/* DESKTOP lg+: fill to stretch full height of text column */}
        <div className="hidden lg:block lg:w-[52%] lg:flex-none lg:self-stretch relative rounded-2xl overflow-hidden">
          <Image
            src={content.image}
            alt="Neeladhri Ceramics – modern living space"
            fill
            className="object-cover object-bottom"   //use cover if needed
            priority
          />
        </div>

        {/* ── TEXT ── */}
        <div className="flex-1 flex flex-col gap-2">

          {/* Eyebrow — centred below lg, left on lg+ */}
          <div>
            <Typography
              variant="overline"
              className="block tracking-[0.2em] uppercase text-center lg:text-left"
              style={{ color: "#F79440" }}
            >
              {content.heading}
            </Typography>
          </div>

          {/* Title — centred below lg, left on lg+ */}
          <div>
            <Typography
              variant="h1"
              className="font-normal leading-snug text-center lg:text-left"
              style={{ color: textColor }}
            >
              {content.title.split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line.trim()}
                </span>
              ))}
            </Typography>
          </div>

          {/* Paragraphs */}
          {content.paragraphs.map((para, i) => (
            <div key={i}>
              <Typography
                variant="body-lg"
                className="font-light leading-loose"
                style={{ color: textColor }}
              >
                {para}
              </Typography>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}