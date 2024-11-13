import defaultTheme from "tailwindcss/defaultTheme";
import colors, { white } from "tailwindcss/colors";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        primaryBackground:
          // "linear-gradient(90deg, #d4e4fe 30%, #ffffff 60%, #ffff 80%)",
          "white",
        cardBg: "#1A1A1A",
        tagBg: "#333333",
        buttonGreen: "#00D084",
        textGray: "#CCCCCC",
      },
    },
  },
  plugins: [addVariablesForColors],
};

// Function to add color variables to :root
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}
