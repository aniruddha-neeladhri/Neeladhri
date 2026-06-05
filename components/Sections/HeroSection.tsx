"use client";

import { useCallback, useEffect, useState } from "react";
import Typography from "@/lib/Typography";
import HomeBrands from "./HomeBrands";
import ModernSpace from "./ModernSpace";
import HomePage from "./homepage";
import { cn } from "@/lib/utils";

const INTRO_TEXT = "Enter a new world of Curated Spaces";
const FADE_MS = 400;

export default function HeroSection() {
  const [introDone, setIntroDone] = useState(false);

  const finishIntro = useCallback(() => {
    setIntroDone(true);
  }, []);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent(introDone ? "homepage-intro-complete" : "homepage-intro-start")
    );
  }, [introDone]);

  return (
    <>
      {/* Video intro — fades out when playback ends */}
      <div
        className={cn(
          "fixed inset-0 z-50 w-full h-[100dvh] transition-opacity ease-out",
          introDone ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
        style={{ transitionDuration: `${FADE_MS}ms` }}
        aria-hidden={introDone}
      >
        <video
          src="/landingpage.mp4"
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={finishIntro}
        />

        <div className="absolute inset-x-0 bottom-0 z-10 flex w-full justify-center px-3 pb-6 sm:px-6 sm:pb-10 md:pb-12 lg:pb-14">
          <Typography
            variant="display-2xl"
            className="text-center text-white font-normal whitespace-nowrap leading-none tracking-[0.02em]"
          >
            {INTRO_TEXT}
          </Typography>
        </div>
      </div>

      {/* Main homepage sections — fade in as soon as the video ends */}
      <div
        id="homepage-hero-section"
        className={cn(
          "w-full transition-opacity ease-out",
          introDone ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        style={{ transitionDuration: `${FADE_MS}ms` }}
      >
        <HomePage />
        <HomeBrands />
        <ModernSpace />
      </div>
    </>
  );
}