/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#DEDFE1",
          2: "#B3B7C5",
          3: "#666F8D",
          4: "#2E3757",
          5: "#465486",
          6: "#DAA520",
          7: "#38393D",
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },
      },
      boxShadow: {
        1: "6px 6px 12px 0px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
