/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./wp-content/themes/fred/templates/**/*.twig",
    "./wp-content/themes/fred/templates/*.twig",
    "./wp-content/themes/fred/*.{php,html,js,twig}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}