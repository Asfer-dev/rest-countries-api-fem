/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      primary: ["Nunito Sans", "sans-serif"],
    },
    extend: {
      colors: {
        background: "hsl(0, 0%, 98%)",
        input: "hsl(0, 0%, 52%)",
        "body-text": "hsl(200, 15%, 8%)",
        "elements-dark": "hsl(209, 23%, 22%)",
        "background-dark": "hsl(207, 26%, 17%)",
      },
    },
  },
  plugins: [],
};
