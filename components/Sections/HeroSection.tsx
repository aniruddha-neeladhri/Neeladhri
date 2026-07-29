"use client";

import { useCallback, useEffect, useState } from "react";
import Typography from "@/lib/Typography";
import TileScrollSection from "./Tilemovement";
import { cn } from "@/lib/utils";

const INTRO_TEXT_LINE_1 = "Enter a new world of";
const INTRO_TEXT_LINE_2 = "Curated Spaces";
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
          src="https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/c534b594-0a42-467c-8453-b9d5c87d4237.mp4"
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={finishIntro}
        />

        {/* Text anchored to bottom, centered horizontally */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex w-full justify-center px-4 pb-8 sm:px-8 sm:pb-10 md:pb-12 lg:pb-16">
          <Typography
            variant="display-2xl"
            className={cn(
              "text-center text-white font-medium font-cormorant-garamond leading-tight tracking-[0.02em]",
              "text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl",
              "max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw]",
              "lg:whitespace-nowrap",
              "[text-shadow:0_2px_16px_rgba(0,0,0,0.55)]"
            )}
          >
            {INTRO_TEXT_LINE_1}{" "}
            <br className="lg:hidden" />
            {INTRO_TEXT_LINE_2}
          </Typography>
        </div>
      </div>

      <div id="homepage-hero-section" className="w-full">
        <div
          className={cn(
            "relative z-0 transition-opacity ease-out",
            introDone ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          style={{ transitionDuration: `${FADE_MS}ms` }}
        >
          <TileScrollSection introReady={introDone} />
        </div>
      </div>
    </>
  );
}