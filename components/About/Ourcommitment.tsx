"use client";

import Image from "next/image";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { COMMITMENTS_DATA } from "@/lib/constants/about";

export default function OurCommitment() {
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";
  const commitments = COMMITMENTS_DATA[theme];
  const textColor = isLuxury ? "text-white" : "text-black";

  return (
    <section className="w-full py-2 px-6 lg:px-20">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-4 md:gap-4">

        {/* Heading */}
        <Typography variant="display-xl" className={`font-normal ${textColor}`}>
          Our Commitment
        </Typography>


        {/* Cards Grid — mt-10 ensures icon overflow space on all screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 mt-8 sm:mt-10">
          {commitments.map((item, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center gap-4 pt-12 sm:pt-14 pb-8 px-6"
              style={{ border: "1px solid #F79440" }}
            >
              {/* Icon Circle - overlapping top border, responsive size */}
              <div className={`absolute -top-7 sm:-top-8 lg:-top-10 left-1/2 -translate-x-1/2
                              w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20
                              rounded-full border border-[#F79440]
                              flex items-center justify-center shadow-sm ${
                                isLuxury ? "bg-[#6B6B6B]" : "bg-[#D9D9D9]"
                              }`}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={44}
                  height={44}
                  className="object-contain w-7 h-7 sm:w-8 sm:h-8 lg:w-11 lg:h-11"
                />
              </div>

              {/* Title */}
              <Typography
                variant="h2"
                className={`font-normal text-center ${textColor}`}
              >
                {item.title}
              </Typography>

              {/* Description */}
              <Typography
                variant="body-xl"
                className={`font-light text-center leading-relaxed ${textColor}`}
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