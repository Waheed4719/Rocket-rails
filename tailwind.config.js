/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: media, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryColor: "rgba(79, 70, 229, 1)",
      },
    },
  },
  plugins: [],
};
