// "use client";



// import { useEffect, useRef } from "react";

// import * as THREE from "three";



// function createMarbleTexture(): THREE.CanvasTexture {

//   const size = 512;

//   const canvas = document.createElement("canvas");

//   canvas.width  = size;

//   canvas.height = size;

//   const ctx = canvas.getContext("2d")!;



//   // --- Base fill ---

//   ctx.fillStyle = "#D8CAB5";

//   ctx.fillRect(0, 0, size, size);



//   // --- Gradient overlay ---

//   const baseGrad = ctx.createLinearGradient(0, 0, size, size);

//   baseGrad.addColorStop(0.0,  "rgba(225,212,192,0.7)");

//   baseGrad.addColorStop(0.4,  "rgba(216,202,181,0.5)");

//   baseGrad.addColorStop(0.75, "rgba(207,191,169,0.5)");

//   baseGrad.addColorStop(1.0,  "rgba(196,176,154,0.6)");

//   ctx.fillStyle = baseGrad;

//   ctx.fillRect(0, 0, size, size);



//   // --- Warm cloud patches ---

//   for (let i = 0; i < 16; i++) {

//     const x     = Math.random() * size;

//     const y     = Math.random() * size;

//     const r     = 60 + Math.random() * 110;

//     const alpha = 0.03 + Math.random() * 0.05;

//     const warm  = i % 2 === 0

//       ? `rgba(228,214,192,${alpha})`

//       : `rgba(200,183,158,${alpha})`;

//     const g = ctx.createRadialGradient(x, y, 0, x, y, r);

//     g.addColorStop(0, warm);

//     g.addColorStop(1, "rgba(0,0,0,0)");

//     ctx.fillStyle = g;

//     ctx.fillRect(0, 0, size, size);

//   }



//   // -------------------------------------------------------

//   // Multi-segment curvy vein — each vein is built from

//   // several short quadratic bezier segments with random

//   // perpendicular offsets, giving organic marble curvature

//   // -------------------------------------------------------

//   const buildVeinPath = (

//     x1: number, y1: number,

//     x2: number, y2: number,

//     segments: number,

//     wander: number   // how much each segment can deviate sideways

//   ): { pts: [number, number][] } => {

//     const pts: [number, number][] = [[x1, y1]];

//     const dx = (x2 - x1) / segments;

//     const dy = (y2 - y1) / segments;

//     // Perpendicular direction for wandering

//     const len   = Math.sqrt(dx * dx + dy * dy) || 1;

//     const perpX = -dy / len;

//     const perpY =  dx / len;



//     for (let i = 1; i <= segments; i++) {

//       const base = i / segments;

//       const ox = x1 + dx * i + perpX * (Math.random() - 0.5) * 2 * wander;

//       const oy = y1 + dy * i + perpY * (Math.random() - 0.5) * 2 * wander;

//       pts.push([ox, oy]);

//     }

//     return { pts };

//   };



//   const drawCurvyVein = (

//     x1: number, y1: number,

//     x2: number, y2: number,

//     width: number,

//     segments: number,

//     wander: number,

//     veinColor: string,

//     glowColor: string,

//     glowAlpha = 0.35

//   ) => {

//     const { pts } = buildVeinPath(x1, y1, x2, y2, segments, wander);



//     const strokePath = (lw: number, color: string, alpha: number) => {

//       ctx.beginPath();

//       ctx.moveTo(pts[0][0], pts[0][1]);

//       for (let i = 1; i < pts.length - 1; i++) {

//         // Smooth through midpoints

//         const mx = (pts[i][0] + pts[i + 1][0]) / 2;

//         const my = (pts[i][1] + pts[i + 1][1]) / 2;

//         ctx.quadraticCurveTo(pts[i][0], pts[i][1], mx, my);

//       }

//       // Last point

//       const last = pts[pts.length - 1];

//       ctx.lineTo(last[0], last[1]);



//       ctx.strokeStyle = color;

//       ctx.lineWidth   = lw;

//       ctx.globalAlpha = alpha;

//       ctx.lineCap     = "round";

//       ctx.lineJoin    = "round";

//       ctx.stroke();

//     };



//     // Outer glow

//     strokePath(width * 7, glowColor, glowAlpha * 0.4);

//     // Mid glow

//     strokePath(width * 3.5, glowColor, glowAlpha * 0.65);

//     // Core vein

//     strokePath(width, veinColor, 1.0);



//     ctx.globalAlpha = 1;

//   };



//   const GOLD_CORE = "#D8B483";

//   const GOLD_GLOW = "#DFC390";



//   // Main diagonal — heavily wandering, 10 segments

//   drawCurvyVein(size*0.55, 0,          size*0.10, size,       2.8, 10, 28, GOLD_CORE, GOLD_GLOW, 0.40);

//   // Crossing vein — top-right to mid-left

//   drawCurvyVein(size*0.80, 0,          size*0.30, size*0.68,  1.8, 8,  22, GOLD_CORE, GOLD_GLOW, 0.35);

//   // Right-side diagonal

//   drawCurvyVein(size*0.40, size*0.15,  size*0.90, size,       1.2, 8,  18, GOLD_CORE, GOLD_GLOW, 0.30);

//   // Fine hairline — top-left area

//   drawCurvyVein(size*0.15, 0,          size*0.50, size*0.45,  0.7, 7,  16, GOLD_CORE, GOLD_GLOW, 0.28);

//   // Bottom-right hairline

//   drawCurvyVein(size*0.60, size*0.50,  size*0.95, size,       0.6, 7,  14, GOLD_CORE, GOLD_GLOW, 0.26);

//   // Short branch off main vein

//   drawCurvyVein(size*0.38, size*0.42,  size*0.20, size*0.75,  0.5, 5,  12, GOLD_CORE, GOLD_GLOW, 0.22);

//   // Extra fine scatter vein

//   drawCurvyVein(size*0.70, size*0.20,  size*0.85, size*0.60,  0.4, 5,  10, GOLD_CORE, GOLD_GLOW, 0.20);



//   return new THREE.CanvasTexture(canvas);

// }



// export default function TileAnimation() {

//   const mountRef = useRef<HTMLDivElement | null>(null);



//   useEffect(() => {

//     if (!mountRef.current) return;



//     const scene  = new THREE.Scene();

//     const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

//     camera.position.z = 7;



//     const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

//     renderer.setSize(window.innerWidth, window.innerHeight);

//     renderer.toneMapping      = THREE.NoToneMapping;

//     renderer.outputColorSpace = THREE.SRGBColorSpace;

//     mountRef.current.appendChild(renderer.domElement);



//     const marbleTexture = createMarbleTexture();

//     marbleTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

//     marbleTexture.colorSpace = THREE.SRGBColorSpace;



//     const geometry = new THREE.BoxGeometry(2.2, 2.2, 0.18);



//     const faceMaterial = new THREE.MeshStandardMaterial({

//       map:               marbleTexture,

//       color:             new THREE.Color("#FFFFFF"),

//       metalness:         0.1,

//       roughness:         0.55,

//       emissive:          new THREE.Color("#000000"),

//       emissiveIntensity: 0,

//     });



//     const sideMaterial = new THREE.MeshStandardMaterial({

//       color:     new THREE.Color("#C4B09A"),

//       metalness: 0.05,

//       roughness: 0.7,

//     });



//     const tile = new THREE.Mesh(geometry, [

//       sideMaterial, sideMaterial,

//       sideMaterial, sideMaterial,

//       faceMaterial, faceMaterial,

//     ]);

//     tile.visible = false;

//     scene.add(tile);



//     const keyLight = new THREE.DirectionalLight("#FFFFFF", 2.0);

//     keyLight.position.set(4, 5, 6);

//     const fillLight = new THREE.DirectionalLight("#FFFFFF", 0.8);

//     fillLight.position.set(-3, 2, 3);

//     const ambient = new THREE.AmbientLight("#FFFFFF", 1.2);

//     scene.add(keyLight, fillLight, ambient);



//     const onScroll = () => {

//       const scrollY   = window.scrollY;

//       const vh        = window.innerHeight;

//       const kitchenEl = document.getElementById("kitchen");

//       if (!kitchenEl) return;



//       const kitchenStart = kitchenEl.getBoundingClientRect().top + window.scrollY;



//       if (scrollY < kitchenStart - vh * 0.2) { tile.visible = false; return; }



//       tile.visible = true;

//       const progress = (scrollY - kitchenStart) / vh;



//       if (scrollY < kitchenStart + vh * 0.3) {

//         const t = (scrollY - kitchenStart) / (vh * 0.3);

//         tile.position.y = 3 - t * 3;

//         tile.rotation.y = t * Math.PI;

//       } else {

//         tile.position.y = 0;

//         tile.rotation.y = progress * Math.PI * 2;

//         tile.rotation.x = Math.sin(progress * Math.PI) * 0.25;

//       }

//       tile.position.x = 1.8;

//     };



//     window.addEventListener("scroll", onScroll);



//     const animate = () => { requestAnimationFrame(animate); renderer.render(scene, camera); };

//     animate();



//     const handleResize = () => {

//       camera.aspect = window.innerWidth / window.innerHeight;

//       camera.updateProjectionMatrix();

//       renderer.setSize(window.innerWidth, window.innerHeight);

//     };

//     window.addEventListener("resize", handleResize);



//     return () => {

//       window.removeEventListener("scroll", onScroll);

//       window.removeEventListener("resize", handleResize);

//       mountRef.current?.removeChild(renderer.domElement);

//     };

//   }, []);



//   return (

//     <div

//       ref={mountRef}

//       className="fixed top-0 left-0 w-full h-screen z-[100] pointer-events-none"

//     />

//   );

// }

// "use client";

// import { useEffect, useRef } from "react";
// import * as THREE from "three";

// function createMarbleTexture(): THREE.CanvasTexture {
//   const size = 512;
//   const canvas = document.createElement("canvas");
//   canvas.width  = size;
//   canvas.height = size;
//   const ctx = canvas.getContext("2d")!;

//   ctx.fillStyle = "#D8CAB5";
//   ctx.fillRect(0, 0, size, size);

//   const baseGrad = ctx.createLinearGradient(0, 0, size, size);
//   baseGrad.addColorStop(0.0,  "rgba(225,212,192,0.7)");
//   baseGrad.addColorStop(0.4,  "rgba(216,202,181,0.5)");
//   baseGrad.addColorStop(0.75, "rgba(207,191,169,0.5)");
//   baseGrad.addColorStop(1.0,  "rgba(196,176,154,0.6)");
//   ctx.fillStyle = baseGrad;
//   ctx.fillRect(0, 0, size, size);

//   for (let i = 0; i < 16; i++) {
//     const x     = Math.random() * size;
//     const y     = Math.random() * size;
//     const r     = 60 + Math.random() * 110;
//     const alpha = 0.03 + Math.random() * 0.05;
//     const warm  = i % 2 === 0 ? `rgba(228,214,192,${alpha})` : `rgba(200,183,158,${alpha})`;
//     const g = ctx.createRadialGradient(x, y, 0, x, y, r);
//     g.addColorStop(0, warm);
//     g.addColorStop(1, "rgba(0,0,0,0)");
//     ctx.fillStyle = g;
//     ctx.fillRect(0, 0, size, size);
//   }

//   const buildVeinPath = (
//     x1: number, y1: number, x2: number, y2: number,
//     segments: number, wander: number
//   ) => {
//     const pts: [number, number][] = [[x1, y1]];
//     const dx = (x2 - x1) / segments;
//     const dy = (y2 - y1) / segments;
//     const len   = Math.sqrt(dx * dx + dy * dy) || 1;
//     const perpX = -dy / len;
//     const perpY =  dx / len;
//     for (let i = 1; i <= segments; i++) {
//       const ox = x1 + dx * i + perpX * (Math.random() - 0.5) * 2 * wander;
//       const oy = y1 + dy * i + perpY * (Math.random() - 0.5) * 2 * wander;
//       pts.push([ox, oy]);
//     }
//     return { pts };
//   };

//   const drawCurvyVein = (
//     x1: number, y1: number, x2: number, y2: number,
//     width: number, segments: number, wander: number,
//     veinColor: string, glowColor: string, glowAlpha = 0.35
//   ) => {
//     const { pts } = buildVeinPath(x1, y1, x2, y2, segments, wander);
//     const strokePath = (lw: number, color: string, alpha: number) => {
//       ctx.beginPath();
//       ctx.moveTo(pts[0][0], pts[0][1]);
//       for (let i = 1; i < pts.length - 1; i++) {
//         const mx = (pts[i][0] + pts[i + 1][0]) / 2;
//         const my = (pts[i][1] + pts[i + 1][1]) / 2;
//         ctx.quadraticCurveTo(pts[i][0], pts[i][1], mx, my);
//       }
//       ctx.lineTo(pts[pts.length - 1][0], pts[pts.length - 1][1]);
//       ctx.strokeStyle = color;
//       ctx.lineWidth   = lw;
//       ctx.globalAlpha = alpha;
//       ctx.lineCap     = "round";
//       ctx.lineJoin    = "round";
//       ctx.stroke();
//     };
//     strokePath(width * 7,   glowColor, glowAlpha * 0.4);
//     strokePath(width * 3.5, glowColor, glowAlpha * 0.65);
//     strokePath(width,       veinColor, 1.0);
//     ctx.globalAlpha = 1;
//   };

//   const G = "#D8B483", GG = "#DFC390";
//   drawCurvyVein(size*0.55, 0,         size*0.10, size,       2.8, 10, 28, G, GG, 0.40);
//   drawCurvyVein(size*0.80, 0,         size*0.30, size*0.68,  1.8, 8,  22, G, GG, 0.35);
//   drawCurvyVein(size*0.40, size*0.15, size*0.90, size,       1.2, 8,  18, G, GG, 0.30);
//   drawCurvyVein(size*0.15, 0,         size*0.50, size*0.45,  0.7, 7,  16, G, GG, 0.28);
//   drawCurvyVein(size*0.60, size*0.50, size*0.95, size,       0.6, 7,  14, G, GG, 0.26);
//   drawCurvyVein(size*0.38, size*0.42, size*0.20, size*0.75,  0.5, 5,  12, G, GG, 0.22);
//   drawCurvyVein(size*0.70, size*0.20, size*0.85, size*0.60,  0.4, 5,  10, G, GG, 0.20);

//   return new THREE.CanvasTexture(canvas);
// }

// const SECTIONS = [
//   { id: "kitchen",    x:  3.5 },
//   { id: "livingroom", x: -3.5 },
//   { id: "bathroom",   x:  3.5 },
//   { id: "dining",     x: -3.5 },
//   { id: "homebrands", x:  0   },
// ];

// const lerp    = (a: number, b: number, t: number) => a + (b - a) * t;
// const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
// const smooth  = (t: number) => t * t * (3 - 2 * t);

// export default function TileAnimation() {
//   const mountRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!mountRef.current) return;

//     const scene  = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 7;

//     const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     renderer.outputColorSpace = THREE.SRGBColorSpace;
//     mountRef.current.appendChild(renderer.domElement);

//     const marbleTexture = createMarbleTexture();
//     marbleTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
//     marbleTexture.colorSpace  = THREE.SRGBColorSpace;

//     const geometry = new THREE.BoxGeometry(2.2, 2.2, 0.18);
//     const faceMat  = new THREE.MeshStandardMaterial({
//       map: marbleTexture, color: new THREE.Color("#FFFFFF"),
//       metalness: 0.1, roughness: 0.55,
//     });
//     const sideMat  = new THREE.MeshStandardMaterial({
//       color: new THREE.Color("#C4B09A"), metalness: 0.05, roughness: 0.7,
//     });
//     const tile = new THREE.Mesh(geometry, [
//       sideMat, sideMat, sideMat, sideMat, faceMat, faceMat,
//     ]);

//     // ✅ Start off-screen top-right
//     tile.position.set(6, 8, 0);
//     tile.rotation.y = 0;
//     tile.visible = false;
//     scene.add(tile);

//     const key  = new THREE.DirectionalLight("#FFFFFF", 2.0); key.position.set(4, 5, 6);
//     const fill = new THREE.DirectionalLight("#FFFFFF", 0.8); fill.position.set(-3, 2, 3);
//     scene.add(key, fill, new THREE.AmbientLight("#FFFFFF", 1.2));

//     let curX    = 6;
//     let curY    = 8;
//     let curRotY = 0;

//     const onScroll = () => {
//       const scrollY = window.scrollY;
//       const vh      = window.innerHeight;

//       const ranges = SECTIONS.map(s => {
//         const el = document.getElementById(s.id);
//         if (!el) return null;
//         const top = el.getBoundingClientRect().top + scrollY;
//         return { top, bottom: top + vh };
//       });

//       const firstTop = ranges[0]?.top ?? 0;

//       if (scrollY < firstTop - vh * 0.5) {
//         tile.visible = false;
//         return;
//       }
//       tile.visible = true;

//       const lastBot = ranges[SECTIONS.length - 1]?.bottom ?? vh;
//       const totalH  = lastBot - firstTop;
//       const N       = SECTIONS.length;
//       const prog    = clamp01((scrollY - firstTop) / totalH) * N;

//       let targetX: number;
//       // ✅ Y always 0 — tile stays vertically centred in viewport (same height as heading)
//       const targetY = 0.6;
//       let targetRotY: number;

//       if (prog <= 0) {
//         targetX    = SECTIONS[0].x;
//         targetRotY = 0;
//       } else if (prog >= N - 1) {
//         targetX    = SECTIONS[N - 1].x;
//         // ✅ Snap rotY to nearest full 2π so face is perfectly front
//         targetRotY = Math.round(curRotY / (Math.PI * 2)) * Math.PI * 2;
//       } else {
//         const idx  = Math.floor(prog);
//         const frac = prog - idx;
//         const s    = smooth(frac);

//         targetX = lerp(SECTIONS[idx].x, SECTIONS[idx + 1].x, s);

//         // ✅ Full 360° per section transition
//         // At frac=0 → idx*2π (front face), at frac=1 → (idx+1)*2π (front face)
//         targetRotY = (idx + frac) * Math.PI * 2;
//       }

//       const spd = 0.09;
//       curX    += (targetX    - curX)    * spd;
//       curY    += (targetY    - curY)    * spd;
//       curRotY += (targetRotY - curRotY) * spd;

//       tile.position.x = curX;
//       // ✅ Y=0 is dead centre of the Three.js viewport = same height as centred heading text
//       tile.position.y = curY;
//       tile.rotation.y = curRotY;
//       // ✅ Kill any residual x-axis tilt so tile is perfectly upright
//       tile.rotation.x = 0;
//     };

//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });

//     let rafId: number;
//     const animate = () => { rafId = requestAnimationFrame(animate); renderer.render(scene, camera); };
//     animate();

//     const onResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener("resize", onResize);

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", onResize);
//       cancelAnimationFrame(rafId);
//       mountRef.current?.removeChild(renderer.domElement);
//       renderer.dispose();
//     };
//   }, []);

//   return (
//     <div
//       ref={mountRef}
//       className="fixed top-0 left-0 w-full h-screen z-[100] pointer-events-none"
//     />
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useTheme } from "@/lib/contexts/ThemeContext";

function createMarbleTexture(): THREE.CanvasTexture {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width  = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "#D8CAB5";
  ctx.fillRect(0, 0, size, size);

  const baseGrad = ctx.createLinearGradient(0, 0, size, size);
  baseGrad.addColorStop(0.0,  "rgba(225,212,192,0.7)");
  baseGrad.addColorStop(0.4,  "rgba(216,202,181,0.5)");
  baseGrad.addColorStop(0.75, "rgba(207,191,169,0.5)");
  baseGrad.addColorStop(1.0,  "rgba(196,176,154,0.6)");
  ctx.fillStyle = baseGrad;
  ctx.fillRect(0, 0, size, size);

  for (let i = 0; i < 16; i++) {
    const x     = Math.random() * size;
    const y     = Math.random() * size;
    const r     = 60 + Math.random() * 110;
    const alpha = 0.03 + Math.random() * 0.05;
    const warm  = i % 2 === 0 ? `rgba(228,214,192,${alpha})` : `rgba(200,183,158,${alpha})`;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, warm);
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
  }

  const buildVeinPath = (
    x1: number, y1: number, x2: number, y2: number,
    segments: number, wander: number
  ) => {
    const pts: [number, number][] = [[x1, y1]];
    const dx = (x2 - x1) / segments;
    const dy = (y2 - y1) / segments;
    const len   = Math.sqrt(dx * dx + dy * dy) || 1;
    const perpX = -dy / len;
    const perpY =  dx / len;
    for (let i = 1; i <= segments; i++) {
      const ox = x1 + dx * i + perpX * (Math.random() - 0.5) * 2 * wander;
      const oy = y1 + dy * i + perpY * (Math.random() - 0.5) * 2 * wander;
      pts.push([ox, oy]);
    }
    return { pts };
  };

  const drawCurvyVein = (
    x1: number, y1: number, x2: number, y2: number,
    width: number, segments: number, wander: number,
    veinColor: string, glowColor: string, glowAlpha = 0.35
  ) => {
    const { pts } = buildVeinPath(x1, y1, x2, y2, segments, wander);
    const strokePath = (lw: number, color: string, alpha: number) => {
      ctx.beginPath();
      ctx.moveTo(pts[0][0], pts[0][1]);
      for (let i = 1; i < pts.length - 1; i++) {
        const mx = (pts[i][0] + pts[i + 1][0]) / 2;
        const my = (pts[i][1] + pts[i + 1][1]) / 2;
        ctx.quadraticCurveTo(pts[i][0], pts[i][1], mx, my);
      }
      ctx.lineTo(pts[pts.length - 1][0], pts[pts.length - 1][1]);
      ctx.strokeStyle = color;
      ctx.lineWidth   = lw;
      ctx.globalAlpha = alpha;
      ctx.lineCap     = "round";
      ctx.lineJoin    = "round";
      ctx.stroke();
    };
    strokePath(width * 7,   glowColor, glowAlpha * 0.4);
    strokePath(width * 3.5, glowColor, glowAlpha * 0.65);
    strokePath(width,       veinColor, 1.0);
    ctx.globalAlpha = 1;
  };

  const G = "#D8B483", GG = "#DFC390";
  drawCurvyVein(size*0.55, 0,         size*0.10, size,       2.8, 10, 28, G, GG, 0.40);
  drawCurvyVein(size*0.80, 0,         size*0.30, size*0.68,  1.8, 8,  22, G, GG, 0.35);
  drawCurvyVein(size*0.40, size*0.15, size*0.90, size,       1.2, 8,  18, G, GG, 0.30);
  drawCurvyVein(size*0.15, 0,         size*0.50, size*0.45,  0.7, 7,  16, G, GG, 0.28);
  drawCurvyVein(size*0.60, size*0.50, size*0.95, size,       0.6, 7,  14, G, GG, 0.26);
  drawCurvyVein(size*0.38, size*0.42, size*0.20, size*0.75,  0.5, 5,  12, G, GG, 0.22);
  drawCurvyVein(size*0.70, size*0.20, size*0.85, size*0.60,  0.4, 5,  10, G, GG, 0.20);

  return new THREE.CanvasTexture(canvas);
}

const SECTIONS = [
  { id: "kitchen",    x:  3.5, desc: "Durable, easy-clean surfaces built for the heat of everyday cooking. Our kitchen tiles blend function with elegance." },
  { id: "livingroom", x: -3.5, desc: "Make a statement underfoot. Large-format marble-look tiles and warm wood-effect planks that anchor your living space." },
  { id: "bathroom",   x:  3.5, desc: "Slip-resistant, moisture-proof, and beautiful. From spa-inspired stone textures to crisp subway tiles." },
  { id: "dining",     x: -3.5, desc: "Set the tone for every meal. Our dining room tiles offer rich tones and tactile finishes." },
  { id: "homebrands", x:  0,   desc: "Premium tile brands curated for Indian homes — international quality, local sensibility." },
];

const lerp    = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const smooth  = (t: number) => t * t * (3 - 2 * t);

// Description card component
function DescCard({ desc, opacity, screenX, screenY }: { desc: string; opacity: number; screenX: number; screenY: number }) {
  if (opacity < 0.01) return null;
  const cardW = 300;
  const left = Math.max(12, Math.min((typeof window !== "undefined" ? window.innerWidth : 1200) - cardW - 12, screenX - cardW / 2));

  return (
    <div className="fixed z-[101] pointer-events-none" style={{ left, top: screenY, width: cardW, opacity, transition: "opacity 0.3s ease" }}>
      <div className="rounded-xl px-5 py-4 backdrop-blur-sm" style={{ background: "rgba(0,0,0,0.28)", border: "1px solid #F79440", boxShadow: "0 0 20px 3px rgba(247,148,64,0.4), inset 0 0 14px rgba(247,148,64,0.08)" }}>
        <p className="text-white/90 text-sm leading-relaxed font-light" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>{desc}</p>
      </div>
    </div>
  );
}

export default function TileAnimation() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [activeDesc, setActiveDesc] = useState<string>("");
  const [cardOpacity, setCardOpacity] = useState(0);
  const [cardScreenX, setCardScreenX] = useState(0);
  const [cardScreenY, setCardScreenY] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    if (!mountRef.current) return;

    // Clear any existing canvas
    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mountRef.current.appendChild(renderer.domElement);
    renderer.domElement.style.position = 'fixed';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.pointerEvents = 'none';

    const marbleTexture = createMarbleTexture();
    marbleTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    marbleTexture.colorSpace  = THREE.SRGBColorSpace;

    const geometry = new THREE.BoxGeometry(2.2, 2.2, 0.18);
    
    // Theme-aware materials for better visibility
    const faceMat  = new THREE.MeshStandardMaterial({
      map: marbleTexture, 
      color: new THREE.Color(theme === "luxury" ? "#F5F0E8" : "#FFFFFF"),
      metalness: theme === "luxury" ? 0.15 : 0.1, 
      roughness: theme === "luxury" ? 0.45 : 0.55,
    });
    const sideMat  = new THREE.MeshStandardMaterial({
      color: new THREE.Color(theme === "luxury" ? "#D4C4A8" : "#C4B09A"), 
      metalness: theme === "luxury" ? 0.1 : 0.05, 
      roughness: theme === "luxury" ? 0.6 : 0.7,
    });
    const tile = new THREE.Mesh(geometry, [
      sideMat, sideMat, sideMat, sideMat, faceMat, faceMat,
    ]);

    // ✅ Start at first section position for immediate visibility
    tile.position.set(SECTIONS[0].x, 0.6, 0);
    tile.rotation.y = 0;
    tile.visible = true;
    scene.add(tile);

    const key  = new THREE.DirectionalLight("#FFFFFF", 2.0); key.position.set(4, 5, 6);
    const fill = new THREE.DirectionalLight("#FFFFFF", 0.8); fill.position.set(-3, 2, 3);
    scene.add(key, fill, new THREE.AmbientLight("#FFFFFF", 1.2));

    let curX    = SECTIONS[0].x;
    let curY    = 0.6;
    let curRotY = 0;

    // Track which section we're closest to for description
    let currentSectionIdx = -1;

    // Project tile position to screen coordinates for description card
    const projectTile = () => {
      const vFov = (45 * Math.PI) / 180;
      const worldH = 2 * Math.tan(vFov / 2) * 7;
      const pxPerUnit = window.innerHeight / worldH;
      const halfTilePx = (2.2 / 2) * pxPerUnit;
      const vec = new THREE.Vector3(tile.position.x, tile.position.y, 0);
      vec.project(camera);
      const sx = (vec.x + 1) * window.innerWidth / 2;
      const sy = (-vec.y + 1) * window.innerHeight / 2;
      setCardScreenX(sx);
      setCardScreenY(sy + halfTilePx + 12);
    };

    const onScroll = () => {
      const scrollY = window.scrollY;
      const vh      = window.innerHeight;

      const ranges = SECTIONS.map(s => {
        const el = document.getElementById(s.id);
        if (!el) return null;
        const top = el.getBoundingClientRect().top + scrollY;
        return { top, bottom: top + vh };
      });

      // If no sections found, make tile visible
      const hasValidSections = ranges.some(r => r !== null);
      if (!hasValidSections) {
        tile.visible = true;
        setCardOpacity(0);
        return;
      }

      const firstTop = ranges[0]?.top ?? 0;

      if (scrollY < firstTop - vh * 0.5) {
        tile.visible = false;
        setCardOpacity(0);
        setActiveDesc("");
        return;
      }
      tile.visible = true;

      const lastBot = ranges[SECTIONS.length - 1]?.bottom ?? vh;
      const totalH  = lastBot - firstTop;
      const N       = SECTIONS.length;
      const prog    = clamp01((scrollY - firstTop) / totalH) * N;

      let targetX: number;
      // ✅ Y always 0 — tile stays vertically centred in viewport (same height as heading)
      const targetY = 0.6;
      let targetRotY: number;

      if (prog <= 0) {
        targetX    = SECTIONS[0].x;
        targetRotY = 0;
      } else if (prog >= N - 1) {
        targetX    = SECTIONS[N - 1].x;
        // ✅ Snap rotY to nearest full 2π so face is perfectly front
        targetRotY = Math.round(curRotY / (Math.PI * 2)) * Math.PI * 2;
      } else {
        const idx  = Math.floor(prog);
        const frac = prog - idx;
        const s    = smooth(frac);

        targetX = lerp(SECTIONS[idx].x, SECTIONS[idx + 1].x, s);

        // ✅ Full 360° per section transition
        // At frac=0 → idx*2π (front face), at frac=1 → (idx+1)*2π (front face)
        targetRotY = (idx + frac) * Math.PI * 2;
      }

      const spd = 0.09;
      curX    += (targetX    - curX)    * spd;
      curY    += (targetY    - curY)    * spd;
      curRotY += (targetRotY - curRotY) * spd;

      tile.position.x = curX;
      // ✅ Y=0 is dead centre of the Three.js viewport = same height as centred heading text
      tile.position.y = curY;
      tile.rotation.y = curRotY;
      // ✅ Kill any residual x-axis tilt so tile is perfectly upright
      tile.rotation.x = 0;

      // Determine which section we're closest to (for description)
      const sectionIdx = Math.round(prog);
      // Skip description for homebrands section (index 4)
      if (sectionIdx >= 0 && sectionIdx < N && sectionIdx !== 4) {
        const distFromSection = Math.abs(prog - sectionIdx);
        // Show description when close to a section center (within 0.3 units)
        if (distFromSection < 0.3) {
          if (currentSectionIdx !== sectionIdx) {
            currentSectionIdx = sectionIdx;
            setActiveDesc(SECTIONS[sectionIdx].desc);
          }
          setCardOpacity(1 - (distFromSection / 0.3));
        } else {
          setCardOpacity(0);
        }
      } else {
        setCardOpacity(0);
      }
    };

    // Run scroll logic immediately to position tile based on current scroll
    setTimeout(() => {
      onScroll();
    }, 100);
    window.addEventListener("scroll", onScroll, { passive: true });

    let rafId: number;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
      if (tile.visible) projectTile();
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      onScroll();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [theme]);

  return (
    <>
      <div ref={mountRef} className="fixed top-0 left-0 w-full h-screen z-[100] pointer-events-none" />
      <DescCard desc={activeDesc} opacity={cardOpacity} screenX={cardScreenX} screenY={cardScreenY} />
    </>
  );
}
