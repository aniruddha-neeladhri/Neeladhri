"use client";

import { forwardRef } from "react";
import Typography from "@/lib/Typography";

const Bathroom = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
    id="bathroom"
      ref={ref}
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/sections/ba.png)" }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-screen">
        <Typography
          variant="display-xl"
          className="text-center font-light tracking-[-0.02em] text-white"
          style={{ textShadow: "0 4px 20px rgba(0,0,0,0.8)", fontSize: "clamp(2.5rem,6vw,5rem)" }}
        >
          Bathroom
        </Typography>
      </div>
    </div>
  );
});

Bathroom.displayName = "Bathroom";

export default Bathroom;
