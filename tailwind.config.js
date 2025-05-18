/** @type {import('tailwindcss').Config} */
module.exports = {
  // Content paths to scan for Tailwind utility classes
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    // Add other directories if needed, like components or shared UI libraries
  ],
  
  // Custom theme configuration
  theme: {
    extend: {
      // Custom color palette
      colors: {
        primary: "#1DA1F2",
        secondary: "#6366F1",
        accent: "#F59E0B",
        muted: "#64748B",
        background: "#F3F4F6",
      },

      // Custom spacing
      spacing: {
        128: "32rem",
        144: "36rem",
        160: "40rem",
      },

      // Custom font families
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },

      // Custom breakpoints
      screens: {
        xs: "480px",
        "2xl": "1536px",
      },

      // Custom border radius
      borderRadius: {
        xl: "1rem",
        "2xl": "2rem",
        "3xl": "3rem",
      },
    },
  },

  // Plugins for additional utilities
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
