"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Typography from "@/lib/Typography";
import { BrandData, brandsDataPremium, brandsDataLuxury } from "@/lib/constants/brands";
import { useTheme } from "@/lib/contexts/ThemeContext";

interface BrandPageProps {
  brand?: BrandData;
  brandId?: string;
}

export default function BrandPage({ brand, brandId }: BrandPageProps) {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const { theme } = useTheme();

  const selectedBrandId = brandId ?? brand?.id;
  const selectedBrand = selectedBrandId
    ? theme === "luxury"
      ? brandsDataLuxury[selectedBrandId] ?? brandsDataPremium[selectedBrandId] ?? brand
      : brandsDataPremium[selectedBrandId] ?? brandsDataLuxury[selectedBrandId] ?? brand
    : brand;

  // Tell the homepage to skip the intro video and land on the brands section
  // when the user goes back from here.
  useEffect(() => {
    sessionStorage.setItem("neeladhri:return-to", "homebrands");
  }, []);

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
  }, [selectedBrand?.images.length, updateScrollState]);

  if (!selectedBrand) {
    return (
      <div className="flex flex-col items-center justify-center px-4 md:px-8 mt-2 mb-12">
        <Typography variant="h1" className="font-medium mb-8 text-center" style={{ color: "#7E7669" }}>
          Brand not found
        </Typography>
      </div>
    );
  }

  const isLuxury = theme === "luxury";
  const accentColor = isLuxury ? "#D3B898" : "#7E7669";
  const arrowColor = isLuxury ? "#D3B898" : "#555555";
  const brandNameColor = isLuxury ? "#D3B898" : "#555555";
  const bodyTextColor = isLuxury ? "#FFFFFF" : "#555555";
  const textAlign = isLuxury ? "text-left" : "text-center";
  const flexAlign = isLuxury ? "items-start" : "items-center";

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
        .brand-shell {
          border: 1px solid;
        }
        .luxury-shell {
          border-width: 1px !important;
        }
        @media (min-width: 768px) {
          .brand-shell:not(.luxury-shell) {
            border-width: 2px;
          }
        }
        /* Mobile carousel tweaks: ONLY between 340px and 640px viewports.
           Lock the image to a fixed 256x267 box so it never shrinks with
           the viewport, and keep the arrows tight against it (4px gap). */
        @media (min-width: 340px) and (max-width: 640px) {
          .mobile-carousel-row {
            gap: 4px !important;
            justify-content: center !important;
          }
          .mobile-arrow-btn {
            height: 2rem !important;
            width: 2rem !important;
          }
          .mobile-img-container {
            width: 256px !important;
            flex: 0 0 256px !important;
          }
          .mobile-img-container > div {
            width: 256px !important;
            flex: 0 0 256px !important;
          }
          .mobile-img-container img {
            width: 256px !important;
            height: 267px !important;
            max-width: none !important;
            object-fit: cover !important;
          }
        }
      `}</style>
      <div className={`flex flex-col ${flexAlign} justify-center px-4 md:px-8 mt-2 mb-12 pop-up`}>
        <div
          className={`relative w-full p-2 md:p-10 ${borderTransition} ${isLuxury ? "" : "rounded-[2.5rem]"} brand-shell ${isLuxury ? "luxury-shell" : ""} border-solid`}
          style={{ borderColor: accentColor }}
        >
          <button
            type="button"
            onClick={() => router.back()}
            aria-label="Close brand page"
            className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center text-[#555555] transition-opacity hover:opacity-70"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Header */}
          <div className={`flex flex-col ${flexAlign} mb-6 w-full`}>
            <Typography
              variant="h2"
              className={`mb-2 ${textAlign} tracking-wide ${colorTransition} ${isLuxury ? "font-cormorant-garamond font-semibold" : "font-montserrat font-semibold"
                } sm:hidden`}
              style={{ color: brandNameColor }}
            >
              {selectedBrand.name}
            </Typography>
            <Typography
              variant="body-xl"
              className={`font-normal mb-2 ${textAlign} ${colorTransition} ${isLuxury ? "font-cormorant-garamond" : "font-poppins"
                } sm:hidden`}
              style={{ color: bodyTextColor }}
            >
              {selectedBrand.tagline}
            </Typography>
            <Typography
              variant="h2"
              className={`mb-2 ${textAlign} tracking-wide ${colorTransition} ${isLuxury ? "font-cormorant-garamond font-semibold" : "font-montserrat font-semibold"
                } hidden sm:block`}
              style={{ color: brandNameColor }}
            >
              {selectedBrand.name}
            </Typography>
            <Typography
              variant="h3"
              className={`font-normal mb-2 ${textAlign} ${colorTransition} ${isLuxury ? "font-cormorant-garamond" : "font-poppins"
                } hidden sm:block`}
              style={{ color: bodyTextColor }}
            >
              {selectedBrand.tagline}
            </Typography>
          </div>

          {/* Images — carousel on small, grid on md+ (identical for every theme) */}
          <div className="relative w-full mb-2 lg:mb-6">
            {/* Mobile: arrows flanking image */}
            <div className="mobile-carousel-row md:hidden flex w-full items-center justify-center gap-[12px]">
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={`mobile-arrow-btn flex h-9 w-9 shrink-0 items-center justify-center transition-opacity ${canScrollLeft ? "cursor-pointer opacity-100" : "cursor-default opacity-35"
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
                className="mobile-img-container flex w-[40vw] snap-x snap-mandatory overflow-x-auto"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {selectedBrand.images.map((src, index) => (
                  <div
                    key={index}
                    className="flex w-full shrink-0 snap-center justify-center"
                  >
                    <Image
                      src={src}
                      alt={`${selectedBrand.name} ${index + 1}`}
                      width={400}
                      height={300}
                      priority
                      className={`h-auto w-full object-contain border-2 rounded-xl ${borderTransition}`}
                      style={{ borderColor: accentColor }}
                    />
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={`mobile-arrow-btn flex h-9 w-9 shrink-0 items-center justify-center transition-opacity ${canScrollRight ? "cursor-pointer opacity-100" : "cursor-default opacity-35"
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
              {selectedBrand.images.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`${selectedBrand.name} ${index + 1}`}
                  width={400}
                  height={300}
                  priority
                  className={`w-full h-auto object-contain border-2 rounded-xl ${borderTransition}`}
                  style={{ borderColor: accentColor }}
                />
              ))}
            </div>
          </div>

          {/* Description */}
          <div className={`flex flex-col ${flexAlign} w-full mt-6 md:mt-8`}>
            <Typography
              variant="body-sm"
              className={`${textAlign} leading-relaxed w-full xl:w-[60%] ${colorTransition} ${isLuxury ? "font-cormorant-garamond font-light" : "font-poppins font-light"
                } sm:hidden`}
              style={{ color: bodyTextColor }}
            >
              {selectedBrand.description}
            </Typography>
            <Typography
              variant="h4"
              className={`${textAlign} leading-relaxed w-full xl:w-[60%] ${colorTransition} ${isLuxury ? "font-cormorant-garamond font-light" : "font-poppins font-light"
                } hidden sm:block`}
              style={{ color: bodyTextColor }}
            >
              {selectedBrand.description}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}