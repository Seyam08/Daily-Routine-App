/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Mid-White': '#FCF6F5FF',
        'Sky-Blue' : '#89ABE3FF'
      },
    },
  },
  plugins: [],
}

