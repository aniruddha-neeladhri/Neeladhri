"use client";

import { useEffect } from "react";
import AlliedAccessories from "@/components/Collections/alliedAccessories";
import Bathroom from "@/components/Collections/bathroom";
import CollectionsSection from "@/components/Collections/CollectionsSection";
import Dining from "@/components/Collections/dining";
import Kitchen from "@/components/Collections/kitchen";
import LivingRoom from "@/components/Collections/livingroom";
import { PAGE_SEO } from "@/lib/seo";

export default function CollectionsPage() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const navbarOffset = 80;
        const rectTop = element.getBoundingClientRect().top;
        
        // If element is already positioned accurately at navbar bottom, no need to scroll
        if (Math.abs(rectTop - navbarOffset) < 5) return;

        const elementPosition = rectTop + window.pageYOffset;
        const offsetPosition = elementPosition - navbarOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });
      }
    };

    // Run initially when page loads
    scrollToHash();

    // Re-check at intervals to account for lazy-loaded images & layout reflows
    const timers = [50, 150, 300, 500, 800, 1200, 2000].map((delay) =>
      setTimeout(scrollToHash, delay)
    );

    // Listen for hash changes & browser back/forward history navigation
    window.addEventListener("hashchange", scrollToHash);
    window.addEventListener("popstate", scrollToHash);

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("hashchange", scrollToHash);
      window.removeEventListener("popstate", scrollToHash);
    };
  }, []);

  return (
    <>
      <h1 className="sr-only">{PAGE_SEO.collection.h1}</h1>
      <CollectionsSection />
      <section id="living-room">
        <LivingRoom />
      </section>
      <section id="bathroom">
        <Bathroom />
      </section>
      <section id="dining">
        <Dining />
      </section>
      <section id="kitchen">
        <Kitchen />
      </section>
      <section id="allied-accessories">
        <AlliedAccessories />
      </section>
    </>
  );
}

