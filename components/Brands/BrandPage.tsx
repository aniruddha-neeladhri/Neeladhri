"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Typography from "@/lib/Typography";
import { BrandData } from "@/lib/constants/brands";
import { useTheme } from "@/lib/contexts/ThemeContext";

interface BrandPageProps {
  brand?: BrandData;
}

export default function BrandPage({ brand }: BrandPageProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Theme now follows the global Premium/Luxury toggle (ThemeContext), not the
  // brand's own category. Called unconditionally, alongside the other hooks,
  // before any early return (Rules of Hooks).
  const { theme } = useTheme();

  const updateScrollState = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    setCanScrollLeft(container.scrollLeft > 1);
    setCanScrollRight(container.scrollLeft < maxScrollLeft - 1);
  }, []);

  useEffect(() => {
    updateScrollState();
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateScrollState, { passive: true });
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(container);

    return () => {
      container.removeEventListener("scroll", updateScrollState);
      observer.disconnect();
    };
  }, [brand?.images.length, updateScrollState]);

  if (!brand) {
    return (
      <div className="flex flex-col items-center justify-center px-4 md:px-8 mt-2 mb-12">
        <Typography variant="h1" className="font-medium mb-8 text-center" style={{ color: "#7E7669" }}>
          Brand not found
        </Typography>
      </div>
    );
  }

  // isLuxury/colors are derived from the global theme toggle. Images, copy,
  // and layout below are identical regardless of theme — only these values
  // (and the transition classes) change.
  const isLuxury = theme === "luxury";
  const accentColor = isLuxury ? "#D3B898" : "#7E7669";
  const arrowColor = isLuxury ? "#D3B898" : "#555555";
  const brandNameColor = isLuxury ? "#D3B898" : "#555555";
  const bodyTextColor = isLuxury ? "#FFFFFF" : "#555555";
  const textAlign = isLuxury ? "text-left" : "text-center";
  const flexAlign = isLuxury ? "items-start" : "items-center";

  // Shared transition classes so any theme swap animates smoothly instead of
  // snapping instantly between premium <-> luxury colors.
  const colorTransition = "transition-colors duration-500 ease-in-out";
  const borderTransition = "transition-[border-color] duration-500 ease-in-out";

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    if (direction === "left" && container.scrollLeft <= 1) return;
    if (direction === "right" && container.scrollLeft >= maxScrollLeft - 1) return;

    const child = container.children[0] as HTMLElement;
    const scrollAmount = child ? child.offsetWidth : 300;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <style jsx>{`
        @keyframes popUp {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .pop-up {
          animation: popUp 0.5s ease-out;
        }
      `}</style>
      <div className={`flex flex-col ${flexAlign} justify-center px-4 md:px-8 mt-2 mb-12 pop-up`}>
        <div
          className={`w-full p-2 md:p-10 ${borderTransition} ${isLuxury ? "" : "rounded-[4.5rem]"}`}
          style={{ border: `${isLuxury ? "2px" : "5px"} solid ${accentColor}` }}
        >
          {/* Header */}
          <div className={`flex flex-col ${flexAlign} mb-6 w-full`}>
            <Typography
              variant="display-2xl"
              className={`mb-2 ${textAlign} tracking-wide ${colorTransition} ${isLuxury ? "font-cormorant-garamond font-semibold" : "font-montserrat font-semibold"
                }`}
              style={{ color: brandNameColor }}
            >
              {brand.name}
            </Typography>
            <Typography
              variant="h1"
              className={`font-medium mb-2 ${textAlign} ${colorTransition} ${isLuxury ? "font-cormorant-garamond font-normal" : "font-poppins font-normal"
                }`}
              style={{ color: bodyTextColor }}
            >
              {brand.tagline}
            </Typography>
            <Typography
              variant="h2"
              className={`${textAlign} mb-0 md:mb-4 lg:mb-14 leading-relaxed w-full xl:w-[60%] ${colorTransition} ${isLuxury ? "font-cormorant-garamond font-light" : "font-poppins font-light"
                }`}
              style={{ color: bodyTextColor }}
            >
              {brand.description}
            </Typography>
          </div>

          {/* Images — carousel on small, grid on md+ (identical for every theme) */}
          <div className="relative w-full mb-2 lg:mb-6">
            {/* Mobile: arrows flanking image with 2px gap */}
            <div className="md:hidden flex w-full items-center justify-center gap-[12px]">
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={`flex h-9 w-9 shrink-0 items-center justify-center transition-opacity ${canScrollLeft ? "cursor-pointer opacity-100" : "cursor-default opacity-35"
                  }`}
                aria-label="Previous image"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={arrowColor}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={colorTransition}
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <div
                ref={scrollRef}
                className="flex w-[40vw] snap-x snap-mandatory overflow-x-auto"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {brand.images.map((src, index) => (
                  <div
                    key={index}
                    className="flex w-full shrink-0 snap-center justify-center"
                  >
                    <Image
                      src={src}
                      alt={`${brand.name} ${index + 1}`}
                      width={400}
                      height={300}
                      className={`h-auto w-full object-contain border-4 rounded-[2.5rem] sm:rounded-[5rem] ${borderTransition}`}
                      style={{ borderColor: accentColor }}
                    />
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={`flex h-9 w-9 shrink-0 items-center justify-center transition-opacity ${canScrollRight ? "cursor-pointer opacity-100" : "cursor-default opacity-35"
                  }`}
                aria-label="Next image"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={arrowColor}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={colorTransition}
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* Desktop: grid */}
            <div className="hidden md:grid md:grid-cols-5 gap-3 w-full">
              {brand.images.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`${brand.name} ${index + 1}`}
                  width={400}
                  height={300}
                  className={`w-full h-auto object-contain border-4 rounded-[2rem] lg:rounded-[3rem] xl:rounded-[4rem] 2xl:rounded-[5rem] ${borderTransition}`}
                  style={{ borderColor: accentColor }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
