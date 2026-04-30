"use client";

import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";
import { useTheme } from "@/lib/contexts/ThemeContext";
import {
  GALLERY_IMAGES as IMAGES,
  GALLERY_TOTAL as TOTAL,
  TiltState,
  Breakpoint,
  circularOffset,
  SLOT_CFG_XS,
  SLOT_CFG_MOBILE,
  SLOT_CFG_TABLET,
  SLOT_CFG_DESKTOP,
  CARD_SIZE,
} from "@/lib/constants/Gallery";

export default function GallerySection() {
  const { theme } = useTheme();
  const [center, setCenter]   = useState(0);
  const [tiltMap, setTiltMap] = useState<Record<number, TiltState>>({});
  const [bp, setBp]           = useState<Breakpoint>("desktop");
  const touchStartX           = useRef<number | null>(null);
  const trackRef              = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640)       setBp("xs");
      else if (w < 768)  setBp("mobile");
      else if (w < 1024) setBp("tablet");
      else               setBp("desktop");
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const nav = useCallback((dir: number) => {
    setCenter((prev) => ((prev + dir) % TOTAL + TOTAL) % TOTAL);
  }, []);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  nav(-1);
      if (e.key === "ArrowRight") nav(1);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [nav]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) nav(diff > 0 ? 1 : -1);
    touchStartX.current = null;
  };

  // ── Per-card tilt ──────────────────────────────────────────────────────────
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2);
    const dy = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2);
    setTiltMap((p) => ({ ...p, [idx]: { rx: -dy * 13, ry: dx * 13 } }));
  };

  const handleMouseLeave = (idx: number) =>
    setTiltMap((p) => ({ ...p, [idx]: { rx: 0, ry: 0 } }));

  // ── Slot helpers ───────────────────────────────────────────────────────────
  const maxOffset = bp === "xs" ? 2 : bp === "mobile" ? 1 : bp === "tablet" ? 2 : 3;

  const getSlot = (offset: number) => {
    if (bp === "xs")      return SLOT_CFG_XS[offset + 2];
    if (bp === "mobile")  return SLOT_CFG_MOBILE[offset + 1];
    if (bp === "tablet")  return SLOT_CFG_TABLET[offset + 2];
    return SLOT_CFG_DESKTOP[offset + 3];
  };

  const cardStyle = (idx: number): React.CSSProperties => {
    const offset    = circularOffset(center, idx, TOTAL);
    const tilt      = tiltMap[idx] ?? { rx: 0, ry: 0 };
    const isTilting = tilt.rx !== 0 || tilt.ry !== 0;

    if (Math.abs(offset) > maxOffset) {
      const side = offset > 0 ? 1 : -1;
      return {
        opacity: 0,
        zIndex: 0,
        pointerEvents: "none",
        left: side > 0 ? "150%" : "-150%",
        transform: "translateX(-50%) scale(0.82)",
        transition:
          "left 3s cubic-bezier(0.25,0.46,0.45,0.94), transform 3s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.5s ease",
      };
    }

    const s = getSlot(offset);
    const isXsSide = bp === "xs" && Math.abs(offset) === 1;

    return {
      left: `calc(50% + ${s.xPct}%)`,
      transform: `translateX(-50%) translateZ(${s.z}px) rotateY(${s.ry + tilt.ry}deg) rotateX(${tilt.rx}deg) scale(${s.scale})`,
      opacity: s.op,
      zIndex: offset === 0 ? 20 : 10 - Math.abs(offset),
      pointerEvents: "auto",
      filter: isXsSide ? "blur(4px) brightness(0.65)" : "none",
      transition: isTilting
        ? "left 0.5s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.08s linear, opacity 0.5s ease, filter 0.3s ease"
        : "left 0.5s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.5s ease, filter 0.3s ease",
    };
  };

  // ── Gloss follows per-card cursor ──────────────────────────────────────────
  const glossStyle = (idx: number): React.CSSProperties => {
    const tilt = tiltMap[idx] ?? { rx: 0, ry: 0 };
    return {
      background: `radial-gradient(circle at ${50 + tilt.ry * 2.2}% ${50 - tilt.rx * 2.2}%, rgba(255,255,255,0.15) 0%, transparent 65%)`,
      transition: "background 0.08s linear",
    };
  };

  const { w, h } = CARD_SIZE[bp];
  const renderOffset = maxOffset + 1;
  const cardBorderColor = theme === "luxury" ? "#F79440" : "rgba(255,255,255,0.8)";

  return (
    <div
      className="relative w-full overflow-hidden select-none h-dvh"
    >
      <Image
        src="/Gallery/gallerybg.png"
        alt="Gallery Background"
        fill
        className="object-fill"
        priority
      />
      <div className="absolute inset-0 bg-black/50"/>

      <div
        className="absolute inset-0 flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button
          onClick={() => nav(-1)}
          aria-label="Previous"
          className="absolute left-1 z-50 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 flex items-center justify-center text-white text-3xl md:text-4xl font-thin leading-none hover:text-white/70 active:scale-50 active:rotate-12 transition-all duration-150 ease-out cursor-pointer"
        >
          &#8249;
        </button>

        <div
          ref={trackRef}
          className={`relative w-full h-full ${bp === "xs" ? "perspective-none" : "perspective-[1300px]"}`}
        >
          {IMAGES.map((src, idx) => {
            const offset = circularOffset(center, idx, TOTAL);
            if (Math.abs(offset) > renderOffset) return null;

            return (
              <div
                key={idx}
                style={{
                  ...cardStyle(idx),
                  width: w,
                  height: h,
                  marginTop: `calc(${h} / -2)`,
                  borderColor: cardBorderColor,
                }}
                onMouseMove={(e) => handleMouseMove(e, idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
                className="absolute top-1/2 overflow-hidden border-[2px] [will-change:transform,opacity,left] [border-radius:clamp(6px,1vw,12px)]"
              >
                <div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={glossStyle(idx)}
                />
                <Image
                  src={src}
                  alt={`Gallery ${11 + idx}`}
                  fill
                  className="object-cover object-center"
                  draggable={false}
                  sizes="(max-width:639px) clamp(230px,72vw,320px), (max-width:767px) clamp(160px,42vw,250px), (max-width:1023px) clamp(110px,18vw,200px), clamp(140px,18vw,300px)"
                />
              </div>
            );
          })}
        </div>

        <button
          onClick={() => nav(1)}
          aria-label="Next"
          className="absolute right-1 z-50 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 flex items-center justify-center text-white text-3xl md:text-4xl font-thin leading-none hover:text-white/70 active:scale-50 active:-rotate-12 transition-all duration-150 ease-out cursor-pointer"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}