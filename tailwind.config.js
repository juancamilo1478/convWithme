/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(126deg, rgba(26,29,27,1) 0%, rgba(40,93,80,1) 80%, rgba(51,138,118,1) 100%)',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'], // Define la fuente "Nunito"
      },
      colors: {
        brand: {
          colorOne: '#4ED4B7', // Color personalizado 1
          colorTwo: '#0fa9e6', // Color personalizado 2
          colorThree: '#0c87b8', // Color personalizado 3
        },
      },
    },
  },
  plugins: [],
};
