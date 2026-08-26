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
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/c5fe70f3-37a4-48c9-87b2-2e9fa152f854.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/564f553e-1302-4261-a523-63ec27bbcfa8.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/9a945e83-8987-4bd3-8f9c-f818806fc186.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/24fdd431-18b4-4dd9-8bc0-6ba968261bed.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/28e36a8f-344c-48a3-91c9-e66bd9155b18.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/94f43ef2-7ae9-4cb0-87e1-1e389479b133.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/985726a1-ae7c-4668-8da1-261959c23683.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/1ed6b68c-f8eb-43b7-b26d-6e7fd2557aa3.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/78baba02-a0a3-4aa6-ae37-42ad7493e545.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/38740c23-a8b6-4afe-aacd-3c4d10a4a814.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/faab7e4b-4360-44fb-848e-55bf958e6b2c.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/3c2953e1-dddb-46da-9a30-43188474b514.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/901d24c8-63d1-45e0-8c8a-633ac7a81cfa.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/551d7a97-9e2d-4249-96da-7b8ccf737f1b.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/3063830d-42d4-4fda-ac8e-19ef0268dbfa.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/2f631ba5-a9e6-4f1b-a205-08e5b0e85d31.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/52620cd3-9823-453f-abaf-10408221d2af.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/a98345ee-807b-44a7-8ff9-beecf8435dc8.png",

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
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/0f270083-4077-4724-b323-fd7b5156137e.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/9e02eafa-8ad1-48fd-ba5d-f985d031cf62.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/28e36a8f-344c-48a3-91c9-e66bd9155b18.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/b3fd70ea-c275-4f90-9ada-fad17d509750.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/4453fc64-7c2d-4861-9b77-7644606a5673.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/16deda42-ee93-4682-a8fd-177b4507a6c6.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/bdf60290-48c4-4dec-9a03-ec1eb9ab7aa4.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/28f6bcf9-3f5d-43f0-86ca-15e09bc2bc50.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/e21ec08f-09d6-429f-b25c-fb7a33384057.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/3262140c-98ac-45ef-a86a-0cb980b35f88.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/9b4ac292-a5b9-45ba-8a84-0b6bd83aa0f2.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/8d2faeb3-6ef9-434c-a1fd-d2ea0a93c8d5.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/2482005b-e5b5-4b62-b1b4-e1fcd644e489.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/702faad5-b035-40b3-84bf-c8c991e272ac.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/e4c199f3-15b4-49b3-bdba-a1a510a765d2.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/710061cd-46bd-4752-9eaa-0f6bf9999399.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/9a945e83-8987-4bd3-8f9c-f818806fc186.png",
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
  "Carysil", "Smack", "Häfele", "3M Water Purifiers", "Wesmarc", "Jaquar", "Insinkerator", "Lioli", "Roff", "Cera", "Huliot", "Specta",
  "Miraak", "Crava", "Filcoten", "Lunos", "Trebema", "Provent Systems", "Geberit", "Pare",
] as const;

/** Luxury brand names – same as premium until you customize */
export const BRAND_NAMES_LUXURY: readonly string[] = [
  "Bisazza", "Atlas Concorde", "Neotra", "Dekton", "OP Butler",
  "Perrin & Rowe", "House of Rohl", "Treemme", "Galassia", "Victoria + Albert",
  "Décor Walther", "Sunshower", "Armadi Art", "TAB",
  "Viaan", "Water Purifiers", "Insinkerator", "Inda", "Jee o", "Alpi", "Blanco", "Ego", "Perk", "Kalingastone", "Ceramic Fashion Studio", "Varmora",
  "Weber", "Oyster", "Motto", "AO Smith", "Wesmarc",
];

export function brandNames(theme: "premium" | "luxury"): readonly string[] {
  return theme === "luxury" ? BRAND_NAMES_LUXURY : BRAND_NAMES_PREMIUM;
}

export const BRAND_ROUTES_PREMIUM = [
  "/brands/auga", "/brands/simpolo", "/brands/bellissimo", "/brands/roca",
  "/brands/hansgrohe", "/brands/carysil", "/brands/smack",
  "/brands/hafele", "/brands/3m-water-purifiers", "/brands/wesmarc", "/brands/jaquar", "/brands/insinkerator", "/brands/lioli", "/brands/roff",
  "/brands/cera", "/brands/huliot", "/brands/specta", "/brands/miraak",
  "/brands/crava", "/brands/filcoten", "/brands/lunos", "/brands/trebema", "/brands/provent-systems", "/brands/geberit", "/brands/pare",
] as const;

/** Luxury brand routes – same as premium until you customize */
export const BRAND_ROUTES_LUXURY: readonly string[] = [
  "/brands/bisazza", "/brands/atlas-concorde", "/brands/neotra", "/brands/dekton",
  "/brands/op-butler", "/brands/perrin-rowe", "/brands/house-of-rohl", "/brands/treemme",
  "/brands/galassia", "/brands/victoria-albert", "/brands/decor-walther", "/brands/sunshower",
  "/brands/armadi-art", "/brands/tab", "/brands/viaan", "/brands/water-purifiers", "/brands/insinkerator", "/brands/inda", "/brands/jee-o", "/brands/alpi",
  "/brands/blanco", "/brands/ego", "/brands/perk", "/brands/kalingastone", "/brands/ceramicfashion", "/brands/varmora",
  "/brands/weber", "/brands/oyster", "/brands/motto", "/brands/ao-smith", "/brands/wesmarc",
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
    description:
      "Auga is a home and bathroom solutions brand focused on combining contemporary design with everyday functionality. Its range is designed to bring a refined, modern look to residential spaces, with products that balance aesthetics, practicality, and ease of use. Auga is suited for customers looking for stylish solutions that complement modern interiors while maintaining quality and functionality.",
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
    description:
      "Simpolo Tiles & Bathware is an Indian brand offering a comprehensive range of premium tiles and bathware solutions. Established in 1977, the brand combines innovative manufacturing technology with contemporary design to create durable and stylish surfaces for residential and commercial spaces. Its portfolio includes vitrified tiles, large-format slabs, outdoor tiles, sanitaryware, basins, and other bathware solutions, making it a versatile choice for modern interiors.",
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
    tagline: "Italian Craftsmanship in Tiles & Surfaces",
    description:
      "Bellissimo is a premium Italian tiles and surfaces brand that combines Italian craftsmanship with advanced ceramic technology. Its collections include sophisticated marble, stone, wood, and contemporary surfaces, along with large format porcelain slabs designed for high-end architectural and interior applications.",
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
    description:
      "Roca delivers sophisticated bathroom solutions inspired by modern European design, offering premium sanitaryware and bath fittings that combine refined aesthetics, quality craftsmanship, and everyday functionality.",
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
    description:
      "Hansgrohe is a premium bathroom and kitchen solutions brand known for combining innovative technology, elegant design, and exceptional functionality. Its range includes faucets, mixers, showers, shower systems, thermostatic mixers, kitchen fittings, sinks, bathroom accessories, and more. With a strong focus on water efficiency, comfort, and design, Hansgrohe creates products that turn everyday bathroom and kitchen routines into refined experiences.",
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
    description: "Carysil specializes in high quality kitchen sinks and solutions built for daily performance. With durable materials and sleek designs, it enhances both efficiency and style in contemporary kitchens.",
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
    description:
      "Smack specialises in premium kitchen sinks designed to combine functionality, durability, and contemporary aesthetics. Its range is created for modern kitchens, offering thoughtfully designed sink solutions that are practical, easy to use, and suited to everyday requirements. With a focus on quality, refined finishes, and contemporary styling, Smack sinks are designed to complement a wide range of modern kitchen interiors while delivering dependable performance.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/82df3b80-3074-4140-8b86-180e8202e9f3.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/8aaa172a-3614-4b9a-816b-0511b689d07e.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/3354f41d-0bf7-4825-82dc-d721ef16b94d.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/e07c0250-c590-4acb-9cf3-1d42b72a5d33.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/d97fe085-5505-49ac-be78-3a1ab986e2cd.png",
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
  "jaquar": {
    id: "jaquar",
    name: "Jaquar",
    tagline: "Elevating Everyday Bathrooms",
    description: "Jaquar offers complete bathroom solutions that combine contemporary design with reliable performance. Designed for everyday comfort and seamless functionality, it creates spaces that are both elegant and enduring.",
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
    description:
      "Lioli brings premium large-format porcelain surfaces with sophisticated design, durability, and versatility for modern spaces.",
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
    description:
      "Roff, from the house of Pidilite, is a leading brand in tile and stone fixing solutions, offering technologically advanced products for modern construction and home improvement. Its range includes tile adhesives, epoxy grouts, tile joint fillers, stone-fixing solutions, tile cleaners, and after-care products. Designed for applications ranging from bathrooms and kitchens to living spaces, terraces, and outdoor areas, Roff focuses on strong, durable, and reliable tile and stone installation.",
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
  filcoten: {
    id: "filcoten",
    name: "Filcoten",
    tagline: "Complete Bathroom Solutions",
    description:
      "FILCOTEN by BG Graspointner specialises in high performance drainage systems designed for efficient water management across residential, commercial, landscaping, and infrastructure projects. Its drainage channels are known for their strength, durability, lightweight construction, and sustainable material technology.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/b5292694-a5bf-4a86-824d-2534a2dfc633.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/fbac3612-5446-421a-8985-17bebd7ffc47.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/31b4eab9-867c-4976-b2a2-8fd383310ab7.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/2bd1b32c-7caa-481a-b3af-bf316318c2c8.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/82883ce4-c05a-4a01-b886-9905f4ca8568.png",
    ],
  },
  lunos: {
    id: "lunos",
    name: "Lunos",
    tagline: "Complete Bathroom Solutions",
    description:
      "LUNOS is a specialist ventilation brand offering decentralised ventilation systems for residential and commercial spaces. Its solutions are designed to provide continuous fresh air, improve indoor air quality, and manage moisture while maintaining energy efficiency and comfortable living environments.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/742269f3-31b7-4d92-b698-ca19805fec0e.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/896f9ad5-eef1-4018-8140-e8f30eea6cc7.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/3078e5c6-df09-4193-9b18-af8720913c4c.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/8b4ef7e4-90b8-4b9e-a798-b5a2a1221447.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/b5eb5eea-9928-4b6e-965d-50364a341cf1.png",
    ],
  },
  trebema: {
    id: "trebema",
    name: "Trebema",
    tagline: "Complete Bathroom Solutions",
    description:
      "Trebema Aqua Decalcifiers are electronic lime-dissolving water treatment units. They use an electromagnetic field to split calcium particles. This stops new scale from sticking to pipes and creates trace carbonic acid to slowly dissolve old buildup without altering overall water quality.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/5b10181b-4069-4909-aec8-6d0419f779dc.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/17df479a-7e1a-4428-83e3-5fd9a85e53cf.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/e9bb32fc-5bba-498e-a973-dfdcbe48f251.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/fae2c11a-cd11-4343-9154-c9d5b3971c18.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/0b973a34-b66c-400d-94ca-b99ff7a4a349.png",
    ],
  },
  proventsystems: {
    id: "proventsystems",
    name: "ProVent Systems",
    tagline: "Complete Bathroom Solutions",
    description:
      "ProVent Systems specialises in ventilation and air management solutions designed to improve indoor air circulation and comfort. Its systems are suitable for residential and commercial applications, with an emphasis on efficient airflow,reliable performance, and practical installation.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/2a070dd2-b772-443e-9ecd-5392a5f2ff83.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/2e305584-7fe2-418f-bcf6-fc23da0f6d40.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/50b83634-eae0-460d-87ba-c1073e51085b.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/e0094e50-5cb8-4574-b530-2e896e072dd9.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/6b71adb2-301f-4dc1-9861-fdcf9752440a.png",
    ],
  },
  geberit: {
    id: "geberit",
    name: "Geberit",
    tagline: "Complete Bathroom Solutions",
    description:
      "Geberit is a globally recognised brand specialising in sanitary technology and bathroom solutions. Its portfolio includes concealed cisterns, installation systems, drainage solutions, toilets, and bathroom products, combining engineering expertise, reliability, water efficiency, and contemporary design.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/02d5052b-f698-41bd-a6d9-a3f827210e4b.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/e52ed427-145c-42bf-b9af-6de91abb678d.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/cfbd052c-9115-4986-bbfb-e661fad8c00c.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/a1f47132-e250-4f27-ae4d-e65318ce1d9d.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/7ce17628-cb4a-42e4-a4ac-d77e8850f912.png",
    ],
  },
  pare: {
    id: "pare",
    name: "PARE",
    tagline: "Premium Interior & Exterior Surfaces",
    description:
      "PARE offers premium interior and exterior surface solutions designed for contemporary homes and commercial spaces. Its portfolio includes luxury wall panels, SPC and LVT flooring, exterior cladding, and ceiling systems that combine sophisticated design, durability, and functionality. With a presence across 500+ cities and 7,000+ projects, PARE has built a strong reputation for delivering stylish and versatile solutions for modern spaces.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/480b5d10-3409-4a5a-acb8-0e909b3f6da3.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/0c9c2370-55d2-4347-b57c-6396ceb00286.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/1e67af6d-6c2a-4d63-a82d-88ad235136f4.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/0d1ac586-6171-43dc-adaf-0b916e57c5cc.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/a98345ee-807b-44a7-8ff9-beecf8435dc8.png",
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
    description:
      "OP Butler offers premium bathroom and home solutions designed to bring together contemporary aesthetics, functionality, and comfort. Its products are suited to modern interiors where thoughtful design and reliable everyday performance are equally important.",
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
    description:
      "House of Rohl brings together a collection of luxury kitchen and bathroom brands known for craftsmanship, timeless design, and exceptional quality. Its portfolio includes faucets, sinks, showers, bathtubs, and accessories that add character and refined detailing to sophisticated spaces.",
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
    description:
      "Sunshower is an innovative Dutch wellness brand that brings the benefits of sunlight into the everyday shower experience. Its advanced shower systems combine infrared warmth with carefully dosed UV light, creating a relaxing and revitalising wellness experience while supporting natural vitamin D production. Designed to blend seamlessly into modern bathrooms, Sunshower offers built in, surface mounted, and corner mounted solutions that combine technology, wellbeing, and contemporary design.",
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
    description:
      "Armadi Art specialises in Italian designed bathroom furniture that combines craftsmanship, functionality, and contemporary aesthetics. Its collections offer a wide range of styles, colours, finishes, and configurations, allowing bathroom spaces to be customised to individual tastes and interiors.",
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
    name: "TAB",
    tagline: "Precision in Kitchen Design",
    description:
      "TABQUARTZ is a premium engineered quartz surface by TAB, combining high density with advanced Luster Technology for a refined, high gloss finish. Designed for interior applications such as kitchen countertops, bathroom vanities, and wall surfaces, TABQUARTZ offers durable, low maintenance surfaces in a wide range of colours and designs.",
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
    description: "Specta offers high quality engineered surfaces crafted for durability and visual appeal. Its designs enhance the overall character of contemporary kitchens.",
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
    description:
      "Miraak is a premium quartz surfaces brand backed by over 35 years of experience in the stone industry. Its engineered quartz surfaces combine innovative design, meticulous craftsmanship, and durability, offering a versatile range of colours, patterns, and finishes for kitchens, bathrooms, offices, restaurants, and other interior spaces.",
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
    description:
      "Crava is a stone brand offering an extensive selection of natural and engineered surfaces, including exclusive quartz slabs for kitchen countertops. Its quartz collection features carefully selected designs developed with international trends in mind, offering colour consistency, easy maintenance, and resistance to scratches and stains for kitchens, bathrooms, and other spaces.",
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
    tagline: "Water for Health & Wellness",
    description:
      "ViaanWaterScience Pvt Ltd is dedicated to promoting holistic wellbeing by introducing an innovative solution that aims to revolutionize our perspective and usage of water for health and wellness. Today's modern lifestyle focuses on symptom relief rather than addressing the root causes of ailments, leading to a significant gap between effective treatment and sustainable wellness.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/9c2b02a0-9720-46c3-9ebd-745ce7cfdac0.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/bbc14078-1a4a-46e7-bdbd-b49daa96f4fd.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/e0c190d4-38e0-4dd9-b96a-bbd071ce7277.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/0f270083-4077-4724-b323-fd7b5156137e.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/c6046e97-924a-4f03-b9e1-bd2ec420ffd5.png",
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
  blanco: {
    id: "blanco",
    name: "Blanco",
    tagline: "Artistry in Every Surface",
    description: "BLANCO is a premium kitchen brand specialising in high quality kitchen sinks and faucets that combine elegant design with everyday functionality. Its range features thoughtfully engineered sinks and beautifully designed faucets, created with a focus on durability, ergonomics, innovation, and seamless integration into modern kitchen spaces.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/ceb1938b-9a46-4a6d-86ee-a23af6436987.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/e24de07b-21ea-49e3-9ad9-6c6c89bd35c1.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/fd3fbcc8-87fe-4395-9883-01ea1ea49cb0.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/f3be8324-c02d-4832-9d5e-a060d5dd1bc2.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/1c4808ed-1d69-41bc-9f72-ea9000b86ade.png",
    ],
  },
  ego: {
    id: "ego",
    name: "Ego",
    tagline: "Artistry in Every Surface",
    description: "EGO is a premier name in the Indian flooring industry, recognised for its quality, innovation, and service excellence.With over 20 years of experience and a strong presence across India, the brand has earned the trust of architects,interior designers, retailers, and end users. EGO offers a curated range of Wooden Flooring, Laminate Flooring, SPC Flooring, Vinyl Flooring, and WPC Deck Flooring, bringing together durability, contemporary design, and dependable performance for modern spaces.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/d0c5f4fb-7e13-4a14-be01-9f7d78d7ca3f.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/ec4ed480-83ba-44d6-babe-f5ad788a2781.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/b870435b-aa01-4271-b3ef-353a8cbfb3dd.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/f3023f6e-4c91-4c0b-b783-ae29a7bd7edb.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/e7b0e68c-d4b0-4c96-84c9-9c497bd051df.png"
    ],
  },
  perk: {
    id: "perk",
    name: "Perk",
    tagline: "Artistry in Every Surface",
    description: "Perk specialises in premium bathroom accessories and hygiene solutions, offering products such as bathroom fittings,accessories, grab bars, dispensers, holders, and storage solutions. Its products combine quality materials,contemporary design, ergonomics, and functionality for residential and commercial spaces.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/65180ebf-7c11-4f0f-881d-4aed57de80ba.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/76fe373b-85e9-4821-91e3-a0da4e3a1704.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/e04091bc-7e62-4a83-ab71-e17f26361237.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/be97d958-9043-4467-b59a-c7c4cde3d88f.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/fe548481-3572-4cce-baab-f12de0e2c911.png",
    ],
  },
  kalingastone: {
    id: "kalingastone",
    name: "Kalingastone",
    tagline: "Artistry in Every Surface",
    description: "Kalingastone specialises in premium quartz surfaces for kitchen countertops and thin porcelain slabs designed for architectural applications such as facades. Its surfaces combine refined aesthetics, durability, and advanced technology, offering versatile solutions for modern residential and commercial spaces.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/ae81f1f3-cbd5-4018-ade5-3ab6bfc561a6.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/4d90fed1-7598-442a-a51d-80c1c68dc788.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/a1a6811f-25e5-4d69-a738-3de281457741.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/06361f53-b40b-4e66-9821-c3a7e422aa69.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/0370c934-ec09-4ded-8f92-75d953a9491d.png",
    ],
  },
  ceramicfashion: {
    id: "ceramicfashion",
    name: "Ceramicfashion",
    tagline: "Artistry in Every Surface",
    description: "Ceramic Fashion Studio specialisesi n decorative ceramic and vitrified tile surfaces, with expertise in third firing technology and surface embellishment. The brand focuses on creating distinctive decorative tiles that bring colour,texture, detail, and character to interior spaces.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/48c07417-699b-4d18-8554-415fe37fd483.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/13429dd3-539f-4c99-8d1b-f45e3aff8bc5.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/f5ce743a-b8b3-4c2d-aa3e-8af9c1e91906.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/3fcddf6d-1665-41d8-9502-8f34c17a9fa7.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/96a4e5ab-3b05-4fc0-a9f3-9b6f1632b269.png",
    ],
  },
  varmora: {
    id: "varmora",
    name: "Varmora",
    tagline: "Artistry in Every Surface",
    description: "Varmoraisan Indian tiles and bathware brand offering a wide range of surfaces and bathroom solutions for contemporary spaces. Its portfolio includes tiles, large format slabs, and bathware, combining modern designs, versatile applications, and durable materials for residential and commercial interiors.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/5f4f93ef-d8c7-48d8-b6c0-7416d183dc02.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/518375c3-d959-40ed-a6fb-5e3fb356b295.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/a333f446-5a3c-49c8-8db2-cf8ec73fe8c5.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/befb1210-8077-43e4-8095-090f83963dcb.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/175f302f-93bc-4251-a547-91e64f3ac58d.png",
    ],
  },
  weber: {
    id: "weber",
    name: "Weber",
    tagline: "Artistry in Every Surface",
    description: "Weber by Saint Gobain specialises in construction and building solutions, including tile fixing, grouts, waterproofing,flooring, and other surface preparation products. Its solutions are developed to deliver reliable installation, durability,and high performance across residential, commercial, and infrastructure projects.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/0c04e4da-5052-42ba-86a6-df6c50d50b02.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/309615a1-9986-4d2f-8934-62d702840f2a.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/5475f5d0-c74a-4f0c-9f0a-fdd4fd67f6eb.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/e1be724a-13d9-4c06-b226-b08eb86faebd.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/48c395b0-10b9-4aeb-9a8f-d85a5b1bb34e.png",
    ],
  },
  oyster: {
    id: "oyster",
    name: "Oyster",
    tagline: "Artistry in Every Surface",
    description: "Oysteris a premium wellness brand focused on creating sophisticated bathroom experiences. Its range combines contemporary design, innovation, quality, and functionality, with products created for homeowners, architects, and designers seeking refined bathroom solutions.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/745df0a2-bbe2-4268-9630-46eab4a3ee8c.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/38165c7b-1dcd-4194-ad5c-cd0130b9e193.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/1174f3ad-1f29-4770-b413-cda624586ac0.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/1ddc803c-15af-4bbe-87d8-8642aa3ec682.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/88ae226c-2733-4a8c-b3b3-a82e222302ff.png",
    ],
  },
  motto: {
    id: "motto",
    name: "Motto",
    tagline: "Artistry in Every Surface",
    description: "Motto isan Indian manufacturer and exporter of ceramic and vitrified tiles, combining modern technology with contemporary design and quality. Its range includes ceramic tiles, digital wall tiles, GVT, PGVT, double charge tiles, and large format surfaces, offering stylish and durable solutions for residential and commercial spaces.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/6d4e0927-50c7-4948-a44c-6e43fac906cf.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/ca3fb94c-e1b2-42d8-b10c-3878c24df174.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/9413dd77-01a3-4417-b839-47ce36166700.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/9451e0be-b9d8-4dae-a6d0-b760a5e06c39.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/69dfa3c6-56be-48b7-af88-26ef69c600e7.png",
    ],
  },
  "ao-smith": {
    id: "ao-smith",
    name: "AO Smith",
    tagline: "Advanced Water Technology",
    description:
      "A. O. Smith is a leading water technology brand offering advanced water heating and water treatment solutions. Its range includes instant, storage, and tankless water heaters along with water purifiers and other water management products, focusing on energy efficiency, performance, safety, and modern technology.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/710061cd-46bd-4752-9eaa-0f6bf9999399.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/205a9903-dd2b-4ae4-ac0b-bd1946193ce2.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/d24132ce-0473-45ba-899a-0c67ec9c8704.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/cbfa0669-13bd-454c-9b74-a9e47b63cacc.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/00c749e8-a421-460e-ac1b-d38d44e6a4b8.png",
    ],
  },
  wesmarc: {
    id: "wesmarc",
    name: "Wesmarc",
    tagline: "Crafted Entrances That Last",
    description:
      "Wesmarc doors combine strength, durability, and elegant design to create lasting impressions. Built with precision, they enhance both the security and style of modern spaces.",
    images: [
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/d1dc9a1b-04c2-4ce3-91ae-d48a25dace21.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/7ac228e4-e909-49d9-b2f8-13411c0c4429.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/df6ab743-2a74-4387-9ce5-9a6653532a2d.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/0ff894b8-0a25-49b8-9d73-4c61fa5ec0f5.png",
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/brands/c74837e1-f662-403a-823b-c57bec179f52.png",
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