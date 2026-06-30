"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { BLOG_POSTS, BlogContentItem, BlogPost } from "@/lib/constants/blogs";
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

function getEffectiveHtmlContent(post: BlogPost) {
  const raw = post.htmlContent?.trim();
  if (!raw) return null;
  const sanitized = stripInlineColorFromHtml(stripLeadingTitleFromHtml(raw, post.title));

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

function _unused(item: BlogContentItem) {
  // keep file compiling if BlogContentItem import is otherwise unused in future edits
  return item;
}

function renderContentItem(
  item: BlogContentItem,
  index: number,
  colors: BlogDetailColors,
  theme: string
) {
  // legacy: no longer used (structured posts now use the same `.blog-html-content` styles)
  void item;
  void index;
  void colors;
  void theme;
  return null;
}

export default function BlogDetailPage() {
  const params = useParams();
  const slugParam = params?.slug;
  const slug = typeof slugParam === "string" ? slugParam : slugParam?.[0];
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";
  const fontClass = isLuxury ? "font-cormorant-garamond" : "font-poppins";

  const post = slug ? BLOG_POSTS.find((p) => p.slug === slug) : undefined;

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

  const imageSrc = post.image || "/Blog/Blog1.webp";

  const isVerticalLayout = post.slug === "sustainable-ceramic-tiles";

  const body = getEffectiveHtmlContent(post)
    ? renderHtmlBody(post, colors, isLuxury)
    : renderStructuredBody(post, colors, theme);

  /* Fill viewport below 80px navbar spacer; pt/pb (4px each) included via border-box */
  const splitMainHeight = "lg:h-[calc(100vh-80px)] lg:max-h-[calc(100vh-80px)]";

  return (
    <main
      className={`w-full bg-inherit box-border ${fontClass} ${
        isVerticalLayout
          ? "overflow-y-auto pt-8 pb-8 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20"
          : `pt-2 pb-8 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 ${splitMainHeight} lg:overflow-hidden lg:flex lg:flex-col`
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
              {post.title}
            </Typography>

            <div className="flex flex-col gap-5 sm:gap-6">{body}</div>
          </div>
        </div>
      ) : (
        <div className="mx-auto w-full max-w-[1400px] flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-10 xl:gap-14 h-full min-h-0 flex-1">
          {/* Mobile / tablet: hero image first */}
          <div className="order-1 lg:order-2 w-full lg:flex-1 lg:min-w-0 flex flex-col">
            <div
              className={`relative w-full aspect-4/3 sm:aspect-16/10 lg:aspect-auto lg:flex-1 lg:min-h-[280px] min-h-[200px] overflow-hidden shadow-lg lg:shadow-xl`}
            >
              <Image
                src={imageSrc}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text column: top aligns with image; scrolls inside row on desktop */}
          <div
            className="order-2 lg:order-1 w-full lg:flex-1 lg:min-w-0 min-h-0 flex flex-col lg:overflow-y-auto lg:pr-2 xl:pr-4 scrollbar-hide"
          >
            <Typography
              variant="display-xl"
              className={cn(
                "font-normal leading-[1.1] tracking-tight mb-4 sm:mb-5 text-left max-w-xl text-[26px] sm:text-[34px] md:text-[38px] lg:text-[42px]",
                fontClass,
                isLuxury ? "!text-white" : "!text-[#555555]"
              )}
              style={{ color: textColor }}
            >
              {post.title}
            </Typography>

            <div className="flex flex-col gap-4 sm:gap-5 text-left">{body}</div>
          </div>
        </div>
      )}
    </main>
  );
}
