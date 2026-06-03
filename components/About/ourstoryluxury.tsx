"use client";

import Image from "next/image";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { ABOUT_LUXURY_STORY } from "@/lib/constants/about";

export default function OurStoryLuxury() {
  const { theme } = useTheme();

  if (theme !== "luxury") return null;

  const { caption, title, description, image, captionColor, textColor } =
    ABOUT_LUXURY_STORY;

  return (
    <section className="w-full bg-black">
      <div className="max-w-[1400px] mx-auto px-4 py-6 sm:px-5 sm:py-7 lg:px-12 lg:py-14 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3 lg:gap-12 xl:gap-14 items-center">
          {/* Left — image */}
          <div className="w-full flex justify-center lg:justify-start">
            <div className="relative aspect-[800/534] w-[min(100%,400px)] shrink-0 max-lg:mx-auto lg:w-full lg:max-w-none">
              <Image
                src={image}
                alt="Neeladhri Ceramics luxury interior"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1023px) 400px, 50vw"
              />
            </div>
          </div>

          {/* Right — copy, vertically centered beside image on lg+ */}
          <div className="w-full flex items-center justify-center lg:justify-start">
            <div className="w-full lg:max-w-[520px] xl:max-w-[560px] flex flex-col items-start gap-1 sm:gap-1.5">
              <Typography
                variant="body-lg"
                className="w-full normal-case tracking-[0.12em] font-light"
                style={{ color: captionColor }}
              >
                {caption}
              </Typography>

              <Typography
                variant="display-2xl"
                className="w-full !text-[#FFFFFF] font-normal leading-tight text-[22px] sm:text-[26px] lg:text-inherit"
              >
                {title.includes(" meets ") ? (
                  <>
                    <span className="lg:hidden">{title}</span>
                    <span className="hidden lg:inline">
                      {title.split(" meets ")[0]}
                      <br />
                      meets {title.split(" meets ")[1]}
                    </span>
                  </>
                ) : (
                  title
                )}
              </Typography>

              <Typography
                variant="body-xl"
                className="w-full !text-[#FFFFFF] font-light leading-relaxed text-[14px] sm:text-[15px] lg:text-inherit text-left [text-wrap:pretty]"
                style={{ color: textColor }}
              >
                {description}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
