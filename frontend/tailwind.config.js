/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'custom-heading': "max(3.7vw, 20px)",
        'custom-paragraph': "max(1vw, 13px)",
        'custom-exploreMenuItems': "max(1.4vw, 16px)",
        'custom-foodDisplay': "max(2vw,24px)",
      },
      width: {
        'custom-popupWidth': "max(23vw,330px)",
        'custom-buttonWidth-1': "max(15vw,200px)",
        'custom-buttonWidth-2': "max(10vw,150px)"
      },
      keyframes: {
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      gridTemplateColumns: {
        'foodListGrid': 'repeat(auto-fill, minmax(240px,1fr))'
      },
      gap: {
        'custom-gap': 'max(12vw,20px)'
      }
    },
  },
  plugins: [],
}