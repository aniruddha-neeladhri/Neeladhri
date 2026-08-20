"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { Volume2, VolumeX } from "lucide-react";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    heading: "Living Room",
    body: "Spaces that reflect your style.\nFind flooring and wall solutions that transform everyday living into something extraordinary.",
    videoSrc:  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/dc42b44c-f3ce-4206-98f2-ea7e67ca890b.mp4",
    videoTime: 0,
  },
  {
    heading: "Kitchen",
    body: "Cook. Gather. Create.\nEverything your kitchen needs, from premium surfaces to trusted brands, brought together at Neeladhri Ceramics.",
    videoSrc:   "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/24ad9e06-4fc6-48d8-880a-ebb74963441a.mp4",
    videoTime: 5,
  },
  {
    heading: "Dining Room",
    body: "Made for moments that matter.\nCurated collections that bring comfort, elegance and timeless appeal to your dining space.",
    videoSrc: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/10fac9df-5445-47e3-834c-49f68bb3a7db.mp4",
    videoTime: 10,
  },
  {
    heading: "Bathroom",
    body: "Every detail matters. Especially here.\nFrom premium tiles to sanitaryware and bath fittings, Neeladhri Ceramics helps you create bathrooms that are stylish, functional and built to last.",
    videoSrc: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/df96c5d9-2037-4625-bc08-47fb1382de5d.mp4",
    videoTime: 15,
  },
];

const STEP_COUNT = STEPS.length;
const TILE_Y_FRACTIONS = [0.06, 0.30, 0.54, 0.78] as const;
const XL_BREAKPOINT_PX = 1280;

function getTileTranslateY(step: number, vh: number, tileH: number) {
  const w = typeof window !== "undefined" ? window.innerWidth : 1280;

  const mobileExtra = w < 640 ? 48 : 0;
  const tabletExtra = w >= 640 && w < 1024 ? 28 : 0;
  const belowXlOffset = w < XL_BREAKPOINT_PX ? 12 : 0;

  return Math.min(
    TILE_Y_FRACTIONS[step] * vh + belowXlOffset + mobileExtra + tabletExtra,
    vh - tileH - 20
  );
}

function renderWordLines(
  lines: string[][],
  active: boolean,
  exiting: boolean,
  direction: 1 | -1,
  keyPrefix: string
) {
  const translateIn  = direction === 1 ? "translateY(110%)" : "translateY(-110%)";
  const translateOut = direction === 1 ? "translateY(-110%)" : "translateY(110%)";

  let wordIndex = 0;
  return lines.map((words, li) => (
    <span key={`${keyPrefix}-${li}`} style={{ display: "block" }}>
      {words.map((word, wi) => {
        const idx = wordIndex++;
        const delay = active
          ? `${Math.min(idx * 18, 300)}ms`
          : `${Math.min(idx * 8, 120)}ms`;

        return (
          <span
            key={wi}
            style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
          >
            <span
              style={{
                display: "inline-block",
                transform: active
                  ? "translateY(0)"
                  : exiting
                  ? translateOut
                  : translateIn,
                opacity: active ? 1 : exiting ? 0 : 0,
                transition: `transform 650ms cubic-bezier(0.16, 1, 0.3, 1), opacity 400ms ease`,
                transitionDelay: delay,
                filter: active ? "blur(0px)" : exiting ? "blur(2px)" : "blur(0px)",
              }}
            >
              {word}
            </span>
            {wi < words.length - 1 && (
              <span style={{ display: "inline-block", width: "0.3em" }} />
            )}
          </span>
        );
      })}
    </span>
  ));
}

function AnimatedHeading({
  text,
  active,
  exiting,
  direction,
}: {
  text: string;
  active: boolean;
  exiting: boolean;
  direction: 1 | -1;
}) {
  // Heading is always a single line, never wraps, regardless of screen size.
  const lines = [text.trim().split(" ").filter(Boolean)];

  return (
    <Typography
      variant="body-lg"
      className="m-0 mb-1.5 sm:mb-2 w-full max-w-full whitespace-nowrap font-montserrat font-bold tracking-[0.01em] !text-white text-[15px] sm:text-[17px] md:text-[19px] lg:text-[22px]"
    >
      <span className="block whitespace-nowrap">
        {renderWordLines(lines, active, exiting, direction, "h")}
      </span>
    </Typography>
  );
}

function AnimatedText({
  text,
  active,
  exiting,
  direction,
}: {
  text: string;
  active: boolean;
  exiting: boolean;
  direction: 1 | -1;
}) {
  // Below 640px: ignore the manual \n breaks entirely, one continuous run that wraps naturally.
  const mobileLines = [text.replace(/\n/g, " ").trim().split(" ").filter(Boolean)];
  // sm and up: honor the manual \n breaks as forced line breaks.
  const desktopLines = text.split("\n").map((line) => line.trim().split(" ").filter(Boolean));

  return (
    <Typography
      variant="body-lg"
      className="m-0 w-full max-w-full font-montserrat font-normal tracking-[0.01em] !text-white leading-relaxed text-[12px] sm:text-[13px] lg:max-w-[280px] lg:text-[15px]"
    >
      <span className="block sm:hidden">{renderWordLines(mobileLines, active, exiting, direction, "m")}</span>
      <span className="hidden sm:block">{renderWordLines(desktopLines, active, exiting, direction, "d")}</span>
    </Typography>
  );
}

function TextBlock({
  step,
  active,
  exiting,
  direction,
}: {
  step: (typeof STEPS)[0];
  active: boolean;
  exiting: boolean;
  direction: 1 | -1;
}) {
  return (
    <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none px-5 pt-16 sm:px-7 sm:pt-0 md:px-8 lg:px-14">
      <div className="w-full max-w-full lg:max-w-[280px]">
        <AnimatedHeading
          text={step.heading}
          active={active}
          exiting={exiting}
          direction={direction}
        />
        <AnimatedText
          text={step.body}
          active={active}
          exiting={exiting}
          direction={direction}
        />
      </div>
    </div>
  );
}

type PinMode = "before" | "pinned" | "after";

export default function TileScrollSection({ introReady = true }: { introReady?: boolean }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tileRef    = useRef<HTMLDivElement>(null);
  const videoRefs  = useRef<(HTMLVideoElement | null)[]>([]);

  const [pinMode,    setPinMode]    = useState<PinMode>("before");
  const [activeStep, setActiveStep] = useState(0);
  const [exitStep,   setExitStep]   = useState<number | null>(null);
  const [direction,  setDirection]  = useState<1 | -1>(1);
  const [isMuted,    setIsMuted]    = useState(true);

  const currentStepRef  = useRef(0);
  const isAnimatingRef  = useRef(false);
  const isPinnedRef     = useRef(false);
  const isMutedRef      = useRef(true);

  const applyMuteToAll = useCallback((muted: boolean) => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      // Only the currently active video should ever be audible — every
      // other video stays muted regardless of the global mute state, so
      // there's no way to end up hearing more than one at once.
      v.muted = i === currentStepRef.current ? muted : true;
    });
  }, []);

  // Same best-effort approach as the hero video:
  // 1) Try unmuted playback immediately — succeeds for returning/engaged
  //    visitors, or within a session after any earlier interaction.
  // 2) If blocked, fall back to muted (guaranteed to play) and auto-unmute
  //    on the very first interaction anywhere on the page (click, tap,
  //    key, scroll, or even mouse movement), so sound kicks in as fast as
  //    physically possible without requiring the user to hit the button.
  const attemptSoundOn = useCallback((video: HTMLVideoElement | null) => {
    if (!video) return;

    video.muted = false;
    isMutedRef.current = false;
    setIsMuted(false);

    video.play()
      .then(() => {
        applyMuteToAll(false);
      })
      .catch(() => {
        video.muted = true;
        isMutedRef.current = true;
        setIsMuted(true);
        applyMuteToAll(true);
        video.play().catch(() => {});

        let unmuted = false;
        const events = ["click"];
        const tryUnmute = () => {
          if (unmuted) return;
          unmuted = true;
          const active = videoRefs.current[currentStepRef.current];
          isMutedRef.current = false;
          setIsMuted(false);
          applyMuteToAll(false);
          active?.play().catch(() => {});
          events.forEach((evt) => document.removeEventListener(evt, tryUnmute));
        };

        events.forEach((evt) =>
          document.addEventListener(evt, tryUnmute, { passive: true })
        );
      });
  }, [applyMuteToAll]);

  const toggleMute = useCallback(() => {
    const next = !isMutedRef.current;
    isMutedRef.current = next;
    setIsMuted(next);
    applyMuteToAll(next);
    if (!next) {
      videoRefs.current[currentStepRef.current]?.play().catch(() => {});
    }
  }, [applyMuteToAll]);

  const moveTile = useCallback((step: number) => {
    const tile = tileRef.current;
    if (!tile) return;
    const vh = window.innerHeight;
    const tileH = tile.offsetHeight;
    // translateX(-50%) keeps the tile perfectly centered on its `left` anchor
    // (the overlay boundary) regardless of the tile's own responsive width.
    tile.style.transform = `translateX(-50%) translateY(${getTileTranslateY(step, vh, tileH)}px)`;
  }, []);

  const applyStep = useCallback((step: number, force = false) => {
    if (step === currentStepRef.current && !force) return;
    const prev = currentStepRef.current;
    const dir: 1 | -1 = step > prev ? 1 : -1;
    currentStepRef.current = step;

    setDirection(dir);
    setExitStep(prev);
    setActiveStep(step);
    setTimeout(() => setExitStep(null), 500);

    moveTile(step);

    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === step) {
        v.currentTime = STEPS[i].videoTime;
        v.muted = isMutedRef.current;
        v.play().catch(() => {});
      } else {
        v.muted = true;
        v.pause();
      }
    });
  }, [moveTile]);

  const scrollToStep = useCallback((step: number) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const vh    = window.innerHeight;
    const total = wrapper.offsetHeight - vh;
    const targetScrollY = wrapper.offsetTop + (step / (STEP_COUNT - 1)) * total;
    window.scrollTo({ top: targetScrollY, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (!isPinnedRef.current) return;
      e.preventDefault();
      if (isAnimatingRef.current) return;

      const dir  = e.deltaY > 0 ? 1 : -1;
      const next = Math.min(STEP_COUNT - 1, Math.max(0, currentStepRef.current + dir));
      if (next === currentStepRef.current) return;

      isAnimatingRef.current = true;
      applyStep(next);
      scrollToStep(next);
      setTimeout(() => { isAnimatingRef.current = false; }, 700);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [applyStep, scrollToStep]);

  useEffect(() => {
    let touchStartY = 0;

    const onTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };

    const onTouchEnd = (e: TouchEvent) => {
      if (!isPinnedRef.current) return;
      const diff = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 30 || isAnimatingRef.current) return;

      const dir  = diff > 0 ? 1 : -1;
      const next = Math.min(STEP_COUNT - 1, Math.max(0, currentStepRef.current + dir));
      if (next === currentStepRef.current) return;

      isAnimatingRef.current = true;
      applyStep(next);
      scrollToStep(next);
      setTimeout(() => { isAnimatingRef.current = false; }, 700);
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend",   onTouchEnd,   { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend",   onTouchEnd);
    };
  }, [applyStep, scrollToStep]);

  const handleScroll = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const rect = wrapper.getBoundingClientRect();
    const vh   = window.innerHeight;

    if (rect.top > 0) {
      isPinnedRef.current = false;
      setPinMode("before");
      applyStep(0);
    } else if (rect.bottom > vh) {
      isPinnedRef.current = true;
      setPinMode("pinned");
    } else {
      isPinnedRef.current = false;
      setPinMode("after");
      applyStep(STEP_COUNT - 1);
    }
  }, [applyStep]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (!introReady) return;
    currentStepRef.current = 0;
    setActiveStep(0);
    setExitStep(null);
    moveTile(0);
    attemptSoundOn(videoRefs.current[0]);
  }, [introReady, moveTile, attemptSoundOn]);

  useEffect(() => {
    const onResize = () => moveTile(currentStepRef.current);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [moveTile]);

  return (
    <div ref={wrapperRef} className="relative z-0 h-[400vh]">
      <div
        className={cn(
          "h-screen w-full overflow-hidden",
          // pointer-events-none: when pinned this layer covers the viewport and
          // must not steal clicks from sections below (e.g. reels controls).
          pinMode === "pinned" && "fixed top-0 left-0 right-0 z-0 pointer-events-none",
          pinMode === "after"  && "absolute bottom-0 left-0 right-0 z-0",
          pinMode === "before" && "relative z-0"
        )}
      >
        {/* Videos */}
        {STEPS.map((s, i) => (
          <video
            key={i}
            ref={(el) => {
              videoRefs.current[i] = el;
              if (el) el.muted = isMutedRef.current;
            }}
            src={s.videoSrc}
            loop
            playsInline
            className={cn(
              "absolute inset-0 z-0 h-full w-full object-cover object-center transition-opacity duration-700",
              activeStep === i ? "opacity-100" : "opacity-0"
            )}
          />
        ))}

        {/*
          Overlay:
          340px - 767px (below md)  : w-50%
          768px - 1279px (md & lg)  : w-40%
          1280px+ (xl)              : w-28%
        */}
        <div className="absolute top-0 left-0 z-10 h-full w-[50%] overflow-hidden bg-black/[0.72] md:w-[40%] xl:w-[28%]">
          {STEPS.map((s, i) => (
            <TextBlock
              key={i}
              step={s}
              active={activeStep === i}
              exiting={exitStep === i}
              direction={direction}
            />
          ))}
        </div>

        {/*
          Tile:
          `left` is always set to the overlay's right-edge percentage, and the JS-driven
          transform includes translateX(-50%), so the tile is exactly centered on that
          boundary line no matter how wide the tile itself is at a given breakpoint.
        */}
        <div
          ref={tileRef}
          className={cn(
            "absolute top-0 z-20 aspect-square will-change-transform",
            "drop-shadow-[0_12px_32px_rgba(0,0,0,0.6)]",
            "transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]",

            // < 640px — overlay boundary at 50%
            "left-[50%] w-[108px]",

            // sm (640-767px) — overlay boundary still at 50%
            "sm:w-[clamp(120px,22vw,145px)]",

            // md (768-1023px) — overlay boundary at 40%
            "md:left-[40%] md:w-[clamp(118px,16vw,140px)]",

            // lg (1024-1279px) — overlay boundary still at 40%
            "lg:w-[clamp(140px,12vw,175px)] lg:drop-shadow-[0_16px_40px_rgba(0,0,0,0.6)]",

            // xl (1280px+) — overlay boundary at 28%
            "xl:left-[28%]"
          )}
        >
          <Image
            src="/tileimage.png"
            alt="Tile"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 108px, (max-width: 1024px) 128px, 175px"
          />
        </div>

        {/* Mute / unmute toggle — fixed to the bottom-right corner, same as HeroSection */}
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className={cn(
            "fixed z-[9997] pointer-events-auto",
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
      </div>
    </div>
  );
}