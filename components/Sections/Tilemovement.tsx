"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    body: "Spaces that reflect your style.\nFind flooring and wall solutions that transform everyday living into something extraordinary.",
    videoSrc: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/ac9026dc-6ae6-4eb0-8f7b-4fd3c05deb3d.mp4",
    videoTime: 0,
  },
  {
    body: "Cook. Gather. Create.\nEverything your kitchen needs, from premium surfaces to trusted brands, brought together at Neeladhri Ceramics.",
    videoSrc:  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/728d2819-3ac6-49f5-981a-4e50ef909071.mp4",
    videoTime: 5,
  },
  {
    body:"Made for moments that matter.\nCurated collections that bring comfort, elegance and timeless appeal to your dining space.",
    videoSrc: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/b442df59-ddf2-4ded-aab8-bc49bfb67ee3.mp4",
    videoTime: 10,
  },
  {
    body: "Every detail matters.Especially here.\nFrom premium tiles to sanitaryware and bath fittings, Neeladhri Ceramics helps you create bathrooms that are stylish, functional and built to last.",
    videoSrc: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/4632c787-53da-424f-9fae-65aa3b182254.mp4",
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Below 640px, ignore the manual \n breaks and let the text wrap naturally;
  // at sm and up, honor the manual \n breaks as forced line breaks.
  const rawLines = isMobile ? [text.replace(/\n/g, " ")] : text.split("\n");
  const lines = rawLines.map((line) => line.trim().split(" ").filter(Boolean));

  const translateIn  = direction === 1 ? "translateY(110%)" : "translateY(-110%)";
  const translateOut = direction === 1 ? "translateY(-110%)" : "translateY(110%)";

  let wordIndex = 0;

  return (
    <Typography
      variant="body-lg"
      className="m-0 w-full max-w-full font-montserrat font-normal tracking-[0.01em] !text-white leading-relaxed text-[12px] sm:text-[13px] lg:max-w-[280px] lg:text-[15px]"
    >
      {lines.map((words, li) => (
        <span key={li} style={{ display: "block" }}>
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
      ))}
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
      <AnimatedText
        text={step.body}
        active={active}
        exiting={exiting}
        direction={direction}
      />
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

  const currentStepRef  = useRef(0);
  const isAnimatingRef  = useRef(false);
  const isPinnedRef     = useRef(false);

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
        v.play().catch(() => {});
      } else {
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
    videoRefs.current[0]?.play().catch(() => {});
  }, [introReady, moveTile]);

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
          pinMode === "pinned" && "fixed top-0 left-0 right-0 z-0",
          pinMode === "after"  && "absolute bottom-0 left-0 right-0 z-0",
          pinMode === "before" && "relative z-0"
        )}
      >
        {/* Videos */}
        {STEPS.map((s, i) => (
          <video
            key={i}
            ref={(el) => { videoRefs.current[i] = el; }}
            src={s.videoSrc}
            muted
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
          340px - 1279px (below xl) : w-50% for every screen in this range
          1280px+ (xl)              : w-28%
        */}
        <div className="absolute top-0 left-0 z-10 h-full w-[50%] overflow-hidden bg-black/[0.72] xl:w-[28%]">
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

            // md (768-1023px) — overlay boundary still at 50%
            "md:w-[clamp(118px,16vw,140px)]",

            // lg (1024-1279px) — overlay boundary still at 50%
            "lg:w-[clamp(140px,12vw,175px)] lg:drop-shadow-[0_16px_40px_rgba(0,0,0,0.6)]",

            // xl (1280px+) — overlay boundary moves to 28%
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
      </div>
    </div>
  );
}