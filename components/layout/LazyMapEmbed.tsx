"use client";

import { useEffect, useRef, useState } from "react";

type LazyMapEmbedProps = {
  src: string;
  title: string;
  height?: number;
};

/** Mount Google Maps iframe only when near the viewport (~400KB of Maps JS). */
export default function LazyMapEmbed({
  src,
  title,
  height = 160,
}: LazyMapEmbedProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full" style={{ minHeight: height }}>
      {show ? (
        <iframe
          src={src}
          width="100%"
          height={height}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center bg-neutral-800 text-neutral-500 text-xs"
          style={{ height }}
          aria-hidden
        >
          Map
        </div>
      )}
    </div>
  );
}
