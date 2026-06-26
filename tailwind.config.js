/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["var(--font-cormorant-sc)", "Cormorant SC", "serif"],
        montserrat: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        poppins: ["var(--font-poppins)", "Poppins", "sans-serif"],
        "poppins-light": ["var(--font-poppins-extralight)", "Poppins", "sans-serif"],
        "cormorant-garamond": ["var(--font-cormorant-garamond)", "Cormorant Garamond", "serif"],
        "cormorant-garamond-medium": ["var(--font-cormorant-garamond-medium)", "Cormorant Garamond", "serif"],
        "cormorant-garamond-italic": ["var(--font-cormorant-garamond-italic)", "Cormorant Garamond", "serif"],
        "roboto-slab": ["var(--font-roboto-slab)", "Roboto Slab", "serif"],
        "gfs-didot": ["var(--font-gfs-didot)", "GFS Didot", "serif"],
        "the-seasons": ["var(--font-the-seasons)", "The Seasons", "serif"],
        "the-seasons-bold": ["var(--font-the-seasons-bold)", "The Seasons", "serif"],
      },
    },
  },
  plugins: [],
};
