/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-pink": "#FFE4E1",
        "light-pink-2": "#DCAE96",
        "dark-gray": "#36454F",
        "transparent-white": "rgba(255, 255, 255, 0.6)",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
