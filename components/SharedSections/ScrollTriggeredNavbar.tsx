"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import FullscreenMenu from "./FullscreenMenu";

const NAVBAR_HEIGHT = 80;
const HOMEPAGE_SECTION_ID = "homepage-hero-section";

export default function ScrollTriggeredNavbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      const homeSection = document.getElementById(HOMEPAGE_SECTION_ID);
      if (!homeSection) {
        setIsVisible(false);
        return;
      }

      const top = homeSection.getBoundingClientRect().top;
      setIsVisible(top <= NAVBAR_HEIGHT);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isHomePage]);

  return (
    <>
      {/*
        ── WHY AnimatePresence is NOT inside this div ──────────────────────────
        This div has `translate-y-*` (a CSS transform). Any child with
        `position: fixed` gets clipped to this element instead of the viewport.
        FullscreenMenu uses `fixed inset-0` so it MUST live outside here.
        ────────────────────────────────────────────────────────────────────────
      */}
      <div
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <Navbar menuOpen={menuOpen} onMenuToggle={setMenuOpen} />
      </div>

      {/* Spacer — only on non-home pages */}
      {!isHomePage && <div className="h-[80px]" />}

      {/*
        FullscreenMenu rendered here as a sibling — outside the transformed
        div above — so its `fixed inset-0` covers the true full viewport.
      */}
      <AnimatePresence>
        {menuOpen && <FullscreenMenu close={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}