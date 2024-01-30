/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
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
  presets: [keepPreset],
}

