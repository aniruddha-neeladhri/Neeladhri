import type { PageSeo } from "./types";

export const BLOG_SEO: Record<string, PageSeo> = {
  "living-room-design-ideas-with-tiles-and-surfaces": {
    title: "Living Room Tile Design Ideas for Modern Homes",
    description:
      "Explore living room tile and surface ideas to create a stylish, comfortable and modern space that reflects your personal style.",
    h1: "Living Room Tile & Surface Design Ideas",
  },
  "bathroom-tile-ideas-that-elevate-everyday-spaces": {
    title: "Bathroom Tile Ideas for Stylish Modern Spaces",
    description:
      "Discover bathroom tile ideas, patterns and finishes that can transform everyday bathrooms into stylish and functional spaces.",
    h1: "Bathroom Tile Ideas for Stylish Spaces",
  },
  "designing-a-modern-bathroom": {
    title: "Modern Bathroom Design Ideas for Your Home",
    description:
      "Explore modern bathroom design ideas, from tiles and sanitaryware to fittings and finishes, for a stylish and functional space.",
    h1: "Modern Bathroom Design Ideas",
  },
  "choosing-the-right-sanitaryware-for-style-comfort": {
    title: "How to Choose the Right Sanitaryware for Your Home",
    description:
      "Learn how to choose sanitaryware based on bathroom size, style, comfort, functionality and long-term maintenance needs.",
    h1: "How to Choose the Right Sanitaryware",
  },
  "easy-to-maintain-flooring-for-dining-areas": {
    title: "Easy-to-Maintain Flooring Ideas for Dining Areas",
    description:
      "Discover practical dining area flooring ideas that combine durability, easy maintenance and style for everyday living.",
    h1: "Easy-to-Maintain Flooring for Dining Areas",
  },
  "creating-statement-walls-in-living-areas": {
    title: "Statement Wall Ideas for Modern Living Rooms",
    description:
      "Discover statement wall ideas using tiles, surfaces, textures and patterns to add character and style to modern living rooms.",
    h1: "Statement Wall Ideas for Living Areas",
  },
  "designing-a-stylish-dining-space": {
    title: "Stylish Dining Room Design Ideas for Modern Homes",
    description:
      "Explore stylish dining room design ideas for choosing flooring, walls, lighting and finishes that create a welcoming dining space.",
    h1: "Stylish Dining Space Design Ideas",
  },
  "the-importance-of-quality-tile-accessories-in-finishing": {
    title: "Why Quality Tile Accessories Matter for Finishing",
    description:
      "Learn why quality tile accessories matter for clean finishes, durability and a polished look in tile installation projects.",
    h1: "Why Quality Tile Accessories Matter",
  },
  "flooring-ideas-for-contemporary-living-rooms": {
    title: "Contemporary Living Room Flooring Ideas",
    description:
      "Explore contemporary living room flooring ideas, including tile finishes, patterns and styles for modern interiors.",
    h1: "Contemporary Living Room Flooring Ideas",
  },
  "creating-a-warm-and-elegant-dining-ambience": {
    title: "How to Create a Warm & Elegant Dining Space",
    description:
      "Discover simple ideas for creating a warm and elegant dining space with the right flooring, surfaces, lighting and décor.",
    h1: "How to Create a Warm & Elegant Dining Space",
  },
};

export function getBlogSeo(slug: string): PageSeo | undefined {
  return BLOG_SEO[slug];
}
