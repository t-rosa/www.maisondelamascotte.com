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
        "marquee": {
          from: {
            transform: "translateX(0)"
          },
          to: {
            transform: "translateX(-100%)"
          }
        },
        "marquee2": {
          from: {
            transform: "translateX(100%)"
          },
          to: {
            transform: "translateX(0)"
          }
        }
      },
      animation: {
        marquee: 'marquee 60s linear infinite',
        "marquee2": 'marquee2 60s linear infinite'
      }

    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}
