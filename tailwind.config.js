// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        primaryBackground:
          "linear-gradient(90deg, #d4e4fe 30%, #ffffff 60%, #f3d1ff 100%)",

        cardBg: "#1A1A1A",
        tagBg: "#333333",
        buttonGreen: "#00D084",
        textGray: "#CCCCCC",
      },
    },
  },
  plugins: [],
};
