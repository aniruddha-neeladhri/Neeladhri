export interface BrandData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  images: string[];
}

// =====================
// PREMIUM (Brands)
// =====================
export const BRAND_IMAGES_PREMIUM = [
  "/Brands/main111.png",
  "/Brands/main12.png",
  "/Brands/main13.png",
  "/Brands/main14.png",
  "/Brands/main15.png",
  "/Brands/main16.png",
  "/Brands/main17.png",
  "/Brands/main18.png",
  "/Brands/main19.png",
  "/Brands/main20.png",
  "/Brands/main21.png",
] as const;

// =====================
// LUXURY (Brands)
// =====================

/** Luxury brand images – same paths as premium until you swap assets */
export const BRAND_IMAGES_LUXURY: readonly string[] = [
  "/Brands/main111.png",
  "/Brands/main12.png",
  "/Brands/main13.png",
  "/Brands/main14.png",
  "/Brands/main15.png",
  "/Brands/main16.png",
  "/Brands/main17.png",
  "/Brands/main18.png",
  "/Brands/main19.png",
  "/Brands/main20.png",
  "/Brands/main21.png",
  "/Brands/main12.png",
  "/Brands/main13.png",
  "/Brands/main14.png",
  "/Brands/main15.png",
  "/Brands/main16.png",
  "/Brands/main17.png",
  "/Brands/main18.png",
  "/Brands/main19.png",
];

export function brandImages(theme: "premium" | "luxury"): readonly string[] {
  return theme === "luxury" ? BRAND_IMAGES_LUXURY : BRAND_IMAGES_PREMIUM;
}

export const BRAND_NAMES_PREMIUM = [
  "AUGA", "Simpolo", "Bellissimo", "Roca", "Hansgrohe",
  "Carysil", "Smack", "IFB", "Häfele", "3M Water Purifiers", "Wesmarc",
] as const;

/** Luxury brand names – same as premium until you customize */
export const BRAND_NAMES_LUXURY: readonly string[] = [
  "Bisazza", "Atlas Concorde", "Neotra", "Dekton", "OP Butler",
  "Perrin & Rowe", "House of Rohl", "Treemme", "Galassia", "Victoria + Albert",
  "Décor Walther", "Sunshower", "Armadi Art", "Tab", "Specta",
  "Miraak", "Crava", "Viaan", "Water Purifiers",
];

export function brandNames(theme: "premium" | "luxury"): readonly string[] {
  return theme === "luxury" ? BRAND_NAMES_LUXURY : BRAND_NAMES_PREMIUM;
}

export const BRAND_ROUTES_PREMIUM = [
  "/brands/auga", "/brands/simpolo", "/brands/bellissimo", "/brands/roca",
  "/brands/hansgrohe", "/brands/carysil", "/brands/smack", "/brands/ifb",
  "/brands/hafele", "/brands/3m-water-purifiers", "/brands/wesmarc",
] as const;

/** Luxury brand routes – same as premium until you customize */
export const BRAND_ROUTES_LUXURY: readonly string[] = [
  "/brands/bisazza", "/brands/atlas-concorde", "/brands/neotra", "/brands/dekton",
  "/brands/op-butler", "/brands/perrin-rowe", "/brands/house-of-rohl", "/brands/treemme",
  "/brands/galassia", "/brands/victoria-albert", "/brands/decor-walther", "/brands/sunshower",
   "/brands/armadi-art", "/brands/tab", "/brands/specta", "/brands/miraak",
    "/brands/crava", "/brands/viaan", "/brands/water-purifiers",
];

export function brandRoutes(theme: "premium" | "luxury"): readonly string[] {
  return theme === "luxury" ? BRAND_ROUTES_LUXURY : BRAND_ROUTES_PREMIUM;
}

// Keep original exports for backward compatibility
export const BRAND_IMAGES = BRAND_IMAGES_PREMIUM;
export const BRAND_NAMES = BRAND_NAMES_PREMIUM;
export const BRAND_ROUTES = BRAND_ROUTES_PREMIUM;

// Brand data - Premium
export const brandsDataPremium: Record<string, BrandData> = {
  auga: {
    id: "auga",
    name: "AUGA",
    tagline: "Complete Bathroom Solutions",
    description: "AUGA offers coordinated bathroom solutions that blend functionality with modern aesthetics. Designed for seamless integration, it helps create spaces that feel both practical and visually refined.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  simpolo: {
    id: "simpolo",
    name: "SIMPOLO",
    tagline: "Design-Led Tiles for Every Space",
    description: "Simpolo brings together style, durability, and versatility through a wide range of designer tiles. From bold patterns to subtle textures, each collection is crafted to elevate floors and walls across living spaces, dining areas, and beyond.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  bellissimo: {
    id: "bellissimo",
    name: "BELLISSIMO",
    tagline: "Smart Storage. Seamless Living.",
    description: "Bellissimo focuses on intelligent storage solutions that enhance both function and aesthetics. With smooth mechanisms and thoughtfully designed systems, it transforms everyday spaces into organized, clutter-free environments.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  roca: {
    id: "roca",
    name: "ROCA",
    tagline: "Refined Surfaces with European Elegance",
    description: "Roca delivers sophisticated bathroom and surface solutions inspired by modern European design. Clean lines, premium finishes, and timeless appeal make it ideal for spaces that value subtle luxury.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  hansgrohe: {
    id: "hansgrohe",
    name: "Hansgrohe",
    tagline: "Luxury in Every Drop",
    description: "Hansgrohe redefines water experiences with precision-engineered faucets and shower systems. Combining innovation with elegant design, it brings comfort, performance, and indulgence into everyday routines.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  carysil: {
    id: "carysil",
    name: "Carysil",
    tagline: "Engineered for Modern Kitchens",
    description: "Carysil specializes in high-quality kitchen sinks and solutions built for daily performance. With durable materials and sleek designs, it enhances both efficiency and style in contemporary kitchens.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  smack: {
    id: "smack",
    name: "Smack",
    tagline: "Built for Everyday Cooking",
    description: "Smack provides reliable kitchen appliances designed to simplify daily cooking. Combining functionality with modern design, it supports a smooth and efficient kitchen experience.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  ifb: {
    id: "ifb",
    name: "IFB",
    tagline: "Innovation Meets Performance",
    description: "IFB brings advanced technology into the kitchen with a range of premium appliances. Designed for convenience and efficiency, it delivers performance that fits seamlessly into modern lifestyles.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  hafele: {
    id: "hafele",
    name: "Häfele",
    tagline: "Precision in Every Detail",
    description: "Häfele offers world-class fittings and hardware solutions that enhance the way spaces function. From smart storage systems to advanced mechanisms, it ensures durability, innovation, and seamless usability.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  "3m-water-purifiers": {
    id: "3m-water-purifiers",
    name: "3M Water Purifiers",
    tagline: "Pure Water. Trusted Protection.",
    description: "3M water purifiers provide reliable filtration solutions for safe and clean drinking water. Designed with advanced technology, they ensure peace of mind for healthier everyday living.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  wesmarc: {
    id: "wesmarc",
    name: "Wesmarc",
    tagline: "Crafted Entrances That Last",
    description: "Wesmarc doors combine strength, durability, and elegant design to create lasting impressions. Built with precision, they enhance both the security and style of modern spaces.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
};

/** Luxury brand data – same as premium until you customize */
export const brandsDataLuxury: Record<string, BrandData> = {
  bisazza: {
    id: "bisazza",
    name: "Bisazza",
    tagline: "Artistry in Every Surface",
    description: "Bisazza transforms spaces through iconic mosaic designs that blur the line between art and architecture. Each piece brings character, color, and craftsmanship into refined living environments.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  atlasConcorde: {
    id: "atlas-concorde",
    name: "Atlas Concorde",
    tagline: "Italian Surfaces, Timeless Design",
    description: "Atlas Concorde offers premium ceramic and porcelain surfaces inspired by natural materials. Designed in Italy, each collection reflects elegance, durability, and contemporary sophistication.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  neotra: {
    id: "neotra",
    name: "Neotra",
    tagline: "Minimalism, Perfected",
    description: "Neotra delivers clean, modern surface solutions that prioritize simplicity and balance. Its understated aesthetic creates calm, refined spaces with lasting visual impact.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  dekton: {
    id: "dekton",
    name: "Dekton",
    tagline: "Engineered for Extraordinary Living",
    description: "Dekton is an ultra-compact surface designed for high performance and striking aesthetics. Resistant, versatile, and visually bold, it defines luxury through innovation.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  opButler: {
    id: "op-butler",
    name: "OP Butler",
    tagline: "Refined Dining, Redefined",
    description: "OP Butler curates elegant solutions that elevate dining experiences. With a focus on detail and presentation, it blends functionality with understated luxury.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  perrinRowe: {
    id: "perrin-rowe",
    name: "Perrin & Rowe",
    tagline: "British Craftsmanship, Timeless Luxury",
    description: "Handcrafted in the UK, Perrin & Rowe fittings combine traditional techniques with refined design. Every detail reflects precision, heritage, and enduring elegance.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  houseOfRohl: {
    id: "house-of-rohl",
    name: "House of Rohl",
    tagline: "A Collective of Iconic Luxury",
    description: "Smack provides reliable kitchen appliances designed to simplify daily cooking. Combining functionality with modern design, it supports a smooth and efficient kitchen experience.House of Rohl brings together globally renowned brands to create exceptional bathroom experiences. Rooted in craftsmanship, it represents the pinnacle of curated luxury.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  treemme: {
    id: "treemme",
    name: "Treemme",
    tagline: "Contemporary Italian Innovation",
    description: "Treemme reimagines bathroom fittings through bold design and advanced engineering. Clean lines and modern aesthetics define its distinctive identity.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  galassia: {
    id: "galassia",
    name: "Galassia",
    tagline: "Ceramic Design with Character",
    description: "Galassia combines Italian craftsmanship with expressive design to create unique sanitaryware. Its collections bring personality and elegance into modern bathrooms.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  victoriaAlbert: {
    id: "victoria-albert",
    name: "Victoria + Albert",
    tagline: "Sculptural Bathing Experiences",
    description: "Victoria + Albert is known for beautifully crafted freestanding baths and basins. Each piece is designed to be both functional and a striking visual centerpiece.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  decorWalther: {
    id: "decor-walther",
    name: "Décor Walther",
    tagline: "Accessories, Perfected",
    description: "Décor Walther elevates bathroom accessories through precision and minimal design. Every detail is refined to complement luxury spaces effortlessly.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  sunshower: {
    id: "sunshower",
    name: "Sunshower",
    tagline: "Wellness Meets Innovation",
    description: "Sunshower integrates light therapy into bathroom spaces, creating a unique wellness experience. It combines technology and design for a new level of comfort.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  armadiArt: {
    id: "armadi-art",
    name: "Armadi Art",
    tagline: "Italian Vanity, Reimagined",
    description: "Armadi Art offers contemporary bathroom furniture with a focus on elegance and functionality. Designed in Italy, it brings modern sophistication to everyday spaces.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  tab: {
    id: "tab",
    name: "Tab",
    tagline: "Precision in Kitchen Design",
    description: "Tab delivers refined kitchen solutions that balance performance and aesthetics. Designed for modern lifestyles, it emphasizes efficiency with a premium finish.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  specta: {
    id: "specta",
    name: "Specta",
    tagline: "Surfaces that Define Kitchens",
    description: "Specta offers high-quality engineered surfaces crafted for durability and visual appeal. Its designs enhance the overall character of contemporary kitchens.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  miraak: {
    id: "miraak",
    name: "Miraak",
    tagline: "Modern Kitchens, Elevated",
    description: "Miraak focuses on sleek, design-forward kitchen solutions that combine functionality with refined aesthetics. Built for seamless integration into luxury homes.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  crava: {
    id: "crava",
    name: "Crava",
    tagline: "Designed for Everyday Elegance",
    description: "Crava brings together thoughtful design and practical innovation to create kitchens that feel both stylish and efficient.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  viaan: {
    id: "viaan",
    name: "Viaan",
    tagline: "Health-Focused Hydration",
    description: "Viaan offers advanced alkaline water solutions designed to support a healthier lifestyle. Clean design meets functional innovation.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
  waterPurifiers: {
    id: "water-purifiers",
    name: "3M – Water Purifiers",
    tagline: "Health-Focused HydrationAdvanced Filtration You Can Trust",
    description: "3M delivers reliable water purification systems built on proven technology. Designed for safety, purity, and everyday confidence.",
    images: [
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
      "/Brands/brandsimg.png",
    ],
  },
};

export function getBrandsData(theme: "premium" | "luxury"): Record<string, BrandData> {
  return theme === "luxury" ? brandsDataLuxury : brandsDataPremium;
}

// Unified alias for backwards compatibility with old routes/components.
// Many brand pages import `brandsData.<key>` directly; we must include both
// premium and luxury records so lookups don't return `undefined`.
const brandsData: Record<string, BrandData> = {
  ...brandsDataPremium,
  ...brandsDataLuxury,
};
export { brandsData };
