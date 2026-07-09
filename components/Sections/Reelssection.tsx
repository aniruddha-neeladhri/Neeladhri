// // // // // "use client";

// // // // // import { useRef, useState, useEffect, useCallback } from "react";
// // // // // import Typography from "@/lib/Typography";
// // // // // import { useTheme } from "@/lib/contexts/ThemeContext";
// // // // // import { premiumReels, luxuryReels, reelsTheme, type Reel } from "@/lib/constants/reels";

// // // // // function getInstagramReelId(url: string): string | null {
// // // // //   const match = url.match(/instagram\.com\/(?:reel|p)\/([^/?]+)/);
// // // // //   return match?.[1] ?? null;
// // // // // }

// // // // // function getInstagramEmbedUrl(url: string): string | null {
// // // // //   const reelId = getInstagramReelId(url);
// // // // //   return reelId
// // // // //     ? `https://www.instagram.com/reel/${reelId}/embed/?hidecaption=1`
// // // // //     : null;
// // // // // }

// // // // // function isInstagramReel(url?: string): boolean {
// // // // //   return Boolean(url && getInstagramReelId(url));
// // // // // }

// // // // // const IG_EMBED_WIDTH = 400;
// // // // // const IG_EMBED_HEADER_HEIGHT = 62;
// // // // // const IG_EMBED_HEIGHT = 710;

// // // // // type ReelCardProps = {
// // // // //   reel: Reel;
// // // // //   arrowColor: string;
// // // // // };

// // // // // function ReelCard({ reel, arrowColor }: ReelCardProps) {
// // // // //   const igEmbedUrl = reel.videoSrc ? getInstagramEmbedUrl(reel.videoSrc) : null;
// // // // //   const isInstagram = Boolean(igEmbedUrl);

// // // // //   const containerRef = useRef<HTMLDivElement>(null);
// // // // //   const [scale, setScale] = useState(1);

// // // // //   useEffect(() => {
// // // // //     if (!isInstagram || !containerRef.current) return;
// // // // //     const el = containerRef.current;

// // // // //     const updateScale = () => {
// // // // //       setScale(el.clientWidth / IG_EMBED_WIDTH);
// // // // //     };
// // // // //     updateScale();

// // // // //     const observer = new ResizeObserver(updateScale);
// // // // //     observer.observe(el);
// // // // //     return () => observer.disconnect();
// // // // //   }, [isInstagram]);

// // // // //   return (
// // // // //     <div
// // // // //       data-reel-card
// // // // //       className="relative shrink-0 snap-center md:snap-start w-full md:w-[230px] lg:w-[260px] xl:w-[280px] aspect-[9/16] overflow-hidden shadow-lg border border-white/5"
// // // // //     >
// // // // //       {isInstagram ? (
// // // // //         <div ref={containerRef} className="absolute inset-0 overflow-hidden">
// // // // //           <div
// // // // //             className="absolute left-0 top-0 origin-top-left"
// // // // //             style={{
// // // // //               width: `${IG_EMBED_WIDTH}px`,
// // // // //               transform: `scale(${scale})`,
// // // // //               marginTop: `${-IG_EMBED_HEADER_HEIGHT}px`,
// // // // //             }}
// // // // //           >
// // // // //             <iframe
// // // // //               src={igEmbedUrl!}
// // // // //               width={IG_EMBED_WIDTH}
// // // // //               height={IG_EMBED_HEIGHT}
// // // // //               className="block border-0"
// // // // //               scrolling="no"
// // // // //               allow="autoplay; encrypted-media"
// // // // //               allowFullScreen
// // // // //               title={reel.id}
// // // // //             />
// // // // //           </div>
// // // // //         </div>
// // // // //       ) : reel.videoSrc ? (
// // // // //         <video
// // // // //           src={reel.videoSrc}
// // // // //           poster={reel.poster}
// // // // //           autoPlay
// // // // //           muted
// // // // //           loop
// // // // //           playsInline
// // // // //           className="w-full h-full object-cover"
// // // // //         />
// // // // //       ) : (
// // // // //         <div className="flex h-full items-center justify-center">
// // // // //           <svg
// // // // //             viewBox="0 0 24 24"
// // // // //             fill="none"
// // // // //             stroke={arrowColor}
// // // // //             strokeWidth={1.5}
// // // // //             className="w-10 h-10 md:w-12 md:h-12 opacity-40"
// // // // //           >
// // // // //             <polygon points="5 3 19 12 5 21 5 3" />
// // // // //           </svg>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default function ReelsSection() {
// // // // //   const { theme } = useTheme();
// // // // //   const isLuxury = theme === "luxury";

// // // // //   const reels = (isLuxury ? luxuryReels : premiumReels).filter((reel) =>
// // // // //     isLuxury ? isInstagramReel(reel.videoSrc) : Boolean(reel.videoSrc),
// // // // //   );
// // // // //   const colors = isLuxury ? reelsTheme.luxury : reelsTheme.premium;

// // // // //   const trackRef = useRef<HTMLDivElement>(null);
// // // // //   const [canScrollPrev, setCanScrollPrev] = useState(false);
// // // // //   const [canScrollNext, setCanScrollNext] = useState(true);

// // // // //   const updateScrollState = useCallback(() => {
// // // // //     const track = trackRef.current;
// // // // //     if (!track) return;
// // // // //     const maxScroll = track.scrollWidth - track.clientWidth;
// // // // //     setCanScrollPrev(track.scrollLeft > 4);
// // // // //     setCanScrollNext(track.scrollLeft < maxScroll - 4);
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     updateScrollState();
// // // // //     const track = trackRef.current;
// // // // //     if (!track) return;
// // // // //     track.addEventListener("scroll", updateScrollState, { passive: true });
// // // // //     window.addEventListener("resize", updateScrollState);
// // // // //     return () => {
// // // // //       track.removeEventListener("scroll", updateScrollState);
// // // // //       window.removeEventListener("resize", updateScrollState);
// // // // //     };
// // // // //   }, [updateScrollState, reels.length]);

// // // // //   const scrollByCard = (direction: "prev" | "next") => {
// // // // //     const track = trackRef.current;
// // // // //     if (!track) return;
// // // // //     const card = track.querySelector<HTMLElement>("[data-reel-card]");
// // // // //     if (!card) return;
// // // // //     const gap = parseInt(getComputedStyle(track).columnGap || "16", 10);
// // // // //     const cardWidth = card.offsetWidth + gap;
// // // // //     track.scrollBy({
// // // // //       left: direction === "next" ? cardWidth : -cardWidth,
// // // // //       behavior: "smooth",
// // // // //     });
// // // // //   };

// // // // //   const arrowBaseClass =
// // // // //     "absolute z-10 flex items-center justify-center w-7 h-7 md:w-6 md:h-6 rounded-full border transition-all duration-300 shadow-sm focus:outline-none disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 active:scale-95";

// // // // //   if (reels.length === 0) return null;

// // // // //   return (
// // // // //     <section
// // // // //       id="homereels"
// // // // //       className="relative z-[101] w-full py-2 md:py-2 lg:py-2 px-3 md:px-4 lg:px-8"
// // // // //     >
// // // // //       <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-6 md:gap-1 lg:gap-10 rounded-3xl p-3 md:p-4 lg:p-6">
// // // // //         <Typography
// // // // //           variant="display-xl"
// // // // //           className={`text-center tracking-wide ${
// // // // //             isLuxury ? "font-roboto-slab font-light" : "font-poppins font-light"
// // // // //           }`}
// // // // //           style={{ color: colors.handleColor }}
// // // // //         >
// // // // //           @neeladhriceramics
// // // // //         </Typography>

// // // // //         <div className="relative w-full max-w-[280px] md:max-w-none md:w-[720px] lg:w-[812px] xl:w-[872px] pt-2 md:pt-6 lg:pt-2">
// // // // //           <div className="overflow-hidden w-full">
// // // // //             <div
// // // // //               ref={trackRef}
// // // // //               className="flex gap-3 md:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
// // // // //             >
// // // // //               {reels.map((reel) => (
// // // // //                 <ReelCard key={reel.id} reel={reel} arrowColor={colors.arrowColor} />
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>

// // // // //           <button
// // // // //             type="button"
// // // // //             aria-label="Previous"
// // // // //             onClick={() => scrollByCard("prev")}
// // // // //             disabled={!canScrollPrev}
// // // // //             className={`${arrowBaseClass} bottom-16 -left-9 md:-left-6 lg:-left-12`}
// // // // //             style={{
// // // // //               backgroundColor: colors.arrowBg,
// // // // //               borderColor: colors.arrowBorder,
// // // // //               color: colors.arrowColor,
// // // // //             }}
// // // // //           >
// // // // //             <svg
// // // // //               viewBox="0 0 24 24"
// // // // //               fill="none"
// // // // //               stroke="currentColor"
// // // // //               strokeWidth={2}
// // // // //               strokeLinecap="round"
// // // // //               strokeLinejoin="round"
// // // // //               className="w-4 h-4"
// // // // //             >
// // // // //               <polyline points="15 18 9 12 15 6" />
// // // // //             </svg>
// // // // //           </button>

// // // // //           <button
// // // // //             type="button"
// // // // //             aria-label="Next"
// // // // //             onClick={() => scrollByCard("next")}
// // // // //             disabled={!canScrollNext}
// // // // //             className={`${arrowBaseClass} bottom-16 -right-9 md:-right-6 lg:-right-12`}
// // // // //             style={{
// // // // //               backgroundColor: colors.arrowBg,
// // // // //               borderColor: colors.arrowBorder,
// // // // //               color: colors.arrowColor,
// // // // //             }}
// // // // //           >
// // // // //             <svg
// // // // //               viewBox="0 0 24 24"
// // // // //               fill="none"
// // // // //               stroke="currentColor"
// // // // //               strokeWidth={2}
// // // // //               strokeLinecap="round"
// // // // //               strokeLinejoin="round"
// // // // //               className="w-4 h-4"
// // // // //             >
// // // // //               <polyline points="9 18 15 12 9 6" />
// // // // //             </svg>
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }

// // // // "use client";

// // // // import { useRef, useState, useEffect, useCallback } from "react";
// // // // import Typography from "@/lib/Typography";
// // // // import { useTheme } from "@/lib/contexts/ThemeContext";
// // // // import { premiumReels, luxuryReels, reelsTheme, type Reel } from "@/lib/constants/reels";

// // // // function getInstagramReelId(url: string): string | null {
// // // //   const match = url.match(/instagram\.com\/(?:reel|p)\/([^/?]+)/);
// // // //   return match?.[1] ?? null;
// // // // }

// // // // function getInstagramEmbedUrl(url: string): string | null {
// // // //   const reelId = getInstagramReelId(url);
// // // //   return reelId
// // // //     ? `https://www.instagram.com/reel/${reelId}/embed/?hidecaption=1`
// // // //     : null;
// // // // }

// // // // function isInstagramReel(url?: string): boolean {
// // // //   return Boolean(url && getInstagramReelId(url));
// // // // }

// // // // const IG_EMBED_WIDTH = 400;
// // // // const IG_EMBED_HEADER_HEIGHT = 62;
// // // // const IG_EMBED_HEIGHT = 710;
// // // // // Extra zoom (uniform, no stretching) to eat Instagram's internal video
// // // // // padding so the video reaches the same edges as the footer card.
// // // // const IG_VIDEO_ZOOM = 1.02;

// // // // type ReelCardProps = {
// // // //   reel: Reel;
// // // //   arrowColor: string;
// // // // };

// // // // function ReelCard({ reel, arrowColor }: ReelCardProps) {
// // // //   const igEmbedUrl = reel.videoSrc ? getInstagramEmbedUrl(reel.videoSrc) : null;
// // // //   const isInstagram = Boolean(igEmbedUrl);

// // // //   const containerRef = useRef<HTMLDivElement>(null);
// // // //   const [scale, setScale] = useState(1);

// // // //   useEffect(() => {
// // // //     if (!isInstagram || !containerRef.current) return;
// // // //     const el = containerRef.current;

// // // //     const updateScale = () => {
// // // //       setScale(el.clientWidth / IG_EMBED_WIDTH);
// // // //     };
// // // //     updateScale();

// // // //     const observer = new ResizeObserver(updateScale);
// // // //     observer.observe(el);
// // // //     return () => observer.disconnect();
// // // //   }, [isInstagram]);

// // // //   const effectiveScale = scale * IG_VIDEO_ZOOM;
// // // //   // Header offset must grow with zoom (it's hiding 62px of *iframe content*,
// // // //   // which becomes 62 * effectiveScale screen-pixels once scaled) — so this
// // // //   // is computed in JS as a plain `top` value, not baked into the transform.
// // // //   const headerOffsetPx = -IG_EMBED_HEADER_HEIGHT * effectiveScale;

// // // //   return (
// // // //     <div
// // // //       data-reel-card
// // // //       className="relative shrink-0 snap-center md:snap-start w-full md:w-[230px] lg:w-[260px] xl:w-[280px] aspect-[9/16] overflow-hidden shadow-lg border border-white/5"
// // // //     >
// // // //       {isInstagram ? (
// // // //         <div ref={containerRef} className="absolute inset-0 overflow-hidden">
// // // //           <div
// // // //             style={{
// // // //               position: "absolute",
// // // //               left: "50%",
// // // //               // Static horizontal centering, independent of scale — half
// // // //               // of the iframe's fixed 400px width, never multiplied by zoom.
// // // //               marginLeft: `${-IG_EMBED_WIDTH / 2}px`,
// // // //               top: `${headerOffsetPx}px`,
// // // //               width: `${IG_EMBED_WIDTH}px`,
// // // //               // transform does ONLY scale — no translate mixed in, so
// // // //               // there's no composition-order ambiguity left to get wrong.
// // // //               transform: `scale(${effectiveScale})`,
// // // //               transformOrigin: "top center",
// // // //             }}
// // // //           >
// // // //             <iframe
// // // //               src={igEmbedUrl!}
// // // //               width={IG_EMBED_WIDTH}
// // // //               height={IG_EMBED_HEIGHT}
// // // //               className="block border-0"
// // // //               scrolling="no"
// // // //               allow="autoplay; encrypted-media"
// // // //               allowFullScreen
// // // //               title={reel.id}
// // // //             />
// // // //           </div>
// // // //         </div>
// // // //       ) : reel.videoSrc ? (
// // // //         <video
// // // //           src={reel.videoSrc}
// // // //           poster={reel.poster}
// // // //           autoPlay
// // // //           muted
// // // //           loop
// // // //           playsInline
// // // //           className="w-full h-full object-cover"
// // // //         />
// // // //       ) : (
// // // //         <div className="flex h-full items-center justify-center">
// // // //           <svg
// // // //             viewBox="0 0 24 24"
// // // //             fill="none"
// // // //             stroke={arrowColor}
// // // //             strokeWidth={1.5}
// // // //             className="w-10 h-10 md:w-12 md:h-12 opacity-40"
// // // //           >
// // // //             <polygon points="5 3 19 12 5 21 5 3" />
// // // //           </svg>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default function ReelsSection() {
// // // //   const { theme } = useTheme();
// // // //   const isLuxury = theme === "luxury";

// // // //   const reels = (isLuxury ? luxuryReels : premiumReels).filter((reel) =>
// // // //     isLuxury ? isInstagramReel(reel.videoSrc) : Boolean(reel.videoSrc),
// // // //   );
// // // //   const colors = isLuxury ? reelsTheme.luxury : reelsTheme.premium;

// // // //   const trackRef = useRef<HTMLDivElement>(null);
// // // //   const [canScrollPrev, setCanScrollPrev] = useState(false);
// // // //   const [canScrollNext, setCanScrollNext] = useState(true);

// // // //   const updateScrollState = useCallback(() => {
// // // //     const track = trackRef.current;
// // // //     if (!track) return;
// // // //     const maxScroll = track.scrollWidth - track.clientWidth;
// // // //     setCanScrollPrev(track.scrollLeft > 4);
// // // //     setCanScrollNext(track.scrollLeft < maxScroll - 4);
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     updateScrollState();
// // // //     const track = trackRef.current;
// // // //     if (!track) return;
// // // //     track.addEventListener("scroll", updateScrollState, { passive: true });
// // // //     window.addEventListener("resize", updateScrollState);
// // // //     return () => {
// // // //       track.removeEventListener("scroll", updateScrollState);
// // // //       window.removeEventListener("resize", updateScrollState);
// // // //     };
// // // //   }, [updateScrollState, reels.length]);

// // // //   const scrollByCard = (direction: "prev" | "next") => {
// // // //     const track = trackRef.current;
// // // //     if (!track) return;
// // // //     const card = track.querySelector<HTMLElement>("[data-reel-card]");
// // // //     if (!card) return;
// // // //     const gap = parseInt(getComputedStyle(track).columnGap || "16", 10);
// // // //     const cardWidth = card.offsetWidth + gap;
// // // //     track.scrollBy({
// // // //       left: direction === "next" ? cardWidth : -cardWidth,
// // // //       behavior: "smooth",
// // // //     });
// // // //   };

// // // //   const arrowBaseClass =
// // // //     "absolute z-10 flex items-center justify-center w-7 h-7 md:w-6 md:h-6 rounded-full border transition-all duration-300 shadow-sm focus:outline-none disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 active:scale-95";

// // // //   if (reels.length === 0) return null;

// // // //   return (
// // // //     <section
// // // //       id="homereels"
// // // //       className="relative z-[101] w-full py-2 md:py-2 lg:py-2 px-3 md:px-4 lg:px-8"
// // // //     >
// // // //       <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-6 md:gap-1 lg:gap-10 rounded-3xl p-3 md:p-4 lg:p-6">
// // // //         <Typography
// // // //           variant="display-xl"
// // // //           className={`text-center tracking-wide ${
// // // //             isLuxury ? "font-roboto-slab font-light" : "font-poppins font-light"
// // // //           }`}
// // // //           style={{ color: colors.handleColor }}
// // // //         >
// // // //           @neeladhriceramics
// // // //         </Typography>

// // // //         <div className="relative w-full max-w-[280px] md:max-w-none md:w-[720px] lg:w-[812px] xl:w-[872px] pt-2 md:pt-6 lg:pt-2">
// // // //           <div className="overflow-hidden w-full">
// // // //             <div
// // // //               ref={trackRef}
// // // //               className="flex gap-3 md:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
// // // //             >
// // // //               {reels.map((reel) => (
// // // //                 <ReelCard key={reel.id} reel={reel} arrowColor={colors.arrowColor} />
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           <button
// // // //             type="button"
// // // //             aria-label="Previous"
// // // //             onClick={() => scrollByCard("prev")}
// // // //             disabled={!canScrollPrev}
// // // //             className={`${arrowBaseClass} bottom-16 -left-9 md:-left-6 lg:-left-12`}
// // // //             style={{
// // // //               backgroundColor: colors.arrowBg,
// // // //               borderColor: colors.arrowBorder,
// // // //               color: colors.arrowColor,
// // // //             }}
// // // //           >
// // // //             <svg
// // // //               viewBox="0 0 24 24"
// // // //               fill="none"
// // // //               stroke="currentColor"
// // // //               strokeWidth={2}
// // // //               strokeLinecap="round"
// // // //               strokeLinejoin="round"
// // // //               className="w-4 h-4"
// // // //             >
// // // //               <polyline points="15 18 9 12 15 6" />
// // // //             </svg>
// // // //           </button>

// // // //           <button
// // // //             type="button"
// // // //             aria-label="Next"
// // // //             onClick={() => scrollByCard("next")}
// // // //             disabled={!canScrollNext}
// // // //             className={`${arrowBaseClass} bottom-16 -right-9 md:-right-6 lg:-right-12`}
// // // //             style={{
// // // //               backgroundColor: colors.arrowBg,
// // // //               borderColor: colors.arrowBorder,
// // // //               color: colors.arrowColor,
// // // //             }}
// // // //           >
// // // //             <svg
// // // //               viewBox="0 0 24 24"
// // // //               fill="none"
// // // //               stroke="currentColor"
// // // //               strokeWidth={2}
// // // //               strokeLinecap="round"
// // // //               strokeLinejoin="round"
// // // //               className="w-4 h-4"
// // // //             >
// // // //               <polyline points="9 18 15 12 9 6" />
// // // //             </svg>
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // "use client";

// // // import { useRef, useState, useEffect, useCallback } from "react";
// // // import Typography from "@/lib/Typography";
// // // import { useTheme } from "@/lib/contexts/ThemeContext";
// // // import { premiumReels, luxuryReels, reelsTheme, type Reel } from "@/lib/constants/reels";

// // // function getInstagramReelId(url: string): string | null {
// // //   const match = url.match(/instagram\.com\/(?:reel|p)\/([^/?]+)/);
// // //   return match?.[1] ?? null;
// // // }

// // // function getInstagramEmbedUrl(url: string): string | null {
// // //   const reelId = getInstagramReelId(url);
// // //   return reelId
// // //     ? `https://www.instagram.com/reel/${reelId}/embed/?hidecaption=1`
// // //     : null;
// // // }

// // // function isInstagramReel(url?: string): boolean {
// // //   return Boolean(url && getInstagramReelId(url));
// // // }

// // // const IG_EMBED_WIDTH = 400;
// // // const IG_EMBED_HEADER_HEIGHT = 62;
// // // const IG_EMBED_HEIGHT = 710;
// // // // Extra zoom (uniform, no stretching) to eat Instagram's internal video
// // // // padding so the video reaches the same edges as the footer card.
// // // const IG_VIDEO_ZOOM = 1.02;

// // // type ReelCardProps = {
// // //   reel: Reel;
// // //   arrowColor: string;
// // // };

// // // function ReelCard({ reel, arrowColor }: ReelCardProps) {
// // //   const igEmbedUrl = reel.videoSrc ? getInstagramEmbedUrl(reel.videoSrc) : null;
// // //   const isInstagram = Boolean(igEmbedUrl);

// // //   const containerRef = useRef<HTMLDivElement>(null);
// // //   const [scale, setScale] = useState(1);

// // //   useEffect(() => {
// // //     if (!isInstagram || !containerRef.current) return;
// // //     const el = containerRef.current;

// // //     const updateScale = () => {
// // //       setScale(el.clientWidth / IG_EMBED_WIDTH);
// // //     };
// // //     updateScale();

// // //     const observer = new ResizeObserver(updateScale);
// // //     observer.observe(el);
// // //     return () => observer.disconnect();
// // //   }, [isInstagram]);

// // //   const effectiveScale = scale * IG_VIDEO_ZOOM;
// // //   // Header offset must grow with zoom (it's hiding 62px of *iframe content*,
// // //   // which becomes 62 * effectiveScale screen-pixels once scaled) — so this
// // //   // is computed in JS as a plain `top` value, not baked into the transform.
// // //   const headerOffsetPx = -IG_EMBED_HEADER_HEIGHT * effectiveScale;

// // //   return (
// // //     <div
// // //       data-reel-card
// // //       className="relative shrink-0 snap-center md:snap-start w-full md:w-[230px] lg:w-[260px] xl:w-[280px] aspect-[9/16] overflow-hidden shadow-lg border border-white/5"
// // //     >
// // //       {isInstagram ? (
// // //         <div ref={containerRef} className="absolute inset-0 overflow-hidden">
// // //           <div
// // //             style={{
// // //               position: "absolute",
// // //               left: "50%",
// // //               // Static horizontal centering, independent of scale — half
// // //               // of the iframe's fixed 400px width, never multiplied by zoom.
// // //               marginLeft: `${-IG_EMBED_WIDTH / 2}px`,
// // //               top: `${headerOffsetPx}px`,
// // //               width: `${IG_EMBED_WIDTH}px`,
// // //               // transform does ONLY scale — no translate mixed in, so
// // //               // there's no composition-order ambiguity left to get wrong.
// // //               transform: `scale(${effectiveScale})`,
// // //               transformOrigin: "top center",
// // //             }}
// // //           >
// // //             <iframe
// // //               src={igEmbedUrl!}
// // //               width={IG_EMBED_WIDTH}
// // //               height={IG_EMBED_HEIGHT}
// // //               className="block border-0"
// // //               scrolling="no"
// // //               allow="autoplay; encrypted-media"
// // //               allowFullScreen
// // //               title={reel.id}
// // //             />
// // //           </div>
// // //         </div>
// // //       ) : reel.videoSrc ? (
// // //         <video
// // //           src={reel.videoSrc}
// // //           poster={reel.poster}
// // //           autoPlay
// // //           muted
// // //           loop
// // //           playsInline
// // //           className="w-full h-full object-cover"
// // //         />
// // //       ) : (
// // //         <div className="flex h-full items-center justify-center">
// // //           <svg
// // //             viewBox="0 0 24 24"
// // //             fill="none"
// // //             stroke={arrowColor}
// // //             strokeWidth={1.5}
// // //             className="w-10 h-10 md:w-12 md:h-12 opacity-40"
// // //           >
// // //             <polygon points="5 3 19 12 5 21 5 3" />
// // //           </svg>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default function ReelsSection() {
// // //   const { theme } = useTheme();
// // //   const isLuxury = theme === "luxury";

// // //   const reels = (isLuxury ? luxuryReels : premiumReels).filter((reel) =>
// // //     isLuxury ? isInstagramReel(reel.videoSrc) : Boolean(reel.videoSrc),
// // //   );
// // //   const colors = isLuxury ? reelsTheme.luxury : reelsTheme.premium;

// // //   const trackRef = useRef<HTMLDivElement>(null);
// // //   const [canScrollPrev, setCanScrollPrev] = useState(false);
// // //   const [canScrollNext, setCanScrollNext] = useState(true);

// // //   const updateScrollState = useCallback(() => {
// // //     const track = trackRef.current;
// // //     if (!track) return;
// // //     const maxScroll = track.scrollWidth - track.clientWidth;
// // //     setCanScrollPrev(track.scrollLeft > 4);
// // //     setCanScrollNext(track.scrollLeft < maxScroll - 4);
// // //   }, []);

// // //   useEffect(() => {
// // //     updateScrollState();
// // //     const track = trackRef.current;
// // //     if (!track) return;
// // //     track.addEventListener("scroll", updateScrollState, { passive: true });
// // //     window.addEventListener("resize", updateScrollState);
// // //     return () => {
// // //       track.removeEventListener("scroll", updateScrollState);
// // //       window.removeEventListener("resize", updateScrollState);
// // //     };
// // //   }, [updateScrollState, reels.length]);

// // //   const scrollByCard = (direction: "prev" | "next") => {
// // //     const track = trackRef.current;
// // //     if (!track) return;
// // //     const card = track.querySelector<HTMLElement>("[data-reel-card]");
// // //     if (!card) return;
// // //     const gap = parseInt(getComputedStyle(track).columnGap || "16", 10);
// // //     const cardWidth = card.offsetWidth + gap;
// // //     track.scrollBy({
// // //       left: direction === "next" ? cardWidth : -cardWidth,
// // //       behavior: "smooth",
// // //     });
// // //   };

// // //   const arrowBaseClass =
// // //     "absolute z-10 flex items-center justify-center w-7 h-7 md:w-6 md:h-6 rounded-full border transition-all duration-300 shadow-sm focus:outline-none disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 active:scale-95";

// // //   if (reels.length === 0) return null;

// // //   return (
// // //     <section
// // //       id="homereels"
// // //       className="relative z-[101] w-full py-2 md:py-2 lg:py-2 px-3 md:px-4 lg:px-8"
// // //     >
// // //       <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-6 md:gap-1 lg:gap-10 rounded-3xl p-3 md:p-4 lg:p-6">
// // //         <Typography
// // //           variant="display-xl"
// // //           className={`text-center tracking-wide ${
// // //             isLuxury ? "font-roboto-slab font-light" : "font-poppins font-light"
// // //           }`}
// // //           style={{ color: colors.handleColor }}
// // //         >
// // //           @neeladhriceramics
// // //         </Typography>

// // //         <div className="relative w-full max-w-[280px] md:max-w-none md:w-[720px] lg:w-[812px] xl:w-[872px] pt-2 md:pt-6 lg:pt-2">
// // //           <div className="overflow-hidden w-full">
// // //             <div
// // //               ref={trackRef}
// // //               className="flex gap-3 md:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
// // //             >
// // //               {reels.map((reel) => (
// // //                 <ReelCard key={reel.id} reel={reel} arrowColor={colors.arrowColor} />
// // //               ))}
// // //             </div>
// // //           </div>

// // //           <button
// // //             type="button"
// // //             aria-label="Previous"
// // //             onClick={() => scrollByCard("prev")}
// // //             disabled={!canScrollPrev}
// // //             className={`${arrowBaseClass} bottom-12 -left-10 md:-left-6 lg:-left-12`}
// // //             style={{
// // //               backgroundColor: colors.arrowBg,
// // //               borderColor: colors.arrowBorder,
// // //               color: colors.arrowColor,
// // //             }}
// // //           >
// // //             <svg
// // //               viewBox="0 0 24 24"
// // //               fill="none"
// // //               stroke="currentColor"
// // //               strokeWidth={2}
// // //               strokeLinecap="round"
// // //               strokeLinejoin="round"
// // //               className="w-4 h-4"
// // //             >
// // //               <polyline points="15 18 9 12 15 6" />
// // //             </svg>
// // //           </button>

// // //           <button
// // //             type="button"
// // //             aria-label="Next"
// // //             onClick={() => scrollByCard("next")}
// // //             disabled={!canScrollNext}
// // //             className={`${arrowBaseClass} bottom-12 -right-10 md:-right-6 lg:-right-12`}
// // //             style={{
// // //               backgroundColor: colors.arrowBg,
// // //               borderColor: colors.arrowBorder,
// // //               color: colors.arrowColor,
// // //             }}
// // //           >
// // //             <svg
// // //               viewBox="0 0 24 24"
// // //               fill="none"
// // //               stroke="currentColor"
// // //               strokeWidth={2}
// // //               strokeLinecap="round"
// // //               strokeLinejoin="round"
// // //               className="w-4 h-4"
// // //             >
// // //               <polyline points="9 18 15 12 9 6" />
// // //             </svg>
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// "use client";

// import { useRef, useState, useEffect, useCallback } from "react";
// import Typography from "@/lib/Typography";
// import { useTheme } from "@/lib/contexts/ThemeContext";
// import { premiumReels, luxuryReels, reelsTheme, type Reel } from "@/lib/constants/reels";

// function getInstagramReelId(url: string): string | null {
//   const match = url.match(/instagram\.com\/(?:reel|p)\/([^/?]+)/);
//   return match?.[1] ?? null;
// }

// function getInstagramEmbedUrl(url: string): string | null {
//   const reelId = getInstagramReelId(url);
//   return reelId
//     ? `https://www.instagram.com/reel/${reelId}/embed/?hidecaption=1`
//     : null;
// }

// function isInstagramReel(url?: string): boolean {
//   return Boolean(url && getInstagramReelId(url));
// }

// const IG_EMBED_WIDTH = 400;
// const IG_EMBED_HEADER_HEIGHT = 60;
// const IG_EMBED_HEIGHT = 750;
// // Extra zoom (uniform, no stretching) to eat Instagram's internal video
// // padding so the video reaches the same edges as the footer card.
// const IG_VIDEO_ZOOM = 1.02;

// type ReelCardProps = {
//   reel: Reel;
//   arrowColor: string;
// };

// function ReelCard({ reel, arrowColor }: ReelCardProps) {
//   const igEmbedUrl = reel.videoSrc ? getInstagramEmbedUrl(reel.videoSrc) : null;
//   const isInstagram = Boolean(igEmbedUrl);

//   const containerRef = useRef<HTMLDivElement>(null);
//   const [scale, setScale] = useState(1);

//   useEffect(() => {
//     if (!isInstagram || !containerRef.current) return;
//     const el = containerRef.current;

//     const updateScale = () => {
//       setScale(el.clientWidth / IG_EMBED_WIDTH);
//     };
//     updateScale();

//     const observer = new ResizeObserver(updateScale);
//     observer.observe(el);
//     return () => observer.disconnect();
//   }, [isInstagram]);

//   const effectiveScale = scale * IG_VIDEO_ZOOM;
//   // Header offset must grow with zoom (it's hiding 62px of *iframe content*,
//   // which becomes 62 * effectiveScale screen-pixels once scaled) — so this
//   // is computed in JS as a plain `top` value, not baked into the transform.
//   const headerOffsetPx = -IG_EMBED_HEADER_HEIGHT * effectiveScale;
//   // Instagram cards are sized to the actual height of the cropped embed
//   // (header removed) instead of a fixed 9:16 box, so there's no leftover
//   // blank space at the bottom and no need to zoom the video to compensate.
//   const igCardAspect = `${IG_EMBED_WIDTH} / ${IG_EMBED_HEIGHT - IG_EMBED_HEADER_HEIGHT}`;

//   return (
//     <div
//       data-reel-card
//       className={`relative shrink-0 snap-center md:snap-start w-full md:w-[230px] lg:w-[260px] xl:w-[280px] overflow-hidden shadow-lg border border-white/5 ${
//         isInstagram ? "" : "aspect-[9/16]"
//       }`}
//       style={isInstagram ? { aspectRatio: igCardAspect } : undefined}
//     >
//       {isInstagram ? (
//         <div ref={containerRef} className="absolute inset-0 overflow-hidden">
//           <div
//             style={{
//               position: "absolute",
//               left: "50%",
//               // Static horizontal centering, independent of scale — half
//               // of the iframe's fixed 400px width, never multiplied by zoom.
//               marginLeft: `${-IG_EMBED_WIDTH / 2}px`,
//               top: `${headerOffsetPx}px`,
//               width: `${IG_EMBED_WIDTH}px`,
//               // transform does ONLY scale — no translate mixed in, so
//               // there's no composition-order ambiguity left to get wrong.
//               transform: `scale(${effectiveScale})`,
//               transformOrigin: "top center",
//             }}
//           >
//             <iframe
//               src={igEmbedUrl!}
//               width={IG_EMBED_WIDTH}
//               height={IG_EMBED_HEIGHT}
//               className="block border-0"
//               scrolling="no"
//               allow="autoplay; encrypted-media"
//               allowFullScreen
//               title={reel.id}
//             />
//           </div>
//         </div>
//       ) : reel.videoSrc ? (
//         <video
//           src={reel.videoSrc}
//           poster={reel.poster}
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="w-full h-full object-cover"
//         />
//       ) : (
//         <div className="flex h-full items-center justify-center">
//           <svg
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke={arrowColor}
//             strokeWidth={1.5}
//             className="w-10 h-10 md:w-12 md:h-12 opacity-40"
//           >
//             <polygon points="5 3 19 12 5 21 5 3" />
//           </svg>
//         </div>
//       )}
//     </div>
//   );
// }

// export default function ReelsSection() {
//   const { theme } = useTheme();
//   const isLuxury = theme === "luxury";

//   const reels = (isLuxury ? luxuryReels : premiumReels).filter((reel) =>
//     isLuxury ? isInstagramReel(reel.videoSrc) : Boolean(reel.videoSrc),
//   );
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
//     "absolute z-10 flex items-center justify-center w-7 h-7 md:w-6 md:h-6 rounded-full border transition-all duration-300 shadow-sm focus:outline-none disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 active:scale-95";

//   if (reels.length === 0) return null;

//   return (
//     <section
//       id="homereels"
//       className="relative z-[101] w-full py-2 md:py-2 lg:py-2 px-3 md:px-4 lg:px-8"
//     >
//       <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-6 md:gap-1 lg:gap-10 rounded-3xl p-3 md:p-4 lg:p-6">
//         <Typography
//           variant="display-xl"
//           className={`text-center tracking-wide ${
//             isLuxury ? "font-roboto-slab font-light" : "font-poppins font-light"
//           }`}
//           style={{ color: colors.handleColor }}
//         >
//           @neeladhriceramics
//         </Typography>

//         <div className="relative w-full max-w-[280px] md:max-w-none md:w-[720px] lg:w-[812px] xl:w-[872px] pt-2 md:pt-6 lg:pt-2">
//           <div className="overflow-hidden w-full">
//             <div
//               ref={trackRef}
//               className="flex gap-3 md:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
//             >
//               {reels.map((reel) => (
//                 <ReelCard key={reel.id} reel={reel} arrowColor={colors.arrowColor} />
//               ))}
//             </div>
//           </div>

//           <button
//             type="button"
//             aria-label="Previous"
//             onClick={() => scrollByCard("prev")}
//             disabled={!canScrollPrev}
//             className={`${arrowBaseClass} bottom-6 -left-10 md:-left-6 lg:-left-12`}
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
//               <polyline points="15 18 9 12 15 6" />
//             </svg>
//           </button>

//           <button
//             type="button"
//             aria-label="Next"
//             onClick={() => scrollByCard("next")}
//             disabled={!canScrollNext}
//             className={`${arrowBaseClass} bottom-6 -right-10 md:-right-6 lg:-right-12`}
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
//               <polyline points="9 18 15 12 9 6" />
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
import { premiumReels, luxuryReels, reelsTheme, type Reel } from "@/lib/constants/reels";
 
function getInstagramReelId(url: string): string | null {
  const match = url.match(/instagram\.com\/(?:reel|p)\/([^/?]+)/);
  return match?.[1] ?? null;
}
 
function getInstagramEmbedUrl(url: string): string | null {
  const reelId = getInstagramReelId(url);
  return reelId
    ? `https://www.instagram.com/reel/${reelId}/embed/?hidecaption=1`
    : null;
}
 
function isInstagramReel(url?: string): boolean {
  return Boolean(url && getInstagramReelId(url));
}
 
const IG_EMBED_WIDTH = 400;
const IG_EMBED_HEADER_HEIGHT = 62;
const IG_EMBED_HEIGHT = 710;
// Everything below the actual video inside Instagram's embed: the
// caption / "View more on Instagram" link, the like/comment/share icon
// row, the likes count, and the "Add a comment" input. We crop this off
// (same trick as the header crop) so the card ends right after the
// video. Kept smaller than earlier attempts on purpose — a bigger value
// here steals height from the video itself and crops the subject/text,
// which was the "video is cropping too much" problem. This is still an
// estimate; nudge it down further if any caption/icon sliver shows, or
// up if the card feels too tall relative to the actual video content.
const IG_BELOW_VIDEO_HEIGHT = 62;
// Vertical zoom — controls how much of the video's own top/bottom gets
// cropped. Kept modest so subjects/captions aren't cut off.
const IG_VIDEO_ZOOM_Y = 1.2;
// Horizontal zoom — kept separate from the vertical one on purpose.
// Instagram letterboxes the video inside its fixed 400px-wide iframe
// (black bars on the sides). A single uniform zoom can't remove those
// bars without also cropping more off the top/bottom, so this scales
// ONLY the width further, pushing the bars out past the card's edges.
// The trade-off: this stretches the video slightly wider rather than
// cropping it — a small, usually unnoticeable stretch is the price of
// "no gaps + no extra cropping" at the same time. Tune by eye:
//  - side bars still visible -> raise this further
//  - video looks visibly stretched/warped -> lower this a bit
const IG_VIDEO_ZOOM_X = 1.43;
 
type ReelCardProps = {
  reel: Reel;
  arrowColor: string;
};
 
function ReelCard({ reel, arrowColor }: ReelCardProps) {
  const igEmbedUrl = reel.videoSrc ? getInstagramEmbedUrl(reel.videoSrc) : null;
  const isInstagram = Boolean(igEmbedUrl);
 
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
 
  useEffect(() => {
    if (!isInstagram || !containerRef.current) return;
    const el = containerRef.current;
 
    const updateScale = () => {
      setScale(el.clientWidth / IG_EMBED_WIDTH);
    };
    updateScale();
 
    const observer = new ResizeObserver(updateScale);
    observer.observe(el);
    return () => observer.disconnect();
  }, [isInstagram]);
 
  const effectiveScaleY = scale * IG_VIDEO_ZOOM_Y;
  const effectiveScaleX = scale * IG_VIDEO_ZOOM_X;
  // Header offset must grow with the vertical zoom (it's hiding 62px of
  // *iframe content*, which becomes 62 * effectiveScaleY screen-pixels
  // once scaled) — so this is computed in JS as a plain `top` value, not
  // baked into the transform.
  const headerOffsetPx = -IG_EMBED_HEADER_HEIGHT * effectiveScaleY;
  // Instagram cards are sized to just the video portion of the embed —
  // header, caption/"View more on Instagram" link, and the footer action
  // bar are all excluded — so only the video shows, with no leftover
  // blank space and no need for a fixed 9:16 box.
  const igCardAspect = `${IG_EMBED_WIDTH} / ${
    IG_EMBED_HEIGHT - IG_EMBED_HEADER_HEIGHT - IG_BELOW_VIDEO_HEIGHT
  }`;
 
  return (
    <div
      data-reel-card
      className={`relative shrink-0 snap-center md:snap-start w-full md:w-[230px] lg:w-[260px] xl:w-[280px] overflow-hidden shadow-lg border border-white/5 ${
        isInstagram ? "" : "aspect-[9/16]"
      }`}
      style={isInstagram ? { aspectRatio: igCardAspect } : undefined}
    >
      {isInstagram ? (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden">
          <div
            style={{
              position: "absolute",
              left: "50%",
              // Static horizontal centering, independent of scale — half
              // of the iframe's fixed 400px width, never multiplied by zoom.
              marginLeft: `${-IG_EMBED_WIDTH / 2}px`,
              top: `${headerOffsetPx}px`,
              width: `${IG_EMBED_WIDTH}px`,
              // Non-uniform scale on purpose: X is pushed further than Y
              // to erase Instagram's side letterbox bars without cropping
              // the top/bottom any more than IG_VIDEO_ZOOM_Y already does.
              transform: `scale(${effectiveScaleX}, ${effectiveScaleY})`,
              transformOrigin: "top center",
            }}
          >
            <iframe
              src={igEmbedUrl!}
              width={IG_EMBED_WIDTH}
              height={IG_EMBED_HEIGHT}
              className="block border-0"
              scrolling="no"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={reel.id}
            />
          </div>
        </div>
      ) : reel.videoSrc ? (
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
        <div className="flex h-full items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke={arrowColor}
            strokeWidth={1.5}
            className="w-10 h-10 md:w-12 md:h-12 opacity-40"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      )}
    </div>
  );
}
 
export default function ReelsSection() {
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";
 
  const reels = (isLuxury ? luxuryReels : premiumReels).filter((reel) =>
    isLuxury ? isInstagramReel(reel.videoSrc) : Boolean(reel.videoSrc),
  );
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
 
  if (reels.length === 0) return null;
 
  return (
    <section
      id="homereels"
      className="relative z-[101] w-full py-2 md:py-2 lg:py-2 px-3 md:px-4 lg:px-8"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-6 md:gap-1 lg:gap-10 rounded-3xl p-3 md:p-4 lg:p-6">
        <Typography
          variant="display-xl"
          className={`text-center tracking-wide ${
            isLuxury ? "font-roboto-slab font-light" : "font-poppins font-light"
          }`}
          style={{ color: colors.handleColor }}
        >
          @neeladhriceramics
        </Typography>
 
        <div className="relative w-full max-w-[280px] md:max-w-none md:w-[720px] lg:w-[812px] xl:w-[872px] pt-2 md:pt-6 lg:pt-2">
          <div className="overflow-hidden w-full">
            <div
              ref={trackRef}
              className="flex gap-3 md:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {reels.map((reel) => (
                <ReelCard key={reel.id} reel={reel} arrowColor={colors.arrowColor} />
              ))}
            </div>
          </div>
 
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollByCard("prev")}
            disabled={!canScrollPrev}
            className={`${arrowBaseClass} bottom-6 -left-10 md:-left-6 lg:-left-12`}
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
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
 
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollByCard("next")}
            disabled={!canScrollNext}
            className={`${arrowBaseClass} bottom-6 -right-10 md:-right-6 lg:-right-12`}
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
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}