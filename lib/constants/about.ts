/** Headline accent (e.g. “luxury.”) */
export const ABOUT_LUXURY_ACCENT = "#D3B898";

/** Caption, CTA border & label */
export const ABOUT_LUXURY_GOLD = "#D8B691";

export const ABOUT_LUXURY_STORY = {
  caption: "Our Story",
  title: "Design is where science and art break even",
  description:
    "With over a decade of expertise, Neeladhri Ceramics delivers premium architectural surfaces and interior solutions. We blend refined design with high-performance durability to create elegant, modern living spaces that last.",
  image:  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/about/ee20febe-2931-41e9-9fe4-25fb1df9513c.png",
  captionColor: ABOUT_LUXURY_GOLD,
  textColor: "#FFFFFF",
};

export const ABOUT_LUXURY_STATS = [
  { value: 22, suffix: "+", label: "Years Of Experience" },
  { value: 10000, suffix: "+", label: "Projects Supported" },
  { value: 97.6, suffix: "%", label: "Satisfied Customers" },
  { value: 50, suffix: "+", label: "Luxury Brands" },
] as const;

export const ABOUT_LUXURY_COMMITMENTS = [
  {
    icon: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/about/ec94b973-dc4e-4b42-a393-8e5e8caad700.png",
    title: "Versatile Tiles",
    description:
      "Delivering reliable quality and exceptional value in every offering.",
  },
  {
    icon:  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/about/ed1e374e-92e1-44e7-be72-fd6d5fe71fd9.png",
    title: "Seamless Experience",
    description:
      "Ensuring a smooth, guided journey from selection to completion.",
  },
  {
    icon:  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/about/843a3d9d-0a85-40f8-8a7a-f21206cf0f83.png",
    title: "Design Forward",
    description: "Staying aligned with modern trends and evolving innovations.",
  },
  {
    icon:"https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/about/463bf0c0-5b7e-4820-9dbf-713ba2617a72.png",
    title: "Built on Trust",
    description:
      "Creating lasting relationships through dependable service and care.",
  },
] as const;

/** Last luxury CTA section — button border */
export const ABOUT_LUXURY_CTA_BORDER = "#A98F76";

export const ABOUT_LUXURY_LAST_SECTION = {
  eyebrow: "Visit Our Showroom",
  title: "We Help You Build Spaces That Inspire",
  cta: "Get started",
  ctaHref: "/contact",
  image:"https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/about/2a01207e-12f8-4d75-a516-5c5874ae711b.png",
  borderColor: ABOUT_LUXURY_CTA_BORDER,
};

export const ABOUT_LUXURY_HERO = {
  tagline: "CRAFTED FOR ETERNITY",
  title: "Surfaces that define",
  titleAccent: "luxury.",
  description:
    "Exquisite tiles, bathroom fittings and sanitaryware, crafted to elevate every space.",
  cta: "EXPLORE COLLECTION",
  ctaHref: "/collection",
  image: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/about/8ef78423-f9b3-4996-95b9-9933b7a70d2f.png",
  accent: ABOUT_LUXURY_ACCENT,
  gold: ABOUT_LUXURY_GOLD,
};

export type AboutContent = {
  heading: string;
  title: string;
  paragraphs: string[];
  titleAccent?: string;
  paragraphsAccent?: string[];
  image: string;
  textColor: string;
};

export const ABOUT_CONTENT: Record<string, AboutContent> = {
  premium: {
    heading: "About Us",
    title: "Building Beautiful Spaces Since 2004",
    paragraphs: [
      "For over 22 years, Neeladhri Ceramics has been helping homeowners, architects, interior designers, and builders create spaces that are timeless, functional, and beautifully designed. Founded by Mr. Badrinath C. R., the company was built on a simple philosophy—offer quality products, honest guidance, and exceptional service. Today, under the leadership of Mr. Aniruddha Setty, Neeladhri Ceramics continues to evolve by combining this legacy of trust with innovation, technical expertise, and a carefully curated selection of luxury bath fittings, sanitaryware, tiles, and wellness solutions that bring together performance, aesthetics, and everyday comfort.",
    ],
    titleAccent: "What We Stand For",
    paragraphsAccent: [
      "At Neeladhri Ceramics, we believe every space deserves thoughtful design and uncompromising quality. Our modern showroom showcases an extensive collection from some of the world's leading brands, giving customers the opportunity to experience products firsthand and make informed choices. From expert consultation to personalized service, we are committed to delivering solutions that are innovative, functional, and crafted to elevate every home and commercial space.",
    ],
    image: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/db31a08b-89a9-4dd0-8125-d0b88bb3436a.png",
    textColor: "#555555",
  },
  luxury: {
    heading: "About Us",
    title: "We Create Spaces, \n That Define Modern Living",
    paragraphs: [
      "Neeladhri Ceramics blends quality, design, and functionality to create modern living spaces. With 10+ years of expertise, we deliver curated solutions that combine elegance, performance, and lasting value.",
      "Neeladhri Ceramics is a trusted name in home interiors and architectural surface solutions, offering a seamless blend of quality, functionality, and aesthetic excellence backed by over a decade of experience.",
      "We curate products that enhance both the visual appeal and durability of spaces, delivering solutions that combine practicality with refined design.",
    ],
    image: "/About/aboutluxury.png",
    textColor: "#FFFFFF",
  },
};

export const COMMITMENTS_DATA = {
  premium: [
    {
      icon:  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/about/37fe4a4a-1b33-426c-a326-eff017291106.png",
      title: "Versatile Tiles",
      description: "Delivering reliable quality and exceptional value in every offering.",
    },
    {
      icon:"https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/about/2a4af6fe-2bcd-4185-902c-e728adfce934.png",
      title: "Seamless Experience",
      description: "Ensuring a smooth, guided journey from selection to completion.",
    },
    {
      icon: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/about/b3198d5b-3db1-4868-9c54-45b10ba6dd27.png",
      title: "Design Forward",
      description: "Staying aligned with modern trends and evolving innovations.",
    },
    {
      icon: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/about/eda2754a-ad2d-4622-933b-dab56d17ecab.png",
      title: "Built on Trust",
      description: "Creating lasting relationships through dependable service and care.",
    },
  ],
  luxury: [
    {
      icon: "/About/qualityluxury.png",
      title: "Versatile Tiles",
      description: "Delivering reliable quality and exceptional value in every offering.",
    },
    {
      icon: "/About/reviewluxury.png",
      title: "Seamless Experience",
      description: "Ensuring a smooth, guided journey from selection to completion.",
    },
    {
      icon: "/About/forwardluxury.png",
      title: "Design Forward",
      description: "Staying aligned with modern trends and evolving innovations.",
    },
    {
      icon: "/About/trustluxury.png",
      title: "Built on Trust",
      description: "Creating lasting relationships through dependable service and care.",
    },
  ],
};
