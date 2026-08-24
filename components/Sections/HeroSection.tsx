"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import Typography from "@/lib/Typography";
import TileScrollSection from "./Tilemovement";
import { cn } from "@/lib/utils";

const INTRO_TEXT_LINE_1 = "Enter a new world of";
const INTRO_TEXT_LINE_2 = "Curated Spaces";
const FADE_MS = 400;

export default function HeroSection() {
  const [introDone, setIntroDone] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const introDoneRef = useRef(false);

  const finishIntro = useCallback(() => {
    if (introDoneRef.current) return;
    introDoneRef.current = true;

    const video = videoRef.current;
    if (video) {
      video.pause();
      video.muted = true;
    }

    // Land at the top of the site so the tile section starts normally
    // (not mid-scroll from the intro wheel gesture).
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    setIntroDone(true);
  }, []);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent(introDone ? "homepage-intro-complete" : "homepage-intro-start")
    );
  }, [introDone]);

  // Skip intro on scroll / swipe → enter the website immediately.
  useEffect(() => {
    if (introDone) return;

    const skip = () => finishIntro();

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 8 && Math.abs(e.deltaX) < 8) return;
      e.preventDefault();
      skip();
    };

    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0]?.clientY ?? 0;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const y = e.changedTouches[0]?.clientY ?? touchStartY;
      if (Math.abs(touchStartY - y) < 24) return;
      skip();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [introDone, finishIntro]);

  // Try to autoplay with sound first; if the browser blocks it, fall back to muted autoplay.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsMuted(false))
        .catch(() => {
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => {
            // Autoplay fully blocked; user can press the button manually.
          });
        });
    }
  }, []);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted) {
      video.play().catch(() => {});
    }
  }, []);

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
          ref={videoRef}
          src="https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/614865fa-45b6-4695-ac10-7e9db4608d83.mp4"
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          playsInline
          preload="auto"
          onEnded={finishIntro}
        />

        {/* Mute / unmute toggle — fixed to the bottom-right corner, only visible during the intro */}
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className={cn(
            "fixed z-[9997]",
            "right-4 sm:right-6 md:right-10 lg:right-12",
            "bottom-[max(0.25rem,env(safe-area-inset-bottom))] sm:bottom-2 md:bottom-3 lg:bottom-4",
            "flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full",
            "bg-black/40 text-white backdrop-blur-sm transition-colors",
            "hover:bg-black/60"
          )}
        >
          {isMuted ? (
            <VolumeX className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          ) : (
            <Volume2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          )}
        </button>

        {/* Text anchored to bottom, centered horizontally */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex w-full justify-center px-4 pb-8 sm:px-8 sm:pb-10 md:pb-12 lg:pb-16">
          <Typography
            variant="display-2xl"
            className={cn(
              "text-center text-white font-normal font-playfair-display leading-tight tracking-[0.02em]",
              "text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl",
              "max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw]",
              "[text-shadow:0_2px_16px_rgba(0,0,0,0.55)]"
            )}
          >
            {INTRO_TEXT_LINE_1}
            <br />
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