"use client";

import Image from "next/image";
import Typography from "@/lib/Typography";
import { THEME_FOREGROUND, useTheme } from "@/lib/contexts/ThemeContext";
import { useCountUp } from "@/lib/hooks/use-count-up";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 22, suffix: "+", label: "Years Of Experience" },
  { value: 10000, suffix: "+", label: "Projects Supported" },
  { value: 97.6, suffix: "%", label: "Satisfied Customers" },
  { value: 100, suffix: "+", label: "Premium Brands" },
];

const highlights = [
  {
    icon:  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/about/49660b27-9445-429c-ba3f-f1286ded2314.png",
    text: "We take pride in offering a well-rounded range of solutions that cater to every aspect of modern interiors.",
  },
  {
    icon: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/about/4d228671-7190-4516-aef5-c6322b4f677f.png",
    text: "Our strengths lie in quality selection, design understanding, and customer focused service.",
  },
];

function StatItem({
  value,
  suffix,
  label,
  started,
  labelColor,
}: {
  value: number;
  suffix: string;
  label: string;
  started: boolean;
  labelColor: string;
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
    <div className="flex flex-col items-center w-[48%] md:w-auto md:flex-1 gap-1">
      <Typography
        variant="display-xl"
        className="text-[#F79440] font-semibold  font-poppins leading-tight text-center"
      >
        {displayValue}
        {suffix}
      </Typography>
      <Typography
        variant="body-xl"
        className="font-light font-poppins text-center"
        style={{ color: labelColor }}
      >
        {label}
      </Typography>
    </div>
  );
}

export default function StatsSection() {
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";
  const statLabelColor = THEME_FOREGROUND[theme];
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

  // card bg: luxury → dark with orange border, premium → warm cream
  const cardBg = isLuxury
    ? "bg-transparent border border-[#F79440]"
    : "bg-[#F5EFE6]";

  return (
    <section className="w-full pb-6 md:py-10 lg:py-14 px-6 lg:px-20">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-10 md:gap-14">

        {/* ── Highlight Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {highlights.map((item, i) => (
            <div
              key={i}
              className={[
                "group flex flex-row items-center gap-5 px-6 py-6 md:px-8 md:py-8",
                "transition-all duration-300 ease-out",
                "hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(247,148,64,0.25)]",
                cardBg,
              ].join(" ")}
            >
              {/* Icon — white circular background */}
              <div className="flex-none w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Image
                  src={item.icon}
                  alt=""
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <Typography
                variant="body-xl"
                className={[
                  "leading-relaxed font-light font-poppins flex-1",
                  isLuxury ? "text-white" : "text-[#555555]",
                ].join(" ")}
              >
                {item.text}
              </Typography>
            </div>
          ))}
        </div>

        {/* ── Stats Row ── */}
        <div
          ref={sectionRef}
          className="flex flex-wrap justify-between gap-y-8"
          style={{ color: statLabelColor }}
        >
          {stats.map((stat, i) => (
            <StatItem
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              started={started}
              labelColor={statLabelColor}
            />
          ))}
        </div>

      </div>
    </section>
  );
}