"use client";

import Image from "next/image";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { SPACES_DATA } from "@/lib/constants/home";
import { useState, useCallback } from "react";

export default function SpacesShowcase() {
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";
  const spaces = SPACES_DATA[theme];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goTo = useCallback(
    (next: number) => {
      if (isAnimating) return;
      if (next < 0 || next >= spaces.length) return;
      setDirection(next > activeIndex ? "right" : "left");
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex(next);
        setIsAnimating(false);
      }, 350);
    },
    [isAnimating, activeIndex, spaces.length]
  );

  const canPrev = activeIndex > 0;
  const canNext = activeIndex < spaces.length - 1;

  const arrowBase =
    "flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-200 select-none";
  const arrowActive = isLuxury
    ? "border-white/40 text-white hover:bg-white/10"
    : "border-[#F79440]/50 text-[#F79440] hover:bg-[#F79440]/10";
  const arrowDisabled = isLuxury
    ? "border-white/10 text-white/20 cursor-not-allowed"
    : "border-[#F79440]/15 text-[#F79440]/25 cursor-not-allowed";

  const textColor = isLuxury ? "text-white" : "text-[#F79440]";
  const bg = isLuxury ? "bg-[#3D3A3A]" : "bg-white";

  return (
    <section className={`w-full py-8 md:py-14 lg:py-20 ${bg}`}>

      {/* ── MOBILE: single-image carousel (< 768px) ── */}
      <div className="md:hidden px-2">

        {/* Image + arrows row */}
        <div className="flex items-center gap-2">

          {/* Prev arrow */}
          <button
            onClick={() => goTo(activeIndex - 1)}
            disabled={!canPrev}
            aria-label="Previous image"
            className={`${arrowBase} flex-shrink-0 ${canPrev ? arrowActive : arrowDisabled}`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Image — taller on sm screens */}
          <div className="relative flex-1 h-[260px] sm:h-[360px] overflow-hidden">
            <div
              key={activeIndex}
              style={{
                position: "absolute",
                inset: 0,
                transform: isAnimating
                  ? direction === "right"
                    ? "translateX(-100%)"
                    : "translateX(100%)"
                  : "translateX(0%)",
                transition: "transform 350ms cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <Image
                src={spaces[activeIndex].src}
                alt={spaces[activeIndex].alt}
                fill
                className="object-contain object-center"
              />
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={() => goTo(activeIndex + 1)}
            disabled={!canNext}
            aria-label="Next image"
            className={`${arrowBase} flex-shrink-0 ${canNext ? arrowActive : arrowDisabled}`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

        </div>

        {/* Label — minimal gap */}
        <div className="mt-6 flex flex-col items-center text-center">
          <Typography variant="body-xl" className={`font-light leading-snug ${textColor}`}>
            {spaces[activeIndex].label}
          </Typography>
          <Typography variant="body-xl" className={`font-light leading-snug ${textColor}`}>
            {spaces[activeIndex].sublabel}
          </Typography>
        </div>
      </div>

      {/* ── DESKTOP: 3-column layout (≥ 768px) ── */}
      <div className="hidden md:block">

        {/* Image strip — full bleed, no padding */}
        <div className="flex items-center gap-2 md:gap-3 w-full">

          {/* Left */}
          <div className="relative flex-[1] overflow-hidden group
                          h-[260px] md:h-[320px] lg:h-[400px]">
            <Image
              src={spaces[0].src}
              alt={spaces[0].alt}
              fill
              className="object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
          </div>

          {/* Center */}
          <div className="relative flex-[1.4] overflow-hidden group
                          h-[300px] md:h-[380px] lg:h-[460px]">
            <Image
              src={spaces[1].src}
              alt={spaces[1].alt}
              fill
              className="object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
          </div>

          {/* Right */}
          <div className="relative flex-[1] overflow-hidden group
                          h-[260px] md:h-[320px] lg:h-[400px]">
            <Image
              src={spaces[2].src}
              alt={spaces[2].alt}
              fill
              className="object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
          </div>

        </div>

        {/* Labels */}
        <div className="md:mt-6">
          <div className="flex gap-2 md:gap-3 w-full">
            {spaces.map((space, i) => (
              <div
                key={i}
                className={`flex flex-col gap-0.5 items-center text-center ${
                  i === 1 ? "flex-[1.4]" : "flex-[1]"
                }`}
              >
                <Typography variant="body-lg" className={`font-light leading-snug ${textColor}`}>
                  {space.label}
                </Typography>
                <Typography variant="body-lg" className={`font-light leading-snug ${textColor}`}>
                  {space.sublabel}
                </Typography>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}