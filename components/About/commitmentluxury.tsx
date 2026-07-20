"use client";

import Image from "next/image";
import Typography from "@/lib/Typography";
import {
  ABOUT_LUXURY_COMMITMENTS,
  ABOUT_LUXURY_GOLD,
  ABOUT_LUXURY_STATS,
} from "@/lib/constants/about";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useEffect, useRef, useState } from "react";

const GOLD = ABOUT_LUXURY_GOLD;
const WHITE = "#FFFFFF";
const DURATION = 2200;

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

function useCountUp(target: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    setCount(0);
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const raw = Math.min(elapsed / DURATION, 1);
      const eased = easeOutQuart(raw);
      const current = Math.round(eased * target);
      setCount(Math.min(current, target));
      if (raw < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [start, target]);

  return count;
}

function LuxuryStatItem({
  value,
  suffix,
  label,
  started,
}: {
  value: number;
  suffix: string;
  label: string;
  started: boolean;
}) {
  const isDecimal = !Number.isInteger(value);
  const countTarget = isDecimal ? Math.round(value * 10) : value;
  const count = useCountUp(countTarget, started);
  const displayValue = isDecimal
    ? (count / 10).toFixed(1)
    : value >= 1000
      ? count.toLocaleString("en-US")
      : String(count);

  return (
    <div className="flex flex-col items-center justify-center text-center py-5 md:py-8 px-2 md:px-3 lg:px-4 gap-1.5 md:gap-2">
      <Typography
        variant="display-xl"
        className="font-normal font-gfs-didot leading-none tracking-tight"
        style={{ color: GOLD }}
      >
        {displayValue}
        {suffix}
      </Typography>
      <Typography
        variant="body-xl"
        className="!text-white font-normal font-gfs-didot leading-snug max-w-32 md:max-w-36 lg:max-w-44 mx-auto text-balance"
        style={{ color: WHITE }}
      >
        {label}
      </Typography>
    </div>
  );
}

export default function CommitmentLuxury() {
  const { theme } = useTheme();
  const statsRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  if (theme !== "luxury") return null;

  return (
    <section className="w-full bg-black overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto px-4 pb-5 sm:px-6 sm:py-12 lg:px-12 lg:py-14 xl:px-20 flex flex-col gap-10 md:gap-14 lg:gap-16">
        {/* Stats */}
        <div
          ref={statsRef}
          className="relative z-0 w-full grid grid-cols-2 md:grid-cols-4 max-md:[&>*]:border-0 md:divide-x md:divide-white/20"
        >
          {ABOUT_LUXURY_STATS.map((stat, i) => (
            <LuxuryStatItem
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              started={started}
            />
          ))}
        </div>

        <div
          className="hidden sm:block w-full h-px shrink-0 bg-white/20"
          aria-hidden
        />

        {/* Our Commitment — stacked below lg; side-by-side from lg (1024px) */}
        <div className="relative z-0 w-full grid grid-cols-1 lg:grid-cols-[minmax(0,260px)_1fr] gap-8 lg:gap-x-10 xl:gap-x-12 lg:gap-y-0 items-start">
          <div className="min-w-0 w-full max-lg:text-center">
            <Typography
              variant="display-2xl"
              className="!text-white font-medium font-cormorant-garamond leading-tight tracking-tight text-center lg:text-left"
              style={{ color: WHITE }}
            >
              <span className="lg:hidden">Our Commitment</span>
              <span className="hidden lg:inline">
                Our
                <br />
                Commitment
              </span>
            </Typography>
          </div>

          <div className="min-w-0 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 sm:max-lg:gap-x-8 lg:gap-y-0 lg:gap-x-4 xl:gap-x-6 max-lg:max-w-2xl max-lg:mx-auto max-lg:justify-items-center lg:max-w-none lg:mx-0 lg:justify-items-stretch">
            {ABOUT_LUXURY_COMMITMENTS.map((item) => (
              <div
                key={item.title}
                className="flex w-full max-w-sm mx-auto flex-col items-center gap-2 max-lg:w-72 max-lg:max-w-72 lg:w-full lg:max-w-none lg:items-start lg:gap-3"
              >
                <div className="h-12 w-12 lg:h-14 lg:w-14 flex items-center justify-center shrink-0 lg:items-start lg:justify-start">
                  <Image
                    src={item.icon}
                    alt=""
                    width={56}
                    height={56}
                    className="object-contain object-center w-full h-full lg:object-left"
                  />
                </div>

                <Typography
                  variant="h2"
                  className="!text-white font-light font-cormorant-garamond leading-snug text-center w-full lg:text-left"
                  style={{ color: WHITE }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body-xl"
                  className="!text-white font-light font-cormorant-garamond leading-relaxed text-center w-full [text-wrap:pretty] lg:text-left"
                  style={{ color: WHITE }}
                >
                  {item.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}