/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        bodybg: "#9CAFB7",
        headerText: {
          100: "#EB3624",
          200: "#EB2114",
          300: "#EA1116"
        }
      }
    },
  },
  plugins: [],
}

