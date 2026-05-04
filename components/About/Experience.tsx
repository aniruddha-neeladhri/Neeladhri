"use client";

import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";

const stats = [
  { value: "10+", label: "Years Of Experience" },
  { value: "1000+", label: "Projects Supported" },
  { value: "500+", label: "Satisfied Customers" },
  { value: "50+", label: "Premium Brands" },
];

const highlights = [
  "We take pride in offering a well-rounded range of solutions that cater to every aspect of modern interiors.",
  "Our strengths lie in quality selection, design understanding, and customer focused service.",
];
export default function StatsSection() {
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";
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
                ${
                  isLuxury
                    ? "border border-[#F79440] bg-transparent"
                    : "bg-[#4a4a4a]"
                }`}
            >
              <Typography
                variant="body-xl"
                className={`text-center leading-relaxed font-normal transition-transform duration-300 group-hover:scale-[1.02] ${
                  isLuxury ? "text-white" : "text-white"
                }`}
              >
                {text}
              </Typography>
            </div>
          ))}
        </div>

        {/* Bottom - Stats row */}
      <div className="flex flex-wrap justify-between gap-y-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center w-[48%] md:w-auto md:flex-1 gap-1"
            >
              <Typography
                variant="display-xl"
                className="text-[#F79440] font-semibold leading-tight text-center"
              >
                {stat.value}
              </Typography>
              <Typography
                variant="body-xl"
                className={`font-light text-center ${
                  isLuxury ? "text-white" : "text-black"
                }`}
              >
                {stat.label}
              </Typography>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}