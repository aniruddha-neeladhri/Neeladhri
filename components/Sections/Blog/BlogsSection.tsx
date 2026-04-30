"use client";

import Typography from "@/lib/Typography";
import Image from "next/image";
import { BLOG_IMAGES, BLOG_CONTENT } from "@/lib/constants/blogs";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function InsightsHero() {
  const { theme } = useTheme();
  const currentImages = BLOG_IMAGES[theme as keyof typeof BLOG_IMAGES];
  const currentContent = BLOG_CONTENT[theme as keyof typeof BLOG_CONTENT];

  return (
    <section className="w-full flex justify-center py-10">
      
      {/* Container to match centered boxed layout */}
      <div
        className={`relative w-[95%] max-w-[1400px] aspect-[16/9] overflow-hidden ${theme === "luxury" ? "border-2 border-[#F79440]" : ""}`}
      >

        {/* Dummy Image (replace later) */}
        <Image
          src={currentImages.banner}
          alt="Interior Background"
          fill
          priority
          className="object-cover"
        />

        {/* Optional Soft Overlay */}
        <div className="absolute inset-0" />

        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <Typography variant="display-2xl" className="text-[#2D200A] font-normal leading-snug max-w-[700px]">
            {currentContent.hero.title.split('\n').map((line: string, i: number) => (
              <span key={i}>
                {line}
                {i < currentContent.hero.title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </Typography>
        </div>
      </div>
    </section>
  );
}