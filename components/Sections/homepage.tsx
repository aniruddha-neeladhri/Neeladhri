"use client";

import Image from "next/image";
import Link from "next/link";
import Typography from "@/lib/Typography";
import { HOME_HERO } from "@/lib/constants/home";
import { useTheme } from "@/lib/contexts/ThemeContext";

const WHITE = "#FFFFFF";

export default function HomePage() {
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";
  const hero = HOME_HERO[theme];
  const premium = HOME_HERO.premium;

  return (
    <section className="relative isolate w-full lg:min-h-[100dvh] min-h-[80dvh] overflow-hidden">
      <div className="absolute inset-0 z-0 h-full min-h-full w-full">
          <Image
            src={hero.image}
            alt="Neeladhri Ceramics home interior"
            fill
            priority
            fetchPriority="high"
            className="object-cover"
            sizes="100vw"
          />
        {isLuxury && (
          <div className="absolute inset-0 bg-black/55" aria-hidden />
        )}
      </div>

      {isLuxury ? (
        <>
          <div className="relative z-10 flex lg:min-h-[100dvh] min-h-[80dvh] w-full flex-col items-center justify-end px-4 pb-20 sm:px-6 sm:pb-24 md:pb-28">
            <div className="flex flex-col items-center text-center">
              <Typography
                variant="display-3xl"
                className="!text-white font-normal font-playfair-display leading-tight tracking-tight uppercase"
              >
                {hero.titleLine2}
              </Typography>
            </div>
          </div>

          <Link
            href={hero.ctaHref}
            className="absolute bottom-6 left-1/2 z-20 inline-flex -translate-x-1/2 items-center justify-center px-3 py-3 whitespace-nowrap transition-opacity duration-200 hover:opacity-90 max-md:bottom-8 md:bottom-10 lg:bottom-12 md:px-8 md:py-3.5"
            style={{ backgroundColor: hero.buttonBg }}
          >
            <Typography
              variant="caption"
              className="normal-case tracking-[0.2em] font-light font-poppins !text-white"
              style={{ color: WHITE }}
            >
              {hero.cta}
            </Typography>
          </Link>
        </>
      ) : (
        <div className="relative z-10 flex min-h-[80dvh] lg:min-h-[100dvh] w-full items-center">
          <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="flex max-w-xl flex-col items-start text-left lg:max-w-2xl">
              <div className="flex w-full flex-col items-start gap-1 md:gap-1.5">
                <Typography
                  variant="display-3xl"
                  className="!text-white font-light font-playfair-display leading-tight tracking-tight"
                  style={{ color: WHITE }}
                >
                  {premium.titleLine1}
                  <br />
                  {premium.titleLine2}
                </Typography>

                <Typography
                  variant="caption"
                  className="normal-case tracking-[0.22em] font-extralight font-poppins !text-white leading-relaxed"
                  style={{ color: WHITE }}
                >
                  {premium.subtitleLine1}
                  <br />
                  {premium.subtitleLine2}
                </Typography>
              </div>

              <Link
                href={premium.ctaHref}
                className="mt-6 md:mt-8 inline-flex items-center justify-center px-6 py-3 transition-opacity duration-200 hover:opacity-90 md:px-8 md:py-3.5"
                style={{ backgroundColor: premium.buttonBg }}
              >
                <Typography
                  variant="caption"
                  className="normal-case tracking-[0.2em] font-light font-poppins !text-white"
                  style={{ color: WHITE }}
                >
                  {premium.cta}
                </Typography>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
