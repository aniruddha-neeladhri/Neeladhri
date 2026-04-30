export interface BrandData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  images: string[];
}

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

/** Luxury brand names – same as premium until you customize */
export const BRAND_NAMES_LUXURY: readonly string[] = [
  "Bisazza", "Atlas Concorde", "Neotra", "Dekton", "OP Butler",
  "Perrin & Rowe", "House of Rohl", "Treemme", "Galassia", "Victoria + Albert",
  "Décor Walther", "Sunshower", "Armadi Art", "Tab", "Specta",
  "Miraak", "Crava", "Viaan", "Water Purifiers", 
];

/** Luxury brand routes – same as premium until you customize */
export const BRAND_ROUTES_LUXURY: readonly string[] = [
  "/brands/bisazza", "/brands/atlas-concorde", "/brands/neotra", "/brands/dekton",
  "/brands/op-butler", "/brands/perrin-rowe", "/brands/house-of-rohl", "/brands/treemme",
  "/brands/galassia", "/brands/victoria-albert", "/brands/decor-walther", "/brands/sunshower",
  "/brands/armadi-art", "/brands/tab", "/brands/specta", "/brands/miraak",
  "/brands/crava", "/brands/viaan", "/brands/water-purifiers",
];

/** Luxury brand data – same as premium until you customize */
export const brandsDataLuxury: Record<string, BrandData> = {
  bisazza: {
    id: "bisazza",
    name: "Bisazza",
    tagline: "Artistry in Every Surface",
    description: "Bisazza transforms spaces through iconic mosaic designs that blur the line between art and architecture. Each piece brings character, color, and craftsmanship into refined living environments.",
    images: [
      "/Brands/Auga/auga1.png",
      "/Brands/Auga/auga2.png",
      "/Brands/Auga/auga3.png",
      "/Brands/Auga/auga4.png",
      "/Brands/Auga/auga5.png",
    ],
  },
  atlasConcorde: {
    id: "atlas-concorde",
    name: "Atlas Concorde",
    tagline: "Italian Surfaces, Timeless Design",
    description: "Atlas Concorde offers premium ceramic and porcelain surfaces inspired by natural materials. Designed in Italy, each collection reflects elegance, durability, and contemporary sophistication.",
    images: [
      "/Brands/simpolo/simpolo1.png",
      "/Brands/simpolo/simpolo2.png",
      "/Brands/simpolo/simpolo3.png",
      "/Brands/simpolo/simpolo4.png",
      "/Brands/simpolo/simpolo5.png",
    ],
  },
  neotra: {
    id: "neotra",
    name: "Neotra",
    tagline: "Minimalism, Perfected",
    description: "Neotra delivers clean, modern surface solutions that prioritize simplicity and balance. Its understated aesthetic creates calm, refined spaces with lasting visual impact.",
    images: [
      "/Brands/Bellissimo/bellissimo1.png",
      "/Brands/Bellissimo/bellissimo2.png",
      "/Brands/Bellissimo/bellissimo3.png",
      "/Brands/Bellissimo/bellissimo4.png",
      "/Brands/Bellissimo/bellissimo5.png",
    ],
  },
  dekton: {
    id: "dekton",
    name: "Dekton",
    tagline: "Engineered for Extraordinary Living",
    description: "Dekton is an ultra-compact surface designed for high performance and striking aesthetics. Resistant, versatile, and visually bold, it defines luxury through innovation.",
    images: [
      "/Brands/Roca/roca1.png",
      "/Brands/Roca/roca2.png",
      "/Brands/Roca/roca3.png",
      "/Brands/Roca/roca4.png",
      "/Brands/Roca/roca5.png",
    ],
  },
  opButler: {
    id: "op-butler",
    name: "OP Butler",
    tagline: "Refined Dining, Redefined",
    description: "OP Butler curates elegant solutions that elevate dining experiences. With a focus on detail and presentation, it blends functionality with understated luxury.",
    images: [
      "/Brands/Hansgrohe/hansgrohe1.png",
      "/Brands/Hansgrohe/hansgrohe2.png",
      "/Brands/Hansgrohe/hansgrohe3.png",
      "/Brands/Hansgrohe/hansgrohe4.png",
      "/Brands/Hansgrohe/hansgrohe5.png",
    ],
  },
  perrinRowe: {
    id: "perrin-rowe",
    name: "Perrin & Rowe",
    tagline: "British Craftsmanship, Timeless Luxury",
    description: "Handcrafted in the UK, Perrin & Rowe fittings combine traditional techniques with refined design. Every detail reflects precision, heritage, and enduring elegance.",
    images: [
      "/Brands/Carysil/carysil1.png",
      "/Brands/Carysil/carysil2.png",
      "/Brands/Carysil/carysil3.png",
      "/Brands/Carysil/carysil4.png",
      "/Brands/Carysil/carysil5.png",
    ],
  },
  houseOfRohl: {
    id: "house-of-rohl",
    name: "House of Rohl",
    tagline: "A Collective of Iconic Luxury",
    description: "Smack provides reliable kitchen appliances designed to simplify daily cooking. Combining functionality with modern design, it supports a smooth and efficient kitchen experience.House of Rohl brings together globally renowned brands to create exceptional bathroom experiences. Rooted in craftsmanship, it represents the pinnacle of curated luxury.",
    images: [
      "/Brands/Smack/smack1.png",
      "/Brands/Smack/smack2.png",
      "/Brands/Smack/smack3.png",
      "/Brands/Smack/smack4.png",
      "/Brands/Smack/smack5.png",
    ],
  },
  treemme: {
    id: "treemme",
    name: "Treemme",
    tagline: "Contemporary Italian Innovation",
    description: "Treemme reimagines bathroom fittings through bold design and advanced engineering. Clean lines and modern aesthetics define its distinctive identity.",
    images: [
      "/Brands/IFB/ifb1.png",
      "/Brands/IFB/ifb2.png",
      "/Brands/IFB/ifb3.png",
      "/Brands/IFB/ifb4.png",
      "/Brands/IFB/ifb5.png",
    ],
  },
  galassia: {
    id: "galassia",
    name: "Galassia",
    tagline: "Ceramic Design with Character",
    description: "Galassia combines Italian craftsmanship with expressive design to create unique sanitaryware. Its collections bring personality and elegance into modern bathrooms.",
    images: [
      "/Brands/Hafele/hafele1.png",
      "/Brands/Hafele/hafele2.png",
      "/Brands/Hafele/hafele3.png",
      "/Brands/Hafele/hafele4.png",
      "/Brands/Hafele/hafele5.png",
    ],
  },
  victoriaAlbert: {
    id: "victoria-albert",
    name: "Victoria + Albert",
    tagline: "Sculptural Bathing Experiences",
    description: "Victoria + Albert is known for beautifully crafted freestanding baths and basins. Each piece is designed to be both functional and a striking visual centerpiece.",
    images: [
      "/Brands/3mwater/water1.png",
      "/Brands/3mwater/water2.png",
      "/Brands/3mwater/water3.png",
      "/Brands/3mwater/water4.png",
      "/Brands/3mwater/water5.png",
    ],
  },
  decorWalther: {
    id: "decor-walther",
    name: "Décor Walther",
    tagline: "Accessories, Perfected",
    description: "Décor Walther elevates bathroom accessories through precision and minimal design. Every detail is refined to complement luxury spaces effortlessly.",
    images: [
      "/Brands/Wesmarc/wesmarc1.png",
      "/Brands/Wesmarc/wesmarc2.png",
      "/Brands/Wesmarc/wesmarc3.png",
      "/Brands/Wesmarc/wesmarc3.png",
      "/Brands/Wesmarc/wesmarc3.png",
    ],
  },
  sunshower: {
    id: "sunshower",
    name: "Sunshower",
    tagline: "Wellness Meets Innovation",
    description: "Sunshower integrates light therapy into bathroom spaces, creating a unique wellness experience. It combines technology and design for a new level of comfort.",
    images: [
      "/Brands/Wesmarc/wesmarc1.png",
      "/Brands/Wesmarc/wesmarc2.png",
      "/Brands/Wesmarc/wesmarc3.png",
      "/Brands/Wesmarc/wesmarc3.png",
      "/Brands/Wesmarc/wesmarc3.png",
    ],
  },
  armadiArt: {
    id: "armadi-art",
    name: "Armadi Art",
    tagline: "Italian Vanity, Reimagined",
    description: "Armadi Art offers contemporary bathroom furniture with a focus on elegance and functionality. Designed in Italy, it brings modern sophistication to everyday spaces.",
    images: [
      "/Brands/Wesmarc/wesmarc1.png",
      "/Brands/Wesmarc/wesmarc2.png",
      "/Brands/Wesmarc/wesmarc3.png",
      "/Brands/Wesmarc/wesmarc3.png",
      "/Brands/Wesmarc/wesmarc3.png",
    ],
  },
  tab: {
    id: "tab",
    name: "Tab",
    tagline: "Precision in Kitchen Design",
    description: "Tab delivers refined kitchen solutions that balance performance and aesthetics. Designed for modern lifestyles, it emphasizes efficiency with a premium finish.",
    images: [
      "/Brands/Wesmarc/wesmarc1.png",
      "/Brands/Wesmarc/wesmarc2.png",
      "/Brands/Wesmarc/wesmarc3.png",
      "/Brands/Wesmarc/wesmarc3.png",
      "/Brands/Wesmarc/wesmarc3.png",
    ],
  },
  specta: {
    id: "specta",
    name: "Specta",
    tagline: "Surfaces that Define Kitchens",
    description: "Specta offers high-quality engineered surfaces crafted for durability and visual appeal. Its designs enhance the overall character of contemporary kitchens.",
    images: [
      "/Brands/Wesmarc/wesmarc1.png",
      "/Brands/Wesmarc/wesmarc2.png",
      "/Brands/Wesmarc/wesmarc3.png",
      "/Brands/Wesmarc/wesmarc3.png",
      "/Brands/Wesmarc/wesmarc3.png",
    ],
  },
  miraak: {
    id: "miraak",
    name: "Miraak",
    tagline: "Modern Kitchens, Elevated",
    description: "Miraak focuses on sleek, design-forward kitchen solutions that combine functionality with refined aesthetics. Built for seamless integration into luxury homes.",
    images: [
      "/Brands/Wesmarc/wesmarc1.png",
      "/Brands/Wesmarc/wesmarc2.png",
      "/Brands/Wesmarc/wesmarc3.png",
      "/Brands/Wesmarc/wesmarc3.png",
      "/Brands/Wesmarc/wesmarc3.png",
    ],
  },
  crava: {
    id: "crava",
    name: "Crava",
    tagline: "Designed for Everyday Elegance",
    description: "Crava brings together thoughtful design and practical innovation to create kitchens that feel both stylish and efficient.",
    images: [
      "/Brands/Wesmarc/wesmarc1.png",
      "/Brands/Wesmarc/wesmarc2.png",
      "/Brands/Wesmarc/wesmarc3.png",
      "/Brands/Wesmarc/wesmarc3.png",
      "/Brands/Wesmarc/wesmarc3.png",
    ],
  },
  viaan: {
    id: "viaan",
    name: "Viaan",
    tagline: "Health-Focused Hydration",
    description: "Viaan offers advanced alkaline water solutions designed to support a healthier lifestyle. Clean design meets functional innovation.",
    images: [
      "/Brands/Wesmarc/wesmarc1.png",
      "/Brands/Wesmarc/wesmarc2.png",
      "/Brands/Wesmarc/wesmarc3.png",
      "/Brands/Wesmarc/wesmarc3.png",
      "/Brands/Wesmarc/wesmarc3.png",
    ],
  },
  waterPurifiers: {
    id: "water-purifiers",
    name: "3M – Water Purifiers",
    tagline: "Health-Focused HydrationAdvanced Filtration You Can Trust",
    description: "3M delivers reliable water purification systems built on proven technology. Designed for safety, purity, and everyday confidence.",
    images: [
      "/Brands/3mwater/water1.png",
      "/Brands/3mwater/water2.png",
      "/Brands/3mwater/water3.png",
      "/Brands/3mwater/water4.png",
      "/Brands/3mwater/water5.png",
    ],
  },
};
