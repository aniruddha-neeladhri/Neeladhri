"use client";

import Typography from "@/lib/Typography";
import Image from "next/image";
import { BLOG_CONTENT } from "@/lib/constants/blogs";
import { useTheme } from "@/lib/contexts/ThemeContext";
import Link from "next/link";

const GRID_LAYOUT = [
  { col: 1, row: 1, span: 4, href: "/blog/designing-a-modern-bathroom", alwaysShowCta: true },
  { col: 1, row: 5, span: 3, href: "/blog/bathroom-tile-ideas-that-elevate-everyday-spaces" },
  { col: 1, row: 8, span: 5, href: "/blog/flooring-ideas-for-contemporary-living-rooms" },
  { col: 2, row: 1, span: 3, href: "/blog/modern-bathroom-design-guide" },
  { col: 2, row: 4, span: 3, href: "/blog/living-room-design-ideas-with-tiles-and-surfaces" },
  { col: 2, row: 7, span: 3, href: "/blog/designing-a-stylish-dining-space" },
  { col: 2, row: 10, span: 3, href: "/blog/easy-to-maintain-flooring-for-dining-areas" },
  { col: 3, row: 1, span: 3, href: "/blog/bathroom-tile-ideas-that-elevate-everyday-spaces" },
  { col: 3, row: 4, span: 3, href: "/blog/the-importance-of-quality-tile-accessories-in-finishing" },
  { col: 3, row: 7, span: 6, href: "/blog/creating-a-warm-and-elegant-dining-ambience" },
] as const;

export default function ContemporaryLiving() {
  const { theme } = useTheme();

  if (theme === "luxury") return null;

  const { designJournal } = BLOG_CONTENT.premium;
  const gridCells = GRID_LAYOUT.map((cell, index) => ({
    ...cell,
    image: designJournal.gridImages[index],
  }));

  return (
    <section className="w-full pt-2 pb-6 px-6 md:pb-6 md:px-10 xl:py-4">
      <div className="max-w-[1400px] mx-auto flex flex-col xl:flex-row xl:flex-nowrap xl:items-center gap-6 xl:gap-8">
        <div className="w-full xl:w-[38%] xl:min-w-0 flex flex-col gap-2 xl:gap-2 text-left">
          <Typography
            variant="display-xl"
            className="font-normal leading-tight  text-center xl:text-left"
          >
            {designJournal.title}
          </Typography>

          <div className="space-y-3 leading-relaxed text-left">
            {designJournal.paragraphs.map((paragraph, i) => (
              <Typography key={i} variant="body-lg" className="text-left">
                {paragraph}
              </Typography>
            ))}
          </div>
        </div>

        <div className="w-full xl:w-[62%] xl:min-w-0 flex justify-center items-center">
        <div
          className="w-full max-w-[900px] mx-auto grid grid-cols-3 grid-rows-12 gap-1.5 md:gap-2"
          style={{ height: "clamp(500px, 65vw, 860px)" }}
        >
          {gridCells.map((cell, index) => (
            <Link
              key={index}
              href={cell.href}
              className="relative overflow-hidden group block cursor-pointer"
              style={{
                gridColumnStart: cell.col,
                gridRowStart: cell.row,
                gridRowEnd: `span ${cell.span}`,
              }}
            >
              <Image
                src={cell.image}
                alt="Design journal inspiration"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 1280px) 33vw, 20vw"
                priority={index === 0}
              />
              <div
                className={`absolute inset-0 z-10 flex items-center justify-center pointer-events-none ${
                  "alwaysShowCta" in cell && cell.alwaysShowCta
                    ? ""
                    : "opacity-0 group-hover:opacity-100 transition-opacity"
                }`}
              >
                <span className="text-white text-[9px] md:text-[11px] tracking-[0.18em] uppercase bg-black/35 px-2.5 py-1 group-hover:bg-black/50 transition-colors">
                  Read Article
                </span>
              </div>
            </Link>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
