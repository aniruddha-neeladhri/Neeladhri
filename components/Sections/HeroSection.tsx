"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Volume2, VolumeX } from "lucide-react";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/contexts/ThemeContext";

const TileScrollSection = dynamic(() => import("./Tilemovement"), {
  ssr: false,
  loading: () => (
    <div id="homepage-hero-section" className="w-full min-h-screen" aria-hidden />
  ),
});

const INTRO_TEXT_LINE_1 = "Enter a new world of";
const INTRO_TEXT_LINE_2 = "Curated Spaces";
const FADE_MS = 500;
const VEIL_MS = 420;

// Set by the brand detail page before it navigates back home.
const RETURN_KEY = "neeladhri:return-to";
const SCROLL_MS = 1100;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export default function HeroSection() {
  const { theme } = useTheme();
  const [introDone, setIntroDone] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [veilOn, setVeilOn] = useState(false);
  const [introKey, setIntroKey] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const returnTargetRef = useRef<string | null>(null);
  const introDoneRef = useRef(false);
  const themeReadyRef = useRef(false);
  const prevThemeRef = useRef(theme);
  const veilTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pinTop = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const finishIntro = useCallback(() => {
    if (introDoneRef.current) return;
    introDoneRef.current = true;

    const video = videoRef.current;
    if (video) {
      video.pause();
      video.muted = true;
    }

    // Always land at the top — ignore how hard / how many times they scrolled.
    pinTop();
    setIntroDone(true);

    // Absorb leftover wheel/touch momentum so it cannot push past tile 0.
    const holdTop = () => pinTop();
    const until = performance.now() + 450;
    const tick = (now: number) => {
      holdTop();
      if (now < until) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    const blockWheel = (e: WheelEvent) => {
      e.preventDefault();
      pinTop();
    };
    window.addEventListener("wheel", blockWheel, { passive: false });
    window.setTimeout(() => {
      window.removeEventListener("wheel", blockWheel);
      pinTop();
    }, 450);
  }, [pinTop]);

  const restartIntroSmooth = useCallback(() => {
    if (veilTimerRef.current) {
      clearTimeout(veilTimerRef.current);
      veilTimerRef.current = null;
    }

    setVeilOn(true);

    veilTimerRef.current = setTimeout(() => {
      veilTimerRef.current = null;
      introDoneRef.current = false;
      pinTop();
      setIntroDone(false);
      setIntroKey((k) => k + 1);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVeilOn(false));
      });
    }, VEIL_MS);
  }, [pinTop]);

  useEffect(() => {
    return () => {
      if (veilTimerRef.current) clearTimeout(veilTimerRef.current);
    };
  }, []);

  // Brand-detail return: skip intro and scroll to brands.
  useLayoutEffect(() => {
    const target = sessionStorage.getItem(RETURN_KEY);
    if (target) {
      sessionStorage.removeItem(RETURN_KEY);
      returnTargetRef.current = target;
      introDoneRef.current = true;
      queueMicrotask(() => setIntroDone(true));
      return;
    }

    pinTop();
  }, [pinTop]);

  // Theme toggle: soft veil → restart landing video → first tile.
  useEffect(() => {
    if (!themeReadyRef.current) {
      themeReadyRef.current = true;
      prevThemeRef.current = theme;
      return;
    }
    if (prevThemeRef.current === theme) return;
    prevThemeRef.current = theme;

    // Don't interrupt a brand-return scroll.
    if (returnTargetRef.current) return;

    queueMicrotask(() => restartIntroSmooth());
  }, [theme, restartIntroSmooth]);

  // Smooth scroll to brands only when returning from a brand detail page.
  useEffect(() => {
    const target = returnTargetRef.current;
    if (!introDone || !target) return;
    returnTargetRef.current = null;

    let rafId = 0;
    let cancelled = false;
    const cancel = () => {
      cancelled = true;
    };

    const start = () => {
      const el = document.getElementById(target);
      if (!el) return;

      const from = window.scrollY;
      const to = Math.max(0, from + el.getBoundingClientRect().top);
      if (Math.abs(to - from) < 2) return;

      const t0 = performance.now();
      const step = (now: number) => {
        if (cancelled) return;
        const t = Math.min(1, (now - t0) / SCROLL_MS);
        window.scrollTo(0, from + (to - from) * easeInOutCubic(t));
        if (t < 1) rafId = requestAnimationFrame(step);
      };
      rafId = requestAnimationFrame(step);

      window.addEventListener("wheel", cancel, { passive: true, once: true });
      window.addEventListener("touchstart", cancel, { passive: true, once: true });
    };

    const timer = window.setTimeout(start, 60);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      cancelAnimationFrame(rafId);
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
    };
  }, [introDone]);

  // Lock the page at the top while the landing video plays.
  useEffect(() => {
    if (introDone) return;

    const prevBody = document.body.style.overflow;
    const prevHtml = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    pinTop();

    return () => {
      document.body.style.overflow = prevBody;
      document.documentElement.style.overflow = prevHtml;
    };
  }, [introDone, pinTop]);

  // User wheel / swipe can skip the intro — always land at homepage top,
  // never carry scroll distance into the page underneath.
  useEffect(() => {
    if (introDone || veilOn) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 8 && Math.abs(e.deltaX) < 8) return;
      e.preventDefault();
      finishIntro();
    };

    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0]?.clientY ?? 0;
    };
    const onTouchMove = (e: TouchEvent) => {
      // Stop the page from scrolling while the intro is on screen.
      e.preventDefault();
    };
    const onTouchEnd = (e: TouchEvent) => {
      const y = e.changedTouches[0]?.clientY ?? touchStartY;
      if (Math.abs(touchStartY - y) < 24) return;
      finishIntro();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [introDone, veilOn, finishIntro]);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent(introDone ? "homepage-intro-complete" : "homepage-intro-start")
    );
  }, [introDone]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || introDone) return;

    video.currentTime = 0;
    video.muted = false;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsMuted(false))
        .catch(() => {
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => {});
        });
    }
  }, [introDone, introKey]);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted) {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <>
      {/* Soft veil for theme toggle — hides the swap, then reveals the intro */}
      <div
        className="pointer-events-none fixed inset-0 z-[60] bg-black"
        style={{
          opacity: veilOn ? 1 : 0,
          transition: `opacity ${VEIL_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        }}
        aria-hidden
      />

      <div
        className={cn(
          "fixed inset-0 z-50 w-full h-[100dvh] transition-opacity ease-out",
          introDone ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
        style={{
          transitionDuration: `${FADE_MS}ms`,
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        }}
        aria-hidden={introDone}
      >
        {!introDone && (
          <>
            <video
              key={introKey}
              ref={videoRef}
              src="https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/614865fa-45b6-4695-ac10-7e9db4608d83.mp4"
              className="absolute inset-0 h-full w-full object-cover object-center"
              autoPlay
              playsInline
              preload="auto"
              onEnded={finishIntro}
            />

            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              className={cn(
                "fixed z-[9997]",
                "right-4 sm:right-6 md:right-10 lg:right-12",
                "bottom-[max(0.25rem,env(safe-area-inset-bottom))] sm:bottom-2 md:bottom-3 lg:bottom-4",
                "flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full",
                "bg-black/40 text-white backdrop-blur-sm transition-colors",
                "hover:bg-black/60"
              )}
            >
              {isMuted ? (
                <VolumeX className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              ) : (
                <Volume2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              )}
            </button>

            <div className="absolute inset-x-0 bottom-0 z-10 flex w-full justify-center px-4 pb-8 sm:px-8 sm:pb-10 md:pb-12 lg:pb-16">
              <Typography
                variant="display-2xl"
                as="h2"
                className={cn(
                  "text-center text-white font-normal font-playfair-display leading-tight tracking-[0.02em]",
                  "text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl",
                  "max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw]",
                  "[text-shadow:0_2px_16px_rgba(0,0,0,0.55)]"
                )}
              >
                {INTRO_TEXT_LINE_1}
                <br />
                {INTRO_TEXT_LINE_2}
              </Typography>
            </div>
          </>
        )}
      </div>

      <div id="homepage-hero-section" className="w-full">
        <div
          className={cn(
            "relative z-0 transition-opacity ease-out",
            introDone ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          style={{
            transitionDuration: `${FADE_MS}ms`,
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {introDone ? <TileScrollSection introReady={introDone} /> : null}
        </div>
      </div>
    </>
  );
}
