/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'gray': "#1d1c1f",
      'dark-gray': "#131214",
      "primary": "#B5A1E5",
      "white":"#ffffff",
      "light-white": "#E5DADD",
      "darker-gray": "#1a191c"
    },
    extend: {
      keyframes: {
        grow: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' }
        }
      },
      animation: {
        'a-grow': "0.5s ease-out 0s 1 grow"
      },
    },
  },
  plugins: [],
}
