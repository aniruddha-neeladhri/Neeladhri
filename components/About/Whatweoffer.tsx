// "use client";

// import Typography from "@/lib/Typography";
// import { useTheme } from "@/lib/contexts/ThemeContext";

// const offerings = [
//   {
//     title: "Versatile Tiles",
//     description:
//       "A wide range of wall, floor, vitrified, and designer finishes for every space.",
//   },
//   {
//     title: "Complete Bathrooms",
//     description:
//       "End-to-end solutions including sanitaryware, fittings, and vanities.",
//   },
//   {
//     title: "Modern Kitchens",
//     description:
//       "Functional kitchen essentials with sinks, hobs, and chimneys.",
//   },
//   {
//     title: "Essential Accessories",
//     description:
//       "Reliable adhesives, grouts, and support for seamless installation.",
//   },
// ];

// export default function WhatWeOffer() {
//   const { theme } = useTheme();
//   const isLuxury = theme === "luxury";

//   return (
//     <section className="w-full py-10 md:py-14 lg:py-20 px-6 lg:px-20">
//       <div className="max-w-[1400px] mx-auto flex flex-col gap-8 md:gap-12">

//         {/* Heading */}
//         <Typography variant="display-xl" className={`font-normal ${isLuxury ? "text-white" : "text-black"}`}>
//           What We Offer
//         </Typography>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
//           {offerings.map((item, i) => (
//             <div
//               key={i}
//               className={`flex flex-col gap-4 rounded-xl overflow-hidden ${
//                 isLuxury
//                   ? "border border-white bg-transparent"
//                   : "bg-[#F7944066]"
//               }`}
//             >
//               {/* Card Title */}
//               <div className={`rounded-xl px-4 py-4 text-center border-1 border-white ${isLuxury ? "bg-black" : "bg-black"}`}>
//                 <Typography
//                   variant="body-xl"
//                   className="text-white font-light"
//                 >
//                   {item.title}
//                 </Typography>
                
//               </div>
//               {/* Card Description */}
//               <div className="px-4 pb-6">
//                 <Typography
//                   variant="body-xl"
//                   className={`font-light leading-relaxed text-center ${
//                     isLuxury ? "text-white" : "text-black"
//                   }`}
//                 >
//                   {item.description}
//                 </Typography>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }
"use client";

import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useState, useEffect } from "react";

const offerings = [
  {
    title: "Versatile Tiles",
    description:
      "A wide range of wall, floor, vitrified, and designer finishes for every space.",
  },
  {
    title: "Complete Bathrooms",
    description:
      "End-to-end solutions including sanitaryware, fittings, and vanities.",
  },
  {
    title: "Modern Kitchens",
    description:
      "Functional kitchen essentials with sinks, hobs, and chimneys.",
  },
  {
    title: "Essential Accessories",
    description:
      "Reliable adhesives, grouts, and support for seamless installation.",
  },
];

function TitleText({ title }: { title: string }) {
  // Starts off-screen left, then on next tick slides to center
  const [arrived, setArrived] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => {
      requestAnimationFrame(() => setArrived(true));
    });
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <Typography
      variant="body-xl"
      className={`inline-block text-white font-light
        transition-transform duration-300 ease-in-out
        ${arrived ? "translate-x-0 opacity-100" : "-translate-x-[150%] opacity-0"}`}
    >
      {title}
    </Typography>
  );
}

function OfferCard({
  item,
  isLuxury,
}: {
  item: (typeof offerings)[0];
  isLuxury: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [phase, setPhase] = useState<"idle" | "exit" | "enter">("idle");
  const [enterKey, setEnterKey] = useState(0);
useEffect(() => {
  let exitTimer: ReturnType<typeof setTimeout>;

  if (hovered) {
    setPhase("exit");
    exitTimer = setTimeout(() => {
      setPhase("enter");
      setEnterKey((k) => k + 1);
    }, 280);
  } else {
    setPhase("idle");
  }

  return () => {
    clearTimeout(exitTimer);
  };
}, [hovered]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex flex-col gap-4 rounded-xl overflow-hidden
        transition-all duration-200 ease-out
        ${hovered ? "scale-[1.04] shadow-2xl" : "scale-100"}
        ${isLuxury ? "border border-white bg-transparent" : "bg-[#F7944066]"}`}
    >
      {/* Title bar */}
      <div className="rounded-xl px-4 py-4 text-center bg-black overflow-hidden">
        <div className="overflow-hidden">
          {phase === "enter" ? (
            <TitleText key={enterKey} title={item.title} />
          ) : (
            <Typography
              variant="body-xl"
              className={`inline-block text-white font-light
                transition-all duration-280 ease-in-out
                ${phase === "exit"
                  ? "translate-x-[150%] opacity-0"
                  : "translate-x-0 opacity-100"
                }`}
            >
              {item.title}
            </Typography>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="px-4 pb-6">
        <Typography
          variant="body-xl"
          className={`font-light leading-relaxed text-center ${
            isLuxury ? "text-white" : "text-black"
          }`}
        >
          {item.description}
        </Typography>
      </div>
    </div>
  );
}

export default function WhatWeOffer() {
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";

  return (
    <section className="w-full py-10 md:py-14 lg:py-20 px-6 lg:px-20">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8 md:gap-12">
        <Typography
          variant="display-xl"
          className={`font-normal ${isLuxury ? "text-white" : "text-black"}`}
        >
          What We Offer
        </Typography>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {offerings.map((item, i) => (
            <OfferCard key={i} item={item} isLuxury={isLuxury} />
          ))}
        </div>
      </div>
    </section>
  );
}