/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        allura: ['var(--font-allura)']
      },
      keyframes: {
        "slide-right": {
          from: {
            transform: "none"
          },
          to: {
            transform: "translateX(calc(var(--i)+100)%)"
          }
        }
      }

    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}
