/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roobert: ['"Roobert"', "sans-serif"],
      },
      colors: {
         eerie: {
          DEFAULT: '#1A1B1C',           
          60: 'rgba(26, 27, 28, 0.6)',  
          40: 'rgba(26, 27, 28, 0.4)', 
        },
        bluegray: '#A0A4AB',
      },
    },
  },
  plugins: [],
};
