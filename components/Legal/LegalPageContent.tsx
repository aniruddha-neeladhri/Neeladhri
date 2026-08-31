"use client";

import Link from "next/link";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import type { LegalPageContent as LegalContent } from "@/lib/constants/legal";

const PROSE_TEXT_LUXURY =
  "!text-white [&_h2]:!text-white [&_p]:!text-white [&_li]:!text-white [&_a]:!text-[#D3B898]";

const PROSE_TEXT_PREMIUM =
  "!text-[#555555] [&_h2]:!text-[#555555] [&_p]:!text-[#555555] [&_li]:!text-[#555555] [&_a]:!text-[#F79440]";

function legalProseClassName(isLuxury: boolean) {
  return cn(
    "blog-html-content blog-detail-prose font-light",
    "[&_h2]:font-normal [&_p]:font-normal [&_li]:font-light",
    "[&_h2]:break-words [&_p]:break-words",
    isLuxury
      ? "font-cormorant-garamond blog-detail-prose-luxury"
      : "font-poppins blog-detail-prose-premium",
    isLuxury ? PROSE_TEXT_LUXURY : PROSE_TEXT_PREMIUM
  );
}

function renderParagraph(text: string) {
  const emailMatch = text.match(/^(Email:\s*)(.+)$/i);
  if (emailMatch) {
    const email = emailMatch[2].trim();
    return (
      <>
        {emailMatch[1]}
        <a href={`mailto:${email}`} className="underline underline-offset-2">
          {email}
        </a>
      </>
    );
  }

  const phoneMatch = text.match(/^(Phone:\s*)(.+)$/i);
  if (phoneMatch) {
    const phone = phoneMatch[2].trim();
    const tel = phone.replace(/[^\d+]/g, "");
    return (
      <>
        {phoneMatch[1]}
        <a href={`tel:${tel}`} className="underline underline-offset-2">
          {phone}
        </a>
      </>
    );
  }

  if (text === "Please review our Privacy Policy before submitting personal information through the website.") {
    return (
      <>
        Please review our{" "}
        <Link href="/privacy" className="underline underline-offset-2">
          Privacy Policy
        </Link>{" "}
        before submitting personal information through the website.
      </>
    );
  }

  if (
    text ===
    "Your use of this website is also subject to our Privacy Policy, which explains how we collect, use, store, and protect personal information."
  ) {
    return (
      <>
        Your use of this website is also subject to our{" "}
        <Link href="/privacy" className="underline underline-offset-2">
          Privacy Policy
        </Link>
        , which explains how we collect, use, store, and protect personal information.
      </>
    );
  }

  return text;
}

type LegalPageContentProps = {
  content: LegalContent;
};

function Paragraph({
  text,
  isLuxury,
}: {
  text: string;
  isLuxury: boolean;
}) {
  return (
    <Typography
      variant="body-lg"
      className={cn(
        "leading-relaxed font-light block",
        isLuxury ? "text-white font-cormorant-garamond" : "text-[#555555] font-poppins"
      )}
    >
      {renderParagraph(text)}
    </Typography>
  );
}

function BulletList({
  items,
  isLuxury,
}: {
  items: string[];
  isLuxury: boolean;
}) {
  return (
    <ul className="list-disc pl-5 sm:pl-6 space-y-2">
      {items.map((item) => (
        <li key={item}>
          <Typography
            variant="body-lg"
            className={cn(
              "leading-relaxed font-light inline",
              isLuxury ? "text-white font-cormorant-garamond" : "text-[#555555] font-poppins"
            )}
          >
            {item}
          </Typography>
        </li>
      ))}
    </ul>
  );
}

export default function LegalPageContent({ content }: LegalPageContentProps) {
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";

  return (
    <section
      className={cn(
        "w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-10 sm:py-12 md:py-16",
        isLuxury ? "bg-black" : "bg-white"
      )}
    >
      <div className="mx-auto max-w-4xl">
        <div className={cn("mb-8 sm:mb-10 space-y-3", legalProseClassName(isLuxury))}>
          <Typography
            variant="body-lg"
            className={cn(
              "font-light",
              isLuxury ? "text-white/80 font-cormorant-garamond" : "text-[#777777] font-poppins"
            )}
          >
            Effective Date: {content.effectiveDate}
          </Typography>

          {content.intro.map((paragraph) => (
            <Typography
              key={paragraph}
              variant="body-lg"
              className={cn(
                "leading-relaxed font-light",
                isLuxury ? "text-white font-cormorant-garamond" : "text-[#555555] font-poppins"
              )}
            >
              {paragraph}
            </Typography>
          ))}
        </div>

        <div className={cn("space-y-10 sm:space-y-12", legalProseClassName(isLuxury))}>
          {content.sections.map((section) => (
            <article key={section.title} className="space-y-4">
              <Typography
                variant="h3"
                as="h2"
                className={cn(
                  "font-normal leading-snug",
                  isLuxury ? "text-white font-cormorant-garamond" : "text-[#333333] font-poppins"
                )}
              >
                {section.title}
              </Typography>

              {section.paragraphs?.map((paragraph) => (
                <Paragraph key={paragraph} text={paragraph} isLuxury={isLuxury} />
              ))}

              {section.bullets && section.bullets.length > 0 && (
                <BulletList items={section.bullets} isLuxury={isLuxury} />
              )}

              {section.afterBullets?.paragraphs?.map((paragraph) => (
                <Paragraph key={paragraph} text={paragraph} isLuxury={isLuxury} />
              ))}

              {section.afterBullets?.bullets && section.afterBullets.bullets.length > 0 && (
                <BulletList items={section.afterBullets.bullets} isLuxury={isLuxury} />
              )}
            </article>
          ))}
        </div>

        <Typography
          variant="body-sm"
          className={cn(
            "mt-10 sm:mt-12 pt-6 border-t font-light",
            isLuxury
              ? "text-white/70 border-white/20 font-cormorant-garamond"
              : "text-[#777777] border-neutral-200 font-poppins"
          )}
        >
          Last Updated: {content.lastUpdated}
        </Typography>
      </div>
    </section>
  );
}
