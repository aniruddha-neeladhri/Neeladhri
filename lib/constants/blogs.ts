// Blog Section Constants

import bathroomTileIdeas from "./posts/bathroom-tile-ideas-that-elevate-everyday-spaces.json";
import biophilicDesignBasics from "./posts/biophilic-design-basics.json";
import colorPalettesFor2026 from "./posts/color-palettes-for-2026.json";
import creatingAWarmAndElegantDiningAmbience from "./posts/creating-a-warm-and-elegant-dining-ambience.json";
import designingAModernBathroom from "./posts/designing-a-modern-bathroom.json";
import designingAStylishDiningSpace from "./posts/designing-a-stylish-dining-space.json";
import easyToMaintainFlooringForDiningAreas from "./posts/easy-to-maintain-flooring-for-dining-areas.json";
import flooringIdeasForContemporaryLivingRooms from "./posts/flooring-ideas-for-contemporary-living-rooms.json";
import lightingMasteryInteriors from "./posts/lighting-mastery-interiors.json";
import livingRoomDesignIdeasWithTilesAndSurfaces from "./posts/living-room-design-ideas-with-tiles-and-surfaces.json";
import minimalistKitchenDesign from "./posts/minimalist-kitchen-design.json";
import modernBathroomDesignGuide from "./posts/modern-bathroom-design-guide.json";
import outdoorLivingSpaces from "./posts/outdoor-living-spaces.json";
import smallSpaceSolutions from "./posts/small-space-solutions.json";
import smartHomeIntegration from "./posts/smart-home-integration.json";
import sustainableCeramicTiles from "./posts/sustainable-ceramic-tiles.json";
import textureInInteriorDesign from "./posts/texture-in-interior-design.json";
import theImportanceOfQualityTileAccessoriesInFinishing from "./posts/the-importance-of-quality-tile-accessories-in-finishing.json";
import timelessEleganceCeramics from "./posts/timeless-elegance-ceramics.json";

/** Same 10 article links as premium ContemporaryLiving grid */
export const BLOG_DISCOVER_HREFS = [
  "/blog/designing-a-modern-bathroom",
  "/blog/flooring-ideas-for-contemporary-living-rooms",
  "/blog/bathroom-tile-ideas-that-elevate-everyday-spaces",
  "/blog/the-importance-of-quality-tile-accessories-in-finishing",
  "/blog/modern-bathroom-design-guide",
  "/blog/living-room-design-ideas-with-tiles-and-surfaces",
  "/blog/designing-a-stylish-dining-space",
  "/blog/easy-to-maintain-flooring-for-dining-areas",
  "/blog/bathroom-tile-ideas-that-elevate-everyday-spaces",
  "/blog/creating-a-warm-and-elegant-dining-ambience",
] as const;

export const BLOG_DISCOVER_GRID_IMAGES_PREMIUM = [
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/4f289c96-52f3-49ba-ab79-a0a5c9cb064b.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/c19b380f-bdf3-497e-8844-4f82850f8a1e.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/3ed0cd68-4ebe-4eb4-a36b-bd21afff0989.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/78d226e2-aad4-4eed-982d-19d0ff07c468.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/f36325f0-2ba5-4a8f-b6bb-fe4da9212617.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/12c5adc1-7509-4e9d-a646-d3bb5d51a9e9.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/5ab9c309-5801-4129-be8f-4ce2accebbcb.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/8fc87091-ac1c-4954-9de2-dc515317536b.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/41def796-b744-4e3c-bff6-2899fdcc8482.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/347106bf-af5e-4bc5-814f-4c6213b4b762.png",
] as const;

export const BLOG_DISCOVER_GRID_IMAGES_LUXURY = [
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/0341460b-f78f-47d8-9366-04a4cfa34ea6.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/a31f3caf-9eca-4ec6-8dd9-7ea33240073c.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/97441a8d-dcf3-4ac3-9c10-1b290a09f931.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/7d19b600-c26a-4df9-a57f-ed5bece0dd17.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/0daa01c4-b8db-40d3-b67f-e00a4ddffd72.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/2283af85-2d6c-45e4-a21e-f544e3c7a663.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/8de0e0c1-27fa-4d9e-97c2-9dcdaa55f4c9.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/9897ae68-854f-4ab7-b1ad-c6b92781b893.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/aff0b72f-ecba-4030-9b00-1de929287d69.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/09dcfeb2-98d5-47a0-8f15-94e0f35ff15f.png",
] as const;

export const BLOG_IMAGES = {
  premium: {
    banner:
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/12ed1f1c-2e9e-48c3-9336-765816378d96.png",
    bannerOverlay: 0,
    blog1: "/Blog/Blog1.webp",
    blog2: "/Blog/Blog2.webp",
  },
  luxury: {
    banner:
      "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/4e571703-1b1e-40ec-b69a-5e04a3c05b94.png",
    bannerOverlay: 0.55,
    blog1: "/Blog/Blog1.webp",
    blog2: "/Blog/Blog2.webp",
  },
} as const;

export const BLOG_CONTENT = {
  premium: {
    hero: {
      title: "Latest Insights On Tiles,\nInteriors And Design.",
      titleColor: "#2D200A",
    },
    // flooringIdeas: {
    //   heading: "Flooring Ideas for\nContemporary Living Rooms",
    //   intro: "Transforming your living room into a contemporary haven often begins from the ground up, with the right flooring setting the stage for the entire interior design. This article explores a myriad of flooring ideas to help you create an elegant living room that reflects modern aesthetics and functional needs.",
    //   importance: {
    //     title: "Importance of Choosing the Right Flooring",
    //     text: "Choosing the right flooring for your living room is paramount as it significantly impacts the overall aesthetic and functionality of the space. The floor design dictates the mood and style, influencing everything from furniture choices to decor accents. The perfect living room flooring not only enhances visual appeal but also contributes to the comfort and practicality of this central living area.",
    //   },
    //   materials: {
    //     title: "Overview of Living Room Flooring Materials",
    //     text: "There's a vast array of living room flooring materials available, each offering unique benefits and styles. Traditional options like wooden flooring, including hardwood and engineered wood, provide a classic, warm aesthetic. Tile flooring, encompassing ceramic, porcelain, and vitrified tiles, offers incredible durability and versatility in tile designs. For those seeking modern flooring solutions, luxury vinyl flooring, laminate flooring, and even polished concrete floor options present compelling alternatives.",
    //   },
    // },
    designJournal: {
      title: "Discover Spaces That Inspire",
      gridImages: [...BLOG_DISCOVER_GRID_IMAGES_PREMIUM],
      paragraphs: [
        "Step into a world where design meets inspiration, and every space tells a story of elegance, comfort, and modern living. Our Design Journal is thoughtfully curated to bring you the finest ideas, expert insights, and creative inspirations from the world of interiors, architecture, décor, and premium surfaces — helping you transform everyday spaces into timeless experiences.",
        "Here, we explore the evolving language of contemporary design through carefully crafted articles that celebrate aesthetics, functionality, and innovation. From luxurious living rooms that create lasting impressions to serene bathrooms designed for relaxation, from modern kitchens built around efficiency to sophisticated dining spaces that bring people together — every feature is created to inspire refined and meaningful living.",
        "Our blog goes beyond trends to showcase thoughtful design concepts, material inspirations, styling techniques, and practical solutions that suit modern lifestyles. Whether you are designing a new home, renovating an existing space, selecting the perfect tiles and finishes, or simply looking for fresh interior inspiration, our journal serves as your trusted guide throughout the journey.",
        "Discover expert perspectives on color palettes, textures, lighting, layouts, furniture styling, architectural details, and space planning — all tailored to help you create interiors that feel both visually stunning and deeply personal. We also bring you the latest innovations in premium materials, contemporary craftsmanship, and modern décor trends that elevate the beauty and functionality of every corner of your home.",
        "At the heart of our Design Journal is a passion for creating spaces that reflect individuality, sophistication, and effortless living. Every article is designed to spark ideas, encourage creativity, and help you reimagine interiors with confidence and style.",
        "Explore a curated destination filled with inspiration, creativity, and modern elegance — where timeless design and contemporary living come together beautifully.",
      ],
    },
  },
  luxury: {
    hero: {
      title: "Luxury Insights On Tiles,\nInteriors And Design.",
      titleColor: "#D8B691",
    },
    // flooringIdeas: {
    //   heading: "Luxury Flooring Ideas for\nContemporary Living Rooms",
    //   intro: "Dummy content for luxury mode. Transforming your living room into a contemporary haven often begins from the ground up, with the right flooring setting the stage for the entire interior design.Dummy content for luxury mode. There's a vast array of living room flooring materials available, each offering unique benefits and styles.",
    //   importance: {
    //     title: "Importance of Choosing Luxury Flooring",
    //     text: "Dummy content for luxury mode. Choosing the right flooring for your living room is paramount as it significantly impacts the overall aesthetic and functionality of the space.Dummy content for luxury mode. There's a vast array of living room flooring materials available, each offering unique benefits and styles.Dummy content for luxury mode. There's a vast array of living room flooring materials available, each offering unique benefits and styles.",
    //   },
    //   materials: {
    //     title: "Overview of Luxury Flooring Materials",
    //     text: "Dummy content for luxury mode. There's a vast array of living room flooring materials available, each offering unique benefits and styles.Dummy content for luxury mode. There's a vast array of living room flooring materials available, each offering unique benefits and styles.",
    //   },
    // },

    discover: {
      title: "Discover Spaces that Inspire",
      intro:
        "From elegant living rooms to serene bathrooms and modern kitchens, explore design ideas that blend comfort, functionality, and timeless style.Our blog brings you the latest trends, expert tips, and interior inspirations to transform every corner of your home with sophistication and warmth.",
      gridImages: [...BLOG_DISCOVER_GRID_IMAGES_LUXURY],
    },
    luxurySpace: {
      title: "Where Spaces Find Their Style",
      paragraphs: [
        "Step into a world where design meets inspiration, and every space tells a story of elegance, comfort, and modern living. Our Design Journal is thoughtfully curated to bring you the finest ideas, expert insights, and creative inspirations from the world of interiors, architecture, décor, and premium surfaces — helping you transform everyday spaces into timeless experiences.",
        "Our blog goes beyond trends to showcase thoughtful design concepts, material inspirations, styling techniques, and practical solutions that suit modern lifestyles. Whether you are designing a new home, renovating an existing space, selecting the perfect tiles and finishes, or simply looking for fresh interior inspiration, our journal serves as your trusted guide throughout the journey.",
        "Discover expert perspectives on color palettes, textures, lighting, layouts, furniture styling, architectural details, and space planning — all tailored to help you create interiors that feel both visually stunning and deeply personal. We also bring you the latest innovations in premium materials, contemporary craftsmanship, and modern décor trends that elevate the beauty and functionality of every corner of your home.",
        "Explore a curated destination filled with inspiration, creativity, and modern elegance — where timeless design and contemporary living come together beautifully.",
      ],
    },
  },
} as const;

export type BlogContentItem = {
  type: "paragraph" | "heading" | "subheading" | "list" | "table";
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
};

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  image: string;
  content: BlogContentItem[];
  htmlContent?: string;
};

const blogPostsRaw = [
  bathroomTileIdeas,
  biophilicDesignBasics,
  colorPalettesFor2026,
  creatingAWarmAndElegantDiningAmbience,
  designingAModernBathroom,
  designingAStylishDiningSpace,
  easyToMaintainFlooringForDiningAreas,
  flooringIdeasForContemporaryLivingRooms,
  lightingMasteryInteriors,
  livingRoomDesignIdeasWithTilesAndSurfaces,
  minimalistKitchenDesign,
  modernBathroomDesignGuide,
  outdoorLivingSpaces,
  smallSpaceSolutions,
  smartHomeIntegration,
  sustainableCeramicTiles,
  textureInInteriorDesign,
  theImportanceOfQualityTileAccessoriesInFinishing,
  timelessEleganceCeramics,
] as const;

export const BLOG_POSTS = [...blogPostsRaw].sort((a, b) => a.id - b.id) as BlogPost[];

export type BlogDiscoverCard = {
  href: string;
  title: string;
  image: string;
};

export type BlogTheme = keyof typeof BLOG_CONTENT;

export function getBlogDiscoverCards(theme: BlogTheme): BlogDiscoverCard[] {
  const images =
    theme === "luxury"
      ? BLOG_CONTENT.luxury.discover.gridImages
      : BLOG_CONTENT.premium.designJournal.gridImages;

  return BLOG_DISCOVER_HREFS.map((href, index) => {
    const slug = href.replace("/blog/", "");
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    return {
      href,
      title: post?.title ?? "",
      image: images[index] ?? post?.image ?? "/Blog/Blog1.webp",
    };
  });
}