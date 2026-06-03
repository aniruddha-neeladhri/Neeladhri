"use client";

import Link from "next/link";
import Image from "next/image";
import Typography from "@/lib/Typography";
import { NAV_LINKS } from "@/lib/constants/Navlinks";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { motion } from "framer-motion";

interface NavbarProps {
  menuOpen: boolean;
  onMenuToggle: (open: boolean) => void;
}

function ThemeToggle({ size = "md" }: { size?: "sm" | "md" }) {
  const { theme, setTheme } = useTheme();
  const isPremium = theme === "premium";
  const isLuxuryNav = theme === "luxury";
  const isSm = size === "sm";

  const segmentClass = isSm
    ? "py-1.5 px-2"
    : "py-1.5 xl:py-2 px-4 xl:px-5";

  const luxuryTrackBg = "#555555";
  const luxuryActiveBg = "#000000";

  return (
    <div
      role="group"
      aria-label="Select theme"
      className={[
        "relative grid grid-cols-2 rounded-full p-1",
        "shadow-[0_2px_10px_rgba(0,0,0,0.18)]",
        isLuxuryNav ? "border border-transparent" : "bg-[#090404CC] border border-[#1f1816]",
        isSm ? "w-[168px]" : "w-[220px] xl:w-[248px]",
      ].join(" ")}
      style={isLuxuryNav ? { backgroundColor: luxuryTrackBg } : undefined}
    >
      <motion.div
        aria-hidden
        className={[
          "absolute top-1 bottom-1 rounded-full w-[calc(50%-0.25rem)]",
          isLuxuryNav ? "" : "bg-white shadow-[0_1px_6px_rgba(0,0,0,0.14)]",
        ].join(" ")}
        style={isLuxuryNav ? { backgroundColor: luxuryActiveBg } : undefined}
        initial={false}
        animate={{ left: isPremium ? "0.25rem" : "50%" }}
        transition={{ type: "spring", stiffness: 420, damping: 32 }}
      />

      <button
        type="button"
        onClick={() => setTheme("premium")}
        aria-pressed={isPremium}
        className={[
          "relative z-10 min-w-0 rounded-full cursor-pointer select-none text-center",
          "transition-colors duration-200",
          segmentClass,
        ].join(" ")}
      >
        <Typography
          variant={isSm ? "body-sm" : "body-lg"}
          className={[
            isSm ? "font-medium" : "font-normal tracking-wide",
            isLuxuryNav ? "!text-white" : "!text-black",
          ].join(" ")}
        >
          Premium
        </Typography>
      </button>

      <button
        type="button"
        onClick={() => setTheme("luxury")}
        aria-pressed={!isPremium}
        className={[
          "relative z-10 min-w-0 rounded-full cursor-pointer select-none text-center",
          "transition-colors duration-200",
          segmentClass,
        ].join(" ")}
      >
        <Typography
          variant={isSm ? "body-sm" : "body-lg"}
          className={[
            isSm ? "font-medium" : "font-normal tracking-wide",
            "!text-white",
          ].join(" ")}
        >
          Luxury
        </Typography>
      </button>
    </div>
  );
}

function HamburgerIcon({ isOpen, light }: { isOpen: boolean; light?: boolean }) {
  const barColor = light ? "bg-white" : "bg-[#2b2320]";

  return (
    <div className="flex flex-col gap-[5px] w-6 h-5 relative justify-center">
      <motion.span
        className={`block h-[2px] ${barColor} absolute left-0`}
        animate={
          isOpen
            ? { rotate: 45, y: 0, width: "24px" }
            : { rotate: 0, y: -7, width: "24px" }
        }
        transition={{ duration: 0.35, ease: [0.77, 0, 0.175, 1] }}
      />
      <motion.span
        className={`block h-[2px] ${barColor} absolute left-0`}
        style={{ width: "16px" }}
        animate={isOpen ? { opacity: 0 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className={`block h-[2px] ${barColor} absolute left-0`}
        animate={
          isOpen
            ? { rotate: -45, y: 0, width: "24px" }
            : { rotate: 0, y: 7, width: "24px" }
        }
        transition={{ duration: 0.35, ease: [0.77, 0, 0.175, 1] }}
      />
    </div>
  );
}

export default function Navbar({ menuOpen, onMenuToggle }: NavbarProps) {
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";

  return (
    <header
      className={[
        "w-full relative z-[10002] transition-colors duration-300",
        isLuxury ? "bg-black" : "bg-white",
      ].join(" ")}
    >
      <div className="mx-5 2xl:mx-10 h-[80px] flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="Neeladhri Ceramics Logo"
            width={100}
            height={36}
            className="object-contain py-2"
          />
        </Link>

        <div className="hidden lg:flex flex-1 justify-center">
          <ThemeToggle />
        </div>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-4 2xl:gap-6 shrink-0">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              className={[
                "transition-colors duration-200 font-medium whitespace-nowrap",
                "hover:text-[#F79440]",
                isLuxury ? "text-white" : "text-stone-600",
              ].join(" ")}
            >
              <Typography variant="body-lg" className="!text-inherit">
                {link.text}
              </Typography>
            </Link>
          ))}
        </nav>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-3 ml-auto">
          <ThemeToggle size="sm" />
          <button
            onClick={() => onMenuToggle(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="p-1 w-8 h-8 flex items-center justify-center"
          >
            <HamburgerIcon isOpen={menuOpen} light={isLuxury} />
          </button>
        </div>

      </div>
    </header>
  );
}