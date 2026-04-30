"use client";

import Typography from "@/lib/Typography";
import { BLOG_CONTENT } from "@/lib/constants/blogs";
import { useTheme } from "@/lib/contexts/ThemeContext";

const Placeholder = () => <div className="w-full h-full bg-neutral-200" />;

export default function FlooringIdeas() {
  const { theme } = useTheme();
  const currentContent = BLOG_CONTENT[theme as keyof typeof BLOG_CONTENT];
  const textColor = theme === "luxury" ? "#FFFFFF" : undefined;

  return (
    <section className="w-full py-12 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto flex flex-col xl:flex-row gap-10 xl:gap-8 items-start">

        {/* ── LEFT: TEXT CONTENT ── */}
        <div className="w-full xl:w-[38%] flex flex-col gap-6 xl:pt-4">
          <Typography
            variant="display-xl"
            className="font-normal leading-tight text-center xl:text-left"
            style={{ color: textColor }}
          >
            {currentContent.flooringIdeas.heading.split('\n').map((line: string, i: number) => (
              <span key={i}>
                {line}
                {i < currentContent.flooringIdeas.heading.split('\n').length - 1 && <br />}
              </span>
            ))}
          </Typography>

          <div className="space-y-5 leading-relaxed text-justify">
            <Typography variant="body-lg" style={{ color: textColor }}>
              <Typography variant="body-lg" className="block mb-1" style={{ color: textColor }}>
                {currentContent.flooringIdeas.importance.title}
              </Typography>
              {currentContent.flooringIdeas.importance.text}
            </Typography>

            <Typography variant="body-lg" style={{ color: textColor }}>
              <Typography variant="body-lg" className="block mb-1" style={{ color: textColor }}>
                {currentContent.flooringIdeas.materials.title}
              </Typography>
              {currentContent.flooringIdeas.materials.text}
            </Typography>
          </div>
        </div>

        <div
          className="w-full xl:w-[62%] grid grid-cols-3 grid-rows-12 gap-1.5 md:gap-2"
          style={{ height: "clamp(500px, 65vw, 860px)" }}
        >
          {/* A1 – tall top, READ ARTICLE */}
          <div className={`relative col-start-1 row-start-1 row-span-4 overflow-hidden ${theme === "luxury" ? "border-2 border-[#F79440]" : ""}`}>
            <Placeholder />
            {/* swap ↑ for: <Image src="/Blog/Blog1.webp" alt="…" fill className="object-cover" /> */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-[9px] md:text-[11px] tracking-[0.18em] uppercase bg-black/35 px-2.5 py-1">
                Read Article
              </span>
            </div>
          </div>

          {/* A2 – medium middle */}
          <div className={`relative col-start-1 row-start-5 row-span-3 overflow-hidden ${theme === "luxury" ? "border-2 border-[#F79440]" : ""}`}>
            <Placeholder />
          </div>

          {/* A3 – tall bottom */}
          <div className={`relative col-start-1 row-start-8 row-span-5 overflow-hidden ${theme === "luxury" ? "border-2 border-[#F79440]" : ""}`}>
            <Placeholder />
          </div>

          {/* B1 – landscape top */}
          <div className={`relative col-start-2 row-start-1 row-span-3 overflow-hidden ${theme === "luxury" ? "border-2 border-[#F79440]" : ""}`}>
            <Placeholder />
          </div>

          {/* B2 – landscape second */}
          <div className={`relative col-start-2 row-start-4 row-span-3 overflow-hidden ${theme === "luxury" ? "border-2 border-[#F79440]" : ""}`}>
            <Placeholder />
          </div>

          {/* B3 – landscape third */}
          <div className={`relative col-start-2 row-start-7 row-span-3 overflow-hidden ${theme === "luxury" ? "border-2 border-[#F79440]" : ""}`}>
            <Placeholder />
          </div>

          {/* B4 – landscape bottom */}
          <div className={`relative col-start-2 row-start-10 row-span-3 overflow-hidden ${theme === "luxury" ? "border-2 border-[#F79440]" : ""}`}>
            <Placeholder />
          </div>

          {/* C1 – short top */}
          <div className={`relative col-start-3 row-start-1 row-span-3 overflow-hidden ${theme === "luxury" ? "border-2 border-[#F79440]" : ""}`}>
            <Placeholder />
          </div>

          {/* C2 – medium middle */}
          <div className={`relative col-start-3 row-start-4 row-span-3 overflow-hidden ${theme === "luxury" ? "border-2 border-[#F79440]" : ""}`}>
            <Placeholder />
          </div>

          {/* C3 – tall bottom */}
          <div className={`relative col-start-3 row-start-7 row-span-6 overflow-hidden ${theme === "luxury" ? "border-2 border-[#F79440]" : ""}`}>
            <Placeholder />
          </div>
        </div>

      </div>
    </section>
  );
}