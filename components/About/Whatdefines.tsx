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
        style={{ backgroundImage: "url('https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/about/d43d8918-365e-450a-a452-bd9914467258.png')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col gap-8 md:gap-12">

        {/* Heading — centred at all screen sizes */}
        <Typography
          variant="display-xl"
          className="text-white font-semibold  font-poppins text-center w-full"
        >
          What Defines Us
        </Typography>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={[
                "group flex flex-col gap-3 px-6 py-6 md:px-8 md:py-8",
                "transition-all duration-300 ease-out",
                "hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(247,148,64,0.3)] rounded-lg",
              ].join(" ")}
              style={{ border: "2px solid #F7944080" }}
            >
              {/* Title — bold, white, left-aligned */}
              <Typography
                variant="h2"
                className="text-white font-semibold  font-poppins leading-snug
                  transition-all duration-300 ease-out
                  group-hover:drop-shadow-[0_0_8px_rgba(247,148,64,0.8)]"
              >
                {feature.title}
              </Typography>

              {/* Description — muted white, left-aligned */}
              <Typography
                variant="body-xl"
                className="text-[#FFFFFF] font-light font-poppins leading-relaxed"
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