"use client";

import { forwardRef } from "react";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";

const Solution = forwardRef<HTMLDivElement>((_, ref) => {
  const { theme } = useTheme();
  
  return (
    <div
      id="solution"
      ref={ref}
      className="min-h-[100dvh] w-full flex items-center justify-center"
      style={{ backgroundColor: theme === "luxury" ? "#3D3A3A" : "#FFFFFF" }}
    >
      <div className="relative z-10 w-full h-[100dvh] flex items-center justify-between px-6 md:px-12 lg:px-20">
        {/* Left side: Your one */}
        <div className="w-1/3 flex items-center justify-center">
          <Typography
            variant="display-3xl"
            className="text-center font-light tracking-[-0.02em] text-[#F79440]"
          >
            Your one
          </Typography>
        </div>

        {/* Middle: Space for tile (tile will animate here) */}
        <div className="w-1/3 flex items-center justify-center">
          {/* Empty space - tile from TileAnimation will appear here */}
        </div>

        {/* Right side: Stop Solution */}
        <div className="w-1/3 flex items-center justify-center">
          <Typography
            variant="display-3xl"
            className="text-center font-light tracking-[-0.02em] text-[#F79440]"
          >
            Stop Solution
          </Typography>
        </div>
      </div>
    </div>
  );
});

Solution.displayName = "Solution";

export default Solution;