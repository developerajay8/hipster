/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'left': '-5px 0 5px blueviolet'
, // Custom shadow class
      },
    },
  },
  plugins: [],
}