"use client";

import Link from "next/link";
import Image from "next/image";
import Typography from "@/lib/Typography";
import { NAV_LINKS } from "@/lib/constants/Navlinks";
import { useTheme } from "@/lib/contexts/ThemeContext";

interface NavbarProps {
  menuOpen: boolean;
  onMenuToggle: (open: boolean) => void;
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (   
    <div className="flex flex-col gap-[5px]">
      <span
        className={`block h-[2px] transition-all duration-300 origin-center ${
          open ? "w-6 rotate-45 translate-y-[3.5px] bg-black" : "w-6 bg-[#2b2320]"
        }`}
      />
      <span
        className={`block h-[2px] transition-all duration-300 ${
          open ? "opacity-0 w-6 bg-black" : "w-4 bg-[#2b2320]"
        }`}
      />
      <span
        className={`block h-[2px] transition-all duration-300 origin-center ${
          open ? "w-6 -rotate-45 -translate-y-[3.5px] bg-black" : "w-6 bg-[#2b2320]"
        }`}
      />
    </div>
  );
}

export default function Navbar({ menuOpen, onMenuToggle }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const displayText = theme === "premium" ? "Luxury" : "Premium";

  return (
    <header className="w-full bg-white">
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
          <button
            onClick={toggleTheme}
            className="bg-[#190B0BCC] px-6 py-1.5 xl:px-8 xl:py-2 rounded-full tracking-wider select-none whitespace-nowrap cursor-pointer"
          >
            <Typography variant="body-xl" className="text-white">{displayText}</Typography>
          </button>
        </div>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-4 2xl:gap-6 shrink-0">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              className="text-stone-600 hover:text-[#d4652a] transition-colors duration-200 font-medium whitespace-nowrap"
            >
              <Typography variant="body-lg">{link.text}</Typography>
            </Link>
          ))}
        </nav>

        <div className="flex lg:hidden items-center gap-3 ml-auto relative z-[10002]">
          {!menuOpen && (
            <button
              onClick={toggleTheme}
              className="bg-[#2b2320] px-8 py-2 rounded-full tracking-wider cursor-pointer"
            >
              <Typography variant="body-sm" className="text-white">{displayText}</Typography>
            </button>
          )}
          <button
            onClick={() => onMenuToggle(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="p-1"
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>

      </div>
    </header>
  );
}