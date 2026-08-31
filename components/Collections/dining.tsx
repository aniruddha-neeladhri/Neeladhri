"use client";

import Image from "next/image";
import Typography from "@/lib/Typography";
import { useRef, useState, useEffect, useMemo } from "react";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useCarouselBreakpoints } from "@/lib/hooks/use-carousel-breakpoints";
import {
  CAROUSEL_GAP as GAP,
  CAROUSEL_SIDE_RATIO as SIDE_RATIO,
  CAROUSEL_CENTER_RATIO as CENTER_RATIO,
  CAROUSEL_GAP_MOBILE as GAP_MOBILE,
  CAROUSEL_PEEK_MOBILE as PEEK_MOBILE,
  DINING_IMAGES_PREMIUM,
  diningCarouselImages,
  collectionImageBorderColor,
} from "@/lib/constants/collections";

export default function Dining() {
  const { theme } = useTheme();
  const IMAGES = diningCarouselImages(theme);
  const LOOP_IMAGES = useMemo(
    () => [...IMAGES, ...IMAGES, ...IMAGES],
    [IMAGES]
  );
  const [index, setIndex] = useState<number>(DINING_IMAGES_PREMIUM.length);
  const { isMobile, isMd, isXl } = useCarouselBreakpoints();

  const dragStart = useRef<number | null>(null);
  const dragMoved = useRef(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const [cw, setCw] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    setCw(el.offsetWidth);
    const ro = new ResizeObserver(() => setCw(el.offsetWidth));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // ── Desktop ───────────────────────────────────────────────────────
  const sideW_desktop = cw > 0 ? (cw - 2 * GAP) * SIDE_RATIO : 0;
  const centerW_desktop = cw > 0 ? (cw - 2 * GAP) * CENTER_RATIO : 0;

  // ── Mobile ────────────────────────────────────────────────────────
  // All cards same width. Center card = cw minus two peek strips and two gaps
  const centerW_mobile = cw > 0 ? cw - 2 * PEEK_MOBILE - 2 * GAP_MOBILE : 0;

  // Height = center card width at 4:3
  const mobileHeight = cw > 0 ? Math.round(centerW_mobile * (3 / 4)) : 0;

  const gap = isMobile ? GAP_MOBILE : GAP;

  // ── Desktop ───────────────────────────────────────────────────────
  const getTranslateX_desktop = () => {
    let left = 0;
    for (let i = 0; i < index + 1; i++) {
      const w = i === index + 1 ? centerW_desktop : sideW_desktop;
      left += w + GAP;
    }
    return -(left) + sideW_desktop + GAP;
  };

  // ✅ Symmetric: left peek === right peek === PEEK_MOBILE
  // card at `index` should start at x = PEEK_MOBILE + GAP_MOBILE
  const getTranslateX_mobile = () => {
    const cardStep = centerW_mobile + GAP_MOBILE;
    return -(index * cardStep) + PEEK_MOBILE + GAP_MOBILE;
  };

  const translateX = cw > 0
    ? (isMobile ? getTranslateX_mobile() : getTranslateX_desktop())
    : 0;

  // Container height:
  // - below-md keeps its 4:3-derived height
  // - md gets a reduced height (45vh)
  // - lg (1024–1279) gets a slightly reduced height (65vh)
  // - xl+ (1280px and up) keeps the original 75vh
  const containerHeight = isMobile
    ? mobileHeight
    : isMd
    ? "45vh"
    : isXl
    ? "75vh"
    : "65vh";

  const goTo = (next: number) => {
    if (isAnimating) return;
    setIndex(next);
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      if (next >= IMAGES.length * 2) {
        setIndex(IMAGES.length);
      } else if (next < IMAGES.length) {
        setIndex(IMAGES.length * 2 - 1);
      }
    }, 220);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    dragStart.current = e.clientX;
    dragMoved.current = false;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (dragStart.current === null) return;
    const delta = dragStart.current - e.clientX;
    if (!dragMoved.current) {
      if (delta > 40) {
        goTo(index + 1);
        dragMoved.current = true;
      } else if (delta < -40) {
        goTo(index - 1);
        dragMoved.current = true;
      }
    }
  };

  const onPointerUp = () => {
    dragStart.current = null;
  };

  return (
    <div className="mt-0 md:mt-2 select-none">
      <Typography
        variant="display-2xl"
        as="h2"
        className={`text-center  ${theme === "luxury" ? "text-[#FFFFFF] font-cormorant-garamond font-normal" : "text-[#555555] font-cormorant-garamond font-medium uppercase"}`}
      >
        Dining
      </Typography>

      <div
        ref={containerRef}
        className="w-full overflow-hidden cursor-grab active:cursor-grabbing"
        style={{
          height: containerHeight,
          touchAction: "pan-y",
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {cw > 0 && (
          <div
            className="flex h-full"
            style={{
              gap,
              transform: `translateX(${translateX}px)`,
              transition: isAnimating
                ? "transform 0.22s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                : "none",
            }}
          >
            {LOOP_IMAGES.map((src, i) => {
              const isCenter = i === index + 1;
              const isLeftPeek = isMobile ? i === index - 1 : i === index;
              const isRightPeek = isMobile ? i === index + 1 : i === index + 2;
              const w = isMobile
                ? centerW_mobile
                : isCenter ? centerW_desktop : sideW_desktop;
              const borderOnImage = "box-border rounded-sm";
              const borderStyle = {
                borderColor: collectionImageBorderColor(theme),
                borderStyle: "solid" as const,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderLeftWidth: isLeftPeek ? 0 : 1,
                borderRightWidth: isRightPeek ? 0 : 1,
              };

              return (
                <div
                  key={i}
                  className="relative flex h-full flex-shrink-0 items-center justify-center overflow-hidden"
                  style={{ width: w }}
                >
                  {isMobile ? (
                    <Image
                      src={src}
                      alt={`Dining ${i + 1}`}
                      width={1600}
                      height={1200}
                      sizes="90vw"
                      draggable={false}
                      priority
                      className={`max-h-full max-w-full object-contain ${borderOnImage}`}
                      style={borderStyle}
                    />
                  ) : (
                    <Image
                      src={src}
                      alt={`Dining ${i + 1}`}
                      fill
                      sizes="100vw"
                      draggable={false}
                      priority
                      className={`object-center object-cover ${borderOnImage}`}
                      style={borderStyle}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}