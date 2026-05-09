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

function renderHtmlBody(post: BlogPost, colors: BlogDetailColors, isLuxury: boolean) {
  if (!post.htmlContent?.trim()) return null;
  return (
    <div
      className={`blog-html-content blog-detail-prose ${isLuxury ? "" : "blog-detail-prose-premium"}`}
      style={
        {
          color: colors.body,
          "--theme-text-color": colors.body,
        } as React.CSSProperties
      }
      dangerouslySetInnerHTML={{ __html: post.htmlContent }}
    />
  );
}

function renderStructuredBody(post: BlogPost, colors: BlogDetailColors, theme: string) {
  return post.content.map((item, index) =>
    renderContentItem(item, index, colors, theme)
  );
}

function renderContentItem(
  item: BlogContentItem,
  index: number,
  colors: BlogDetailColors,
  theme: string
) {
  const isLuxury = theme === "luxury";
  switch (item.type) {
    case "heading":
      return (
        <Typography
          key={index}
          variant="h2"
          className={`mb-3 border-b pb-2 text-left ${index === 0 ? "mt-0" : "mt-7"}`}
          style={{
            color: colors.heading,
            borderColor: isLuxury ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.08)",
          }}
        >
          {item.text}
        </Typography>
      );
    case "subheading":
      return (
        <Typography
          key={index}
          variant="h3"
          className={`text-left font-semibold ${index === 0 ? "mt-0" : "mt-6"} mb-2`}
          style={{ color: colors.heading }}
        >
          {item.text}
        </Typography>
      );
    case "paragraph":
      return (
        <Typography
          key={index}
          variant="body-lg"
          className={`text-left leading-[1.65] ${index === 0 ? "mt-0" : ""}`}
          style={{ color: colors.body }}
        >
          {item.text}
        </Typography>
      );
    case "list":
      return (
        <ul
          key={index}
          className={`list-disc space-y-2 pl-5 text-left ${index === 0 ? "mt-0" : "mt-4"}`}
          style={{ color: colors.body }}
        >
          {item.items?.map((li, i) => (
            <li key={i} className="leading-[1.65] pl-1">
              <Typography variant="body-lg" className="inline text-inherit" style={{ color: colors.body }}>
                {li}
              </Typography>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div key={index} className={`overflow-x-auto ${index === 0 ? "mt-0" : "my-6"}`}>
          <table
            className={`w-full border-collapse border text-left ${isLuxury ? "border-white/20" : "border-black/10"}`}
          >
            <thead>
              <tr className={isLuxury ? "bg-white/5" : "bg-black/3"}>
                {item.headers?.map((header, i) => (
                  <th
                    key={i}
                    className={`border px-3 py-2 text-left text-sm font-semibold sm:px-4 sm:py-3 ${isLuxury ? "border-white/20" : "border-black/10"}`}
                  >
                    <Typography variant="h4" style={{ color: colors.heading }}>
                      {header}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {item.rows?.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`border px-3 py-2 sm:px-4 sm:py-3 ${isLuxury ? "border-white/20" : "border-black/10"}`}
                    >
                      <Typography variant="body-lg" style={{ color: colors.body }}>
                        {cell}
                      </Typography>
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

  const body = post.htmlContent?.trim()
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
              className="font-semibold leading-[1.15] tracking-tight mb-5 sm:mb-6 text-left max-w-xl"
              style={{ color: colors.heading }}
            >
              {post.title}
            </Typography>

            <div className="flex flex-col gap-5 sm:gap-6 text-left">{body}</div>
          </div>
        </div>
      )}
    </main>
  );
}
