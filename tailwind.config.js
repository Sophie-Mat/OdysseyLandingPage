/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      backgroundImage: {
        'pageBackground': "url('./assets/background.png')",
      },
      colors: {
        'regal-blue': '#007dbe',
        'light-odi-blue':'#55b4e6'
      },
      shapeOutside: {
        wave: 'polygon(0 0, 0 10%, 70% 30%, 100% 0, 0 0)',
      },
      fontFamily: {
        'playpen-sans': ['Playpen Sans', 'cursive'],
      },
    },
  },
  plugins: [],
}

