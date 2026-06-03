"use client";

import Image from "next/image";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { COMMITMENTS_DATA } from "@/lib/constants/about";

export default function OurCommitment() {
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";
  const commitments = COMMITMENTS_DATA[theme];
  const textColor = isLuxury ? "#FFFFFF" : "#555555";

  return (
    <section className="w-full py-2 px-4 sm:px-8 md:px-20 lg:px-8 xl:px-24 mb-4 lg:mb-8">
      <div className="w-full flex flex-col items-center gap-8 md:gap-10 lg:gap-12">

        {/* Heading */}
        <Typography
          variant="display-xl"
          className="font-semibold text-center"
          style={{ color: textColor }}
        >
          Our Commitment
        </Typography>

        {/* Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-12 gap-x-8 sm:gap-x-12 md:gap-x-16 lg:gap-x-10 xl:gap-x-14">
          {commitments.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 w-full max-w-[280px] mx-auto sm:max-w-none"
            >
              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Title */}
              <Typography
                variant="h2"
                className="font-normal text-center leading-snug"
                style={{ color: textColor }}
              >
                {item.title}
              </Typography>

              {/* Description */}
              <Typography
                variant="body-xl"
                className="font-light text-center leading-relaxed"
                style={{ color: textColor }}
              >
                {item.description}
              </Typography>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}