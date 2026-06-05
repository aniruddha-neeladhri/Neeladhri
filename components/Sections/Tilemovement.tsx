"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const STEPS = [
  {
    body: "Functional layouts, premium finishes, and a space designed to bring people together effortlessly.",
    videoSrc: "/landingpage.mp4",
    videoTime: 0,
  },
  {
    body: "Calibrated to within a fraction of a millimetre, our tiles achieve seamless joins and a flawless surface that elevates every architectural space.",
    videoSrc: "/landingpage.mp4",
    videoTime: 5,
  },
  {
    body: "Functional layouts and premium finishes converge — a space designed not just to be seen, but to be deeply, effortlessly experienced each day.",
    videoSrc: "/landingpage.mp4",
    videoTime: 10,
  },
  {
    body: "From floor to wall, from intimate bathrooms to grand foyers — our collections bring the quiet luxury of natural stone to every corner of your world.",
    videoSrc: "/landingpage.mp4",
    videoTime: 15,
  },
];

const TILE_Y_FRACTIONS = [0.05, 0.28, 0.52, 0.75];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function TextBlock({
  step,
  active,
  exiting,
}: {
  step: (typeof STEPS)[0];
  active: boolean;
  exiting: boolean;
}) {
  return (
    <div className="absolute inset-0 flex items-center px-10 lg:px-14 pointer-events-none">
      <p
        style={{
          fontFamily: "'Montserrat', sans-serif",
          letterSpacing: "0.01em",
          lineHeight: 1.75,
          transition: "opacity 0.5s ease, transform 0.5s ease",
          opacity: active ? 1 : 0,
          transform: active
            ? "translateY(0)"
            : exiting
            ? "translateY(-8px)"
            : "translateY(10px)",
          maxWidth: "280px",
        }}
        className="text-[13px] font-light text-white/80"
      >
        {step.body}
      </p>
    </div>
  );
}

export default function TileScrollSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tileRef    = useRef<HTMLDivElement>(null);
  const videoRefs  = useRef<(HTMLVideoElement | null)[]>([]);

  const [activeStep, setActiveStep] = useState(0);
  const [exitStep,   setExitStep]   = useState<number | null>(null);
  const prevStepRef = useRef(0);
  const rafRef      = useRef<number>(0);

  const handleScroll = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const wrapper = wrapperRef.current;
      const tile    = tileRef.current;
      if (!wrapper || !tile) return;

      const rect     = wrapper.getBoundingClientRect();
      const total    = wrapper.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / total));

      const rawStep  = progress * 4;
      const step     = Math.min(3, Math.floor(rawStep));
      const stepFrac = rawStep - step;

      if (step !== prevStepRef.current) {
        const prev = prevStepRef.current;
        prevStepRef.current = step;
        setExitStep(prev);
        setActiveStep(step);
        setTimeout(() => setExitStep(null), 450);

        videoRefs.current.forEach((v, i) => {
          if (!v) return;
          if (i === step) {
            v.currentTime = STEPS[i].videoTime;
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        });
      }

      const yA    = TILE_Y_FRACTIONS[step];
      const yB    = step < 3 ? TILE_Y_FRACTIONS[step + 1] : TILE_Y_FRACTIONS[3];
      const t     = stepFrac * stepFrac * (3 - 2 * stepFrac);
      const yFrac = lerp(yA, yB, t);

      const vh     = window.innerHeight;
      const tileH  = tile.offsetHeight;
      const targetY = Math.min(yFrac * vh, vh - tileH - 20);

      tile.style.transform = `translateY(${targetY}px)`;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  useEffect(() => {
    videoRefs.current[0]?.play().catch(() => {});
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');
      `}</style>

      <div ref={wrapperRef} className="relative" style={{ height: "500vh" }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">

          {/* Videos */}
          {STEPS.map((s, i) => (
            <video
              key={i}
              ref={(el) => { videoRefs.current[i] = el; }}
              src={s.videoSrc}
              muted loop playsInline
              className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700"
              style={{ opacity: activeStep === i ? 1 : 0 }}
            />
          ))}

          {/* Left 40% black overlay */}
          <div
            className="absolute top-0 left-0 h-full z-10"
            style={{ width: "28%", background: "rgba(0,0,0,0.72)" }}
          >
            {STEPS.map((s, i) => (
              <TextBlock
                key={i}
                step={s}
                active={activeStep === i}
                exiting={exitStep === i}
              />
            ))}
          </div>

          {/* Tile — sits on overlay right edge */}
          <div
            ref={tileRef}
            className="absolute z-20"
            style={{
              left: "calc(28% - 80px)",
              top: 0,
              width: "clamp(140px, 12vw, 175px)",
              aspectRatio: "1 / 1",
              willChange: "transform",
              filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.6))",
              transform: "translateY(5vh)",
            }}
          >
            <Image
              src="/tileimage.png"
              alt="Tile"
              fill
              className="object-cover"
              sizes="175px"
            />
          </div>

        </div>
      </div>
    </>
  );
}