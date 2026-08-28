"use client";

import { useEffect } from "react";
import AlliedAccessories from "@/components/Collections/alliedAccessories";
import Bathroom from "@/components/Collections/bathroom";
import CollectionsSection from "@/components/Collections/CollectionsSection";
import Dining from "@/components/Collections/dining";
import Kitchen from "@/components/Collections/kitchen";
import LivingRoom from "@/components/Collections/livingroom";

export default function CollectionsPage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <>
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
