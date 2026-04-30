"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function TileAnimation() {
  const tileRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tile = tileRef.current;
    if (!tile) return;

    const HERO_SCROLL_VH = 400;
    const SECTION_HEIGHT_VH = 100;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Section boundaries
      const heroScrollPx = (HERO_SCROLL_VH / 100) * windowHeight;
      const kitchenStart = heroScrollPx;
      const kitchenEnd = kitchenStart + windowHeight;
      const livingRoomEnd = kitchenEnd + windowHeight;
      const bathroomEnd = livingRoomEnd + windowHeight;
      const diningRoomEnd = bathroomEnd + windowHeight;

      // Transition zones (30% of section for entry animation)
      const TRANSITION_ZONE = 0.3;

      let transform = "";
      let opacity = "0";

      // Position constants (right side only)
      const OFFSCREEN_TOP = -50; // vh (above viewport)
      const ONSCREEN_RIGHT = 30; // vw

let centered = false;
      let activeSection = "";

      // Tile is fixed at top-[40%]. Section header is at 50% of section.
      // Header aligns with tile when: sectionStart + 0.5*vh - scrollY = 0.4*vh
      // => scrollY = sectionStart + 0.1*vh
      const kitchenAlign = kitchenStart + windowHeight * 0.1;
      const livingRoomAlign = kitchenEnd + windowHeight * 0.1;
      const bathroomAlign = livingRoomEnd + windowHeight * 0.1;
      const diningRoomAlign = bathroomEnd + windowHeight * 0.1;
      const alignThreshold = windowHeight * 0.15;

      const descriptions: Record<string, string> = {
        kitchen: "Transform your kitchen with our premium heat-resistant ceramic tiles, designed for durability and timeless style.",
        livingroom: "Elevate your living space with elegant ceramic tiles that blend comfort with sophisticated design.",
        bathroom: "Water-resistant ceramic tiles crafted for wet environments, combining safety with stunning aesthetics.",
        diningroom: "Create memorable dining experiences with our premium tiles that add warmth and grandeur to every meal.",
      };

      if (scrollY < kitchenStart) {
        // Before Kitchen - hide tile at top
        opacity = "0";
        transform = `translate(calc(-50% + ${ONSCREEN_RIGHT}vw), calc(-50% + ${OFFSCREEN_TOP}vh)) scale(1)`;
      } else if (scrollY >= kitchenStart && scrollY < kitchenEnd) {
        // Kitchen section - tile drops from top and stays visible
        const progress = (scrollY - kitchenStart) / (kitchenEnd - kitchenStart);
        
        if (progress < 0.15) {
          // Entry animation: drop from top with fade in
          const entryProgress = progress / 0.15;
          const eased = easeOutBack(entryProgress);
          opacity = String(eased);
          const y = OFFSCREEN_TOP + eased * Math.abs(OFFSCREEN_TOP);
          transform = `translate(calc(-50% + ${ONSCREEN_RIGHT}vw), calc(-50% + ${y}vh)) scale(1)`;
        } else {
          opacity = "1";
          transform = `translate(calc(-50% + ${ONSCREEN_RIGHT}vw), -50%) scale(1)`;
        }

        // Check if aligned with Kitchen header
        if (Math.abs(scrollY - kitchenAlign) < alignThreshold) {
          centered = true;
          activeSection = "kitchen";
        }
      } else if (scrollY >= kitchenEnd && scrollY < livingRoomEnd) {
        // LivingRoom section
        opacity = "1";
        transform = `translate(calc(-50% + ${ONSCREEN_RIGHT}vw), -50%) scale(1)`;
        
        if (Math.abs(scrollY - livingRoomAlign) < alignThreshold) {
          centered = true;
          activeSection = "livingroom";
        }
      } else if (scrollY >= livingRoomEnd && scrollY < bathroomEnd) {
        // Bathroom section
        opacity = "1";
        transform = `translate(calc(-50% + ${ONSCREEN_RIGHT}vw), -50%) scale(1)`;
        
        if (Math.abs(scrollY - bathroomAlign) < alignThreshold) {
          centered = true;
          activeSection = "bathroom";
        }
      } else if (scrollY >= bathroomEnd && scrollY < diningRoomEnd) {
        // DiningRoom section
        opacity = "1";
        transform = `translate(calc(-50% + ${ONSCREEN_RIGHT}vw), -50%) scale(1)`;
        
        if (Math.abs(scrollY - diningRoomAlign) < alignThreshold) {
          centered = true;
          activeSection = "diningroom";
        }
      } else {
        opacity = "1";
        transform = `translate(calc(-50% + ${ONSCREEN_RIGHT}vw), -50%) scale(1)`;
      }

      tile.style.opacity = opacity;
      tile.style.transform = transform;

      // Premium glow and description via DOM
      const desc = descRef.current;
      const img = tile.querySelector('img');
      if (desc) {
        desc.style.opacity = centered ? "1" : "0";
        desc.style.transform = centered ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)";
        desc.style.pointerEvents = centered ? "auto" : "none";
        if (centered && activeSection && descriptions[activeSection]) {
          const p = desc.querySelector('p');
          if (p) p.textContent = descriptions[activeSection];
        }
      }
      if (img) {
        if (centered) {
          img.style.filter = "drop-shadow(0 0 40px rgba(212, 101, 42, 0.9)) drop-shadow(0 0 80px rgba(212, 101, 42, 0.4)) drop-shadow(0 25px 50px rgba(0,0,0,0.6))";
          img.classList.add('animate-float');
        } else {
          img.style.filter = "drop-shadow(0 25px 50px rgba(0,0,0,0.6))";
          img.classList.remove('animate-float');
        }
      }
    };

    // Easing functions
    function easeOutCubic(t: number): number {
      return 1 - Math.pow(1 - t, 3);
    }

    function easeInCubic(t: number): number {
      return t * t * t;
    }

    function easeOutBack(t: number): number {
      const c1 = 1.70158;
      const c3 = c1 + 1;
      return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="relative pointer-events-none">
      <div
        ref={tileRef}
        className="fixed top-[40%] left-1/2 z-[100] flex flex-col items-center gap-4"
        style={{ width: "280px", opacity: 0 }}
      >
        <div className="relative w-[280px] h-[280px]">
          <Image
            src="/sections/tile.png"
            alt="Premium Tile"
            width={280}
            height={280}
            className="w-full h-full object-cover rounded-lg"
            style={{
              filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.6))",
            }}
          />
        </div>
        <div
          ref={descRef}
          className="bg-black/50 backdrop-blur-md rounded-xl p-5 border border-orange-500/40 max-w-[280px] transition-all duration-500 ease-out"
          style={{ opacity: 0, transform: "translateY(20px) scale(0.95)" }}
        >
          <p className="text-orange-400 text-sm leading-relaxed text-center font-medium tracking-wide">
            Premium ceramic tiles crafted with precision for timeless elegance in every space.
          </p>
        </div>
      </div>
    </div>
  );
}