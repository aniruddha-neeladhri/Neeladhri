"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Typography from "@/lib/Typography";
import { brandImages, brandNames, brandRoutes, brandBgImage } from "@/lib/constants/brands";
import { useTheme } from "@/lib/contexts/ThemeContext";

// Module-level (outside the component) so it survives unmount/remount
// e.g. when the user navigates to a brand page and comes back.
let lastScrollPos = 0;

export default function BrandsSection() {
  const { theme } = useTheme();
  const scrollRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(lastScrollPos); // <-- resume from last known position
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const hasDraggedRef = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // On mount, jump the scroll container to wherever the user left off
    el.scrollLeft = posRef.current;

    let rafId: number;
    const animate = () => {
      if (!isHoveredRef.current && !isDraggingRef.current) {
        const maxScroll = el.scrollWidth / 2;
        posRef.current += 1;
        if (posRef.current >= maxScroll) posRef.current = 0;
        el.scrollLeft = posRef.current;
        lastScrollPos = posRef.current; // keep module var updated
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      lastScrollPos = posRef.current; // persist on unmount too
    };
  }, []);

  const syncScrollPosition = () => {
    if (scrollRef.current) {
      posRef.current = scrollRef.current.scrollLeft;
      lastScrollPos = posRef.current;
    }
  };

  const handleMouseEnter = () => {
    syncScrollPosition();
    isHoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    syncScrollPosition();
    isHoveredRef.current = false;
  };

  const onMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    dragStartXRef.current = e.clientX;
    dragStartScrollRef.current = scrollRef.current?.scrollLeft ?? 0;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    const delta = dragStartXRef.current - e.clientX;
    if (Math.abs(delta) > 3) hasDraggedRef.current = true;
    const newScroll = dragStartScrollRef.current + delta;
    scrollRef.current.scrollLeft = newScroll;
    posRef.current = newScroll;
    lastScrollPos = newScroll;
  };

  const onMouseUp = () => {
    isDraggingRef.current = false;
    lastScrollPos = posRef.current;
  };

  const onTouchStart = (e: React.TouchEvent) => {
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    dragStartXRef.current = e.touches[0].clientX;
    dragStartScrollRef.current = scrollRef.current?.scrollLeft ?? 0;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    const delta = dragStartXRef.current - e.touches[0].clientX;
    if (Math.abs(delta) > 3) hasDraggedRef.current = true;
    const newScroll = dragStartScrollRef.current + delta;
    scrollRef.current.scrollLeft = newScroll;
    posRef.current = newScroll;
    lastScrollPos = newScroll;
  };

  const onTouchEnd = () => {
    isDraggingRef.current = false;
    lastScrollPos = posRef.current;
  };

  const currentImages = brandImages(theme);
  const currentNames = brandNames(theme);
  const currentRoutes = brandRoutes(theme);
  const allImages = [...currentImages, ...currentImages];

  return (
    <section className="relative w-full mt-0 h-screen">
      <div className="absolute inset-0 z-0">
        <Image src={brandBgImage(theme)} alt="Background" fill className="object-cover" priority />
      </div>
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div
        ref={scrollRef}
        className="relative z-10 w-full h-full flex items-center overflow-x-auto cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", userSelect: "none" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="flex gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8">
          {allImages.map((src, index) => (
            <Link
              key={`brand-${index}`}
              href={currentRoutes[index % currentRoutes.length]}
              draggable={false}
              onClick={(e) => { if (hasDraggedRef.current) e.preventDefault(); }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`group flex-shrink-0 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] relative border-2 rounded-4xl overflow-hidden ${theme === "luxury" ? "border-[#D3B898]" : "border-white"}`}
            >
              <Image
                src={src}
                alt={`Brand ${(index % currentImages.length) + 1}`}
                fill
                draggable={false}
                priority
                className="object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <Typography
                  variant="display-xl"
                  className={`text-white text-xl font-light text-center px-2 ${
                    theme === "luxury" ? "font-roboto-slab" : "font-montserrat"
                  }`}
                >
                  {currentNames[index % currentNames.length]}
                </Typography>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}