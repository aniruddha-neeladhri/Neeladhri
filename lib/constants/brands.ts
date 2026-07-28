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
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/480d55e8-e1ba-4ba2-9029-8af875f2b8d1.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/3c257593-a0f4-44d0-b4b9-85f29a8b3fa1.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/3799d6dc-e34c-45c7-81ce-c1bb0030dd5c.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/72199a5d-1be9-4089-9297-f5110b90e262.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/201e9e03-9ac6-4781-a8ab-fa7f69899b36.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/49e474c3-3dd2-47e4-a72e-138dd0d68bfb.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/59bcd6a9-dcaf-46af-9236-9b33ce91076b.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/c5fe70f3-37a4-48c9-87b2-2e9fa152f854.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/564f553e-1302-4261-a523-63ec27bbcfa8.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/9a945e83-8987-4bd3-8f9c-f818806fc186.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/24fdd431-18b4-4dd9-8bc0-6ba968261bed.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/28e36a8f-344c-48a3-91c9-e66bd9155b18.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/94f43ef2-7ae9-4cb0-87e1-1e389479b133.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/985726a1-ae7c-4668-8da1-261959c23683.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/1ed6b68c-f8eb-43b7-b26d-6e7fd2557aa3.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/78baba02-a0a3-4aa6-ae37-42ad7493e545.png",
] as const;

// =====================
// LUXURY (Brands)
// =====================

/** Luxury brand images – same paths as premium until you swap assets */
export const BRAND_IMAGES_LUXURY: readonly string[] = [
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/24c64e84-2357-469d-ba53-31586f544a98.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/ed396bb3-60f8-46d4-a07a-7bcd014118f1.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/4d6b9576-c066-496a-b192-b029ee092127.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/bee89a66-a59f-442b-bc0e-632189cdc00c.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/5d3dd330-58e1-4b23-845e-a9780b134d39.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/5a2232e0-7335-45dc-9580-f3a59449bb61.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/561fd4b0-424f-4b47-ada5-78ad4128fb22.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/241d95fd-390e-41df-aede-cf3f53eb26b4.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/02f822bf-d904-4f23-a966-a8d3d4862aec.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/861b7c20-98cf-407e-b1ae-1ec162406719.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/8bb49baa-88d3-4798-a128-af2c722e9bc3.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/af0b5ebd-4a83-402a-af60-2b8616f94aa1.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/f2137444-0f7d-4258-9f27-35681dccd3fe.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/24820326-1754-4c49-9e9b-ba4d52d83a40.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/38740c23-a8b6-4afe-aacd-3c4d10a4a814.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/faab7e4b-4360-44fb-848e-55bf958e6b2c.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/3c2953e1-dddb-46da-9a30-43188474b514.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/84d74dc7-f206-4405-8ae7-c39c3550e265.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/9e02eafa-8ad1-48fd-ba5d-f985d031cf62.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/28e36a8f-344c-48a3-91c9-e66bd9155b18.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/b3fd70ea-c275-4f90-9ada-fad17d509750.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/4453fc64-7c2d-4861-9b77-7644606a5673.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/16deda42-ee93-4682-a8fd-177b4507a6c6.png",
];

export function brandImages(theme: "premium" | "luxury"): readonly string[] {
  return theme === "luxury" ? BRAND_IMAGES_LUXURY : BRAND_IMAGES_PREMIUM;
}

// =====================
// Section Background Image
// =====================
export const BRAND_BG_PREMIUM = "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/a14cc8ba-786b-4845-a33c-cd8e7933dfc0.png";

/** Swap this for the actual luxury background URL when available */
export const BRAND_BG_LUXURY = "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/3a7f3b6b-7c4f-46db-b0cf-7cf763c1d837.png";

export function brandBgImage(theme: "premium" | "luxury"): string {
  return theme === "luxury" ? BRAND_BG_LUXURY : BRAND_BG_PREMIUM;
}

export const BRAND_NAMES_PREMIUM = [
  "AUGA", "Simpolo", "Bellissimo", "Roca", "Hansgrohe",
  "Carysil", "Smack", "IFB", "Häfele", "3M Water Purifiers", "Wesmarc", "Jaguar", "Insinkerator", "Lioli", "Ruff", "Cera", "Huliot",
] as const;

/** Luxury brand names – same as premium until you customize */
export const BRAND_NAMES_LUXURY: readonly string[] = [
  "Bisazza", "Atlas Concorde", "Neotra", "Dekton", "OP Butler",
  "Perrin & Rowe", "House of Rohl", "Treemme", "Galassia", "Victoria + Albert",
  "Décor Walther", "Sunshower", "Armadi Art", "Tab", "Specta",
  "Miraak", "Crava", "Viaan", "Water Purifiers", "Insinkerator", "Inda", "Jee o", "Alpi",
];

export function brandNames(theme: "premium" | "luxury"): readonly string[] {
  return theme === "luxury" ? BRAND_NAMES_LUXURY : BRAND_NAMES_PREMIUM;
}

export const BRAND_ROUTES_PREMIUM = [
  "/brands/auga", "/brands/simpolo", "/brands/bellissimo", "/brands/roca",
  "/brands/hansgrohe", "/brands/carysil", "/brands/smack", "/brands/ifb",
  "/brands/hafele", "/brands/3m-water-purifiers", "/brands/wesmarc", "/brands/jaguar", "/brands/insinkerator", "/brands/lioli", "/brands/roff",
  "/brands/cera", "/brands/huliot",
] as const;

/** Luxury brand routes – same as premium until you customize */
export const BRAND_ROUTES_LUXURY: readonly string[] = [
  "/brands/bisazza", "/brands/atlas-concorde", "/brands/neotra", "/brands/dekton",
  "/brands/op-butler", "/brands/perrin-rowe", "/brands/house-of-rohl", "/brands/treemme",
  "/brands/galassia", "/brands/victoria-albert", "/brands/decor-walther", "/brands/sunshower",
  "/brands/armadi-art", "/brands/tab", "/brands/specta", "/brands/miraak",
  "/brands/crava", "/brands/viaan", "/brands/water-purifiers", "/brands/insinkerator", "/brands/inda", "/brands/jee-o", "/brands/alpi",
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
  "jaguar": {
    id: "jaguar",
    name: "Jaguar",
    tagline: "Elevating Everyday Bathrooms",
    description: "Jaguar offers complete bathroom solutions that combine contemporary design with reliable performance. Designed for everyday comfort and seamless functionality, it creates spaces that are both elegant and enduring.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/24f75fd7-c7d6-45a0-b811-9f05fef6c3bd.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/52a41da3-fe6d-4225-8032-46da8f28d03f.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/54f76f06-0bb8-4e9f-bdcf-3c87d4fb71de.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/5ba8831a-6c9f-46e9-b4cf-09cc352bdbae.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/c3c68ef7-bf69-4938-8b4f-04b4a32e9733.png",
    ],
  },
  "insinkerator": {
    id: "insinkerator",
    name: "Insinkerator",
    tagline: "Smarter Kitchen Innovation",
    description: "Insinkerator delivers advanced food waste disposal solutions that enhance kitchen efficiency and hygiene. Designed for effortless performance, it keeps kitchens cleaner, quieter, and more convenient every day.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/ca79a88e-3d5b-4aaa-9774-469ea11a496b.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/ff31734e-cbd6-476b-85c5-a4f08e9ecac3.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/9ff00326-4acf-449f-aa85-66543bbaeb58.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/3bd7921b-99b2-49b2-9d9a-3b3f25e7183a.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/670467d5-806f-48d1-8851-95552b35b1d9.png",
    ],
  },
  "lioli": {
    id: "lioli",
    name: "Lioli",
    tagline: "Luxury Large-Format Surfaces",
    description: "Premium large-format porcelain slabs that combine elegance, durability, and cutting-edge design. Perfect for floors, walls, countertops, and modern architectural spaces.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/cd147ceb-b954-4548-8077-5a9df7a05bac.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/fb47a4a5-6a3e-4770-b4d5-80310a73c2cd.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/9f57ef79-7a07-462a-a4d3-6daeb93f5875.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/f4786929-62ed-4bcd-8dde-73bfd554b65c.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/eb7f08c6-6576-4ab6-a437-70a203ee5d12.png",
    ],
  },
  "roff": {
    id: "roff",
    name: "Roff",
    tagline: "Advanced Tile & Stone Solutions",
    description: "High-performance adhesives, grouts, waterproofing, and construction chemicals designed to ensure long-lasting tile installations and superior protection.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/549d577f-e9cd-464d-8e48-4b8008171ea5.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/f827b75f-2b61-439f-b19e-a1b248b8a652.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/aff59195-0c3b-4753-b6e8-3f2fe6d3ef80.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/078bb387-fa97-4161-ba46-65d24a7d6061.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/d60b1284-501a-48b6-a56b-651dd2e6ee18.png",
    ],
  },
  "cera": {
    id: "cera",
    name: "Cera",
    tagline: "Premium Bath & Kitchen Solutions",
    description: "Discover stylish sanitaryware, faucets, wash basins, kitchen sinks, and wellness products that blend innovative technology with contemporary design.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/efa75453-c474-48a7-b73b-1460ead63719.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/875269d7-303d-453d-a234-ad4038c17e90.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/2d0d8f13-607d-4e76-9f8b-6579e7fb50c7.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/ff3e751e-b68b-4290-b99c-5e353bd1cf77.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/e75457bc-4921-4264-9abc-7e739ddc616f.png",
    ],
  },
  "huliot": {
    id: "huliot",
    name: "Huliot",
    tagline: "Smart Plumbing Solutions",
    description: "Reliable piping systems and drainage solutions engineered for efficient water management, durability, and long-term performance in residential and commercial projects.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/18146022-f934-49ae-a41d-1e8dd996229c.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/0ddac510-2b37-4bbc-a1cb-c821aff43dfd.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/4333c05a-f5b1-4846-b06c-7e97b63184ff.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/68bf1ab3-d685-4890-bce5-0effe159a318.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/8e2b2bd4-937e-4088-bd0d-8a9284c16c42.png",
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
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/06f52cdc-381e-46d9-a186-c6f46d08f8ff.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/4774681c-d624-4443-8bfd-ce77401bef0b.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/44be601c-d855-467f-a1a9-7599e219d2bf.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/12435fba-c3f9-48ba-8e93-184dfdb5f273.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/7bc145e7-1d92-40cd-9d37-793882ba09ab.png",
    ],
  },
  atlasConcorde: {
    id: "atlas-concorde",
    name: "Atlas Concorde",
    tagline: "Italian Surfaces, Timeless Design",
    description: "Atlas Concorde offers premium ceramic and porcelain surfaces inspired by natural materials. Designed in Italy, each collection reflects elegance, durability, and contemporary sophistication.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/21c78547-152c-48fc-a24c-e92dc70c7847.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/161a63af-592d-4019-b383-87743ed72fe7.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/f96af0b8-24fa-401b-af03-75dc65b61d99.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/98b3ef32-b74c-45b9-ad46-9d412b13b9c1.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/d0838a1c-4238-48f6-a5dd-585d3c0cff24.png",
    ],
  },
  neotra: {
    id: "neotra",
    name: "Neotra",
    tagline: "Minimalism, Perfected",
    description: "Neotra delivers clean, modern surface solutions that prioritize simplicity and balance. Its understated aesthetic creates calm, refined spaces with lasting visual impact.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/e5868908-010c-4470-a948-b6c7b5b741c2.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/cb42dfd3-84e9-4b69-8628-2c8cf84a6aa9.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/0526642a-ea9c-45f2-a31f-3c609285b82b.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/bea0db24-a928-4237-b101-fc2508c5a0e4.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/07efb2bb-5735-47b7-9a78-49d4f6e3323f.png",
    ],
  },
  dekton: {
    id: "dekton",
    name: "Dekton",
    tagline: "Engineered for Extraordinary Living",
    description: "Dekton is an ultra-compact surface designed for high performance and striking aesthetics. Resistant, versatile, and visually bold, it defines luxury through innovation.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/c03fdd97-4b63-43d2-b77a-25143cb8830d.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/36a175b2-0d83-4501-bf4a-aa24d5e6c94a.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/08bbbe4c-e181-4a08-828f-ba291a4a29aa.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/2f795982-8479-4310-87a8-e29cc5c2a4a2.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/5b1faa19-1bf1-4655-b102-da433736abb6.png",
    ],
  },
  opButler: {
    id: "op-butler",
    name: "OP Butler",
    tagline: "Refined Dining, Redefined",
    description: "OP Butler curates elegant solutions that elevate dining experiences. With a focus on detail and presentation, it blends functionality with understated luxury.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/781594f9-e1d3-4385-ac22-2365a120ee88.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/2062f9f4-d4bd-4d00-8f8b-9b3cbe30af73.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/491c83dd-80b7-40e8-95ea-cb17a418a24f.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/66d6526a-6577-42d0-8289-51433c7ffe59.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/73bdc593-5de8-4331-8738-60118fe5cccc.png",
    ],
  },
  perrinRowe: {
    id: "perrin-rowe",
    name: "Perrin & Rowe",
    tagline: "British Craftsmanship, Timeless Luxury",
    description: "Handcrafted in the UK, Perrin & Rowe fittings combine traditional techniques with refined design. Every detail reflects precision, heritage, and enduring elegance.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/2236cd98-1ac9-423c-a04c-f3919b26ccf0.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/5d42844e-b9b9-48c3-ab5f-55de0644f897.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/d898e1e4-6082-49cb-be56-74b30fa2bd39.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/5f2997d3-4fe3-44d9-91ee-cbdbf56119ff.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/d9f6d8bf-766c-475f-93c1-d36af1b4a721.png",
    ],
  },
  houseOfRohl: {
    id: "house-of-rohl",
    name: "House of Rohl",
    tagline: "A Collective of Iconic Luxury",
    description: "Smack provides reliable kitchen appliances designed to simplify daily cooking. Combining functionality with modern design, it supports a smooth and efficient kitchen experience.House of Rohl brings together globally renowned brands to create exceptional bathroom experiences. Rooted in craftsmanship, it represents the pinnacle of curated luxury.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/b57080c9-2b8f-4a88-8ae8-094b8d376e21.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/f9c62ee7-bb6a-44bd-964d-d9fc6193fe86.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/083e3765-38b8-4819-8492-c6a42bf2d047.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/3608e3b3-4e95-46c9-a36f-72e9056bdec0.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/8e153349-6f5a-4c4c-bc00-8e54258006a9.png",
    ],
  },
  treemme: {
    id: "treemme",
    name: "Treemme",
    tagline: "Contemporary Italian Innovation",
    description: "Treemme reimagines bathroom fittings through bold design and advanced engineering. Clean lines and modern aesthetics define its distinctive identity.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/efd7810d-d26d-489b-b52a-0799c0aa3129.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/bbc72051-f1ae-4896-b85c-9f0ffaf06d1c.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/1d5c7a75-0e07-498f-bdfa-3164ee0500f2.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/74730a50-5c7b-4651-90a2-c5973a0c2d39.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/19b76992-5972-460f-a3ef-20c72a598af0.png",
    ],
  },
  galassia: {
    id: "galassia",
    name: "Galassia",
    tagline: "Ceramic Design with Character",
    description: "Galassia combines Italian craftsmanship with expressive design to create unique sanitaryware. Its collections bring personality and elegance into modern bathrooms.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/0d7ff29b-1218-4e23-8f35-c97d0130d4dd.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/5f952204-e1b1-475b-828d-5c6ca4583813.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/04fdb750-80d0-41c2-b27b-9c85a87a99b2.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/ab57d5dd-fc8f-4c41-ab3c-040defa52957.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/82e43394-e0d7-49a1-98a0-7f1676438df9.png",
    ],
  },
  victoriaAlbert: {
    id: "victoria-albert",
    name: "Victoria + Albert",
    tagline: "Sculptural Bathing Experiences",
    description: "Victoria + Albert is known for beautifully crafted freestanding baths and basins. Each piece is designed to be both functional and a striking visual centerpiece.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/1ca984cd-9af8-471d-b31d-37248c8a37ac.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/bea4532c-ece1-4f8a-ac64-7c6177a73c42.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/a6ca6e4f-dc18-40a3-a51c-c3cb85f60ac2.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/96889f43-84f0-482c-99f4-535c7311ccd6.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/77d8d8c5-790e-48e4-80f9-21755a7e1e1b.png",
    ],
  },
  decorWalther: {
    id: "decor-walther",
    name: "Décor Walther",
    tagline: "Accessories, Perfected",
    description: "Décor Walther elevates bathroom accessories through precision and minimal design. Every detail is refined to complement luxury spaces effortlessly.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/d1c706bc-3106-4d60-a347-fa41d3b83b38.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/ceb180f7-a5c9-4dd6-9a93-45af27e40a9b.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/138c6641-c4f3-4a5a-a37d-7f91e7d8752e.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/e9f08195-8eae-4140-95a7-281b9cef5236.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/fc12ee65-a9f9-4980-8f33-fd5144e640be.png",
    ],
  },
  sunshower: {
    id: "sunshower",
    name: "Sunshower",
    tagline: "Wellness Meets Innovation",
    description: "Sunshower integrates light therapy into bathroom spaces, creating a unique wellness experience. It combines technology and design for a new level of comfort.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/5a3d5818-5b1f-45d6-be3f-094f9753ed59.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/d8106dae-a82c-4e52-b0b7-c2e6d2ca9026.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/c992cb99-e9ac-4ab6-a78a-e448557acb44.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/ce937390-4e5e-4736-80d1-caa907023968.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/a0bc9dee-0d3d-43ef-b0b7-8f4f606c4272.png",
    ],
  },
  armadiArt: {
    id: "armadi-art",
    name: "Armadi Art",
    tagline: "Italian Vanity, Reimagined",
    description: "Armadi Art offers contemporary bathroom furniture with a focus on elegance and functionality. Designed in Italy, it brings modern sophistication to everyday spaces.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/26f8fe52-2511-44ab-af43-b6d7b7ee3fac.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/4555fad8-d194-4271-9734-920bc1d6ba8b.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/f65dcea6-1b46-4e1f-8579-85884cdb17fa.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/bd5dd90b-8ac5-4f72-af0b-313232ed1b2b.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/dc4739ee-6523-407c-aadc-8706888a79ae.png",
    ],
  },
  tab: {
    id: "tab",
    name: "Tab",
    tagline: "Precision in Kitchen Design",
    description: "Tab delivers refined kitchen solutions that balance performance and aesthetics. Designed for modern lifestyles, it emphasizes efficiency with a premium finish.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/39cc36bd-63f7-45b6-8011-2b72e23e5b2c.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/8ecd34bd-b468-4dd4-b71e-b24a745956d0.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/038c5210-4bbb-49eb-8e23-df01a0231d97.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/466b3eb8-9095-442e-857d-634883b894a3.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/0a3dc8cf-c1d7-4ce2-83cf-ab64c44e9471.png",
    ],
  },
  specta: {
    id: "specta",
    name: "Specta",
    tagline: "Surfaces that Define Kitchens",
    description: "Specta offers high-quality engineered surfaces crafted for durability and visual appeal. Its designs enhance the overall character of contemporary kitchens.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/42ae7ee7-d9f9-424c-9de6-f2e05ef0d209.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/04f82810-3162-4faa-8768-e9f5ad9c9446.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/6aafa0aa-c75b-4867-b32d-b17701f2ea5a.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/a840aacb-dfdd-43c2-bdd6-218fa168f7be.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/3a2a8cec-e36c-43c4-a928-958ba7d62095.png",
    ],
  },
  miraak: {
    id: "miraak",
    name: "Miraak",
    tagline: "Modern Kitchens, Elevated",
    description: "Miraak focuses on sleek, design-forward kitchen solutions that combine functionality with refined aesthetics. Built for seamless integration into luxury homes.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/31aa18d4-37f4-4b13-aa8a-cb7e49c3f9fc.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/74254ef3-b692-445d-9694-20d969cbf1d9.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/c52b5016-9cf9-4b93-a8e0-41d25ff18a12.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/64f0750d-a60c-4433-b8e6-9ac772c3e9bc.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/b2ed7b70-522f-4adc-97bf-6eafe3331bb6.png",
    ],
  },
  crava: {
    id: "crava",
    name: "Crava",
    tagline: "Designed for Everyday Elegance",
    description: "Crava brings together thoughtful design and practical innovation to create kitchens that feel both stylish and efficient.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/2bb9ff4f-782f-4ecf-aa29-55261a1fbe56.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/714db3e0-d4e3-4ca6-a2e7-0e9a9a0dd826.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/8691cf06-c1df-4fd8-9c98-f2e3dd01a0e3.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/d0e7e85e-11b3-4ae2-a8b7-62afe799b58b.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/d91ab865-a681-4cf4-acfc-58a77af306a8.png",
    ],
  },
  viaan: {
    id: "viaan",
    name: "Viaan",
    tagline: "Health-Focused Hydration",
    description: "Viaan offers advanced alkaline water solutions designed to support a healthier lifestyle. Clean design meets functional innovation.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/5343ef03-7781-4839-8ba7-c05f941649a3.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/d2f475c1-8ea1-4fcc-95c2-c2394fe0feae.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/23218f52-5ac5-4403-a191-e81f48e6a50a.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/6ed05950-1909-4575-9e2d-39d5b02ca37a.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/0aaa2b91-91c5-45cd-89a0-44680c789002.png",
    ],
  },
  waterPurifiers: {
    id: "water-purifiers",
    name: "3M – Water Purifiers",
    tagline: "Health-Focused HydrationAdvanced Filtration You Can Trust",
    description: "3M delivers reliable water purification systems built on proven technology. Designed for safety, purity, and everyday confidence.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/75c0bb51-aac0-4d0b-b9aa-cbfc8059f799.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/96faa594-0925-4959-b5ee-f5c9824ef108.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/169c65bf-d2a3-4eb3-a5fb-c03f856c2337.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/c5a68f78-cfc7-4c2d-bb22-ce6828ff9a1d.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/08f858bd-e054-4ee0-ae6a-6cfe1cbe03df.png",
    ],
  },
  "insinkerator": {
    id: "insinkerator",
    name: "Insinkerator",
    tagline: "Smarter Kitchen Innovation",
    description: "Insinkerator delivers advanced food waste disposal solutions that enhance kitchen efficiency and hygiene. Designed for effortless performance, it keeps kitchens cleaner, quieter, and more convenient every day.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/ca79a88e-3d5b-4aaa-9774-469ea11a496b.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/ff31734e-cbd6-476b-85c5-a4f08e9ecac3.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/9ff00326-4acf-449f-aa85-66543bbaeb58.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/3bd7921b-99b2-49b2-9d9a-3b3f25e7183a.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/670467d5-806f-48d1-8851-95552b35b1d9.png",
    ],
  },
  "inda": {
    id: "inda",
    name: "Inda",
    tagline: "Italian Elegance for Every Bathroom",
    description: "Inda offers premium bathroom accessories that combine Italian craftsmanship with timeless elegance. Designed for modern interiors, each collection enhances functionality while creating refined and sophisticated spaces.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/7a413334-f48c-4ac7-86f7-7b8594ad7b59.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/82694972-6dba-4146-8896-75a693697a86.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/52e67e56-8d44-43b8-bfb0-a4b1d8238d7d.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/ceefd525-7e83-45e8-a84e-7c58acec00a6.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/500c02f2-bcf0-4c51-ac90-caff1a82e8cd.png",
    ],
  },
  "jee-o": {
    id: "jee-o",
    name: "Jee O",
    tagline: "Where Nature Meets Luxury",
    description: "Jee-o creates luxury bathroom collections inspired by nature and contemporary architecture. Designed with exceptional craftsmanship, every piece delivers timeless elegance, comfort, and a distinctive wellness experience.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/121ce31e-9292-484a-b5f3-f0720ec5f089.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/c228884d-d070-40dd-9d15-80827ba6b469.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/aa179124-2ff9-45e8-b38e-207f5b1e2269.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/56de21ef-8808-4a2b-933f-c11297fc0562.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/f63fcdb0-3360-43bd-808e-1d90881534ea.png",
    ],
  },
  "alpi": {
    id: "alpi",
    name: "Alpi",
    tagline: "Designer Bathroom & Kitchen Fixtures",
    description: "Elegant faucets, shower systems, and accessories crafted with precision to deliver exceptional performance, timeless aesthetics, and everyday comfort.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/fec861df-92d0-44c0-8d9d-cb267382e83a.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/3e827773-d833-4e11-99a7-f5877d9a5405.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/ac2eb8db-84b1-4b9d-9cff-a68601b9985f.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/c6400d1b-62de-498d-89c8-e7e688410723.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/defdd6fd-736b-4938-9977-c044aacbe44c.png",
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