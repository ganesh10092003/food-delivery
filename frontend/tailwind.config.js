/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'custom-heading': "max(4.5vw, 22px)",
        'custom-paragraph': "max(1vw, 13px)",
        'custom-exploreMenuItems': "max(1.4vw, 16px)"
      },
      keyframes: {
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}