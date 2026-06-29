"use client";

import Link from "next/link";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function ShowroomBanner() {
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";

  return (
    <section className="w-full">
      <div
        className={`relative w-full min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] flex items-end justify-center
          bg-cover bg-center bg-no-repeat
          ${isLuxury ? "bg-[url('https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/about/2a01207e-12f8-4d75-a516-5c5874ae711b.png')]" : "bg-[url('https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/about/07f73923-8efa-4054-bc2c-21a494e61305.png')]"}`}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content pinned to bottom center */}
        <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-5 px-4 pb-8 sm:pb-10 md:pb-12 lg:pb-16 text-center">
          <Typography
            variant="display-xl"
            className="text-white font-normal font-poppins leading-snug"
          >
            Visit Our Showroom <br />
            We'll Help You Build Spaces That Inspire
          </Typography>

          <Link href="/contact">
            <button className="mt-1 px-8 py-3 rounded-full bg-[#F79440] cursor-pointer">
              <Typography variant="body-xl" className="text-white font-light font-poppins">
                Get started
              </Typography>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}