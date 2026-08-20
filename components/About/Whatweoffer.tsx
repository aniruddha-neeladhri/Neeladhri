// "use client";

// import Image from "next/image";
// import Typography from "@/lib/Typography";
// import { useTheme } from "@/lib/contexts/ThemeContext";

// const offerings = [
//   {
//     icon: "/About/tileicon.png",
//     title: "Versatile Tiles",
//     description:
//       "A wide range of wall, floor, vitrified, and designer finishes for every space.",
//   },
//   {
//     icon: "/About/bathroomicon.png",
//     title: "Complete Bathrooms",
//     description:
//       "End-to-end solutions including sanitaryware, fittings, and vanities.",
//   },
//   {
//     icon: "/About/kitchenicon.png",
//     title: "Modern Kitchens",
//     description:
//       "Functional kitchen essentials with sinks, hobs, and chimneys.",
//   },
//   {
//     icon: "/About/shelficon.png",
//     title: "Essential Accessories",
//     description:
//       "Reliable adhesives, grouts, and support for seamless installation.",
//   },
// ];

// export default function WhatWeOffer() {
//   const { theme } = useTheme();
//   const isLuxury = theme === "luxury";
//   const textColor = isLuxury ? "#ffffff" : "#555555";

//   return (
//     <section className="w-full py-10 md:py-14 lg:py-20 px-6 lg:px-20">
//       <div className="max-w-[1400px] mx-auto flex flex-col gap-8 md:gap-12">

//         {/* Heading */}
//         <Typography
//           variant="display-xl"
//           className="font-semibold"
//           style={{ color: textColor }}
//         >
//           What We Offer
//         </Typography>

//         {/* 4-column grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
//           {offerings.map((item, i) => (
//             <div key={i} className="flex flex-col gap-3">

//               {/* Icon */}
//               <div className="w-12 h-12 flex items-start">
//                 <Image
//                   src={item.icon}
//                   alt={item.title}
//                   width={48}
//                   height={48}
//                   className="object-contain"
//                 />
//               </div>

//               {/* Title */}
//               <Typography
//                 variant="h2"
//                 className="font-normal leading-snug"
//                 style={{ color: textColor }}
//               >
//                 {item.title}
//               </Typography>

//               {/* Description */}
//               <Typography
//                 variant="body-xl"
//                 className="font-light leading-relaxed"
//                 style={{ color: textColor }}
//               >
//                 {item.description}
//               </Typography>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";

const offerings = [
  {
    icon: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/about/a40c17f1-7c07-4dd3-aa4f-32a4bac453e1.png",
    title: "Complete Bathroom Solutions",
    description:
      "Everything your bathroom needs, from premium plumbing solutions to sanitaryware, bath fittings, and elegant vanities.",
  },
  {
    icon: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/about/8d76079c-5614-4c80-8c7d-ddbd1125c16a.png",
    title: "Wide Range of Tiles",
    description:
      "An extensive collection of wall, floor, vitrified and designer tiles.",
  },
  {
    icon: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/about/b4ca8f65-4d70-40e1-9c5b-0c28463c117b.png",
    title: "Wellness Collection",
    description:
      "Experience wellness with saunas, steam rooms and whirlpool baths.",
  },
  {
    icon: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/about/24990f98-6c08-4f18-aee8-7b7c38939d73.png",
    title: "Essential Accessories",
    description:
      "Reliable adhesives, grouts, and support for seamless installation.",
  },
];

export default function WhatWeOffer() {
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";
  const textColor = isLuxury ? "#ffffff" : "#555555";

  return (
    <section className="w-full py-8 sm:py-10 md:py-14 lg:py-20 px-4 sm:px-8 md:px-12 lg:px-10 xl:px-16">
      <div className="w-full flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12">

        {/* Heading */}
        <Typography
          variant="display-xl"
          className="font-semibold font-poppins"
          style={{ color: textColor }}
        >
          What We Offer
        </Typography>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-8 sm:gap-y-10 gap-x-8 sm:gap-x-10 md:gap-x-12 xl:gap-x-14">
          {offerings.map((item, i) => (
            <div key={i} className="flex flex-col gap-3 sm:gap-4 items-start text-left">

              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Title */}
              <Typography
                variant="h2"
                className="font-normal font-poppins leading-snug text-lg sm:text-xl xl:text-2xl sm:min-h-[2.4em] text-balance"
                style={{ color: textColor }}
              >
                {item.title}
              </Typography>

              {/* Description */}
              <Typography
                variant="body-xl"
                className="font-light font-poppins leading-relaxed text-sm sm:text-base xl:text-lg"
                style={{ color: textColor }}
              >
                {item.description}
              </Typography>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}