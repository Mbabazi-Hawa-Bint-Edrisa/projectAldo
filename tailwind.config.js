/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    './src/**/*.{js,jsx,html}',
    flowbite.content(),
  ],

  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}
