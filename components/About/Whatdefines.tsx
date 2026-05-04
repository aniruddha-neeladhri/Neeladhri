"use client";

import Typography from "@/lib/Typography";

const features = [
  {
    title: "Proven Expertise",
    description:
      "A decade of experience in delivering trusted interior and surface solutions.",
  },
  {
    title: "Curated Selection",
    description:
      "A thoughtfully chosen range of tiles, sanitaryware, and allied products.",
  },
  {
    title: "Quality First",
    description:
      "Focused on reliability, durability, and design that stays relevant.",
  },
  {
    title: "Versatile Solutions",
    description:
      "Tailored offerings for homes, commercial, and architectural spaces.",
  },
];

export default function WhatDefinesUs() {
  return (
    <section className="relative w-full py-10 md:py-14 lg:py-20 px-6 lg:px-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/About/about1.png')" }}
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col gap-8 md:gap-12">
        {/* Heading */}
        <Typography variant="display-2xl" className="text-white font-normal">
          What Defines Us
        </Typography>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group flex flex-col gap-6 pt-0 pb-8 overflow-hidden cursor-pointer"
              style={{ border: "1px solid #F79440" }}
            >
              {/* Card Title - pops up and glows on hover */}
              <div className="w-full bg-white/50 backdrop-blur-sm py-4 px-6 text-center">
                <Typography
                  variant="h2"
                  className="text-[#FFFFFF] font-normal tracking-wide
                    transition-all duration-300 ease-out
                    group-hover:-translate-y-1
                    group-hover:drop-shadow-[0_0_10px_rgba(247,148,64,1)]"
                >
                  {feature.title}
                </Typography>
              </div>
              {/* Card Description */}
              <Typography
                variant="body-xl"
                className="text-white/80 font-normal text-center leading-relaxed px-6"
              >
                {feature.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}