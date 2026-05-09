"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { BlogPost, BlogContentItem } from "@/lib/constants/blogs";

export default function BlogDetailClient({ post }: { post: BlogPost }) {
  const { theme } = useTheme();
  
  const textColor = theme === "luxury" ? "#FFFFFF" : undefined;
  const borderColor = theme === "luxury" ? "border-[#F79440]" : "border-transparent";

  const isVerticalLayout = post.slug === "sustainable-ceramic-tiles";

  return (
    <main className={`min-h-screen pt-24 pb-20 px-6 md:px-12 lg:px-20 bg-inherit ${isVerticalLayout ? "flex flex-col overflow-y-auto" : "h-screen overflow-hidden flex flex-col lg:flex-row"}`}>
      
      {isVerticalLayout ? (
        <div className="max-w-[1200px] mx-auto w-full flex flex-col gap-12">
          {/* Top Image (Horizontal) */}
          <div className={`relative w-full aspect-[21/9] overflow-hidden border-2 ${borderColor} shadow-xl`}>
             <Image 
               src={post.image || "/Blog/Blog1.webp"} 
               alt={post.title} 
               fill 
               className="object-cover"
               priority
             />
          </div>

          {/* Content (Column) */}
          <div className="flex flex-col gap-8 max-w-[900px] mx-auto">
            <Typography 
              variant="display-xl" 
              className="font-normal leading-tight text-center"
              style={{ color: textColor }}
            >
              {post.title}
            </Typography>

            <div className="space-y-6">
              {post.htmlContent ? (
                <div 
                  className="blog-html-content"
                  style={{ 
                    color: textColor,
                    '--theme-text-color': textColor || 'inherit',
                  } as React.CSSProperties}
                  dangerouslySetInnerHTML={{ __html: post.htmlContent }} 
                />
              ) : (
                post.content.map((item, index) => renderContent(item, index, textColor))
              )}
            </div>
            
            {/* Horizontal Line & Back Link */}
            <div className="w-full h-[1px] bg-neutral-300 dark:bg-neutral-800 my-8" />
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 uppercase tracking-widest text-sm hover:opacity-70 transition-opacity self-start"
              style={{ color: textColor }}
            >
              <span style={{ fontSize: '1.2rem', marginRight: '0.5rem' }}>&larr;</span> Back to Blogs
            </Link>
          </div>
        </div>
      ) : (
        /* Regular Split Layout (Current) */
        <div className="max-w-[1400px] mx-auto w-full h-full flex flex-col lg:flex-row gap-8 lg:gap-16 pb-12">
          {/* Left Column - Sticky Image */}
          <div className="w-full lg:w-[45%] h-[40vh] lg:h-full relative flex-shrink-0">
            <div className={`relative w-full h-full border-2 ${borderColor} shadow-2xl`}>
              <Image 
                src={post.image || "/Blog/Blog1.webp"} 
                alt={post.title} 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column - Scrollable Content */}
          <div className="w-full lg:w-[55%] h-full flex flex-col pt-4 lg:pt-12 relative">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 uppercase tracking-widest text-sm mb-12 hover:opacity-70 transition-opacity"
              style={{ color: textColor }}
            >
              <span style={{ fontSize: '1.2rem', marginRight: '0.5rem' }}>&larr;</span> Back to Blogs
            </Link>

            <div className="flex-1 overflow-y-auto pr-4 lg:pr-8 custom-scrollbar">
              <Typography 
                variant="display-xl" 
                className="font-normal leading-tight mb-12"
                style={{ color: textColor }}
              >
                {post.title}
              </Typography>

              <div className="space-y-8 pb-20">
                {post.htmlContent ? (
                  <div 
                    className="blog-html-content"
                    style={{ 
                      color: textColor,
                      '--theme-text-color': textColor || 'inherit',
                    } as React.CSSProperties}
                    dangerouslySetInnerHTML={{ __html: post.htmlContent }} 
                  />
                ) : (
                  post.content.map((item, index) => renderContent(item, index, textColor))
                )}
              </div>
            </div>

            {/* Social Share Footer (Fixed at bottom of right column) */}
            <div className="absolute bottom-0 left-0 right-0 py-6 bg-gradient-to-t from-white via-white to-transparent dark:from-neutral-950 dark:via-neutral-950 flex justify-between items-center pr-8">
              <span className="uppercase tracking-widest text-xs font-semibold" style={{ color: textColor }}>Share Article</span>
              <div className="flex gap-6">
                <button className="hover:opacity-60 transition-opacity font-semibold" style={{ color: textColor }}>FB</button>
                <button className="hover:opacity-60 transition-opacity font-semibold" style={{ color: textColor }}>X</button>
                <button className="hover:opacity-60 transition-opacity font-semibold" style={{ color: textColor }}>IN</button>
                <button className="hover:opacity-60 transition-opacity font-semibold" style={{ color: textColor }}>Link</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function renderContent(item: BlogContentItem, index: number, textColor: string | undefined) {
  switch (item.type) {
    case "paragraph":
      return (
        <Typography 
          key={index} 
          variant="body-lg" 
          className="leading-relaxed opacity-90"
          style={{ color: textColor }}
        >
          {item.text}
        </Typography>
      );
    case "heading":
      return (
        <Typography 
          key={index} 
          variant="h2" 
          className="mt-12 mb-6"
          style={{ color: textColor }}
        >
          {item.text}
        </Typography>
      );
    case "subheading":
      return (
        <Typography 
          key={index} 
          variant="h3" 
          className="mt-8 mb-4"
          style={{ color: textColor }}
        >
          {item.text}
        </Typography>
      );
    case "list":
      return (
        <ul key={index} className="list-disc pl-6 opacity-90 space-y-3" style={{ color: textColor }}>
          {item.items?.map((listItem, i) => (
            <li key={i}>
              <Typography variant="body-lg">{listItem}</Typography>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div key={index} className="overflow-x-auto my-8">
          <table className="w-full text-left border-collapse" style={{ color: textColor }}>
            <thead>
              <tr>
                {item.headers?.map((header, i) => (
                  <th key={i} className="border-b-2 border-current py-4 px-4 font-semibold uppercase tracking-wider text-sm">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {item.rows?.map((row, i) => (
                <tr key={i} className="border-b border-current opacity-80 hover:opacity-100 transition-opacity">
                  {row.map((cell, j) => (
                    <td key={j} className="py-4 px-4">
                      <Typography variant="body-lg">{cell}</Typography>
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
