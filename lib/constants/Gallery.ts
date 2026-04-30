export const GALLERY_IMAGES_PREMIUM: readonly string[] = Array.from(
  { length: 40 },
  (_, i) => `/Gallery/gallerys${11 + i}.png`
);

/** Luxury gallery – same paths as premium until you swap assets */
export const GALLERY_IMAGES_LUXURY: readonly string[] = Array.from(
  { length: 40 },
  (_, i) => `/Gallery/gallerys${11 + i}.png`
);

export function galleryImages(theme: "premium" | "luxury"): readonly string[] {
  return theme === "luxury" ? GALLERY_IMAGES_LUXURY : GALLERY_IMAGES_PREMIUM;
}

export const GALLERY_TOTAL = GALLERY_IMAGES_PREMIUM.length;

/** @deprecated Use galleryImages(theme) */
export const GALLERY_IMAGES = GALLERY_IMAGES_PREMIUM;

export interface TiltState { rx: number; ry: number }

export type Breakpoint = "xs" | "mobile" | "tablet" | "desktop";

export function circularOffset(a: number, b: number, total: number): number {
  let d = ((b - a) % total + total) % total;
  if (d > total / 2) d -= total;
  return d;
}
export const SLOT_CFG_XS = [
  { xPct: -130, z: 0, ry: 0, scale: 1.00, op: 0    }, 
  { xPct:  -43, z: 0, ry: 0, scale: 1.00, op: 0.80 }, 
  { xPct:    0, z: 0, ry: 0, scale: 1.00, op: 1.00 }, 
  { xPct:   43, z: 0, ry: 0, scale: 1.00, op: 0.80 }, 
  { xPct:  130, z: 0, ry: 0, scale: 1.00, op: 0    }, 
];

export const SLOT_CFG_MOBILE = [
  { xPct: -36, z: -60,  ry:  16, scale: 0.78, op: 0.68 },
  { xPct:   0, z:   0,  ry:   0, scale: 1.00, op: 1.00 },
  { xPct:  36, z: -60,  ry: -16, scale: 0.78, op: 0.68 },
];


export const SLOT_CFG_TABLET = [
  { xPct: -42, z: -160, ry:  32, scale: 0.65, op: 0.50 },
  { xPct: -22, z:  -70, ry:  20, scale: 0.80, op: 0.75 },
  { xPct:   0, z:    0, ry:   0, scale: 1.00, op: 1.00 },
  { xPct:  22, z:  -70, ry: -20, scale: 0.80, op: 0.75 },
  { xPct:  42, z: -160, ry: -32, scale: 0.65, op: 0.50 },
];


export const SLOT_CFG_DESKTOP = [
  { xPct: -50, z: -300, ry:  50, scale: 0.50, op: 0.30 },
  { xPct: -34, z: -160, ry:  38, scale: 0.65, op: 0.55 },
  { xPct: -17, z:  -60, ry:  22, scale: 0.82, op: 0.78 },
  { xPct:   0, z:    0, ry:   0, scale: 1.00, op: 1.00 },
  { xPct:  17, z:  -60, ry: -22, scale: 0.82, op: 0.78 },
  { xPct:  34, z: -160, ry: -38, scale: 0.65, op: 0.55 },
  { xPct:  50, z: -300, ry: -50, scale: 0.50, op: 0.30 },
];

export const CARD_SIZE: Record<Breakpoint, { w: string; h: string }> = {
  xs:      { w: "clamp(230px,72vw,320px)",  h: "clamp(330px,95vw,460px)"  },
  mobile:  { w: "clamp(150px,40vw,240px)",  h: "clamp(250px,65vw,400px)"  },
  tablet:  { w: "clamp(140px,22vw,260px)",  h: "clamp(280px,44vw,480px)"  },
  desktop: { w: "clamp(140px,18vw,300px)",  h: "clamp(230px,30vw,500px)"  },
};
