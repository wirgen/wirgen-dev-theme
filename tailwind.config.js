const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./html/**/*.html'],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        'xl': { 'min': '1280px' },
        '2xl': {},
      },
      colors: {
        primary: colors.teal,
        gray: colors.coolGray,
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        normal: 300,
        medium: 400,
        bold: 600,
        extrabold: 700,
      },
      minHeight: {
        'screen/2': '50vh',
      },
    },
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
