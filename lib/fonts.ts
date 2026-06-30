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

/** Cormorant Garamond — variable weight, normal */
export const cormorantGaramond = localFont({
  src: [{ path: "../app/Fonts/CormorantGaramond-VariableFont_wght.ttf", weight: "100 900", style: "normal" }],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

/** Cormorant Garamond Medium — static medium */
export const cormorantGaramondMedium = localFont({
  src: [{ path: "../app/Fonts/CormorantGaramond-Medium.ttf", weight: "500", style: "normal" }],
  variable: "--font-cormorant-garamond-medium",
  display: "swap",
});

/** Cormorant Garamond — variable weight, italic */
export const cormorantGaramondItalic = localFont({
  src: [{ path: "../app/Fonts/CormorantGaramond-Italic-VariableFont_wght.ttf", weight: "100 900", style: "italic" }],
  variable: "--font-cormorant-garamond-italic",
  display: "swap",
});

/** Roboto Slab — thin through bold */
export const robotoSlab = localFont({
  src: [
    { path: "../app/Fonts/RobotoSlab-Thin.ttf", weight: "100", style: "normal" },
    { path: "../app/Fonts/RobotoSlab-Light.ttf", weight: "300", style: "normal" },
    { path: "../app/Fonts/RobotoSlab-Regular.ttf", weight: "400", style: "normal" },
    { path: "../app/Fonts/RobotoSlab-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-roboto-slab",
  display: "swap",
});

/** GFS Didot Regular — elegant serif display */
export const gfsDidot = localFont({
  src: [{ path: "../app/Fonts/GFSDidot-Regular.ttf", weight: "400", style: "normal" }],
  variable: "--font-gfs-didot",
  display: "swap",
});

/** The Seasons Light — luxury display */
export const theSeasonsLight = localFont({
  src: [{ path: "../app/Fonts/FSP DEMO - The Seasons Light Regular.otf", weight: "300", style: "normal" }],
  variable: "--font-the-seasons",
  display: "swap",
});

/** The Seasons Bold — luxury display emphasis */
export const theSeasonsBold = localFont({
  src: [{ path: "../app/Fonts/Fontspring-DEMO-theseasons-bd.otf", weight: "700", style: "normal" }],
  variable: "--font-the-seasons-bold",
  display: "swap",
});

/** Playfair Display — regular through bold */
export const playfairDisplay = localFont({
  src: [
    { path: "../app/Fonts/PlayfairDisplay-Regular.ttf", weight: "400", style: "normal" },
    { path: "../app/Fonts/PlayfairDisplay-Medium.ttf", weight: "500", style: "normal" },
    { path: "../app/Fonts/PlayfairDisplay-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../app/Fonts/PlayfairDisplay-Bold.ttf", weight: "700", style: "normal" },
  ],
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
  cormorantGaramondMedium.variable,
  cormorantGaramondItalic.variable,
  robotoSlab.variable,
  gfsDidot.variable,
  theSeasonsLight.variable,
  theSeasonsBold.variable,
  playfairDisplay.variable,
].join(" ");

export const FONT_FAMILY_CLASSES = [
  "font-cormorant",
  "font-montserrat",
  "font-poppins",
  "font-poppins-light",
  "font-cormorant-garamond",
  "font-cormorant-garamond-medium",
  "font-cormorant-garamond-italic",
  "font-roboto-slab",
  "font-gfs-didot",
  "font-the-seasons",
  "font-the-seasons-bold",
  "font-playfair-display",
] as const;
