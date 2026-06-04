// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCallback, useEffect, useState } from "react";
// import Typography from "@/lib/Typography";
// import { BLOG_CONTENT, getBlogDiscoverCards } from "@/lib/constants/blogs";
// import { useTheme } from "@/lib/contexts/ThemeContext";

// const VISIBLE_LG = 4;
// const VISIBLE_MD = 2;
// const VISIBLE_SM = 1;

// function getVisibleCount(width: number) {
//   if (width >= 1024) return VISIBLE_LG;
//   if (width >= 640) return VISIBLE_MD;
//   return VISIBLE_SM;
// }

// export default function LuxuryDiscover() {
//   const { theme } = useTheme();
//   const [startIndex, setStartIndex] = useState(0);
//   const [visibleCount, setVisibleCount] = useState(VISIBLE_LG);

//   const isLuxury = theme === "luxury";
//   const cards = isLuxury ? getBlogDiscoverCards("luxury") : [];
//   const maxStart = Math.max(0, cards.length - visibleCount);
//   const canScroll = cards.length > visibleCount;
//   const canPrev = canScroll && startIndex > 0;
//   const canNext = canScroll && startIndex < maxStart;

//   useEffect(() => {
//     const update = () => setVisibleCount(getVisibleCount(window.innerWidth));
//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);

//   useEffect(() => {
//     setStartIndex((prev) => Math.min(prev, maxStart));
//   }, [maxStart]);

//   const goPrev = useCallback(() => {
//     setStartIndex((prev) => Math.max(0, prev - 1));
//   }, []);

//   const goNext = useCallback(() => {
//     setStartIndex((prev) => Math.min(maxStart, prev + 1));
//   }, [maxStart]);

//   if (!isLuxury) return null;

//   const { discover } = BLOG_CONTENT.luxury;

//   const trackWidthPercent = (cards.length / visibleCount) * 100;
//   const cardWidthPercent = 100 / cards.length;
//   const translatePercent = (startIndex / cards.length) * 100;

//   return (
//     <section className="w-full bg-black py-2 sm:py-2 md:py-4 lg:py-4">
//       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
//         <div className="flex flex-col items-center text-center gap-4 sm:gap-5 mb-8 sm:mb-10 md:mb-12">
//           <Typography
//             variant="display-2xl"
//             className="!text-white font-normal leading-tight max-w-[900px]"
//           >
//             {discover.title}
//           </Typography>
//           <Typography
//             variant="body-lg"
//             className="!text-white/90 font-light leading-relaxed max-w-[980px]"
//           >
//             {discover.intro}
//           </Typography>
//         </div>

//         <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
//           {canScroll && (
//             <button
//               type="button"
//               onClick={goPrev}
//               disabled={!canPrev}
//               aria-label="Previous articles"
//               className={`flex shrink-0 items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border transition-all duration-200 select-none ${
//                 canPrev
//                   ? "border-white/40 text-white hover:bg-white/10 cursor-pointer"
//                   : "border-white/10 text-white/20 cursor-not-allowed"
//               }`}
//             >
//               <span className="text-xl sm:text-2xl font-light leading-none" aria-hidden>
//                 ‹
//               </span>
//             </button>
//           )}

//           <div className="min-w-0 flex-1 overflow-hidden" role="list">
//             <div
//               className="flex transition-transform duration-500 ease-out"
//               style={{
//                 width: `${trackWidthPercent}%`,
//                 transform: `translateX(-${translatePercent}%)`,
//               }}
//             >
//               {cards.map((card, index) => (
//                 <Link
//                   key={`${card.href}-${index}`}
//                   href={card.href}
//                   role="listitem"
//                   style={{ width: `${cardWidthPercent}%` }}
//                   className="group relative shrink-0 aspect-[3/4] overflow-hidden border-r border-white/10 last:border-r-0"
//                 >
//                   <Image
//                     src={card.image}
//                     alt={card.title}
//                     fill
//                     className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
//                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                   />

//                   <div
//                     className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
//                     aria-hidden
//                   />

//                   <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-3 p-4 sm:p-5 md:p-6">
//                     <Typography
//                       variant="body-lg"
//                       className="!text-white font-light leading-snug text-left line-clamp-3"
//                     >
//                       {card.title}
//                     </Typography>
//                     <span className="inline-flex items-center gap-2 text-white/90 text-[11px] sm:text-xs tracking-[0.14em] uppercase font-light group-hover:text-white transition-colors">
//                       Read Artical
//                       <span aria-hidden className="text-base leading-none">
//                         →
//                       </span>
//                     </span>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {canScroll && (
//             <button
//               type="button"
//               onClick={goNext}
//               disabled={!canNext}
//               aria-label="Next articles"
//               className={`flex shrink-0 items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border transition-all duration-200 select-none ${
//                 canNext
//                   ? "border-white/40 text-white hover:bg-white/10 cursor-pointer"
//                   : "border-white/10 text-white/20 cursor-not-allowed"
//               }`}
//             >
//               <span className="text-xl sm:text-2xl font-light leading-none" aria-hidden>
//                 ›
//               </span>
//             </button>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Typography from "@/lib/Typography";
import { BLOG_CONTENT, getBlogDiscoverCards } from "@/lib/constants/blogs";
import { useTheme } from "@/lib/contexts/ThemeContext";

const VISIBLE_LG = 4;
const VISIBLE_MD = 2;
const VISIBLE_SM = 1;

const LUXURY_DISCOVER_TITLES = [
  "Designing a Modern Bathroom:A Complete Guide",
  "Flooring Ideas for Contemporary Living Rooms: Transform Your Space",
  "Bathroom Tile Ideas That Elevate Everyday Spaces",
  "The Importance of Quality Tile Accessories in Finishing",
  "Living Room Design Ideas with Tiles and Surfaces",
  "Designing a Stylish Dining Space: Transform Your Space",
  "Easy-to-Maintain Flooring for Dining Areas",
  "Bathroom Tile Ideas That Elevate Everyday Spaces",
  "The Importance of Quality Tile Accessories in Finishing",
  "Creating a Warm and Elegant Dining Ambience",
] as const;

function getVisibleCount(width: number) {
  if (width >= 1024) return VISIBLE_LG;
  if (width >= 640) return VISIBLE_MD;
  return VISIBLE_SM;
}

export default function LuxuryDiscover() {
  const { theme } = useTheme();
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(VISIBLE_LG);

  const isLuxury = theme === "luxury";
  const cards = isLuxury ? getBlogDiscoverCards("luxury") : [];
  const maxStart = Math.max(0, cards.length - visibleCount);
  const canScroll = cards.length > visibleCount;
  const canPrev = canScroll && startIndex > 0;
  const canNext = canScroll && startIndex < maxStart;

  useEffect(() => {
    const update = () => setVisibleCount(getVisibleCount(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    setStartIndex((prev) => Math.min(prev, maxStart));
  }, [maxStart]);

  const goPrev = useCallback(() => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const goNext = useCallback(() => {
    setStartIndex((prev) => Math.min(maxStart, prev + 1));
  }, [maxStart]);

  if (!isLuxury) return null;

  const { discover } = BLOG_CONTENT.luxury;

  const trackWidthPercent = (cards.length / visibleCount) * 100;
  const cardWidthPercent = 100 / cards.length;
  const translatePercent = (startIndex / cards.length) * 100;

  return (
    <section className="w-full bg-black py-2 sm:py-2 md:py-4 lg:py-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col items-center text-center gap-4 sm:gap-5 mb-8 sm:mb-10 md:mb-12">
          <Typography
            variant="display-2xl"
            className="!text-white font-normal leading-tight max-w-[900px]"
          >
            {discover.title}
          </Typography>
          <Typography
            variant="body-xl"
            className="!text-white/90 font-light leading-relaxed max-w-[860px]"
          >
            {discover.intro}
          </Typography>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
          {canScroll && (
            <button
              type="button"
              onClick={goPrev}
              disabled={!canPrev}
              aria-label="Previous articles"
              className={`flex shrink-0 items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border transition-all duration-200 select-none ${
                canPrev
                  ? "border-white/40 text-white hover:bg-white/10 cursor-pointer"
                  : "border-white/10 text-white/20 cursor-not-allowed"
              }`}
            >
              <span className="text-xl sm:text-2xl font-light leading-none" aria-hidden>
                ‹
              </span>
            </button>
          )}

          <div className="min-w-0 flex-1 overflow-hidden" role="list">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                width: `${trackWidthPercent}%`,
                transform: `translateX(-${translatePercent}%)`,
              }}
            >
              {cards.map((card, index) => (
                <Link
                  key={`${card.href}-${index}`}
                  href={card.href}
                  role="listitem"
                  style={{ width: `${cardWidthPercent}%` }}
                  className="group relative shrink-0 aspect-[1/1] xs:aspect-[5/6] sm:aspect-[2/3] md:aspect-[3/4] lg:aspect-[3/4] overflow-hidden border-r border-white/10 last:border-r-0"
                >
                  <Image
                    src={card.image}
                    alt={LUXURY_DISCOVER_TITLES[index]}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  <div
                    className="absolute inset-0 z-[1] bg-black/50 pointer-events-none opacity-100 transition-opacity duration-500 group-hover:opacity-0"
                    aria-hidden
                  />

                  <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-3 px-2 py-4">
                    <Typography
                      variant="body-lg"
                      className="!text-white font-light leading-snug text-left line-clamp-3"
                    >
                      {LUXURY_DISCOVER_TITLES[index]}
                    </Typography>
                    <Typography
                      variant="caption"
                      className="inline-flex items-center gap-2 !text-white !font-light tracking-[0.14em] group-hover:!text-white transition-colors"
                    >
                      Read Artical
                      <span aria-hidden className="text-base leading-none">
                        →
                      </span>
                    </Typography>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {canScroll && (
            <button
              type="button"
              onClick={goNext}
              disabled={!canNext}
              aria-label="Next articles"
              className={`flex shrink-0 items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border transition-all duration-200 select-none ${
                canNext
                  ? "border-white/40 text-white hover:bg-white/10 cursor-pointer"
                  : "border-white/10 text-white/20 cursor-not-allowed"
              }`}
            >
              <span className="text-xl sm:text-2xl font-light leading-none" aria-hidden>
                ›
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}