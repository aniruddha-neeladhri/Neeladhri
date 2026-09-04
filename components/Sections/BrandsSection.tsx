"use client";

import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Typography from "@/lib/Typography";
import { brandImages, brandNames, brandRoutes, brandBgImage } from "@/lib/constants/brands";
import { useTheme } from "@/lib/contexts/ThemeContext";

// Module-level (outside the component) so it survives unmount/remount
// e.g. when the user navigates to a brand page and comes back.
let lastScrollPos = 0;

// The row sits on a barrel: cards stay flat-facing, only their size follows the
// curve — full size at the centre, tapering towards both ends.
const MIN_SCALE = 0.74;    // size at the very edge (centre stays 1)
const MIN_BRIGHTNESS = 0.6;
const GAP_PULL = 0.6;      // how much of the lost width is taken back from the gaps

export default function BrandsSection() {
  const { theme } = useTheme();
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(lastScrollPos); // <-- resume from last known position
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const hasDraggedRef = useRef(false);
  // True while we're the ones setting scrollLeft (rAF autoplay or drag), so
  // the onScroll sync handler below can ignore scroll events we caused
  // ourselves and only react to genuine external scrolling (wheel/trackpad/
  // native touch), avoiding a feedback loop between the two.
  const isProgrammaticScrollRef = useRef(false);

  // Curve the whole row by size alone: each card is scaled by its distance from
  // the centre and pulled in by the same factor so the gaps stay proportional.
  const applyCurvature = useCallback(() => {
    const el = scrollRef.current;
    const track = trackRef.current;
    if (!el || !track) return;

    const viewportCenter = el.clientWidth / 2;
    const half = viewportCenter || 1;

    for (const child of Array.from(track.children) as HTMLElement[]) {
      const cardCenter = child.offsetLeft - el.scrollLeft + child.offsetWidth / 2;
      const ratio = Math.max(-1, Math.min(1, (cardCenter - viewportCenter) / half));
      const distance = Math.abs(ratio);

      const curve = Math.cos((ratio * Math.PI) / 2); // 1 at the centre, 0 at the ends
      const scale = MIN_SCALE + (1 - MIN_SCALE) * curve;
      // Pull the card towards the centre by the amount it shrank, so neighbours
      // keep an even gap instead of drifting apart.
      const shiftX = (viewportCenter - cardCenter) * (1 - scale) * GAP_PULL;

      child.style.transform = `translateX(${shiftX}px) scale(${scale})`;
      child.style.filter = `brightness(${MIN_BRIGHTNESS + (1 - MIN_BRIGHTNESS) * curve})`;
      child.style.zIndex = String(100 - Math.round(distance * 100));
    }
  }, []);

  // Keeps scrollLeft (and therefore the curvature) seamlessly looping in
  // BOTH directions. Previously only the forward wrap was handled, so
  // dragging/scrolling past the left edge had nothing to reset it and
  // produced a hard visual snap.
  const wrapScrollPosition = useCallback((value: number) => {
    const el = scrollRef.current;
    if (!el) return value;
    const maxScroll = el.scrollWidth / 2;
    if (maxScroll <= 0) return value;
    let v = value % maxScroll;
    if (v < 0) v += maxScroll;
    return v;
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // On mount, jump the scroll container to wherever the user left off
    isProgrammaticScrollRef.current = true;
    el.scrollLeft = posRef.current;
    applyCurvature();

    let rafId: number;
    const animate = () => {
      if (!isHoveredRef.current && !isDraggingRef.current) {
        posRef.current = wrapScrollPosition(posRef.current + 1);
        isProgrammaticScrollRef.current = true;
        el.scrollLeft = posRef.current;
        lastScrollPos = posRef.current; // keep module var updated
      }
      applyCurvature();
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    const observer = new ResizeObserver(applyCurvature);
    observer.observe(el);

    // Single source of truth for "where are we actually scrolled to".
    // Fires for EVERY scroll — wheel, trackpad, native touch momentum,
    // programmatic — not just the drag gestures we handle manually below.
    // Without this, wheel/trackpad scrolling (or native touch scroll
    // slipping past the drag handlers) would change el.scrollLeft without
    // posRef.current ever knowing, so the moment autoplay resumed it would
    // snap back to a stale position — that snap-back is the shivering.
    const handleNativeScroll = () => {
      if (isProgrammaticScrollRef.current) {
        // This scroll event was caused by us (rAF or drag) — already synced.
        isProgrammaticScrollRef.current = false;
        return;
      }
      posRef.current = wrapScrollPosition(el.scrollLeft);
      lastScrollPos = posRef.current;
    };
    el.addEventListener("scroll", handleNativeScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      el.removeEventListener("scroll", handleNativeScroll);
      lastScrollPos = posRef.current; // persist on unmount too
    };
  }, [applyCurvature, wrapScrollPosition]);

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
    const newScroll = wrapScrollPosition(dragStartScrollRef.current + delta);
    isProgrammaticScrollRef.current = true;
    scrollRef.current.scrollLeft = newScroll;
    posRef.current = newScroll;
    lastScrollPos = newScroll;
    applyCurvature();
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
    const newScroll = wrapScrollPosition(dragStartScrollRef.current + delta);
    isProgrammaticScrollRef.current = true;
    scrollRef.current.scrollLeft = newScroll;
    posRef.current = newScroll;
    lastScrollPos = newScroll;
    applyCurvature();
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
    <section className="relative w-full mt-0 h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={brandBgImage(theme)} alt="Background" fill className="object-cover" priority />
      </div>
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div
        ref={scrollRef}
        className="relative z-10 w-full h-full flex items-center overflow-x-auto cursor-grab active:cursor-grabbing"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          userSelect: "none",
          // Hands horizontal gestures entirely to our own drag handlers and
          // stops the browser's native touch-scroll from also trying to
          // drive scrollLeft at the same time — that double-driving was the
          // other source of the touch/trackpad jitter. Vertical panning
          // (e.g. page scroll) still works normally.
          touchAction: "pan-y",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8"
        >
          {allImages.map((src, index) => (
            <Link
              key={`brand-${index}`}
              href={currentRoutes[index % currentRoutes.length]}
              draggable={false}
              onClick={(e) => { if (hasDraggedRef.current) e.preventDefault(); }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ willChange: "transform" }}
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

              {/* Black overlay on each brand image */}
              <div className="absolute inset-0 bg-black/40 z-10" />

              <div className="absolute inset-0 flex items-center justify-center z-20">
                <Typography
                  variant="display-xl"
                  as="h2"
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