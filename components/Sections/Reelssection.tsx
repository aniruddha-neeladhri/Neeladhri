"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { premiumReels, luxuryReels, reelsTheme } from "@/lib/constants/reels";

const INSTAGRAM_URL =
  "https://www.instagram.com/neeladhriceramics?igsh=ajM2aXVqdWNqMnJp";

function getStepWidth(track: HTMLDivElement) {
  const card = track.querySelector<HTMLElement>("[data-reel-card]");
  if (!card) return track.clientWidth;

  const styles = getComputedStyle(track);
  const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
  return card.getBoundingClientRect().width + gap;
}

function getVisibleCount(track: HTMLDivElement) {
  const step = getStepWidth(track);
  if (step <= 0) return 1;
  return Math.max(1, Math.round(track.clientWidth / step));
}

function getMaxIndex(track: HTMLDivElement) {
  const total = track.querySelectorAll("[data-reel-card]").length;
  return Math.max(0, total - getVisibleCount(track));
}

function getActiveIndex(track: HTMLDivElement) {
  const step = getStepWidth(track);
  if (step <= 0) return 0;
  return Math.min(getMaxIndex(track), Math.max(0, Math.round(track.scrollLeft / step)));
}

function Chevron({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
      aria-hidden
    >
      {direction === "prev" ? (
        <polyline points="15 18 9 12 15 6" />
      ) : (
        <polyline points="9 18 15 12 9 6" />
      )}
    </svg>
  );
}

export default function ReelsSection() {
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";
  const reels = isLuxury ? luxuryReels : premiumReels;
  const colors = isLuxury ? reelsTheme.luxury : reelsTheme.premium;

  const trackRef = useRef<HTMLDivElement>(null);
  const [canGoPrev, setCanGoPrev] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);

  const syncControls = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const index = getActiveIndex(track);
    const maxIndex = getMaxIndex(track);
    setCanGoPrev(index > 0);
    setCanGoNext(index < maxIndex);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    syncControls();

    track.addEventListener("scroll", syncControls, { passive: true });
    window.addEventListener("resize", syncControls);

    const resizeObserver = new ResizeObserver(syncControls);
    resizeObserver.observe(track);

    return () => {
      track.removeEventListener("scroll", syncControls);
      window.removeEventListener("resize", syncControls);
      resizeObserver.disconnect();
    };
  }, [syncControls, reels.length, theme]);

  const goToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const maxIndex = getMaxIndex(track);
    const nextIndex = Math.min(maxIndex, Math.max(0, index));
    const step = getStepWidth(track);

    track.scrollTo({
      left: nextIndex * step,
      behavior: "smooth",
    });

    setCanGoPrev(nextIndex > 0);
    setCanGoNext(nextIndex < maxIndex);
  }, []);

  const goPrev = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const track = trackRef.current;
    if (!track) return;
    goToIndex(getActiveIndex(track) - 1);
  };

  const goNext = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const track = trackRef.current;
    if (!track) return;
    goToIndex(getActiveIndex(track) + 1);
  };

  const openInstagram = () => {
    window.open(INSTAGRAM_URL, "_blank", "noopener,noreferrer");
  };

  const arrowClassName =
    "pointer-events-auto flex items-center justify-center w-7 h-7 md:w-6 md:h-6 rounded-full border transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-30 disabled:pointer-events-none hover:enabled:scale-105 active:enabled:scale-95";

  const arrowStyle = {
    backgroundColor: colors.arrowBg,
    borderColor: colors.arrowBorder,
    color: colors.arrowColor,
  };

  return (
    <section
      id="homereels"
      className="relative z-[101] w-full py-2 md:py-2 lg:py-2 px-3 md:px-4 lg:px-8"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-6 md:gap-1 lg:gap-10 rounded-3xl p-3 md:p-4 lg:p-6">
        <button
          type="button"
          onClick={openInstagram}
          className="cursor-pointer"
          aria-label="Open Neeladhri Ceramics on Instagram"
        >
          <Typography
            variant="display-xl"
            className={`text-center tracking-wide ${
              isLuxury ? "font-roboto-slab font-light" : "font-poppins font-light"
            }`}
            style={{ color: colors.handleColor }}
          >
            @neeladhriceramics
          </Typography>
        </button>

        {/*
          Side gutters keep arrows at the bottom corners (outside the cards)
          without negative offsets that get covered by neighboring hit targets.
        */}
        <div className="relative isolate w-full max-w-[320px] md:max-w-none md:w-[768px] lg:w-[876px] xl:w-[952px] px-9 md:px-6 lg:px-12 pt-2 md:pt-6 lg:pt-2">
          <div className="overflow-hidden w-full">
            <div
              ref={trackRef}
              className="flex gap-3 md:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {reels.map((reel) => (
                <button
                  key={reel.id}
                  type="button"
                  data-reel-card
                  onClick={openInstagram}
                  aria-label="View reel on Instagram"
                  className="relative shrink-0 snap-center md:snap-start w-full md:w-[230px] lg:w-[260px] xl:w-[280px] aspect-[9/16] overflow-hidden shadow-lg flex items-center justify-center cursor-pointer p-0 border-0"
                  style={{ backgroundColor: colors.cardBg }}
                >
                  {reel.videoSrc ? (
                    <video
                      src={reel.videoSrc}
                      poster={reel.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-contain pointer-events-none"
                    />
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={colors.arrowColor}
                      strokeWidth={1.5}
                      className="w-10 h-10 md:w-12 md:h-12 opacity-40 pointer-events-none"
                      aria-hidden
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-30 flex items-end justify-between px-0">
            <button
              type="button"
              aria-label="Previous reels"
              onClick={goPrev}
              disabled={!canGoPrev}
              className={arrowClassName}
              style={arrowStyle}
            >
              <Chevron direction="prev" />
            </button>

            <button
              type="button"
              aria-label="Next reels"
              onClick={goNext}
              disabled={!canGoNext}
              className={arrowClassName}
              style={arrowStyle}
            >
              <Chevron direction="next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
