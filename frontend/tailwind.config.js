/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {}, // This is now empty, as we have no custom styles
  },
  plugins: [], // This is now empty, as we have no custom plugins
};
