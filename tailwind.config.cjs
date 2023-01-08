/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,vue}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Beatrice', 'sans-serif'],
      serif: ['Butler', 'serif'],
      body: ['Beatrice', 'sans-serif'],
    }
  },
  plugins: [
      require('flowbite/plugin'),
  ],
}
