"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useTheme } from "@/lib/contexts/ThemeContext";

function createMarbleTexture(): THREE.CanvasTexture {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "#D8CAB5";
  ctx.fillRect(0, 0, size, size);

  const baseGrad = ctx.createLinearGradient(0, 0, size, size);
  baseGrad.addColorStop(0.0, "rgba(225,212,192,0.7)");
  baseGrad.addColorStop(0.4, "rgba(216,202,181,0.5)");
  baseGrad.addColorStop(0.75, "rgba(207,191,169,0.5)");
  baseGrad.addColorStop(1.0, "rgba(196,176,154,0.6)");
  ctx.fillStyle = baseGrad;
  ctx.fillRect(0, 0, size, size);

  for (let i = 0; i < 16; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const r = 60 + Math.random() * 110;
    const alpha = 0.03 + Math.random() * 0.05;
    const warm = i % 2 === 0
      ? `rgba(228,214,192,${alpha})`
      : `rgba(200,183,158,${alpha})`;
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
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    const perpX = -dy / len;
    const perpY = dx / len;
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
      ctx.lineWidth = lw;
      ctx.globalAlpha = alpha;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();
    };
    strokePath(width * 7, glowColor, glowAlpha * 0.4);
    strokePath(width * 3.5, glowColor, glowAlpha * 0.65);
    strokePath(width, veinColor, 1.0);
    ctx.globalAlpha = 1;
  };

  const G = "#D8B483", GG = "#DFC390";
  drawCurvyVein(size * 0.55, 0, size * 0.10, size, 2.8, 10, 28, G, GG, 0.40);
  drawCurvyVein(size * 0.80, 0, size * 0.30, size * 0.68, 1.8, 8, 22, G, GG, 0.35);
  drawCurvyVein(size * 0.40, size * 0.15, size * 0.90, size, 1.2, 8, 18, G, GG, 0.30);
  drawCurvyVein(size * 0.15, 0, size * 0.50, size * 0.45, 0.7, 7, 16, G, GG, 0.28);
  drawCurvyVein(size * 0.60, size * 0.50, size * 0.95, size, 0.6, 7, 14, G, GG, 0.26);
  drawCurvyVein(size * 0.38, size * 0.42, size * 0.20, size * 0.75, 0.5, 5, 12, G, GG, 0.22);
  drawCurvyVein(size * 0.70, size * 0.20, size * 0.85, size * 0.60, 0.4, 5, 10, G, GG, 0.20);

  return new THREE.CanvasTexture(canvas);
}

// ─── Same sections / IDs / x positions as the original ───────────────────────
const SECTIONS = [
  {
    id: "kitchen",
    name: "Kitchen",
    x: 3.5,
    side: "right" as const,
    desc: "Durable, easy-clean surfaces built for the heat of everyday cooking. Our kitchen tiles blend function with elegance — from matte stone finishes to glossy metro styles.",
  },
  {
    id: "livingroom",
    name: "Living Room",
    x: -3.5,
    side: "left" as const,
    desc: "Make a statement underfoot. Large-format marble-look tiles and warm wood-effect planks that anchor your living space with timeless sophistication.",
  },
  {
    id: "bathroom",
    name: "Bathroom",
    x: 3.5,
    side: "right" as const,
    desc: "Slip-resistant, moisture-proof, and beautiful. From spa-inspired stone textures to crisp subway tiles, transform your bathroom into a private retreat.",
  },
  {
    id: "dining",
    name: "Dining",
    x: -3.5,
    side: "left" as const,
    desc: "Set the tone for every meal. Rich tones and tactile finishes that complement everything from rustic farmhouse to modern minimal.",
  },
  {
    id: "homebrands",
    name: "Brands",
    x: 0,
    side: "center" as const,
    desc: "Premium tile brands curated for Indian homes — international quality, local sensibility. Discover collections from the world's leading ceramic manufacturers.",
  },
  {
    id: "solution",
    name: "Solution",
    x: 0,
    side: "center" as const,
    desc: "",
  },
  {
    id: "onestopsolution",
    name: "One Stop Solution",
    x: 0,
    side: "center" as const,
    desc: "",
  },
];

const N = SECTIONS.length;

const smooth = (t: number) => t * t * (3 - 2 * t);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// ─── Description card (same style as original) ────────────────────────────────
function DescCard({
  section,
  opacity,
  screenX,
  screenY,
}: {
  section: (typeof SECTIONS)[number];
  opacity: number;
  screenX: number;
  screenY: number;
}) {
  if (opacity < 0.01) return null;

  const cardW = 300;
  const left = Math.max(
    12,
    Math.min(
      (typeof window !== "undefined" ? window.innerWidth : 1200) - cardW - 12,
      screenX - cardW / 2
    )
  );

  return (
    <div
      className="fixed z-[101] pointer-events-none"
      style={{
        left,
        top: screenY,
        width: cardW,
        opacity,
        transform: opacity > 0.05 ? "translateY(0px)" : "translateY(8px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
      }}
    >
      <div
        className="rounded-xl px-5 py-4 backdrop-blur-sm"
        style={{
          background: "rgba(0,0,0,0.28)",
          border: "1px solid #F79440",
          boxShadow: "0 0 20px 3px rgba(247,148,64,0.4), inset 0 0 14px rgba(247,148,64,0.08)",
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

// ─── Main component ───────────────────────────────────────────────────────────
export default function TileAnimation() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  const [activeIdx, setActiveIdx] = useState(-1);
  const [cardOpacity, setCardOpacity] = useState(0);
  const [cardScreenX, setCardScreenX] = useState(0);
  const [cardScreenY, setCardScreenY] = useState(0);

  useEffect(() => {
    if (!mountRef.current) return;

    // ── Scene / camera / renderer ─────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mountRef.current.appendChild(renderer.domElement);

    // ── Tile mesh ─────────────────────────────────────────────────────────────
    const marbleTexture = createMarbleTexture();
    marbleTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    marbleTexture.colorSpace = THREE.SRGBColorSpace;

    const geometry = new THREE.BoxGeometry(2.2, 2.2, 0.18);
    
    // Theme-aware materials for better visibility
    const faceMat = new THREE.MeshStandardMaterial({
      map: marbleTexture,
      color: new THREE.Color(theme === "luxury" ? "#F5F0E8" : "#FFFFFF"),
      metalness: theme === "luxury" ? 0.15 : 0.1,
      roughness: theme === "luxury" ? 0.45 : 0.55,
    });
    const sideMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(theme === "luxury" ? "#D4C4A8" : "#C4B09A"),
      metalness: theme === "luxury" ? 0.1 : 0.05,
      roughness: theme === "luxury" ? 0.6 : 0.7,
    });
    const tile = new THREE.Mesh(geometry, [
      sideMat, sideMat, sideMat, sideMat, faceMat, faceMat,
    ]);
    tile.position.set(6, 8, 0);
    tile.visible = false;
    scene.add(tile);

    // ── Lights ────────────────────────────────────────────────────────────────
    const key = new THREE.DirectionalLight("#FFFFFF", 2.0); key.position.set(4, 5, 6);
    const fill = new THREE.DirectionalLight("#FFFFFF", 0.8); fill.position.set(-3, 2, 3);
    scene.add(key, fill, new THREE.AmbientLight("#FFFFFF", 1.2));

    // ── Smooth interpolation state ────────────────────────────────────────────
    let curX = 6;
    let curY = 8;
    let curRotY = 0;

    // Driven by onScroll, consumed by animate()
    let targetX = SECTIONS[0].x;
    let targetY = 0;
    let targetRotY = 0;
    let targetRotZ = 0; // For tilt effect
    let targetCardOp = 0;
    let cardIdxRef = 0;
    let frameCount = 0;
    let smoothCardOp = 0;
    let curRotZ = 0;

    
    // ── Project tile centre to screen, offset by half-tile height ────────────
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

    const screenToWorldAtZ0 = (screenX: number, screenY: number) => {
      const ndc = new THREE.Vector3(
        (screenX / window.innerWidth) * 2 - 1,
        -(screenY / window.innerHeight) * 2 + 1,
        0.5
      );
      const p = ndc.unproject(camera);
      const dir = p.sub(camera.position).normalize();
      const t = -camera.position.z / dir.z; // intersect z=0 plane
      return camera.position.clone().add(dir.multiplyScalar(t));
    };

    // Remember last dock point to avoid jitter when DOM is animating
    let lastDock: { x: number; y: number } | null = null;
    let dockActive = false;
    let dockProgress = 0; // 0 = fullscreen render, 1 = fully inside dotted box
    // Controls how slowly the tile "comes in" to the dotted box.
    // Smaller = slower (roughly: 0.02 ~ 0.8s, 0.01 ~ 1.6s at 60fps).
    const DOCK_PROGRESS_STEP = 0.012;

    const readDockTarget = () => {
      return document.querySelector(
        '[data-onestopsolution-tile-target="true"][data-active="true"]'
      ) as HTMLElement | null;
    };
    const updateDockFromDom = () => {
      const el = readDockTarget();
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const w = screenToWorldAtZ0(cx, cy);
      lastDock = { x: w.x, y: w.y };
    };

    const onScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      // Absolute page tops for every section
      const tops = SECTIONS.map((s) => {
        const el = document.getElementById(s.id);
        if (!el) return 0;
        return el.getBoundingClientRect().top + scrollY;
      });

      const firstTop = tops[0];

      // Visibility threshold: start earlier for the first section
      if (scrollY < firstTop - vh * 0.8) {
        tile.visible = false;
        targetCardOp = 0;
        setActiveIdx(-1);
        return;
      }
      tile.visible = true;

      // ── 1. Calculate continuous progress ──────────────────────────────────
      // prog = i means we are exactly at tops[i] (section i is centered)
      let prog = 0;
      for (let i = 0; i < N; i++) {
        const sStart = tops[i];
        const sEnd = i < N - 1 ? tops[i + 1] : tops[i] + vh;
        const sH = Math.max(sEnd - sStart, 1);

        if (scrollY <= sStart && i === 0) {
          prog = (scrollY - sStart) / vh; // negative if before firstTop
          break;
        }
        if (scrollY <= sEnd) {
          prog = i + (scrollY - sStart) / sH;
          break;
        }
        if (i === N - 1) prog = N;
      }

      // ── 2. Map progress to visual targets ─────────────────────────────────
      let newTargetX = SECTIONS[0].x;
      let newTargetY = 0;
      let newTargetRotY = 0;
      let newCardOp = 0;
      let newCardIdx = 0;

      if (prog < 0) {
        // Arrival before the first section (Kitchen)
        const arrivalDistance = 0.5; // Map last 0.5vh of hero scroll to arrival
        const t = Math.max(0, 1 + prog / arrivalDistance); // 0 at start of buffer, 1 at prog=0

        const fromX = SECTIONS[0].x > 0 ? 6 : -6;
        const toX = SECTIONS[0].x;

        newTargetX = lerp(fromX, toX, smooth(t));
        newTargetRotY = t * Math.PI * 2;
        // Fade in card as the tile arrives so it's ready at the center
        newCardOp = smooth(t);
        newCardIdx = 0;

      } else if (prog >= N - 1) {
        // Last section (and beyond)
        const local = prog - (N - 1); // 0..1
        newTargetX = SECTIONS[N - 1].x;
        newTargetY = 0;
        newTargetRotY = (N - 1) * Math.PI * 2;
        newCardIdx = N - 1;

        // Keep tile visible and settled in onestopsolution section
        newCardOp = 1;

      } else {
        // Transitions between sections
        const sIdx = Math.floor(prog);
        const fract = prog - sIdx; // 0..1

        // Pause (show card) when very near the integer index (where title is centered and tile is square)
        const pauseRange = 0.15; // Stricter range for "square" look

        if (fract < pauseRange) {
          // Pause at sIdx
          newCardIdx = sIdx;
          newTargetX = SECTIONS[sIdx].x;
          newTargetRotY = (sIdx + 1) * Math.PI * 2;

          // Only show card when very close to the center
          const t = fract / pauseRange; // 0..1
          newCardOp = smooth(1 - t);
        } else if (fract > (1 - pauseRange)) {
          // Pause at sIdx + 1
          newCardIdx = sIdx + 1;
          newTargetX = SECTIONS[sIdx + 1].x;
          newTargetRotY = (sIdx + 2) * Math.PI * 2;

          const t = (1 - fract) / pauseRange; // 0..1
          newCardOp = smooth(1 - t);
        } else {
          // Arrive between sIdx and sIdx + 1
          const t = (fract - pauseRange) / (1 - 2 * pauseRange); // 0..1
          const fromX = SECTIONS[sIdx].x;
          const toX = SECTIONS[sIdx + 1].x;

          newCardIdx = t < 0.5 ? sIdx : sIdx + 1;
          newTargetX = lerp(fromX, toX, smooth(t));
          newTargetRotY = lerp((sIdx + 1) * Math.PI * 2, (sIdx + 2) * Math.PI * 2, t);
          newCardOp = 0; // Completely hidden during transition
        }
      }

      // ── Dock tile into the dotted box in onestopsolution ─────────────────
      if (newCardIdx === 6) {
        // Only dock while the onestopsolution section is actually on screen.
        // If user scrolls past, don't let the tile "follow" into the next section.
        const sec = document.getElementById("onestopsolution");
        const sr = sec?.getBoundingClientRect();
        // Keep docked for the entire time any part of the section is visible.
        // (The previous threshold was too strict and could "undock" mid-scroll,
        // making the tile appear to move forward after this section.)
        dockActive = !!sr && sr.bottom > 0 && sr.top < vh;

        if (dockActive) {
          // When docked, we render inside the dotted box element itself,
          // so tile should be centered in that local canvas.
          newTargetX = 0;
          newTargetY = 0;
          newCardOp = 1;
          // Freeze rotation target so it doesn't feel like it "moves forward" again
          newTargetRotY = (N - 1) * Math.PI * 2;
        } else {
          // Past the section: hide instead of drifting into next section
          newCardOp = 0;
        }
      } else {
        lastDock = null;
        dockActive = false;
      }

      targetX = newTargetX;
      targetY = newTargetY;
      targetRotY = newTargetRotY;
      // Set 40-degree tilt for solution section (index 5) and keep it for onestopsolution (index 6)
      targetRotZ = newCardIdx >= 5 ? (40 * Math.PI) / 180 : 0;
      targetCardOp = newCardOp;
      cardIdxRef = newCardIdx;
      setActiveIdx(newCardIdx);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    // Delayed checks to ensure DOM is ready after scene recreation
    setTimeout(() => onScroll(), 100);
    setTimeout(() => onScroll(), 300);

    // ── Render loop ───────────────────────────────────────────────────────────
    let rafId: number;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      frameCount++;

      const ww = window.innerWidth;
      const hh = window.innerHeight;

      // While docked, keep updating the target from the DOM so it stays centered
      const isDocked = cardIdxRef === 6;

      // Horizontal dragging can change the dotted-box DOM without scrolling,
      // so re-check target existence every frame.
      const hasDockTarget = !!readDockTarget();

      if (isDocked) {
        const sec = document.getElementById("onestopsolution");
        const sr = sec?.getBoundingClientRect();
        const inView = !!sr && sr.bottom > 0 && sr.top < hh;

        // Dock is only "active" when section is in view AND the dotted-box target exists.
        // When the section scrolls away, we intentionally keep the tile clipped to the box
        // (so it naturally disappears offscreen) instead of "undocking" back to fullscreen.
        dockActive = inView && hasDockTarget;

        if (!hasDockTarget) {
          dockProgress = 0;
          tile.visible = false;
          targetCardOp = 0;
        } else {
          dockProgress = dockActive
            ? Math.min(1, dockProgress + DOCK_PROGRESS_STEP)
            : 1; // lock to fully docked when out of view

          if (!dockActive) targetCardOp = 0;

          targetX = 0;
          targetY = 0;
          // Keep ONLY the 40deg tilt pose while docked (no spin)
          targetRotY = 0;
          targetRotZ = (40 * Math.PI) / 180;
        }
      } else {
        dockActive = false;
        dockProgress = Math.max(0, dockProgress - DOCK_PROGRESS_STEP);
        // Don't force visibility here - let onScroll control it
      }

      // Slow down motion while docking/settled so it gently "sits" in the box.
      const dockVisualActiveNow = (isDocked && dockActive) || dockProgress > 0.001;
      const spd = dockVisualActiveNow ? 0.06 : 0.09;
      curX += (targetX - curX) * spd;
      curY += (targetY - curY) * spd; // drift Y to target
      if (!dockVisualActiveNow) {
        curRotY += (targetRotY - curRotY) * spd;
        curRotZ += (targetRotZ - curRotZ) * spd; // Interpolate tilt
      } else {
        // Hard lock rotations when docked (prevents "moving forward" feel)
        curRotY = targetRotY;
        curRotZ = targetRotZ;
      }

      smoothCardOp += (targetCardOp - smoothCardOp) * 0.08;

      // Gentle bob only while the card is fully visible
      const idleBob = !dockVisualActiveNow && smoothCardOp > 0.5
        ? Math.sin(frameCount * 0.025) * 0.035
        : 0;

      tile.position.x = curX;
      tile.position.y = curY + idleBob;
      tile.rotation.y = curRotY;
      tile.rotation.x = 0;
      tile.rotation.z = curRotZ; // Apply tilt

      // Render either fullscreen or clipped into the dotted box using scissor+viewport.
      // Always clear the full canvas each frame (avoids ghosting when scissored).
      renderer.setScissorTest(false);
      renderer.setViewport(0, 0, ww, hh);
      renderer.clear();

      if (dockProgress > 0.001) {
        const host = readDockTarget();
        const r = host?.getBoundingClientRect();
        if (r && r.width > 0 && r.height > 0) {
          const t = smooth(dockProgress);
          const tx = r.left;
          const ty = hh - r.bottom; // scissor origin is bottom-left
          const tw = r.width;
          const th = r.height;

          const vx = lerp(0, tx, t);
          const vy = lerp(0, ty, t);
          const vw = lerp(ww, tw, t);
          const vh = lerp(hh, th, t);

          // Fit the (40deg) rotated tile into the dock viewport without cropping.
          // This makes the tile as large as possible while guaranteeing it stays inside.
          const baseZ = 7;
          const vfov = (45 * Math.PI) / 180;
          const aspect = vw / vh;

          // Tile face side length in world units (matches BoxGeometry width/height).
          const side = 2.2;
          const tiltZ = (40 * Math.PI) / 180;
          const aabbFactor = Math.abs(Math.cos(tiltZ)) + Math.abs(Math.sin(tiltZ)); // square rotated in-plane
          const needed = side * aabbFactor * 1.06; // small safety margin

          // Required camera distance to fit needed size in BOTH height and width.
          const tanHalf = Math.tan(vfov / 2);
          const zForHeight = (needed / 2) / tanHalf;
          const zForWidth = (needed / 2) / (tanHalf * aspect);
          const fitZ = Math.max(zForHeight, zForWidth);

          // Move camera closer than baseZ when docking, but never too close.
          const targetZ = Math.max(2.6, Math.min(baseZ, fitZ));
          camera.position.z = lerp(baseZ, targetZ, t);
          camera.aspect = vw / vh;
          camera.updateProjectionMatrix();

          renderer.setScissorTest(true);
          renderer.setViewport(vx, vy, vw, vh);
          renderer.setScissor(vx, vy, vw, vh);
          renderer.render(scene, camera);
        } else {
          camera.position.z = 7;
          camera.aspect = ww / hh;
          camera.updateProjectionMatrix();
          renderer.render(scene, camera);
        }
      } else {
        camera.position.z = 7;
        camera.aspect = ww / hh;
        camera.updateProjectionMatrix();
        renderer.render(scene, camera);
      }

      if (tile.visible) {
        projectTile();
        setCardOpacity(Math.min(1, smoothCardOp));
      } else {
        setCardOpacity(0);
      }
    };
    animate();

    // ── Resize ────────────────────────────────────────────────────────────────
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
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [theme]);

  return (
    <>
      {/* Fixed Three.js canvas — pointer-events none so page is still scrollable */}
      <div
        ref={mountRef}
        className="fixed top-0 left-0 w-full h-screen z-[100] pointer-events-none"
      />

      {/* Description card — fades in below the tile during each pause phase */}
      {activeIdx >= 0 && activeIdx < SECTIONS.length && activeIdx !== 4 && activeIdx !== 5 && activeIdx !== 6 && (
        <DescCard
          section={SECTIONS[activeIdx]}
          opacity={cardOpacity}
          screenX={cardScreenX}
          screenY={cardScreenY}
        />
      )}
      
      {/* Settled indicator for onestopsolution section */}
      {activeIdx === 6 && (
        <div
          className="fixed z-[101] pointer-events-none"
          style={{
            left: cardScreenX,
            top: cardScreenY - 20,
            transform: "translate(-50%, -100%)",
            opacity: cardOpacity,
            transition: "opacity 0.3s ease",
          }}
        >
          </div>
      )}
    </>
  );
}
