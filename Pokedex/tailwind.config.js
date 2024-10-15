/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
        primary: {
          light: '#F67280',
          dark: '#FF204E'
        },
        secundary: {
          light: '#C06C84',
          dark: '#A0153E'
        },
        third: {
          light: '#6C5B7B',
          dark: '#5D0E41'
        },
        fourth: {
          light: '#355C7D',
          dark: '#00224D'
        },
      },
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

