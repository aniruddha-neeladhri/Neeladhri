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
      },
    },
  },
  plugins: [],
};
