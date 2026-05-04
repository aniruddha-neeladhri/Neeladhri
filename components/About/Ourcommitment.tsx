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
      <style>{`
        @keyframes iconFlip {
          0%   { transform: rotateY(0deg); }
          40%  { transform: rotateY(90deg); }
          100% { transform: rotateY(0deg); }
        }
        @keyframes floatUpDown {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .commitment-card {
          transition: box-shadow 0.3s ease;
        }
        .commitment-card:hover {
          animation: floatUpDown 1.6s ease-in-out infinite;
          box-shadow: 0 12px 32px rgba(247, 148, 64, 0.2);
        }
        .commitment-card:hover .flip-icon {
          animation: iconFlip 0.25s ease-in-out forwards;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto flex flex-col gap-4 md:gap-4">

        <Typography variant="display-xl" className={`font-normal ${textColor}`}>
          Our Commitment
        </Typography>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 mt-8 sm:mt-10">
          {commitments.map((item, i) => (
            <div
              key={i}
              className="commitment-card relative flex flex-col items-center gap-4 pt-12 sm:pt-14 pb-8 px-6"
              style={{ border: "1px solid #F79440" }}
            >
              {/* Icon Circle */}
              <div
                className={`absolute -top-7 sm:-top-8 lg:-top-10 left-1/2 -translate-x-1/2
                            w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20
                            rounded-full border border-[#F79440]
                            flex items-center justify-center shadow-sm
                            [perspective:400px] ${
                              isLuxury ? "bg-[#6B6B6B]" : "bg-[#D9D9D9]"
                            }`}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={44}
                  height={44}
                  className="flip-icon object-contain w-7 h-7 sm:w-8 sm:h-8 lg:w-11 lg:h-11"
                />
              </div>

              <Typography variant="h2" className={`font-normal text-center ${textColor}`}>
                {item.title}
              </Typography>

              <Typography variant="body-xl" className={`font-light text-center leading-relaxed ${textColor}`}>
                {item.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}