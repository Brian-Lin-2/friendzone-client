/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-pink": "#FFE4E1",
        pink: "#FFD1CE",
        "dark-pink": "#FFBCBB",
        "active-pink": "#B87E66",
        "transparent-pink": "rgba(255, 228, 225, 0.5)",
        "light-gray": "#E4DDD8",
        gray: "#DED1CB",
        "dark-gray": "#D1C6BF",
        "font-gray": "#36454F",
        "transparent-white": "rgba(255, 255, 255, 0.6)",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
