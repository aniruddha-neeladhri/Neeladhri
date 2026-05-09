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

export const BLOG_IMAGES = {
  premium: {
    banner: "/Blog/Blog_Banner.webp",
    blog1: "/Blog/Blog1.webp",
    blog2: "/Blog/Blog2.webp",
  },
  luxury: {
   banner: "/Blog/Blog_Banner.webp",
    blog1: "/Blog/Blog1.webp",
    blog2: "/Blog/Blog2.webp",
  },
} as const;

export const BLOG_CONTENT = {
  premium: {
    hero: {
      title: "Latest Insights On Tiles,\nInteriors And Design.",
    },
    flooringIdeas: {
      heading: "Flooring Ideas for\nContemporary Living Rooms",
      intro: "Transforming your living room into a contemporary haven often begins from the ground up, with the right flooring setting the stage for the entire interior design. This article explores a myriad of flooring ideas to help you create an elegant living room that reflects modern aesthetics and functional needs.",
      importance: {
        title: "Importance of Choosing the Right Flooring",
        text: "Choosing the right flooring for your living room is paramount as it significantly impacts the overall aesthetic and functionality of the space. The floor design dictates the mood and style, influencing everything from furniture choices to decor accents. The perfect living room flooring not only enhances visual appeal but also contributes to the comfort and practicality of this central living area.",
      },
      materials: {
        title: "Overview of Living Room Flooring Materials",
        text: "There's a vast array of living room flooring materials available, each offering unique benefits and styles. Traditional options like wooden flooring, including hardwood and engineered wood, provide a classic, warm aesthetic. Tile flooring, encompassing ceramic, porcelain, and vitrified tiles, offers incredible durability and versatility in tile designs. For those seeking modern flooring solutions, luxury vinyl flooring, laminate flooring, and even polished concrete floor options present compelling alternatives.",
      },
    },
  },
  luxury: {
    hero: {
      title: "Luxury Insights On Tiles,\nInteriors And Design.",
    },
    flooringIdeas: {
      heading: "Luxury Flooring Ideas for\nContemporary Living Rooms",
      intro: "Dummy content for luxury mode. Transforming your living room into a contemporary haven often begins from the ground up, with the right flooring setting the stage for the entire interior design.Dummy content for luxury mode. There's a vast array of living room flooring materials available, each offering unique benefits and styles.",
      importance: {
        title: "Importance of Choosing Luxury Flooring",
        text: "Dummy content for luxury mode. Choosing the right flooring for your living room is paramount as it significantly impacts the overall aesthetic and functionality of the space.Dummy content for luxury mode. There's a vast array of living room flooring materials available, each offering unique benefits and styles.Dummy content for luxury mode. There's a vast array of living room flooring materials available, each offering unique benefits and styles.",
      },
      materials: {
        title: "Overview of Luxury Flooring Materials",
        text: "Dummy content for luxury mode. There's a vast array of living room flooring materials available, each offering unique benefits and styles.Dummy content for luxury mode. There's a vast array of living room flooring materials available, each offering unique benefits and styles.",
      },
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