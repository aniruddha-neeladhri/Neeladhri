export const CONTACT_INITIAL_FORM = {
  name: "",
  contact: "",
  email: "",
  message: "",
};

export const CONTACT_TEXT = {
  heading: "CONTACT US",
  name: "Name",
  contact: "Contact Number",
  email: "E Mail",
  message: "Send Message",
  submit: "Submit",
};

export type ContactThemeImages = {
  background: string;
  contactImage: string;
  carousel: readonly string[];
};

// Contact section images — premium
export const CONTACT_IMAGES_PREMIUM: ContactThemeImages = {
  background: "/Contact/Contact_Bg.webp",
  contactImage: "/Contact/Contact.webp",
  carousel: [
    "/Contact/Contact.webp",
    "/Contact/Contact.webp",
    "/Contact/Contact.webp",
  ],
} as const;

/** Luxury contact — swap asset paths when final images are ready */
export const CONTACT_IMAGES_LUXURY: ContactThemeImages = {
  background: "/Contact/Contact_Bg.webp",
  contactImage: "/Contact/Contact.webp",
  carousel: [
    "/Contact/Contact.webp",
    "/Contact/Contact.webp",
    "/Contact/Contact.webp",
  ],
};

export function contactImages(theme: "premium" | "luxury"): ContactThemeImages {
  return theme === "luxury" ? CONTACT_IMAGES_LUXURY : CONTACT_IMAGES_PREMIUM;
}

export function contactCarouselImages(theme: "premium" | "luxury"): string[] {
  return [...contactImages(theme).carousel];
}

// Contact banner images
export const CONTACT_BANNER_IMAGES_PREMIUM = {
  banner: "/Contact/Contact_Banner.webp",
} as const;

export const CONTACT_BANNER_IMAGES_LUXURY: { banner: string } = {
  banner: "/Contact/Contact_Banner.webp",
};

export function contactBannerImages(theme: "premium" | "luxury") {
  return theme === "luxury" ? CONTACT_BANNER_IMAGES_LUXURY : CONTACT_BANNER_IMAGES_PREMIUM;
}

// Border colors
export const CONTACT_BORDER_COLOR_PREMIUM = "#FFFFFF";
export const CONTACT_BORDER_COLOR_LUXURY = "#F79440";

export function contactBorderColor(theme: "premium" | "luxury"): string {
  return theme === "luxury" ? CONTACT_BORDER_COLOR_LUXURY : CONTACT_BORDER_COLOR_PREMIUM;
}
