"use client";
import { forwardRef } from "react";
import Typography from "@/lib/Typography";

const Kitchen = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
     id="kitchen"
      ref={ref}
      className="min-h-[100dvh] w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/sections/li.png)" }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-[100dvh] w-full px-4">
        <Typography
          variant="display-xl"
          className="text-center font-light tracking-[-0.02em] text-white"
          style={{ textShadow: "0 4px 20px rgba(0,0,0,0.8)", fontSize: "clamp(2rem,6vw,5rem)" }}
        >
          Kitchen
        </Typography>
      </div>
    </div>
  );
});

Kitchen.displayName = "Kitchen";

export default Kitchen;