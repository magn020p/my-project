/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      dark: {
        800: "#262525",
        500: "#363030",
      },
      pink: {
        800: "#FFC0CB",
        500: "#FFD3DB",
        200: "#FFE0E5",
      },
      blue: {
        800: "#90D1ED",
        500: "#B1DFF2",
      },
      white: {
        800: "#F8F8F8",
        500: "#D4D4D4",
      },
    },
    fontFamily: {},
    extend: {},
  },
  plugins: [],
};
