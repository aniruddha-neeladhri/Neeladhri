// "use client";

// import { useRef, useState, useEffect, useCallback } from "react";
// import Typography from "@/lib/Typography";
// import { useTheme } from "@/lib/contexts/ThemeContext";
// import { premiumReels, luxuryReels, reelsTheme } from "@/lib/constants/reels";

// export default function ReelsSection() {
//   const { theme } = useTheme();
//   const isLuxury = theme === "luxury";

//   const reels = isLuxury ? luxuryReels : premiumReels;
//   const colors = isLuxury ? reelsTheme.luxury : reelsTheme.premium;

//   const trackRef = useRef<HTMLDivElement>(null);
//   const [canScrollPrev, setCanScrollPrev] = useState(false);
//   const [canScrollNext, setCanScrollNext] = useState(true);

//   const updateScrollState = useCallback(() => {
//     const track = trackRef.current;
//     if (!track) return;
//     const maxScroll = track.scrollWidth - track.clientWidth;
//     setCanScrollPrev(track.scrollLeft > 4);
//     setCanScrollNext(track.scrollLeft < maxScroll - 4);
//   }, []);

//   useEffect(() => {
//     updateScrollState();
//     const track = trackRef.current;
//     if (!track) return;
//     track.addEventListener("scroll", updateScrollState, { passive: true });
//     window.addEventListener("resize", updateScrollState);
//     return () => {
//       track.removeEventListener("scroll", updateScrollState);
//       window.removeEventListener("resize", updateScrollState);
//     };
//   }, [updateScrollState, reels.length]);

//   const scrollByCard = (direction: "prev" | "next") => {
//     const track = trackRef.current;
//     if (!track) return;
//     const card = track.querySelector<HTMLElement>("[data-reel-card]");
//     if (!card) return;
//     const gap = parseInt(getComputedStyle(track).columnGap || "16", 10);
//     const cardWidth = card.offsetWidth + gap;
//     track.scrollBy({
//       left: direction === "next" ? cardWidth : -cardWidth,
//       behavior: "smooth",
//     });
//   };

//   const arrowBaseClass =
//     "absolute z-10 flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full border transition-all duration-300 shadow-sm focus:outline-none disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 active:scale-95";

//   return (
//     <section
//       id="homereels"
//       className="relative z-[101] w-full py-4 md:py-6 lg:py-8 px-3 md:px-4 lg:px-8"
//     >
//       <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-6 md:gap-8 lg:gap-10 rounded-3xl p-3 md:p-4 lg:p-6">

//         {/* Handle */}
//         <Typography
//           variant="body-lg"
//           className={`text-center tracking-wide ${
//             isLuxury ? "font-roboto-slab font-light" : "font-poppins font-medium"
//           }`}
//           style={{ color: colors.handleColor }}
//         >
//           @neeladhriceramics
//         </Typography>

//         {/*
//           Carousel wrapper. Width below md is a single fixed value (not vw-based)
//           so the window and the card inside it always match exactly — no partial
//           second card peeking in. From md up it widens to fit 3 fixed-width cards.
//           py-6 here gives the arrows room to sit below/outside the cards without
//           touching them.
//         */}
//         <div className="relative w-full max-w-[280px] md:max-w-none md:w-[722px] lg:w-[812px] xl:w-[872px] py-2 md:py-3">

//           {/* Visible window: 1 card below md, 3 cards from md up */}
//           <div className="overflow-hidden w-full">
//             <div
//               ref={trackRef}
//               className="flex gap-3 md:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
//             >
//               {reels.map((reel) => (
//                 <div
//                   key={reel.id}
//                   data-reel-card
//                   className="relative shrink-0 snap-center md:snap-start w-full md:w-[230px] lg:w-[260px] xl:w-[280px] aspect-[9/16] rounded-xl overflow-hidden shadow-lg border border-white/5 flex items-center justify-center"
//                   style={{ backgroundColor: colors.cardBg }}
//                 >
//                   {reel.videoSrc ? (
//                     <video
//                       src={reel.videoSrc}
//                       poster={reel.poster}
//                       autoPlay
//                       muted
//                       loop
//                       playsInline
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <>
//                       <svg
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke={colors.arrowColor}
//                         strokeWidth={1.5}
//                         className="w-10 h-10 md:w-12 md:h-12 opacity-40"
//                       >
//                         <polygon points="5 3 19 12 5 21 5 3"></polygon>
//                       </svg>
//                       <Typography
//                         variant="caption"
//                         className={`absolute bottom-4 left-0 right-0 text-center uppercase tracking-wider opacity-60 ${
//                           isLuxury ? "font-roboto-slab font-light" : "font-poppins font-medium"
//                         }`}
//                         style={{ color: colors.bodyColor }}
//                       >
//                         Coming soon
//                       </Typography>
//                     </>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Prev Arrow — pulled clear of the row, bottom-left */}
//           <button
//             type="button"
//             aria-label="Previous"
//             onClick={() => scrollByCard("prev")}
//             disabled={!canScrollPrev}
//             className={`${arrowBaseClass} -bottom-6 -left-6 md:-bottom-7 md:-left-8`}
//             style={{
//               backgroundColor: colors.arrowBg,
//               borderColor: colors.arrowBorder,
//               color: colors.arrowColor,
//             }}
//           >
//             <svg
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="w-4 h-4"
//             >
//               <polyline points="15 18 9 12 15 6"></polyline>
//             </svg>
//           </button>

//           {/* Next Arrow — pulled clear of the row, bottom-right */}
//           <button
//             type="button"
//             aria-label="Next"
//             onClick={() => scrollByCard("next")}
//             disabled={!canScrollNext}
//             className={`${arrowBaseClass} -bottom-6 -right-6 md:-bottom-7 md:-right-8`}
//             style={{
//               backgroundColor: colors.arrowBg,
//               borderColor: colors.arrowBorder,
//               color: colors.arrowColor,
//             }}
//           >
//             <svg
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="w-4 h-4"
//             >
//               <polyline points="9 18 15 12 9 6"></polyline>
//             </svg>
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { premiumReels, luxuryReels, reelsTheme } from "@/lib/constants/reels";

export default function ReelsSection() {
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";

  const reels = isLuxury ? luxuryReels : premiumReels;
  const colors = isLuxury ? reelsTheme.luxury : reelsTheme.premium;

  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanScrollPrev(track.scrollLeft > 4);
    setCanScrollNext(track.scrollLeft < maxScroll - 4);
  }, []);

  useEffect(() => {
    updateScrollState();
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      track.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState, reels.length]);

  const scrollByCard = (direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-reel-card]");
    if (!card) return;
    const gap = parseInt(getComputedStyle(track).columnGap || "16", 10);
    const cardWidth = card.offsetWidth + gap;
    track.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };
const arrowBaseClass =
  "absolute z-10 flex items-center justify-center w-7 h-7 md:w-6 md:h-6 rounded-full border transition-all duration-300 shadow-sm focus:outline-none disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 active:scale-95";
  return (
    <section
      id="homereels"
      className="relative z-[101] w-full py-2 md:py-2 lg:py-2 px-3 md:px-4 lg:px-8"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-6 md:gap-1 lg:gap-10 rounded-3xl p-3 md:p-4 lg:p-6">

        {/* Handle */}
        <Typography
          variant="display-xl"
          className={`text-center tracking-wide ${
            isLuxury ? "font-roboto-slab font-light" : "font-poppins font-light"
          }`}
          style={{ color: colors.handleColor }}
        >
          @neeladhriceramics
        </Typography>

        {/*
          Carousel wrapper. Width below md is a single fixed value (not vw-based)
          so the window and the card inside it always match exactly — no partial
          second card peeking in. From md up it widens to fit 3 fixed-width cards.
          pt-8/pt-9 here gives the arrows room to sit above the cards without
          touching them.
        */}
        <div className="relative w-full max-w-[280px] md:max-w-none md:w-[720px] lg:w-[812px] xl:w-[872px] pt-2 md:pt-6 lg:pt-2">

          {/* Visible window: 1 card below md, 3 cards from md up */}
          <div className="overflow-hidden w-full">
            <div
              ref={trackRef}
              className="flex gap-3 md:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {reels.map((reel) => (
                <div
                  key={reel.id}
                  data-reel-card
                  className="relative shrink-0 snap-center md:snap-start w-full md:w-[230px] lg:w-[260px] xl:w-[280px] aspect-[9/16] overflow-hidden shadow-lg border border-white/5 flex items-center justify-center"
                  style={{ backgroundColor: colors.cardBg }}
                >
                  {reel.videoSrc ? (
                    <video
                      src={reel.videoSrc}
                      poster={reel.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={colors.arrowColor}
                        strokeWidth={1.5}
                        className="w-10 h-10 md:w-12 md:h-12 opacity-40"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                     
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Prev Arrow — top-left, pulled further left for clearance */}
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollByCard("prev")}
            disabled={!canScrollPrev}
            className={`${arrowBaseClass} bottom-0 -left-9 md:-left-6 lg:-left-12`}
            style={{
              backgroundColor: colors.arrowBg,
              borderColor: colors.arrowBorder,
              color: colors.arrowColor,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Next Arrow — top-right, pulled further right for clearance */}
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollByCard("next")}
            disabled={!canScrollNext}
            className={`${arrowBaseClass} bottom-0 -right-9 md:-right-6 lg:-right-12`}
            style={{
              backgroundColor: colors.arrowBg,
              borderColor: colors.arrowBorder,
              color: colors.arrowColor,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}