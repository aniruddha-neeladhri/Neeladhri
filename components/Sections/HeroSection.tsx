"use client";
import { useEffect, useRef } from "react";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bathroom from "./Bathroom";
import DiningRoom from "./DiningRoom";
import TileAnimation from "./TileAnimation";
import Typography from "@/lib/Typography";
import Navbar from "@/components/SharedSections/Navbar";
import HomeBrands from "./HomeBrands";
import ModernSpace from "./ModernSpace";

const ZOOM_SCROLL_VH = 400; // vh units of scroll that drive the hero zoom

function easeInOut(t: number): number {
  const c = Math.max(0, Math.min(1, t));
  return c < 0.5 ? 2 * c * c : 1 - Math.pow(-2 * c + 2, 2) / 2;
}

export default function HeroSection() {
  const heroBgRef   = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const overlayRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const zoomPx = (ZOOM_SCROLL_VH / 100) * window.innerHeight;

    const onScroll = () => {
      const raw = Math.min(Math.max(window.scrollY / zoomPx, 0), 1);
      const p   = easeInOut(raw); // smoothed progress 0 → 1

      // ── Hero background: zoom 1 → 5
      if (heroBgRef.current) {
        heroBgRef.current.style.transform = `scale(${1 + p * 4})`;
      }

      // ── Hero text: fade out in first 25% of scroll
      if (heroTextRef.current) {
        const textP = easeInOut(Math.min(raw / 0.25, 1));
        heroTextRef.current.style.opacity = `${1 - textP}`;
      }

      // ── Whole overlay: start fading at 70%, fully gone at 100%
      if (overlayRef.current) {
        const fadeP = easeInOut(Math.max(0, (raw - 0.7) / 0.3));
        overlayRef.current.style.opacity = `${1 - fadeP}`;
        // Once invisible, disable pointer-events (already none but be explicit)
        overlayRef.current.style.pointerEvents = fadeP >= 1 ? "none" : "none";
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── 1. FIXED HERO OVERLAY (sits above everything, fades out) ─────── */}
      <div
        ref={overlayRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 50 }}
      >
        {/* Background image that zooms */}
        <div
          ref={heroBgRef}
          className="absolute inset-0 bg-cover bg-no-repeat origin-center"
          style={{
            backgroundImage: "url(/Ndoor.png)",
            backgroundPosition: "center ",
            willChange: "transform",
          }}
        />

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Hero text */}
        <div
          ref={heroTextRef}
          className="absolute inset-0 flex flex-col items-center justify-end"
        >
          <Typography
            variant="display-xl"
            className="text-center text-white font-light tracking-[0.06em] mb-3"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.9)", fontSize: "clamp(1.8rem,5.5vw,4rem)" }}
          >
            PORTAL TO NEELADHRI CERAMICS
          </Typography>
          <Typography
            variant="caption"
            className="text-center font-light tracking-[0.22em] text-white mb-10 normal-case"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)", fontSize: "clamp(0.7rem,1.3vw,0.95rem)" }}
          >
            Scroll to Explore
          </Typography>
        </div>
      </div>
      <div style={{ height: `${ZOOM_SCROLL_VH}vh` }} aria-hidden="true" />
      {/* <TileAnimation /> */}
    <Kitchen />
    <LivingRoom />
    <Bathroom />
    <DiningRoom />
    <HomeBrands/>
    <ModernSpace />
    </>
  );
}