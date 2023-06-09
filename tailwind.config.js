/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    placeholderColor: theme => theme('colors'),
    placeholderColor: {
    'primary': 'text-blue-800',
    'secondary': '#ffed4a',
    'danger': '#e3342f',
    },
    extend: {},
  },
  plugins: [],
}

