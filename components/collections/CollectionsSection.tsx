"use client";

import Image from "next/image";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import {
  collectionGridImages,
  collectionImageBorderColor,
} from "@/lib/constants/collections";

const GAP = 8;
const ROW1 = 440;
const ROW2 = 600;
const TOTAL = ROW1 + GAP + ROW2;

function Cell({
  src,
  label,
  height,
  sizes = "30vw",
  borderColor,
}: {
  src: string;
  label: string;
  height?: number;
  sizes?: string;
  borderColor: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden flex-shrink-0 border-2 box-border ${height ? "" : "aspect-[4/3]"}`}
      style={{
        ...(height ? { height } : {}),
        borderColor,
      }}
    >
      <Image
        src={src}
        alt={label}
        fill
        sizes={sizes}
        className="object-fill transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {label && (
        <Typography
          variant="display-xl"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-light whitespace-nowrap w-full text-center [text-shadow:0_2px_10px_rgba(0,0,0,0.7)]"
        >
          {label}
        </Typography>
      )}
    </div>
  );
}

export default function CollectionsSection() {
  const { theme } = useTheme();
  const borderColor = collectionImageBorderColor(theme);
  const grid = collectionGridImages(theme);
  const bathroomH = ROW1 + GAP + Math.round(ROW2 * 0.42);
  const loungeH = Math.round(ROW2 * 0.58) - GAP + 120;

  return (
    <section className="w-full pt-2 pb-2 md:pb-16 px-4">
      <div
        className="hidden md:flex w-full justify-center gap-2 h-[calc(440px+8px+600px)]"
      >
        {/* LEFT */}
        <div className="flex flex-col flex-shrink-0 gap-2 w-[33%]">
          <Cell src={grid.living} label="Living" height={loungeH} sizes="33vw" borderColor={borderColor} />
          <Cell src={grid.alliedAccessories} label="Allied Accessories" height={bathroomH} sizes="33vw" borderColor={borderColor} />
        </div>

        {/* CENTER */}
        <div className="flex flex-col flex-shrink-0 gap-2 w-[34%]">
          <Cell src={grid.bathroom} label="Bathroom" height={bathroomH} sizes="34vw" borderColor={borderColor} />
          <Cell src={grid.blank} label="" height={loungeH} sizes="34vw" borderColor={borderColor} />
        </div>

        {/* RIGHT */}
        <div className="flex flex-col flex-shrink-0 gap-2 w-[33%]">
          <Cell src={grid.dining} label="Dining" height={loungeH} sizes="33vw" borderColor={borderColor} />
          <Cell src={grid.kitchen} label="Kitchen" height={bathroomH} sizes="33vw" borderColor={borderColor} />
        </div>
      </div>

      {/* MOBILE */}
      <div className="flex flex-col gap-4 mt-10 md:hidden">
        <Cell src={grid.bathroom} label="Bathroom" borderColor={borderColor} />
        <Cell src={grid.living} label="Living" borderColor={borderColor} />
        <Cell src={grid.dining} label="Dining" borderColor={borderColor} />
        <Cell src={grid.alliedAccessories} label="Allied Accessories" borderColor={borderColor} />
        <Cell src={grid.blank} label="" borderColor={borderColor} />
        <Cell src={grid.kitchen} label="Kitchen" borderColor={borderColor} />
      </div>
    </section>
  );
}