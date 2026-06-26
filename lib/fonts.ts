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

/** Apply on `<html>` — registers CSS variables only; does not set a page-wide font. */
export const fontVariableClassNames = [
  cormorantSC.variable,
  montserrat.variable,
  poppins.variable,
  poppinsExtraLight.variable,
].join(" ");

export const FONT_FAMILY_CLASSES = [
  "font-cormorant",
  "font-montserrat",
  "font-poppins",
  "font-poppins-light",
] as const;
