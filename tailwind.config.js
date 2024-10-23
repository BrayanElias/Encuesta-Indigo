/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#233758"
      },
      fontFamily: {
        onest: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}

