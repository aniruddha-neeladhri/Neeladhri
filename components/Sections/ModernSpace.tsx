"use client";

import Image from "next/image";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { SPACES_DATA } from "@/lib/constants/home";
import { useState, useCallback, useRef, useEffect } from "react";

// How far (px) the mouse needs to move before a drag counts as a "swipe"
// to the next/prev slide. Lower = easier/lighter to trigger.
const SWIPE_THRESHOLD = 50;

export default function SpacesShowcase() {
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";
  const spaces = SPACES_DATA[theme];

  // ── Mobile single-image carousel state ──
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
    "flex items-center justify-center w-9 h-9 transition-all duration-200 select-none flex-shrink-0";
  const arrowActive = isLuxury
    ? "text-white hover:bg-white/10 bg-black/10"
    : "text-[#F79440] hover:bg-[#F79440]/10 bg-white";
  const arrowDisabled = isLuxury
    ? "text-white/20 cursor-not-allowed"
    : "text-[#F79440]/25 cursor-not-allowed";

  const bg = isLuxury ? "bg-[#3D3A3A]" : "bg-white";

  // ── Desktop: full-width carousel, center big / sides small, smooth swipe-drag ──
  const scrollRef = useRef<HTMLDivElement>(null);
  const [centerIndex, setCenterIndex] = useState(spaces.length > 2 ? 1 : 0);

  const getNearestIndex = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return 0;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIdx = 0;
    let closestDist = Infinity;
    Array.from(container.children).forEach((child, idx) => {
      const el = child as HTMLElement;
      const childCenter = el.offsetLeft + el.offsetWidth / 2;
      const dist = Math.abs(childCenter - containerCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closestIdx = idx;
      }
    });
    return closestIdx;
  }, []);

  const scrollToIndex = useCallback(
    (idx: number, smooth = true) => {
      const container = scrollRef.current;
      if (!container) return;
      const clamped = Math.max(0, Math.min(spaces.length - 1, idx));
      const child = container.children[clamped] as HTMLElement | undefined;
      if (!child) return;
      const left =
        child.offsetLeft - (container.clientWidth - child.offsetWidth) / 2;
      container.scrollTo({ left, behavior: smooth ? "smooth" : "auto" });
    },
    [spaces.length]
  );

  // Center the 2nd image on first paint (matches original layout)
  useEffect(() => {
    scrollToIndex(spaces.length > 2 ? 1 : 0, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Live-update the big/small state while scrolling (incl. mid-drag)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let rafId = 0;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => setCenterIndex(getNearestIndex()));
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [getNearestIndex]);

  // ── Light, smooth swipe-style drag (mouse only — touch already scrolls natively) ──
  // A small drag past SWIPE_THRESHOLD moves exactly one slide with an eased
  // animation, regardless of how far the mouse traveled — no more heavy dragging.
  // CSS scroll-snap stays ON for native wheel/trackpad scrolling (so one scroll
  // gesture = one slide) and is only switched OFF mid-drag so the custom drag
  // math isn't fighting the browser's own snapping.
  const [isSnapEnabled, setIsSnapEnabled] = useState(true);
  const isDragging = useRef(false);
  const hasDragged = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);
  const dragStartIndex = useRef(0);
  const slotWidth = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollRef.current;
    if (!container) return;
    isDragging.current = true;
    hasDragged.current = false;
    setIsSnapEnabled(false);
    dragStartX.current = e.pageX;
    dragStartScrollLeft.current = container.scrollLeft;
    dragStartIndex.current = getNearestIndex();
    const firstChild = container.children[0] as HTMLElement | undefined;
    slotWidth.current = firstChild?.offsetWidth || container.clientWidth / 3;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const container = scrollRef.current;
    if (!isDragging.current || !container) return;
    let delta = e.pageX - dragStartX.current;
    if (Math.abs(delta) > 4) hasDragged.current = true;
    // Soft cap so it can't be dragged more than ~1 slide away — keeps it light,
    // gives a gentle resistance feel instead of free heavy scrolling.
    const cap = slotWidth.current;
    delta = Math.max(-cap, Math.min(cap, delta));
    container.scrollLeft = dragStartScrollLeft.current - delta;
  };

  const settleDrag = (endX: number) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setIsSnapEnabled(true);
    if (!hasDragged.current) return;

    const delta = endX - dragStartX.current;
    let target = dragStartIndex.current;
    if (delta > SWIPE_THRESHOLD) target -= 1;
    else if (delta < -SWIPE_THRESHOLD) target += 1;

    scrollToIndex(target, true);
  };

  // Prevent the image underneath from registering a click right after a drag
  const handleClickCapture = (e: React.MouseEvent) => {
    if (hasDragged.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section className={`w-full pb-8 md:py-14 lg:py-20 ${bg}`}>
      {/* ── MOBILE: single-image carousel (< 768px) ── */}
      <div className="md:hidden px-2">
        <div className="flex items-center gap-2">
          {/* Prev arrow */}
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            disabled={!canPrev}
            aria-label="Previous image"
            className={`${arrowBase} ${canPrev ? arrowActive : arrowDisabled}`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 3L5 8L10 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Image */}
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
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            disabled={!canNext}
            aria-label="Next image"
            className={`${arrowBase} ${canNext ? arrowActive : arrowDisabled}`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 3L11 8L6 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* ── DESKTOP: smooth swipe-drag carousel, center big / sides small, only 3 visible (≥ 768px) ── */}
      <div className="hidden md:block">
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={(e) => settleDrag(e.pageX)}
          onMouseLeave={(e) => settleDrag(e.pageX)}
          onClickCapture={handleClickCapture}
          className={`flex w-full overflow-x-auto scroll-smooth cursor-grab active:cursor-grabbing select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
            isSnapEnabled ? "snap-x snap-mandatory" : ""
          }`}
        >
          {spaces.map((space, idx) => {
            const isCenter = idx === centerIndex;
            return (
              <div
                key={idx}
                className="relative flex-shrink-0 w-1/3 h-[300px] md:h-[380px] lg:h-[460px] flex items-center justify-center px-1 md:px-1.5 snap-center"
                style={{ scrollSnapStop: "always" }}
              >
                <div
                  className={`relative overflow-hidden transition-all duration-500 ease-in-out group ${
                    isCenter
                      ? "w-full h-full"
                      : "w-[85%] h-[260px] md:h-[320px] lg:h-[400px] opacity-90"
                  }`}
                >
                  <Image
                    src={space.src}
                    alt={space.alt}
                    fill
                    draggable={false}
                    className="object-cover object-center pointer-events-none transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}