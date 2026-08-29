"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { BLOG_POSTS, BlogPost } from "@/lib/constants/blogs";
import { getBlogSeo } from "@/lib/seo";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const BLOG_PROSE_TEXT_LUXURY =
  "!text-white [&_h1]:!text-white [&_h2]:!text-white [&_h3]:!text-white [&_h4]:!text-white [&_p]:!text-white [&_li]:!text-white [&_td]:!text-white [&_th]:!text-white [&_strong]:!text-white [&_b]:!text-white [&_a]:!text-white [&_span]:!text-white";

const BLOG_PROSE_TEXT_PREMIUM =
  "!text-[#555555] [&_h1]:!text-[#555555] [&_h2]:!text-[#555555] [&_h3]:!text-[#555555] [&_h4]:!text-[#555555] [&_p]:!text-[#555555] [&_li]:!text-[#555555] [&_td]:!text-[#555555] [&_th]:!text-[#555555] [&_strong]:!text-[#555555] [&_b]:!text-[#555555] [&_a]:!text-[#555555] [&_span]:!text-[#555555]";

function blogProseClassName(isLuxury: boolean) {
  return cn(
    "blog-html-content blog-detail-prose font-light",
    "[&_h1]:font-normal [&_h2]:font-normal [&_h3]:font-normal [&_h4]:font-normal [&_th]:font-normal",
    // Belt-and-suspenders wrapping: even with stray <br> already
    // stripped out of headings (see stripBrFromHeadings), this keeps
    // any unusually long unbroken word (e.g. a URL) from overflowing
    // the column and forcing horizontal scroll below 1024px.
    "[&_h1]:break-words [&_h2]:break-words [&_h3]:break-words [&_h4]:break-words",
    isLuxury
      ? "font-cormorant-garamond [&_h1]:!font-cormorant-garamond [&_h2]:!font-cormorant-garamond [&_h3]:!font-cormorant-garamond [&_h4]:!font-cormorant-garamond [&_p]:!font-cormorant-garamond [&_li]:!font-cormorant-garamond [&_td]:!font-cormorant-garamond [&_th]:!font-cormorant-garamond blog-detail-prose-luxury"
      : "font-poppins [&_h1]:!font-poppins [&_h2]:!font-poppins [&_h3]:!font-poppins [&_h4]:!font-poppins [&_p]:!font-poppins [&_li]:!font-poppins [&_td]:!font-poppins [&_th]:!font-poppins blog-detail-prose-premium",
    isLuxury ? BLOG_PROSE_TEXT_LUXURY : BLOG_PROSE_TEXT_PREMIUM
  );
}

type BlogDetailColors = {
  heading: string;
  body: string;
  mutedBorder: string;
};

function normalizeTextForCompare(input: string) {
  return input
    .replace(/\u00A0/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function stripHtmlTags(input: string) {
  return input.replace(/<[^>]*>/g, "");
}

function stripEmptyParagraphsEverywhere(html: string) {
  let out = html;

  // Remove empty paragraphs such as:
  // <p>&nbsp;</p>, <p> </p>, <p><br></p>, <p><span>&nbsp;</span></p>, etc.
  // Repeat a few times to handle nested wrappers.
  for (let i = 0; i < 10; i += 1) {
    const next = out.replace(
      /<p\b[^>]*>\s*(?:(?:&nbsp;|&#160;|\u00A0)\s*|<br\s*\/?>\s*|<span\b[^>]*>\s*(?:&nbsp;|&#160;|\u00A0)?\s*<\/span>\s*)*<\/p>\s*/gi,
      ""
    );
    if (next === out) break;
    out = next;
  }

  return out;
}

function stripLeadingTitleFromHtml(html: string, title: string) {
  let out = html.trim();

  // Remove leading <h1>/<h2>/<h3> that duplicates the page title.
  const headingMatch = out.match(/^\s*<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>\s*/i);
  if (headingMatch?.[0] && headingMatch?.[1]) {
    const headingInner = headingMatch[1];
    const headingText = normalizeTextForCompare(stripHtmlTags(headingInner));
    const titleText = normalizeTextForCompare(title);
    if (headingText === titleText) {
      out = out.slice(headingMatch[0].length).trimStart();
    }
  }

  // Remove leading empty paragraphs (&nbsp; or whitespace-only) that often follow editor exports.
  // Run a few times to clear stacks like: <p>&nbsp;</p><p>&nbsp;</p>
  for (let i = 0; i < 6; i += 1) {
    const pMatch = out.match(/^\s*<p[^>]*>([\s\S]*?)<\/p>\s*/i);
    if (!pMatch?.[0]) break;
    const pText = normalizeTextForCompare(stripHtmlTags(pMatch[1] ?? ""));
    if (pText === "" || pText === "&nbsp;" || pText === "nbsp;") {
      out = out.slice(pMatch[0].length).trimStart();
      continue;
    }
    break;
  }

  // Also remove empty paragraphs throughout the content to avoid big visual gaps.
  out = stripEmptyParagraphsEverywhere(out).trim();

  return out;
}

/** Remove inline color so theme CSS applies to h2, h3, p, etc. */
function stripInlineColorFromHtml(html: string) {
  let out = html.replace(/\scolor="[^"]*"/gi, "");
  out = out.replace(/\sstyle="([^"]*)"/gi, (_match, styles: string) => {
    const cleaned = styles
      .replace(/(?:^|;)\s*color\s*:\s*[^;]+;?/gi, "")
      .replace(/;\s*;/g, ";")
      .trim()
      .replace(/^;|;$/g, "");
    return cleaned ? ` style="${cleaned}"` : "";
  });
  return out;
}

/**
 * Rich-text editors commonly export a manual <br> (or a <br/> wrapped in
 * &nbsp;) inside heading tags to force a specific line break at the width
 * the editor happened to be at. That break is wrong on every other
 * screen width — most visibly below 1024px, where columns are narrower
 * and the fixed break creates a short, ragged first line followed by an
 * orphaned second line. Stripping <br> from inside h1–h4 lets the
 * heading wrap naturally at whatever width it's actually rendered at.
 */
function stripBrFromHeadings(html: string) {
  return html.replace(/<(h[1-4])([^>]*)>([\s\S]*?)<\/\1>/gi, (_match, tag, attrs, inner) => {
    const cleanedInner = inner.replace(/\s*<br\s*\/?>\s*/gi, " ").replace(/\s{2,}/g, " ").trim();
    return `<${tag}${attrs}>${cleanedInner}</${tag}>`;
  });
}

function getEffectiveHtmlContent(post: BlogPost) {
  const raw = post.htmlContent?.trim();
  if (!raw) return null;
  const sanitized = stripBrFromHeadings(
    stripInlineColorFromHtml(stripLeadingTitleFromHtml(raw, post.title))
  );

  const finalHtml = sanitized.trim();
  return finalHtml ? finalHtml : null;
}

function renderHtmlBody(post: BlogPost, colors: BlogDetailColors, isLuxury: boolean) {
  const html = getEffectiveHtmlContent(post);
  if (!html) return null;
  return (
    <div
      className={blogProseClassName(isLuxury)}
      style={
        {
          color: colors.body,
          "--blog-detail-text": colors.body,
          "--theme-text-color": colors.body,
        } as React.CSSProperties
      }
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function renderStructuredBody(post: BlogPost, colors: BlogDetailColors, theme: string) {
  const isLuxury = theme === "luxury";
  return (
    <div
      className={blogProseClassName(isLuxury)}
      style={
        {
          color: colors.body,
          "--blog-detail-text": colors.body,
          "--theme-text-color": colors.body,
        } as React.CSSProperties
      }
    >
      {post.content.map((item, index) => {
        switch (item.type) {
          case "heading":
            return (
              <h2 key={index} className="font-normal" style={{ color: colors.body }}>
                {item.text}
              </h2>
            );
          case "subheading":
            return (
              <h3 key={index} className="font-normal" style={{ color: colors.body }}>
                {item.text}
              </h3>
            );
          case "paragraph":
            return (
              <p key={index} className="font-light" style={{ color: colors.body }}>
                {item.text}
              </p>
            );
          case "list":
            return (
              <ul key={index} className="font-light" style={{ color: colors.body }}>
                {item.items?.map((li, i) => (
                  <li key={i} className="font-light" style={{ color: colors.body }}>
                    {li}
                  </li>
                ))}
              </ul>
            );
          case "table":
            return (
              <div key={index} className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      {item.headers?.map((header, i) => (
                        <th key={i} className="font-normal" style={{ color: colors.body }}>
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {item.rows?.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j} className="font-light" style={{ color: colors.body }}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

/**
 * How close (in px) a heading's top edge needs to be to the top of the
 * scroll container before it's considered "active". Tweak to taste —
 * smaller = image changes only once a heading is nearly at the very top,
 * larger = image changes a bit earlier, while the heading is still lower
 * on screen.
 */
const SECTION_ACTIVATION_OFFSET_PX = 140;

/**
 * Watches the scrollable content column for h1/h2 headings and reports
 * which one is currently "active" (i.e. has scrolled closest to the top
 * without going past it). Matching is done by normalized heading text so
 * it lines up with the `sectionImages` keys generated in the blog editor.
 */
function useActiveSectionImage(
  containerRef: React.RefObject<HTMLDivElement | null>,
  post: BlogPost,
  fallbackImage: string
) {
  const [activeImage, setActiveImage] = useState(fallbackImage);

  // Reset whenever we navigate to a different post.
  useEffect(() => {
    queueMicrotask(() => setActiveImage(fallbackImage));
  }, [post.slug, fallbackImage]);

  useEffect(() => {
    const container = containerRef.current;
    const sectionImages = post.sectionImages as Record<string, string> | undefined;
    if (!container || !sectionImages || Object.keys(sectionImages).length === 0) {
      return;
    }

    // Build a normalized-text -> image lookup once per post/content change.
    const normalizedLookup = new Map<string, string>();
    Object.entries(sectionImages).forEach(([key, value]) => {
      if (value && value.trim()) {
        normalizedLookup.set(normalizeTextForCompare(key), value);
      }
    });
    if (normalizedLookup.size === 0) return;

    // Re-query headings live on every check instead of caching them once.
    // A stale cached list is the classic reason a scroll-spy "works for
    // the first heading, then stops": if the array was captured before
    // the DOM fully settled, or a resize/reflow shifted things, every
    // later computation silently uses the wrong set of elements. Blog
    // posts have at most a handful of headings, so re-querying is cheap.
    const getHeadings = () => Array.from(container.querySelectorAll("h1, h2")) as HTMLElement[];

    const computeActiveImage = () => {
      const headings = getHeadings();
      if (headings.length === 0) return;

      // Use raw viewport-relative rect.top — NOT relative to the container.
      //
      // Why: on desktop the text column scrolls internally, so both
      // rect.top AND containerTop change together → relativeTop stays
      // the same → no switch. On mobile the whole page scrolls, same
      // problem. Using rect.top directly (viewport-relative) works in
      // both cases: it changes whenever *any* scroll parent moves.
      let current: HTMLElement | null = null;
      let currentTop = -Infinity;

      for (const heading of headings) {
        const { top } = heading.getBoundingClientRect();
        // A heading is "active" once its top has entered the upper
        // SECTION_ACTIVATION_OFFSET_PX of the viewport.
        if (top <= SECTION_ACTIVATION_OFFSET_PX && top > currentTop) {
          currentTop = top;
          current = heading;
        }
      }

      if (!current) {
        // No heading has reached the activation line yet — show cover image.
        setActiveImage((prev) => (prev === fallbackImage ? prev : fallbackImage));
        return;
      }

      const text = normalizeTextForCompare(current.textContent || "");
      const matchedImage = normalizedLookup.get(text);

      if (!matchedImage && process.env.NODE_ENV !== "production") {
        console.warn(
          "[useActiveSectionImage] No sectionImages match for heading:",
          JSON.stringify(current.textContent),
          "→ normalized:",
          JSON.stringify(text),
          "Available keys:",
          Array.from(normalizedLookup.keys())
        );
      }

      setActiveImage((prev) => {
        const next = matchedImage || fallbackImage;
        return prev === next ? prev : next;
      });
    };

    // IntersectionObserver fires when a heading crosses the viewport
    // trigger line — works for desktop (container scroll) and mobile
    // (window scroll) because root: null = viewport.
    const observer = new IntersectionObserver(computeActiveImage, {
      root: null, // viewport — not container, so mobile window-scroll works
      rootMargin: `-${SECTION_ACTIVATION_OFFSET_PX}px 0px 0px 0px`,
      threshold: [0, 1],
    });
    getHeadings().forEach((h) => observer.observe(h));

    // Scroll listener as a backstop, throttled to one rAF per frame.
    // We listen to BOTH the container (desktop internal scroll) AND
    // window (mobile page scroll) so nothing is missed.
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        computeActiveImage();
      });
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    // Re-observe on resize too, in case layout shifts change heading order/position.
    const onResize = () => {
      observer.disconnect();
      getHeadings().forEach((h) => observer.observe(h));
      computeActiveImage();
    };
    window.addEventListener("resize", onResize);

    computeActiveImage();

    return () => {
      observer.disconnect();
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [containerRef, post.slug, post.htmlContent, post.sectionImages, fallbackImage]);

  return activeImage;
}

export default function BlogDetailPage() {
  const params = useParams();
  const slugParam = params?.slug;
  const slug = typeof slugParam === "string" ? slugParam : slugParam?.[0];
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";
  const fontClass = isLuxury ? "font-cormorant-garamond" : "font-poppins";

  const post = slug ? BLOG_POSTS.find((p) => p.slug === slug) : undefined;
  const pageHeading = slug ? getBlogSeo(slug)?.h1 ?? post?.title : undefined;

  // Ref to the scrollable text column on the split (desktop) layout.
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const imageSrc = post?.image || "/Blog/Blog1.webp";

  // Falls back to `imageSrc` whenever there's no sectionImages match yet
  // (e.g. before scrolling, or if the post has no sectionImages at all).
  const activeImage = useActiveSectionImage(
    scrollContainerRef,
    post ?? ({ slug: "", sectionImages: {} } as BlogPost),
    imageSrc
  );

  if (!post) {
    return (
      <div className={`min-h-screen flex items-center justify-center px-4 ${fontClass}`}>
        <Typography variant="h1" className={fontClass}>Post not found</Typography>
      </div>
    );
  }

  const textColor = isLuxury ? "#FFFFFF" : "#555555";
  const colors: BlogDetailColors = isLuxury
    ? { heading: textColor, body: textColor, mutedBorder: "rgba(255,255,255,0.2)" }
    : { heading: textColor, body: textColor, mutedBorder: "rgba(0,0,0,0.08)" };

  const isVerticalLayout = post.slug === "sustainable-ceramic-tiles";

  const body = getEffectiveHtmlContent(post)
    ? renderHtmlBody(post, colors, isLuxury)
    : renderStructuredBody(post, colors, theme);

  /* Fill viewport below 80px navbar spacer; pt/pb (4px each) included via
     border-box. Applied at ALL sizes now (not just lg+) so the image can
     have a genuinely fixed slot and the text column scrolls in its own
     bounded panel beneath it, on mobile and desktop alike. */
  const splitMainHeight = "h-[calc(100vh-80px)] max-h-[calc(100vh-80px)]";

  return (
    <main
      className={`w-full bg-inherit box-border ${fontClass} ${isVerticalLayout
        ? "overflow-y-auto pt-8 pb-8 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20"
        : `pt-2 pb-8 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 ${splitMainHeight} overflow-hidden flex flex-col`
        }`}
    >
      {isVerticalLayout ? (
        <div className="max-w-[1200px] mx-auto w-full flex flex-col gap-8 sm:gap-12">
          <div
            className={`relative w-full aspect-21/9 overflow-hidden shadow-lg sm:shadow-xl`}
          >
            <Image src={imageSrc} alt={post.title} fill className="object-cover" priority sizes="100vw" />
          </div>

          <div className="flex flex-col gap-6 sm:gap-8 max-w-[900px] mx-auto w-full">
            <Typography
              variant="display-xl"
              className={cn(
                "font-normal leading-tight text-center sm:text-left",
                fontClass,
                isLuxury ? "!text-white" : "!text-[#555555]"
              )}
              style={{ color: textColor }}
            >
              {pageHeading}
            </Typography>

            <div className="flex flex-col gap-5 sm:gap-6">{body}</div>
          </div>
        </div>
      ) : (
        <div className="mx-auto w-full max-w-[1400px] flex flex-col lg:flex-row lg:items-stretch gap-[2px] lg:gap-10 xl:gap-14 h-full min-h-0 flex-1">
          {/* Image panel: a fixed-size, non-scrolling slot at all
              breakpoints. It never moves — it's simply outside the
              scrollable area, not "stuck" via position:sticky. That's
              what makes overlap structurally impossible: the image and
              text are two separate boxes (shrink-0 vs flex-1+overflow),
              not one layer pinned on top of another.
               < lg : fixed 260x260 square, centered, at the top.
               ≥ lg : fills the right column, full height of the row. */}
          <div className="order-1 lg:order-2 w-full lg:flex-1 lg:min-w-0 flex flex-col shrink-0 pb-5 lg:pb-0">
            <div
              className="relative w-[260px] h-[260px] mx-auto lg:w-full lg:h-auto lg:mx-0 lg:aspect-auto lg:flex-1 lg:min-h-[280px] overflow-hidden shadow-md lg:shadow-xl"
            >
              <Image
                src={activeImage}
                alt={post.title}
                fill
                className="object-cover transition-opacity duration-500"
                priority
                sizes="(max-width: 1024px) 260px, 50vw"
              />
            </div>
          </div>

          {/* Text panel: the ONLY thing that scrolls, at every breakpoint.
              `flex-1 min-h-0 overflow-y-auto` makes it fill whatever
              vertical space is left after the image's fixed slot above,
              and scroll internally within that space — the image never
              moves, exactly as requested. */}
          <div
            ref={scrollContainerRef}
            className="order-2 lg:order-1 w-full lg:flex-1 lg:min-w-0 min-h-0 flex-1 flex flex-col overflow-y-auto lg:pr-2 xl:pr-4 scrollbar-hide"
          >
            <Typography
              variant="display-xl"
              className={cn(
                // `max-w-xl` (≈576px) only kicks in at lg+ now. Below
                // 1024px it's removed entirely so the title uses the
                // full column width and wraps naturally at word
                // boundaries — `break-words` + `text-wrap: pretty`
                // (via inline style below) avoid awkward mid-word
                // breaks or overly ragged lines, with no manual <br>
                // needed anywhere.
                "font-normal leading-[1.1] tracking-tight mb-4 sm:mb-5 text-left w-full break-words lg:max-w-xl text-[26px] sm:text-[34px] md:text-[38px] lg:text-[42px]",
                fontClass,
                isLuxury ? "!text-white" : "!text-[#555555]"
              )}
              style={{ color: textColor, textWrap: "pretty" }}
            >
              {pageHeading}
            </Typography>

            <div className="flex flex-col gap-4 sm:gap-5 text-left">{body}</div>
          </div>
        </div>
      )}
    </main>
  );
}