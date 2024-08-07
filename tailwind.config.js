/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'micro': '8px', // Or any desired value
        'nano':'6px'
      },
    },
  },
  plugins: [],
}

