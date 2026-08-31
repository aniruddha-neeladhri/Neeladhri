import type { PageSeo } from "./types";

export const PAGE_SEO = {
  home: {
    title: "Ceramic Tiles Showroom in Bangalore | Neeladhri",
    description:
      "Explore premium ceramic tiles, bathroom fittings, sanitaryware and surfaces at Neeladhri Ceramics, a trusted showroom in Bangalore.",
    h1: "Premium Tiles & Sanitaryware Showroom in Bangalore",
  },
  collection: {
    title: "Tiles Showroom in Bangalore | Neeladhri Ceramics",
    description:
      "Explore tiles, surfaces, sanitaryware and bathroom solutions at Neeladhri Ceramics. Find stylish options for homes and commercial spaces.",
    h1: "Explore Premium Tiles, Sanitaryware & Home Solutions",
  },
  brands: {
    title: "Top Tile & Sanitaryware Brands in Bangalore",
    description:
      "Discover leading tile, sanitaryware, bathroom and home solution brands available at Neeladhri Ceramics in Bangalore.",
    h1: "Premium Tile, Bathroom & Home Solution Brands in Bangalore",
  },
  contact: {
    title: "Contact Neeladhri Ceramics Bangalore",
    description:
      "Contact Neeladhri Ceramics for tiles, sanitaryware, bathroom fittings and premium home solutions in Bangalore.",
    h1: "Contact Us",
  },
  about: {
    title: "About Neeladhri Ceramics Bangalore",
    description:
      "Learn about Neeladhri Ceramics and our range of premium tiles, sanitaryware, bathroom fittings and home solutions in Bangalore.",
    h1: "About Neeladhri Ceramics",
  },
  gallery: {
    title: "Neeladhri Ceramics Showroom & Tile Gallery Bangalore",
    description:
      "Explore the Neeladhri Ceramics gallery for tiles, bathroom designs, sanitaryware and premium surfaces in Bangalore.",
    h1: "Explore Our Tiles, Bathrooms & Interior Solutions",
  },
  terms: {
    title: "Terms and Conditions | Neeladhri Ceramics",
    description:
      "Read the terms and conditions governing the use of the Neeladhri Ceramics website, products, services and online content.",
    h1: "Terms and Conditions",
  },
  privacy: {
    title: "Privacy Policy | Neeladhri Ceramics Bangalore",
    description:
      "Learn how Neeladhri Ceramics collects, uses and protects personal information when you use our website and services.",
    h1: "Privacy Policy",
  },
  blog: {
    title: "Neeladhri Ceramics Blog | Tile & Design Ideas",
    description:
      "Explore tile, bathroom, flooring, sanitaryware and interior design ideas to help you create stylish and functional spaces.",
    h1: "Latest Insights On Tiles, Interiors And Design.",
  },
} as const satisfies Record<string, PageSeo>;
