
"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

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

// ─── Each section has 2 "scroll pages":
//   Page 0 (scroll 1): tile flies in + rotates → lands at section centre
//   Page 1 (scroll 2): tile holds still, card visible → on next scroll, departs
const SECTIONS = [
  {
    id:   "kitchen",
    x:     3.5,
    side: "right" as const,
    desc: "Durable, easy-clean surfaces built for the heat of everyday cooking. Our kitchen tiles blend function with elegance — from matte stone finishes to glossy metro styles.",
  },
  {
    id:   "livingroom",
    x:    -3.5,
    side: "left" as const,
    desc: "Make a statement underfoot. Large-format marble-look tiles and warm wood-effect planks that anchor your living space with timeless sophistication.",
  },
  {
    id:   "bathroom",
    x:     3.5,
    side: "right" as const,
    desc: "Slip-resistant, moisture-proof, and beautiful. From spa-inspired stone textures to crisp subway tiles, transform your bathroom into a private retreat.",
  },
  {
    id:   "dining",
    x:    -3.5,
    side: "left" as const,
    desc: "Set the tone for every meal. Our dining room tiles offer rich tones and tactile finishes that complement everything from rustic farmhouse to modern minimal.",
  },
  {
    id:   "homebrands",
    x:     0,
    side: "center" as const,
    desc: "Premium tile brands curated for Indian homes — international quality, local sensibility. Discover collections from the world's leading ceramic manufacturers.",
  },
];

const smooth = (t: number) => t * t * (3 - 2 * t);
const lerp   = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

// ─── Description card ─────────────────────────────────────────────────────────
function DescCard({
  section,
  opacity,
  screenX,
  screenY,
}: {
  section: typeof SECTIONS[number];
  opacity: number;
  screenX: number;
  screenY: number;
}) {
  if (opacity < 0.01) return null;
  const cardW = 300;
  const left  = Math.max(12, Math.min((typeof window !== "undefined" ? window.innerWidth : 1200) - cardW - 12, screenX - cardW / 2));

  return (
    <div
      className="fixed z-[101] pointer-events-none"
      style={{ left, top: screenY, width: cardW, opacity, transition: "opacity 0.3s ease" }}
    >
      <div
        className="rounded-xl px-5 py-4 backdrop-blur-sm"
        style={{
          background: "rgba(0,0,0,0.28)",
          border:     "1px solid #F79440",
          boxShadow:  "0 0 20px 3px rgba(247,148,64,0.4), inset 0 0 14px rgba(247,148,64,0.08)",
        }}
      >
        <p className="text-white/90 text-sm leading-relaxed font-light"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>
          {section.desc}
        </p>
      </div>
    </div>
  );
}

export default function TileAnimation() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx,   setActiveIdx]   = useState(-1);
  const [cardOpacity, setCardOpacity] = useState(0);
  const [cardScreenX, setCardScreenX] = useState(0);
  const [cardScreenY, setCardScreenY] = useState(0);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mountRef.current.appendChild(renderer.domElement);

    const marbleTexture = createMarbleTexture();
    marbleTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    marbleTexture.colorSpace  = THREE.SRGBColorSpace;

    const geometry = new THREE.BoxGeometry(2.2, 2.2, 0.18);
    const faceMat  = new THREE.MeshStandardMaterial({
      map: marbleTexture, color: new THREE.Color("#FFFFFF"),
      metalness: 0.1, roughness: 0.55,
    });
    const sideMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#C4B09A"), metalness: 0.05, roughness: 0.7,
    });
    const tile = new THREE.Mesh(geometry, [
      sideMat, sideMat, sideMat, sideMat, faceMat, faceMat,
    ]);
    tile.position.set(6, 8, 0);
    tile.visible = false;
    scene.add(tile);

    const key  = new THREE.DirectionalLight("#FFFFFF", 2.0); key.position.set(4, 5, 6);
    const fill = new THREE.DirectionalLight("#FFFFFF", 0.8); fill.position.set(-3, 2, 3);
    scene.add(key, fill, new THREE.AmbientLight("#FFFFFF", 1.2));

    // Smooth state
    let curX    = 6;
    let curY    = 8;
    let curRotY = 0;

    // ── World Y = 0 is the viewport centre in Three.js.
    // The tile rests at Y=0 (exact vertical centre of the section) ──────────
    const TILE_WORLD_Y = 0;

    // ── Project tile world pos to screen px ──────────────────────────────────
    const projectTile = () => {
      const vFov       = (45 * Math.PI) / 180;
      const worldH     = 2 * Math.tan(vFov / 2) * 7;
      const pxPerUnit  = window.innerHeight / worldH;
      const halfTilePx = (2.2 / 2) * pxPerUnit;

      const vec = new THREE.Vector3(tile.position.x, tile.position.y, 0);
      vec.project(camera);
      const sx = (vec.x  + 1) * window.innerWidth  / 2;
      const sy = (-vec.y + 1) * window.innerHeight / 2;

      // card top = bottom edge of tile + 12px gap
      setCardScreenX(sx);
      setCardScreenY(sy + halfTilePx + 12);
    };

    // ── Scroll logic ──────────────────────────────────────────────────────────
    // Each section element is min-h-screen (= 1 vh tall).
    // We give each section 2 "virtual pages" of scroll:
    //   virtual page A (first half of section height): tile ARRIVES
    //   virtual page B (second half):                  tile PAUSES, card shown
    // So each section DOM element needs to be 2vh tall in scroll space.
    // Since sections are only 1vh, we track based on scroll position within each section.

    const onScroll = () => {
      const scrollY = window.scrollY;
      const vh      = window.innerHeight;
      const N       = SECTIONS.length;

      // Gather each section's top (absolute page offset)
      const tops = SECTIONS.map(s => {
        const el = document.getElementById(s.id);
        if (!el) return 0;
        return el.getBoundingClientRect().top + scrollY;
      });

      const firstTop = tops[0];

      // Hide before first section
      if (scrollY < firstTop - vh * 0.3) {
        tile.visible = false;
        setCardOpacity(0);
        setActiveIdx(-1);
        return;
      }
      tile.visible = true;

      // ── Map scrollY to a continuous progress 0…2N
      // Each section occupies 2 "units" of progress (1 arrive + 1 pause)
      // We divide each section's vh into 2 equal halves
      // Section i occupies scroll range [tops[i], tops[i] + vh]
      // First half  = arrive  → prog in [2i,   2i+1]
      // Second half = pause   → prog in [2i+1, 2i+2]

      let prog = 0;

      for (let i = 0; i < N; i++) {
        const sectionStart = tops[i];
        const sectionEnd   = i < N - 1 ? tops[i + 1] : tops[i] + vh;
        const sectionH     = sectionEnd - sectionStart;

        if (scrollY < sectionStart) {
          // Before this section — prog is at start of section i's arrive
          prog = i * 2;
          break;
        }
        if (scrollY <= sectionStart + sectionH) {
          // Inside section i
          const localT = (scrollY - sectionStart) / sectionH; // 0…1
          prog = i * 2 + localT * 2; // 0…2 per section
          break;
        }
        if (i === N - 1) {
          // Past last section
          prog = N * 2;
        }
      }

      prog = clamp01(prog / (N * 2)) * (N * 2);

      // ── Decode prog into tile state ────────────────────────────────────────
      let targetX:    number;
      let targetRotY: number;
      let newOpacity  = 0;
      let newIdx      = -1;

      if (prog <= 0) {
        targetX    = SECTIONS[0].x;
        targetRotY = 0;
        newIdx     = 0;
        newOpacity = 0;

      } else if (prog >= N * 2) {
        targetX    = SECTIONS[N - 1].x;
        targetRotY = (N - 1) * Math.PI * 2;
        newIdx     = N - 1;
        newOpacity = 1;

      } else {
        // Which section are we in? (each section = 2 units of prog)
        const sIdx  = Math.min(Math.floor(prog / 2), N - 1);
        const local = prog - sIdx * 2; // 0…2

        newIdx = sIdx;

        if (local < 1) {
          // ── ARRIVE phase (0…1): tile rotates 360° and flies to section centre ──
          const t = smooth(local); // 0…1

          const fromX   = sIdx === 0 ? 6 : SECTIONS[sIdx - 1].x;
          const toX     = SECTIONS[sIdx].x;
          targetX       = lerp(fromX, toX, t);

          // Full 360° spin during arrive
          const fromRot = (sIdx - 1) * Math.PI * 2;
          const toRot   = sIdx       * Math.PI * 2;
          targetRotY    = lerp(fromRot, toRot, local); // linear so spin feels consistent

          newOpacity = 0; // no card while arriving

        } else {
          // ── PAUSE phase (1…2): tile holds, card fades in ──────────────────
          const t = local - 1; // 0…1

          targetX    = SECTIONS[sIdx].x;
          targetRotY = sIdx * Math.PI * 2; // exact front face

          // Fade in fast, hold, fade out near the end
          if (t < 0.15)      newOpacity = smooth(t / 0.15);
          else if (t > 0.85) newOpacity = smooth(1 - (t - 0.85) / 0.15);
          else               newOpacity = 1;
        }
      }

      setActiveIdx(newIdx);
      setCardOpacity(newOpacity);

      // ── Smooth lerp ────────────────────────────────────────────────────────
      const spd = 0.09;
      curX    += (targetX       - curX)    * spd;
      curY    += (TILE_WORLD_Y  - curY)    * spd;
      curRotY += (targetRotY    - curRotY) * spd;

      tile.position.x = curX;
      tile.position.y = curY;  // always lerps to 0 = exact viewport centre
      tile.rotation.y = curRotY;
      tile.rotation.x = 0;
    };

    onScroll();
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
  }, []);

  return (
    <>
      <div
        ref={mountRef}
        className="fixed top-0 left-0 w-full h-screen z-[100] pointer-events-none"
      />
      {activeIdx >= 0 && activeIdx < SECTIONS.length && (
        <DescCard
          section={SECTIONS[activeIdx]}
          opacity={cardOpacity}
          screenX={cardScreenX}
          screenY={cardScreenY}
        />
      )}
    </>
  );
}