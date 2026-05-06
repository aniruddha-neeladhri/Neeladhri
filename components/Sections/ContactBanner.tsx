"use client";

import Image from "next/image";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { contactBannerImages } from "@/lib/constants/Contact";

export default function ContactBanner() {
  const { theme } = useTheme();
  const images = contactBannerImages(theme);

  return (
    <div className="relative w-full aspect-1920/600 overflow-hidden">
      
      {/* Image */}
      <Image
        src={images.banner}
        alt="Contact Us Banner"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/50" />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Typography 
          variant="display-3xl" 
          className="text-white font-light tracking-wide"
        >
          Contact Us
        </Typography>
      </div>

    </div>
  );
}