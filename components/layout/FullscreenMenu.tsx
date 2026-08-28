"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Typography from "@/lib/Typography";
import { NAV_LINKS } from "@/lib/constants/Navlinks";

export default function FullscreenMenu({ close }: { close: () => void }) {
  return (
    <div className="fixed top-[80px] left-0 right-0 bottom-0 z-[10001] overflow-hidden">

      {/* Left curtain */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
        style={{ originX: 0 }}
        className="absolute top-0 left-0 h-full w-1/2 bg-white z-10"
      />

      {/* Right curtain */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
        style={{ originX: 1 }}
        className="absolute top-0 right-0 h-full w-1/2 bg-white z-10"
      />

      {/* Nav links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.3, duration: 0.3 },
        }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 flex flex-col items-center justify-center gap-8 z-20"
      >
        {NAV_LINKS.map((link, index) => (
          <motion.div
            key={link.text}
            initial={{ y: 60, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.3 + index * 0.1,
                duration: 0.5,
                ease: [0.77, 0, 0.175, 1],
              },
            }}
            exit={{ y: 60, opacity: 0 }}
            className="flex flex-col items-center justify-center"
          >
            <Link href={link.href} onClick={close} className="transition-colors">
              <Typography
                variant="display-xl"
                className="font-semibold text-[#F79440] hover:text-orange-500"
              >
                {link.text}
              </Typography>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}