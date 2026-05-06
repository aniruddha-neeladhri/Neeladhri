// "use client";

// import { useRef, useState, useEffect } from "react";
// import Image from "next/image";
// import Typography from "@/lib/Typography";
// import { useTheme } from "@/lib/contexts/ThemeContext";

// const images = [
//   { id: 1, src: "/Home/solution1.png", alt: "Solution 1" },
//   { id: 2, src: "/Home/solution2.png", alt: "Solution 2" },
//   { id: 3, src: "/Home/solution3.png", alt: "Solution 3" },
//   { id: 4, src: "/Home/solution4.png", alt: "Solution 4" },
// ];

// export default function Onestopsolution() {
//   const { theme } = useTheme();
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [isInSection, setIsInSection] = useState(false);
//   const accumulatedDeltaRef = useRef(0);

//   // Track when section is in view
//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           setIsInSection(entry.isIntersecting && entry.intersectionRatio > 0.5);
//         });
//       },
//       { threshold: [0, 0.5, 1] }
//     );

//     observer.observe(section);
//     return () => observer.disconnect();
//   }, []);

//   // Total positions for the carousel (4 images + 1 dotted box = 5 items, showing 3 at a time = 3 positions)
//   const maxIndex = 2;

//   // Handle horizontal scroll - only when actively scrolling horizontally in this section
//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const handleWheel = (e: WheelEvent) => {
//       if (!isInSection) return;

//       // Check if user is trying to scroll horizontally (more horizontal movement)
//       const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 10;
      
//       // Or if they're using trackpad/mouse with accumulated vertical scroll while in section
//       if (!isHorizontalScroll && Math.abs(e.deltaY) > 0) {
//         accumulatedDeltaRef.current += e.deltaY;
        
//         // If accumulated scroll is small, stay in section and do horizontal effect
//         if (Math.abs(accumulatedDeltaRef.current) < 50) {
//           e.preventDefault();
          
//           const direction = accumulatedDeltaRef.current > 30 ? 1 : accumulatedDeltaRef.current < -30 ? -1 : 0;
          
//           if (direction !== 0) {
//             const newIndex = Math.max(0, Math.min(maxIndex, currentIndex + direction));
//             if (newIndex !== currentIndex) {
//               setCurrentIndex(newIndex);
//               accumulatedDeltaRef.current = 0;
//             }
//           }
//           return;
//         } else {
//           // Let it pass through to next section - reset accumulated
//           accumulatedDeltaRef.current = 0;
//         }
//       }
      
//       // Handle explicit horizontal scroll
//       if (isHorizontalScroll) {
//         e.preventDefault();
//         const direction = e.deltaX > 0 ? 1 : -1;
//         const newIndex = Math.max(0, Math.min(maxIndex, currentIndex + direction));
        
//         if (newIndex !== currentIndex) {
//           setCurrentIndex(newIndex);
//         }
//       }
//     };

//     window.addEventListener("wheel", handleWheel, { passive: false });
//     return () => window.removeEventListener("wheel", handleWheel);
//   }, [currentIndex, isInSection, maxIndex]);

//   return (
//     <div
//       id="onestopsolution"
//       ref={sectionRef}
//       className="min-h-[100dvh] w-full flex flex-col relative overflow-hidden"
//       style={{ backgroundColor: theme === "luxury" ? "#3D3A3A" : "#FFFFFF" }}
//     >
//       {/* Heading */}
//       <div className="pt-8 pb-4 px-6">
//         <Typography
//           variant="display-3xl"
//           className="font-light tracking-[-0.02em]"
//           style={{ color: "#F79440" }}
//         >
//           Your one
//           <br />
//           Stop Solution
//         </Typography>
//       </div>

//       {/* 3 Column Layout - With gaps between columns */}
//       <div
//         ref={scrollContainerRef}
//         className="flex-1 grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4 md:px-6 lg:px-8"
//       >
//           {/* First Column - cycles through: solution1 -> dotted box -> solution3 */}
//           <div className="relative h-full overflow-hidden">
//             <div
//               className="absolute inset-0 transition-all duration-700 ease-out"
//               style={{
//                 opacity: currentIndex === 0 ? 1 : 0,
//                 transform: `translateX(${currentIndex === 0 ? 0 : -100}%)`,
//               }}
//             >
//               <Image
//                 src={images[0].src}
//                 alt={images[0].alt}
//                 fill
//                 className="object-contain"
//                 sizes="33vw"
//                 priority
//               />
//             </div>
            
//             {/* Dotted Box with Tile - appears in 1st position on scroll */}
//             <div
//               className="absolute inset-0 border-4 border-dashed flex items-center justify-center rounded-lg transition-all duration-700 ease-out"
//               style={{
//                 borderColor: theme === "luxury" ? "#F79440" : "#000000",
//                 backgroundColor: theme === "luxury" ? "rgba(247, 148, 64, 0.05)" : "rgba(0, 0, 0, 0.02)",
//                 opacity: currentIndex === 1 ? 1 : 0,
//                 transform: `translateX(${currentIndex === 1 ? 0 : (currentIndex < 1 ? 100 : -100)}%)`,
//               }}
//             >
//             </div>
            
//             {/* solution3 in 1st position */}
//             <div
//               className="absolute inset-0 transition-all duration-700 ease-out"
//               style={{
//                 opacity: currentIndex === 2 ? 1 : 0,
//                 transform: `translateX(${currentIndex === 2 ? 0 : 100}%)`,
//               }}
//             >
//               <Image
//                 src={images[2].src}
//                 alt={images[2].alt}
//                 fill
//                 className="object-contain"
//                 sizes="33vw"
//               />
//             </div>
//           </div>

//           {/* Center Column - cycles through: dotted box -> solution3 -> solution4 */}
//           <div className="relative h-full overflow-hidden">
//             {/* Dotted Box with Tile - center position initially */}
//             <div
//               className="absolute inset-0 border-4 border-dashed flex items-center justify-center rounded-lg transition-all duration-700 ease-out"
//               style={{
//                 borderColor: theme === "luxury" ? "#F79440" : "#000000",
//                 backgroundColor: theme === "luxury" ? "rgba(247, 148, 64, 0.05)" : "rgba(0, 0, 0, 0.02)",
//                 opacity: currentIndex === 0 ? 1 : 0,
//                 transform: `translateX(${currentIndex === 0 ? 0 : -100}%)`,
//               }}
//             >
//             </div>
            
//             {/* solution3 in center */}
//             <div
//               className="absolute inset-0 transition-all duration-700 ease-out"
//               style={{
//                 opacity: currentIndex === 1 ? 1 : 0,
//                 transform: `translateX(${currentIndex === 1 ? 0 : (currentIndex < 1 ? 100 : -100)}%)`,
//               }}
//             >
//               <Image
//                 src={images[2].src}
//                 alt={images[2].alt}
//                 fill
//                 className="object-contain"
//                 sizes="33vw"
//               />
//             </div>
            
//             {/* solution4 in center */}
//             <div
//               className="absolute inset-0 transition-all duration-700 ease-out"
//               style={{
//                 opacity: currentIndex === 2 ? 1 : 0,
//                 transform: `translateX(${currentIndex === 2 ? 0 : 100}%)`,
//               }}
//             >
//               <Image
//                 src={images[3].src}
//                 alt={images[3].alt}
//                 fill
//                 className="object-contain"
//                 sizes="33vw"
//               />
//             </div>
//           </div>

//           {/* Third Column - cycles through: solution2 -> solution4 -> dotted box */}
//           <div className="relative h-full overflow-hidden">
//             <div
//               className="absolute inset-0 transition-all duration-700 ease-out"
//               style={{
//                 opacity: currentIndex === 0 ? 1 : 0,
//                 transform: `translateX(${currentIndex === 0 ? 0 : -100}%)`,
//               }}
//             >
//               <Image
//                 src={images[1].src}
//                 alt={images[1].alt}
//                 fill
//                 className="object-contain"
//                 sizes="33vw"
//                 priority
//               />
//             </div>
            
//             {/* solution4 in 3rd position */}
//             <div
//               className="absolute inset-0 transition-all duration-700 ease-out"
//               style={{
//                 opacity: currentIndex === 1 ? 1 : 0,
//                 transform: `translateX(${currentIndex === 1 ? 0 : (currentIndex < 1 ? 100 : -100)}%)`,
//               }}
//             >
//               <Image
//                 src={images[3].src}
//                 alt={images[3].alt}
//                 fill
//                 className="object-contain"
//                 sizes="33vw"
//               />
//             </div>
            
//             {/* Dotted Box with Tile - moves to 3rd position */}
//             <div
//               className="absolute inset-0 border-4 border-dashed flex items-center justify-center rounded-lg transition-all duration-700 ease-out"
//               style={{
//                 borderColor: theme === "luxury" ? "#F79440" : "#000000",
//                 backgroundColor: theme === "luxury" ? "rgba(247, 148, 64, 0.05)" : "rgba(0, 0, 0, 0.02)",
//                 opacity: currentIndex === 2 ? 1 : 0,
//                 transform: `translateX(${currentIndex === 2 ? 0 : 100}%)`,
//               }}
//             >
//             </div>
//           </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";

const images = [
  { id: 1, src: "/Home/solution1.png", alt: "Solution 1" },
  { id: 2, src: "/Home/solution2.png", alt: "Solution 2" },
  { id: 3, src: "/Home/solution3.png", alt: "Solution 3" },
  { id: 4, src: "/Home/solution4.png", alt: "Solution 4" },
  { id: 5, src: "/Home/solution5.png", alt: "Solution 5" },
  { id: 6, src: "/Home/solution6.png", alt: "Solution 6" },
  { id: 7, src: "/Home/solution7.png", alt: "Solution 7" },
  { id: 8, src: "/Home/solution8.png", alt: "Solution 8" },
  { id: 9, src: "/Home/solution9.png", alt: "Solution 9" },
  { id: 10, src: "/Home/solution10.png", alt: "Solution 10" },
  { id: 11, src: "/Home/solution11.png", alt: "Solution 11" },
  { id: 12, src: "/Home/solution12.png", alt: "Solution 12" },
  { id: 13, src: "/Home/solution13.png", alt: "Solution 13" },
  { id: 14, src: "/Home/solution14.png", alt: "Solution 14" },
  { id: 15, src: "/Home/solution15.png", alt: "Solution 15" },
  { id: 16, src: "/Home/solution16.png", alt: "Solution 16" },
];

export default function Onestopsolution() {
  const { theme } = useTheme();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInSection, setIsInSection] = useState(false);
  const accumulatedDeltaRef = useRef(0);

  // Drag state
  const dragStartXRef = useRef<number | null>(null);
  const dragStartYRef = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragDeltaXRef = useRef(0);
  const dragDeltaYRef = useRef(0);
  const isHorizontalDragRef = useRef(false);

  // Natural horizontal sequence:
  // solution1 → [single dotted box + tile] → solution2..solution16
  type ImageItem = (typeof images)[number];
  type Item = { kind: "image"; image: ImageItem } | { kind: "dotted" };

  const sequence: Item[] = [
    ...(images[0] ? ([{ kind: "image", image: images[0] }] as const) : []),
    { kind: "dotted" as const },
    ...images.slice(1).map((image) => ({ kind: "image" as const, image })),
  ];

  const visibleCount = 3;
  const maxIndex = Math.max(0, sequence.length - visibleCount);

  // Track when section is in view
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInSection(entry.isIntersecting && entry.intersectionRatio > 0.5);
        });
      },
      { threshold: [0, 0.5, 1] }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Existing wheel scroll handler — untouched
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e: WheelEvent) => {
      if (!isInSection) return;

      const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 10;

      if (!isHorizontalScroll && Math.abs(e.deltaY) > 0) {
        accumulatedDeltaRef.current += e.deltaY;

        if (Math.abs(accumulatedDeltaRef.current) < 50) {
          e.preventDefault();

          const direction = accumulatedDeltaRef.current > 30 ? 1 : accumulatedDeltaRef.current < -30 ? -1 : 0;

          if (direction !== 0) {
            const newIndex = Math.max(0, Math.min(maxIndex, currentIndex + direction));
            if (newIndex !== currentIndex) {
              setCurrentIndex(newIndex);
              accumulatedDeltaRef.current = 0;
            }
          }
          return;
        } else {
          accumulatedDeltaRef.current = 0;
        }
      }

      if (isHorizontalScroll) {
        e.preventDefault();
        const direction = e.deltaX > 0 ? 1 : -1;
        const newIndex = Math.max(0, Math.min(maxIndex, currentIndex + direction));

        if (newIndex !== currentIndex) {
          setCurrentIndex(newIndex);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentIndex, isInSection, maxIndex]);

  // ── Pointer (mouse/touch) drag handlers ──────────────────────────────────
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reset = () => {
      dragStartXRef.current = null;
      dragStartYRef.current = null;
      dragDeltaXRef.current = 0;
      dragDeltaYRef.current = 0;
      isHorizontalDragRef.current = false;
      setIsDragging(false);
    };

    const onPointerDown = (e: PointerEvent) => {
      // Only left click for mouse; allow touch/pen.
      if (e.pointerType === "mouse" && e.button !== 0) return;

      dragStartXRef.current = e.clientX;
      dragStartYRef.current = e.clientY;
      dragDeltaXRef.current = 0;
      dragDeltaYRef.current = 0;
      isHorizontalDragRef.current = false;

      // Capture so the drag continues even if pointer leaves the section.
      section.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (dragStartXRef.current === null || dragStartYRef.current === null) return;

      dragDeltaXRef.current = e.clientX - dragStartXRef.current;
      dragDeltaYRef.current = e.clientY - dragStartYRef.current;

      if (!isHorizontalDragRef.current) {
        const absX = Math.abs(dragDeltaXRef.current);
        const absY = Math.abs(dragDeltaYRef.current);
        if (absX > 8 && absX > absY) {
          isHorizontalDragRef.current = true;
          setIsDragging(true);
        }
      }

      // If we’ve locked to horizontal, prevent the page from scrolling.
      if (isHorizontalDragRef.current) {
        e.preventDefault();
      }
    };

    const onPointerUpOrCancel = () => {
      if (dragStartXRef.current === null) return;

      const deltaX = dragDeltaXRef.current;
      if (Math.abs(deltaX) > 50) {
        const direction = deltaX < 0 ? 1 : -1; // drag left → next, drag right → prev
        setCurrentIndex((prev) => Math.max(0, Math.min(maxIndex, prev + direction)));
      }

      reset();
    };

    section.addEventListener("pointerdown", onPointerDown);
    section.addEventListener("pointermove", onPointerMove, { passive: false });
    section.addEventListener("pointerup", onPointerUpOrCancel);
    section.addEventListener("pointercancel", onPointerUpOrCancel);

    return () => {
      section.removeEventListener("pointerdown", onPointerDown);
      section.removeEventListener("pointermove", onPointerMove);
      section.removeEventListener("pointerup", onPointerUpOrCancel);
      section.removeEventListener("pointercancel", onPointerUpOrCancel);
    };
  }, [maxIndex]);

  return (
    <div
      id="onestopsolution"
      ref={sectionRef}
      className="min-h-[100dvh] w-full flex flex-col relative overflow-hidden select-none"
      style={{
        backgroundColor: theme === "luxury" ? "#3D3A3A" : "#FFFFFF",
        cursor: isDragging ? "grabbing" : "grab",
        touchAction: "pan-y",
      }}
    >
      {/* Heading — untouched */}
      <div className="pt-8 pb-4 px-6">
        <Typography
          variant="display-3xl"
          className="font-light tracking-[-0.02em]"
          style={{ color: "#F79440" }}
        >
          Your one
          <br />
          Stop Solution
        </Typography>
      </div>

      {/* 3 Column Layout — completely untouched */}
      <div
        ref={scrollContainerRef}
        className="flex-1 grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4 md:px-6 lg:px-8"
      >
        {(() => {
          const DottedBox = ({ active }: { active: boolean }) => (
            <div
              className="absolute inset-0 border-4 border-dashed flex items-center justify-center rounded-lg"
              style={{
                borderColor: theme === "luxury" ? "#F79440" : "#000000",
                backgroundColor: theme === "luxury" ? "rgba(247, 148, 64, 0.05)" : "rgba(0, 0, 0, 0.02)",
              }}
            >
              <div
                data-onestopsolution-tile-target="true"
                data-active={active}
                className="w-[74%] h-[74%] relative overflow-hidden"
              />
            </div>
          );

          const Img = ({ img, priority }: { img: (typeof images)[number]; priority?: boolean }) => (
            <div className="absolute inset-0">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-contain"
                sizes="33vw"
                draggable={false}
                priority={priority}
              />
            </div>
          );

          const Cell = ({ item, priority }: { item: Item | undefined; priority?: boolean }) => {
            if (!item) return <div className="absolute inset-0" />;
            if (item.kind === "dotted") return <DottedBox active />;
            return <Img img={item.image} priority={priority} />;
          };

          const left = sequence[currentIndex];
          const center = sequence[currentIndex + 1];
          const right = sequence[currentIndex + 2];

          return (
            <>
              <div className="relative h-full overflow-hidden">
                <Cell item={left} priority />
              </div>
              <div className="relative h-full overflow-hidden">
                <Cell item={center} />
              </div>
              <div className="relative h-full overflow-hidden">
                <Cell item={right} priority />
              </div>
            </>
          );
        })()}
      </div>
    </div>
  );
}