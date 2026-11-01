/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vintage: {
          espresso: '#29190F',
          darkChocolate: '#3B2519',
          ivory: '#F7F0E3',
          champagne: '#C5A46D',
          antiqueGold: '#A78650',
          softBeige: '#E8D9C2',
          mutedBrown: '#80664D',
          cardBg: '#21140B',
          lightIvory: '#FAF6EE',
          goldBorder: '#B8945A',
          goldHighlight: '#E6D3A3',
          warmPaper: '#F3ECE0',
        }
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      boxShadow: {
        'vintage-card': '0 10px 30px -5px rgba(20, 10, 5, 0.4), 0 0 0 1px rgba(197, 164, 109, 0.25)',
        'vintage-glow': '0 0 25px rgba(197, 164, 109, 0.3)',
        'wax-seal': '0 4px 10px rgba(0,0,0,0.5), inset 0 2px 3px rgba(255,255,255,0.4), inset 0 -2px 3px rgba(0,0,0,0.4)',
        'envelope-depth': '0 15px 35px rgba(0, 0, 0, 0.6), 0 5px 15px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'vintage-texture': "radial-gradient(ellipse at center, rgba(59,37,25,0.3) 0%, rgba(41,25,15,0.95) 100%)",
      }
    },
  },
  plugins: [],
}
