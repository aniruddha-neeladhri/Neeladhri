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
    <section className="w-full py-2 md:py-4 lg:py-8 px-6 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        {/* About Us Heading - Full Width */}
        <div className="text-start mb-8">
          <Typography variant="display-xl" className="font-semibold tracking-wide uppercase" style={{ color: textColor }}>
            {content.heading}
          </Typography>
        </div>
        {/* Content Row */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-24 xl:gap-32 items-stretch">
          {/* Left Side - Image stretches to match content height */}
          <div className="w-full md:w-[40%] lg:w-[40%] flex-shrink-0 relative min-h-[300px]">
            <Image
              src={content.image}
              alt="About Us"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          {/* Right Side - Content */}
          <div className="w-full md:flex-1 flex flex-col gap-6">
            <Typography variant="display-xl" className="font-normal text-center md:text-left" style={{ color: textColor }}>
              {content.title.split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </Typography>
            {content.paragraphs.map((para, i) => (
              <Typography key={i} variant="body-xl" className="leading-relaxed font-light" style={{ color: textColor }}>
                {para}
              </Typography>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}