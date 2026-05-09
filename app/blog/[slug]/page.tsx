"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { BLOG_POSTS, BlogContentItem, BlogPost } from "@/lib/constants/blogs";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";

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

function sanitizeHtmlWithDom(html: string, title: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const body = doc.body;

  // Remove leading H1/H2/H3 if it matches the page title.
  const firstHeading = body.querySelector("h1,h2,h3");
  if (firstHeading) {
    const headingText = normalizeTextForCompare(firstHeading.textContent ?? "");
    const titleText = normalizeTextForCompare(title);
    if (headingText && headingText === titleText) {
      firstHeading.remove();
    }
  }

  // Remove empty <p> everywhere (covers &nbsp;, <br>, nested spans/strong/em, etc.)
  const paragraphs = Array.from(body.querySelectorAll("p"));
  for (const p of paragraphs) {
    const text = normalizeTextForCompare(p.textContent ?? "");
    const hasMeaningfulText = text !== "" && text !== "&nbsp;" && text !== "nbsp;";
    const hasNonTextMedia = !!p.querySelector("img,video,iframe,svg,table");
    if (!hasMeaningfulText && !hasNonTextMedia) {
      p.remove();
    }
  }

  // If any containers become empty after paragraph removal, trim them.
  const empties = Array.from(body.querySelectorAll("div,section,article"));
  for (const el of empties) {
    const text = normalizeTextForCompare(el.textContent ?? "");
    const hasChildren = el.querySelector("img,video,iframe,svg,table,ul,ol,h1,h2,h3,h4,p") !== null;
    if (!hasChildren && text === "") el.remove();
  }

  return body.innerHTML.trim();
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

function getEffectiveHtmlContent(post: BlogPost) {
  const raw = post.htmlContent?.trim();
  if (!raw) return null;
  const sanitized =
    typeof window !== "undefined" && typeof DOMParser !== "undefined"
      ? sanitizeHtmlWithDom(raw, post.title)
      : stripLeadingTitleFromHtml(raw, post.title);

  const finalHtml = sanitized.trim();
  return finalHtml ? finalHtml : null;
}

function renderHtmlBody(post: BlogPost, colors: BlogDetailColors, isLuxury: boolean) {
  const html = getEffectiveHtmlContent(post);
  if (!html) return null;
  return (
    <div
      className={`blog-html-content blog-detail-prose ${isLuxury ? "" : "blog-detail-prose-premium"}`}
      style={
        {
          color: colors.body,
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
      className={`blog-html-content blog-detail-prose ${isLuxury ? "" : "blog-detail-prose-premium"}`}
      style={
        {
          color: colors.body,
          "--theme-text-color": colors.body,
        } as React.CSSProperties
      }
    >
      {post.content.map((item, index) => {
        switch (item.type) {
          case "heading":
            return (
              <h2 key={index} style={{ color: colors.heading }}>
                {item.text}
              </h2>
            );
          case "subheading":
            return (
              <h3 key={index} style={{ color: colors.heading }}>
                {item.text}
              </h3>
            );
          case "paragraph":
            return <p key={index}>{item.text}</p>;
          case "list":
            return (
              <ul key={index}>
                {item.items?.map((li, i) => (
                  <li key={i}>{li}</li>
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
                        <th key={i} style={{ color: colors.heading }}>
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {item.rows?.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j}>{cell}</td>
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

  const post = slug ? BLOG_POSTS.find((p) => p.slug === slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Typography variant="h1">Post not found</Typography>
      </div>
    );
  }

  const isLuxury = theme === "luxury";
  const colors: BlogDetailColors = isLuxury
    ? { heading: "#FFFFFF", body: "rgba(255,255,255,0.92)", mutedBorder: "rgba(255,255,255,0.2)" }
    : { heading: "#333333", body: "#555555", mutedBorder: "rgba(0,0,0,0.08)" };

  const borderColor = isLuxury ? "border-[#F79440]" : "border-transparent";
  const imageSrc = post.image || "/Blog/Blog1.webp";

  const isVerticalLayout = post.slug === "sustainable-ceramic-tiles";

  const body = getEffectiveHtmlContent(post)
    ? renderHtmlBody(post, colors, isLuxury)
    : renderStructuredBody(post, colors, theme);

  /* Viewport row height under fixed header: pt-24 (6rem) + a little air */
  const splitRowLg = "lg:h-[calc(100vh-6.25rem)]";

  return (
    <main
      className={`w-full bg-inherit ${
        isVerticalLayout
          ? "min-h-screen overflow-y-auto pt-20 pb-12 sm:pt-24 sm:pb-16 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20"
          : `min-h-screen pt-10 pb-10 sm:pt-24 sm:pb-14 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 ${splitRowLg} lg:overflow-hidden`
      }`}
    >
      {isVerticalLayout ? (
        <div className="max-w-[1200px] mx-auto w-full flex flex-col gap-8 sm:gap-12">
          <div
            className={`relative w-full aspect-21/9 overflow-hidden border-2 ${borderColor} shadow-lg sm:shadow-xl`}
          >
            <Image src={imageSrc} alt={post.title} fill className="object-cover" priority sizes="100vw" />
          </div>

          <div className="flex flex-col gap-6 sm:gap-8 max-w-[900px] mx-auto w-full">
            <Typography
              variant="display-xl"
              className="font-semibold leading-tight text-center sm:text-left"
              style={{ color: colors.heading }}
            >
              {post.title}
            </Typography>

            <div className="flex flex-col gap-5 sm:gap-6">{body}</div>
          </div>
        </div>
      ) : (
        <div
          className={`mx-auto w-full max-w-[1400px] flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-10 xl:gap-14 ${splitRowLg}`}
        >
          {/* Mobile / tablet: hero image first */}
          <div className="order-1 lg:order-2 w-full lg:flex-1 lg:min-w-0 flex flex-col">
            <div
              className={`relative w-full aspect-4/3 sm:aspect-16/10 lg:aspect-auto lg:flex-1 lg:min-h-[280px] min-h-[200px] overflow-hidden border-2 ${borderColor} shadow-lg lg:shadow-xl`}
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
            className={`order-2 lg:order-1 w-full lg:flex-1 lg:min-w-0 min-h-0 flex flex-col lg:overflow-y-auto lg:pr-2 xl:pr-4 scrollbar-hide pb-2 lg:pb-0`}
          >
            <Typography
              variant="display-xl"
              className="font-semibold leading-[1.1] tracking-tight mb-4 sm:mb-5 text-left max-w-xl text-[26px] sm:text-[34px] md:text-[38px] lg:text-[42px]"
              style={{ color: colors.heading }}
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
