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
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/c480598e-5771-4b81-8447-e18b96bfb987.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/425c24f3-f8d3-46f0-8b92-1a9b51ce74e0.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/3c257593-a0f4-44d0-b4b9-85f29a8b3fa1.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/12843d3d-becb-4f4d-a1f2-cca28919ad0b.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/72199a5d-1be9-4089-9297-f5110b90e262.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/201e9e03-9ac6-4781-a8ab-fa7f69899b36.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/49e474c3-3dd2-47e4-a72e-138dd0d68bfb.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/59bcd6a9-dcaf-46af-9236-9b33ce91076b.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/c5fe70f3-37a4-48c9-87b2-2e9fa152f854.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/564f553e-1302-4261-a523-63ec27bbcfa8.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/9a945e83-8987-4bd3-8f9c-f818806fc186.png",
] as const;

// =====================
// LUXURY (Brands)
// =====================

/** Luxury brand images – same paths as premium until you swap assets */
export const BRAND_IMAGES_LUXURY: readonly string[] = [
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/24c64e84-2357-469d-ba53-31586f544a98.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/ed396bb3-60f8-46d4-a07a-7bcd014118f1.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/4d6b9576-c066-496a-b192-b029ee092127.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/7bddd32c-1d82-4913-931c-62c236825e01.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/7652c328-5ad4-48f7-8818-45c74ddd10f2.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/90d86db3-0d5b-4972-83c9-2cd631280006.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/48a28e6c-9274-4798-bccd-c60fd991af83.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/9c4acc4e-6b79-4ebc-86f5-10049295a200.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/46edbee6-9cdf-4617-94d7-165406a2de6d.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/cbe31ad3-556b-4f7b-b31a-97d42714a60f.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/13057783-23bb-4f93-aa9f-48246a01c28c.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/ed43ff6d-6eed-4f0b-9a6a-4bfc48b2d87a.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/7ba87752-7df0-430c-98d6-2f2b8e9b7b8c.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/067037c4-1b6c-4d64-9463-5f591f31028e.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/a63dc96d-07b1-4b0e-9179-4106cc6eb540.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/faab7e4b-4360-44fb-848e-55bf958e6b2c.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/3c2953e1-dddb-46da-9a30-43188474b514.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/84d74dc7-f206-4405-8ae7-c39c3550e265.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/9e02eafa-8ad1-48fd-ba5d-f985d031cf62.png",
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
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/8921b6e5-deb7-4553-b79a-ad01bc139698.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/a0c062f9-247a-41f1-9567-e8f76f484f60.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/4934ff53-d1b9-4428-bd85-d502298d613a.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/bf38ff44-f466-4547-bfa3-46e5150e6bb0.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/2dc74d24-9d75-4fad-8b27-a4dca7be8e04.png",
    ],
  },
  simpolo: {
    id: "simpolo",
    name: "SIMPOLO",
    tagline: "Design-Led Tiles for Every Space",
    description: "Simpolo brings together style, durability, and versatility through a wide range of designer tiles. From bold patterns to subtle textures, each collection is crafted to elevate floors and walls across living spaces, dining areas, and beyond.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/21dd523d-701a-4b52-8d2d-37120a0b5e4b.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/02bf92ca-dc6b-4a76-ae3f-e33e39f7c4b2.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/1295805b-1cf8-4289-bb36-26f3243cd421.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/81a305b2-a17e-43cc-af85-205d7aa83597.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/39673118-1689-4b41-9587-55b41f80ecd2.png",
    ],
  },
  bellissimo: {
    id: "bellissimo",
    name: "BELLISSIMO",
    tagline: "Smart Storage. Seamless Living.",
    description: "Bellissimo focuses on intelligent storage solutions that enhance both function and aesthetics. With smooth mechanisms and thoughtfully designed systems, it transforms everyday spaces into organized, clutter-free environments.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/bbfffab5-1288-40a5-858f-0b0722499174.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/da511daa-e778-41f3-a874-2c244ed3a539.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/c74761f9-df07-4fb4-844d-33f825bac0b2.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/832e4980-cc89-43d5-835f-9df6ea5ea895.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/0393e8b3-7be9-4df1-b0f9-769d8f13e554.png",
    ],
  },
  roca: {
    id: "roca",
    name: "ROCA",
    tagline: "Refined Surfaces with European Elegance",
    description: "Roca delivers sophisticated bathroom and surface solutions inspired by modern European design. Clean lines, premium finishes, and timeless appeal make it ideal for spaces that value subtle luxury.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/392964d8-cc52-47f5-b347-1be38d245bf2.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/0977bd5b-1b8a-4dd4-a535-eb0342290146.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/0a278376-0fa4-4fb8-b7f5-9cd3a52c46ce.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/e7a5d3a1-555f-4e52-ac6a-5e6be5e8d663.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/e9111671-569c-4f9f-8e75-bda4ae77e04d.png",
    ],
  },
  hansgrohe: {
    id: "hansgrohe",
    name: "Hansgrohe",
    tagline: "Luxury in Every Drop",
    description: "Hansgrohe redefines water experiences with precision-engineered faucets and shower systems. Combining innovation with elegant design, it brings comfort, performance, and indulgence into everyday routines.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/1c97729b-d8b1-4c90-9c23-4fb4009e48c4.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/503c481e-10f5-437b-9779-6e354c5cd8fd.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/a7e63361-4776-48b4-817f-199e37e20e5d.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/c5b0a7c0-657f-44f1-96d9-322f9e545805.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/1015adbb-ab34-4378-bee8-c9c0ae5f3e52.png",
    ],
  },
  carysil: {
    id: "carysil",
    name: "Carysil",
    tagline: "Engineered for Modern Kitchens",
    description: "Carysil specializes in high-quality kitchen sinks and solutions built for daily performance. With durable materials and sleek designs, it enhances both efficiency and style in contemporary kitchens.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/6f882e6e-f59d-4c63-b59a-24f60e708971.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/ee7a8c25-7eef-48a2-9fc8-09380519611a.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/0ac7b962-6586-4760-ade7-003ce08714da.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/5f5089a9-3a5d-4fbe-81c8-19e747de5e6a.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/0fef0b0a-ec2f-4dae-ab8c-df1987ad5488.png",
    ],
  },
  smack: {
    id: "smack",
    name: "Smack",
    tagline: "Built for Everyday Cooking",
    description: "Smack provides reliable kitchen appliances designed to simplify daily cooking. Combining functionality with modern design, it supports a smooth and efficient kitchen experience.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/82df3b80-3074-4140-8b86-180e8202e9f3.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/8aaa172a-3614-4b9a-816b-0511b689d07e.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/3354f41d-0bf7-4825-82dc-d721ef16b94d.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/e07c0250-c590-4acb-9cf3-1d42b72a5d33.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/d97fe085-5505-49ac-be78-3a1ab986e2cd.png",
    ],
  },
  ifb: {
    id: "ifb",
    name: "IFB",
    tagline: "Innovation Meets Performance",
    description: "IFB brings advanced technology into the kitchen with a range of premium appliances. Designed for convenience and efficiency, it delivers performance that fits seamlessly into modern lifestyles.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/b2e32e95-c37f-40b7-b184-aaf705a5b46c.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/8eb3cc10-7aa9-449d-a278-8b571a2571da.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/eaa66105-68b8-43f2-9239-b6c39288ead2.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/1abaf516-6a04-4e86-8bf0-7d3f9f8ac13a.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/7404aa78-cdf2-4a2a-9e86-a43dae461fd8.png",
    ],
  },
  hafele: {
    id: "hafele",
    name: "Häfele",
    tagline: "Precision in Every Detail",
    description: "Häfele offers world-class fittings and hardware solutions that enhance the way spaces function. From smart storage systems to advanced mechanisms, it ensures durability, innovation, and seamless usability.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/562d4013-67e1-4e00-86c6-08f6c070c219.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/021f32ac-31de-4e62-a436-19e1275a01bf.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/50e039c1-91b7-43b0-acd6-c9f6162bcf97.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/1d4be28c-0727-4053-9f98-0686f07197ac.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/db36f360-5f41-4443-8adb-d4e656f07faa.png",
    ],
  },
  "3m-water-purifiers": {
    id: "3m-water-purifiers",
    name: "3M Water Purifiers",
    tagline: "Pure Water. Trusted Protection.",
    description: "3M water purifiers provide reliable filtration solutions for safe and clean drinking water. Designed with advanced technology, they ensure peace of mind for healthier everyday living.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/bd310d5d-32da-474a-bf39-ffe3a3fa3d19.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/43878366-88b2-4191-8789-4ebb65c9b4b7.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/0945355a-3dd6-4f0e-9d3f-1a17e96e3cbd.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/c7f0112a-6c0d-4263-8ae8-5e1d0dda4a13.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/5d670b69-9d30-48ca-8032-e5c0ad18ce50.png",
    ],
  },
  wesmarc: {
    id: "wesmarc",
    name: "Wesmarc",
    tagline: "Crafted Entrances That Last",
    description: "Wesmarc doors combine strength, durability, and elegant design to create lasting impressions. Built with precision, they enhance both the security and style of modern spaces.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/d1dc9a1b-04c2-4ce3-91ae-d48a25dace21.png",
     "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/7ac228e4-e909-49d9-b2f8-13411c0c4429.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/df6ab743-2a74-4387-9ce5-9a6653532a2d.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/0ff894b8-0a25-49b8-9d73-4c61fa5ec0f5.png",
     "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/c74837e1-f662-403a-823b-c57bec179f52.png",
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
