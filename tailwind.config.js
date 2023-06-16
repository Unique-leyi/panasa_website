/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {},
    colors: {
      siteblue: '#8eb2fd',
      sitepink: '#f490b4',
      sitepurple: '#7e6cff',
      sitegreen: '#26954a',
      darkpink: '#ef5d92',
      darkpurple: '#614dff',
      darkblue: '#4f86fc',
      deep: 'rgb(17, 24, 39)',
      white: '#fff', 
      ash: '#f3f4f6',
    },
    
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      merri: ["Merriweather", "serif"],
      fairDisplay: ["ConfigPlayfair Display", "serif"],
    },
  },
  plugins: [],
}
