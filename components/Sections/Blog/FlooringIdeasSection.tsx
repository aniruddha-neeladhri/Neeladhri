"use client";

import Typography from "@/lib/Typography";
import Image from "next/image";
import { BLOG_IMAGES, BLOG_CONTENT } from "@/lib/constants/blogs";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function FlooringIdeasSection() {
  const { theme } = useTheme();
  const currentImages = BLOG_IMAGES[theme as keyof typeof BLOG_IMAGES];
  const currentContent = BLOG_CONTENT[theme as keyof typeof BLOG_CONTENT];
  const textColor = theme === "luxury" ? "#FFFFFF" : undefined;

  return (
    <section className="w-full py-8 lg:py-16 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">

        {/* LEFT IMAGE */}
        <div className="relative mx-auto size-72 md:size-80
                        xl:size-auto xl:w-full xl:h-[clamp(24rem,58vw,54rem)]
                        2xl:h-[clamp(28rem,42vw,43rem)]">
          <Image
            src={currentImages.blog1}
            alt="Flooring Living Room"
            fill
            className={`object-cover ${theme === "luxury" ? "border-2 border-[#F79440]" : ""}`}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-6">

          {/* Heading */}
          <Typography variant="display-xl" className="font-normal leading-tight text-center" style={{ color: textColor }}>
            {currentContent.flooringIdeas.heading.split('\n').map((line: string, i: number) => (
              <span key={i}>
                {line}
                {i < currentContent.flooringIdeas.heading.split('\n').length - 1 && <br />}
              </span>
            ))}
          </Typography>

          {/* Paragraphs */}
          <div className="space-y-5 leading-relaxed">
            <Typography variant="body-lg" style={{ color: textColor }}>
              {currentContent.flooringIdeas.intro}
            </Typography>

            <Typography variant="body-lg" style={{ color: textColor }}>
              {currentContent.flooringIdeas.importance.title}
              <br />
              {currentContent.flooringIdeas.importance.text}
            </Typography>
          </div>

          {/* BOTTOM RIGHT IMAGE */}
          <div className="relative w-full aspect-video mt-4
                xl:aspect-auto xl:h-[clamp(20rem,20vw,20rem)]
                2xl:h-[clamp(16rem,16vw,16rem)]">
            <Image
              src={currentImages.blog2}
              alt="Modern Living Interior"
              fill
              className={`object-contain xl:object-cover ${theme === "luxury" ? "border-2 border-[#F79440]" : ""}`}
            />
          </div>
        </div>

      </div>
    </section>
  );
}