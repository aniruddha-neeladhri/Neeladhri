"use client";

import Image from "next/image";
import Typography from "@/lib/Typography";
import { useRef, useState, useEffect, useMemo } from "react";
import { useTheme } from "@/lib/contexts/ThemeContext";
import {
  CAROUSEL_GAP as GAP,
  CAROUSEL_SIDE_RATIO as SIDE_RATIO,
  CAROUSEL_CENTER_RATIO as CENTER_RATIO,
  CAROUSEL_GAP_MOBILE as GAP_MOBILE,
  CAROUSEL_PEEK_MOBILE as PEEK_MOBILE,
  KITCHEN_IMAGES_PREMIUM,
  kitchenCarouselImages,
  collectionImageBorderColor,
} from "@/lib/constants/collections";

export default function Kitchen() {
  const { theme } = useTheme();
  const IMAGES = kitchenCarouselImages(theme);
  const LOOP_IMAGES = useMemo(
    () => [...IMAGES, ...IMAGES, ...IMAGES],
    [IMAGES]
  );
  const [index, setIndex] = useState<number>(KITCHEN_IMAGES_PREMIUM.length);
  const [isMobile, setIsMobile] = useState(false);

  const dragStart = useRef<number | null>(null);
  const dragMoved = useRef(false);
  const isAnimating = useRef(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const [cw, setCw] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

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
  const centerW = isMobile ? centerW_mobile : centerW_desktop;

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

  const goTo = (next: number) => {
    if (isAnimating.current) return;
    setIndex(next);
    isAnimating.current = true;
    setTimeout(() => {
      isAnimating.current = false;
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
    <div className="mt-2 pb-2 select-none">
      <Typography
        variant="display-3xl"
        className="text-[#F79440] font-normal mb-4 text-center"
      >
        Kitchen
      </Typography>

      <div
        ref={containerRef}
        className="w-full overflow-hidden cursor-grab active:cursor-grabbing"
        style={{
          height: isMobile ? mobileHeight : "75vh",
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
              transition: isAnimating.current
                ? "transform 0.22s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                : "none",
            }}
          >
            {LOOP_IMAGES.map((src, i) => {
              const isCenter = i === index + 1;
              const w = isMobile ? centerW_mobile : (isCenter ? centerW_desktop : sideW_desktop);
              const borderOnImage = "border-2 box-border rounded-sm";
              const borderStyle = { borderColor: collectionImageBorderColor(theme) };

              return (
                <div
                  key={i}
                  className="relative flex h-full flex-shrink-0 items-center justify-center overflow-hidden"
                  style={{ width: w }}
                >
                  {isMobile ? (
                    <Image
                      src={src}
                      alt={`Kitchen ${i + 1}`}
                      width={1600}
                      height={1200}
                      sizes="90vw"
                      draggable={false}
                      className={`max-h-full max-w-full object-contain ${borderOnImage}`}
                      style={borderStyle}
                    />
                  ) : (
                    <Image
                      src={src}
                      alt={`Kitchen ${i + 1}`}
                      fill
                      sizes="100vw"
                      draggable={false}
                      className={`object-center ${borderOnImage} ${
                        isCenter ? "object-fill" : "object-cover"
                      }`}
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