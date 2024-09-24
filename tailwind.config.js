/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGreen: "#20B2AA",
        lightBlue: "#2071B2",
        borderGray: "#888888",
      },
    },
  },
  plugins: [],
};
