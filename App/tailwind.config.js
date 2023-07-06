/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      sm: "480px",  // (max-width: 480px)
      md: "768px",   // (max-width: 768px) 
      lg: "976px",   // (max-width: 976px)
      xl: "1440px"   // (max-width: 1440px)

    },
    extend: {
      fontSize: {
        xs: "0.5rem",
        sm: "0.75rem",
        base: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",

      },
      colors: {
        bodybg: "#C2FFFF",
        headerText: {
          100: "#890505",
          200: "#672525",
          300: "#533C3Cs"
        }
      }
    },
    spacing: {
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
    },
  },
  plugins: [],
}

