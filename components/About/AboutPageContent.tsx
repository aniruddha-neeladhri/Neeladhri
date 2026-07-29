"use client";

import AboutLuxury from "@/components/About/Aboutluxury";
import OurStoryLuxury from "@/components/About/ourstoryluxury";
import CommitmentLuxury from "@/components/About/commitmentluxury";
import LastLuxurySection from "@/components/About/lastluxurysection";
import AboutSection from "@/components/About/AboutSection";
import Experience from "@/components/About/Experience";
import Whatdefines from "@/components/About/Whatdefines";
import Whatweoffer from "@/components/About/Whatweoffer";
import Ourcommitment from "@/components/About/Ourcommitment";
import Visitsection from "@/components/About/Visitsection";
import { useTheme } from "@/lib/contexts/ThemeContext";
import Ourstory from "@/components/About/ourstory";

export default function AboutPageContent() {
  const { theme } = useTheme();

  if (theme === "luxury") {
    return (
      <>
        <AboutLuxury />
        <Ourstory />
        {/* <OurStoryLuxury /> */}
        <CommitmentLuxury />
        <LastLuxurySection />
      </>
    );
  }

  return (
    <>
      <AboutSection />
      <Experience />
      <Whatdefines />
      <Whatweoffer />
      <Ourcommitment />
      <Visitsection />
    </>
  );
}
