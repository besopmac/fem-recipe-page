/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'rose': {
        '50': '#FFF7FB',
        '800': '#7A284E'
      },
      'stone': {
        '100': '#F3E5D7',
        '150': '#E3DDD7',
        '600': '#5F564D',
        '900': '#312E2C'
      },
      'brown': {
        '800': '#854632'
      }
    }
  },
  plugins: [],
}

