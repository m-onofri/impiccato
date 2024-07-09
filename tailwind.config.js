/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'platinum': '#e6e8e6',
        'timberwolf': '#ced0ce',
        'ash-gray': '#9fb8ad',
        'feldgrau': '#475841',
        'onyx': '#3f403f'
      },
    },
  },
  plugins: [],
}

