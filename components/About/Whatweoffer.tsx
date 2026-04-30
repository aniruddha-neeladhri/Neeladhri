"use client";

import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";

const offerings = [
  {
    title: "Versatile Tiles",
    description:
      "A wide range of wall, floor, vitrified, and designer finishes for every space.",
  },
  {
    title: "Complete Bathrooms",
    description:
      "End-to-end solutions including sanitaryware, fittings, and vanities.",
  },
  {
    title: "Modern Kitchens",
    description:
      "Functional kitchen essentials with sinks, hobs, and chimneys.",
  },
  {
    title: "Essential Accessories",
    description:
      "Reliable adhesives, grouts, and support for seamless installation.",
  },
];

export default function WhatWeOffer() {
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";

  return (
    <section className="w-full py-10 md:py-14 lg:py-20 px-6 lg:px-20">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8 md:gap-12">

        {/* Heading */}
        <Typography variant="display-xl" className={`font-normal ${isLuxury ? "text-white" : "text-black"}`}>
          What We Offer
        </Typography>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {offerings.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col gap-4 rounded-xl overflow-hidden ${
                isLuxury
                  ? "border border-white bg-transparent"
                  : "bg-[#F7944066]"
              }`}
            >
              {/* Card Title */}
              <div className={`rounded-xl px-4 py-4 text-center border-1 border-white ${isLuxury ? "bg-black" : "bg-black"}`}>
                <Typography
                  variant="body-xl"
                  className="text-white font-light"
                >
                  {item.title}
                </Typography>
                
              </div>
              {/* Card Description */}
              <div className="px-4 pb-6">
                <Typography
                  variant="body-xl"
                  className={`font-light leading-relaxed text-center ${
                    isLuxury ? "text-white" : "text-black"
                  }`}
                >
                  {item.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}