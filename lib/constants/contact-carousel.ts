/**
 * Contact page image slider — assets uploaded to R2 under `contact/`.
 * CDN origin should match `R2_PUBLIC_URL` in `.env`.
 */
export const CONTACT_CAROUSEL_CDN_ORIGIN =
  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev";

export const CONTACT_CAROUSEL_R2_PREFIX = "contact" as const;

/** Object keys in R2 (filename only). Order matches the intended slider sequence. */
export const CONTACT_CAROUSEL_FILENAMES = [
  "465d10e8-4b29-4489-8164-d9be2bb9bc37.png",
  "884ac5e8-b6ea-45cb-8fb6-2bfe414d5db4.png",
  "6a7f990c-3fe5-4137-85ba-10b702f6c6ed.png",
  "20eba2a9-169f-4c8e-9092-1ae75774b86b.png",
  "17f9ce90-d694-4009-96e8-aaa86e65c287.png",
  "fa7a6db2-1ec5-4e6b-a316-d75cdde77c42.png",
  "19445744-0712-44ec-8f2a-d8e578d683e5.png",
  "0e6c5637-c845-4235-a6ab-9055aa80defe.png",
  "9e3d7f17-3c84-4f3e-8e1f-de87b95dba0c.png",
  "5d2e9677-8b9a-4a95-9ee2-3481f46b2a1c.png",
  "467aa7eb-2208-4970-bf33-a9cc3af518c7.png",
  "2290eebf-1cb2-4077-a874-620ec8da178a.png",
  "0db7c2d7-220d-4237-b196-29417385ac01.png",
  "df0d135e-1630-4c1d-a108-dfbd171d57c6.png",
] as const;

export type ContactCarouselSlide = {
  src: string;
  alt: string;
};

function contactCarouselPublicUrl(filename: string): string {
  return `${CONTACT_CAROUSEL_CDN_ORIGIN}/${CONTACT_CAROUSEL_R2_PREFIX}/${filename}`;
}

export const CONTACT_CAROUSEL_SLIDES: readonly ContactCarouselSlide[] =
  CONTACT_CAROUSEL_FILENAMES.map((filename, index) => ({
    src: contactCarouselPublicUrl(filename),
    alt: `Neeladhri showroom and collections ${index + 1}`,
  }));

/** Flat URL list for `<Image src={...} />` carousels. */
export const CONTACT_CAROUSEL_IMAGE_URLS: readonly string[] =
  CONTACT_CAROUSEL_SLIDES.map((slide) => slide.src);

export function contactCarouselSliderImages(): readonly string[] {
  return CONTACT_CAROUSEL_IMAGE_URLS;
}
