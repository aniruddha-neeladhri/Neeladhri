/** Carousel / collection grid image frame (premium theme) */
export const COLLECTION_IMAGE_BORDER = "#6B6B6B";

/** Carousel / collection grid image frame (luxury theme) */
export const COLLECTION_IMAGE_BORDER_LUXURY = "transparent";

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
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/4d3b519a-3311-4a0a-930b-803086053957.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/cc811d03-66c9-47c5-8453-677b7959fa66.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/dfec68b1-fcd5-4145-a396-a4fdb707f1a4.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/db67a03b-aa3e-422f-8ae1-123d7e923f4a.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/4cba5cbf-1340-461c-a43e-6d3f099f00f2.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/7f2d8ad8-00aa-42e0-9d19-a4b77b840ce6.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/ed46a0f0-054a-4434-b24f-119c2ee4c3e4.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/70f6a6f4-4377-4a3a-ac21-cd6991f1d252.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/74a86366-9b8a-438e-884c-5dd44352834e.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/a9276685-1c93-46df-a9e1-9c82102a2758.png",
] as const;

/** Luxury carousel – same paths as premium until you swap assets */
export const LIVING_IMAGES_LUXURY: readonly string[] = [
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/951fa58e-fb6f-479c-a489-137b3c01b9da.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/9f6af81c-fe19-46ea-9d7f-852c19481d9d.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/7510cbe6-72a3-40a7-8675-88652e0a5b8c.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/2b95c683-ab9c-49d1-9a1a-48de72c31d36.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/30e193c1-5b3d-4189-aa71-e916823ffaa9.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/bdd5e584-94d3-40c6-b1c9-419427011e16.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/5dde4f28-c331-4612-9e52-b658267c6ea1.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/0ce5e9bd-425f-49d4-af0e-9d09ea8fae87.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/6833b3dc-fe62-4a6d-9013-fb5f55ce6c17.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/7414cd5c-3bb2-4f60-97a9-692fc764dec6.png",
] as const;

export function livingCarouselImages(theme: CollectionThemeMode): readonly string[] {
  return theme === "luxury" ? LIVING_IMAGES_LUXURY : LIVING_IMAGES_PREMIUM;
}

/** @deprecated Use livingCarouselImages(theme) */
export const LIVING_IMAGES = LIVING_IMAGES_PREMIUM;

export const BATHROOM_IMAGES_PREMIUM = [
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/72c0cc7a-f0f3-42ca-8794-b5b68eecbb20.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/c66deced-00ce-4299-84dc-16c1f47dba7f.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/db77cf96-e6a2-4ff9-99c8-f52e38a58278.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/462a833a-2793-4636-854d-c61064323405.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/f3a06598-f93f-44d5-91ab-d80072c76013.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/08aa2119-cf25-4059-b617-d114f5d8b72e.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/be3560d2-79df-4c6e-978f-d65f80814fc7.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/61c62d98-b9c0-4f2c-9cb6-8b0bc3be6a19.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/0a9a4378-7b73-48a7-97e2-0d114368bcf7.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/969f44b2-fad6-42bb-b629-0e674866da2d.png",
] as const;

export const BATHROOM_IMAGES_LUXURY: readonly string[] = [
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/18d172e4-d89e-447c-affd-b805ced8ae43.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/afff7a37-9f48-40f2-8c61-7163a02abfdc.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/fe3f7f30-b462-477c-ab10-16fc3d87b38b.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/78d94243-6f74-4288-9f43-efee54275c95.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/2a891481-ba72-4b4b-bb65-f951e711de18.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/a0a0567b-011c-472b-8b96-532441289c18.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/2b942e20-3a98-4448-8e8c-f016198bf276.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/6baf4f69-7068-4310-9ab1-fd414388810c.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/0222521e-19bb-48d3-bd84-58db8e0f1c25.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/fc33ca49-e535-4577-b6e0-ce7981bd7632.png",
] as const;

export function bathroomCarouselImages(theme: CollectionThemeMode): readonly string[] {
  return theme === "luxury" ? BATHROOM_IMAGES_LUXURY : BATHROOM_IMAGES_PREMIUM;
}

/** @deprecated Use bathroomCarouselImages(theme) */
export const BATHROOM_IMAGES = BATHROOM_IMAGES_PREMIUM;

export const KITCHEN_IMAGES_PREMIUM = [
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/b45a79ab-43b9-4bcc-8e00-5efa27ae93e5.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/7c77b743-7d7d-4875-a78f-77f5b7372694.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/c56d9d50-e872-43e2-b4b6-de4be678ac6b.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/8a50fe8f-c6d7-422b-8191-0d5c55bd7795.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/28d94776-07fa-4a13-82e6-b75c163cb5dd.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/6ed34fa9-f87d-45ac-91de-1c751529c5eb.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/49464ca4-430b-45f9-9b7e-d6f9d5be2d62.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/49464ca4-430b-45f9-9b7e-d6f9d5be2d62.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/a71b2e28-66b5-47aa-badd-99d64ab05d2f.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/0e84d767-b282-4e5c-b9fa-cc293c50bb5c.png",
] as const;

export const KITCHEN_IMAGES_LUXURY: readonly string[] = [
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/ef238802-0182-4885-9106-c146a1612868.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/c41e7168-96fd-41c1-a793-42813c24a08f.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/7039777c-2037-4aad-89c4-04113dd5b993.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/e766ed52-4e10-4d00-809f-38f1180707b0.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/35a7a916-38e6-4133-a7db-19b4667ae6da.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/67f06733-385a-4477-af3e-036ebfa1f65b.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/08a4dca8-3655-4147-aee1-0cb9a2f9027d.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/4ef353dd-2967-455d-8cfd-b76ef3eb6e23.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/010281b3-e161-4852-bcbe-340c9b485ef1.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/ba876d14-4afa-48da-a74f-9c352ed50d66.png",
] as const;

export function kitchenCarouselImages(theme: CollectionThemeMode): readonly string[] {
  return theme === "luxury" ? KITCHEN_IMAGES_LUXURY : KITCHEN_IMAGES_PREMIUM;
}

/** @deprecated Use kitchenCarouselImages(theme) */
export const KITCHEN_IMAGES = KITCHEN_IMAGES_PREMIUM;

export const DINING_IMAGES_PREMIUM = [
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/b51be723-fdbd-49ab-afd4-33dccacb1582.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/1e32cb83-b2b0-4560-a445-d0139b28a112.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/9a922f03-213c-42e2-aff8-76af44cc1afb.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/f3622ebe-d95b-458e-9098-0a5b1f77269f.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/c598e18f-0938-4fda-9b7a-750e34b52976.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/71e34850-29c4-4d44-a299-d1b1cd26f31f.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/f8e6ff62-7000-4713-b372-ad0f9fd160a9.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/8bb9395d-59b4-4652-851d-12c2151f542c.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/8d68685a-f39d-4f38-9b26-074c0aa299a8.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/bca8a204-dc24-4d93-b03f-fd910b7a2df1.png",
] as const;

export const DINING_IMAGES_LUXURY: readonly string[] = [
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/2a255102-5620-463c-9b24-854804fee164.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/563548e3-ba68-4c44-b682-4a89a2eb2ea3.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/5f072c3e-1970-4b6c-bcda-50da7a218a14.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/631b3d74-f84c-4b14-aea0-69456d194907.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/5f542802-0777-4500-a586-4a4299fedda4.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/a643454f-83b3-424b-9bff-1b466d015c74.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/82f28fa9-930b-496a-9238-3ef0c1313612.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/a50bee8a-3ebb-4f29-90d9-b4f5c0ce936b.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/fdaa1f11-75b6-4778-932d-eff027f2fe72.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/ce1a3cb8-3867-461d-bb53-cae2078d8d30.png",
] as const;

export function diningCarouselImages(theme: CollectionThemeMode): readonly string[] {
  return theme === "luxury" ? DINING_IMAGES_LUXURY : DINING_IMAGES_PREMIUM;
}

/** @deprecated Use diningCarouselImages(theme) */
export const DINING_IMAGES = DINING_IMAGES_PREMIUM;

export const ALLIED_ACCESSORIES_IMAGES_PREMIUM = [
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/00e42fa0-7df0-49a0-9e77-c41c679db348.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/923c8069-bee4-4168-969b-af93bd2e5c08.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/0cfbc5d1-619d-494f-97c9-f39863220b6c.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/8b69bb1a-79ca-4c91-ad3d-5e0ee8b53207.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/27cd65c2-4e6f-47a5-bcca-49d052f3f7b4.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/4fa680c1-c126-47ce-a6f5-65fabd1cd6b6.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/94bc0dcb-2893-4a21-a4b4-39b7951c13e4.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/cfe49b53-7d6a-47f4-a7e5-43d61a88bb88.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/bbfe3e6c-0694-4987-a1b7-15d704cc8db6.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/67f61bf6-52bb-4624-b43d-8e0553503f83.png",
] as const;

export const ALLIED_ACCESSORIES_IMAGES_LUXURY: readonly string[] = [
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/ccd430e5-f753-4769-9c7b-c5ec89d97c7a.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/e09257a6-b65c-4da2-8566-756fda04e8c8.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/889fbe15-a437-47e4-ace9-dd0ac857be1c.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/30916fcf-a684-4998-a163-a17f17b9b7fe.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/5984f0da-087c-477a-aa48-0b9e00019aea.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/9d494255-94ce-4bd0-a434-fbd5d4647b38.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/72ba249b-1c1a-46fa-9470-409c8f9d5595.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/b5c35cd5-e1a6-4092-9db7-4b9140a7c5b6.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/c172fd66-88a8-4dfa-92aa-169e5b73c534.png",
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/e3671b2c-3169-4b47-a8ee-420107538795.png",
] as const;

export function alliedCarouselImages(theme: CollectionThemeMode): readonly string[] {
  return theme === "luxury"
    ? ALLIED_ACCESSORIES_IMAGES_LUXURY
    : ALLIED_ACCESSORIES_IMAGES_PREMIUM;
}

/** @deprecated Use alliedCarouselImages(theme) */
export const ALLIED_ACCESSORIES_IMAGES = ALLIED_ACCESSORIES_IMAGES_PREMIUM;

export const COLLECTION_GRID_PREMIUM = {
  living: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/9b6cfbab-8baa-4100-8dd3-dc1c22385852.png",
  bathroom: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/e49ed980-b40d-402c-88b5-356c960c06bb.png",
  dining: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/ac560381-328b-4acf-b02f-83ec3d597153.png",
  alliedAccessories:  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/48ca9317-bbb2-4eef-8e70-87af6f73f2ea.png",
  blank: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/a8ed7727-6d82-4e41-a02b-2940afadc57e.png",
  kitchen: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/c634049a-673f-4907-9435-2daf4cf67b86.png",
} as const;

/** Luxury grid – same paths as premium until you swap assets */
export const COLLECTION_GRID_LUXURY = {
  living: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/a2d24265-c734-4a8e-b420-f3e7c0954cd4.png",
  bathroom: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/53d4b6bf-085e-42a3-90b5-0776f329c4c9.png",
  dining: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/5d1a1522-5f0e-490b-88b2-46cdf14d9244.png",
  alliedAccessories:  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/49481654-7d3f-4f32-965a-1cdd3604ebff.png",
  blank:"https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/0cbe42ae-40c4-4d72-a287-653e138d1547.png",
  kitchen: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/collection/40c83227-8ccd-4c6b-b25d-fd2fc665211e.png",
} as const;

export function collectionGridImages(theme: CollectionThemeMode) {
  return theme === "luxury" ? COLLECTION_GRID_LUXURY : COLLECTION_GRID_PREMIUM;
}

/** @deprecated Use collectionGridImages(theme) */
export const COLLECTION_IMAGES = COLLECTION_GRID_PREMIUM;
