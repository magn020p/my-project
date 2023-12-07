/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      purple: "#3f3cbb",
      dark: {
        800: "#262525",
        500: "#353030",
        200: "#F6F6F6",
      },
      secondary: {
        800: "#FFC0CB",
        500: "#F8F8F8",
        200: "#B1DFF2",
      },
    },
    extend: {},
  },
  plugins: [],
};
