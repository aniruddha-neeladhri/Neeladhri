"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import {
  brands,
  HOME_BRANDS_HEADING,
  luxuryBrands,
  type Brand,
} from "@/lib/constants/homebrands";
import {
  cancelHomepageSectionScroll,
  setHomepageScrollTarget,
} from "@/lib/navigation/homepage";

/** Per visual row: set every title to the tallest title height (full text, no truncate). */
function equalizeRowHeights(root: HTMLElement | null) {
  if (!root) return;
  const cards = Array.from(
    root.querySelectorAll<HTMLElement>("[data-brand-card]")
  );
  if (!cards.length) return;

  const titles = cards
    .map((c) => c.querySelector<HTMLElement>("[data-brand-title]"))
    .filter((el): el is HTMLElement => Boolean(el));
  const descs = cards
    .map((c) => c.querySelector<HTMLElement>("[data-brand-desc]"))
    .filter((el): el is HTMLElement => Boolean(el));

  titles.forEach((el) => {
    el.style.minHeight = "";
  });
  descs.forEach((el) => {
    el.style.minHeight = "";
  });

  const rows = new Map<number, { titles: HTMLElement[]; descs: HTMLElement[] }>();
  cards.forEach((card) => {
    const title = card.querySelector<HTMLElement>("[data-brand-title]");
    const desc = card.querySelector<HTMLElement>("[data-brand-desc]");
    if (!title || !desc) return;
    const top = Math.round(card.getBoundingClientRect().top);
    const row = rows.get(top) ?? { titles: [], descs: [] };
    row.titles.push(title);
    row.descs.push(desc);
    rows.set(top, row);
  });

  rows.forEach(({ titles: t, descs: d }) => {
    const maxTitle = Math.max(...t.map((el) => el.getBoundingClientRect().height));
    const maxDesc = Math.max(...d.map((el) => el.getBoundingClientRect().height));
    t.forEach((el) => {
      el.style.minHeight = `${maxTitle}px`;
    });
    d.forEach((el) => {
      el.style.minHeight = `${maxDesc}px`;
    });
  });
}

export default function BrandsSection() {
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";
  const data: Brand[] = isLuxury ? luxuryBrands : brands;
  const headingColor = isLuxury ? "#D3B898" : "#555555";
  const bodyColor = isLuxury ? "#FFFFFF" : "#555555";
  const gridRef = useRef<HTMLDivElement>(null);

  const handleBrandNavigate = () => {
    cancelHomepageSectionScroll();
    setHomepageScrollTarget("homebrands");
  };

  useLayoutEffect(() => {
    if (!isLuxury) return;
    const root = gridRef.current;
    const run = () => equalizeRowHeights(root);
    run();

    const ro = new ResizeObserver(run);
    if (root) ro.observe(root);
    window.addEventListener("resize", run);
    document.fonts?.ready.then(run).catch(() => {});

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", run);
    };
  }, [isLuxury, data]);

  return (
    <section id="homebrands" className="relative z-[101] w-full min-h-screen py-4 md:py-6 lg:py-8 px-4 md:px-2 lg:px-20">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 rounded-3xl p-4 md:gap-8 md:p-4 lg:gap-12 xl:p-10">
        <Typography
          variant="display-2xl"
          as="h2"
          className={`font-normal text-center md:text-left ${
            isLuxury
              ? "font-roboto-slab font-light"
              : "font-poppins font-medium"
          }`}
          style={{ color: headingColor }}
        >
          {HOME_BRANDS_HEADING}
        </Typography>

        <div
          ref={gridRef}
          className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-3 lg:gap-6"
        >
          {data.map((brand, i) =>
            isLuxury ? (
              <Link
                href={brand.href}
                key={i}
                onClick={handleBrandNavigate}
                data-brand-card
                className="group relative mx-auto block h-full w-full max-w-[320px] overflow-hidden sm:max-w-none"
              >
                {/* Original image frame restored */}
                <div className="relative aspect-[3/4] w-full md:aspect-auto md:h-[400px] lg:h-[480px] xl:h-[550px] 2xl:aspect-[3/4] 2xl:h-auto">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 z-[1] bg-black/50 transition-opacity duration-500 group-hover:opacity-0"
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-1 px-4 py-4 text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.85)]">
                    <p
                      data-brand-title
                      className="m-0 font-cormorant-garamond text-[20px] font-medium leading-tight sm:text-[21px] md:text-[22px] lg:text-[25px]"
                      style={{ color: bodyColor }}
                    >
                      {brand.name}
                    </p>
                    <p
                      data-brand-desc
                      className="m-0 font-cormorant-garamond text-[14px] font-light leading-snug sm:text-[14px] md:text-[15px]"
                      style={{ color: bodyColor }}
                    >
                      {brand.description}
                    </p>
                  </div>
                </div>
              </Link>
            ) : (
              <Link
                href={brand.href}
                key={i}
                onClick={handleBrandNavigate}
                className="group mx-auto flex h-full w-full max-w-[320px] flex-col sm:max-w-none"
              >
                <div className="relative aspect-[3/4] w-full shrink-0 overflow-hidden md:aspect-auto md:h-[400px] lg:h-[480px] xl:h-[550px] 2xl:aspect-[3/4] 2xl:h-auto">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                <div
                  className="relative z-10 -mt-12 flex min-h-[6.5rem] flex-1 flex-col justify-start gap-1 rounded-2xl bg-white px-4 py-4 shadow-sm
                             transition-all duration-500 ease-out
                             group-hover:-translate-y-2 group-hover:shadow-[0_8px_30px_rgba(247,148,64,0.5)]"
                >
                  <Typography
                    variant="h3"
                    as="p"
                    className="font-poppins font-medium"
                    style={{ color: bodyColor }}
                  >
                    {brand.name}
                  </Typography>
                  <Typography
                    variant="body-sm"
                    className="min-h-[2.75rem] flex-1 font-poppins font-extralight leading-snug"
                    style={{ color: bodyColor }}
                  >
                    {brand.description}
                  </Typography>
                </div>
              </Link>
            )
          )}
        </div>

        <Link
          href="/brands"
          onClick={handleBrandNavigate}
          className="mx-auto inline-flex items-center justify-center bg-[#F79440] px-6 py-3 font-poppins text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          View More
        </Link>
      </div>
    </section>
  );
}
