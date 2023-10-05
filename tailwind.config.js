/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        black: "#000",
        primary: "#141F1F",
        secondary: "#0e1515",
        farblue: "#7DF9FF",
        farash: "#A5B3B3",
        farlightash: "#7F9192",
      }
  },

    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    }
  },
  plugins: [],
}

