/** Carousel / collection grid image frame (premium theme) */
export const COLLECTION_IMAGE_BORDER = "#6B6B6B";

/** Carousel / collection grid image frame (luxury theme) */
export const COLLECTION_IMAGE_BORDER_LUXURY = "#F79440";

export function collectionImageBorderColor(
  theme: "premium" | "luxury"
): string {
  return theme === "luxury" ? COLLECTION_IMAGE_BORDER_LUXURY : COLLECTION_IMAGE_BORDER;
}

export type CollectionThemeMode = "premium" | "luxury";

export const CAROUSEL_GAP = 12;
export const CAROUSEL_SIDE_RATIO = 0.20;
export const CAROUSEL_CENTER_RATIO = 0.60;

export const CAROUSEL_GAP_MOBILE = 12;
export const CAROUSEL_PEEK_MOBILE = 48;

/** Premium carousel images */
export const LIVING_IMAGES_PREMIUM = [
  "/collections/living1.png",
  "/collections/livings2.png",
  "/collections/living3.png",
  "/collections/living4.png",
  "/collections/living5.png",
  "/collections/living6.png",
  "/collections/living7.png",
  "/collections/living8.png",
  "/collections/living9.png",
  "/collections/living10.png",
] as const;

/** Luxury carousel – same paths as premium until you swap assets */
export const LIVING_IMAGES_LUXURY: readonly string[] = [
  "/collections/living1.png",
  "/collections/livings2.png",
  "/collections/living3.png",
  "/collections/living4.png",
  "/collections/living5.png",
  "/collections/living6.png",
  "/collections/living7.png",
  "/collections/living8.png",
  "/collections/living9.png",
  "/collections/living10.png",
] as const;

export function livingCarouselImages(theme: CollectionThemeMode): readonly string[] {
  return theme === "luxury" ? LIVING_IMAGES_LUXURY : LIVING_IMAGES_PREMIUM;
}

/** @deprecated Use livingCarouselImages(theme) */
export const LIVING_IMAGES = LIVING_IMAGES_PREMIUM;

export const BATHROOM_IMAGES_PREMIUM = [
  "/collections/bathroom11.png",
  "/collections/bathroom12.png",
  "/collections/bathroom13.png",
  "/collections/bathroom14.png",
  "/collections/bathroom15.png",
  "/collections/bathroom16.png",
  "/collections/bathroom17.png",
  "/collections/bathroom18.png",
  "/collections/bathroom19.png",
  "/collections/bathroom20.png",
] as const;

export const BATHROOM_IMAGES_LUXURY: readonly string[] = [
  "/collections/bathroom11.png",
  "/collections/bathroom12.png",
  "/collections/bathroom13.png",
  "/collections/bathroom14.png",
  "/collections/bathroom15.png",
  "/collections/bathroom16.png",
  "/collections/bathroom17.png",
  "/collections/bathroom18.png",
  "/collections/bathroom19.png",
  "/collections/bathroom20.png",
] as const;

export function bathroomCarouselImages(theme: CollectionThemeMode): readonly string[] {
  return theme === "luxury" ? BATHROOM_IMAGES_LUXURY : BATHROOM_IMAGES_PREMIUM;
}

/** @deprecated Use bathroomCarouselImages(theme) */
export const BATHROOM_IMAGES = BATHROOM_IMAGES_PREMIUM;

export const KITCHEN_IMAGES_PREMIUM = [
  "/collections/kitchen1.png",
  "/collections/kitchen2.png",
  "/collections/kitchen3.png",
  "/collections/kitchen4.png",
  "/collections/kitchen5.png",
  "/collections/kitchen6.png",
  "/collections/kitchen7.png",
  "/collections/kitchen8.png",
  "/collections/kitchen9.png",
  "/collections/kitchen10.png",
] as const;

export const KITCHEN_IMAGES_LUXURY: readonly string[] = [
  "/collections/kitchen1.png",
  "/collections/kitchen2.png",
  "/collections/kitchen3.png",
  "/collections/kitchen4.png",
  "/collections/kitchen5.png",
  "/collections/kitchen6.png",
  "/collections/kitchen7.png",
  "/collections/kitchen8.png",
  "/collections/kitchen9.png",
  "/collections/kitchen10.png",
] as const;

export function kitchenCarouselImages(theme: CollectionThemeMode): readonly string[] {
  return theme === "luxury" ? KITCHEN_IMAGES_LUXURY : KITCHEN_IMAGES_PREMIUM;
}

/** @deprecated Use kitchenCarouselImages(theme) */
export const KITCHEN_IMAGES = KITCHEN_IMAGES_PREMIUM;

export const DINING_IMAGES_PREMIUM = [
  "/collections/dining11.png",
  "/collections/dining12.png",
  "/collections/dining13.png",
  "/collections/dining14.png",
  "/collections/dining15.png",
  "/collections/dining16.png",
  "/collections/dining17.png",
  "/collections/dining18.png",
  "/collections/dining19.png",
  "/collections/dining20.png",
] as const;

export const DINING_IMAGES_LUXURY: readonly string[] = [
  "/collections/dining11.png",
  "/collections/dining12.png",
  "/collections/dining13.png",
  "/collections/dining14.png",
  "/collections/dining15.png",
  "/collections/dining16.png",
  "/collections/dining17.png",
  "/collections/dining18.png",
  "/collections/dining19.png",
  "/collections/dining20.png",
] as const;

export function diningCarouselImages(theme: CollectionThemeMode): readonly string[] {
  return theme === "luxury" ? DINING_IMAGES_LUXURY : DINING_IMAGES_PREMIUM;
}

/** @deprecated Use diningCarouselImages(theme) */
export const DINING_IMAGES = DINING_IMAGES_PREMIUM;

export const ALLIED_ACCESSORIES_IMAGES_PREMIUM = [
  "/collections/allied1.png",
  "/collections/allied2.png",
  "/collections/allied3.png",
  "/collections/allied4.png",
  "/collections/allied5.png",
  "/collections/allied6.png",
  "/collections/allied7.png",
  "/collections/allied8.png",
  "/collections/allied9.png",
  "/collections/allied10.png",
] as const;

export const ALLIED_ACCESSORIES_IMAGES_LUXURY: readonly string[] = [
  "/collections/allied1.png",
  "/collections/allied2.png",
  "/collections/allied3.png",
  "/collections/allied4.png",
  "/collections/allied5.png",
  "/collections/allied6.png",
  "/collections/allied7.png",
  "/collections/allied8.png",
  "/collections/allied9.png",
  "/collections/allied10.png",
] as const;

export function alliedCarouselImages(theme: CollectionThemeMode): readonly string[] {
  return theme === "luxury"
    ? ALLIED_ACCESSORIES_IMAGES_LUXURY
    : ALLIED_ACCESSORIES_IMAGES_PREMIUM;
}

/** @deprecated Use alliedCarouselImages(theme) */
export const ALLIED_ACCESSORIES_IMAGES = ALLIED_ACCESSORIES_IMAGES_PREMIUM;

export const COLLECTION_GRID_PREMIUM = {
  living: "/collections/collection11.png",
  bathroom: "/collections/collection12.png",
  dining: "/collections/collection13.png",
  alliedAccessories: "/collections/collection14.png",
  blank: "/collections/collection15.png",
  kitchen: "/collections/collection16.png",
} as const;

/** Luxury grid – same paths as premium until you swap assets */
export const COLLECTION_GRID_LUXURY: {
  living: string;
  bathroom: string;
  dining: string;
  alliedAccessories: string;
  blank: string;
  kitchen: string;
} = { ...COLLECTION_GRID_PREMIUM };

export function collectionGridImages(theme: CollectionThemeMode) {
  return theme === "luxury" ? COLLECTION_GRID_LUXURY : COLLECTION_GRID_PREMIUM;
}

/** @deprecated Use collectionGridImages(theme) */
export const COLLECTION_IMAGES = COLLECTION_GRID_PREMIUM;
