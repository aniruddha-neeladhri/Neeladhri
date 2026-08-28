import localFont from "next/font/local";

/** Cormorant SC Medium — display titles & primary headings */
export const cormorantSC = localFont({
  src: [{ path: "../app/Fonts/CormorantSC-Medium.ttf", weight: "500", style: "normal" }],
  variable: "--font-cormorant-sc",
  display: "swap",
});

/** Montserrat Medium — subheadings, labels, captions */
export const montserrat = localFont({
  src: [{ path: "../app/Fonts/Montserrat-Medium.ttf", weight: "500", style: "normal" }],
  variable: "--font-montserrat",
  display: "swap",
});

/** Poppins Regular — body copy (normal weight) */
export const poppins = localFont({
  src: [{ path: "../app/Fonts/Poppins-Regular.ttf", weight: "400", style: "normal" }],
  variable: "--font-poppins",
  display: "swap",
});

/** Poppins ExtraLight — light body copy */
export const poppinsExtraLight = localFont({
  src: [{ path: "../app/Fonts/Poppins-ExtraLight.ttf", weight: "200", style: "normal" }],
  variable: "--font-poppins-extralight",
  display: "swap",
});

/** Cormorant Garamond — variable weight (light–semibold used in UI) */
export const cormorantGaramond = localFont({
  src: [{ path: "../app/Fonts/CormorantGaramond-VariableFont_wght.ttf", weight: "100 900", style: "normal" }],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

/** Roboto Slab Light — luxury theme headings */
export const robotoSlab = localFont({
  src: [{ path: "../app/Fonts/RobotoSlab-Light.ttf", weight: "300", style: "normal" }],
  variable: "--font-roboto-slab",
  display: "swap",
});

/** GFS Didot Regular — luxury commitment stats */
export const gfsDidot = localFont({
  src: [{ path: "../app/Fonts/GFSDidot-Regular.ttf", weight: "400", style: "normal" }],
  variable: "--font-gfs-didot",
  display: "swap",
});

/** Playfair Display Regular — premium hero & blog headings */
export const playfairDisplay = localFont({
  src: [{ path: "../app/Fonts/PlayfairDisplay-Regular.ttf", weight: "400", style: "normal" }],
  variable: "--font-playfair-display",
  display: "swap",
});

/** Apply on `<html>` — registers CSS variables only; does not set a page-wide font. */
export const fontVariableClassNames = [
  cormorantSC.variable,
  montserrat.variable,
  poppins.variable,
  poppinsExtraLight.variable,
  cormorantGaramond.variable,
  robotoSlab.variable,
  gfsDidot.variable,
  playfairDisplay.variable,
].join(" ");

export const FONT_FAMILY_CLASSES = [
  "font-cormorant",
  "font-montserrat",
  "font-poppins",
  "font-poppins-light",
  "font-cormorant-garamond",
  "font-roboto-slab",
  "font-gfs-didot",
  "font-playfair-display",
] as const;
