"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { premiumReels, luxuryReels, reelsTheme } from "@/lib/constants/reels";

const INSTAGRAM_URL =
  "https://www.instagram.com/neeladhriceramics?igsh=ajM2aXVqdWNqMnJp";

/**
 * Native scroll-snap strip (swipe works by itself).
 * Corner controls only call step(±1) → scrollTo the next snap card.
 */
export default function ReelsSection() {
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";
  const reels = isLuxury ? luxuryReels : premiumReels;
  const colors = isLuxury ? reelsTheme.luxury : reelsTheme.premium;

  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  // Per-reel unmute: only the clicked video plays sound (others stay muted).
  const [unmutedId, setUnmutedId] = useState<string | null>(null);
  const [activeReelIndex, setActiveReelIndex] = useState(0);

  const syncEdges = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(max <= 2 || el.scrollLeft >= max - 2);

    const cards = Array.from(el.children) as HTMLElement[];
    if (!cards.length) return;
    let active = 0;
    let best = Infinity;
    for (let i = 0; i < cards.length; i++) {
      const d = Math.abs(cards[i].offsetLeft - el.scrollLeft);
      if (d < best) {
        best = d;
        active = i;
      }
    }
    setActiveReelIndex(active);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    syncEdges();
    el.addEventListener("scroll", syncEdges, { passive: true });
    const ro = new ResizeObserver(syncEdges);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", syncEdges);
      ro.disconnect();
    };
  }, [reels.length, syncEdges]);

  const step = (delta: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cards = Array.from(el.children) as HTMLElement[];
    if (!cards.length) return;

    let active = 0;
    let best = Infinity;
    for (let i = 0; i < cards.length; i++) {
      const d = Math.abs(cards[i].offsetLeft - el.scrollLeft);
      if (d < best) {
        best = d;
        active = i;
      }
    }

    const target =
      cards[Math.max(0, Math.min(cards.length - 1, active + delta))];
    el.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
  };

  const goToInstagram = () => {
    window.open(INSTAGRAM_URL, "_blank", "noopener,noreferrer");
  };

  const toggleMute = (e: React.MouseEvent, reelId: string) => {
    e.stopPropagation();
    e.preventDefault();
    setUnmutedId((current) => (current === reelId ? null : reelId));
  };

  // z-20 keeps controls above reel cards (cards were stealing edge clicks)
  const controlClass =
    "relative z-20 mb-1 flex h-6 w-6 shrink-0 touch-manipulation items-center justify-center rounded-full transition-opacity md:justify-self-center";

  return (
    <section
      id="homereels"
      className="relative z-[101] w-full py-2 px-3 md:px-4 lg:px-8"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 rounded-3xl p-3 md:gap-8 md:p-4 lg:gap-10 lg:p-6">
        <span
          onClick={goToInstagram}
          role="link"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") goToInstagram();
          }}
          className="inline-block cursor-pointer"
        >
          <Typography
            variant="display-xl"
            as="p"
            className={`text-center tracking-wide ${
              isLuxury ? "font-roboto-slab font-light" : "font-poppins font-light"
            }`}
            style={{ color: colors.headingColor }}
          >
            @neeladhriceramics
          </Typography>
        </span>


        {/* Design: controls outside the strip, bottom-aligned, small gap */}
        <div className="isolate grid w-full max-w-[360px] grid-cols-[2rem_minmax(0,1fr)_2rem] items-end gap-3 md:max-w-none md:w-auto md:grid-cols-[2rem_680px_2rem] md:gap-3 lg:grid-cols-[2rem_812px_2rem] lg:gap-4 xl:grid-cols-[2rem_872px_2rem]">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Show previous reels"
            className={`${controlClass} ${atStart ? "opacity-35" : "opacity-100"}`}
            style={{ backgroundColor: colors.arrowBg }}
          >
            <Chevron dir="prev" color={colors.arrowColor} />
          </button>

          <div className="min-w-0 overflow-hidden">
            <div
              ref={scrollerRef}
              className="relative flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain scroll-smooth md:gap-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {reels.map((reel, index) => {
                // Desktop shows ~3 cards at once; ±1 left the far card black.
                const shouldLoad = Math.abs(index - activeReelIndex) <= 2;
                return (
                <div
                  key={reel.id}
                  onClick={goToInstagram}
                  role="link"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") goToInstagram();
                  }}
                  className="relative aspect-[9/16] w-full min-w-full shrink-0 snap-start cursor-pointer overflow-hidden shadow-lg md:w-[216px] md:min-w-[216px] lg:w-[260px] lg:min-w-[260px] xl:w-[280px] xl:min-w-[280px]"
                  style={{ backgroundColor: colors.cardBg }}
                >
                  {reel.videoSrc ? (
                    <>
                      <video
                        src={shouldLoad ? reel.videoSrc : undefined}
                        poster={reel.poster}
                        preload={shouldLoad ? "metadata" : "none"}
                        autoPlay={shouldLoad}
                        muted={unmutedId !== reel.id}
                        loop
                        playsInline
                        className="pointer-events-none h-full w-full object-contain"
                      />
                      <button
                        type="button"
                        onClick={(e) => toggleMute(e, reel.id)}
                        aria-label={
                          unmutedId === reel.id
                            ? "Mute this video"
                            : "Unmute this video"
                        }
                        className="absolute bottom-3 right-3 z-10 flex h-6 w-6 touch-manipulation items-center justify-center rounded-full bg-black/55 backdrop-blur-sm transition-opacity hover:bg-black/70"
                      >
                        <MuteIcon muted={unmutedId !== reel.id} />
                      </button>
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={colors.arrowColor}
                        strokeWidth={1.5}
                        className="h-10 w-10 opacity-40 md:h-12 md:w-12"
                        aria-hidden
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  )}
                </div>
              );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Show more reels"
            className={`${controlClass} ${atEnd ? "opacity-35" : "opacity-100"}`}
            style={{ backgroundColor: colors.arrowBg }}
          >
            <Chevron dir="next" color={colors.arrowColor} />
          </button>
        </div>
      </div>
    </section>
  );
}

function MuteIcon({ muted }: { muted: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {muted ? (
        <>
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </>
      ) : (
        <>
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        </>
      )}
    </svg>
  );
}

function Chevron({
  dir,
  color,
}: {
  dir: "prev" | "next";
  color: string;
}) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {dir === "prev" ? (
        <polyline points="15 18 9 12 15 6" />
      ) : (
        <polyline points="9 18 15 12 9 6" />
      )}
    </svg>
  );
}