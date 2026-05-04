"use client";

import Link from "next/link";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function ShowroomBanner() {
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";

  return (
    <section className={`w-full px-6 lg:px-20 py-6 md:py-8 lg:py-10 ${isLuxury ? "bg-[#3D3A3A]" : "bg-white"}`}>
      <div className="max-w-[1400px] mx-auto">
        {/* Framed Container */}
        <div className="relative w-full overflow-hidden min-h-[50vh] md:min-h-[65vh] lg:min-h-[75vh] flex items-center justify-center">

          {/* Background Image */}
          <div
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${isLuxury ? "bg-[url('/About/aboutluxury3.png')]" : "bg-[url('/About/about3.png')]"}`}
          />
          
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content — centered */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-6 text-center">
            <Typography
              variant="display-xl"
              className="text-white font-light leading-snug"
            >
              Visit Our Showroom <br />
              We Help You Build Spaces That Inspire
            </Typography>

            <Link href="/contact">
              <button
                className="mt-2 px-8 py-3 rounded-full text-white font-medium bg-[#F79440] cursor-pointer"
              >
                <Typography variant="body-xl" className="text-white font-light">
                  Get started
                </Typography>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}