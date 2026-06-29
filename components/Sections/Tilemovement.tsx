// "use client";

// import { useEffect, useRef, useState, useCallback } from "react";
// import Image from "next/image";
// import Typography from "@/lib/Typography";
// import { cn } from "@/lib/utils";

// const STEPS = [
//   {
//     body: "Functional layouts, premium finishes, and a space designed to bring people together effortlessly.",
//     videoSrc: "/landingpage.mp4",
//     videoTime: 0,
//   },
//   {
//     body: "Calibrated to within a fraction of a millimetre, our tiles achieve seamless joins and a flawless surface that elevates every architectural space.",
//     videoSrc: "/landingpage.mp4",
//     videoTime: 5,
//   },
//   {
//     body: "Functional layouts and premium finishes converge — a space designed not just to be seen, but to be deeply, effortlessly experienced each day.",
//     videoSrc: "/landingpage.mp4",
//     videoTime: 10,
//   },
//   {
//     body: "From floor to wall, from intimate bathrooms to grand foyers — our collections bring the quiet luxury of natural stone to every corner of your world.",
//     videoSrc: "/landingpage.mp4",
//     videoTime: 15,
//   },
// ];

// const STEP_COUNT = STEPS.length;
// const TILE_Y_FRACTIONS = [0.06, 0.30, 0.54, 0.78] as const;
// const TILE_BELOW_XL_OFFSET_PX = 12;
// const XL_BREAKPOINT_PX = 1280;

// function getTileTranslateY(step: number, vh: number, tileH: number) {
//   const belowXlOffset =
//     typeof window !== "undefined" && window.innerWidth < XL_BREAKPOINT_PX
//       ? TILE_BELOW_XL_OFFSET_PX
//       : 0;
//   return Math.min(TILE_Y_FRACTIONS[step] * vh + belowXlOffset, vh - tileH - 20);
// }

// // Split text into words, each word wraps its chars in a clipping div
// // so chars slide up/down from behind an invisible mask — premium reveal
// function AnimatedText({
//   text,
//   active,
//   exiting,
//   direction,
// }: {
//   text: string;
//   active: boolean;
//   exiting: boolean;
//   direction: 1 | -1;
// }) {
//   const words = text.split(" ");

//   // Each word animates with a staggered delay based on its index
//   return (
//     <Typography
//       variant="body-lg"
//       className="m-0 max-w-[280px] font-light tracking-[0.01em] !text-white leading-relaxed"
//     >
//       {words.map((word, wi) => {
//         // Stagger: 18ms per word, max 300ms
//         const delay = active
//           ? `${Math.min(wi * 18, 300)}ms`
//           : `${Math.min(wi * 8, 120)}ms`;

//         // Entering from below (scroll down) or above (scroll up)
//         const translateIn  = direction === 1 ? "translateY(110%)" : "translateY(-110%)";
//         // Exiting upward (scroll down) or downward (scroll up)
//         const translateOut = direction === 1 ? "translateY(-110%)" : "translateY(110%)";

//         return (
//           <span
//             key={wi}
//             // Each word is a clipping container — overflow hidden masks the sliding char
//             style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
//           >
//             <span
//               style={{
//                 display: "inline-block",
//                 transform: active
//                   ? "translateY(0)"
//                   : exiting
//                   ? translateOut
//                   : translateIn,
//                 opacity: active ? 1 : exiting ? 0 : 0,
//                 transition: `transform 650ms cubic-bezier(0.16, 1, 0.3, 1), opacity 400ms ease`,
//                 transitionDelay: delay,
//                 // Slight blur on exit for extra polish
//                 filter: active ? "blur(0px)" : exiting ? "blur(2px)" : "blur(0px)",
//               }}
//             >
//               {word}
//             </span>
//             {/* Space between words — outside the clip container */}
//             {wi < words.length - 1 && (
//               <span style={{ display: "inline-block", width: "0.3em" }} />
//             )}
//           </span>
//         );
//       })}
//     </Typography>
//   );
// }

// function TextBlock({
//   step,
//   active,
//   exiting,
//   direction,
// }: {
//   step: (typeof STEPS)[0];
//   active: boolean;
//   exiting: boolean;
//   direction: 1 | -1;
// }) {
//   return (
//     <div className="absolute inset-0 flex items-center px-10 lg:px-14 pointer-events-none overflow-hidden">
//       <AnimatedText
//         text={step.body}
//         active={active}
//         exiting={exiting}
//         direction={direction}
//       />
//     </div>
//   );
// }

// type PinMode = "before" | "pinned" | "after";

// export default function TileScrollSection({ introReady = true }: { introReady?: boolean }) {
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const tileRef    = useRef<HTMLDivElement>(null);
//   const videoRefs  = useRef<(HTMLVideoElement | null)[]>([]);

//   const [pinMode,    setPinMode]    = useState<PinMode>("before");
//   const [activeStep, setActiveStep] = useState(0);
//   const [exitStep,   setExitStep]   = useState<number | null>(null);
//   const [direction,  setDirection]  = useState<1 | -1>(1);

//   const currentStepRef  = useRef(0);
//   const isAnimatingRef  = useRef(false);
//   const isPinnedRef     = useRef(false);

//   const moveTile = useCallback((step: number) => {
//     const tile = tileRef.current;
//     if (!tile) return;
//     const vh = window.innerHeight;
//     const tileH = tile.offsetHeight;
//     tile.style.transform = `translateY(${getTileTranslateY(step, vh, tileH)}px)`;
//   }, []);

//   const applyStep = useCallback((step: number, force = false) => {
//     if (step === currentStepRef.current && !force) return;
//     const prev = currentStepRef.current;
//     const dir: 1 | -1 = step > prev ? 1 : -1;
//     currentStepRef.current = step;

//     setDirection(dir);
//     setExitStep(prev);
//     setActiveStep(step);
//     setTimeout(() => setExitStep(null), 500);

//     moveTile(step);

//     videoRefs.current.forEach((v, i) => {
//       if (!v) return;
//       if (i === step) {
//         v.currentTime = STEPS[i].videoTime;
//         v.play().catch(() => {});
//       } else {
//         v.pause();
//       }
//     });
//   }, [moveTile]);

//   const scrollToStep = useCallback((step: number) => {
//     const wrapper = wrapperRef.current;
//     if (!wrapper) return;
//     const vh    = window.innerHeight;
//     const total = wrapper.offsetHeight - vh;
//     const targetScrollY = wrapper.offsetTop + (step / (STEP_COUNT - 1)) * total;
//     window.scrollTo({ top: targetScrollY, behavior: "smooth" });
//   }, []);

//   useEffect(() => {
//     const onWheel = (e: WheelEvent) => {
//       if (!isPinnedRef.current) return;
//       e.preventDefault();
//       if (isAnimatingRef.current) return;

//       const dir  = e.deltaY > 0 ? 1 : -1;
//       const next = Math.min(STEP_COUNT - 1, Math.max(0, currentStepRef.current + dir));
//       if (next === currentStepRef.current) return;

//       isAnimatingRef.current = true;
//       applyStep(next);
//       scrollToStep(next);
//       setTimeout(() => { isAnimatingRef.current = false; }, 700);
//     };

//     window.addEventListener("wheel", onWheel, { passive: false });
//     return () => window.removeEventListener("wheel", onWheel);
//   }, [applyStep, scrollToStep]);

//   useEffect(() => {
//     let touchStartY = 0;

//     const onTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };

//     const onTouchEnd = (e: TouchEvent) => {
//       if (!isPinnedRef.current) return;
//       const diff = touchStartY - e.changedTouches[0].clientY;
//       if (Math.abs(diff) < 30 || isAnimatingRef.current) return;

//       const dir  = diff > 0 ? 1 : -1;
//       const next = Math.min(STEP_COUNT - 1, Math.max(0, currentStepRef.current + dir));
//       if (next === currentStepRef.current) return;

//       isAnimatingRef.current = true;
//       applyStep(next);
//       scrollToStep(next);
//       setTimeout(() => { isAnimatingRef.current = false; }, 700);
//     };

//     window.addEventListener("touchstart", onTouchStart, { passive: true });
//     window.addEventListener("touchend",   onTouchEnd,   { passive: true });
//     return () => {
//       window.removeEventListener("touchstart", onTouchStart);
//       window.removeEventListener("touchend",   onTouchEnd);
//     };
//   }, [applyStep, scrollToStep]);

//   const handleScroll = useCallback(() => {
//     const wrapper = wrapperRef.current;
//     if (!wrapper) return;
//     const rect = wrapper.getBoundingClientRect();
//     const vh   = window.innerHeight;

//     if (rect.top > 0) {
//       isPinnedRef.current = false;
//       setPinMode("before");
//       applyStep(0);
//     } else if (rect.bottom > vh) {
//       isPinnedRef.current = true;
//       setPinMode("pinned");
//     } else {
//       isPinnedRef.current = false;
//       setPinMode("after");
//       applyStep(STEP_COUNT - 1);
//     }
//   }, [applyStep]);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   useEffect(() => {
//     if (!introReady) return;
//     currentStepRef.current = 0;
//     setActiveStep(0);
//     setExitStep(null);
//     moveTile(0);
//     videoRefs.current[0]?.play().catch(() => {});
//   }, [introReady, moveTile]);

//   return (
//     <div ref={wrapperRef} className="relative z-0 h-[400vh]">
//       <div
//         className={cn(
//           "h-screen w-full overflow-hidden",
//           pinMode === "pinned" && "fixed top-0 left-0 right-0 z-0",
//           pinMode === "after"  && "absolute bottom-0 left-0 right-0 z-0",
//           pinMode === "before" && "relative z-0"
//         )}
//       >
//         {/* Videos */}
//         {STEPS.map((s, i) => (
//           <video
//             key={i}
//             ref={(el) => { videoRefs.current[i] = el; }}
//             src={s.videoSrc}
//             muted
//             loop
//             playsInline
//             className={cn(
//               "absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-700",
//               activeStep === i ? "opacity-100" : "opacity-0"
//             )}
//           />
//         ))}

//         {/* Left overlay panel */}
//         <div className="absolute top-0 left-0 z-10 h-full w-[28%] bg-black/[0.72] overflow-hidden">
//           {STEPS.map((s, i) => (
//             <TextBlock
//               key={i}
//               step={s}
//               active={activeStep === i}
//               exiting={exitStep === i}
//               direction={direction}
//             />
//           ))}
//         </div>

//         {/* Tile */}
//         <div
//           ref={tileRef}
//           className="absolute top-0 left-[calc(28%-80px)] z-20 aspect-square w-[clamp(140px,12vw,175px)] will-change-transform drop-shadow-[0_16px_40px_rgba(0,0,0,0.6)] transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] [transform:translateY(calc(6vh+12px))] xl:[transform:translateY(6vh)]"
//         >
//           <Image
//             src="/tileimage.png"
//             alt="Tile"
//             fill
//             className="object-cover"
//             sizes="175px"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    body: "Functional layouts, premium finishes, and a space designed to bring people together effortlessly.",
    videoSrc:"https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/3c693341-7ccc-4aae-bb57-4b1836b276d3.mp4",
    videoTime: 0,
  },
  {
    body: "Calibrated to within a fraction of a millimetre, our tiles achieve seamless joins and a flawless surface that elevates every architectural space.",
    videoSrc: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/a28a5ae0-a3ba-45e6-8380-f08fc9d2bfa7.mp4",
    videoTime: 5,
  },
  {
    body: "Functional layouts and premium finishes converge — a space designed not just to be seen, but to be deeply, effortlessly experienced each day.",
    videoSrc: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/daa13807-4da6-4f57-8682-fa34c0119d5d.mp4",
    videoTime: 10,
  },
  {
    body: "From floor to wall, from intimate bathrooms to grand foyers — our collections bring the quiet luxury of natural stone to every corner of your world.",
    videoSrc: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/3e6b8831-5c78-4420-b96d-429f2124f796.mp4",
    videoTime: 15,
  },
];

const STEP_COUNT = STEPS.length;
const TILE_Y_FRACTIONS = [0.06, 0.30, 0.54, 0.78] as const;
const TILE_BELOW_XL_OFFSET_PX = 12;
const XL_BREAKPOINT_PX = 1280;

function getTileTranslateY(step: number, vh: number, tileH: number) {
  const belowXlOffset =
    typeof window !== "undefined" && window.innerWidth < XL_BREAKPOINT_PX
      ? TILE_BELOW_XL_OFFSET_PX
      : 0;
  return Math.min(TILE_Y_FRACTIONS[step] * vh + belowXlOffset, vh - tileH - 20);
}

// Split text into words, each word wraps its chars in a clipping div
// so chars slide up/down from behind an invisible mask — premium reveal
function AnimatedText({
  text,
  active,
  exiting,
  direction,
}: {
  text: string;
  active: boolean;
  exiting: boolean;
  direction: 1 | -1;
}) {
  const words = text.split(" ");

  // Each word animates with a staggered delay based on its index
  return (
    <Typography
      variant="body-lg"
      className="m-0 w-full max-w-full font-montserrat font-normal tracking-[0.01em] !text-white leading-relaxed text-[12px] sm:text-[13px] lg:max-w-[280px] lg:text-[15px]"
    >
      {words.map((word, wi) => {
        // Stagger: 18ms per word, max 300ms
        const delay = active
          ? `${Math.min(wi * 18, 300)}ms`
          : `${Math.min(wi * 8, 120)}ms`;

        // Entering from below (scroll down) or above (scroll up)
        const translateIn  = direction === 1 ? "translateY(110%)" : "translateY(-110%)";
        // Exiting upward (scroll down) or downward (scroll up)
        const translateOut = direction === 1 ? "translateY(-110%)" : "translateY(110%)";

        return (
          <span
            key={wi}
            // Each word is a clipping container — overflow hidden masks the sliding char
            style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
          >
            <span
              style={{
                display: "inline-block",
                transform: active
                  ? "translateY(0)"
                  : exiting
                  ? translateOut
                  : translateIn,
                opacity: active ? 1 : exiting ? 0 : 0,
                transition: `transform 650ms cubic-bezier(0.16, 1, 0.3, 1), opacity 400ms ease`,
                transitionDelay: delay,
                // Slight blur on exit for extra polish
                filter: active ? "blur(0px)" : exiting ? "blur(2px)" : "blur(0px)",
              }}
            >
              {word}
            </span>
            {/* Space between words — outside the clip container */}
            {wi < words.length - 1 && (
              <span style={{ display: "inline-block", width: "0.3em" }} />
            )}
          </span>
        );
      })}
    </Typography>
  );
}

function TextBlock({
  step,
  active,
  exiting,
  direction,
}: {
  step: (typeof STEPS)[0];
  active: boolean;
  exiting: boolean;
  direction: 1 | -1;
}) {
  return (
    <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none px-5 sm:px-7 md:px-8 lg:px-14">
      <AnimatedText
        text={step.body}
        active={active}
        exiting={exiting}
        direction={direction}
      />
    </div>
  );
}

type PinMode = "before" | "pinned" | "after";

export default function TileScrollSection({ introReady = true }: { introReady?: boolean }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tileRef    = useRef<HTMLDivElement>(null);
  const videoRefs  = useRef<(HTMLVideoElement | null)[]>([]);

  const [pinMode,    setPinMode]    = useState<PinMode>("before");
  const [activeStep, setActiveStep] = useState(0);
  const [exitStep,   setExitStep]   = useState<number | null>(null);
  const [direction,  setDirection]  = useState<1 | -1>(1);

  const currentStepRef  = useRef(0);
  const isAnimatingRef  = useRef(false);
  const isPinnedRef     = useRef(false);

  const moveTile = useCallback((step: number) => {
    const tile = tileRef.current;
    if (!tile) return;
    const vh = window.innerHeight;
    const tileH = tile.offsetHeight;
    tile.style.transform = `translateY(${getTileTranslateY(step, vh, tileH)}px)`;
  }, []);

  const applyStep = useCallback((step: number, force = false) => {
    if (step === currentStepRef.current && !force) return;
    const prev = currentStepRef.current;
    const dir: 1 | -1 = step > prev ? 1 : -1;
    currentStepRef.current = step;

    setDirection(dir);
    setExitStep(prev);
    setActiveStep(step);
    setTimeout(() => setExitStep(null), 500);

    moveTile(step);

    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === step) {
        v.currentTime = STEPS[i].videoTime;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [moveTile]);

  const scrollToStep = useCallback((step: number) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const vh    = window.innerHeight;
    const total = wrapper.offsetHeight - vh;
    const targetScrollY = wrapper.offsetTop + (step / (STEP_COUNT - 1)) * total;
    window.scrollTo({ top: targetScrollY, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (!isPinnedRef.current) return;
      e.preventDefault();
      if (isAnimatingRef.current) return;

      const dir  = e.deltaY > 0 ? 1 : -1;
      const next = Math.min(STEP_COUNT - 1, Math.max(0, currentStepRef.current + dir));
      if (next === currentStepRef.current) return;

      isAnimatingRef.current = true;
      applyStep(next);
      scrollToStep(next);
      setTimeout(() => { isAnimatingRef.current = false; }, 700);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [applyStep, scrollToStep]);

  useEffect(() => {
    let touchStartY = 0;

    const onTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };

    const onTouchEnd = (e: TouchEvent) => {
      if (!isPinnedRef.current) return;
      const diff = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 30 || isAnimatingRef.current) return;

      const dir  = diff > 0 ? 1 : -1;
      const next = Math.min(STEP_COUNT - 1, Math.max(0, currentStepRef.current + dir));
      if (next === currentStepRef.current) return;

      isAnimatingRef.current = true;
      applyStep(next);
      scrollToStep(next);
      setTimeout(() => { isAnimatingRef.current = false; }, 700);
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend",   onTouchEnd,   { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend",   onTouchEnd);
    };
  }, [applyStep, scrollToStep]);

  const handleScroll = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const rect = wrapper.getBoundingClientRect();
    const vh   = window.innerHeight;

    if (rect.top > 0) {
      isPinnedRef.current = false;
      setPinMode("before");
      applyStep(0);
    } else if (rect.bottom > vh) {
      isPinnedRef.current = true;
      setPinMode("pinned");
    } else {
      isPinnedRef.current = false;
      setPinMode("after");
      applyStep(STEP_COUNT - 1);
    }
  }, [applyStep]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (!introReady) return;
    currentStepRef.current = 0;
    setActiveStep(0);
    setExitStep(null);
    moveTile(0);
    videoRefs.current[0]?.play().catch(() => {});
  }, [introReady, moveTile]);

  useEffect(() => {
    const onResize = () => moveTile(currentStepRef.current);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [moveTile]);

  return (
    <div ref={wrapperRef} className="relative z-0 h-[400vh]">
      <div
        className={cn(
          "h-screen w-full overflow-hidden",
          pinMode === "pinned" && "fixed top-0 left-0 right-0 z-0",
          pinMode === "after"  && "absolute bottom-0 left-0 right-0 z-0",
          pinMode === "before" && "relative z-0"
        )}
      >
        {/* Videos */}
        {STEPS.map((s, i) => (
          <video
            key={i}
            ref={(el) => { videoRefs.current[i] = el; }}
            src={s.videoSrc}
            muted
            loop
            playsInline
            className={cn(
              "absolute inset-0 z-0 h-full w-full object-contain object-fill transition-opacity duration-700",
              activeStep === i ? "opacity-100" : "opacity-0"
            )}
          />
        ))}

        {/* Left overlay panel — 30% below lg, 28% at lg+ */}
        <div className="absolute top-0 left-0 z-10 h-full w-[30%] overflow-hidden bg-black/[0.72] lg:w-[28%]">
          {STEPS.map((s, i) => (
            <TextBlock
              key={i}
              step={s}
              active={activeStep === i}
              exiting={exitStep === i}
              direction={direction}
            />
          ))}
        </div>

        {/* Tile — smaller below lg, aligned to overlay edge */}
        <div
          ref={tileRef}
          className="absolute top-0 left-[calc(30%-52px)] z-20 aspect-square w-[clamp(96px,22vw,118px)] will-change-transform drop-shadow-[0_12px_32px_rgba(0,0,0,0.6)] transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] [transform:translateY(calc(6vh+12px))] sm:left-[calc(30%-58px)] sm:w-[clamp(108px,20vw,128px)] md:left-[calc(30%-64px)] md:w-[clamp(118px,16vw,140px)] lg:left-[calc(28%-80px)] lg:w-[clamp(140px,12vw,175px)] lg:drop-shadow-[0_16px_40px_rgba(0,0,0,0.6)] xl:[transform:translateY(6vh)]"
        >
          <Image
            src="/tileimage.png"
            alt="Tile"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 175px"
          />
        </div>
      </div>
    </div>
  );
}