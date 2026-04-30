"use client";

import { useRef } from "react";
import Image from "next/image";
import Typography from "@/lib/Typography";
import { BrandData, brandsDataLuxury } from "@/lib/constants/brands";

const LUXURY_BRAND_IDS = new Set(Object.values(brandsDataLuxury).map((b) => b.id));

interface BrandPageProps {
  brand?: BrandData;
}

export default function BrandPage({ brand }: BrandPageProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  if (!brand) {
    return (
      <div className="flex flex-col items-center justify-center px-4 md:px-8 mt-2 mb-12">
        <Typography variant="h1" className="font-medium mb-8 text-center" style={{ color: "#7E7669" }}>
          Brand not found
        </Typography>
      </div>
    );
  }

  const theme: "luxury" | "premium" = LUXURY_BRAND_IDS.has(brand.id) ? "luxury" : "premium";
  const accentColor = theme === "luxury" ? "#F79440" : "#7E7669";

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
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
      <div className="flex flex-col items-center justify-center px-4 md:px-8 mt-2 mb-12 pop-up">
        <div
          className="w-full rounded-[4.5rem] p-6 md:p-10"
          style={{ border: `4px solid ${accentColor}` }}
        >
          {/* Header */}
          <div className="flex flex-col items-center mb-6">
            <Typography variant="display-2xl" className="font-semibold mb-6 text-center tracking-wide" style={{color:"#F79440"}}>
              {brand.name}
            </Typography>
            <Typography variant="h1" className="font-medium mb-8 text-center" style={{ color: theme === "luxury" ? "#FFFFFF" : "#7E7669" }}>
              {brand.tagline}
            </Typography>
            <Typography variant="h2" className="font-light text-center mb-2 md:mb-4 lg:mb-14 leading-relaxed" style={{ color: theme === "luxury" ? "#FFFFFF" : "#7E7669" }}>
              {brand.description}
            </Typography>
          </div>

          {/* Images — carousel on small, grid on md+ */}
          <div className="relative w-full mb-6">
            {/* Left arrow — mobile only */}
            <button
              onClick={() => scroll("left")}
              className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 shadow cursor-pointer"
              aria-label="Previous image"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke={accentColor}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Right arrow — mobile only */}
            <button
              onClick={() => scroll("right")}
              className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 shadow cursor-pointer"
              aria-label="Next image"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke={accentColor}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Mobile: scrollable carousel */}
            <div
              ref={scrollRef}
              className="md:hidden flex overflow-x-auto w-full snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {brand.images.map((src, index) => (
                <div
                  key={index}
                  className="shrink-0 w-full flex justify-center snap-center"
                >
                  <Image
                    src={src}
                    alt={`${brand.name} ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-[50vw] h-auto"
                    style={{ border: `1px solid ${accentColor}` }}
                  />
                </div>
              ))}
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
                  className="w-full h-auto object-contain"
                    style={{
                      borderRadius: "1.25rem",
                      border: `1px solid ${accentColor}`,
                    }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}