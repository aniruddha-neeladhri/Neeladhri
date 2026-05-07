"use client";

import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Years Of Experience" },
  { value: 1000, suffix: "+", label: "Projects Supported" },
  { value: 500, suffix: "+", label: "Satisfied Customers" },
  { value: 50, suffix: "+", label: "Premium Brands" },
];

const highlights = [
  "We take pride in offering a well-rounded range of solutions that cater to every aspect of modern interiors.",
  "Our strengths lie in quality selection, design understanding, and customer focused service.",
];

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

      if (raw < 1) {
        requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(tick);
  }, [start, target]);

  return count;
}

function StatItem({
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
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";
  const count = useCountUp(value, started);

  return (
    <div className="flex flex-col items-center w-[48%] md:w-auto md:flex-1 gap-1">
      <Typography
        variant="display-xl"
        className="text-[#F79440] font-semibold leading-tight text-center"
      >
        {count}{suffix}
      </Typography>
      <Typography
        variant="body-xl"
        className={`font-light text-center ${isLuxury ? "text-white" : "text-black"}`}
      >
        {label}
      </Typography>
    </div>
  );
}

export default function StatsSection() {
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [started]);

  return (
    <section className="w-full py-6 md:py-10 lg:py-14 px-6 lg:px-20">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-10 md:gap-14">

        {/* Top - Two highlight boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {highlights.map((text, i) => (
            <div
              key={i}
              className={`group px-6 py-6 md:px-8 md:py-8 flex items-center justify-center cursor-pointer
                transition-all duration-300 ease-out
                hover:-translate-y-2
                hover:shadow-[0_12px_40px_rgba(247,148,64,0.35)]
                ${isLuxury ? "border border-[#F79440] bg-transparent" : "bg-[#4a4a4a]"}`}
            >
              <Typography
                variant="body-xl"
                className="text-center leading-relaxed font-normal transition-transform duration-300 group-hover:scale-[1.02] text-white"
              >
                {text}
              </Typography>
            </div>
          ))}
        </div>

        {/* Bottom - Stats row */}
        <div ref={sectionRef} className="flex flex-wrap justify-between gap-y-8">
          {stats.map((stat, i) => (
            <StatItem
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              started={started}
            />
          ))}
        </div>

      </div>
    </section>
  );
}