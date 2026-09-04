"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/contexts/ThemeContext";

const CONTACT_ITEMS = [
  { label: "Contact Us", href: "/contact", icon: PhoneIcon },
  {
    label: "WhatsApp",
    href: "https://wa.me/918050078367",
    icon: WhatsAppIcon,
    openInNewTab: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/neeladhriceramics?igsh=ajM2aXVqdWNqMnJp",
    icon: InstagramIcon,
    openInNewTab: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/neeladhri-ceramics",
    icon: LinkedInIcon,
    openInNewTab: true,
  },
] as const;

function ContactIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className="block shrink-0"
    >
      {children}
    </svg>
  );
}

function PhoneIcon() {
  return (
    <ContactIcon>
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
    </ContactIcon>
  );
}

function WhatsAppIcon() {
  return (
    <ContactIcon>
      <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.01 4.54-3.69 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.89 2.38 1.01 2.54.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.28z" />
    </ContactIcon>
  );
}

function InstagramIcon() {
  return (
    <ContactIcon>
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
    </ContactIcon>
  );
}

function LinkedInIcon() {
  return (
    <ContactIcon>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </ContactIcon>
  );
}

function ContactMenuLink({
  label,
  href,
  icon: Icon,
  index,
  open,
  isLuxury,
  openInNewTab,
  onNavigate,
}: {
  label: string;
  href: string;
  icon: () => React.JSX.Element;
  index: number;
  open: boolean;
  isLuxury: boolean;
  openInNewTab?: boolean;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      onClick={onNavigate}
      style={{ transitionDelay: open ? `${index * 70}ms` : "0ms" }}
      className={cn(
        "group relative flex min-w-[168px] items-center gap-3 overflow-hidden rounded-full border-0 px-4 py-2.5",
        "shadow-[0_4px_12px_rgba(0,0,0,0.2)]",
        "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:-translate-y-0.5",
        "hover:shadow-[0_6px_18px_rgba(0,0,0,0.24)]",
        "sm:min-w-[180px] sm:px-5 sm:py-3",
        isLuxury
          ? "bg-gradient-to-r from-[#CBB9A5] to-[#513B27] hover:from-[#D6C6B4] hover:to-[#5E4630]"
          : "bg-gradient-to-r from-[#9A9690] via-[#5C5854] to-[#2A2825] hover:from-[#A4A099] hover:via-[#666260] hover:to-[#242220]",
        open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
      )}
    >
      <span
        className={cn(
          "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
          "bg-black/15 text-white",
          "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "group-hover:scale-110 group-hover:bg-black/25 group-hover:shadow-[0_0_10px_rgba(0,0,0,0.2)]"
        )}
      >
        <Icon />
      </span>

      <Typography
        variant="body-lg"
        className={cn(
          "relative z-10 font-normal font-poppins normal-case tracking-normal !text-white",
          "[text-shadow:0_1px_2px_rgba(0,0,0,0.22)]",
          "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "group-hover:translate-x-0.5 group-hover:tracking-wide"
        )}
      >
        {label}
      </Typography>
    </Link>
  );
}

export default function SiteChatbot() {
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Defer mount so this widget never becomes LCP (Lighthouse was flagging chatbot.png).
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    const show = () => setReady(true);

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(show, { timeout: 4000 });
      return () => window.cancelIdleCallback(idleId);
    }

    timeoutId = setTimeout(show, 2500);
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [open]);

  if (!ready) return null;

  const buttonGradient = isLuxury
    ? "radial-gradient(circle at center, #7B7B7B 0%, #121212 100%)"
    : "radial-gradient(circle at center, #513B27 0%, #CBB9A5 100%)";

  return (
    <div
      ref={rootRef}
      className={cn(
        "fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-4 z-[9998] flex flex-col items-end gap-3 sm:bottom-8 sm:right-6 md:bottom-10 md:right-10 lg:bottom-12 lg:right-12",
        // The wrapper spans the full button+menu column even when the menu
        // is closed (for the open/close transition), so without this it
        // silently blocks clicks on whatever sits underneath it (e.g.
        // buttons in other sections). Disable hit-testing on the wrapper
        // when closed, then re-enable it just for the toggle button below.
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      <div
        className={cn(
          "flex flex-col items-stretch gap-2.5",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!open}
      >
        {CONTACT_ITEMS.map((item, index) => (
          <ContactMenuLink
            key={item.label}
            label={item.label}
            href={item.href}
            icon={item.icon}
            index={index}
            open={open}
            isLuxury={isLuxury}
            openInNewTab={"openInNewTab" in item ? item.openInNewTab : undefined}
            onNavigate={() => setOpen(false)}
          />
        ))}
      </div>

      <button
        type="button"
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="pointer-events-auto relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.35)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 sm:h-16 sm:w-16"
        style={{ background: buttonGradient }}
      >
        <Image
          src="/chatbot.png"
          alt=""
          width={40}
          height={40}
          className="h-9 w-9 object-contain sm:h-10 sm:w-10"
          aria-hidden
        />
      </button>
    </div>
  );
}