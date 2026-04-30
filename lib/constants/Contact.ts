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

// Contact section images
export const CONTACT_IMAGES_PREMIUM = {
  background: "/Contact/Contact_Bg.webp",
  contactImage: "/Contact/contact.webp",
} as const;

/** Luxury contact – same paths as premium until you swap assets */
export const CONTACT_IMAGES_LUXURY: {
  background: string;
  contactImage: string;
} = {
  background: "/Contact/Contact_Bg.webp",
  contactImage: "/Contact/contact.webp",
};

export function contactImages(theme: "premium" | "luxury") {
  return theme === "luxury" ? CONTACT_IMAGES_LUXURY : CONTACT_IMAGES_PREMIUM;
}

// Contact banner images
export const CONTACT_BANNER_IMAGES_PREMIUM = {
  banner: "/Contact/Contact_Banner.webp",
} as const;

/** Luxury banner – same paths as premium until you swap assets */
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