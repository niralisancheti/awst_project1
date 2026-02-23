/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#353535',
        secondary: '#3c6e71',
        accent: '#284b63',
        light: '#d9d9d9',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}
