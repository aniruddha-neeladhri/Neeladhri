"use client";

import Typography from "@/lib/Typography";
import { BLOG_CONTENT } from "@/lib/constants/blogs";
import { useTheme } from "@/lib/contexts/ThemeContext";

const VIDEO_PLACEHOLDER_CLASS =
  "relative w-full max-[319px]:h-[clamp(260px,82vw,340px)] min-[320px]:h-[360px] min-[320px]:w-full lg:h-[min(640px,72vh)] lg:min-h-[520px] lg:max-h-[680px] bg-[#6B6B6B] flex items-center justify-center overflow-hidden";

export default function LuxurySpace() {
  const { theme } = useTheme();

  if (theme !== "luxury") return null;

  const { luxurySpace } = BLOG_CONTENT.luxury;

  return (
    <section className="w-full bg-black">
      <div className="max-w-[1400px] mx-auto px-4 py-2 sm:px-6 sm:py-2 md:px-10 md:py-4 lg:px-12 lg:py-4 xl:px-16 xl:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)] gap-6 sm:gap-8 lg:gap-10 xl:gap-14 items-center">
          {/* Left — video placeholder */}
          <div className="w-full flex justify-center lg:justify-start">
            <div
              className={`${VIDEO_PLACEHOLDER_CLASS} max-w-[480px] mx-auto lg:mx-0 lg:max-w-none`}
            >
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/829477ab-400e-48ef-aa32-f982d5dd9524.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          {/* Right — copy */}
          <div className="w-full flex items-center lg:items-center">
            <div className="w-full flex flex-col gap-4 sm:gap-5 lg:gap-6 text-left">
              <Typography
                variant="display-2xl"
                className="!text-white font-normal leading-tight text-center lg:text-left"
              >
                {luxurySpace.title}
              </Typography>

              <div className="flex flex-col gap-4 sm:gap-5">
                {luxurySpace.paragraphs.map((paragraph, i) => (
                  <Typography
                    key={i}
                    variant="body-lg"
                    className="!text-white font-light leading-relaxed text-left"
                  >
                    {paragraph}
                  </Typography>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
