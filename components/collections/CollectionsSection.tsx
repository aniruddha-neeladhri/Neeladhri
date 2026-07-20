"use client";

import Image from "next/image";
import Link from "next/link";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import {
  collectionGridImages,
  collectionImageBorderColor,
} from "@/lib/constants/collections";

const GAP = 8;
const ROW1 = 440;
const ROW2 = 600;

function Cell({
  src,
  label,
  height,
  sizes = "30vw",
  borderColor,
  href,
  uniformAspect,
  mobileAspect,
}: {
  src: string;
  label: string;
  height?: number;
  sizes?: string;
  borderColor: string;
  href?: string;
  uniformAspect?: boolean; // tablet: fixed aspect ratio, object-cover
  mobileAspect?: boolean;  // mobile: slightly shorter aspect ratio
}) {
  const { theme } = useTheme();
  const inner = (
    <div
      className={`group relative overflow-hidden flex-shrink-0 box-border w-full
        ${borderColor ? "border-4" : "border-0"}
        ${mobileAspect ? "aspect-[5/3]" : uniformAspect ? "aspect-[4/3]" : height ? "" : "aspect-[4/3]"}
        ${href ? "cursor-pointer" : ""}
      `}
      style={{
        ...(height && !uniformAspect && !mobileAspect ? { height } : {}),
        ...(borderColor ? { borderColor } : {}),
      }}
    >
      <Image
        src={src}
        alt={label}
        fill
        sizes={sizes}
        className={`transition-transform duration-700 ease-out group-hover:scale-105
          ${uniformAspect || mobileAspect ? "object-cover" : "object-fill"}
        `}
      />
      {!mobileAspect && (
        <div
          className="absolute inset-0 z-[1] bg-black/50 pointer-events-none opacity-100 transition-opacity duration-500 group-hover:opacity-0"
          aria-hidden
        />
      )}
      {label && (
        <Typography
          variant="display-xl"
          className={`absolute top-1/2 left-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 text-white font-light whitespace-nowrap w-full text-center [text-shadow:0_2px_10px_rgba(0,0,0,0.7)] ${
            theme === "luxury" ? "font-cormorant-garamond" : "font-poppins"
          }`}
        >
          {label}
        </Typography>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block w-full flex-shrink-0">
        {inner}
      </Link>
    );
  }

  return inner;
}

export default function CollectionsSection() {
  const { theme } = useTheme();
  const borderColor = collectionImageBorderColor(theme);
  const grid = collectionGridImages(theme);
  const bathroomH = ROW1 + GAP + Math.round(ROW2 * 0.42);
  const loungeH = Math.round(ROW2 * 0.58) - GAP + 120;

  const mobileOrder = [
    { src: grid.bathroom, label: "Bathroom", href: "/collection#bathroom" },
    { src: grid.living, label: "Living", href: "/collection#living-room" },
    { src: grid.dining, label: "Dining", href: "/collection#dining" },
    { src: grid.alliedAccessories, label: "Allied Accessories", href: "/collection#allied-accessories" },
    { src: grid.blank, label: "", href: undefined },
    { src: grid.kitchen, label: "Kitchen", href: "/collection#kitchen" },
  ];

  return (
    <section className="w-full pt-2 pb-2 lg:pb-16 px-4">

      {/* DESKTOP ≥1024px — original fixed-height 3-column grid */}
      <div
        className="hidden lg:flex w-full justify-center gap-2"
        style={{ height: ROW1 + GAP + ROW2 }}
      >
        <div className="flex flex-col flex-shrink-0 gap-2 w-[33%]">
          <Cell src={grid.living} label="Living" height={loungeH} sizes="33vw" borderColor={borderColor} href="/collection#living-room" />
          <Cell src={grid.alliedAccessories} label="Allied Accessories" height={bathroomH} sizes="33vw" borderColor={borderColor} href="/collection#allied-accessories" />
        </div>
        <div className="flex flex-col flex-shrink-0 gap-2 w-[34%]">
          <Cell src={grid.bathroom} label="Bathroom" height={bathroomH} sizes="34vw" borderColor={borderColor} href="/collection#bathroom" />
          <Cell src={grid.blank} label="" height={loungeH} sizes="34vw" borderColor={borderColor} />
        </div>
        <div className="flex flex-col flex-shrink-0 gap-2 w-[33%]">
          <Cell src={grid.dining} label="Dining" height={loungeH} sizes="33vw" borderColor={borderColor} href="/collection#dining" />
          <Cell src={grid.kitchen} label="Kitchen" height={bathroomH} sizes="33vw" borderColor={borderColor} href="/collection#kitchen" />
        </div>
      </div>

      {/* TABLET 768px–1023px — 2-column, aspect-ratio locked, object-cover */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-3 mt-2">
        {mobileOrder.map(({ src, label, href }) => (
          <Cell
            key={label || "blank"}
            src={src}
            label={label}
            sizes="50vw"
            borderColor={borderColor}
            href={href}
            uniformAspect
          />
        ))}
      </div>

      {/* MOBILE <768px — single column, shorter aspect ratio for reduced height */}
      <div className="flex flex-col gap-4 mt-2 md:hidden">
        {mobileOrder.map(({ src, label, href }) => (
          <Cell
            key={label || "blank"}
            src={src}
            label={label}
            sizes="100vw"
            borderColor={borderColor}
            href={href}
            mobileAspect
          />
        ))}
      </div>

    </section>
  );
}